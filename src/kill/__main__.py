from pathlib import Path
import csv
import os
import argparse
from collections import defaultdict
from typing import List

from .mutant import Mutant
from .killer import MutantKiller

def main():
    
    root = Path(os.path.dirname(os.path.abspath(__file__))).parent.parent

    parser = argparse.ArgumentParser()
    
    parser.add_argument('info_file_mutated',
            type=Path,
            help = "Path to mutated info file")
    parser.add_argument('vk_icd',
            type=Path,
            help = "Path to mutated_mesa vk_icd.json")
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
            help='Path to mutant to mapping csv file that maps each mutant to a set of queries that cover it',
            default='')
    parser.add_argument('--sample',
            type=int,
            help='Number of mutants to kill',
            default=3)

    args = parser.parse_args()

    mutants = load_mutants_from_csv(args.map)[:args.sample]
    killer = MutantKiller(mutants, 
                          dawn = args.dawn,
                          cts = args.cts, 
                          vk_icd = args.vk_icd, 
                          output_dir = args.output
                        )
    killer.kill_all()

def load_mutants_from_csv(path: Path) -> List[Mutant]:
    """
    Load mutants from a long-format CSV with columns: 'mutant_id', 'test_name', 'count'.
    Groups all tests per mutant and returns a list of Mutant objects sorted by ascending count
    (least-frequently appearing mutants first).
    """
    mutant_tests = defaultdict(list)
    mutant_counts = {}

    with open(path, newline='') as f:
        reader = csv.DictReader(f)
        for row in reader:
            mutant_id = int(row['mutant_id'])
            test_name = row['test_name']
            count = int(row['mutant_count'])
            mutant_tests[mutant_id].append(test_name)
            mutant_counts[mutant_id] = count  # Assuming count is the same for all rows of a mutant

    # Create Mutant objects
    mutants = [Mutant(mid, tests) for mid, tests in mutant_tests.items()]

    # Sort by ascending count (least frequent first)
    mutants.sort(key=lambda m: mutant_counts[m.id])

    return mutants

if __name__=="__main__":
    main()