import os
import subprocess
import re
import json
from enum import Enum
from pathlib import Path

from common.mutation_tree import MutationTree

class TestStatus(Enum):
    PASS = 1
    FAIL = 2
    SKIP = 3


def run_cts(cts,
        dawn,
        dredd_covered_mutants_path : Path,
        query : str = 'webgpu:*',
        vk_icd : str = '',
        tracking : bool = False):
   
    # Run the test with mutant tracking enabled
    print("Running CTS with mutant tracking compiler...")
    
    tracking_environment = os.environ.copy()
    
    # Set env vars depending on whether we are doing per-test coverage tracking or not
    tracking_environment["DREDD_MUTANT_TRACKING_FILE"] = str(dredd_covered_mutants_path)

    tracking_environment["VK_ICD_FILENAMES"] = f'{vk_icd}'

    tracking_compile_cmd = [f'{dawn}/tools/run',
            'run-cts', 
            '--verbose',
            f'--bin={dawn}/out/Debug']
    #        '--j', '1']

    if tracking:
        tracking_compile_cmd.append('--mutant-tracking')

    tracking_compile_cmd.extend([
            f'--cts={cts}',
            f"{query}"]) 

    print(tracking_compile_cmd)
    result = subprocess.run(tracking_compile_cmd, env=tracking_environment)
    
    if(result.returncode != 0):
        print('Problem running tracking command!')
        exit(1)
    else:
        print(f'Tracking command finished with return code {result.returncode}')

    return result

def get_queries_from_cts(query : str,
            cts_base : Path,
            unittests_only : bool,
            cts_only : bool):

    # Get WebGPU CTS test queries as list
    base_query_string = query

    cts_queries = get_tests(cts_base, base_query_string)

    # Get WebGPU unit test queries as list
    unittests_path = Path(cts_base,'unittests')
    unittest_query_string = 'unittests:*'

    #unittest_queries = get_tests(cts_base, unittest_query_string)

    if unittests_only:
        test_queries = unittest_queries
    elif cts_only:
        test_queries = cts_queries
    else:
        test_queries = unittest_queries + cts_queries

    return test_queries




def get_mutant_coverage(mutation_info_path,
        dredd_covered_mutants_path : Path,
        get_per_test_cts_mutant_coverage : bool,
        dawn_coverage : Path,
        cts_repo : Path,
        query : str,
        vk_icd : str = '') -> (list[int], list[int]):

    covered = []
    uncovered = []

    # Make sure tracking folder exists
    dredd_covered_mutants_path.parent.mkdir(exist_ok=True)

    # Run cts if we do not already have a mutant tracking file
    if not dredd_covered_mutants_path.exists():
    
        mutant_tracking_result = run_cts(mutation_info_path,
                dredd_covered_mutants_path,
                get_per_test_cts_mutant_coverage,
                dawn_coverage,
                cts_repo,
                query,
                vk_icd)
    
        if not dredd_covered_mutants_path.exists():
            print("No mutant tracking file created.")
    
        else:
            print("Mutant tracking compilation complete")
    
    else:
        print("Getting covered mutants from existing dredd_covered_mutants path!")

    with open(dredd_covered_mutants_path, 'r') as file:
        data = file.readlines()

    # TODO: check why some lines have multiple mutants
    list_lines = [line for line in data if ' ' in line]
    flat_lines = [line.split(' ') for line in list_lines]
    flatter_lines = [
        mutant
        for mutants in flat_lines
        for mutant in mutants
    ]

    data = [line for line in data if ' ' not in line]
    data.extend(flatter_lines)

    covered : List[int] = list(set([int(mutant.strip()) for mutant in data]))

    covered.sort()

    all_mutants = get_all_mutants(mutation_info_path)

    print(len(all_mutants))
    print(f'len all mutants set: {len(set(all_mutants))}')

    uncovered = list(set(all_mutants) - set(covered))

    print(f'covered: {len(set(covered))}')
    print(f'uncovered: {len(set(uncovered))}')

    assert len(all_mutants) == (len(covered) + len(uncovered))

    return (covered, uncovered)

    
def get_all_mutants(mutation_info_file : Path) -> list[int]:
    
    with open(mutation_info_file, 'r') as json_input:
       mutation_tree = MutationTree(json.load(json_input))

    all_mutants = list(range(0,mutation_tree.num_mutations + 1))

    return all_mutants


def run_cts_with_output(cts : Path, 
    dawn : Path, 
    mesa_vk_icd : Path, 
    output_name : str = "test_output", 
    tracking_file : str = None) -> list[str]:

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


def get_completed_queries(log : Path) -> list[str]:
    
    with open(log, 'r') as f:
        log_info = f.readlines()

    queries = [line[7:].strip() for line in log_info if line[:6] == "Query:"]
    
    # Remove final query since it will be unfinished
    return queries[:-1]

def kill_gpu_processes():

    n_processes = find_dawn_processes()

    if n_processes == 0:
        print('No Dawn processes running')
        return

    processes = subprocess.Popen(
            ["ps","-ef"], 
            stdout=subprocess.PIPE
            )
    dawn = subprocess.Popen(
            ["grep","dawn.*node.*--gpu-provider"], 
            stdin=processes.stdout,
            stdout=subprocess.PIPE
            )
    remove_grep = subprocess.Popen(
            ["grep","-v","grep"],
            stdin=dawn.stdout,
            stdout=subprocess.PIPE
    )
    pid_to_kill = subprocess.Popen(
            ["awk","{ print $2 }"],
            stdin=remove_grep.stdout,
            stdout=subprocess.PIPE,
            text=True
            )
    kill = subprocess.Popen(
            ["xargs", "-r", "kill", "-9"],
            stdin=pid_to_kill.stdout,
            stdout=subprocess.PIPE,
            text=True
            )

    stdout, stderr = kill.communicate()

    # Check that all relevant processes have been killed
    n_processes = find_dawn_processes()

    if n_processes == 0:
        print('No Dawn processes running')
        return

    else:
        print('Problem killing Dawn processes!')
        exit(1)


def find_dawn_processes() -> int:
    list_processes = subprocess.Popen(["ps","-ef"], stdout=subprocess.PIPE)
    find_dawn = subprocess.Popen(["grep","dawn.*node.*--gpu-provider"], stdout=subprocess.PIPE, stdin=list_processes.stdout)
    exclude_grep = subprocess.Popen(['grep','-v','grep'], stdout=subprocess.PIPE, stdin=find_dawn.stdout)
    dawn_count = subprocess.run(['wc', '-l'], stdin=exclude_grep.stdout, capture_output=True)
    
    print(f'Number of processes that contain "dawn" is: {int(dawn_count.stdout)}') 

    return int(dawn_count.stdout)

def get_single_tests_from_file(filename : Path) -> dict[str,str]:
    '''
    Parses file containing stdout from running the WebGPU CTS to retrieve a 
    dictionary containing all individual tests and their
    status (pass; fail; skip)
    '''
    
    with open(filename, 'r') as f:
        lines = f.readlines()

    return get_single_tests_from_stdout(lines)



def get_single_tests_from_stdout(stdout : list) -> dict[str,str]:
    '''
    Parses list containing stdout from running the WebGPU CTS to retrieve a 
    dictionary containing all individual tests and their
    status (pass; fail; skip)
    '''
    test_lines = [i for i in stdout if ' - pass' in i or ' - fail' in i or ' - skip' in i]

    tests = {t[:t.index(' ')] : t[t.index(' - ')+3:].replace(':','').strip() for t in test_lines}

    # Check that the only values are pass/fail/skip
    check = {k:v for (k,v) in tests.items() if v != 'pass' and v != 'fail' and v != 'skip'}

    assert(len(check) == 0)

    return tests


def get_unrun_tests() -> list:

    webgpu_cts_path = Path('/data/dev/webgpu_cts/src/webgpu')
    cts_base_query_string = 'webgpu'

    cts_tests = get_tests(webgpu_cts_path, cts_base_query_string)
    
    tests_that_ran = get_test_info(Path('/data/work/tint_mutation_testing/spirv_ast_printer_cts/tracking'))

    tests_that_did_not_run =[t for t in cts_tests if t not in tests_that_ran]

    return tests_that_did_not_run

def get_test_info(filepath : Path):

    tests = []

    for file in filepath.iterdir():
        with open(file, 'r') as f:
            query = f.readline()            
            tests.append(query[:query.index('*')+1])

    return tests

def run_test(query : str) -> None:

    #TODO: pass filepaths as arguments 
    cmd = ['/data/dev/dawn_mutated/tools/run',
            'run-cts', 
            '--verbose',
            '--bin=/data/dev/dawn_mutated/out/Debug',
            '--cts=/data/dev/webgpu_cts',
            query]
            #            'webgpu:examples:gpu,buffers:*']

    result = subprocess.run(cmd)

    print('Finish')

def get_tests(src : Path, query : str) -> list[str]:
    '''
        Function returns a list of query strings for
        all tests in the directory (including sub-
        directories)

        src is the path to the WebGPU CTS e.g. /data/dev/webgpu_cts/src
        query is the query for which we want to find all individual tests
            e.g. 'webgpu:*', 'webgpu:shader,*', 'unittests:*'
    '''

    # Get base directory for query
    # If the query ends with :* then the final item is a file, return immediately
    #   except for top-level queries webgpu:* and unittests:*
    # If the query ends with ,* then the final item is a folder, continue searching
    if query != 'webgpu:*' and query != 'unittests:*' and query[-2:] == ':*':
        return [query]

    folders_string = query.replace('*','').replace(':','/').replace(',','/')
    
    base_dir = Path(src, folders_string)
    

    # Get all test filenames in current directory
    filenames = [f.name for f in base_dir.iterdir() if f.is_file()
            and f.suffixes == ['.spec','.ts']]
    

    # Convert filenames to queries
    queries = [file_query(query, f) for f in filenames]


    subdirectories = [d for d in base_dir.iterdir() if d.is_dir()]

    for sub in subdirectories:
        sub_query = dir_query(query, sub)
        queries.extend(get_tests(src, sub_query))
    
    return queries

def dir_query(base : str, directory : Path) -> str:
    directory = str(directory).split('/')[-1]
    return base.replace('*','') + directory + ',*'


def file_query(base_query : str, filename : str) -> str:     
    return base_query.replace('*','') + filename.removesuffix('.spec.ts') + ':*'

def test():
    run_test('webgpu:examples:gpu,buffers:*')

def get_failures(stdout : str) -> int:

    matched = re.search(r'(?<=FAIL: )\d+',stdout)

    return int(matched.group())

def get_passes(stdout : str) -> int:

    matched = re.search(r'(?<=PASS: )\d+',stdout)

    return int(matched.group())

def check_queries():
    base = Path('/data/dev/webgpu_cts/src')
    queries = ['webgpu:*',
            'webgpu:shader,*',
            'webgpu:shader,execution,flow_control,complex:*',
            'unittests:*']

    for q in queries:
        tests = get_tests_new(base,q)
        print(f'Query: {q}')
        print(f'Tests: {tests}')

def main():
    kill_gpu_processes('node')

def getlines():
    
    path = Path('/data/dev/dredd-compiler-testing/output/query_file.txt')

    return get_single_tests_from_file(path) 

def check_query_stability(query : str):

    get_single_tests_from_file(file)

    pass_tests

if __name__=="__main__":
    main()
    #output = getlines()
