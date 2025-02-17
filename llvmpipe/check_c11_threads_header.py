import subprocess
import os

from pathlib import Path

def get_cts_results_from_file(file : Path, output_name : str = "test_output") -> list[str]:
    with open(file, 'r') as f:
        test_output = f.readlines()

    test_output = get_test_status(test_output)

    with open(f'{output_name}_tests.txt','w') as f:
        for (test, status) in test_output.items():
            f.write(f'{test} - {status}:\n')

    return test_output

def run_cts(cts : Path, dawn : Path, mesa_vk_icd : Path, output_name : str = "test_output", tracking_file : str = None) -> list[str]:

    test_output = []

    env = os.environ.copy()
    env["VK_ICD_FILENAMES"] = str(mesa_vk_icd)
    if tracking_file is not None:
        env["DREDD_MUTANT_TRACKING_FILE"] = str(tracking_file)

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
            test_output.append(line.decode('utf-8'))
            f.write(line)

    test_output = get_test_status(test_output)

    with open(f'{output_name}_tests.txt','w') as f:
        for (test, status) in test_output.items():
            f.write(f'{test} - {status}\n')

    return test_output
    
def get_test_status(test_output : list[str]) -> dict[str,str]:
    return { x[:-8] : x[-6:-2] for x in test_output if ("- pass" in x or "- fail" in x or "- skip" in x)}

def replace_threads_h(src : Path):

    find_files_a = ['find',
        f'{src}/src',
        '-name',
        '*.c*',
        '-o',
        '-name',
        '*.h']

    find_files_b = ['xargs',
        'grep',
        'c11/threads.h']

    find_result = subprocess.Popen(find_files_a, stdout=subprocess.PIPE)
    result = subprocess.run(find_files_b, stdin=find_result.stdout, capture_output = True, text = True)

    files = result.stdout.split('\n')
    files = [x[:x.find(':')] for x in files if x.find(':') > 0 ]

    for file in files:
        with open(file,'r') as f:
            code = f.readlines()

        for index, line in enumerate(code):
            if 'c11/threads.h' in line:
                code[index] = line.replace('c11/threads.h','threads.h')
                code.insert(index,'#include <pthread.h>\n#include <unistd.h>\n#include<errno.h>\n#include<limits.h>\n#include<stdlib.h>\n')
                continue

       # code = [x if 'c11/threads.h' not in x else x.replace('c11/threads.h','threads.h') for x in code]

        with open(file, 'w') as f:
            f.writelines(code)

    find_files = subprocess.Popen(['find',str(src),'-name','*.c*','-o','-name','*.h'], stdout=subprocess.PIPE)
    find_c11 = subprocess.Popen(['xargs','grep','-l','c11/threads.h'], stdout=subprocess.PIPE, stdin=find_files.stdout)
    c11_count = subprocess.run(['wc', '-l'], stdin=find_c11.stdout, capture_output=True)
    
    print(f'Number of files that contain "c11/threads.h" in "{src}" is: {int(c11_count.stdout)}')

    assert(int(c11_count.stdout) == 0)



def build(mesa : Path):
    cmd = ['./mesa_build_script.sh', str(mesa)]

    result = subprocess.run(cmd, cwd='..')

    return result.returncode

def compare_results(res1 : dict[str,str], res2 : dict[str,str], output_name : str = "test_output"):

    tests_in_res1_only = {k : v for k,v in res1.items() if k not in res2.keys()}
    tests_in_res2_only = {k : v for k,v in res2.items() if k not in res1.keys()}
    tests_in_both = {k : v for k,v in res1.items() if k in res2.keys()}

    print(f'{len(tests_in_both)} tests appear in both runs')
    print(f'{len(tests_in_res1_only)} tests only appear in the first run (c11/threads.h)')
    print(f'{len(tests_in_res2_only)} tests only appear in the second run (threads.h)')

    with open(f'{output_name}_tests_in_c11_only.txt','w') as f:
        for k,v in sorted(tests_in_res1_only.items()):
            f.write(f'{k} - {v}\n')
    
    with open(f'{output_name}_tests_in_threads_only.txt','w') as f:
        for k,v in sorted(tests_in_res2_only.items()):
            f.write(f'{k} - {v}\n')

    different_results = {k : res2[k] for k in res2 if k in res1 and res1[k] != res2[k]}

    if len(different_results) > 0:
        print(f"Difference! There are {len(different_results)} different results out of len{res1} tests.")
        with open(f'{output_name}_difference.txt','w') as f:
            for k,v in different_results.items():
                f.write(f'{k} - {v}')
    else:
        print("Results are all the same :)")
    
def restore(mesa : Path):
    cmd = ['git', 'restore', 'src/']

    subprocess.run(cmd, cwd=mesa)

def main():

    cts = Path('/data/dev/webgpu_cts')
    dawn = Path('/data/dev/dawn')
    mesa = Path('/data/dev/mesa')
    mesa_vk_icd = Path(mesa, 'build/install/share/vulkan/icd.d/lvp_icd.x86_64.json')
    
    rerun_cts : bool = True

    if rerun_cts:
        # Rebuild clean mesa
        restore(mesa)
        #build(mesa)

        # Run CTS using dawn with node bindings and the Mesa driver
        #c11_threads_results = run_cts(cts, dawn, mesa_vk_icd, output_name='dredd_issues/c11_threads_test_output')

        # Replace 'c11/threads.h' with 'threads.h' everywhere in the Mesa driver
        replace_threads_h(mesa)

        exit()

        # Rebuild Mesa without including c11/threads.h
        build_result = build(mesa)

        if build_result != 0:
            exit()
        
        # Run CTS using dawn with node bindings and the Mesa driver with 'threads.h' instead of 'c11/threads.h'
        threads_results = run_cts(cts, dawn, mesa_vk_icd, output_name='dredd_issues/threads_test_output')

    else:
        c11_threads_results = get_cts_results_from_file("c11_threads_test_output_raw.txt", output_name='dredd_issues/c11_threads_test_output')
        threads_results = get_cts_results_from_file("threads_test_output_raw.txt", output_name='dredd_issues/threads_test_output')


    # Compare CTS results to see if any additional tests fail
    compare_results(c11_threads_results, threads_results)

if __name__=="__main__":
    main()
