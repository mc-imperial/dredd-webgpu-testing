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

# Build Dredd
Get Clang and LLVM:
```
sudo apt install -y libzstd-dev
cd external/dredd/third_party
curl -Lo clang+llvm.tar.xz https://github.com/llvm/llvm-project/releases/download/llvmorg-17.0.6/clang+llvm-17.0.6-x86_64-linux-gnu-ubuntu-22.04.tar.xz
tar xf clang+llvm.tar.xz
rm -rf clang+llvm
mv clang+llvm-17.0.6-x86_64-linux-gnu-ubuntu-22.04 clang+llvm
rm clang+llvm.tar.xz
cd ..
```

Build Dredd:
```
mkdir build && cd build
cmake -G Ninja .. -DCMAKE_BUILD_TYPE=Release
cmake --build . --config Release
cp src/dredd/dredd ../third_party/clang+llvm/bin
```
Check it worked:

```
dredd/third_party/clang+llvm/bin/dredd --help
```

# Mutate the subject

The mutation subject can be Dawn or Mesa. 

First, get *two* checkouts of the subject version that you want to mutate. Build a `mutated` and `tracked` version once without any Dredd intervention in order to produce a compile commands database. For Mesa:
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

Next, use the script to build and mutate the mutated and tracked subjects. This will:
- Perform a clean build with the required build options
- Inject mutants into the mutation version of the subject
- Inject mutant coverage instrumentation into the tracking version of the subject

```
cd dredd-webgpu-testing
source venv/bin/activate
cd src
python -m mutate mesa /path/to/mesa_mutated /path/to/mesa_tracked \
    --mutation_dir src/gallium/drivers/llvmpipe \
    --dredd /path/to/dredd
```

If the mutation subject is Mesa, then in order to continue you must also build a single version of Dawn to run the CTS.

# Run test-wise mutant tracking

For efficient killing, we want to know which CTS tests `touch` which mutants. By `touch`, we mean that the code containing the mutant is executed during the test execution. This will allow us to target our testing later on.

For this, we need to use instrumented versions of the CTS and the Dawn harness for running the CTS, which will allow us to track precisely which test is executing code containing each mutant.

The patch to instrument the CTS is here:
#TODO

And the patch to instrument Dawn is here:
`src/track/dawn_mutant_tracking.diff`

Apply the patches like this:
```
cd dawn
git checkout -b tracking
git apply /path/to/dawn_mutant_tracking.diff
```

There is no need to rebuild Dawn or the CTS. The patch is applied to a Go harness in Dawn that is not part of the build, and the CTS will re-build itself automatically upon running when it detects changes.

Next, run mutant tracking:

```
cd dredd-webgpu-testing
source venv/bin/activate
cd src
python -m track \
    /path/to/mesa/tracked/vk_icd \
    /path/to/instrumented_cts \
    /path/to/instrumented_dawn \
    --query 'webgpu:shader,execution,shadow:while:*'
```
