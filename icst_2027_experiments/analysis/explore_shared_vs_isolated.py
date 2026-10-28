#!/usr/bin/env python3
"""Explore whether mutants that look cheap under shared execution really are (no output files).

For each shared configuration (first repeat found), and for each threshold X:
  - mutants that LOOK cheap: reached by <= X tests under shared execution
  - of those, how many are really expensive: reached by > X tests under isolated execution
  - how expensive those really are (median isolated reaching tests)
  - the evaluation cost the shared mapping predicts for all the cheap-looking mutants
    (sum of shared reaching tests) vs. the real cost (sum of isolated reaching tests),
    i.e. how many test runs evaluating them would really take
Then the files of the really-expensive ones (at --files-threshold), and examples.

Usage:
  explore_shared_vs_isolated.py results/reachability/processed/shared-v2 \
      --isolated results/reachability/processed/isolated/run-*/..._per_mutant.csv \
      [--ranges icst_2027_experiments/generated/nir_file_ranges.txt] \
      [--thresholds 10,100,500,1000,5000] [--files-threshold 1000]
"""
import argparse
import bisect
import collections
import csv
import glob
import os
import random
import statistics


def read_counts(path):
    with open(path, newline="") as f:
        return {int(r["mutant_id"]): int(r["n_tests"]) for r in csv.DictReader(f) if int(r["n_tests"]) > 0}


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("shared_root")
    ap.add_argument("--isolated", nargs="+", required=True)
    ap.add_argument("--ranges")
    ap.add_argument("--thresholds", default="10,100,500,1000,5000")
    ap.add_argument("--files-threshold", type=int, default=1000)
    args = ap.parse_args()
    thresholds = [int(x) for x in args.thresholds.split(",")]

    iso = {}
    for p in args.isolated:
        for m, n in read_counts(p).items():
            iso[m] = max(iso.get(m, 0), n)
    n_all = max(iso.values())

    starts, names = [], []
    if args.ranges:
        for line in open(args.ranges):
            parts = line.split()
            if len(parts) >= 2 and parts[0].isdigit():
                starts.append(int(parts[0])); names.append(os.path.basename(parts[-1]))

    def file_of(m):
        i = bisect.bisect_right(starts, m) - 1
        return names[i] if i >= 0 else "?"

    for cfg in ["subtree-no-cache", "file-subtrees-no-cache"]:
        runs = sorted(glob.glob(os.path.join(args.shared_root, "*", cfg, "per_mutant.csv")))
        if not runs:
            continue
        sh = read_counts(runs[0])
        print(f"\n######## {cfg}  ({os.path.basename(os.path.dirname(os.path.dirname(runs[0])))})")

        def band_row(label, look):
            if not look:
                return
            med_sh = statistics.mean(sh[m] for m in look)
            med_iso = statistics.mean(iso.get(m, 0) for m in look)
            really = sum(1 for m in look if iso.get(m, 0) > sh[m])  # more tests in isolation than shared
            every = sum(1 for m in look if iso.get(m, 0) == n_all)
            print(f"   {label:>12} {len(look):>9,} {med_sh:>11,.0f} {med_iso:>13,.0f} "
                  f"{100 * really / len(look):>12.1f}% {100 * every / len(look):>12.1f}%  ({every:,})")

        for title, bands in [("cumulative (<= X)", [(1, x) for x in thresholds]),
                             ("non-overlapping bands", list(zip([1] + [t + 1 for t in thresholds[:-1]], thresholds)))]:
            print(f"\n0. Shared vs isolated reaching tests, {title}")
            print(f"   {'shared tests':>12} {'mutants':>9} {'mean':>11} {'mean':>13} "
                  f"{'% more tests':>13} {'reached by':>13}")
            print(f"   {'':>12} {'':>9} {'(shared)':>11} {'(isolated)':>13} {'than shared':>13} {'every test':>13}")
            for lo, hi in bands:
                band_row(f"{lo:,}-{hi:,}" if lo > 1 else f"<= {hi:,}",
                         [m for m, n in sh.items() if lo <= n <= hi])
        print(f"\n1. Mutants that LOOK cheap under shared execution (<= X tests), vs. isolated execution")
        print(f"   {'X':>6} {'look cheap':>10} {'really > X':>11} {'%':>6} {'their median':>13} "
              f"{'by every':>9} {'predicted runs':>15} {'real runs':>14} {'factor':>7}")
        print(f"   {'':>6} {'':>10} {'(isolated)':>11} {'':>6} {'isolated tests':>13} {'test':>9}")
        for x in thresholds:
            look = [m for m, n in sh.items() if n <= x]
            really = [m for m in look if iso.get(m, 0) > x]
            pred = sum(sh[m] for m in look)
            real = sum(iso.get(m, 0) for m in look)
            med = statistics.median(iso[m] for m in really) if really else 0
            every = sum(1 for m in really if iso[m] == n_all)
            print(f"   {x:>6,} {len(look):>10,} {len(really):>11,} {100 * len(really) / max(1, len(look)):>5.1f}% "
                  f"{med:>13,.0f} {every:>9,} {pred:>15,} {real:>14,} {real / max(1, pred):>6.0f}x")

        x = args.files_threshold
        really = [m for m, n in sh.items() if n <= x and iso.get(m, 0) > x]
        print(f"\n2. Files of the {len(really):,} mutants that look cheap (<= {x}) but are not")
        if starts:
            for f, c in collections.Counter(file_of(m) for m in really).most_common(12):
                print(f"   {c:>7,}  {f}")
        else:
            print("   (pass --ranges to see their files)")

        print("\n3. Examples (mutant: shared tests -> isolated tests)")
        random.seed(1)
        for m in sorted(random.sample(really, min(8, len(really)))):
            print(f"   {m:>7}: {sh[m]:>5,} -> {iso[m]:>7,}   {file_of(m) if starts else ''}")


if __name__ == "__main__":
    main()