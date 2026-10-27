#!/usr/bin/env python3
"""Check whether per-test tracking reset correctly in one shared-execution run.

Reads one tracking/ folder (test_id_*.txt files + mapping_test_to_id.json) and reports:
  - how many tests have IDs, and how many wrote a tracking file
  - where the tracked tests are in the CTS (by test file), vs all tests there
  - the union of mutants across all tracking files
  - the largest tracking files, with test names
  - how many tracking files contain the 'first test' set (the mutants that a
    server's first test reaches); mid-run tests containing it suggest either a
    new device or mutants carried over because the reset didn't fire
  - accumulation: how often a tracking file is a superset of the previous one
    (in test-ID order); a missing reset makes files grow monotonically

Usage:
  check_tracking_reset.py <path to a tracking/ folder> [--first-ids 0,1,2,3]
"""
import argparse
import collections
import glob
import json
import os
import statistics


def test_file(name):
    # webgpu:shader,execution,expression,call,builtin,abs:abs:params  ->  shader,execution,...,abs
    parts = name.split(":")
    return parts[1] if len(parts) > 1 else name


def area(name):
    # shader,execution,... -> shader,execution
    return ",".join(test_file(name).split(",")[:2])


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("tracking_dir")
    ap.add_argument("--first-ids", default="0,1,2,3", help="IDs of each server's first test")
    args = ap.parse_args()

    mapping = json.load(open(os.path.join(args.tracking_dir, "mapping_test_to_id.json")))
    id_to_name = {}
    for name, tid in mapping.items():
        id_to_name[str(tid).replace("test_id_", "")] = name

    tracked = {}
    for f in glob.glob(os.path.join(args.tracking_dir, "test_id_*.txt")):
        tid = os.path.basename(f)[len("test_id_"):-len(".txt")]
        with open(f) as fh:
            tracked[tid] = {int(line) for line in fh if line.strip()}

    print(f"Tests with an ID (mapping entries): {len(mapping):,}")
    print(f"Tests that wrote a tracking file:   {len(tracked):,} ({100 * len(tracked) / len(mapping):.2f}%)")
    unnamed = [t for t in tracked if t not in id_to_name]
    print(f"Tracking files with no name in the mapping: {len(unnamed)}")

    union = set().union(*tracked.values()) if tracked else set()
    sizes = sorted(len(s) for s in tracked.values())
    print(f"Union of mutants across tracking files: {len(union):,}")
    print(f"Mutants per tracking file: median {statistics.median(sizes):,.0f}, "
          f"max {sizes[-1]:,}, files with 1 mutant: {sum(1 for s in sizes if s == 1):,}")

    # Where the tracked tests are.
    all_area = collections.Counter(area(n) for n in mapping)
    tr_area = collections.Counter(area(id_to_name[t]) for t in tracked if t in id_to_name)
    print("\nTracked tests by CTS area (tracked / all tests in that area):")
    for a, n in all_area.most_common():
        print(f"  {a:40} {tr_area.get(a, 0):>6,} / {n:>7,}")

    files_all = collections.Counter(test_file(n) for n in mapping)
    files_tr = collections.Counter(test_file(id_to_name[t]) for t in tracked if t in id_to_name)
    print(f"\nTest files with at least one tracked test: {len(files_tr):,} of {len(files_all):,}")
    print("Tracked tests per test file, among files that have any: "
          f"median {statistics.median(files_tr.values()):.0f}, max {max(files_tr.values())}")

    # Largest files.
    print("\nLargest tracking files:")
    for tid, s in sorted(tracked.items(), key=lambda kv: -len(kv[1]))[:10]:
        print(f"  test_id_{tid:>7} {len(s):>7,}  {id_to_name.get(tid, '?')[:110]}")

    # Files containing the first-test set.
    firsts = [tracked[i] for i in args.first_ids.split(",") if i in tracked]
    if firsts:
        core = set.intersection(*firsts)
        holders = [t for t, s in tracked.items() if core <= s]
        print(f"\nMutants reached by every server's first test: {len(core):,}")
        print(f"Tracking files containing all of them: {len(holders)} "
              f"(IDs: {', '.join(sorted(holders, key=int)[:12])}{' ...' if len(holders) > 12 else ''})")
        partial = sorted(((len(core & s) / len(core), t) for t, s in tracked.items()
                          if 0.5 <= len(core & s) / len(core) < 1), reverse=True)
        print(f"Tracking files containing 50-99% of them: {len(partial)}")

    # Accumulation check, in test-ID order.
    order = sorted(tracked, key=int)
    supersets = sum(1 for a, b in zip(order, order[1:]) if len(tracked[b]) > len(tracked[a]) and tracked[a] <= tracked[b])
    print(f"\nConsecutive tracked files where the later one strictly contains the earlier: "
          f"{supersets} of {len(order) - 1}")


if __name__ == "__main__":
    main()