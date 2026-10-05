#!/usr/bin/env python3

import argparse
import json
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent.parent
sys.path.insert(0, str(PROJECT_ROOT))

import pandas as pd

from icst_2027_experiments.analysis.load_tracking_data import load_run


def main():
    parser = argparse.ArgumentParser(
        description="Extract CTS test -> mutant reachability data."
    )
    parser.add_argument(
        "output_dir",
        type=Path,
        help="Root experiment run directory.",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=None,
        help="Output CSV. Defaults to <output_dir>/processed/reachability.csv",
    )

    args = parser.parse_args()

    output_dir = args.output_dir.resolve()
    output_path = args.output or (
        output_dir / "processed" / "reachability.csv"
    )

    rows = []

    run_dirs = sorted(
        path
        for path in output_dir.rglob("repeat-*")
        if path.is_dir()
    )

    if not run_dirs:
        raise SystemExit(f"No experiment runs found under {output_dir}")

    for run_dir in run_dirs:
        try:
            tracking = load_run(run_dir)
        except ValueError:
            # Configuration has no tracking data.
            continue

        parts = run_dir.relative_to(output_dir).parts

        configuration = parts[0]
        servers = int(parts[-2].removeprefix("servers-"))
        repeat = int(parts[-1].removeprefix("repeat-"))

        for test, mutants in tracking.items():
            rows.append(
                {
                    "configuration": configuration,
                    "servers": servers,
                    "repeat": repeat,
                    "test": test,
                    "n_mutants": len(mutants),
                    "mutants": json.dumps(sorted(mutants)),
                }
            )

    if not rows:
        raise SystemExit("No tracking data found.")

    df = pd.DataFrame(rows)

    df = df.sort_values(
        ["configuration", "servers", "repeat", "test"]
    )

    output_path.parent.mkdir(parents=True, exist_ok=True)
    df.to_csv(output_path, index=False)

    print(f"Runs processed: {len(run_dirs)}")
    print(f"Tests:          {len(df)}")
    print(f"Relationships:  {df['n_mutants'].sum():,}")
    print(f"Output:         {output_path}")


if __name__ == "__main__":
    main()