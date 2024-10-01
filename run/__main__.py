import os
import subprocess
import multiprocessing
import json
from pathlib import Path
from random import sample
import time

from cts.utils import get_mutant_coverage
import wgslsmith.kill_mutants
import cts.kill_mutants

import config

def main():

    if config.mutate:

        # Delete dredd covered mutants path since mutations will be updated
        os.remove(config.__dredd_covered_mutants)

        if scrape_mutation_files:

            mutation_files = get_files_for_mutation(config.compile_commands_mutated, config.mutation_target)
            coverage_files = get_files_for_mutation(config.compile_commands_coverage, config.mutation_target)

            with open(config.mutation_files_output,'w') as f:
                f.write(' '.join(config.mutation_files))

            with open(config.coverage_files_output,'w') as f:
                f.write(' '.join(config.coverage_files))

        print('Mutating...')
        
        # Ensure that no mutants exist already in the files
        if not make_dawn_clean(config.dawn_mutated, config.dawn_coverage):
            print('Error!')
            return

        mutate_dawn(config.mutation_script_path, 
            config.dawn_mutated,
            config.dawn_coverage,
            config.mutation_files_output,
            config.coverage_files_output)

        print('Finished mutating!')
        
    if config.mutate or config.rebuild_wgslsmith:
        
        print('Building WGSLsmith...')

        build_wgslsmith(config.wgslsmith_mutated, config.dawn_mutated)
        build_wgslsmith(config.wgslsmith_coverage, config.dawn_coverage)

    wgslsmith_args =[str(config.mutation_info_file),
            str(config.mutation_info_file_for_coverage),
            f'{str(config.wgslsmith_mutated)}/target/release/wgslsmith',
            f'{str(config.wgslsmith_coverage)}/target/release/wgslsmith',
            f'{str(config.wgslsmith_mutated)}/target/release',
            str(config.output_dir),
            '--compile_timeout',
            str(config.timeout),
            '--run_timeout',
            str(config.timeout),
            '--vk_icd',
            config.vk_icd,
            '--dawn_vk',
            config.dawn_vk,
        ]
    
    # Option 1: Kill uncovered mutants
    if config.kill_uncovered_mutants_first:
        
        print('Killing uncovered mutants first...')

        if config.delete_covered_mutants_path:
            os.remove(config.__dredd_covered_mutants)
        
        # Check CTS mutant coverage for given query
        (covered, uncovered) = get_mutant_coverage(config.mutation_info_file,
            config.covered_mutants_path,
            config.dawn_coverage,
            config.cts_repo,
            config.query,
            config.vk_icd)

        print(f'Covered mutants: \n{len(covered)}')
        print(f'Uncovered mutants: \n{len(uncovered)}')
        
        mutants_to_kill = uncovered

        wgslsmith_args.extend(['--mutants_to_kill',
            ','.join([str(m) for m in mutants_to_kill])])
        
        # Check WGSLsmith coverage of uncovered mutants
        wgslsmith_coverage_check_args = wgslsmith_args + ['--coverage_check']

        output = wgslsmith.kill_mutants.main(wgslsmith_coverage_check_args)
        
        print(output)

        with open('/data/work/webgpu/temp_output.json','w') as f:
            json.dump(output, f, indent=4)

        # Kill mutants with WGSLsmith
        wgslsmith.kill_mutants.main(wgslsmith_args)

    # Option 2: Kill covered and surviving mutants
    else:
        if not config.cts_killing_completed:

            if config.get_mutants_covered_by_wgslsmith:
                print('Getting mutants covered by a sample of wgslsmith tests...')
                wgslsmith_coverage_check_args = wgslsmith_args + ['--coverage_check']
                covered_wgslsmith_dict = wgslsmith.kill_mutants.main(wgslsmith_coverage_check_args)
                print(covered_wgslsmith_dict)
                with open('/data/work/webgpu/temp_output.json','w') as f:
                    json.dump(covered_wgslsmith_dict, f, indent=4)

                mutant_lists = [v for k, v in covered_wgslsmith_dict.items()]
                covered_wgslsmith = list(set([mut for mutants in mutant_lists for mut in mutants]))
                print(covered_wgslsmith)

            print('Killing CTS covered mutants...')
            start = time.time()
            with open(Path(config.output_dir, 'timing.txt'),'w') as f:
                f.write(f'Run started at: {start}')

            print('Finding covered mutants...')
            if config.delete_covered_mutants_path:
                os.remove(config.__dredd_covered_mutants)
            
            # Check CTS mutant coverage for given query
            (covered_cts, uncovered_cts) = get_mutant_coverage(config.mutation_info_file,
                config.covered_mutants_path,
                config.dawn_coverage,
                config.cts_repo,
                config.query,
                config.vk_icd)

            print(f'Covered mutants: \n{len(covered_cts)}')
            print(f'Uncovered mutants: \n{len(uncovered_cts)}')

            if config.sampling:
                if config.get_mutants_covered_by_wgslsmith:
                    covered_intersection = list(set(covered_cts).intersection(set(covered_wgslsmith)))
                    mutant_sample = [str(x) for x in sample(covered_intersection,10)]
                else:
                    mutant_sample = [str(x) for x in sample(covered,200)]

            #TODO: tidy up args
            cts_args=[str(config.dawn_mutated),
                    str(config.dawn_coverage),
                    str(config.mutation_info_file),
                    str(config.mutation_info_file_for_coverage),
                    str(config.output_dir),
                    'arg', # Use high-level arg.query as query
                    '--cts_repo',
                    str(config.cts_repo),
                    '--query',
                    config.query,
                    '--cts_only',
                    '--run_timeout',
                    '600',
                    '--compile_timeout',
                    '600',
                    '--vk_icd',
                    config.vk_icd,
                    '--reliable_tests',
                    str(config.reliable_tests),
            ]

            if config.sampling:
                cts_args.append('--mutant_sample')
                cts_args.extend(mutant_sample)
            
            if not config.cts_killing_completed:
                print('Killing mutants with the CTS...')

                if config.n_processes == 1:
                    cts.kill_mutants.main(cts_args)
                
                elif config.n_processes > 1:
                    cts_processes = []
                    for i in range(config.n_processes):
                        p = multiprocessing.Process(target=cts.kill_mutants.main, args=((cts_args,)))
                        cts_processes.append(p)
                        p.start()

                    for p in cts_processes:
                        p.join()

            end = time.time()
            with open(Path(config.output_dir, 'timing.txt'),'w') as f:
                f.write(f'Run ended at: {end}')
                f.write(f'Run time is {(end - start)/(60*60)} hours')   

        print('Killing surviving mutants with WGSLsmith...')

        mutants_to_kill = get_surviving_mutants(config.output_dir)

        wgslsmith_args.extend(['--mutants_to_kill',
            ','.join([str(m) for m in mutants_to_kill])])

        if config.n_processes == 1:
            wgslsmith.kill_mutants.main(wgslsmith_args)

        elif config.n_processes > 1:
            processes = []
            for i in range(config.n_processes):
                p = multiprocessing.Process(target=wgslsmith.kill_mutants.main, args=((wgslsmith_args,)))
                processes.append(p)
                p.start()

            for p in processes:
                p.join()

def get_surviving_mutants(output_dir : Path) -> list[int]:
    
    with open(Path(output_dir, 'surviving_mutants.txt'),'r') as f:
        data = f.read()
        return data.split('\n')


def make_dawn_clean(mutated : Path, coverage : Path) -> bool :

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

    return True

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

    return files

if __name__=="__main__":
    main()
