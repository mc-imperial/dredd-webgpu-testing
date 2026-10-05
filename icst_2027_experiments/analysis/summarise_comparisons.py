#!/usr/bin/env python3

import argparse
from pathlib import Path

import pandas as pd


REQUIRED_COLUMNS = {
    "servers",
    "repeat",
    "test",
    "configuration_a",
    "configuration_b",
    "n_mutants_a",
    "n_mutants_b",
    "n_common",
    "n_a_only",
    "n_b_only",
}


def summarise_pair(group: pd.DataFrame) -> dict:
    """Calculate summary statistics for one configuration pair."""

    n_tests = len(group)

    exact_same = (
        (group["n_a_only"] == 0)
        & (group["n_b_only"] == 0)
    )

    # Any overlap is defined as at least one mutant in common
    # OR both pairs have zero motants
    any_overlap = (
        (group["n_common"] > 0)
        | (
            (group["n_mutants_a"] == 0)
            & (group["n_mutants_b"] == 0)
        )
    )
    no_overlap = ~any_overlap

    a_subset_b = group["n_a_only"] == 0

    b_subset_a = group["n_b_only"] == 0

    return {
        "configuration_a": group["configuration_a"].iloc[0],
        "configuration_b": group["configuration_b"].iloc[0],
        "tests": n_tests,

        "exact_same": exact_same.sum(),
        "exact_same_pct": 100 * exact_same.mean(),

        "any_overlap": any_overlap.sum(),
        "any_overlap_pct": 100 * any_overlap.mean(),

        "no_overlap": no_overlap.sum(),
        "no_overlap_pct": 100 * no_overlap.mean(),

        "a_subset_b": a_subset_b.sum(),
        "a_subset_b_pct": 100 * a_subset_b.mean(),

        "b_subset_a": b_subset_a.sum(),
        "b_subset_a_pct": 100 * b_subset_a.mean(),

    }


def main():
    parser = argparse.ArgumentParser(
        description="Summarise pairwise mutant reachability comparisons."
    )

    parser.add_argument(
        "csv",
        type=Path,
        help="Pairwise comparison CSV.",
    )

    parser.add_argument(
        "--output",
        type=Path,
        default=None,
        help=(
            "Output summary CSV. "
            "Defaults to <csv-dir>/comparison_summary.csv."
        ),
    )

    args = parser.parse_args()

    print(f"Reading: {args.csv}")

    df = pd.read_csv(args.csv)

    missing = REQUIRED_COLUMNS - set(df.columns)

    if missing:
        raise SystemExit(
            f"Missing required columns: {sorted(missing)}"
        )

    if df.empty:
        raise SystemExit("Comparison dataset is empty.")

    summary_rows = []

    for _, group in df.groupby(
        ["configuration_a", "configuration_b"],
        sort=True,
    ):
        summary_rows.append(
            summarise_pair(group)
        )

    summary = pd.DataFrame(summary_rows)

    summary = summary.rename(
    columns={
        "configuration_a": "config_a",
        "configuration_b": "config_b",
        "tests": "n_tests",
        "exact_same": "same",
        "exact_same_pct": "same_pct",
        "any_overlap": "overlap",
        "any_overlap_pct": "overlap_pct",
        "no_overlap": "no_overlap",
        "no_overlap_pct": "no_overlap_pct",
        "a_subset_b": "a_sub_b",
        "a_subset_b_pct": "a_sub_b_pct",
        "b_subset_a": "b_sub_a",
        "b_subset_a_pct": "b_sub_a_pct",
        "total_common": "common",
        "total_a_only": "a_only",
        "total_b_only": "b_only",
            }
        )

    print()
    print("=" * 100)
    print("PAIRWISE REACHABILITY SUMMARY")
    print("=" * 100)

    display_columns = [
        "config_a",
        "config_b",
        "n_tests",
        "same",
        "same_pct",
        "overlap",
        "overlap_pct",
        "no_overlap",
        "no_overlap_pct",
        "a_sub_b",
        "a_sub_b_pct",
        "b_sub_a",
        "b_sub_a_pct",
    ]

    display = summary[display_columns].copy()

    percentage_columns = [
        "same_pct",
        "overlap_pct",
        "no_overlap_pct",
        "a_sub_b_pct",
        "b_sub_a_pct",
    ]
    summary[percentage_columns] = summary[percentage_columns].round(1)

    for column in percentage_columns:
        display[column] = display[column].map(
            lambda x: f"{x:.1f}%"
        )

    print(display.to_string(index=False))

    output = args.output or (
        args.csv.parent / "comparison_summary.csv"
    )

    output.parent.mkdir(parents=True, exist_ok=True)
    summary.to_csv(output, index=False)

    print()
    print("=" * 100)
    print("OUTPUT")
    print("=" * 100)
    print(f"Summary: {output}")


if __name__ == "__main__":
    main()