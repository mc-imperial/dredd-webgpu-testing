import argparse
import shutil
import subprocess
import logging

import json
import os
import signal
import random
import tempfile
import time
import datetime
import pandas as pd

from common.constants import DEFAULT_COMPILATION_TIMEOUT, DEFAULT_RUNTIME_TIMEOUT
from common.mutation_tree import MutationTree
from common.run_process_with_timeout import ProcessResult, run_process_with_timeout
from common.run_test import run_webgpu_cts_test_with_mutants, KillStatus, CTSKillStatus
from run.cts.utils import get_queries_from_cts, kill_gpu_processes, get_tests, get_passes, get_failures, get_unrun_tests, get_single_tests_from_stdout, get_completed_queries
import run.cts.flaky_test_finder.find_non_flaky_cts_tests as find_non_flaky_cts_tests
import run.wgslsmith.kill_mutants

from pathlib import Path
from typing import List, Set


def main(raw_args = None):
    start_time_for_overall_testing: float = time.time()
    time_of_last_kill: float = start_time_for_overall_testing

    parser = argparse.ArgumentParser()
    parser.add_argument("mutation_info_file",
                        help="File containing information about mutations, generated when Dredd was used to actually "
                             "mutate the source code.",
                        type=Path)
    parser.add_argument("mutation_info_file_for_mutant_coverage_tracking",
                        help="File containing information about mutations, generated when Dredd was used to "
                             "instrument the source code to track mutant coverage; this will be compared against the "
                             "regular mutation info file to ensure that tracked mutants match applied mutants.",
                        type=Path)
    parser.add_argument("mutant_kill_path",
                        help="Directory in which to record mutant kill info and mutant killing tests.",
                        type=Path)
    parser.add_argument("--killing_strategy",
                        help="Approach to mutant killing",
                        choices=['by_mutant','by_test','least_covered_mutants'],
                        default='least_covered_mutants')
    parser.add_argument("--query_source",
                        choices = ['file','cts_repo','arg'],
                        help="Source for CTS queries. Can be 'file' to get from file, or 'cts_repo' to  \
                            retrieve from repo, or 'arg' to directly use the query passed in args.query \
                            without finding more granular sub-queries",
                        default='arg')
    parser.add_argument("--query_file",
                        default=None,
                        help="CTS query file")
    parser.add_argument("--cts_repo",
                        default=Path('/data/dev/webgpu_cts'), #TODO: link to submodule
                        help="CTS repo filepath")
    parser.add_argument("--query",
                        default='webgpu:*',
                        type=str,
                        help="Base query string to use when retrieving tests from the CTS")
    parser.add_argument("--generator_timeout",
                        default=20,
                        help="Time in seconds to allow for generation of a program.",
                        type=int)
    parser.add_argument("--compile_timeout",
                        default=DEFAULT_COMPILATION_TIMEOUT,
                        help="Time in seconds to allow for compilation of a generated program (without mutation).",
                        type=int)
    parser.add_argument("--run_timeout",
                        default=DEFAULT_RUNTIME_TIMEOUT,
                        help="Time in seconds to allow for running a generated program (without mutation).",
                        type=int)
    parser.add_argument("--seed",
                        help="Seed for random number generator.",
                        type=int)
    parser.add_argument("--total_test_time",
                        default=86400,
                        help="Total time to allow for testing, in seconds. Default is 24 hours. To test indefinitely, "
                             "pass 0.",
                        type=int)
    parser.add_argument("--maximum_time_since_last_kill",
                        default=86400,
                        help="Cease testing if a kill has not occurred for this length of time. Default is 24 hours. "
                             "To test indefinitely, pass 0.",
                        type=int)
    parser.add_argument("--unittests_only",
                        action=argparse.BooleanOptionalAction,
                        help="Run unit tests only. Default is false.")
    parser.add_argument("--cts_only",
                        action=argparse.BooleanOptionalAction,
                        help="Run CTS tests only. Default is false.")
    parser.add_argument("--reliable_tests",
                        default=None,
                        type=str,
                        help="File path for json containing reliably passing CTS tests")
    parser.add_argument("--mutant_sample",
                        type=comma_list,
                        default=None # default if nothing is provided
                        )
    parser.add_argument("--mutant_to_test_mapping",
                        type=Path,
                        help="File path for mutant to test mapping csv")
    parser.add_argument("--wgslsmith",
                        type=Path,
                        help="File path to WGSLsmith",
                        default=Path('/data/dev/wgslsmith')) # TODO: change to submodule

    subparsers = parser.add_subparsers(dest="cmd")

    # Action: kill mutants in Dawn
    parser_dawn = subparsers.add_parser("dawn",
            help='Kill mutants in Dawn')
    parser_dawn.add_argument("mutated_executable",
                        help="Path to the executable for the Dredd-mutated compiler.",
                        type=Path)
    parser_dawn.add_argument("tracking_executable",
                        help="Path to the executable for the compiler instrumented to track mutants.",
                        type=Path)
    parser_dawn.add_argument("--vk_icd",
                        default="",
                        help="Specify driver")

    # Action: kill mutants in Mesa
    parser_mesa = subparsers.add_parser("mesa",
            help='Kill mutants in Mesa')
    parser_mesa.add_argument("dawn",
                        help="Path to Dawn src for using dawn.node to execute tests. Should be unmutated!",
                        type=Path)
    parser_mesa.add_argument("mutated_vk_icd",
                        help="Path to the executable for the Dredd-mutated Mesa vk_icd.",
                        type=Path)
    parser_mesa.add_argument("tracked_vk_icd",
                        help="Path to the executable for the Mesa vk_icd instrumented to track mutants.",
                        type=Path)


    args = parser.parse_args(raw_args)
    
    if not validate_args(args):
        exit()  

    # Kill any dawn processes left over from aborted CTS runs
    kill_gpu_processes()

    with tempfile.TemporaryDirectory() as temp_dir_for_generated_code:
        #with Path('/data/dev/dredd-compiler-testing/dredd_test_runners/wgslsmith_runner/temp') as temp_dir_for_generated_code:
        dredd_covered_mutants_path: Path = Path(temp_dir_for_generated_code, '__dredd_covered_mutants')

        # Make a work directory in which information about the mutant killing process will be stored. If this already
        # exists that's OK - there may be other processes working on mutant killing, or we may be continuing a job that
        # crashed previously.
        Path(args.mutant_kill_path).mkdir(exist_ok=True)
        Path(args.mutant_kill_path,"killed_mutants").mkdir(exist_ok=True)
        Path(args.mutant_kill_path,"surviving_mutants").mkdir(exist_ok=True)
        Path(args.mutant_kill_path,"tracking").mkdir(exist_ok=True)
        Path(args.mutant_kill_path,"tests").mkdir(exist_ok=True)
        Path(args.mutant_kill_path,"logs").mkdir(exist_ok=True)

        # Set up log in append mode so we can continue runs that were cancelled
        logger = logging.getLogger(__name__)
        log_name = Path(args.mutant_kill_path, 'logs', f'info_{os.getpid()}.log')
        logging.basicConfig(filename=log_name, 
                format='%(asctime)s - %(message)s',
                datefmt=('%Y-%m-%d %H:%M:%S'),
                encoding='utf-8', 
                filemode='a',
                level=logging.INFO)

        logging.info('Start CTS killing')

        if args.reliable_tests is not None:

            if args.cmd == 'dawn':
                dawn = args.unmutated_path
                vk_icd = args.vk_icd
            elif args.cmd == 'mesa':
                dawn = args.dawn
                vk_icd = args.tracked_vk_icd

            # Get reliably passing tests
            reliable_tests = get_reliable_tests(args.query,
                dawn,
                args.cts_repo,
                args.mutant_kill_path,
                vk_icd,
                args.reliable_tests)

            print(f'There are {len(reliable_tests)} reliable tests')

        else:
            reliable_tests = None
        
        if args.killing_strategy == 'by_mutant' or args.killing_strategy == 'least_covered_mutants':
            kill_by_mutant(reliable_tests, args)

        elif args.killing_strategy == 'by_test':
            kill_by_test(reliable_tests, args)

def kill_by_mutant(reliable_tests, args):

    print(f'Running mutant sample of {len(args.mutant_sample)} mutants')
    logging.info(f'Kill mutant by mutant: mutant sample of {len(args.mutant_sample)} mutants')

    print(f'list of some mutants: {args.mutant_sample[:10]}')

    # Mutants for killing are given by a sample input list
    # We know that these mutants are covered by the CTS
    unkilled_mutants = set(args.mutant_sample)
    killed_mutants : Set(int) = set()
    already_killed_by_other_tests : list(int) = []
    killed_by_this_test : list(int) = []
    covered_but_not_killed_by_this_test : list(int) = []

    if args.killing_strategy == 'by_mutant':
        queries = [args.query]       
    elif args.killing_strategy == 'least_covered_mutants':
        mutant_to_test_mapping = pd.read_csv(args.mutant_to_test_mapping, sep=' ')

    for mutant in args.mutant_sample:

        mutant_path = Path(args.mutant_kill_path,f'killed_mutants/{str(mutant)}')
        surviving_mutant_path = Path(args.mutant_kill_path,f'surviving_mutants/{str(mutant)}')
        
        # Check whether mutant has already been killed or marked as survived by another process
        if mutant_path.exists():
            print("Skipping mutant " + str(mutant) + " as it is noted as already killed.")
            unkilled_mutants.remove(mutant)
            killed_mutants.add(mutant)
            already_killed_by_other_tests.append(mutant)
            continue

        if surviving_mutant_path.exists():
            print("Skipping mutant " + str(mutant) + " as it is noted as surviving.")
            unkilled_mutants.remove(mutant)
            continue
        
        print("Trying mutant " + str(mutant))
        logging.info("Trying mutant " + str(mutant))

        if args.killing_strategy == 'least_covered_mutants':
            queries = mutant_to_test_mapping.loc[mutant_to_test_mapping['mutant_id'] == int(mutant), 'queries'].iloc[0]
            queries = queries.split(' ')

        mutation_target = args.cmd

        cts_start_time = time.time()

        (mutant_result, failing_tests) = kill_mutant(mutant, queries, mutation_target, reliable_tests, args)
   
        cts_end_time = time.time()

        cts_run_time = cts_end_time - cts_start_time

        print(f'Mutant result: {mutant_result}')
        logging.info(f'CTS ran for {cts_run_time // 60} minutes and {round(cts_run_time % 60,0)} seconds')
        logging.info(f'Mutant result: {mutant_result}')

        if mutant_result == CTSKillStatus.SURVIVED or mutant_result == CTSKillStatus.TEST_TIMEOUT:
            print(f'Mutant ID {mutant} survived!')
            covered_but_not_killed_by_this_test.append(mutant)
            try:
                surviving_mutant_path.mkdir()
                print("Recording survival to file.")
                with open(surviving_mutant_path / "survived.txt", 'w') as outfile:
                    outfile.write(f'Survived!')
            except FileExistsError:
                print(f"Mutant {mutant} was independently discovered to have survived.")

            # If mutant survives, try to kill with WGSLsmith
            kill_with_wgslsmith(mutant, args)

            continue

        print(f"Kill! Mutants killed so far: {len(killed_mutants)}")
        print(f"Mutant killed is ID {mutant}")
        logging.info(f'Mutant killing test is: {failing_tests}')
        logging.info(f'Mutants killed so far: {len(killed_mutants)}')

        unkilled_mutants.remove(mutant)
        killed_mutants.add(mutant)
        killed_by_this_test.append(mutant)
        
        try:
            mutant_path.mkdir()
            print("Writing kill info to file.")
            with open(mutant_path / "kill_info.json", "w") as outfile:
                json.dump({"killing_query": args.query,
                            "killing_tests" : failing_tests,
                            "kill_type": str(mutant_result)}, outfile)
        except FileExistsError:
            print(f"Mutant {mutant} was independently discovered to be killed.")
            continue

    all_considered_mutants = killed_by_this_test \
        + covered_but_not_killed_by_this_test \
        + already_killed_by_other_tests
    all_considered_mutants.sort()
    
    killed_by_this_test.sort()
    covered_but_not_killed_by_this_test.sort()
    already_killed_by_other_tests.sort()
    
    query_output_directory = Path(args.mutant_kill_path,'tests',args.query.replace('*','').replace(':','-'))
    query_output_directory.mkdir(exist_ok=True)
    
    with open(Path(query_output_directory,'kill_summary.json'), "w") as outfile:
        json.dump({"query": args.query,
                    "mutant_sample": args.mutant_sample,
                    "killed_mutants": killed_by_this_test,
                    "skipped_mutants": already_killed_by_other_tests,
                    "survived_mutants": covered_but_not_killed_by_this_test}, outfile)
    
def kill_by_test(test_queries, reliable_tests, args):
    # Loop over tests to determine which mutants are killed by the tests
    for query in test_queries:

        # Check if query has already been run (where we have read in queries from list)
        if query in completed_queries:
            print(f"Query '{query}' already completed")
            continue

        # Try to create a directory for the test; if it already exists then skip this
        # test as that means the results for this test have already been computed or
        # are being computed in parallel by another process
        query_output_directory = Path(args.mutant_kill_path,'tests',query.replace('\*','').replace(':','-'))

        try:
            query_output_directory.mkdir()
        except FileExistsError:
            print(f"Skipping query {query} as a directory for it already exists")
            continue

        test_id = hash(query)

        test_name = 'unit' if 'unittests:' in query else 'cts'
        
        if dredd_covered_mutants_path.exists():
            os.remove(dredd_covered_mutants_path)

        # Log that this test has been started
        logger.info(f'\nQuery: {query}')
        logger.info(f'test_type: {test_name}')
        logger.info(f'test_id: {test_id}')
        
        # Run tests with unmutated Dawn to find the list of tests that pass
        env = os.environ.copy()
        env["VK_ICD_FILENAMES"] = f'{args.vk_icd}'
        run_unmutated_cmd = [f'{args.mutated_path}/tools/run',
                'run-cts', 
                '--verbose',
                f'--bin={args.mutated_path}/out/Debug',
                f'--cts={args.cts_repo}',
                query]
        
        print("Running with unmutated Dawn...")
        run_time_start: float = time.time()
        regular_execution_result: ProcessResult = run_process_with_timeout(
            cmd=run_unmutated_cmd, 
            timeout_seconds=args.run_timeout,
            env=env)
        run_time_end: float = time.time()
        run_time = run_time_end - run_time_start
    
        if regular_execution_result is None:
            print("Runtime timeout.")
            logger.info('Runtime timeout')
            continue

        # Parse stdout to find which tests ran and what their outcome was
        out : list[str] = regular_execution_result.stdout.decode('utf-8').split('\n')

        unmutated_results : dict[str,str] = get_single_tests_from_stdout(out)

        print(f"Std out:\n {regular_execution_result.stdout.decode('utf-8')}\n")
        print(f"Std err:\n {regular_execution_result.stderr.decode('utf-8')}\n")

        # If all tests in the query fail with the unmutated dawn, then move on to next query
        if 'pass' not in unmutated_results.values():
            print('No tests pass with unmutated Dawn; skipping query')
            logger.info('No tests pass with unmutated Dawn; skipping query')
            continue

        # Run the test with mutant tracking enabled
        print("Running with mutant tracking compiler...")
        tracking_environment = os.environ.copy()
        tracking_environment["DREDD_MUTANT_TRACKING_FILE"] = str(dredd_covered_mutants_path)
        tracking_environment["DREDD_MUTANT_TRACKING_PATH"] = str(dredd_covered_mutants_path.parent) + '/'
        tracking_environment["VK_ICD_FILENAMES"] = f'{args.vk_icd}'
        tracking_compile_cmd = [f'{args.tracking_path}/tools/run',
                'run-cts', 
                '--verbose',
                f'--bin={args.tracking_path}/out/Debug',
                f'--cts={args.cts_repo}',
                query]            
        
        mutant_tracking_result : ProcessResult = run_process_with_timeout(cmd=tracking_compile_cmd, 
                                                                          timeout_seconds=args.compile_timeout, 
                                                                          env=tracking_environment) 
        
        if mutant_tracking_result is None:
            print("Mutant tracking compilation timed out.")
            logger.info('Mutant tracking compilation timed out')
            continue
        
        elif not dredd_covered_mutants_path.exists():
            print(f"Std out:\n {mutant_tracking_result.stdout.decode('utf-8')}\n")
            print(f"Std err:\n {mutant_tracking_result.stderr.decode('utf-8')}\n")
            print("No mutant tracking file created.")
            logger.info('No mutant tracking file created')
            with open(Path(args.mutant_kill_path,f'tracking/no_tracking_file_{test_name}_{test_id}.txt'), 'w') as f:
                f.write(query)
            continue
        
        else:
            print("Mutant tracking compilation complete")
            with open(dredd_covered_mutants_path, 'r') as f:
                covered_mutants_info = f.read()
            with open(Path(args.mutant_kill_path,f'tracking/mutant_tracking_file_{test_name}_{test_id}.txt'), 'w') as f:
                f.write(query)
                f.write(covered_mutants_info)

        print(f"Std out:\n {mutant_tracking_result.stdout.decode('utf-8')}\n")
        print(f"Std err:\n {mutant_tracking_result.stderr.decode('utf-8')}\n")
        
        # Load covered mutants into a list. We go from list to set to list to eliminate duplicates.
        covered_by_this_test: List[int] = list(set([int(line.strip()) for line in
                                                    open(dredd_covered_mutants_path, 'r').readlines()]))
        covered_by_this_test.sort()
        candidate_mutants_for_this_test: List[int] = ([m for m in covered_by_this_test if m not in killed_mutants])
        
        print("Number of mutants to try: " + str(len(candidate_mutants_for_this_test)))
        already_killed_by_other_tests: List[int] = ([m for m in covered_by_this_test if m in killed_mutants])
        killed_by_this_test: List[int] = []
        covered_but_not_killed_by_this_test: List[int] = []
                   
        logger.info(f'Number of mutants to try: {str(len(candidate_mutants_for_this_test))}')

        # Enable mutants one at a time
        # Check whether any tests within the current query that previously passed now fail
        for mutant in candidate_mutants_for_this_test:

            mutant_path = Path(args.mutant_kill_path,f'killed_mutants/{str(mutant)}')
            surviving_mutant_path = Path(args.mutant_kill_path,f'surviving_mutants/{str(mutant)}')

            if mutant_path.exists():
                print("Skipping mutant " + str(mutant) + " as it is noted as already killed.")
                unkilled_mutants.remove(mutant)
                killed_mutants.add(mutant)
                already_killed_by_other_tests.append(mutant)
                print(f'Unkilled mutants: {unkilled_mutants}')
                continue
            print(surviving_mutant_path)
            if surviving_mutant_path.exists():
                print("Skipping mutant " + str(mutant) + " as it is noted as surviving.")
                unkilled_mutants.remove(mutant)
                continue
            
            print("Trying mutant " + str(mutant))
            
            env = os.environ.copy()
            env["VK_ICD_FILENAMES"] = f'{args.vk_icd}'
            mutated_cmd = [f'{args.mutated_path}/tools/run',
                'run-cts', 
                '--verbose',
                f'--bin={args.mutated_path}/out/Debug',
                '--cts',
                str(args.cts_repo),
                query]    

            (mutant_result, failing_tests) = run_webgpu_cts_test_with_mutants(mutants=[mutant],
                    mutated_cmd=mutated_cmd,
                    timeout_seconds=args.compile_timeout,
                    unmutated_results = unmutated_results,
                    reliable_tests = reliably_passing_tests,
                    env=env)
            
            #kill_gpu_processes()

            print(f'Mutant result: {mutant_result}')

            if mutant_result == CTSKillStatus.SURVIVED or mutant_result == CTSKillStatus.TEST_TIMEOUT:
                covered_but_not_killed_by_this_test.append(mutant)
                continue

            unkilled_mutants.remove(mutant)
            killed_mutants.add(mutant)
            killed_by_this_test.append(mutant)
            print(f"Kill! Mutants killed so far: {len(killed_mutants)}")
            try:
                mutant_path.mkdir()
                print("Writing kill info to file.")
                with open(mutant_path / "kill_info.json", "w") as outfile:
                    json.dump({"killing_query": query,
                               "killing_tests" : list(failing_tests),
                               "kill_type": str(mutant_result)}, outfile)
            except FileExistsError:
                print(f"Mutant {mutant} was independently discovered to be killed.")
                continue

        all_considered_mutants = killed_by_this_test \
            + covered_but_not_killed_by_this_test \
            + already_killed_by_other_tests
        all_considered_mutants.sort()
        
        killed_by_this_test.sort()
        covered_but_not_killed_by_this_test.sort()
        already_killed_by_other_tests.sort()
        with open(Path(query_output_directory,'kill_summary.json'), "w") as outfile:
            json.dump({"query": query,
                       "covered_mutants": covered_by_this_test,
                       "killed_mutants": killed_by_this_test,
                       "skipped_mutants": already_killed_by_other_tests,
                       "survived_mutants": covered_but_not_killed_by_this_test}, outfile)
        
        logger.info('Query complete')


def still_testing(start_time_for_overall_testing: float,
                  time_of_last_kill: float,
                  total_test_time: int,
                  maximum_time_since_last_kill: int) -> bool:
    if 0 < total_test_time < int(time.time() - start_time_for_overall_testing):
        return False
    if 0 < maximum_time_since_last_kill < int(time.time() - time_of_last_kill):
        return False
    return True

def check_mutation_trees(args):

    print("Building the real mutation tree...")
    with open(args.mutation_info_file, 'r') as json_input:
        mutation_tree = MutationTree(json.load(json_input))
    print("Built!")
    print("Building the mutation tree associated with mutant coverage tracking...")
    with open(args.mutation_info_file_for_mutant_coverage_tracking, 'r') as json_input:
        mutation_tree_for_coverage_tracking = MutationTree(json.load(json_input))
    print("Built!")
    print("Checking that the two mutation trees match...")
    assert mutation_tree.mutation_id_to_node_id == mutation_tree_for_coverage_tracking.mutation_id_to_node_id
    assert mutation_tree.parent_map == mutation_tree_for_coverage_tracking.parent_map
    assert mutation_tree.num_nodes == mutation_tree_for_coverage_tracking.num_nodes
    assert mutation_tree.num_mutations == mutation_tree_for_coverage_tracking.num_mutations
    print("Check complete!")


def validate_args(args) -> bool:
    
    assert args.mutation_info_file != args.mutation_info_file_for_mutant_coverage_tracking

    if args.query_source == 'file':
        assert Path(args.query_file).exists()
    elif args.query_source == 'cts_repo':
        assert Path(args.cts_repo).exists()

    cts_base = Path(args.cts_repo,'src')

    check_mutation_trees(args)

    if args.seed is not None:
        random.seed(args.seed)

    return True

def get_test_queries(args):
    # Get list of test queries
    if args.query_source == "cts_repo":
        test_queries = get_queries_from_cts(query,
            cts_base,
            args.unittests_only,
            args.cts_only,
            args.reliable_tests,
            args.mutated_path,
            args.cts_repo,
            args.mutant_kill_path,
            args.vk_icd)

    elif args.query_source == "file":
        with open(args.query_file, 'r') as f:
            test_queries = json.load(f)

    if args.query is not None:
        test_queries = [args.query]

    return test_queries


def get_reliable_tests(query : str,
            dawn : Path,
            cts_repo : Path,
            mutant_killing_path : Path,
            vk_icd : str,
            reliable_tests : Path = None):
    
    # Identify reliable tests within the queries
    # These are individual level tests that consistently pass for
    # unmutated Dawn. Record these individual queries to use for results
    # checking tests that fail when a mutation is enabled.
    if reliable_tests is not None and Path(reliable_tests).exists():
        with open(reliable_tests,'r') as f:
            reliably_passing_tests : list = json.load(f)

    else:
        reliable_test_args = [str(dawn),
            str(cts_repo),
            str(mutant_killing_path),
            '--query_base',
            query,
            '--vk_icd',
            str(vk_icd)]

        reliably_passing_tests = find_non_flaky_cts_tests.main(reliable_test_args)

        print(f'There are {len(reliably_passing_tests)} reliably passing tests')

        if reliable_tests:
            with open(reliable_tests,'w') as f:
                json.dump(reliably_passing_tests,f,indent=4)

    return reliably_passing_tests

def kill_mutant(mutant, queries, target, reliable_tests, args):

    if target == 'dawn':
        vk_icd = str(args.vk_icd)
        dawn = str(args.mutated_path)
    elif target == 'mesa':
        vk_icd = str(args.mutated_vk_icd)
        dawn = str(args.dawn)

    # Mark mutant as surviving until we kill it
    # This includes mutants that are only covered by skipped tests
    mutant_result = CTSKillStatus.SURVIVED
    failing_tests = []

    for query in queries:

        print(query)

        env = os.environ.copy()
        env["VK_ICD_FILENAMES"] = vk_icd

        test_cmd = [f'{dawn}/tools/run',
            'run-cts', 
            '--verbose',
            f'--bin={dawn}/out/Debug',
            '--cts',
            str(args.cts_repo),
            f"'{query}'"]  

        # Get unmutated query results 
        unmutated_result = subprocess.run(test_cmd, env=env, capture_output=True, text=True)

        passing_tests = get_passing_tests(unmutated_result.stdout)

        # Get mutated query results
        env["DREDD_ENABLED_MUTATION"] = str(mutant)

        shell_cmd = ' '.join(mutated_cmd)  

        (mutant_result, failing_tests) = kill_mutant_cmd(shell_cmd, env, dawn, args.cts_repo, passing_tests)

        # Return as soon as we find a killing test
        if mutant_result != CTSKillStatus.SURVIVED and mutant_result != CTSKillStatus.TEST_TIMEOUT:
            return (mutant_result, failing_tests)

    return mutant_result, failing_tests
   
def kill_mutant_cmd(shell_cmd, env, dawn, cts, passing_tests, n_tries = 3):

    timeout = 60*60 # 1 hour

    # Parse stdout live and kill the process if the 
    # mutant is killed by a reliable test that fails
    mutant_result = CTSKillStatus.SURVIVED
    failing_tests = None
    end_time = time.time() + timeout

    process = subprocess.Popen(
        shell_cmd,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        universal_newlines=True,
        text=True,
        shell=True,
        start_new_session=True,
        preexec_fn=lambda: signal.alarm(timeout),
        env=env
    )

    for line in iter(process.stdout.readline, ''):
        print(line)
        if f' - fail' in line:
            test = line[:line.index(' ')] 

            if test in passing_tests:
            
                print('Repeating test to check reliability of fail result...')
                checks = []
                for i in range(n_tries):
                    print(f'Repeat {i}...')
                    checks.append(check_test(test, env, dawn, cts))

                if all(checks):
                    os.killpg(os.getpgid(process.pid), signal.SIGTERM)
                    mutant_result = CTSKillStatus.KILL_TEST_FAIL
                    failing_tests = test
        
        if time.time() > end_time:
            os.killpg(os.getpgid(process.pid), signal.SIGTERM)
            print('CTS timeout!')
            mutant_result = CTSKillStatus.TEST_TIMEOUT
            exit(1)

    process.stdout.close()
    process.wait()
    
    kill_gpu_processes()

    return (mutant_result, failing_tests)

def get_covering_queries(mutant_file : Path, test_group_mapping : Path):

    # Get test IDs
    with open(mutant_file,'r') as f:
        tests = f.readlines()

    # Decode test IDs to get list of queries
    with open(test_group_mapping,'r') as f:
        test_groups = f.load()

    queries = [query for id, query in test_groups.items()]

    return queries

def check_test(test, env, dawn, cts) -> bool:
    '''
        Returns True if the test is confirmed to fail
        Returns False otherwise
    '''

    if test[-1] == ':' or test[-1] == ',':
        test = test + '*'
    
    mutated_cmd = [f'{dawn}/tools/run',
    'run-cts', 
    '--verbose',
    f'--bin={dawn}/out/Debug',
    '--cts',
    str(cts),
    f'{test}']  

    result = subprocess.run(mutated_cmd, env=env, capture_output=True, text=True)

    if '- fail' in result.stdout:
        return True
    else:
        return False

def kill_with_wgslsmith(mutant, args):

    wgslsmith_args = [str(args.mutation_info_file),
        str(args.mutation_info_file_for_mutant_coverage_tracking),
        f'{str(args.wgslsmith)}',
        str(args.mutant_kill_path),
        '--mutants_to_kill', str(mutant),
        '--total_test_time', str(10*60),
        'mesa',
        f'{str(args.dawn)}/out/Debug/dawn.node',
        str(args.mutated_vk_icd),
        str(args.tracked_vk_icd)]

    run.wgslsmith.kill_mutants.main(wgslsmith_args)

def get_passing_tests(stdout : str) -> list[str]:
    
    passing_tests = []

    stdout = stdout.split('\n')

    for line in stdout:
        if f' - pass' in line:
            test = line[:line.index(' ')] 
            passing_tests.append(test)

    return passing_tests
            
def comma_list(arg):
    return arg.split(',')

if __name__ == '__main__':
    main()
