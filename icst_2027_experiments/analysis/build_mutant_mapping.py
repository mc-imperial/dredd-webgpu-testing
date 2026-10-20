#!/usr/bin/env python3
"""Build mutant_to_tests.json from tracking data in bounded memory.

The full test -> mutant data can be far larger than RAM, but the kill run only
needs mutants reached by few tests. So this works in two passes over the
tracking files, holding only one test's data at a time:

  Pass 1  count how many tests reach each mutant
          (memory: one counter per mutant ID, a few MB)
  Pass 2  record which tests reach each mutant -- all mutants by default, or
          only those reached by <= --max-tests tests
          (memory: ~16 bytes per test/mutant pair in the *output*; checked
          against available RAM before pass 2 starts)

If a test appears in several runs (e.g. repeats), its mutants are the union
across those runs, and it is counted once.

Output:
  <output>                  {"<mutant>": ["<test>", ...], ...}, fewest tests first
  <output stem>_counts.csv      tests_reaching_mutant,n_mutants  (all mutants)
  <output stem>_per_mutant.csv  mutant_id,n_tests                (all mutants)
  (both written after pass 1, so available even if pass 2 is skipped)

To build another mapping (e.g. a higher --max-tests) without repeating pass 1,
reuse the per-mutant counts from an earlier run:
  build_mutant_mapping.py <run-dir> --configuration isolated-no-cache \\
      --counts-from processed/mutant_to_tests_isolated-no-cache_per_mutant.csv \\
      --output processed/mutant_to_tests_isolated-no-cache_max100.json --max-tests 100

Usage:
  build_mutant_mapping.py <run-dir> --configuration isolated-no-cache \\
      --output processed/mutant_to_tests_isolated-no-cache.json [--max-tests 20]
"""

import argparse
import csv
import json
import os
import time
import warnings
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

import numpy as np

try:
    from tqdm import tqdm
except ImportError:
    tqdm = None

MAPPING_FILE = "mapping_test_to_id.json"
warnings.filterwarnings("ignore", category=DeprecationWarning, module=__name__)


def log(message: str) -> None:
    print(message, flush=True)


def available_memory() -> int | None:
    """MemAvailable from /proc/meminfo in bytes (None if unknown)."""
    try:
        with open("/proc/meminfo") as f:
            for line in f:
                if line.startswith("MemAvailable:"):
                    return int(line.split()[1]) * 1024
    except OSError:
        pass
    return None


def progress(iterable, total, desc):
    if tqdm is None:
        return iterable
    return tqdm(iterable, total=total, desc=desc, unit="test", mininterval=2.0)


# --------------------------------------------------------------------------- #
# Locating files
# --------------------------------------------------------------------------- #

def find_tracking_dirs(run_dir: Path) -> list[str]:
    direct = run_dir / "tracking"
    if (direct / MAPPING_FILE).is_file():
        return [str(direct)]
    with os.scandir(run_dir) as entries:
        return [os.path.join(e.path, "tracking")
                for e in entries if e.is_dir(follow_symlinks=False) and e.name != "tracking"]


def read_test_index(tracking_dir: str) -> list[tuple[str, str]]:
    """[(test name, path of its mutant file)] for one tracking dir."""
    try:
        with open(os.path.join(tracking_dir, MAPPING_FILE)) as f:
            mapping = json.load(f)
    except FileNotFoundError:
        return []
    return [(test, os.path.join(tracking_dir, f"{test_id}.txt")) for test, test_id in mapping.items()]


def index_tests(run_root: Path, configuration: str, workers: int) -> dict[str, list[str]]:
    """Test name -> mutant files for that test (one per run it appears in)."""
    run_dirs = sorted(p for p in (run_root / configuration).glob("servers-*/repeat-*") if p.is_dir())
    if not run_dirs:
        raise SystemExit(f"No servers-*/repeat-* runs under {run_root / configuration}")

    tracking_dirs = [d for r in run_dirs for d in find_tracking_dirs(r)]
    log(f"{len(run_dirs)} run(s), {len(tracking_dirs):,} tracking dirs")

    files_by_test: dict[str, list[str]] = defaultdict(list)
    with ThreadPoolExecutor(max_workers=workers) as pool:
        entries = pool.map(read_test_index, tracking_dirs)
        if tqdm is not None:
            entries = tqdm(entries, total=len(tracking_dirs), desc="Indexing", unit="dir", mininterval=2.0)
        for entry in entries:
            for test, path in entry:
                files_by_test[test].append(path)
    return dict(files_by_test)


# --------------------------------------------------------------------------- #
# Reading one test's mutants
# --------------------------------------------------------------------------- #

def read_ids(path: str) -> np.ndarray:
    try:
        with open(path) as f:
            text = f.read()
    except FileNotFoundError:
        return np.empty(0, dtype=np.int64)
    return np.fromstring(text, dtype=np.int64, sep="\n")


def test_mutants(paths: list[str]) -> np.ndarray:
    """Sorted, unique mutant IDs reached by one test (union over its runs)."""
    if len(paths) == 1:
        return np.unique(read_ids(paths[0]))
    return np.unique(np.concatenate([read_ids(p) for p in paths]))


def iter_tests(tests: list[str], files_by_test: dict[str, list[str]], workers: int):
    """Yield (test index, mutant IDs), reading ahead in parallel with bounded buffering."""
    batch = workers * 16
    with ThreadPoolExecutor(max_workers=workers) as pool:
        for start in range(0, len(tests), batch):
            chunk = tests[start:start + batch]
            for offset, ids in enumerate(pool.map(lambda t: test_mutants(files_by_test[t]), chunk)):
                yield start + offset, ids


# --------------------------------------------------------------------------- #
# Main
# --------------------------------------------------------------------------- #

def main():
    parser = argparse.ArgumentParser(description=__doc__,
                                     formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("run_root", type=Path, help="Experiment run directory (contains configurations)")
    parser.add_argument("--configuration", required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--max-tests", type=int, default=None,
                        help="Only map mutants reached by at most this many tests (default: all)")
    parser.add_argument("--counts-only", action="store_true",
                        help="Stop after pass 1 (write the count files, skip the mapping)")
    parser.add_argument("--force", action="store_true",
                        help="Run pass 2 even if it looks like it won't fit in memory")
    parser.add_argument("--workers", type=int, default=8, help="Reader threads")
    parser.add_argument("--counts-from", type=Path, default=None,
                        help="Skip pass 1: load per-mutant counts from an earlier run's "
                             "<stem>_per_mutant.csv (same run directory and configuration)")
    args = parser.parse_args()

    start = time.monotonic()
    files_by_test = index_tests(args.run_root.resolve(), args.configuration, args.workers)
    tests = sorted(files_by_test)
    log(f"{len(tests):,} distinct tests ({time.monotonic() - start:.1f}s)")

    if args.counts_from is not None:
        counts = load_counts(args.counts_from)
        log(f"Pass 1 skipped: counts for {np.count_nonzero(counts):,} mutants loaded from {args.counts_from}")
    else:
        counts = count_pass(args, tests, files_by_test, start)
    run_pass2(args, tests, files_by_test, counts, start)


def load_counts(path: Path) -> np.ndarray:
    with path.open() as f:
        rows = [(int(m), int(n)) for m, n in csv.reader(f) if m != "mutant_id"]
    ids = np.array([m for m, _ in rows], dtype=np.int64)
    counts = np.zeros(int(ids.max()) + 1 if ids.size else 1, dtype=np.uint32)
    counts[ids] = [n for _, n in rows]
    return counts


def count_pass(args, tests, files_by_test, start) -> np.ndarray:
    # ---- Pass 1: tests per mutant ------------------------------------------
    counts = np.zeros(1 << 16, dtype=np.uint32)
    relationships = 0
    for _, ids in progress(iter_tests(tests, files_by_test, args.workers), len(tests), "Pass 1/2 counting"):
        if ids.size == 0:
            continue
        if ids[-1] >= counts.size:
            counts = np.concatenate([counts, np.zeros(max(int(ids[-1]) + 1, 2 * counts.size) - counts.size,
                                                      dtype=np.uint32)])
        counts[ids] += 1  # ids are unique within a test, so this is safe
        relationships += ids.size

    reached = np.flatnonzero(counts)
    log(f"Pass 1: {reached.size:,} mutants reached, {relationships:,} relationships "
        f"({time.monotonic() - start:.1f}s)")

    counts_path = args.output.with_name(args.output.stem + "_counts.csv")
    counts_path.parent.mkdir(parents=True, exist_ok=True)
    histogram = np.bincount(counts[reached])
    with counts_path.open("w", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(["tests_reaching_mutant", "n_mutants"])
        for k in np.flatnonzero(histogram):
            writer.writerow([int(k), int(histogram[k])])
    log(f"Wrote {counts_path}")

    per_mutant_path = args.output.with_name(args.output.stem + "_per_mutant.csv")
    with per_mutant_path.open("w", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(["mutant_id", "n_tests"])
        writer.writerows(zip(reached.tolist(), counts[reached].tolist()))
    log(f"Wrote {per_mutant_path}")

    if args.counts_only:
        log("--counts-only: skipping the mapping")
        raise SystemExit(0)
    return counts


def run_pass2(args, tests, files_by_test, counts, start) -> None:
    selected = counts > 0
    if args.max_tests is not None:
        selected &= counts <= args.max_tests
    n_selected = int(selected.sum())
    n_pairs = int(counts[selected].sum())
    limit = f"1..{args.max_tests}" if args.max_tests is not None else "any number of"
    log(f"{n_selected:,} mutants reached by {limit} tests ({n_pairs:,} pairs to collect)")

    # Rough sizes for pass 2: 16 bytes/pair in memory; JSON is the test name per pair.
    avg_name = sum(map(len, tests)) / max(len(tests), 1)
    need = n_pairs * 16 + selected.size
    log(f"Pass 2 estimate: ~{need / 2**30:.1f} GiB memory, "
        f"~{n_pairs * (avg_name + 4) / 2**30:.1f} GiB JSON output")
    available = available_memory()
    if available is not None and need > 0.8 * available and not args.force:
        raise SystemExit(
            f"Pass 2 needs ~{need / 2**30:.1f} GiB but only {available / 2**30:.1f} GiB is available. "
            f"Use --max-tests to map fewer mutants, or --force to try anyway. "
            f"(The count files above are already written.)")

    # ---- Pass 2: which tests, for selected mutants ---------------------------
    # Each pair is packed into one uint64 (mutant << 32 | test) so a single
    # in-place sort groups pairs by mutant, using 8 bytes per pair.
    keys = np.empty(n_pairs, dtype=np.uint64)
    filled = 0
    for test_idx, ids in progress(iter_tests(tests, files_by_test, args.workers), len(tests), "Pass 2/2 mapping"):
        ids = ids[ids < selected.size]
        hits = ids[selected[ids]].astype(np.uint64)
        keys[filled:filled + hits.size] = (hits << np.uint64(32)) | np.uint64(test_idx)
        filled += hits.size
    assert filled == n_pairs, f"files changed between passes ({filled} != {n_pairs})"

    log("Sorting ...")
    keys.sort()
    mutant_of = (keys >> np.uint64(32)).astype(np.uint32)
    starts = np.flatnonzero(np.r_[True, mutant_of[1:] != mutant_of[:-1]]) if n_pairs else np.empty(0, int)
    mutants = mutant_of[starts]
    del mutant_of
    sizes = np.diff(np.r_[starts, n_pairs])
    mutant_order = np.lexsort((mutants, sizes))  # fewest tests first, ties by ID
    low32 = np.uint64(0xFFFFFFFF)

    log(f"Writing {args.output} ...")
    with args.output.open("w") as f:
        f.write("{\n")
        for i, j in enumerate(mutant_order):
            s, n = starts[j], sizes[j]
            names = sorted(tests[t] for t in (keys[s:s + n] & low32).tolist())
            sep = ",\n" if i < len(mutant_order) - 1 else "\n"
            f.write(f"  {json.dumps(str(int(mutants[j])))}: {json.dumps(names)}{sep}")
        f.write("}\n")

    log(f"Done: {n_selected:,} mutants written in {time.monotonic() - start:.1f}s")


if __name__ == "__main__":
    main()