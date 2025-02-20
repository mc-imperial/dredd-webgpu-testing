import argparse
import shutil

import json
import os
import subprocess
import random
import tempfile
import time

from common.constants import DEFAULT_COMPILATION_TIMEOUT, DEFAULT_RUNTIME_TIMEOUT
from common.mutation_tree import MutationTree
from common.run_process_with_timeout import ProcessResult, run_process_with_timeout
from common.run_test import run_with_tracking, run_with_mutants, compare_results, KillStatus
from utils import *

from pathlib import Path
from typing import List, Set


def main(raw_args=None):
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
    parser.add_argument("wgslsmith_root", help="Path to a checkout of WGSLsmith", #TODO: check build exe location
                        type=Path)
    parser.add_argument("mutant_kill_path",
                        help="Directory in which to record mutant kill info and mutant killing tests.",
                        type=Path)
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
    parser.add_argument("--dawn_vk",
                        default="dawn:vk:7425",
                        help="Specify driver code")
    parser.add_argument("--mutants_to_kill",
                        default=None,
                        type=comma_list,
                        help="Optional list of mutant IDs to target")
    parser.add_argument("--coverage_check",
                        action=argparse.BooleanOptionalAction,
                        help="Runs WGSLsmith programs with mutant tracking enabled to check whether any mutants are covered.")
    parser.add_argument("--n_coverage_checks",
                        type=int,
                        default=50,
                        help="Optionally specify the number of programs to run with tracking to check whether mutants are covered.")
    parser.add_argument("--log",
                        type=str,
                        help="Optional logging file to record summary of testing.")
    parser.add_argument("--standalone",
                        action=argparse.BooleanOptionalAction,
                        help="Runs WGSLsmith programs as standalone JavaScript using Node and Dawn rather than the WGSLsmith harness")
    parser.add_argument("--js_wrapper",
                        default=None,
                        type=Path)

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
                        help="Path to Dawn for using dawn.node to execute WGSLsmith tests. Should be unmutated!",
                        type=Path)
    parser_mesa.add_argument("mutated_vk_icd",
                        help="Path to the executable for the Dredd-mutated Mesa vk_icd.",
                        type=Path)
    parser_mesa.add_argument("tracked_vk_icd",
                        help="Path to the executable for the Mesa vk_icd instrumented to track mutants.",
                        type=Path)

    args = parser.parse_args(raw_args)

    if args.log:
        logging_file = Path(args.log)
        logdata = LogData(logging_file)

    assert args.mutation_info_file != args.mutation_info_file_for_mutant_coverage_tracking

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

    exit()
    
    if args.seed is not None:
        random.seed(args.seed)

    with tempfile.TemporaryDirectory() as temp_dir_for_generated_code:
        #with Path('/data/work/tint_mutation_testing/temp') as temp_dir_for_generated_code:
        wgslsmith_generated_program: Path = Path(temp_dir_for_generated_code, '__prog.wgsl')
        wgslsmith_reconditioned_program: Path = Path(temp_dir_for_generated_code, '__reconditioned.wgsl')
        wgslsmith_js_program: Path = Path(temp_dir_for_generated_code, '__prog.js')
        wgslsmith_js_wrapper: Path = Path(temp_dir_for_generated_code, '__script.js')
        dredd_covered_mutants_path: Path = Path(temp_dir_for_generated_code, '__dredd_covered_mutants')
        wgslsmith_input : Path = Path(temp_dir_for_generated_code, '__inputs.json')

        killed_mutants: Set[int] = set()

        if args.mutants_to_kill is not None:
            unkilled_mutants: Set[int] = set([int(x) for x in args.mutants_to_kill])
        else:
            unkilled_mutants: Set[int] = set(range(0, mutation_tree.num_mutations))

        # Make a work directory in which information about the mutant killing process will be stored. If this already
        # exists that's OK - there may be other processes working on mutant killing, or we may be continuing a job that
        # crashed previously.
        Path(args.mutant_kill_path).mkdir(exist_ok=True)
        Path(args.mutant_kill_path, "tests").mkdir(exist_ok=True)
        Path(args.mutant_kill_path, "killed_mutants").mkdir(exist_ok=True)
        Path(args.mutant_kill_path, "tracking").mkdir(exist_ok=True)

        if args.coverage_check:
            wgslsmith_covered = {}

        while still_testing(total_test_time=args.total_test_time,
                            maximum_time_since_last_kill=args.maximum_time_since_last_kill,
                            start_time_for_overall_testing=start_time_for_overall_testing,
                            time_of_last_kill=time_of_last_kill):
            
            if dredd_covered_mutants_path.exists():
                os.remove(dredd_covered_mutants_path)
            
            if wgslsmith_generated_program.exists():
                os.remove(wgslsmith_generated_program)

            if args.coverage_check:
                if len(wgslsmith_covered) > args.n_coverage_checks:
                    return wgslsmith_covered
           
            # Generate a WGSLsmith program
            wgslsmith_seed = random.randint(0, 2 ** 32 - 1)
            wgslsmith_test_name: str = "wgslsmith_" + str(wgslsmith_seed)

            print("Generating...")
            result = gen_wgslsmith_program(str(wgslsmith_generated_program))

            if not result:
                print(f"WGSLsmith timed out (seed {wgslsmith_seed})")
                continue

            # Run the program with the mutant tracking compiler to (a) check non mutated results,
            # and (b) get the list of covered mutants
            if args.cmd == "dawn":
                regular_execution_result = run_wgslsmith_program(program_js, 
                    f'{args.tracking_dawn}/dawn.node', 
                    vk_icd = str(args.vk_icd), 
                    tracking = dredd_covered_mutants_path)

            elif args.cmd == "mesa":
                regular_execution_result = run_wgslsmith_program(program_js, 
                    f'{args.dawn}/dawn.node', 
                    vk_icd = str(args.tracked_vk_icd), 
                    tracking = dredd_covered_mutants_path)

            if regular_execution_result is None:
                print("Runtime timeout.")
                continue

            if regular_execution_result.returncode != 0:
                print(f"Std out:\n {regular_execution_result.stdout.decode('utf-8')}\n")
                print(f"Std err:\n {regular_execution_result.stderr.decode('utf-8')}\n")
                print("Execution of generated program failed without mutants.")
                continue

            if not dredd_covered_mutants_path.exists():
                print(f"Std out:\n {regular_execution_result.stdout.decode('utf-8')}\n")
                print(f"Std err:\n {regular_execution_result.stderr.decode('utf-8')}\n")
                print("No mutant tracking file created.")
                continue

            # If regular execution succeeded and some mutants are covered, then proceed
            print(f"Std out:\n {regular_execution_result.stdout.decode('utf-8')}\n")
            print(f"Std err:\n {regular_execution_result.stderr.decode('utf-8')}\n")

            print("Execution of generated program succeeded without mutants.")
            print("Mutant tracking compilation complete")

            # Get list of tracked mutants
            
            with open(dredd_covered_mutants_path, 'r') as f:
                covered_mutants_info = f.read()

            # Load file contents into a list. We go from list to set to list to eliminate duplicates.
            covered_by_this_test: List[int] = list(set([int(line.strip()) for line in
                                                        open(dredd_covered_mutants_path, 'r').readlines()]))
            covered_by_this_test.sort()

            with open(Path(args.mutant_kill_path,f'tracking/mutant_tracking_file_wgslsmith_{wgslsmith_seed}.txt'), 'w') as f:
                f.writelines([(str(x) + '\n') for x in covered_by_this_test])

            # If we are only checking coverage, then record that we have coverage for this test and move to next
            if args.coverage_check:
                wgslsmith_covered[wgslsmith_test_name] = covered_by_this_test
                continue
            
            if args.mutants_to_kill is not None:
                 candidate_mutants_for_this_test: List[int] = ([m for m in covered_by_this_test 
                                                                if m not in killed_mutants
                                                                and m in unkilled_mutants])
            else:
                candidate_mutants_for_this_test: List[int] = ([m for m in covered_by_this_test if m not in killed_mutants])

            print(f'n mutants covered by the wgslsmith test: {len(covered_by_this_test)}')
            print(f'n mutants covered by wgslsmith that are not killed by cts: {len(candidate_mutants_for_this_test)}')

            print("Number of mutants to try: " + str(len(candidate_mutants_for_this_test)))
            
            already_killed_by_other_tests: List[int] = ([m for m in covered_by_this_test if m in killed_mutants])
            killed_by_this_test: List[int] = []
            covered_but_not_killed_by_this_test: List[int] = []
 
            if args.log:
                logdata.new_test(wgslsmith_test_name)
                logdata.mutants_to_kill = len(set(args.mutants_to_kill)) if args.mutants_to_kill else 'NA'
                logdata.update_mutant_candidates(candidate_mutants_for_this_test)
                logdata.mutants_covered_this_test = len(covered_by_this_test)
                logdata.candidate_mutants_for_this_test = len(candidate_mutants_for_this_test)

                logdata.write_pre_test_summary()

            # Extract non-mutated output for comparison with mutated output
            output = extract_output(regular_execution_result.stdout.decode("utf-8"))

            for mutant in candidate_mutants_for_this_test:

                if not still_testing(total_test_time=args.total_test_time,
                                     maximum_time_since_last_kill=args.maximum_time_since_last_kill,
                                     start_time_for_overall_testing=start_time_for_overall_testing,
                                     time_of_last_kill=time_of_last_kill):
                    break

                mutant_path = Path(args.mutant_kill_path, f'killed_mutants/{str(mutant)}')
                if mutant_path.exists():
                    print("Skipping mutant " + str(mutant) + " as it is noted as already killed.")
                    unkilled_mutants.remove(mutant)
                    killed_mutants.add(mutant)
                    already_killed_by_other_tests.append(mutant)
                    continue

                if args.cmd == "dawn":
                    mutant_result = run_wgslsmith_program(program,
                        args.mutated_dawn,
                        vk_icd = args.vk_icd,
                        mutants=[mutant])
                
                elif args.cmd == "mesa":
                    mutant_result = run_wgslsmith_program(program,
                        args.dawn,
                        vk_icd = args.mutated_vk_icd,
                        mutants=[mutant])

                (mutant_result, mutant_result_stdout) = compare_results(regular_execution_result, mutant_result)

                print("Mutant result: " + str(mutant_result))
                 
                if mutant_result == KillStatus.SURVIVED_IDENTICAL \
                        or mutant_result == KillStatus.SURVIVED_BINARY_DIFFERENCE:
                    #or mutant_result == KillStatus.KILL_COMPILER_CRASH:
                    covered_but_not_killed_by_this_test.append(mutant)
                    continue

                unkilled_mutants.remove(mutant)
                killed_mutants.add(mutant)
                killed_by_this_test.append(mutant)
                time_of_last_kill = time.time()
                print(f"Kill! Mutants killed so far: {len(killed_mutants)}")
                

                try:
                    mutant_path.mkdir()
                    print("Writing kill info to file.")
                    with open(mutant_path / "kill_info.json", "w") as outfile:
                        json.dump({"killing_test": wgslsmith_test_name,
                                   "kill_type": str(mutant_result),
                                   "unmutated_stdout" : regular_execution_result.stdout.decode("utf-8"),
                                   "mutated_stdout" : mutant_result_stdout.stdout.decode("utf-8")},
                                   outfile)
                except FileExistsError:
                    print(f"Mutant {mutant} was independently discovered to be killed.")
                    continue
             
            terminating_test_process: bool = not still_testing(
                total_test_time=args.total_test_time,
                maximum_time_since_last_kill=args.maximum_time_since_last_kill,
                start_time_for_overall_testing=start_time_for_overall_testing,
                time_of_last_kill=time_of_last_kill)

            all_considered_mutants = killed_by_this_test \
                + covered_but_not_killed_by_this_test \
                + already_killed_by_other_tests
            all_considered_mutants.sort()

            if covered_by_this_test != all_considered_mutants:
                #assert terminating_test_process
                terminated_early: bool = True
            else:
                terminated_early: bool = False
            
            killed_by_this_test.sort()
            covered_but_not_killed_by_this_test.sort()
            already_killed_by_other_tests.sort()
            
            print('Saving kill summary...')
            logdata.mutants_killed_this_test = len(killed_by_this_test)
            logdata.update_mutants_killed(killed_by_this_test)
            logdata.write_post_test_summary()
            
            test_output_directory: Path = Path(args.mutant_kill_path, f'tests/{wgslsmith_test_name}')
            
            try:
                test_output_directory.mkdir()
            except FileExistsError:
                print(f"Skipping seed {wgslsmith_seed} as a directory for it already exists")
                continue
            shutil.copy(src=wgslsmith_generated_program, dst=test_output_directory / "prog.wgsl")

            with open(test_output_directory / "kill_summary.json", "w") as outfile:
                json.dump({"terminated_early": terminated_early,
                           "covered_mutants": covered_by_this_test,
                           "killed_mutants": killed_by_this_test,
                           "skipped_mutants": already_killed_by_other_tests,
                           "survived_mutants": covered_but_not_killed_by_this_test}, outfile)


def run_wgslsmith_test(args, 
        program : Path,
        input : Path,
        expected : Path = None,
        standalone : bool = True) -> ProcessResult:

    if standalone:

        # Run standalone test
        run_cmd = ['node', 'script.js', '/data/dev/dawn/out/Debug/dawn.node']

        result = subprocess.run(run_cmd, cwd='./standalone/', capture_output=True, timeout=60)
        
        return result


    else:

        compiler_args = get_wgslsmith_compiler_args(wgslsmith_reconditioned_program,
                wgslsmith_input,
                args.dawn_vk)
        
        run_cmd = [str(args.wgslsmith_root / "wgslsmith")] + compiler_args
        
        print("Running with unmutated WGSLsmith...")
        env = os.environ.copy()

        env["VK_ICD_FILENAMES"] = f'{args.vk_icd}'

        regular_execution_result: ProcessResult = run_process_with_timeout(
            cmd=run_cmd, 
            timeout_seconds=args.run_timeout,
            env=env)

        return regular_execution_result

def get_wgslsmith_compiler_args(program, input, dawn_vk):
    return ["run",
            program,
            input,
            "-c",
            dawn_vk]

def extract_output(output : str, standalone : bool = True):

    output = output.replace('\n','')
    output = output.replace(' ','')

    if standalone:
        output_start_index = output.find('[', output.find('result')) + 1
        output_end_index = output.find(']', output_start_index)

    else:
        output_start_index = output.find('outputs') + 18
        output_end_index = output.rfind(']')
    
    output = output[output_start_index:output_end_index].split(",")
    output = [int(o) for o in output]

    return output

def still_testing(start_time_for_overall_testing: float,
                  time_of_last_kill: float,
                  total_test_time: int,
                  maximum_time_since_last_kill: int) -> bool:
    if 0 < total_test_time < int(time.time() - start_time_for_overall_testing):
        return False
    if 0 < maximum_time_since_last_kill < int(time.time() - time_of_last_kill):
        return False
    return True

def comma_list(arg):
    return arg.split(',')

class LogData:

    def __init__(self, logging_file : Path):
        self.mutants_to_kill : int
        self.wgslsmith_tests : int = 0
        self.mutants_covered_all_tests : set[int] = set()
        self.mutants_killed_all_tests : set[int] = set()
        self.mutants_covered_this_test : int
        self.candidate_mutants_for_this_test : int
        self.mutants_killed_this_test : int
        self.logging_file : Path = logging_file
        self.current_test_id : int

    def new_test(self, test_id : str):
        self.wgslsmith_tests += 1
        self.current_test_id = test_id

        with open(self.logging_file, 'a') as f:
            f.write(f"Test ID: {self.current_test_id}\n")
            f.write(f"Mutants tried:")

    def write_trying_mutant(self, id : str):
        with open(self.logging_file, 'a') as f:
            f.write(f' {id}')

    def update_mutant_candidates(self, mutants : list[int]):
        self.mutants_covered_all_tests = set(mutants).union(self.mutants_covered_all_tests)

    def update_mutants_killed(self, mutants : list[int]):
        self.mutants_killed_all_tests = set(mutants).union(self.mutants_killed_all_tests)

    def write_pre_test_summary(self):
        with open(self.logging_file, 'a') as f:
            f.write(f"\nSummary for test ID {self.current_test_id}\n")
            f.write(f"Mutants to kill: {self.mutants_to_kill}\n")
            f.write(f"Running total of WGSLsmith tests: {self.wgslsmith_tests}\n")
            f.write(f"Mutants covered by this test: {self.mutants_covered_this_test}\n")
            f.write(f"Mutants covered by this test that have not been killed by the CTS: {self.candidate_mutants_for_this_test}\n")
            f.write(f"Running total of mutants covered by WGSLsmith testst that have not been killed by the CTS: {len(self.mutants_covered_all_tests)}\n")
            f.write(f"\n")

    def write_post_test_summary(self):
        with open(self.logging_file, 'a') as f:
            f.write(f"Mutants to kill killed by this test: {self.mutants_killed_this_test}\n")
            f.write(f"\nRunning total of mutants to kill killed by all tests: {len(self.mutants_killed_all_tests)}\n")
            f.write(f"\n")


if __name__ == '__main__':
    main()
