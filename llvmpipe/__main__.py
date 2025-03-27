import subprocess
import multiprocessing
import os
import argparse
from pathlib import Path
from random import sample
from typing import List, Set

import run.cts.kill_mutants
import run.wgslsmith.kill_mutants

from track_mutants_cts import process_tracking


def main():
    
    parser = argparse.ArgumentParser()

    parser.add_argument('output',
            type=Path,
            help='Output path')
    parser.add_argument('mutated_vk_icd',
            type=Path,
            help='Absolute path to mutated VK ICD .json file')
    parser.add_argument('tracked_vk_icd',
            type=Path,
            help='Absolute path to tracked VK ICD .json file')
    parser.add_argument('info_file_mutated',
            type=Path,
            help='Path to json file for mutated mutant info')
    parser.add_argument('info_file_tracked',
            type=Path,
            help='Path to json file for tracked mutant info')
    parser.add_argument('cts_tracking',
            type=Path,
            help='Path to CTS tracking records')
    parser.add_argument('wgslsmith_tracking',
            type=Path,
            help='Path to WGSLsmith tracking records')
    parser.add_argument('dawn',
            type=Path,
            help='Path to dawn.node for node execution')

    subparsers = parser.add_subparsers(dest="cmd")
    
    kill_with_cts = subparsers.add_parser('kill_with_cts', 
        help='Kill mutants with the CTS')

    kill_with_cts.add_argument('cts',
            type=Path,
            help='Path to root of CTS')
    kill_with_cts.add_argument('target_mutants',
            choices=['cts_intersect_wgslsmith'],
            help='''Set of mutants to target. Options are:
            \tcts_intersect_wgslsmith - mutants touched by the CTS and by a sample of WGSLsmith tests''')
    kill_with_cts.add_argument('target_mutant_file',
            type=Path,
            help='Path in which a list of targetted mutants will be saved')
    kill_with_cts.add_argument('target_mutant_sample',
            help='Number of mutants from the target set to try and kill',
            type=int)
    kill_with_cts.add_argument('--query',
            help='CTS query',
            type=str,
            default='webgpu:*')
    kill_with_cts.add_argument('--reliable_tests',
            help='Filepath to store reliable CTS tests',
            type=Path)
 
    kill_with_wgslsmith = subparsers.add_parser('kill_with_wgslsmith', 
        help='Kill mutants with the WGSLsmith')

    kill_with_wgslsmith.add_argument('wgslsmith',
            type=Path,
            help='Path to WGSLsmith executable')
    kill_with_wgslsmith.add_argument('n_processes',
            type=int,
            help='Number of processes to run in parallel',
            default=1)

    args = parser.parse_args()

    if args.cmd == 'kill_with_wgslsmith':
        kill_mutants_with_wgslsmith(args)
    
    if args.cmd == 'kill_with_cts':
        kill_mutants_with_cts(args)

def get_mutants_to_kill(cts_tracking, wgslsmith_tracking, target_mutants, mutant_file, n_sample=None):

    # Read mutants from file if it already exists
    if mutant_file.is_file():
        with open(mutant_file,'r') as f:
            mutants = f.readlines()
            mutants = [x.rstrip() for x in mutants]

    # Otherwise, process tracking information to identify mutants
    else:
        
        coverage = process_tracking(cts_tracking, wgslsmith_tracking)

        if target_mutants == 'cts_intersect_wgslsmith':
            with open(mutant_file,'w') as f:
                f.writelines(coverage['covered_by_both'])

            mutants = coverage['covered_by_both']

        elif target_mutants == 'wgslsmith_only':
            with open(mutant_file,'w') as f:
                f.writelines(coverage['covered_by_wgslsmith_only'])

            mutants = coverage['covered_by_wgslsmith_only']

    # Sample mutants if required
    if n_sample is None:
        return mutants

    mutant_sample = sample(mutants, n_sample)

    return mutant_sample
    
def kill_mutants_with_wgslsmith(args):

    mutants_to_kill = get_mutants_to_kill(args.cts_tracking,
        args.wgslsmith_tracking,
        args.target_mutant,
        args.target_mutant_file,
        int(args.target_mutant_sample))

    wgslsmith_args = [str(args.info_file_mutated),
                str(args.info_file_tracked),
                f'{str(args.wgslsmith_exe)}', # wgslsmith_root
                str(args.output),
                '--mutants_to_kill', ','.join([str(m) for m in mutants_to_kill]),
                'mesa',
                str(args.dawn),
                str(args.mutated_vk_icd),
                str(args.tracked_vk_icd)]

    if args.n_processes == 1:
        run.wgslsmith.kill_mutants.main(wgslsmith_args)

    elif args.n_processes > 1:
        processes = []
        for i in range(args.n_processes):
            log_name = Path(args.output, f'process_{i}.log')
            arguments = wgslsmith_args.copy()
            arguments.insert(arguments.index('mesa'),'--log')
            arguments.insert(arguments.index('mesa'),str(log_name))

            p = multiprocessing.Process(target=run.wgslsmith.kill_mutants.main, args=((arguments,)))
            processes.append(p)
            p.start()

        for p in processes:
            p.join()

    
def kill_mutants_with_cts(args):

    if args.reliable_tests is None:
        reliable_tests = Path(args.output, 'reliable_tests.json')
    else:
        reliable_tests = args.reliable_tests

    mutants_to_kill = get_mutants_to_kill(args.cts_tracking,
        args.wgslsmith_tracking,
        args.target_mutants,
        args.target_mutant_file,
        int(args.target_mutant_sample))

    print(f'There are {len(mutants_to_kill)} mutants to kill')
    print('Here are some:')
    print(mutants_to_kill[10:20])

    cts_args=[str(args.info_file_mutated),
        str(args.info_file_tracked),
        str(args.output),
        '--query', args.query,
        '--cts_repo', str(args.cts),
        '--cts_only',
        '--run_timeout', '600',
        '--compile_timeout', '600',
        '--reliable_tests', str(reliable_tests),
        '--mutant_sample', f'''{','.join([str(m) for m in mutants_to_kill])}''',
        'mesa',
        str(args.dawn),
        str(args.mutated_vk_icd), 
        str(args.tracked_vk_icd)
        ]

    run.cts.kill_mutants.main(cts_args)


if __name__=="__main__":
    main()
