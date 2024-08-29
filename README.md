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
- Use WGSLsmith to kill mutants that are uncovered by the CTS: Mutants that are not covered by the CTS cannot be killed by the CTS. Run WGSLsmith on the set of uncovered mutants.
- Use WGLSsmith to kill covered mutants that survive the CTS: First run the CTS on the set of covered mutants to determine which ones are killed by the CTS. The remaining mutants are said to have survived. Run WGSLsmith on the surviving mutants. This option takes longer because it is necessary to first run the WebGPU CTS exhaustively on the covered mutants.

### Use WGSLsmith to kill mutants that are uncovered by the CTS

TODO

### Use WGSLsmith to kill covered mutants that survive the CTS

TODO

## Convert mutant-killing programs to CTS tests

The above process should result in a set of WGSLsmith programs that can kill mutants that survive the CTS. Convert these programs into CTS-format tests.

TODO