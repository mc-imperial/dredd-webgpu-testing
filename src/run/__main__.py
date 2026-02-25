import subprocess
import os
import argparse
from pathlib import Path
from typing import List, Set

from run.cts.map import map_mutants, get_least_covered_mutants
from run.cts.utils import run_cts
import run.cts.kill_mutants
import run.wgslsmith.kill_mutants

def main():

    root = Path(os.path.dirname(os.path.abspath(__file__))).parent

    parser = argparse.ArgumentParser()
    
    subparsers = parser.add_subparsers(dest="cmd")

    parser.add_argument('--output',
            type=Path,
            default=Path(root, 'data'))
    parser.add_argument('--dawn',
            type=Path,
            default=Path('/data/dev/dawn')) #TODO: update to external
    parser.add_argument('--query',
            type=str,
            default='webgpu:*')
    parser.add_argument('--vk_icd',
            type=Path,
            default=None)
    parser.add_argument('--cts_tracking',
            type=Path,
            default=Path(root,'data/cts_tracking'),
            help='Path to CTS tracking records')
    parser.add_argument('--wgslsmith_tracking',
            type=Path,
            default=Path(root,'data/wgslsmith_tracking'),
            help='Path to WGSLsmith tracking records')
    parser.add_argument('--wgslsmith',
            type=Path,
            default=Path(root,'external/wgslsmith'))

    kill = subparsers.add_parser('kill', 
        help='Get mapping showing the list of mutants that are touched by each CTS test')

    kill.add_argument('info_file_mutated',
        type=Path,
        help='Mutant info file for mutated target')
    kill.add_argument('info_file_tracked',
        type=Path,
        help='Mutant info file for tracked target')
    kill.add_argument('mutated_vk_icd',
        type=Path,
        help='VK ICD for mutated target')
    kill.add_argument('tracked_vk_icd',
        type=Path,
        help='VK ICD for tracked target')
    kill.add_argument('--killer',
        choices=['cts'],
        help='Kill mutants with the CTS or WGSLsmith',
        default='cts')
    kill.add_argument('--mutant_to_test_mapping',
        type=Path,
        default=Path(root,'data/tracking/mapping_mutant_to_query_list.csv'),
        help='Filepath to the mapping from mutants to tests that touch the mutant')
    kill.add_argument('--target_mutant_sample',
        help='Number of mutants from the target set to try and kill',
        type=int,
        default=10)
    kill.add_argument('--mutant_ids',
        type=comma_list,
        default=None)
    kill.add_argument('--least_covered_mutants',
        action=argparse.BooleanOptionalAction,
        default=True)
    kill.add_argument('--covered_mutant_ids',
        type=Path,
        default=Path(root, 'data/tracking/cts_least_covered_mutant_targets.txt'))

    args = parser.parse_args()

    match args.cmd:
        case 'map':
            map_cts_mutants(args)
        case 'kill':
            kill_mutants(args)
        case None:
            print('Must enter cmd!')
            exit(1)

def map_cts_mutants(args):

    tracking = Path(args.output_files')
    tracking.mkdir(exist_ok=True)

    map_mutants(args.cts,
        args.dawn,
        tracking,
        args.output,
        args.vk_icd,
        args.query)

def kill_mutants(args):

    if args.killer == 'cts':
        kill_with_cts(args)

def kill_with_cts(args):

    # Get list of mutants to target
    mutants_to_kill = []

    if args.mutant_ids is not None:
        mutants_to_kill = args.mutant_ids

    elif args.least_covered_mutants:
        if args.mutant_to_test_mapping.is_file():
            mutants_to_kill = get_least_covered_mutants(args.mutant_to_test_mapping,
                args.covered_mutant_ids,
                sample=int(args.target_mutant_sample))
        else:
            mutants_to_kill = get_least_covered_mutants(args.mutant_to_test_mapping,
                args.covered_mutant_ids,
                cts_tracking=args.cts_tracking,
                wgslsmith_tracking=args.wgslsmith_tracking,
                sample=int(args.target_mutant_sample))
    
    if len(mutants_to_kill) == 0:
        print('No mutants to kill!')
        exit(1)

    # Kill mutants with CTS
    print('Mutants to kill:')
    print(mutants_to_kill)

    cts_args=[str(args.info_file_mutated),
        str(args.info_file_tracked), 
        str(args.output), # mutant_kill_path
        '--mutant_sample', f'''{','.join([str(m) for m in mutants_to_kill])}''',
        '--mutant_to_test_mapping', str(args.mutant_to_test_mapping),
        '--wgslsmith', str(args.wgslsmith),
        'mesa',
        str(args.dawn),
        str(args.mutated_vk_icd), 
        str(args.tracked_vk_icd)
        ]

    run.cts.kill_mutants.main(cts_args)

def comma_list(arg):
    return arg.split(',')

if __name__=="__main__":
    main()

