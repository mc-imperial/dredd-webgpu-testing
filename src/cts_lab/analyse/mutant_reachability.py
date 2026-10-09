#!/usr/bin/env python3

import argparse
import csv
import json
import math
from collections import defaultdict, Counter


def build_mutant_to_tests(csv_path, configuration):
    """
    Build a mapping:
        mutant_id -> list of tests that reach that mutant

    Only rows belonging to the specified configuration are processed.
    """
    mutant_to_tests = defaultdict(set)

    with open(csv_path, "r", newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)

        for row in reader:
            if row["configuration"] != configuration:
                continue

            test = row["test"]
            mutants = json.loads(row["mutants"])

            for mutant_id in mutants:
                mutant_to_tests[mutant_id].add(test)

    # Sets eliminate duplicate test names; sorting makes output deterministic.
    return {
        mutant_id: sorted(tests)
        for mutant_id, tests in sorted(mutant_to_tests.items())
    }

def write_histogram(mutant_to_tests, output_file):

    # Count distinct tests across all mutants.
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

    # Aim for approximately 20 fixed-width bins.
    bin_width = max(1, math.ceil(n_tests / 20))
    n_bins = math.ceil(max_count / bin_width)

    with open(output_file, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["tests_reaching_mutant", "n_mutants"])

        for i in range(n_bins):
            lower = i * bin_width + 1
            upper = (i + 1) * bin_width

            n_mutants = sum(
                frequency
                for count, frequency in counts.items()
                if lower <= count <= upper
            )

            writer.writerow([f"{lower}-{upper}", n_mutants])

    print(f"Histogram saved to {output_file}")
    print(f"Distinct tests: {n_tests}")
    print(f"Fixed bin width: {bin_width}")
    print(f"Number of bins: {n_bins}")

if __name__ == "__main__":
    main()