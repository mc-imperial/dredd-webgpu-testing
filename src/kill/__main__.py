import argparse
import pandas as pd
from pathlib import Path
import os

from run.cts.map import get_least_covered_mutants
import run.cts.kill_mutants
import run.wgslsmith.kill_mutants

def main():
    
    root = Path(os.path.dirname(os.path.abspath(__file__))).parent.parent

    parser = argparse.ArgumentParser()
    
    parser.add_argument('tracked_vk_icd',
            type=Path,
            help = "Path to tracked_mesa vk_icd.json")
    parser.add_argument('dawn',
            type=Path,
            help='Path to Dawn')
    parser.add_argument('--cts',
            type=Path,
            help='Path to CTS',
            default="")
    parser.add_argument('--output',
            type=Path,
            default=Path(root, 'data', 'mutant_killing'))
    parser.add_argument('--map',
            type=Path,
            help='Path to mutant to test mapping file',
            default='')
    parser.add_argument('--wgslsmith_touched',
            type=Path,
            help='Path to list of mutants touched by a sample of WGSLsmith tests',
            default='')
    parser.add_argument('--mutant_ids',
            type=comma_list,
            help='List of specific mutant IDs to kill',
            default=None)
    parser.add_argument('--sample',
            type=int,
            help='Number of mutants to kill',
            default=3)

    args = parser.parse_args()

    # Get list of mutants to target
    mutants_to_kill = []

    if args.mutant_ids is not None:
        mutants_to_kill = args.mutant_ids

    mutants_to_kill = get_least_covered_mutants(args.map,
        args.wgslsmith_touched,
        args.sample)

    mutant_to_test_mapping = pd.read_csv(args.map, sep = ' ')

    if len(mutants_to_kill) == 0:
        print('No mutants to kill!')
        exit(1)

    # Kill mutants with CTS
    print(f'Number of mutants to kill: {len(mutants_to_kill)}')

    for mutant in mutants_to_kill:

        queries = mutant_to_test_mapping.loc[mutant_to_test_mapping['mutant_id'] == int(mutant), 'queries'].iloc[0]
        queries = queries.split(' ')

        print(f'Attempting mutant {mutant}, which is touched by {len(queries)} tests...')

        """
        cts_args=[str(args.info_file_mutated),
            str(args.info_file_tracked), 
            str(args.output), # mutant_kill_path
            '--mutant_sample', f'''{','.join([str(m) for m in mutants_to_kill])}''',
            '--mutant_to_test_mapping', str(args.mutant_to_test_mapping),
            'mesa',
            str(args.dawn),
            str(args.mutated_vk_icd), 
            str(args.tracked_vk_icd)
            ]

        run.cts.kill_mutants.main(cts_args)
        """

def comma_list(arg):
    return arg.split(',')

if __name__=="__main__":
    main()