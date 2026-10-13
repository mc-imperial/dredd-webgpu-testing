#!/usr/bin/env python3
"""Load Dredd mutant-tracking data for one CTS run.

Supported layouts (``run_dir`` is a ``.../servers-N/repeat-M`` directory):

  Subtree run:   run_dir/tracking/mapping_test_to_id.json
                 run_dir/tracking/<test_id>.txt

  Isolated run:  run_dir/<test_dir>/tracking/mapping_test_to_id.json
                 run_dir/<test_dir>/tracking/<test_id>.txt
                 (one <test_dir> per test, so possibly tens of thousands)

Speed-ups over the straightforward version:
  * os.scandir() to list test directories (directory type comes from the
    listing itself, so no extra stat() call per entry);
  * no is_file() checks: files are just opened, and a missing one is caught;
  * each mutant file is read in one go and split, rather than line by line;
  * directories are read by a thread pool, so the many small-file reads
    overlap instead of waiting on each other (most of the time is I/O);
  * tests seen only once (the normal case) are stored without copying.
"""

from __future__ import annotations

import json
import os
import time
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

try:
    from tqdm import tqdm
except ImportError:  # progress bar is optional
    tqdm = None

MAPPING_FILE = "mapping_test_to_id.json"
DEFAULT_WORKERS = min(32, (os.cpu_count() or 1) * 4)


def log(message: str) -> None:
    print(f"[load_tracking] {message}", flush=True)


def read_mutants(path: str) -> frozenset[str]:
    """Mutant IDs in one tracking file (one per line); empty if the file is missing."""
    try:
        with open(path, "r") as f:
            return frozenset(f.read().split())
    except FileNotFoundError:
        return frozenset()


def load_tracking_dir(tracking_dir: str) -> dict[str, frozenset[str]]:
    """Read one tracking directory. Returns {} if it has no mapping file."""
    try:
        with open(os.path.join(tracking_dir, MAPPING_FILE), "r") as f:
            mapping = json.load(f)
    except FileNotFoundError:
        return {}

    return {
        test: read_mutants(os.path.join(tracking_dir, f"{test_id}.txt"))
        for test, test_id in mapping.items()
    }


def find_tracking_dirs(run_dir: Path) -> list[str]:
    """Candidate tracking directories for a run (existence checked when read)."""
    direct = run_dir / "tracking"
    if (direct / MAPPING_FILE).is_file():
        return [str(direct)]

    with os.scandir(run_dir) as entries:
        return [
            os.path.join(entry.path, "tracking")
            for entry in entries
            if entry.is_dir(follow_symlinks=False) and entry.name != "tracking"
        ]


def load_run(run_dir: str | Path, workers: int = DEFAULT_WORKERS,
             progress: bool = True) -> dict[str, frozenset[str]]:
    """Map each test in the run to the set of mutant IDs it reached."""
    run_dir = Path(run_dir)
    start = time.monotonic()

    tracking_dirs = find_tracking_dirs(run_dir)
    if not tracking_dirs:
        raise ValueError(f"No tracking directories found in {run_dir}")

    layout = "subtree" if len(tracking_dirs) == 1 else "isolated"
    log(f"{run_dir}: {len(tracking_dirs):,} candidate tracking dirs ({layout} layout), "
        f"listed in {time.monotonic() - start:.2f}s")

    result: dict[str, frozenset[str]] = {}
    found = 0

    with ThreadPoolExecutor(max_workers=workers) as pool:
        # Threads overlap the file reads; merging below happens in this thread.
        loaded = pool.map(load_tracking_dir, tracking_dirs)
        if progress and tqdm is not None and len(tracking_dirs) > 1:
            loaded = tqdm(loaded, total=len(tracking_dirs), desc="  tracking dirs",
                          unit="dir", leave=False, mininterval=1.0)

        for tracking in loaded:
            if tracking:
                found += 1
            for test, mutants in tracking.items():
                existing = result.get(test)
                result[test] = mutants if existing is None else existing | mutants

    if not found:
        raise ValueError(f"No tracking directories found in {run_dir}")

    relationships = sum(len(m) for m in result.values())
    log(f"{run_dir}: {len(result):,} tests, {relationships:,} relationships "
        f"from {found:,} tracking dirs in {time.monotonic() - start:.2f}s")

    return result