import os
import subprocess
from pathlib import Path


def main():

    base_dir = Path('/data/dev/dredd-webgpu-testing')
    mutation_script_path = Path(base_dir, 'scripts/mutation/mutate_tint.sh')

    dawn_mutated = Path('/data/dev/dawn_mutated')
    dawn_coverage = Path('/data/dev/dawn_mutant_tracking')
    # Mutate - first must ensure that no mutants exist already
    make_dawn_clean(dawn_mutated, dawn_coverage)
    exit()
    mutate(mutation_script_path)

    # Check CTS mutant coverage
    (covered, uncovered) = get_mutant_coverage()

    # Kill mutants

    # Option 1: Kill uncovered mutants

    # Option 2: Kill covered and surviving mutants



def make_dawn_clean(mutated : Path, coverage : Path) -> bool :

    '''
    If mutations exist already in the mutated or coverage
    Dawn checkouts, then restore them so that we don't
    compound mutations (this will cause errors)
    '''

    if mutants_exist(mutated):
        restore(mutated)
         
    if mutants_exist(coverage):
        restore(coverage)

    # Check for mutants again to ensure they have been removed
    if  mutants_exist(mutated) or mutants_exist(coverage):
        return False

    return True


def mutants_exist(src : Path) -> bool :

    find_files = subprocess.Popen(['find',str(src),'-name','*.cc'], stdout=subprocess.PIPE)
    find_dredd = subprocess.Popen(['xargs','grep','dredd'], stdout=subprocess.PIPE, stdin=find_files.stdout)
    dredd_count = subprocess.run(['wc', '-l'], stdin=find_dredd.stdout, capture_output=True)
    
    print(f'Dredd mentions in "{src}" is: {int(dredd_count.stdout)}')

    return False if (int(dredd_count.stdout)==0) else True
    


def mutate(script : Path) -> int :

    '''
    Script contains the following steps:
        # Mutate Dawn
        # Mutate with coverage
        # Re-build Dawn
        # Re-build WGSLsmith
    '''

    cmd = [str(mutation_script_path)]

    result = subprocess.run(cmd)

    return result.returncode

def restore(src : Path) -> bool:
    print('Not implemented!')
    exit()


def get_uncovered_mutants() -> tuple[int,int]:
    return (0, 0)


if __name__=="__main__":
    main()