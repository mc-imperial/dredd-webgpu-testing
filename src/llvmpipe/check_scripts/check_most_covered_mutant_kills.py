import os
import subprocess
import json
import pandas as pd 

from pathlib import Path
from common.run_test import CTSKillStatus

def main():
    ''' Script checks specific mutant kills that may be 
        unreliable due to flaky tests. The mutants are 
        some of the 'most covered' by the CTS (in terms of 
        number of CTS tests that cover the mutants). When 
        trying to kill using the individual covering tests, 
        the mutants survive. But when trying to kill using the
        full CTS, the mutatns are killed. This may be because of
        test flakiness in the full CTS.

        So, here for each mutant I take the mutant-killing test 
        from the full CTS run and try to use it in isolation 
        to kill the mutant 5 times.
    '''

    base = Path('/data/dev/dredd-webgpu-testing')
    mutant_kill_dir = Path(base,'llvmpipe/output/covered_by_cts/check_survivors/killed_mutants')
    dawn = '/data/dev/dawn'
    cts = '/data/dev/webgpu_cts'
    vk_icd='/data/dev/mesa_mutated/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json'

    mutants = {}
    n_tries =  5
    results = []

    # Get mutants and their killing tests
    for dir in mutant_kill_dir.iterdir():
        mutant = dir.stem
        with open(Path(dir, 'kill_info.json'),'r') as f:
            mutant_info = json.load(f)
            kill_test = mutant_info['killing_tests']

        mutants[mutant] = kill_test

    # Run the test with- and without- the mutant 5 times
    # and record all individual test outcomes for analysis

    for mutant, test in mutants.items():
        print(f'Checking mutant {mutant}')
        print(f'Supposedly killed by test: {test}')

        for i in range(n_tries):
            unmutated_result = run_unmutated_test(test, dawn, cts, vk_icd)
            mutated_result = run_mutated_test(mutant, test, dawn, cts, vk_icd)

            results.append({'mutant' : mutant,
                'test' : test,
                'attempt' : i,
                'unmutated_result' : unmutated_result,
                'mutated_result' : mutated_result
            })

    results_df = pd.DataFrame(results)

    print(results_df)

    if 'CTSKillStatus.KILL_TEST_FAIL' in results_df['unmutated_result']:
        print('Test failure appears in unmutated results')
    else:
        print('Test failure does not appear in unmutated results')
    if 'CTSKillStatus.KILL_TEST_FAIL' in results_df['mutated_result']:
        print('Test failure appears in mutated results')
    else:
        print('Test failure does not appear in mutated results')


def run_unmutated_test(query, dawn, cts, vk_icd) -> CTSKillStatus:

    env = os.environ.copy()
    env['VK_ICD_FILENAMES'] = vk_icd

    cmd = [f'{dawn}/tools/run',
        'run-cts', 
        '--verbose',
        f'--bin={dawn}/out/Debug',
        '--cts',
        str(cts),
        f"{query}"]  

    output = subprocess.run(cmd, env=env, capture_output = True, text = True)

    result = get_result(query, output.stdout)

    return result

def run_mutated_test(mutant, query, dawn, cts, vk_icd) -> CTSKillStatus:

    env = os.environ.copy()
    env['VK_ICD_FILENAMES'] = vk_icd
    env['DREDD_ENABLED_MUTATION'] = mutant

    cmd = [f'{dawn}/tools/run',
    'run-cts', 
    '--verbose',
    f'--bin={dawn}/out/Debug',
    '--cts',
    str(cts),
    f"{query}"]  

    output = subprocess.run(cmd, env=env, capture_output = True, text = True)

    result = get_result(query, output.stdout)

    return result

def get_result(query, stdout):
    out_lines = stdout.split('\n')
    result_line = [x for x in out_lines if f'{query} - ' in x]
    assert(len(result_line) == 1)
    result = result_line[0][result_line[0].find(' - ')+3:-1]
    
    match result:
        case 'pass':
            return CTSKillStatus.SURVIVED
        case 'fail':
            return CTSKillStatus.KILL_TEST_FAIL
        case 'skip':
            print('Skipped test! Check manually')
            exit()



if __name__=="__main__":
    main()