#!/usr/bin/env python3

import argparse
import itertools
import json
from pathlib import Path

import pandas as pd


def load_mutant_sets(
    df: pd.DataFrame,
) -> dict[tuple[int, int, str, str], frozenset[str]]:
    """Load each mutant set once."""

    result = {}

    for row in df.itertuples(index=False):
        key = (
            row.servers,
            row.repeat,
            row.configuration,
            row.test,
        )

        result[key] = frozenset(json.loads(row.mutants))

    return result


def main():
    parser = argparse.ArgumentParser(
        description="Compare mutant reachability across all configuration pairs."
    )

    parser.add_argument(
        "csv",
        type=Path,
        help="Processed reachability CSV.",
    )

    parser.add_argument(
        "--servers",
        type=int,
        default=None,
        help="Only analyse a specific server count.",
    )

    parser.add_argument(
        "--repeat",
        type=int,
        default=None,
        help="Only analyse a specific repeat.",
    )

    parser.add_argument(
        "--output",
        type=Path,
        default=None,
        help="Output CSV. Defaults to <csv-dir>/reachability_comparisons.csv.",
    )

    args = parser.parse_args()

    print(f"Reading: {args.csv}")
    df = pd.read_csv(args.csv)

    required_columns = {
        "configuration",
        "servers",
        "repeat",
        "test",
        "n_mutants",
        "mutants",
    }

    missing = required_columns - set(df.columns)

    if missing:
        raise SystemExit(
            f"Missing required columns: {sorted(missing)}"
        )

    if args.servers is not None:
        df = df[df["servers"] == args.servers]

    if args.repeat is not None:
        df = df[df["repeat"] == args.repeat]

    if df.empty:
        raise SystemExit("No matching data found.")

    configurations = sorted(df["configuration"].unique())

    if len(configurations) < 2:
        raise SystemExit(
            "At least two configurations are required."
        )

    pairs = list(itertools.combinations(configurations, 2))

    print(f"Configurations: {len(configurations)}")
    print(f"Pairs:          {len(pairs)}")
    print(f"Rows:           {len(df):,}")

    print()
    print("Configurations:")
    for configuration in configurations:
        print(f"  {configuration}")

    print()
    print("Loading mutant sets...")

    mutant_sets = load_mutant_sets(df)

    print(f"Loaded {len(mutant_sets):,} mutant sets.")

    # Index available configurations for each
    # (servers, repeat, test).
    test_runs = {}

    for servers, repeat, configuration, test in mutant_sets:
        key = (servers, repeat, test)

        if key not in test_runs:
            test_runs[key] = {}

        test_runs[key][configuration] = mutant_sets[
            (servers, repeat, configuration, test)
        ]

    rows = []

    print()
    print("Generating pairwise comparisons...")

    for pair_index, (configuration_a, configuration_b) in enumerate(
        pairs,
        start=1,
    ):
        print(
            f"  [{pair_index}/{len(pairs)}] "
            f"{configuration_a} vs {configuration_b}"
        )

        for (servers, repeat, test), configurations_for_test in test_runs.items():
            mutants_a = configurations_for_test.get(
                configuration_a,
                frozenset(),
            )

            mutants_b = configurations_for_test.get(
                configuration_b,
                frozenset(),
            )

            common = mutants_a & mutants_b
            a_only = mutants_a - mutants_b
            b_only = mutants_b - mutants_a

            rows.append(
                {
                    "servers": servers,
                    "repeat": repeat,
                    "test": test,
                    "configuration_a": configuration_a,
                    "configuration_b": configuration_b,
                    "n_mutants_a": len(mutants_a),
                    "n_mutants_b": len(mutants_b),
                    "n_common": len(common),
                    "n_a_only": len(a_only),
                    "n_b_only": len(b_only),
                }
            )

    result = pd.DataFrame(rows)

    result = result.sort_values(
        [
            "servers",
            "repeat",
            "test",
            "configuration_a",
            "configuration_b",
        ]
    )

    output = args.output or (
        args.csv.parent / "reachability_comparisons.csv"
    )

    output.parent.mkdir(parents=True, exist_ok=True)
    result.to_csv(output, index=False)

    print()
    print("=" * 80)
    print("PAIRWISE COMPARISON COMPLETE")
    print("=" * 80)
    print(f"Configurations: {len(configurations):,}")
    print(f"Pairs:          {len(pairs):,}")
    print(f"Comparisons:    {len(result):,}")
    print(f"Output:         {output}")


if __name__ == "__main__":
    main()