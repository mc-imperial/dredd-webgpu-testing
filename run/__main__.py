import os
import subprocess
import multiprocessing
import argparse
import json
from pathlib import Path
from random import sample
import time
from datetime import datetime

from cts.utils import get_mutant_coverage
import wgslsmith.kill_mutants
import cts.kill_mutants

def main():

    parser = argparse.ArgumentParser()

    parser.add_argument("output",
            type=str,
            help='Path to output directory')
    parser.add_argument("dawn_mutated",
            type=str,
            help='Path to Dawn checkout for mutation')
    parser.add_argument("dawn_coverage",
            type=str,
            help='Path to Dawn checkout for mutant coverage measurement')
    parser.add_argument("wgslsmith_exe",
            type=str,
            help='Path to WGSLsmith executable')
    parser.add_argument("cts",
            type=str,
            help='Path to CTS')
    parser.add_argument("vk_icd",
            type=str)
    parser.add_argument("--timeout",
            type=int,
            default=60,
            help="Timeout in seconds")

    subparsers = parser.add_subparsers(dest="cmd")

    # Action: mutate Dawn
    parser_mutate = subparsers.add_parser("mutate",
            help='Mutate Dawn')
    parser_mutate.add_argument("mutation_target",
            type=str,
            help='Relative path from Dawn src to folder within which all files will be mutated')
    parser_mutate.add_argument("info_file_mutated",
            type=str)
    parser_mutate.add_argument("info_file_coverage",
            type=str)
    parser_mutate.add_argument("compile_commands_mutated",
            type=str)
    parser_mutate.add_argument("compile_commands_coverage",
            type=str)
    parser_mutate.add_argument("--commit",
            type=str,
            help='Dawn commit')
    
    # Action: get mutant coverage
    parser_coverage = subparsers.add_parser("coverage",
            help='Get mutant coverage')
    parser_coverage.add_argument("subject",
            choices=['cts','wgslsmith'],
            help='Subject of coverage')
    parser_coverage.add_argument("info_file_mutated",
            type=str)
    parser_coverage.add_argument("info_file_coverage",
            type=str)
    parser_coverage.add_argument("--js_wrapper",
            type=str,
            help='JavaScript wrapper to run WGSLsmith programs')
    parser_coverage.add_argument("--no_overwrite",
            action='store_true',
            help="Do not overwrite existing coverage from previously run coverage measurement process")
    parser_coverage.add_argument("--no_of_tests",
            default=50,
            type=int,
            help='Number of WGSLsmith tests to use for coverage sample')

    # Action: kill
    parser_kill = subparsers.add_parser("kill",
            help='Kill mutants')
    parser_kill.add_argument("killer", 
            choices=['cts','wgslsmith'],
            help='What to kill mutants with')
    parser_kill.add_argument("info_file_mutated",
            type=str)
    parser_kill.add_argument("info_file_coverage",
            type=str)
    parser_kill.add_argument("--reliable_tests",
            type=str)
    parser_kill.add_argument("--query",
            type=str,
            default='webgpu:*')
        

    args = parser.parse_args()

    match args.cmd:
        case "mutate":
            print("Not implemented yet")
            pass

        case "coverage":
            if args.subject == "cts":
                find_mutants_covered_by_cts(args)
            elif args.subject == "wgslsmith":
                find_mutants_covered_by_wgslsmith(args)

        case "kill":
            if args.killer == "cts":
                kill_mutants_with_cts(args)
            elif args.killer == "wgslsmith":
                kill_mutants_with_wgslsmith(args)        

        case _:
            print("Not implemented yet")
            pass

def get_surviving_mutants(output_dir : Path) -> list[int]:
    
    with open(Path(output_dir, 'surviving_mutants.txt'),'r') as f:
        data = f.read()
        return [int(x) for x in data.split()]


def make_dawn_clean(mutated : Path, coverage : Path, commit : str) -> bool :

    '''
    If mutations exist already in the mutated or coverage
    Dawn checkouts, then restore them so that we don't
    compound mutations (this will cause errors)
    '''

    # Find list of files containing Dredd intrumentation and restore
    for src in [mutated, coverage]:
        dredd_files = find_dredd_files(src)
        if len(dredd_files) != 0:
            print(f'Restoring {src} with files: {dredd_files}')
            if not restore(src, dredd_files):
                print('Restoration error! Aborting')
                return False

    # Check for mutants again to ensure they have been removed
    if  mutants_exist(mutated) or mutants_exist(coverage):
        return False

    # Check out Dawn commit
    for src in [mutated, coverage]:
        check_out_commit(src, commit)

    # Rebuild
    if args.rebuild_dawn:
        for src in [mutated, coverage]:
            rebuild_dawn(src)

    return True

def rebuild_dawn(dawn: Path):
    result = subprocess.run(['./scripts/build_dawn.sh', str(dawn)])

def check_out_commit(dawn : Path, commit : str):
    print(f'Checking out commit {commit} for {dawn}')
    cmd = ['git','pull']
    result = subprocess.run(cmd, cwd=dawn)

    cmd = ['git', 'checkout', commit]
    result = subprocess.run(cmd, cwd=dawn)


def find_dredd_files(src : Path) -> list[Path] :

    find_files = subprocess.Popen(['find',str(src),'-name','*.cc'], stdout=subprocess.PIPE)
    dredd_files = subprocess.run(['xargs','grep','-l','dredd'], stdin=find_files.stdout, capture_output=True, text=True)

    # Convert to list of paths and remove trailing newline from captured output
    dredd_files = dredd_files.stdout.strip('\n').split('\n')

    dredd_files = [Path(x) for x in dredd_files if x != '']

    return dredd_files

def mutants_exist(src : Path) -> bool :

    find_files = subprocess.Popen(['find',str(src),'-name','*.cc'], stdout=subprocess.PIPE)
    find_dredd = subprocess.Popen(['xargs','grep','-l','dredd'], stdout=subprocess.PIPE, stdin=find_files.stdout)
    dredd_count = subprocess.run(['wc', '-l'], stdin=find_dredd.stdout, capture_output=True)
    
    print(f'Number of files that contain "dredd" in "{src}" is: {int(dredd_count.stdout)}')

    return False if (int(dredd_count.stdout)==0) else True
    
def mutate_dawn(mutation_script : Path, 
            dawn_mutated : Path,
            dawn_coverage : Path,
            files_to_mutate : Path,
            files_to_track : Path) -> int :

    '''
    Script contains the following steps:
        # Mutate Dawn
        # Mutate Dawn with coverage
        # Re-build Dawn
        # Re-build Dawn with coverage
    '''

    cmd = [str(mutation_script),
        str(dawn_mutated),
        str(dawn_coverage),
        str(files_to_mutate),
        str(files_to_track)]

    result = subprocess.run(cmd)

    return result.returncode

def build_wgslsmith(wgslsmith : Path, dawn : Path):

    print('Building WGSLsmith...')

    cmd = [str(Path(wgslsmith, 'build.py')),
        '--dawn-path',
        str(dawn)]

    result = subprocess.run(cmd, cwd=wgslsmith)
    return result.returncode


def restore(git_path : Path, files : list[str]) -> bool:

    for file in files:
        cmd = ['git',
            '-C',
            str(git_path),
            'restore',
            str(file)]

        result = subprocess.run(cmd)

        if result.returncode != 0:
            return False

    return True

def get_files_for_mutation(compile_commands : Path, mutation_target) -> list[str]:

    # read in compile commands database
    with open(compile_commands) as f:
        data = json.load(f)
    
    files = [x["file"] for x in data]
    files = [x for x in files if '.cc' in x 
                            and '_test' not in x
                            and '_fuzz' not in x
                            and '_bench' not in x
                            and str(mutation_target) in x]

    # remove files from mutation that we know aren't compatible with current Dredd
    files = [x for x in files if 'src/tint/lang/core/constant/eval.cc' not in x
                            and 'src/tint/lang/wgsl/resolver/dependency_graph.cc' not in x
                            and 'src/tint/lang/core/ir/transform/common/referenced_module_vars.cc' not in x]

    return files

def restore_and_mutate_dawn():

    # Delete dredd covered mutants path since mutations will be updated
    try:
        os.remove(args.cts_covered_mutants_path)
    except OSError:
        pass
        
    # Ensure that no mutants exist already in the files
    if not make_dawn_clean(args.dawn_mutated, 
        args.dawn_mutant_tracking, 
        args.dawn_commit):
        print('Error!')
        return
    
    # Optionally scrape the compile commands database from the mutation targets 
    # This checks that our mutation targets were actually built by the original build process
    # Since if they weren't, then we cannot mutate them (e.g. test files that are not built by default)
    if args.scrape_mutation_files:

        mutation_files = get_files_for_mutation(args.compile_commands_mutated, args.mutation_target)
        coverage_files = get_files_for_mutation(args.compile_commands_coverage, args.mutation_target)

        with open(args.mutation_files_output,'w') as f:
            f.write(' '.join(mutation_files))

        with open(args.coverage_files_output,'w') as f:
            f.write(' '.join(coverage_files))

    print('Mutating...')

    mutate_dawn(args.mutation_script_path, 
        args.dawn_mutated,
        args.dawn_mutant_tracking,
        args.mutation_files_output,
        args.coverage_files_output)

    print('Finished mutating!') 

def get_wgslsmith_args(args, standalone : bool = True) -> list[str]:

    if standalone:

        wgslsmith_args =[str(args.info_file_mutated),
                str(args.info_file_coverage),
                f'{str(args.dawn_mutated)}/out/Debug/dawn.node', # mutated_exe
                f'{str(args.dawn_coverage)}/out/Debug/dawn.node', # tracking_exe
                f'{str(args.wgslsmith_exe)}', # wgslsmith_root
                str(args.output),
                '--compile_timeout', str(args.timeout),
                '--run_timeout', str(args.timeout),
                '--vk_icd', args.vk_icd,
                '--standalone',
                '--js_wrapper', str(args.js_wrapper)
            ]

    else:

                wgslsmith_args =[str(args.info_file_mutated),
                str(args.info_file_coverage),
                f'{str(args.wgslsmith_mutated)}/target/release/wgslsmith', # mutated_exe
                f'{str(args.wgslsmith_coverage)}/target/release/wgslsmith', # tracking_exe
                f'{str(args.wgslsmith_mutated)}/target/release', # wgslsmith_root
                str(args.output_dir),
                '--compile_timeout', str(args.timeout),
                '--run_timeout', str(args.timeout),
                '--vk_icd', args.vk_icd,
                '--dawn_vk', args.dawn_vk,
                '--log', str(args.logging_file)
            ]

    return wgslsmith_args

def find_mutants_covered_by_cts() -> tuple[list[str],list[str]]:

    if not args.no_overwrite:
        try:
            os.remove(args.cts_covered_mutants_path)
        except OSError:
            pass 

    # Check CTS mutant coverage for given query
    (covered, uncovered) = get_mutant_coverage(args.mutation_info_file,
        args.cts_covered_mutants_path,
        args.get_per_test_cts_mutant_coverage,
        args.dawn_mutant_tracking,
        args.cts_repo,
        args.query,
        args.vk_icd)

    print(f'Covered mutants: \n{len(covered)}')
    print(f'Uncovered mutants: \n{len(uncovered)}')

    # Save list of covered and uncovered mutants
    with open(Path(args.output_dir,'covered_by_cts.txt'), 'w') as f:
        for mutant in covered:
            f.write(mutant)

    with open(Path(args.output_dir,'uncovered_by_cts.txt'), 'w') as f:
        for mutant in covered:
            f.write(mutant)
    
    return (covered, uncovered)

def kill_mutants_with_wgslsmith(mutants_to_kill : list[str] = None, coverage_check : bool = False):

    wgslsmith_args = get_wgslsmith_args()

    if mutants_to_kill:
        wgslsmith_args.extend(['--mutants_to_kill',
            ','.join([str(m) for m in mutants_to_kill])])
    
    # The coverage check runs a sample of 50 WGSLsmith tests and reports which
    # of the mutants in the mutants_to_kill list are covered by these tests
    if coverage_check:

        find_mutants_covered_by_wgslsmith(args.covered_by_wgslsmith_file, 
                args.refresh_wgslsmith_coverage)

    if args.n_processes == 1:
        wgslsmith.kill_mutants.main(wgslsmith_args)

    elif args.n_processes > 1:
        processes = []
        for i in range(args.n_processes):
            p = multiprocessing.Process(target=wgslsmith.kill_mutants.main, args=((wgslsmith_args,)))
            processes.append(p)
            p.start()

        for p in processes:
            p.join()

def kill_mutants_with_cts(args):
     
    cts_args = get_cts_args(args)
    
    mutant_sample = get_wgslsmith_mutant_sample(Path(args.output,'covered_by_wgslsmith.txt'))

    cts_args.append('--mutant_sample')
    cts_args.extend(mutant_sample)

    cts.kill_mutants.main(cts_args)

def find_mutants_covered_by_wgslsmith(args) -> list[str]:
    '''
        This function runs a sample of WGSLsmith tests and records
        the mutant IDs that are covered by these tests in the coverage_file.
        If the file already exists and refresh_coverage is false, then the mutant IDs are
        read from the file. If the file does not exist, or refresh_coverage is true,
        then the WGSLsmith tests are run again.
    '''
    coverage_file = Path(args.output, 'wgslsmith_sample_coverage')
    overwrite_coverage = not args.no_overwrite

    print('Getting mutants covered by a sample of wgslsmith tests...')

    # If the coverage file already exists and we don't want to refresh it,
    # then read the mutant IDs from the existing file
    if coverage_file.exists() and not refresh_coverage:
        with open(coverage_file,'r') as f:
            covered_wgslsmith_dict = json.load(f)

    # Otherwise, run WGSLsmith with the coverage_check argument to get a 
    # fresh list of covered mutants and save them to a file for next time
    else:
        wgslsmith_coverage_check_args = get_wgslsmith_args(args) + ['--coverage_check']
        
        covered_wgslsmith_dict = wgslsmith.kill_mutants.main(wgslsmith_coverage_check_args)
       
        with open(coverage_file,'w') as f:
            json.dump(covered_wgslsmith_dict, f, indent=4)

    mutant_lists = [v for k, v in covered_wgslsmith_dict.items()]
    
    covered_wgslsmith = list(set([mut for mutants in mutant_lists for mut in mutants]))

    return covered_wgslsmith

def get_wgslsmith_mutant_sample(file):
    
    with open(file,'r') as f:
        mutants = f.readlines()

    return mutants

def get_mutant_sample(): 

    n_sample = 100

    (covered_by_cts, uncovered_by_cts) = find_mutants_covered_by_cts()

    # Optionally get a list of mutants that are covered by a sample of 
    # WGSLsmith tests before running the CTS. The purpose of this is to
    # identify the subset of mutants that are covered by both the CTS
    # and WGSLsmith. WGSLsmith covers a subset of the mutants that are
    # covered by the CTS, so start by figuring out which mutants are 
    # covered by WGSLsmith.
    if args.get_mutants_covered_by_wgslsmith:

        covered_by_wgslsmith : list[int] = find_mutants_covered_by_wgslsmith(
                args.covered_by_wgslsmith_file, 
                args.refresh_wgslsmith_coverage)

        covered_intersection = list(set(covered_by_cts).intersection(set(covered_by_wgslsmith)))
        mutant_sample = [str(x) for x in sample(covered_intersection,n_sample)]
    
    else:
        mutant_sample = [str(x) for x in sample(covered_by_cts,n_sample)]

    print(f'mutant intersection: {len(covered_by_wgslsmith)}')
    return mutant_sample

def get_cts_args(args): 
    #TODO: tidy up args
    cts_args=[str(args.dawn_mutated),
            str(args.dawn_coverage),
            str(args.info_file_mutated),
            str(args.info_file_coverage),
            str(args.output),
            'arg', # Use high-level arg.query as query
            '--cts_repo',
            str(args.cts),
            '--query',
            args.query,
            '--cts_only',
            '--run_timeout',
            '600',
            '--compile_timeout',
            '600',
            '--vk_icd',
            args.vk_icd,
            '--reliable_tests',
            str(args.reliable_tests),
    ]

    return cts_args

def write_to_log(msg : str):
    with open(args.logging_file,'a') as f:
        f.write(msg)

def get_coverage():

    wgslsmith_args = get_wgslsmith_args()

    wgslsmith.kill_mutants.main(wgslsmith_args)

if __name__=="__main__":

    main()

