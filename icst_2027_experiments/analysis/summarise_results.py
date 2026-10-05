#!/usr/bin/env python3

import argparse
from pathlib import Path

import pandas as pd


def main():
    parser = argparse.ArgumentParser(
        description="Summarise processed reachability results."
    )
    parser.add_argument(
        "csv",
        type=Path,
        help="Processed reachability CSV.",
    )

    args = parser.parse_args()

    print(f"Reading: {args.csv}")
    df = pd.read_csv(args.csv)

    print()
    print("=" * 80)
    print("REACHABILITY SUMMARY")
    print("=" * 80)

    print(f"Rows: {len(df):,}")
    print(f"Tests: {df['test'].nunique():,}")
    print()

    # ------------------------------------------------------------------
    # Overall n_mutants distribution by configuration
    # ------------------------------------------------------------------

    summary = (
        df.groupby("configuration")["n_mutants"]
        .agg(
            tests="count",
            mean="mean",
            median="median",
            std="std",
            min="min",
            q25=lambda x: x.quantile(0.25),
            q75=lambda x: x.quantile(0.75),
            max="max",
            zero_mutant_tests=lambda x: (x == 0).sum(),
            total_mutants="sum",
        )
        .reset_index()
    )

    print("N_MUTANTS BY CONFIGURATION")
    print("-" * 80)

    print(
        summary.to_string(
            index=False,
            float_format=lambda x: f"{x:.2f}",
        )
    )

    # ------------------------------------------------------------------
    # n_mutants distribution by configuration and repeat
    # ------------------------------------------------------------------

    repeat_summary = (
        df.groupby(["configuration", "servers", "repeat"])["n_mutants"]
        .agg(
            tests="count",
            median="median",
            min="min",
            max="max",
            zero_mutant_tests=lambda x: (x == 0).sum(),
        )
        .reset_index()
    )

    print()
    print("N_MUTANTS BY CONFIGURATION / SERVER COUNT / REPEAT")
    print("-" * 80)

    print(
        repeat_summary.to_string(
            index=False,
            float_format=lambda x: f"{x:.2f}",
        )
    )

    # ------------------------------------------------------------------
    # Simple sanity checks
    # ------------------------------------------------------------------

    print()
    print("SANITY CHECKS")
    print("-" * 80)

    expected_columns = {
        "configuration",
        "servers",
        "repeat",
        "test",
        "n_mutants",
    }

    missing = expected_columns - set(df.columns)

    if missing:
        print(f"ERROR: missing columns: {sorted(missing)}")
    else:
        print("Required columns: OK")

    print(
        f"Unique configurations: {df['configuration'].nunique()}"
    )

    print(
        f"Unique server counts:   {df['servers'].nunique()}"
    )

    print(
        f"Unique repeats:          {df['repeat'].nunique()}"
    )

    print(
        f"Tests with negative n_mutants: "
        f"{(df['n_mutants'] < 0).sum()}"
    )

    print()
    print("=" * 80)


if __name__ == "__main__":
    main()