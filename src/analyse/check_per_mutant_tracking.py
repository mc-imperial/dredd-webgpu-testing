'''
    This script checks whether our chosen Mesa entrypoint is appropriate.
    The entrypoint should ideally be executed *once* per test.
    The entrypoint must be executed before any other code in the Mesa codebase is called.
    
    We check this by running two things:
        (1) We run a sample group of tests with a particular entrypoint set, with Dredd in tracking mode.
            This should output a set of tracking files, one for each test, listing the unique IDs 
            of the mutants touched by that test.
        (2) We then run each test in a fully isolated process without per-test tracking (since 
            we're only running a single test).
    
    We compare the mutant IDs in the relevant files from steps (1) and (2). If the entrypoint is 
    appropriate, we should find that the IDs for each test are the same using each approach. If
    the IDs are different, then our entrypoint is probably not appropriate.

'''

import subprocess
import os
import shutil
from pathlib import Path
import pandas as pd

def main():

    test_query: str = 'webgpu:shader,execution,flow_control,*'
 
    base: str = '/home/ubuntu/dev'
    dredd: str = base + '/dredd_with_reset'
    mesa_mutated: str = base + '/mesa_mutated'
    mesa_tracked: str = base + '/mesa_tracked'
    dawn: str = base + '/dawn'
    cts: str = base + '/webgpu_cts'
    vk_icd: str = mesa_tracked + '/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json'

    working_base = base + '/dredd-webgpu-testing'

    output_temp = working_base + '/data/tracking_files'
    output_all_tests_together = working_base + '/data/check_tracking/all_tests/tracking_files'
    output_single_tests = working_base + '/data/check_tracking/single_tests/tracking_files'
    
    individual_tests: str = base + '/dredd-webgpu-testing/data/check_tests_flow_control.txt'

    mutate: bool = False
    per_test: bool = False
    single_tests: bool = False
    analyse: bool = True
    get_data: bool = False

    env = os.environ.copy()
    env['CC'] = '/usr/bin/clang-17'
    env['CXX'] = '/usr/bin/clang++-17'

    clear_folder(output_temp)

    if mutate:
        # Mutate Mesa using the per-test tracking Dredd
        cmd = ['python',
               '-m',
               'mutate',
               'mesa',
               mesa_mutated,
               mesa_tracked,
               '--mutation_dir', mutation_dir,
               '--dredd', dredd]

        result = subprocess.run(cmd, env=env)


    if per_test:
        # Run a subset of tests in per-test tracking mode
        cmd = ['python',
               '-m',
               'track',
               'cts',
               vk_icd,
               dawn,
               '--cts', cts,
               '--query', test_query]

        result = subprocess.run(cmd, env=env)

        # Results filepaths are hard coded in cts/..../server.ts for now
        # So copy results to a separate location before proceeding
        if os.path.exists(output_all_tests_together):
            shutil.rmtree(output_all_tests_together)

        shutil.copytree(output_temp, output_all_tests_together)
        clear_folder(output_temp)

    if single_tests:
        # Run each test in a separate process using a loop
        with open(individual_tests,'r') as f:
            tests = f.readlines()

        tests = [x.rstrip() for x in tests]

        print(f'There are {len(tests)} tests')

        for i, test in enumerate(tests):
            test_output = f'{base}/dredd-webgpu-testing/data/check_tracking/test_{i}'
            test_output_dir = f'{output_single_tests}/test_{i}'
            cmd = ['python',
                   '-m',
                   'track',
                   'cts',
                   vk_icd,
                   dawn,
                   '--cts', cts,
                   '--query', test,
                   '--output', test_output]

            result = subprocess.run(cmd, env=env)
            

            if os.path.exists(test_output_dir):
                shutil.rmtree(test_output_dir)
            
            shutil.copytree(output_temp, test_output_dir)
            clear_folder(output_temp)
            print(f'Copied from {output_temp} to {test_output_dir}')
            
    # Compare the results across approaches 
    if analyse:
        if get_data:
            single_paths = [Path(p,'test_id_0.txt') for p in Path(output_single_tests).rglob("test_*") if p.is_dir()]
            print(single_paths[0])
            joint_paths = [p for p in Path(output_all_tests_together).rglob("test_id*") if p.is_file()]
            print(joint_paths[0])
            print(f'There are {len(single_paths)} single paths and {len(joint_paths)} joint paths')

            single = {p.parent.name.replace('test_','') : p for p in single_paths}
            joint = {p.stem.replace('test_id_','') : p for p in joint_paths}

            infos = []

            for test_id in sorted(single.keys()):
                with open(single[test_id], 'r') as f:
                    single_mutants = set([int(x.rstrip()) for x in f.readlines()])

                with open(joint[test_id], 'r') as f:
                    joint_mutants = set([int(x.rstrip()) for x in f.readlines()])
                
                info = {'test_id' : test_id,
                        'single' : len(single_mutants),
                        'joint' : len(joint_mutants),
                        'single_only' : len(single_mutants - joint_mutants),
                        'joint_only' : len(joint_mutants - single_mutants),
                        'single_only_id' : sorted(list(single_mutants - joint_mutants)),
                        'joint_only_id' : sorted(list(joint_mutants - single_mutants))
                        }
                
                infos.append(info)
            
            df = pd.DataFrame(infos).sort_values('test_id')
            df['test_id'] = df['test_id'].astype(int) 
            df = df.sort_values('test_id')
            df.to_csv('mutant_ids.csv')
    
        else:
            df = pd.read_csv('mutant_ids.csv')

        # We see that some mutants are being missed when we run tests as a group
        # This suggests that our entrypoint is not at the beginning of the critical path
        # It might also mean that some code is *only* run when we run tests in a
        # single way e.g. start-up code

        # First, look at the overlap between mutants that are missed on each test

        which_mutants_are_missing(df)


def which_mutants_are_missing(df):
   pass 


   

def clear_folder(folder):
    for item in os.listdir(folder):
        item_path = os.path.join(folder, item)
        try:
            if os.path.isfile(item_path) or os.path.islink(item_path):
                os.unlink(item_path)  # delete file or link
            elif os.path.isdir(item_path):
                shutil.rmtree(item_path)  # delete subfolder
        except Exception as e:
            print(f'Failed to delete {item_path}. Reason: {e}')

if __name__=="__main__":
    main()
