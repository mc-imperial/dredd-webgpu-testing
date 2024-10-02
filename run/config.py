from pathlib import Path

### Directories ###

base_dir = Path('/data/dev/dredd-webgpu-testing')
output_dir = Path('/data/work/webgpu/testing/out_spirv')
cts_repo = Path('/data/dev/webgpu_cts')

### Dredd parameters ###

dawn_mutated = Path('/data/dev/dawn_mutated')
dawn_coverage = Path('/data/dev/dawn_mutant_tracking')

wgslsmith_mutated = Path('/data/dev/wgslsmith_mutated_dawn')
wgslsmith_coverage = Path('/data/dev/wgslsmith_mutant_coverage_dawn')

mutation_info_file = Path(dawn_mutated, 'dawn_mutated.json')
mutation_info_file_for_coverage = Path(dawn_coverage, 'dawn_tracking.json')

compile_commands_mutated = Path(dawn_mutated,'out/Debug/compile_commands.json')
compile_commands_coverage = Path(dawn_coverage,'out/Debug/compile_commands.json')

covered_mutants_path = Path(output_dir, '__dredd_covered_mutants')

#mutation_target = Path('src/tint/lang/core/ir/validator.cc') # mutate validator.cc file
mutation_target = Path('src/tint/lang/spirv') # mutate all files in the spirv lang folder

### WebGPU query ###

query = 'webgpu:*'
#query = 'webgpu:shader,execution,flow_control,*' # CTS query to use

### Set GPU driver ###

vk_icd="/data/dev/mesa/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json" 
dawn_vk="dawn:vk:0"
timeout=60

### Testing output info filepaths ###

reliable_tests = Path(output_dir, 'reliable_tests.json')
covered_by_wgslsmith_file = Path(output_dir, 'covered_by_wgslsmith.json')
mutation_files_output = Path(output_dir,'mutation_files.txt')
coverage_files_output = Path(output_dir,'coverage_files.txt')


### Script to perform mutation ###

mutation_script_path = Path(base_dir, 'scripts/mutation/mutate_tint_multiple_files.sh')

### Control flags ###

''' param to select whether we re-mutate (if True) or just skip 
    to testing if mutations are already in place (if False)
'''
mutate : bool = False 

''' param to select whether we rebuild wglsmith. 
    this is set to True if mutate is true
'''
rebuild_wgslsmith : bool = False

''' param to select whether cts mutant killing has already 
    been completed
'''
cts_killing_completed : bool = True 

''' param to select whether we refresh the CTS covered mutants
'''
refresh_cts_coverage : bool = False

''' param to scrape compile_commands.json to ensure that we only
    try to mutate files that are built as part of the original
    build process. This ensures that we don't attempt to mutate
    anything that wasn't built since Dredd won't have enough information
    and will silently fail
'''
scrape_mutation_files : bool = True 

''' param to select whether we use wgslsmith to kill uncovered mutants first
'''
kill_uncovered_mutants_first : bool = False 

''' param for number of processes to run in parallel for mutant killing
'''
n_processes = 1

''' param to choose to select a sample of mutants to kill
'''
sampling = True

''' param to get a list of mutants covered by 50 wgslsmith tests, 
    so we target mutants with the cts that are likely to be killable 
    by wgslsmith (to avoid finding a bunch of surviving mutants that 
    aren't even covered by wgslsmith)
    @refresh_wgslsmith_coverage re-calculates coverage using a sample
    even if a file already exists that records the wgslsmith mutant
    coverage (coverage is calculated by default if no file exists)
'''
get_mutants_covered_by_wgslsmith = True
refresh_wgslsmith_coverage = False