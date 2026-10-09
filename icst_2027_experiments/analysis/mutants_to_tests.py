#!/usr/bin/env python3

import argparse
import csv
import sys
import json
import math
from pathlib import Path
from collections import defaultdict, Counter


def write_histogram(mutant_to_tests, output_file):
    """Write a fixed-width histogram of tests reaching each mutant."""

    # Count distinct tests from the existing mapping.
    all_tests = {
        test
        for tests in mutant_to_tests.values()
        for test in tests
    }
    n_tests = len(all_tests)

    if not mutant_to_tests or n_tests == 0:
        print("No mutants or tests found; skipping histogram.")
        return

    # Count how many tests reach each mutant.
    counts = Counter(
        len(tests) for tests in mutant_to_tests.values()
    )
    max_count = max(counts)

    # Choose a fixed bin width, aiming for about 20 bins.
    bin_width = max(1, math.ceil(n_tests / 20))
    n_bins = math.ceil(max_count / bin_width)

    with open(output_file, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["tests_reaching_mutant", "n_mutants"])

        for i in range(n_bins):
            lower = i * bin_width + 1
            upper = (i + 1) * bin_width

            n_mutants_in_bin = sum(
                frequency
                for count, frequency in counts.items()
                if lower <= count <= upper
            )

            writer.writerow([
                f"{lower}-{upper}",
                n_mutants_in_bin,
            ])

    print(f"Histogram saved to {output_file}")
    print(f"Distinct tests in mapping: {n_tests}")
    print(f"Fixed bin width: {bin_width}")
    print(f"Number of bins: {n_bins}")


def main():
    parser = argparse.ArgumentParser(
        description="Map mutant IDs to tests that reach them."
    )
    parser.add_argument(
        "csv_file",
        help="Input analysis CSV",
    )
    parser.add_argument(
        "configuration",
        help="Configuration to analyse",
    )
    parser.add_argument(
        "-o", "--output",
        default="mutant_to_tests.json",
        help="Output JSON file",
    )
    parser.add_argument(
        "--histogram",
        action="store_true",
        help="Also generate a fixed-width histogram CSV",
    )
    args = parser.parse_args()

    # Allow large fields containing thousands of mutant IDs.
    limit = sys.maxsize
    while True:
        try:
            csv.field_size_limit(limit)
            break
        except OverflowError:
            limit //= 10

    mutant_to_tests = defaultdict(set)

    with open(args.csv_file, newline="", encoding="utf-8") as f:
        for row in csv.DictReader(f):
            if row["configuration"] != args.configuration:
                continue

            for mutant in json.loads(row["mutants"]):
                mutant_to_tests[mutant].add(row["test"])

    result = {
        mutant: sorted(tests)
        for mutant, tests in sorted(mutant_to_tests.items())
    }

    with open(args.output, "w", encoding="utf-8") as f:
        json.dump(result, f, indent=2)

    print(f"Mapped {len(result)} mutants to tests.")
    print(f"Saved to {args.output}")

    if args.histogram:
        output_path = Path(args.output)
        histogram_file = output_path.with_name(
            output_path.stem + "_histogram.csv"
        )
        write_histogram(result, histogram_file)


if __name__ == "__main__":
    main()