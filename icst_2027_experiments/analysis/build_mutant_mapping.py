#!/usr/bin/env python3
"""Build mutant_to_tests.json directly from tracking data, using little memory.

Reads the Dredd tracking files for one configuration and writes, for each
mutant, the tests that reach it. Unlike extract_results.py ->
mutants_to_tests.py, nothing is held as text or pandas tables: each mutant's
tests are stored as an array of 4-byte test indices, so memory is roughly
4 bytes per (test, mutant) relationship.

Output (mutants ordered fewest-tests-first, then by ID):
  <output>                  {"<mutant>": ["<test>", ...], ...}
  <output stem>_counts.csv  tests_reaching_mutant,n_mutants  (all mutants)

Usage:
  build_mutant_mapping.py <run-dir> --configuration isolated-no-cache \
      --output processed/mutant_to_tests_isolated-no-cache.json --max-tests 20
"""

import argparse
import csv
import json
import os
import time
from array import array
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

import numpy as np

try:
    from tqdm import tqdm
except ImportError:
    tqdm = None

MAPPING_FILE = "mapping_test_to_id.json"


def log(message: str) -> None:
    print(message, flush=True)


# --------------------------------------------------------------------------- #
# Reading tracking directories
# --------------------------------------------------------------------------- #

def find_run_dirs(run_root: Path, configuration: str) -> list[Path]:
    return sorted(p for p in (run_root / configuration).glob("servers-*/repeat-*") if p.is_dir())


def find_tracking_dirs(run_dir: Path) -> list[str]:
    direct = run_dir / "tracking"
    if (direct / MAPPING_FILE).is_file():
        return [str(direct)]
    with os.scandir(run_dir) as entries:
        return [os.path.join(e.path, "tracking")
                for e in entries if e.is_dir(follow_symlinks=False) and e.name != "tracking"]


def read_tracking_dir(tracking_dir: str) -> list[tuple[str, set[int]]]:
    """[(test name, mutant IDs reached)] for one tracking dir; [] if none."""
    try:
        with open(os.path.join(tracking_dir, MAPPING_FILE)) as f:
            mapping = json.load(f)
    except FileNotFoundError:
        return []

    out = []
    for test, test_id in mapping.items():
        try:
            with open(os.path.join(tracking_dir, f"{test_id}.txt")) as f:
                mutants = set(map(int, f.read().split()))
        except FileNotFoundError:
            mutants = set()
        out.append((test, mutants))
    return out


def batched(items: list, size: int):
    for i in range(0, len(items), size):
        yield items[i:i + size]


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
                        help="Only write mutants reached by at most this many tests "
                             "(recommended: the full mapping can be enormous)")
    parser.add_argument("--workers", type=int, default=8, help="Reader threads")
    args = parser.parse_args()

    start = time.monotonic()
    run_dirs = find_run_dirs(args.run_root.resolve(), args.configuration)
    if not run_dirs:
        raise SystemExit(f"No servers-*/repeat-* runs under {args.run_root / args.configuration}")

    tracking_dirs = [d for run_dir in run_dirs for d in find_tracking_dirs(run_dir)]
    log(f"{len(run_dirs)} run(s), {len(tracking_dirs):,} tracking dirs "
        f"(listed in {time.monotonic() - start:.1f}s)")

    # Test names are stored once; relationships refer to them by index.
    # Relationships are appended as two parallel arrays of uint32 (C-speed extend).
    test_index: dict[str, int] = {}
    test_names: list[str] = []
    rel_mutant = array("I")
    rel_test = array("I")

    bar = tqdm(total=len(tracking_dirs), unit="dir", mininterval=2.0) if tqdm else None
    processed = 0

    with ThreadPoolExecutor(max_workers=args.workers) as pool:
        # Bounded batches so finished-but-unmerged results can't pile up in memory.
        for batch in batched(tracking_dirs, args.workers * 32):
            for results in pool.map(read_tracking_dir, batch):
                for test, mutants in results:
                    idx = test_index.get(test)
                    if idx is None:
                        idx = test_index[test] = len(test_names)
                        test_names.append(test)
                    rel_mutant.extend(mutants)
                    rel_test.extend(array("I", [idx]) * len(mutants))

            processed += len(batch)
            if bar:
                bar.update(len(batch))
                bar.set_postfix(tests=f"{len(test_names):,}", rel=f"{len(rel_mutant):,}",
                                est_peak=f"{len(rel_mutant) * 20 / 2**30:.1f}GiB")
            elif processed % 5000 < len(batch):
                log(f"  {processed:,}/{len(tracking_dirs):,} dirs, {len(test_names):,} tests, "
                    f"{len(rel_mutant):,} relationships")
    if bar:
        bar.close()

    log(f"Read {len(test_names):,} tests, {len(rel_mutant):,} relationships "
        f"in {time.monotonic() - start:.1f}s")

    # Combine (mutant, test) into one uint64 key, then sort + de-duplicate.
    # De-duplication handles a test appearing in several repeats.
    log("Sorting relationships ...")
    keys = np.frombuffer(rel_mutant, dtype=np.uint32).astype(np.uint64) << np.uint64(32)
    del rel_mutant
    keys |= np.frombuffer(rel_test, dtype=np.uint32).astype(np.uint64)
    del rel_test
    keys.sort()  # in place: by mutant, then test index
    keys = keys[np.r_[True, keys[1:] != keys[:-1]]]  # drop duplicates
    # (np.sort + manual de-dup: np.unique is far slower on large uint64 arrays
    # in recent numpy versions.)
    mutant_of = (keys >> np.uint64(32)).astype(np.uint32)
    test_of = (keys & np.uint64(0xFFFFFFFF)).astype(np.uint32)
    del keys

    # mutant_of is sorted, so each mutant's tests are one contiguous run.
    starts = np.flatnonzero(np.r_[True, mutant_of[1:] != mutant_of[:-1]])
    mutants = mutant_of[starts]
    n_tests = np.diff(np.r_[starts, len(mutant_of)])
    del mutant_of
    log(f"{len(mutants):,} mutants reached")

    counts_path = args.output.with_name(args.output.stem + "_counts.csv")
    counts_path.parent.mkdir(parents=True, exist_ok=True)
    freq = np.bincount(n_tests)
    values = np.flatnonzero(freq)
    freq = freq[values]
    with counts_path.open("w", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(["tests_reaching_mutant", "n_mutants"])
        writer.writerows(zip(values.tolist(), freq.tolist()))
    log(f"Wrote {counts_path}")

    keep = np.ones(len(mutants), dtype=bool) if args.max_tests is None else n_tests <= args.max_tests
    # Fewest tests first, ties by mutant ID (lexsort: last key is primary).
    order = np.flatnonzero(keep)[np.lexsort((mutants[keep], n_tests[keep]))]
    log(f"Writing {len(order):,} mutants"
        + (f" reached by <= {args.max_tests} tests" if args.max_tests is not None else "")
        + f" to {args.output} ...")

    # Stream the JSON so the full mapping is never built as Python objects.
    with args.output.open("w") as f:
        f.write("{\n")
        for i, j in enumerate(order):
            s, n = starts[j], n_tests[j]
            tests = sorted(test_names[t] for t in test_of[s:s + n].tolist())
            sep = ",\n" if i < len(order) - 1 else "\n"
            f.write(f"  {json.dumps(str(int(mutants[j])))}: {json.dumps(tests)}{sep}")
        f.write("}\n")

    log(f"Done in {time.monotonic() - start:.1f}s")


if __name__ == "__main__":
    main()