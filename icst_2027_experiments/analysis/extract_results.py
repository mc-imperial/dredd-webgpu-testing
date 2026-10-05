#!/usr/bin/env python3

import argparse
from pathlib import Path

import pandas as pd

from load_tracking import to_mutant_dataframe


def main():
    parser = argparse.ArgumentParser(
        description="Extract reachability data from experiment output."
    )
    parser.add_argument(
        "output_dir",
        type=Path,
        help="Root output directory, e.g. results/small-run/",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=None,
        help="Output CSV. Defaults to <output_dir>/reachability.csv",
    )

    args = parser.parse_args()

    output_dir = args.output_dir.resolve()
    output_path = args.output or output_dir / "reachability.csv"

    # Find experiment run directories containing tracking output.
    run_dirs = sorted(
        path
        for path in output_dir.rglob("repeat-*")
        if path.is_dir()
    )

    if not run_dirs:
        raise SystemExit(f"No experiment runs found under {output_dir}")

    frames = []

    for run_dir in run_dirs:
        try:
            df = to_mutant_dataframe(run_dir)
        except ValueError:
            # This allows configurations such as dawn-isolate,
            # which currently have no tracking data.
            continue

        if df.empty:
            continue

        # Extract experiment metadata from the directory structure.
        parts = run_dir.relative_to(output_dir).parts

        # Expected:
        #   <configuration>/servers-<n>/repeat-<n>
        configuration = parts[0]
        servers = parts[-2].removeprefix("servers-")
        repeat = parts[-1].removeprefix("repeat-")

        df.insert(0, "configuration", configuration)
        df.insert(1, "servers", int(servers))
        df.insert(2, "repeat", int(repeat))

        frames.append(df)

    if not frames:
        raise SystemExit("No tracking data found.")

    result = pd.concat(frames, ignore_index=True)

    result = result.sort_values(
        ["configuration", "servers", "repeat", "test", "mutant"]
    )

    output_path.parent.mkdir(parents=True, exist_ok=True)
    result.to_csv(output_path, index=False)

    print(f"Runs processed: {len(frames)}")
    print(f"Relationships:  {len(result)}")
    print(f"Tests:          {result['test'].nunique()}")
    print(f"Mutants:        {result['mutant'].nunique()}")
    print(f"Output:         {output_path}")


if __name__ == "__main__":
    main()
