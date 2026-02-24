# dredd-webgpu-testing

Generate new tests for the WebGPU CTS using mutation testing and fuzzing.

# Build 

Prerequisites:
- Python 3.10
- pip

Note you must clone recursively in order to get the submodules.
```
git clone --recursive --depth 1 https://github.com/mc-imperial/dredd-webgpu-testing.git && cd dredd-webgpu-testing
```

Next, create a Python virtual environment and install the dependencies, which are listed in `pyproject.toml`.
```
python -m venv venv
source venv/bin/activate
pip install . 
```

# Build modified CTS and Dawn for mutant touching analysis

For efficient killing, we want to know which CTS tests `touch` which mutants. By `touch`, we mean that the code containing the mutant is executed during the test execution. This will allow us to target our testing later on.

For this, we need to use instrumented versions of the CTS and the Dawn harness for running the CTS, which will allow us to track precisely which test is executing code containing each mutant.

Get the instrumented CTS here:
```
git clone https://github.com/ambergorzynski/webgpu_cts.git
cd webgpu_cts
git checkout mutant_tracking
npm install
```

Dawn is very frequently updated. We modify it on a fork that mirrors the official Dawn repo. The Dawn repo makes releases in the form of branches, which we mirror in the fork as release/chromium/xxxx. Our modifications are on the corresponding tracking/chromium/xxxx branch.
```
git clone https://github.com/ambergorzynski/dawn.git
cd dawn
git checkout tracking/chromium/xxxx
```

## Build Dredd
Follow the instructions to build Dredd from source [here][https://github.com/mc-imperial/dredd]

## Build Mesa

First, get *two* checkouts of the Mesa version that you want to mutate. Build a `mutated` and `tracked` version once without any Dredd intervention in order to produce a compile commands database. For Mesa:
```
git clone https://gitlab.freedesktop.org/mesa/mesa.git mesa_mutated
git clone https://gitlab.freedesktop.org/mesa/mesa.git mesa_tracked
```

Follow the build instructions. For Ubuntu 24.04, first get the Mesa prerequisites:
```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
sudo apt-get build-dep mesa
```

Install SPIRV-Tools (for Ubuntu 24.04 or see instructions [here](https://vulkan.lunarg.com/doc/sdk/1.4.313.0/linux/getting_started_ubuntu.html) to install the Vulkan SDK):
```
wget -qO- https://packages.lunarg.com/lunarg-signing-key-pub.asc | sudo tee /etc/apt/trusted.gpg.d/lunarg.asc
sudo wget -qO /etc/apt/sources.list.d/lunarg-vulkan-noble.list http://packages.lunarg.com/vulkan/lunarg-vulkan-noble.list
sudo apt update
sudo apt install vulkan-sdk
```
## Run the build script to ensure commits are aligned

```
cd src
python -m build.build
```

# Mutate

## Mutate Mesa
Use the script to mutate the mutated and tracked subjects. This will:
- Perform a clean build with the required build options
- Inject mutants into the mutation version of the subject
- Inject mutant coverage instrumentation into the tracking version of the subject

The `--reset` option is necessary for test-wise tracking.

```
cd dredd-webgpu-testing
source venv/bin/activate
cd src
python -m mutate mesa /path/to/mesa_mutated /path/to/mesa_tracked \
    --mutation_dir src/compiler/nir \
    --dredd /path/to/dredd \
    --reset
```

# Run test-wise mutant tracking

Run all tests within the given query in tracking mode. The output will be:
- A tracking file corresponding to each individual test that lists the mutant IDs that that test touches. For larger queries or the full CTS, the number of files is very large and so the output is compressed.
- A mapping from mutant ID to the list of test that touches that mutant (i.e. the inverse of the relation in the tracking files)
- A copy of the stdout recording the outcome of each individual test (pass/fail/skip)

```
cd dredd-webgpu-testing
source venv/bin/activate
cd src
../scripts/track.sh
```

The relevant python command (this will not record the stdout) is:
```
python -m track cts \
    --vk-icd /path/to/mesa/tracked/vk_icd \
    --dawn /path/to/dawn \
    --cts /path/to/cts \
    --output /path/to/save/tracking/files \
    --query 'webgpu:*'
```

This will save out a csv file containing a mapping from each touched mutants to a list of queries that touch it, which will enable us to target mutants efficiently in the killing steps.

## Filter initialisation mutants

Some mutants will appear to be touched by only a few tests, which implies that they are good candidates for killing. But this may be because they are associated with initialisation code (e.g. setting up shared devices) and therefore are potentially touchable by many tests. We want to exclude these mutants.

We identify potential initialisation mutants by running a set of queries in two modes: once in isolation, and once as part of the parent query group. We compare the mutants touched by the query in each mode. Mutants that are touched in isolation mode but *not* in group mode are likely to be initialisation mutants. 

Run the following to get a list of mutant IDs that are likely to be initialisation mutants and should therefore be excluded from our analysis.

```
python -m track cts \
    --vk-icd /path/to/mesa/tracked/vk_icd \
    --dawn /path/to/dawn \
    --cts /path/to/cts \
    --output /path/to/save/tracking/files \
    --identify-initialisation-ids \
    --query 'webgpu:*'
```

# Find mutants that are covered by WGSLsmith

For efficiency, we do not want to use resources on mutants that WGSLsmith will not be able to eventually kill. So, we run a sample of e.g. 50 WGSLsmith tests to see which mutants they touch. This will be used to target our CTS mutant killing.

First, build WGSLsmith (note just build WGSLsmith, not the harness or reducer):
```
git clone https://github.com/ambergorzynski/wgslsmith.git
cd wgslsmith
git checkout abstract_numerics
./build.py --no-reducer --no-harness
export PATH=/path/to/wgslsmith/target/release:$PATH
wgslsmith --help
```

Next, use WGSLsmith to generate WGSL shaders. Run them using a standalone test harness on the mutated subject (e.g. Mesa) and check which mutants are covered. We don't need a test-specific coverage here, just the aggregate coverage. The command below will output a single file containing a list of all unique mutant IDs that were touched by at least one of the WGSLsmith tests.

```
cd dredd-webgpu-testing
source venv/bin/activate
cd src
python -m track wgslsmith \
    /path/to/mesa/tracked/vk_icd \
    /path/to/instrumented_dawn \
    --wgslsmith_sample 100
``` 

# Identify mutants that are not killed by the CTS

The next step is to try to kill mutants using the CTS. We choose the mutants that are:
(a) Touched by only a small number of CTS tests. This means it is quick to determine whether the mutant can be killed by the CTS or not.
(b) Touched by a sample of WGSLsmith tests. This ensures that when we use WGSLsmith to try and kill the mutant, we have some reasonable chance of at least touching it.

```
cd dredd-webgpu-testing
source venv/bin/activate
cd src
python -m kill \
    /path/to/infofilemutated \
    /path/to/infofiletracked \
    /path/to/mesa/mutated/vk_icd \
    /path/to/mesa/tracked/vk_icd \
    /path/to/dawn \
    --cts /path/to/cts \
    --map /path/to/mutant_to_test_mapping.csv \
    --wgslsmith_touched /path/to/touched.txt \
    --sample 5
```
