from pathlib import Path
import csv
import os
import argparse
from collections import defaultdict
from typing import List

from .mutant import Mutant
from .cts import CTSMutantKiller           
from .wgslsmith import WGSLsmithMutantKiller

def build_parser() -> argparse.ArgumentParser:

    root = Path(os.path.dirname(os.path.abspath(__file__))).parent.parent

    parser = argparse.ArgumentParser(
        prog="mutant-killer",
        description="Kill mutants using different backends",
    )

    subparsers = parser.add_subparsers(dest="backend", required=True)

    # ---------------- CTS ----------------
    cts = subparsers.add_parser("cts", help="Kill mutants using CTS")
    cts.add_argument("--info-file-mutated", type=Path, required=True)
    cts.add_argument("--dawn", required=True)
    cts.add_argument("--cts", required=True)
    cts.add_argument("--vk-icd", required=True)
    cts.add_argument('--map', type=Path, required=True,
                     help='Path to mutant to mapping csv file that maps each mutant to a set of queries that cover it')
    cts.add_argument("--out", type=Path, default=Path(root, 'data', 'cts_mutant_killing'))
    cts.add_argument("--sample", type=int, default=5)

    # ---------------- WGSLsmith ----------------
    wgslsmith = subparsers.add_parser("wgslsmith", help="Kill mutants using WGSLsmith")
    wgslsmith.add_argument("--wgslsmith", type=Path, required=True)
    wgslsmith.add_argument("--dawn", type=Path, required=True)
    wgslsmith.add_argument("--vk-icd", required=True)
    wgslsmith.add_argument("--out", type=Path, default=Path(root, 'data', 'wgslsmith_mutant_killing'))
    wgslsmith.add_argument("--run-timeout", type=int, default=60)
    wgslsmith.add_argument("--debug",
                            action=argparse.BooleanOptionalAction,
                            default=False,
                            help="Keep per-test working directories for debugging")

    return parser


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

def main(argv=None):
    parser = build_parser()
    args = parser.parse_args(argv)

    if args.backend == "cts":
        # TODO: extract mutant loading 
        mutants = load_mutants_from_csv(args.map)
        killer = CTSMutantKiller(
            mutants=mutants,
            dawn=args.dawn,
            cts=args.cts,
            vk_icd=args.vk_icd,
            output_dir=args.out,
        )

    elif args.backend == "wgslsmith":
        #TODO: Load mutants properly
        mutants = [Mutant(i, '') for i in range(0,5)] # Placeholder

        killer = WGSLsmithMutantKiller(
            mutants=mutants,
            wgslsmith=args.wgslsmith,
            dawn=args.dawn,
            vk_icd=args.vk_icd,
            output_dir=args.out,
            run_timeout=args.run_timeout,
            debug=args.debug
        )

    else:
        parser.error("Unknown backend")

    killer.kill_all()

if __name__=="__main__":
    main()