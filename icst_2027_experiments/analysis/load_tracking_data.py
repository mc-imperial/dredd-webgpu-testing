#!/usr/bin/env python3

"""
Utilities for extracting CTS test -> mutant reachability data.

This module deliberately contains no analysis logic. It converts the raw
tracking output of a reachability-stability experiment into Python data
structures that downstream analyses can operate on.

Supported layouts
-----------------

1. Normal/subtree run:

    run/
        tracking/
            mapping_test_to_id.json
            test_id_0.txt
            test_id_1.txt
            ...

2. Isolated run:

    run/
        0/
            tracking/
                mapping_test_to_id.json
                test_id_0.txt
        1/
            tracking/
                mapping_test_to_id.json
                test_id_0.txt
        ...

The isolated layout may have one test per directory, but this module does
not rely on that assumption: it reads whatever mappings are actually present.
"""

from __future__ import annotations

import json
from dataclasses import dataclass
from pathlib import Path
from typing import Iterator


@dataclass(frozen=True)
class TestReachability:
    """Mutants reached by one CTS test."""

    test: str
    mutants: frozenset[str]


def find_tracking_dirs(run_dir: str | Path) -> list[Path]:
    """
    Find all tracking directories belonging to a run.

    Handles both:
      - run/tracking/
      - run/<test-index>/tracking/
    """
    run_dir = Path(run_dir)

    if not run_dir.is_dir():
        raise FileNotFoundError(f"Run directory does not exist: {run_dir}")

    # Normal layout: one tracking directory directly under the run.
    direct = run_dir / "tracking"
    if (direct / "mapping_test_to_id.json").is_file():
        return [direct]

    # Isolated layout: tracking directory inside each child run directory.
    tracking_dirs = []

    for child in sorted(run_dir.iterdir()):
        if not child.is_dir():
            continue

        tracking = child / "tracking"

        if (tracking / "mapping_test_to_id.json").is_file():
            tracking_dirs.append(tracking)

    return tracking_dirs


def load_tracking_dir(tracking_dir: str | Path) -> dict[str, frozenset[str]]:
    """
    Load one tracking directory.

    Returns:
        {
            "CTS test name": frozenset({"mutant1", "mutant2", ...}),
            ...
        }
    """
    tracking_dir = Path(tracking_dir)

    mapping_path = tracking_dir / "mapping_test_to_id.json"

    if not mapping_path.is_file():
        raise FileNotFoundError(
            f"Missing mapping_test_to_id.json: {mapping_path}"
        )

    mapping = json.loads(mapping_path.read_text())

    result: dict[str, frozenset[str]] = {}

    for test, test_id in mapping.items():
        mutant_path = tracking_dir / f"{test_id}.txt"

        if mutant_path.is_file():
            mutants = frozenset(
                line.strip()
                for line in mutant_path.read_text().splitlines()
                if line.strip()
            )
        else:
            mutants = frozenset()

        result[test] = mutants

    return result


def load_run(run_dir: str | Path) -> dict[str, frozenset[str]]:
    """
    Load all test -> mutant mappings from a run.

    The result is normalized across normal and isolated layouts.

    If the same test occurs more than once, the mutant sets are unioned.
    """
    result: dict[str, set[str]] = {}

    tracking_dirs = find_tracking_dirs(run_dir)

    if not tracking_dirs:
        raise ValueError(
            f"No tracking directories found in run: {run_dir}"
        )

    for tracking_dir in tracking_dirs:
        tracking = load_tracking_dir(tracking_dir)

        for test, mutants in tracking.items():
            result.setdefault(test, set()).update(mutants)

    return {
        test: frozenset(mutants)
        for test, mutants in result.items()
    }


def iter_test_reachability(
    run_dir: str | Path,
) -> Iterator[TestReachability]:
    """
    Yield one TestReachability object per CTS test.
    """
    data = load_run(run_dir)

    for test in sorted(data):
        yield TestReachability(
            test=test,
            mutants=data[test],
        )


def to_rows(run_dir: str | Path) -> list[dict]:
    """
    Convert a run into one row per test.

    Example row:

        {
            "test": "...",
            "mutants": frozenset({"123", "456"}),
            "n_mutants": 2,
        }
    """
    return [
        {
            "test": item.test,
            "mutants": item.mutants,
            "n_mutants": len(item.mutants),
        }
        for item in iter_test_reachability(run_dir)
    ]


def to_mutant_rows(run_dir: str | Path) -> list[dict]:
    """
    Convert a run into one row per test-mutant relationship.

    Example:

        {
            "test": "...",
            "mutant": "123",
        }

    This is particularly convenient for pandas.
    """
    rows = []

    for item in iter_test_reachability(run_dir):
        for mutant in sorted(item.mutants):
            rows.append(
                {
                    "test": item.test,
                    "mutant": mutant,
                }
            )

    return rows


def to_dataframe(run_dir: str | Path):
    """
    Return a pandas DataFrame with one row per CTS test.

    Columns:
        test
        mutants
        n_mutants
    """
    import pandas as pd

    return pd.DataFrame(to_rows(run_dir))


def to_mutant_dataframe(run_dir: str | Path):
    """
    Return a pandas DataFrame with one row per test-mutant relationship.

    Columns:
        test
        mutant
    """
    import pandas as pd

    return pd.DataFrame(to_mutant_rows(run_dir))


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(
        description="Extract CTS test -> mutant reachability data."
    )
    parser.add_argument(
        "run_dir",
        type=Path,
        help="Path to an experiment run directory.",
    )

    args = parser.parse_args()

    df = to_dataframe(args.run_dir)

    print(f"Tests: {len(df)}")
    print(f"Total test-mutant relationships: {df['n_mutants'].sum()}")
    print()
    print(df[["test", "n_mutants"]].to_string(index=False))