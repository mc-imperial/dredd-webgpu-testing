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

import argparse
import subprocess
import ast
import os
import shutil
import itertools
from collections import Counter
from pathlib import Path
import pandas as pd
import sys
import json

from datetime import datetime
from typing import Dict, Optional
MutantInfo = None
build_mutant_to_node_mapping = None

def main():

    args = argparse.ArgumentParser()

    args.add_argument('--query',
                      type=str,
                      help='Query to test',
                      default='webgpu:shader,execution,flow_control,*')
    args.add_argument('--reset',
                      action='store_true',
                      default=True)
    args.add_argument('--mutate',
                      action='store_true',
                      default=False)
    args.add_argument('--run_joint',
                      action='store_true',
                      default=False)
    args.add_argument('--run_single',
                      action='store_true',
                      default=False)
    args.add_argument('--process_data',
                      action='store_true',
                      default=False)
    args.add_argument('--analyse',
                      action='store_true',
                      default=False)
    args.add_argument('--output_csv',
                      type=str,
                      default='output/mutant_ids.csv')
    args.add_argument('--base',
                      type=str,
                      default="/home/ubuntu/dev")

    args = args.parse_args()

    test_query = args.query
    
    dredd_with_reset = args.reset
    mutate: bool = args.mutate
    joint_tests: bool = args.run_joint
    single_tests: bool = args.run_single
    get_data: bool = args.process_data
    analyse: bool = args.analyse
    mutant_id_csv = args.output_csv
    mutant_id_short_csv = args.output_csv[:-4] + '_short.csv'
    individual_tests_csv = args.output_csv[:-4] + '_tests.txt'

    base: str = args.base
    dredd: str = base + '/dredd'
    mesa_mutated: str = base + '/mesa_mutated'
    mesa_tracked: str = base + '/mesa_tracked'
    dawn: str = base + '/dawn'
    cts: str = base + '/webgpu_cts'
    vk_icd: str = mesa_tracked + '/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json'
    mutation_info_file: str = base + '/mesa_tracked/mutation_info.json'

    # Import scripts from Dredd - awkward because it is not a module
    sys.path.append(dredd + '/scripts')
    global MutantInfo, build_mutant_to_node_mapping
    from query_mutant_info import MutantInfo as MI, build_mutant_to_node_mapping as B2N

    MutantInfo = MI
    build_mutant_to_node_mapping = B2N

    working_base = base + '/dredd-webgpu-testing'

    output_temp = working_base + '/data/tracking_files'
    output_all_tests_together = working_base + '/data/check_tracking/all_tests/tracking_files'
    output_single_tests = working_base + '/data/check_tracking/single_tests_without_reset/tracking_files'
    
    env = os.environ.copy()
    env['CC'] = '/usr/bin/clang-17'
    env['CXX'] = '/usr/bin/clang++-17'

    clear_folder(output_temp)
    
    if mutate:
        mutation_dir = 'src/compiler/nir' 
        
        cmd = ['python',
               '-m',
               'mutate',
               'mesa',
               mesa_mutated,
               mesa_tracked,
               '--mutation_dir', mutation_dir,
               '--dredd', dredd]
        
        if dredd_with_reset:
            cmd.append('--reset')

        result = subprocess.run(cmd, env=env)

        if result.returncode != 0:
            raise RuntimeError('Problem with mutation!')

    if joint_tests:
        clear_folder(output_all_tests_together)

        # Run a subset of tests in per-test tracking mode
        cmd = ['python',
               '-m',
               'track',
               'cts',
               vk_icd,
               dawn,
               '--cts', cts,
               '--query', test_query]

        process = subprocess.Popen(cmd, 
                                  env=env,
                                  stdout=subprocess.PIPE,
                                  stderr=subprocess.PIPE,
                                  text=True)
        output_lines = []

        for line in process.stdout:
            print(line, end='')      # Show in terminal
            output_lines.append(line)
        
        process.wait()
        
        print(f'Finished tests! At {datetime.now()}')

        #with open('output/entrypoint/stdout.txt','w') as f:
        #    f.writelines(output_lines)

        individual_tests = list(dict.fromkeys([get_query(x) for x in output_lines if x.startswith('webgpu:')]))

        print(f'Writing individual tests to {individual_tests_csv}...', flush=True)
        with open(individual_tests_csv, 'w') as f:
            f.writelines(individual_tests)
        
        print(f'Exiting! At {datetime.now()}')
        exit()

        # Results filepaths are hard coded in cts/..../server.ts for now
        # So copy results to a separate location before proceeding
        if os.path.exists(output_all_tests_together):
            shutil.rmtree(output_all_tests_together)

        print(f'Copying joint results from {output_temp} to {output_all_tests_together}...', flush=True)
        shutil.copytree(output_temp, output_all_tests_together)
        print(f'Copied joint results from {output_temp} to {output_all_tests_together}', flush=True)
        clear_folder(output_temp)

    if single_tests:
        clear_folder(output_single_tests)

        # Run each test in a separate process using a loop
        tests = [x.rstrip() for x in individual_tests]
        
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
            
            if result.returncode != 0:
                raise RuntimeError(f'Problem running individual test {test}')

            if os.path.exists(test_output_dir):
                shutil.rmtree(test_output_dir)
           
            shutil.copytree(output_temp, test_output_dir)
            print(f'Copied from {output_temp} to {test_output_dir}')
            clear_folder(output_temp)
       

    # Compare the results across approaches 
    if get_data:
        single_paths = [Path(p,'test_id_0.txt') for p in Path(output_single_tests).rglob("test_*") if p.is_dir()]
        single = {p.parent.name.replace('test_','') : p for p in single_paths}
        
        infos = []

        for test_id in sorted(single.keys()):
            with open(single[test_id], 'r') as f:
                single_mutants = set([int(x.rstrip()) for x in f.readlines()])

            
            info = {'test_id' : test_id,
                    'single' : len(single_mutants),
                    'single_id' : sorted(list(single_mutants)),
                    }
            
            infos.append(info)
        
        df = pd.DataFrame(infos).sort_values('test_id')
        df['test_id'] = df['test_id'].astype(int) 
        df = df.sort_values('test_id')
        df.to_csv('output/single_only_ids.csv')
        
        if dredd_with_reset:
            joint_paths = [p for p in Path(output_all_tests_together).rglob("test_id*") if p.is_file()]
            print(f'There are {len(single_paths)} single paths and {len(joint_paths)} joint paths')

            if len(single_paths) != len(joint_paths):
                raise RuntimeError('Test mismatch!')

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
                        'single_id' : sorted(list(single_mutants)),
                        'joint_id' : sorted(list(joint_mutants)),
                        'single_only_id' : sorted(list(single_mutants - joint_mutants)),
                        'joint_only_id' : sorted(list(joint_mutants - single_mutants))
                        }
                
                infos.append(info)
            
            df = pd.DataFrame(infos).sort_values('test_id')
            df['test_id'] = df['test_id'].astype(int) 
            df = df.sort_values('test_id')
            df.to_csv(mutant_id_csv)
            
            df[['test_id', 'single', 'joint', 'single_only', 'joint_only']].to_csv(mutant_id_short_csv)
        
    if analyse:
        if not get_data:
            print(f'Loading data...')
            df = pd.read_csv(mutant_id_csv)
            df["single_id"] = df["single_id"].apply(lambda x: ast.literal_eval(x))
            df["joint_id"] = df["joint_id"].apply(lambda x: ast.literal_eval(x))
            df["single_only_id"] = df["single_only_id"].apply(lambda x: ast.literal_eval(x))
            df["joint_only_id"] = df["joint_only_id"].apply(lambda x: ast.literal_eval(x))
            print(f'Loaded!')
            
            if not dredd_with_reset:
                reset_df = df[['test_id','single_id']].copy()

                print(f'Loading data...')
                no_reset_df = pd.read_csv('output/single_only_ids.csv')
                no_reset_df["single_id"] = no_reset_df["single_id"].apply(lambda x: ast.literal_eval(x))

                # Want to compare the mutant IDs covered by the single tests using dredd with reset
                # and dredd without reset 
                print('Merging...')
                merged_df = pd.merge(reset_df, no_reset_df, on='test_id', how='outer', indicator=True)
                merged_df['mutants_with_reset'] = merged_df['single_id_x'].apply(len)
                merged_df['mutants_wo_reset'] = merged_df['single_id_y'].apply(len)

                print(f'Merged columns: {merged_df.columns}')
                merged_df['lists_equal_ignore_order'] = merged_df.apply(
                    lambda row: set(row['single_id_x']) == set(row['single_id_y']),
                    axis=1
                    )

                merged_df[['test_id','lists_equal_ignore_order', 'mutants_with_reset', 'mutants_wo_reset']].to_csv('merge_check.csv')
                exit()
        # We see that some mutants are being missed when we run tests as a group
        # This suggests that our entrypoint is not at the beginning of the critical path
        # It might also mean that some code is *only* run when we run tests in a
        # single way e.g. start-up code

        # First, look at the overlap between mutants that are missed on each test
        '''
        freq_df = which_mutants_are_missing(df)

        # We want to get the file_id for each mutant so we can see which files
        # the missing ones are concentrated in

        with open(mutation_info_file, 'r') as json_input:
                json_info = json.load(json_input)
        
        mapping: Dict[int, MutantInfo] = build_mutant_to_node_mapping(json_info)
        file_map = {k : v.file_info['filename'] for k,v in mapping.items()}

        freq_df['mutant_in_file'] = freq_df['number'].map(file_map) 

        print(freq_df['mutant_in_file'].value_counts())

        print(f'The {freq_df["number"].nunique()} mutants missing are in {freq_df["mutant_in_file"].nunique()} files')

        missing_in_all.to_csv('output/missing_in_all.csv', index=False)
       
        # Look at which files the mutants are in
        print(missing_in_all['mutant_in_file'].value_counts())

        print(f'The {missing_in_all["number"].nunique()} mutants missing across all tests are in {missing_in_all["mutant_in_file"].nunique()} files')

        # Compare to distribution of all touched mutants (not accounting for how many files they are touched by)
        all_ids = set(i for lst in df['single_id'] for i in lst)
        all_ids_df = pd.DataFrame({'id' : list(all_ids)})

        all_ids_df['mutant_in_file'] = all_ids_df['id'].map(file_map) 
        print(all_ids_df['mutant_in_file'].value_counts())
        '''
        # Check the mutants that appear to be consistent across joint-only (1334)
        df_1334 = df[df['joint_only'] == 1334].copy()
        print(f'len is {len(df_1334)}')

        df_1334['len_check'] =[len(x) for x in df_1334['joint_only_id']]

        print(f"Unique lengths are {df_1334['len_check'].unique()}")

        df_1334['equal_to_first'] = [
            x == df_1334['joint_only_id'].iloc[0] for x in df_1334['joint_only_id']
            ]

        eq_df = df_1334[df_1334['equal_to_first']].copy()

        print(len(eq_df))

        mutants_of_interest = eq_df['joint_only_id'].iloc[0]

        print(len(mutants_of_interest))

        with open('checkmutants.txt','w') as f:
            for m in mutants_of_interest:
                f.write(f'{m}\n')

        with open(mutation_info_file, 'r') as json_input:
                json_info = json.load(json_input)
        
        mapping: Dict[int, MutantInfo] = build_mutant_to_node_mapping(json_info)
        file_map = {k : v.file_info['filename'] for k,v in mapping.items()}

        mutant_to_file_map = {mutant : file_map[mutant] for mutant in mutants_of_interest}

        unique_files = Counter(mutant_to_file_map.values())
        print(value_counts)

def get_mutant_file(mutant_id: int, mapping: Dict[int, MutantInfo]):
    mutant_info: MutantInfo = mapping[mutant_id]
    mutated_source_code_filename = mutant_info.file_info['filename']
    return mutated_source_code_filename

def which_mutants_are_missing(df):
    single_only = itertools.chain.from_iterable(df['single_only_id'])
    freq = Counter(single_only)
    freq_df = pd.DataFrame(freq.items(), columns=['number','count']).sort_values('count', ascending=False)
    freq_df.to_csv('output/freq.csv', index=False)
    
    num = len(freq_df)
    num_in_all = len(freq_df[freq_df['count']==138])
    num_in_most = len(freq_df[freq_df['count'] > 100])

    print(f'Total IDs: {num}, IDs in all: {num_in_all}, IDs in more than 100: {num_in_most}')

    return freq_df
   
def in_query(test: str, query: str) -> bool:
    ''' 
    Returns True if the string is in the overall test query
    '''
    
    # Test is in query if query minus the * is a prefix of test
    if query[-1] == '*':
        query = query[:-1]

    if test.startswith(query):
        return True

    return False


def clear_folder(folder):
    for item in os.listdir(folder):
        item_path = os.path.join(folder, item)
        try:
            if os.path.isfile(item_path) or os.path.islink(item_path):
                os.unlink(item_path)  # delete file or link
            elif os.path.isdir(item_path):
                shutil.rmtree(item_path)  # delete subfolder
        except Exception as e:
            raise RuntimeException(f'Failed to delete {item_path}. Reason: {e}')

    print(f'Folder cleared: {folder}')

def get_query(line: str):
    return line[:line.find(' ')]

if __name__=="__main__":
    main()
