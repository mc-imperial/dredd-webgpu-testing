import subprocess
import os
from pathlib import Path
import numpy as np
import sys

from mutate_mesa import clean, get_files_for_mutation, mutate
from run.cts.utils import run_cts
from run.wgslsmith.utils import run_wgslsmith_program

def process_test_wise_tracking(tracking_dir : Path, output_dir : Path):
    
    # Want to end up with a mapping of mutant : list[tests that cover that mutant]
    # Loop through each mutant tracking file 
        # remove duplicate mutants
        # produce list of mutants covered by that test
        # take the union of all mutants to get our keys
    
    test_to_mutant_mapping = {}
    mutant_to_test_mapping = {}

    # Get list of mutants covered by each test
    for i,file in enumerate(tracking_dir.iterdir()):
        
        with open(file,'r') as f:
            mutants = f.readlines()
            mutants = [m.rstrip() for m in mutants]

        test_to_mutant_mapping[file.stem] = list(set(mutants))

    mutants = list(test_to_mutant_mapping.values())

    # Flatten list of mutants
    all_mutants = list(set([x for m in mutants for x in m]))

    all_mutants.sort()

    print(f'Total number of mutants: {len(all_mutants)}')

    # Get list of tests that cover each mutant
    all_mutants = all_mutants[3200:]
    for i, mutant in enumerate(all_mutants):
        print(f'Processing mutant number {i} with ID {mutant} of {len(all_mutants)}...')
        mutant_file = Path(output_dir, f'mutant_{mutant}.txt')
        tests = [test for test, mutants in test_to_mutant_mapping.items() if mutant in mutants]
        with open(mutant_file,'w') as f:
            f.writelines([f'{test}\n' for test in tests])


    '''
    # Make a mapping of tests to mutants where tests are the rows
    # and mutants are the columns

    # Test making arrays
    mutants = np.array([1,3])

    mutant_row = get_row_from_mutant_list(mutants)

    print(mutant_row)
    '''


def get_row_from_mutant_list(mutants):
    mask = np.zeros(mutants[-1] + 1, dtype=bool)
    return np.array([True if i in mutants else False for i, x in enumerate(mask)])


def track(mesa, dredd, mutation_dir, info_file, compile_commands):

    clean(mesa)

    mutation_files = get_files_for_mutation(compile_commands, 
                                        mutation_dir, 
                                        mesa)

    mutate(dredd,
        mutation_files,
        info_file,
        compile_commands,
        mesa,
        track_only=True)

    build(mesa)
    install(mesa)

def track(track_cts : bool = True, track_wgslsmith : bool = True):

    base = Path('/data/dev')
    dredd = Path(base,'dredd/third_party/clang+llvm/bin/dredd')
    mesa = Path(base, 'mesa_tracked')
    mutation_dir = Path('src')
    info_file = Path(mesa,'mutant_info.json')
    compile_commands = Path(mesa, 'build', 'compile_commands.json')

    cts = Path('/data/dev/webgpu_cts')
    dawn = Path('/data/dev/dawn')
    mesa_vk_icd = Path(mesa, 'build/install/share/vulkan/icd.d/lvp_icd.x86_64.json')

    #track(mesa, dredd, mutation_dir, info_file, compile_commands)

    if track_cts:
        for i in range(10):
            tracking_file = Path(f'tracking/tracking_file_run_{i}.txt').resolve()
            run_cts(cts, dawn, mesa_vk_icd, output_name = f'tracking/tracking_run_{i}', tracking_file = tracking_file)

    if track_wgslsmith:
        for i in range(100):
            tracking_file = Path(f'wgslsmith/tracking/tracking_file_wgslsmith_run_{i}.txt').resolve()
            wgslsmith_program = Path(f'wgslsmith/wgslsmith_prog_{i}.js').resolve()
            run_wgslsmith_program(wgslsmith_program,
                mesa_vk_icd,
                generate=True,
                tracking=tracking_file)

def process_tracking(cts : Path, wgslsmith : Path) -> dict[str,list[int]]:

    if cts is not None:
        cts_mutants = get_mutants(cts)
        print(f'The CTS covers {len(cts_mutants)} mutants in total')

    if wgslsmith is not None:
        wgslsmith_mutants = get_mutants(wgslsmith)
        print(f'A sample of 100 WGSLsmith tests cover {len(wgslsmith_mutants)} mutants in total')

    if cts is not None and wgslsmith is not None:
        covered_by_both = cts_mutants.intersection(wgslsmith_mutants)
        covered_by_cts_only = cts_mutants.difference(wgslsmith_mutants)
        covered_by_wgslsmith_only = wgslsmith_mutants.difference(cts_mutants)

        print(f'Covered by both: {len(covered_by_both)}')
        print(f'Covered by CTS only: {len(covered_by_cts_only)}')
        print(f'Covered by WGSLsmith only: {len(covered_by_wgslsmith_only)}')

    coverage = {'covered_by_both' : covered_by_both,
                'covered_by_cts_only' : covered_by_cts_only,
                'covered_by_wgslsmith_only' : covered_by_wgslsmith_only
                }

    return coverage

def get_mutants(filepath : Path):

    all_mutants = set()

    for filename in os.listdir(filepath):
        file = os.path.join(filepath, filename)
        with open(file) as f:
            mutants = set(f.readlines())

        all_mutants = all_mutants.union(mutants)

    return all_mutants

if __name__=="__main__":
    base = Path('/data/dev/dredd-webgpu-testing/llvmpipe')
    tracking_dir = Path(base, 'output', 'covered_by_cts', 'test_wise_tracking', 'tracking_files')
    output_dir = Path(base, 'output', 'covered_by_cts', 'test_wise_tracking', 'mutant_files')
    process_test_wise_tracking(tracking_dir, output_dir)