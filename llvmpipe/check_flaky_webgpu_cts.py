# Some WebGPU CTS tests do not appear to execute on every run.
# This is a very small number (~250 out of 166,000) but
# it is strange behaviour. The tests are not 'skipped'; they 
# simply do not appear to have executed. It affects a different
# seemingly random set of tests each time.
# This script investigates the issue by repeatedly running the
# CTS and recording and analysing the raw output.

import subprocess
import os
import time
import re
import pandas as pd
import numpy as np
from pathlib import Path

from mutate_mesa import *
from check_c11_threads_header import replace_threads_h

def test_cts(cts, dawn, mesa_vk_icd, output_prefix, n_tests : int = 10):

    for i in range(n_tests):
        run_cts(cts, dawn, mesa_vk_icd, output_name=f'{output_prefix}_run_{i}')


def run_cts(cts : Path, dawn : Path, mesa_vk_icd : Path, output_name : str = "test_output") -> list[str]:

    test_raw = []

    env = os.environ.copy()
    env["VK_ICD_FILENAMES"] = str(mesa_vk_icd)

    cmd = [f'{dawn}/tools/run',
        'run-cts', 
        '--verbose',
        f'--bin={dawn}/out/Debug',
        f'--cts={str(cts)}',
        'webgpu:*']  

    with open(f'{output_name}_raw.txt','wb') as f:
        p = subprocess.Popen(cmd, env=env, stdout=subprocess.PIPE)
        for line in p.stdout:
            print(line.decode('utf-8'))
            test_raw.append(line.decode('utf-8'))
            f.write(line)

    test_output = [f'{x}\n' for x in test_raw if '- pass' in x or '- fail' in x or '- skip in x']

    with open(f'{output_name}_tests.txt','w') as f:
        f.writelines(test_output)

    test_summary = get_test_summary(test_raw)
    
    with open(f'{output_name}_test_summary.txt', 'w') as f:
        f.write(test_summary)
    
def get_test_summary(test_output : list[str]) -> str:
    summary = '\n'.join(test_output[-10:])
    summary = summary[summary.find('Completed in'):]
    return summary

def process_raw_results(prefix : str):

        with open(f'{prefix}_raw.txt','r') as f:
            test_raw = f.readlines()

        test_output = [x for x in test_raw if ('- pass' in x or '- fail' in x or '- skip' in x)]

        with open(f'{prefix}_tests.txt','w') as f:
            f.writelines(test_output)

        test_summary = get_test_summary(test_raw)
        
        with open(f'{prefix}_test_summary.txt', 'w') as f:
            f.write(test_summary)

def result_map(raw : str) -> str:
    if ' - pass' in raw:
        return 'pass'
    if ' - fail' in raw:
        return 'fail'
    if ' - skip' in raw:
        return 'skip'

    print('Problem with result map!')
    exit()

def test_map(raw : str) -> str:
    if ' - pass' in raw:
        return raw[:raw.find(' - pass')]
    if ' - fail' in raw:
        return raw[:raw.find(' - fail')]
    if ' - skip' in raw:
        return raw[:raw.find(' - skip')]

    print('Problem with test map!')
    exit()

def check_result(a,b,c):
    if a == b and b == c:
        return True
    else:
        return False

def get_summary(prefix : str, n_runs : int):
    
    summary = pd.DataFrame(columns=['run','time','pass','fail','skip','total'])

    for i in range(0, n_runs):

        with open(f'{prefix}_run_{i}_test_summary.txt', 'r') as f:
            lines = f.readlines()

        if len(lines) == 0:
            continue

        time = lines[0][len('Completed in '):]
        minutes = int(time[:time.find('m')])
        seconds = float(time[(time.find('m') + 1):-2])
        
        entry = {
            'run' : i,
            'time' : round(float(minutes) + (seconds/60),4),
            'pass' : [int(x[x.find(':')+1:x.find('(')]) for x in lines if 'PASS' in x][0],
            'fail' : [int(x[x.find(':')+1:x.find('(')]) for x in lines if 'FAIL' in x][0],
            'skip' : [int(x[x.find(':')+1:x.find('(')]) for x in lines if 'SKIP' in x][0]
        }
        entry['total'] = entry['pass'] + entry['skip'] + entry['fail']

        summary = pd.concat([summary, pd.DataFrame(entry, index=[i])])

    print(f'Summary for {prefix}')
    print(summary)

    summary.to_csv(f'{prefix}_summary.txt', sep='\t', index=False)

def gather_run_results(prefix : str, n_runs : int, output_name : str):

    results = pd.DataFrame(columns=['test'])

    for i in range(n_runs):
        with open(f'{prefix}_run_{i}_tests.txt', 'r') as f:
            raw = f.readlines()

        if len(raw) == 0:
            continue

        df = pd.DataFrame(raw, columns = [f'raw_{i}'])
   
        df[f'result_{i}'] = df[f'raw_{i}'].apply(result_map)
        df['test'] = df[f'raw_{i}'].apply(test_map)

        results = results.merge(df, on = 'test', how = 'outer')

    # Check that all tests are present in every run
    nan_rows = results.isna().any(axis=1)
    nan_results = nan_rows[nan_rows == True]
    if len(nan_results > 0):
        print(nan_results)
    else:
        print('No tests are missing from any run')

    # Create dataframe of tests that have different results in at least one run
    #results = results.assign(unique = lambda x : set(x.filter(regex='result_*')))
    results['unique_results'] = list(map(set,results.filter(regex='result_*').values))
    results['unique_results'] = results['unique_results'].apply(lambda x: len(x))

    results.to_csv(f'{output_name}.csv')  

    return results

def find_flaky_tests(results : pd.DataFrame) -> pd.DataFrame:

    flaky_tests = results[results['unique_results'] > 1]
    cols = flaky_tests.columns
    cols = [x for x in cols if ('raw' not in x)]
    flaky_tests = flaky_tests[cols]

    print(flaky_tests)

    return flaky_tests


def analyse(prefix : str, 
    n_runs : int = 10, 
    process_raw = False,
    summary = False,
    gather_runs = False,
    get_flaky_tests = False
    ):
    
    if process_raw:
        for i in range(n_runs):
            process_raw_results(f'{prefix}_run_{i}')

    if summary:
        get_summary(prefix, n_runs)

    results_name = f'{prefix}_results_df'

    if gather_runs:
        results = gather_run_results(prefix, n_runs, results_name)
    else:
        results = pd.read_csv(f'{results_name}.csv')

    if get_flaky_tests:
        flaky_tests = find_flaky_tests(results)
        flaky_tests.to_csv(f'{prefix}_flaky_tests.csv', sep='\t')

def count_pass(x : pd.Series):
    return len([i for i in x if i == 'pass'])

def count_fail(x : pd.Series):
    return len([i for i in x if i == 'fail'])

def compare_non_flaky_tests():
    
    df = pd.read_csv('cts_issues/all_results.csv',sep='\t')

    # Find tests that had identical outcomes in all three configs
    df['unique_results'] = list(map(set,df.filter(regex='result_*').values))
    df['unique_results'] = df['unique_results'].apply(lambda x: len(x))

def compare_flaky_tests(clean : str, threads : str, mutated : str, get_results = False):

    if get_results:
        df = get_all_results(clean,threads,mutated)
 
    else:
        df = pd.read_csv('cts_issues/all_results.csv',sep='\t')

    # Find tests that had identical outcomes in all three configs
    df['unique_results'] = list(map(set,df.filter(regex='result_*').values))
    df['unique_results'] = df['unique_results'].apply(lambda x: len(x))

    # Get flaky tests across all three configs
    flaky_tests = find_flaky_tests(df)

    flaky_tests['n_pass'] = flaky_tests.filter(regex='result_*').apply(count_pass, axis=1)
    flaky_tests['n_fail'] = flaky_tests.filter(regex='result_*').apply(count_fail, axis=1)

    print(f'shape of flaky tests df: {flaky_tests.shape}')

    # Get distribution of passes and fails within each test (to see whether tests are flaking once or consistently)
    passes = flaky_tests['n_pass'].value_counts()
    fails = flaky_tests['n_fail'].value_counts()

    print(f'Pass distribution: {passes}')
    print(f'Fail distribution: {fails}')

    for x in ['clean', 'threads', 'mutated']:

        flaky_tests[f'n_pass_{x}'] = flaky_tests.filter(regex=f'{x}').apply(count_pass, axis=1)
        flaky_tests[f'n_fail_{x}'] = flaky_tests.filter(regex=f'{x}').apply(count_fail, axis=1)

        passes = flaky_tests[f'n_pass_{x}'].value_counts()
        fails = flaky_tests[f'n_fail_{x}'].value_counts()

        print(f'Pass distribution for {x}: {passes}')
        print(f'Fail distribution for {x}: {fails}')

        # Mark whether each test is flaky for this configuration
        flaky_tests[f'flaky_{x}'] = (flaky_tests[f'n_pass_{x}'] != 0) & (flaky_tests[f'n_fail_{x}'] != 0)

    # Check which tests are flaky across all configurations
    flaky_tests['flaky_across_one_only'] = sum([flaky_tests['flaky_clean'],flaky_tests['flaky_threads'],flaky_tests['flaky_mutated']]) == 1
    flaky_tests['flaky_across_two_only'] = sum([flaky_tests['flaky_clean'],flaky_tests['flaky_threads'],flaky_tests['flaky_mutated']]) == 2
    flaky_tests['flaky_across_all_three'] = sum([flaky_tests['flaky_clean'],flaky_tests['flaky_threads'],flaky_tests['flaky_mutated']]) == 3

    
    print(f'Number of tests flaky within mutated: {flaky_tests["flaky_clean"].sum()}')
    print(f'Number of tests flaky within mutated: {flaky_tests["flaky_threads"].sum()}')
    print(f'Number of tests flaky within mutated: {flaky_tests["flaky_mutated"].sum()}')
    
    print(f'Number of tests flaky in only one config: {flaky_tests["flaky_across_one_only"].sum()}')
    print(f'Number of tests flaky in exactly two configs: {flaky_tests["flaky_across_two_only"].sum()}')
    print(f'Number of tests flaky across all three configs: {flaky_tests["flaky_across_all_three"].sum()}')
    
    flaky_tests.to_csv('cts_issues/summary/flaky_tests_all_configs.csv',sep='\t')

def get_all_results(clean : str, threads : str, mutated : str):
    # Get results from each config
    df_clean = pd.read_csv(f'{clean}_results_df.csv').add_suffix('_clean')
    df_threads = pd.read_csv(f'{threads}_results_df.csv').add_suffix('_threads')
    df_mutated = pd.read_csv(f'{mutated}_results_df.csv').add_suffix('_mutated')

    print(df_clean.shape)
    print(df_threads.shape)
    print(df_mutated.shape)

    df_clean.rename(columns={'test_clean':'test'},inplace=True)
    df_threads.rename(columns={'test_threads':'test'},inplace=True)
    df_mutated.rename(columns={'test_mutated':'test'},inplace=True)

    # Merge results on test (similarly to how runs were merged)
    df = df_clean.merge(df_threads, how = 'outer', on = 'test')
    df = df.merge(df_mutated, how = 'outer', on = 'test')

    cols = df.columns
    cols = [x for x in cols if ('test' in x or 'result_' in x)]
    df = df[cols]

    df.to_csv('cts_issues/all_results.csv',sep='\t')

    return df


def main():
    mesa : Path = Path('/data/dev/mesa')
    mesa_vk_icd : Path = Path(mesa, 'build/install/share/vulkan/icd.d/lvp_icd.x86_64.json')
    cts : Path = Path('/data/dev/webgpu_cts')
    dawn : Path = Path('/data/dev/dawn')
    dredd : Path = Path('/data/dev/dredd/third_party/clang+llvm/bin/dredd')
    
    clean(mesa)
    test_cts(cts, dawn, mesa_vk_icd, 'cts_issues/clean')

    # Replace c11/threads.h with threads.h
    clean(mesa)
    replace_threads_h(mesa)
    build(mesa)
    install(mesa)
    test_cts(cts, dawn, mesa_vk_icd, 'cts_issues/threads_header_replaced')
    
    # Mutate with Dredd 
    clean(mesa)
    compile_commands_mutated = Path('/data/dev/mesa/build/compile_commands.json')
    info_file_mutated = Path('/data/dev/mesa/mutation_info.json')
    mutation_dir = Path('src')
    
    mutation_files = get_files_for_mutation(compile_commands_mutated, 
                                    mutation_dir, 
                                    mesa)
    mutate(dredd,
            mutation_files,
            info_file_mutated,
            compile_commands_mutated,
            mesa,
            track_only=False)

    build(mesa)
    install(mesa)
    test_cts(cts, dawn, mesa_vk_icd, 'cts_issues/mutated')

def test_sanitized_mesa():
    mesa : Path = Path('/data/dev/mesa')
    mesa_vk_icd : Path = Path(mesa, 'build/install/share/vulkan/icd.d/lvp_icd.x86_64.json')
    cts : Path = Path('/data/dev/webgpu_cts')
    dawn : Path = Path('/data/dev/dawn')
    dredd : Path = Path('/data/dev/dredd/third_party/clang+llvm/bin/dredd')

    test_cts(cts, dawn, mesa_vk_icd, 'cts_issues/sanitized')


if __name__=="__main__":
    #main()
    #analyse('cts_issues/clean',gather_runs=True,get_flaky_tests=True)
    #analyse('cts_issues/threads_header_replaced',gather_runs=True,get_flaky_tests=True)
    #analyse('cts_issues/mutated',gather_runs=True,get_flaky_tests=True)

    '''compare_flaky_tests('cts_issues/clean',
        'cts_issues/threads_header_replaced',
        'cts_issues/mutated',
        get_results=False)
    '''

    test_sanitized_mesa()