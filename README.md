# dredd-webgpu-testing

Scripts to apply the Dredd mutation testing framework to the WebGPU CTS.

# Build 

## Get and build Dredd

https://github.com/mc-imperial/dredd

## Clone the WebGPU CTS

https://github.com/gpuweb/cts

## Get and build Dawn

Build twice with compilation database
- Mutated
- Mutant coverage

https://dawn.googlesource.com/

## Get WGSLsmith
Build twice linked to each Dawn version
- Mutated
- Mutant coverage

https://github.com/ambergorzynski/wgslsmith/tree/abstract_numerics

## Install the testing scripts

```
cd ${DREDD_EXPERIMENTS_ROOT}
git clone https://github.com/mc-imperial/dredd-webgpu-testing.git
cd dredd-webgpu-testing
pip -m venv venv
source venv/bin/activate
pip install -e .
```

# Run 

TL;DR 

Running options can be configured within `run/__main__.py`
```
cd ${DREDD_WEBGPU_TESTING}
source venv/bin/activate
python run
```

## Mutate Dawn
Use Dredd to:
- Inject mutants into ${DAWN_MUTATED}
- Inject mutant coverage instrumentation into ${DAWN_MUTANT_COVERAGE}

Re-build each version of Dawn. You may encounter an error if the -Werror flag is set in the Dawn builds, which treats all warnings as errors. This is because the mutated code will cause many warnings. To fix this, find all locations in the Cmake files where the -Werror flag is set and remove it. Usually this includes `${ROOT}/CMakeLists.txt` and `${ROOT}/src/tint/CMakeLists.txt`

Re-build each version of WGSLsmith linked to the corresponding Dawn.

## Check CTS mutant coverage

Run the CTS using ${DAWN_MUTANT_COVERAGE} to determine which mutants are covered. This should be relatively quick.

## Kill mutants

The aim is to use WGLSsmith to kill mutants that are not killed by the WebGPU CTS. There are several mutant-killing workflows that can be used.
- Workflow 1: Use WGSLsmith to kill mutants that are uncovered by the CTS. Mutants that are not covered by the CTS cannot be killed by the CTS. Run WGSLsmith on the set of uncovered mutants.
- Workflow 2: Use WGLSsmith to kill covered mutants that survive the CTS. First run the CTS on the set of covered mutants to determine which ones are killed by the CTS. The remaining mutants are said to have survived. Run WGSLsmith on the surviving mutants. This option takes longer because it is necessary to first run the WebGPU CTS exhaustively on the covered mutants.

### Workflow 1: Use WGSLsmith to kill mutants that are uncovered by the CTS

Preliminary testing shows that all mutants that are covered by a sample of 100 WGSLsmith tests are also covered by the CTS. This workflow should be explored further if WGSLsmith is extended to cover more of WGSL.

### Workflow 2: Use WGSLsmith to kill covered mutants that survive the CTS

The idea is to:
1. Run the CTS on the set of covered mutants and determine which are killed
2. Run WGSLsmith on the surviving mutants
3. Save mutant-killing WGSLsmith tests

However, step 1 takes a very long time because there are thousands of covered mutants and the full CTS must be run (30 min) to be sure that a given mutant has survived.

To address the time problem we can use two options:
- Option 1: Sampling
    - Find the set of mutants that are covered by the CTS and a reasonable sample of WGSLsmith tests
    - Run the CTS on a sample of these mutants
    - Run WGSLsmith on any surviving mutants in the sample 

- Option 2: Targeted testing
    - Determine which tests cover which mutants. Do this by:
        - TODO: Extend the information gathered by Dredd during mutant tracking so that rather than recording a list of mutants covered during a given execution, it also records which test(s) covered the mutant
        - TODO: Before each CTS test is run, change DREDD_MUTATION_TRACKING_FILE so that the covered mutant IDs get written to a test-specific file. Each file will record the mutant IDs covered by that test.
        - The output is a file listing which mutants are covered by which tests
    - Use the output to strategically target testing e.g. picking mutants that are only covered by a small number of tests and are therefore quick to check whether they are killed.

## Convert mutant-killing programs to CTS tests

The above process should result in a set of WGSLsmith programs that can kill mutants that survive the CTS. Convert these programs into CTS-format tests.

TODO