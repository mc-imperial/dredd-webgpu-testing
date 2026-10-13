#!/usr/bin/env python3

import argparse
import json
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent.parent
sys.path.insert(0, str(PROJECT_ROOT))

import pandas as pd
from tqdm import tqdm

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
    parser.add_argument(
        "--configuration",
        action="append",
        help="Only extract this configuration (repeatable). Default: all.",
    )

    args = parser.parse_args()

    output_dir = args.output_dir.resolve()
    output_path = args.output or (
        output_dir / "processed" / "reachability.csv"
    )

    configurations = args.configuration or [
        d.name for d in output_dir.iterdir()
        if d.is_dir() and d.name != "processed"
    ]
    
    run_dirs = sorted(
        path
        for config in configurations
        for path in (output_dir / config).glob("servers-*/repeat-*")
        if path.is_dir()
    )

    if not run_dirs:
        raise SystemExit(f"No experiment runs found under {output_dir}")

    rows = []
    skipped = 0
    relationships = 0

    progress = tqdm(run_dirs, desc="Extracting runs", unit="run")
    for run_dir in progress:
        rel = run_dir.relative_to(output_dir)
        progress.set_description(f"Loading {rel}")

        try:
            tracking = load_run(run_dir)
        except ValueError:
            # Configuration has no tracking data.
            skipped += 1
            tqdm.write(f"No tracking data, skipped: {rel}")
            continue

        parts = rel.parts

        configuration = parts[0]
        servers = int(parts[-2].removeprefix("servers-"))
        repeat = int(parts[-1].removeprefix("repeat-"))

        for test, mutants in tracking.items():
            relationships += len(mutants)
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

        progress.set_postfix(tests=f"{len(rows):,}", relationships=f"{relationships:,}")

    if not rows:
        raise SystemExit("No tracking data found.")

    with tqdm(total=3, desc="Writing CSV", unit="step") as steps:
        steps.set_postfix_str("building table")
        df = pd.DataFrame(rows)
        steps.update()

        steps.set_postfix_str("sorting")
        df = df.sort_values(["configuration", "servers", "repeat", "test"])
        steps.update()

        steps.set_postfix_str(f"writing {output_path.name}")
        output_path.parent.mkdir(parents=True, exist_ok=True)
        df.to_csv(output_path, index=False)
        steps.update()

    print(f"Runs processed: {len(run_dirs) - skipped} ({skipped} skipped, no tracking data)")
    print(f"Tests:          {len(df)}")
    print(f"Relationships:  {df['n_mutants'].sum():,}")
    print(f"Output:         {output_path}")


if __name__ == "__main__":
    main()