import os
import subprocess
from pathlib import Path

from cts.utils import get_mutant_coverage
import wgslsmith.kill_mutants

def main():

    base_dir = Path('/data/dev/dredd-webgpu-testing')
    output_dir = Path('/data/work/webgpu/testing')

    mutation_script_path = Path(base_dir, 'scripts/mutation/mutate_tint.sh')
    vk_icd="/data/dev/mesa/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json" 
    dawn_vk="dawn:vk:0"
    timeout=60

    cts_repo = Path('/data/dev/webgpu_cts')

    dawn_mutated = Path('/data/dev/dawn_mutated')
    dawn_coverage = Path('/data/dev/dawn_mutant_tracking')

    wgslsmith_mutated = Path('/data/dev/wgslsmith_mutated_dawn')
    wgslsmith_coverage = Path('/data/dev/wgslsmith_mutant_coverage_dawn')

    file_to_mutate = Path('src/tint/lang/spirv/writer/ast_printer/ast_printer.cc')

    mutation_info_file = Path(dawn_mutated, 'dawn_mutated.json')
    mutation_info_file_for_coverage = Path(dawn_coverage, 'dawn_tracking.json')

    covered_mutants_path = Path(output_dir, '__dredd_covered_mutants')

    kill_uncovered_mutants_first : bool = True # param to select whether we use wgslsmith to kill uncovered mutants first

    
    # Ensure that no mutants exist already in the files
    if not make_dawn_clean(dawn_mutated, dawn_coverage):
        print('Error!')
        return

    mutate(mutation_script_path, 
        file_to_mutate,
        dawn_mutated,
        dawn_coverage)
    
    build_wgslsmith(wgslsmith_mutated, dawn_mutated)
    build_wgslsmith(wgslsmith_coverage, dawn_coverage)

    

    # Check CTS mutant coverage for given query
    query = 'webgpu:shader,execution,flow_control,loop:*'

    (covered, uncovered) = get_mutant_coverage(mutation_info_file,
        covered_mutants_path,
        dawn_coverage,
        cts_repo,
        query,
        vk_icd)

    print(f'Covered mutants: \n{covered}')
    print(f'Uncovered mutants: \n{uncovered}')
    

    # Option 1: Kill uncovered mutants
    if kill_uncovered_mutants_first:
        print('Killing uncovered mutants first...')

        #TODO: tidy up arguments
        args =[str(mutation_info_file),
            str(mutation_info_file_for_coverage),
            f'{str(wgslsmith_mutated)}/target/release/wgslsmith',
            f'{str(wgslsmith_coverage)}/target/release/wgslsmith',
            f'{str(wgslsmith_mutated)}/target/release',
            str(output_dir),
            '--compile_timeout',
            str(timeout),
            '--run_timeout',
            str(timeout),
            '--vk_icd',
            vk_icd,
            '--dawn_vk',
            dawn_vk
        ]

    # Option 2: Kill covered and surviving mutants
    else:
        print('Not yet implemented!')
        pass


def make_dawn_clean(mutated : Path, coverage : Path) -> bool :

    '''
    If mutations exist already in the mutated or coverage
    Dawn checkouts, then restore them so that we don't
    compound mutations (this will cause errors)
    '''

    # Find list of files containing Dredd intrumentation and restore
    for src in [mutated, coverage]:
        dredd_files = find_dredd_files(src)
        if len(dredd_files) != 0:
            print(f'Restoring {src} with files: {dredd_files}')
            if not restore(src, dredd_files):
                print('Restoration error! Aborting')
                return False

    # Check for mutants again to ensure they have been removed
    if  mutants_exist(mutated) or mutants_exist(coverage):
        return False

    return True

def find_dredd_files(src : Path) -> list[Path] :

    find_files = subprocess.Popen(['find',str(src),'-name','*.cc'], stdout=subprocess.PIPE)
    dredd_files = subprocess.run(['xargs','grep','-l','dredd'], stdin=find_files.stdout, capture_output=True, text=True)

    # Convert to list of paths and remove trailing newline from captured output
    dredd_files = dredd_files.stdout.strip('\n').split('\n')

    dredd_files = [Path(x) for x in dredd_files if x != '']

    return dredd_files

def mutants_exist(src : Path) -> bool :

    find_files = subprocess.Popen(['find',str(src),'-name','*.cc'], stdout=subprocess.PIPE)
    find_dredd = subprocess.Popen(['xargs','grep','-l','dredd'], stdout=subprocess.PIPE, stdin=find_files.stdout)
    dredd_count = subprocess.run(['wc', '-l'], stdin=find_dredd.stdout, capture_output=True)
    
    print(f'Number of files that contain "dredd" in "{src}" is: {int(dredd_count.stdout)}')

    return False if (int(dredd_count.stdout)==0) else True
    
def mutate(mutation_script : Path, 
            file_to_mutate : Path,
            dawn_mutated : Path,
            dawn_coverage : Path) -> int :

    '''
    Script contains the following steps:
        # Mutate Dawn
        # Mutate Dawn with coverage
        # Re-build Dawn
        # Re-build Dawn with coverage
    '''

    cmd = [str(mutation_script),
        str(file_to_mutate),
        str(dawn_mutated),
        str(dawn_coverage)]

    result = subprocess.run(cmd)

    return result.returncode

def build_wgslsmith(wgslsmith : Path, dawn : Path):

    cmd = [str(Path(wgslsmith, 'build.py')),
        '--dawn-path',
        str(dawn)]

    result = subprocess.run(cmd, cwd=wgslsmith)
    exit()
    return result.returncode


def restore(git_path : Path, files : list[str]) -> bool:

    for file in files:
        cmd = ['git',
            '-C',
            str(git_path),
            'restore',
            str(file)]

        result = subprocess.run(cmd)

        if result.returncode != 0:
            return False

    return True


def get_uncovered_mutants() -> tuple[int,int]:
    return (0, 0)


if __name__=="__main__":
    main()