#!/usr/bin/env python3

from __future__ import annotations

import json
import time
from pathlib import Path


def log(message: str) -> None:
    print(f"[load_tracking] {message}", flush=True)


def read_mutants(path: Path) -> frozenset[str]:
    with path.open("r") as f:
        return frozenset(
            line.strip()
            for line in f
            if line.strip()
        )


def load_tracking_dir(tracking_dir: Path) -> dict[str, frozenset[str]]:
    mapping_path = tracking_dir / "mapping_test_to_id.json"

    with mapping_path.open("r") as f:
        mapping = json.load(f)

    result = {}

    for test, test_id in mapping.items():
        mutant_path = tracking_dir / f"{test_id}.txt"

        if mutant_path.is_file():
            result[test] = read_mutants(mutant_path)
        else:
            result[test] = frozenset()

    return result


def find_tracking_dirs(run_dir: Path) -> list[Path]:
    start = time.monotonic()

    log(f"Scanning for tracking directories: {run_dir}")

    direct = run_dir / "tracking"

    if (direct / "mapping_test_to_id.json").is_file():
        log("Found normal subtree tracking layout")
        log(f"Directory scan: {time.monotonic() - start:.2f}s")
        return [direct]

    tracking_dirs = []

    for child in run_dir.iterdir():
        if not child.is_dir():
            continue

        tracking = child / "tracking"

        if (tracking / "mapping_test_to_id.json").is_file():
            tracking_dirs.append(tracking)

    elapsed = time.monotonic() - start

    log(
        f"Found {len(tracking_dirs):,} tracking directories "
        f"in {elapsed:.2f}s"
    )

    return tracking_dirs


def load_run(run_dir: str | Path) -> dict[str, frozenset[str]]:
    run_dir = Path(run_dir)

    total_start = time.monotonic()

    log("=" * 60)
    log(f"Loading run: {run_dir}")
    log("=" * 60)

    # ---------------------------------------------------------
    # Step 1: Find tracking directories
    # ---------------------------------------------------------

    start = time.monotonic()

    tracking_dirs = find_tracking_dirs(run_dir)

    if not tracking_dirs:
        raise ValueError(
            f"No tracking directories found in {run_dir}"
        )

    log(
        f"Step 1 complete: found {len(tracking_dirs):,} "
        f"tracking directories in {time.monotonic() - start:.2f}s"
    )

    # ---------------------------------------------------------
    # Step 2: Read tracking data
    # ---------------------------------------------------------

    start = time.monotonic()

    result: dict[str, set[str]] = {}

    for index, tracking_dir in enumerate(tracking_dirs, start=1):
        tracking = load_tracking_dir(tracking_dir)

        for test, mutants in tracking.items():
            if test not in result:
                result[test] = set()

            result[test].update(mutants)

        # For large isolated runs, report progress every 1000 dirs.
        if index % 1000 == 0 or index == len(tracking_dirs):
            elapsed = time.monotonic() - start
            rate = index / elapsed if elapsed else 0

            log(
                f"Step 2 progress: {index:,}/{len(tracking_dirs):,} "
                f"directories "
                f"({rate:,.0f} dirs/s, {elapsed:.1f}s elapsed)"
            )

    elapsed = time.monotonic() - start

    log(
        f"Step 2 complete: loaded {len(result):,} tests "
        f"in {elapsed:.2f}s"
    )

    # ---------------------------------------------------------
    # Step 3: Normalize
    # ---------------------------------------------------------

    start = time.monotonic()

    normalized = {
        test: frozenset(mutants)
        for test, mutants in result.items()
    }

    elapsed = time.monotonic() - start

    log(
        f"Step 3 complete: normalized {len(normalized):,} tests "
        f"in {elapsed:.2f}s"
    )

    # ---------------------------------------------------------
    # Summary
    # ---------------------------------------------------------

    total_elapsed = time.monotonic() - total_start

    total_relationships = sum(
        len(mutants)
        for mutants in normalized.values()
    )

    log("-" * 60)
    log(f"Tests:         {len(normalized):,}")
    log(f"Relationships: {total_relationships:,}")
    log(f"Total time:    {total_elapsed:.2f}s")
    log("-" * 60)

    return normalized