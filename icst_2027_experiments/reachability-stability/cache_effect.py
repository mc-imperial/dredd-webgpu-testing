#!/usr/bin/env python3
"""Summarise the cache-effect experiment (cache_experiment.sh).

For each subtree and experiment repeat r, compares three runs of the same tests:
  off   subtree-no-cache  repeat r
  cold  subtree-cache     repeat 2r-1   (empty cache at start)
  warm  subtree-cache     repeat 2r     (cache filled by the cold run)

Per run: tests tracked, union of mutants, mean unique mutants per test.
Cold vs warm, per mutant (number of tests reaching it):
  lost      reached when cold, reached by no test when warm
  fewer     reached by fewer tests when warm
  more      reached by more tests when warm (should be ~0)
Also checks that off and cold are identical (they should be: nothing to hit yet).

Usage:
  cache_effect.py results/cache-experiment [--csv out.csv]
"""
import argparse
import collections
import csv
import glob
import os
import re
import sys


def per_mutant_counts(rep_dir):
    tdirs = glob.glob(os.path.join(rep_dir, "**", "tracking"), recursive=True) or \
        ([os.path.join(rep_dir, "tracking")] if os.path.isdir(os.path.join(rep_dir, "tracking")) else [])
    if not tdirs:
        return None
    counts = collections.Counter()
    tests = 0
    total = 0
    for td in tdirs:
        for f in glob.glob(os.path.join(td, "test_id_*.txt")):
            with open(f) as fh:
                ms = {int(l) for l in fh if l.strip()}
            tests += 1
            total += len(ms)
            counts.update(ms)
    return {"counts": counts, "tests": tests, "mean": total / tests if tests else 0.0}


def rep(root, sub, cfg, n):
    return os.path.join(root, sub, cfg, "servers-1", f"repeat-{n}")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("root")
    ap.add_argument("--csv", help="also write the rows to this CSV file")
    args = ap.parse_args()

    rows = []
    for sub in sorted(os.listdir(args.root)):
        off_reps = glob.glob(rep(args.root, sub, "subtree-no-cache", "*"))
        for r in sorted(int(re.search(r"repeat-(\d+)$", p).group(1)) for p in off_reps):
            off = per_mutant_counts(rep(args.root, sub, "subtree-no-cache", r))
            cold = per_mutant_counts(rep(args.root, sub, "subtree-cache", 2 * r - 1))
            warm = per_mutant_counts(rep(args.root, sub, "subtree-cache", 2 * r))
            if not (off and cold and warm):
                print(f"{sub} repeat {r}: missing a run, skipped", file=sys.stderr)
                continue
            c, w = cold["counts"], warm["counts"]
            rows.append({
                "subtree": sub, "repeat": r, "tests": cold["tests"],
                "union_off": len(off["counts"]), "union_cold": len(c), "union_warm": len(w),
                "mean_off": round(off["mean"]), "mean_cold": round(cold["mean"]), "mean_warm": round(warm["mean"]),
                "off_eq_cold": off["counts"] == c,
                "lost": sum(1 for m in c if m not in w),
                "fewer": sum(1 for m in c if 0 < w.get(m, 0) < c[m]),
                "more": sum(1 for m in w if w[m] > c.get(m, 0)),
            })

    if not rows:
        sys.exit("no complete subtree runs found")

    hdr = (f"{'subtree':38} {'r':>2} {'tests':>5} {'union cold':>10} {'union warm':>10} "
           f"{'mean cold':>9} {'mean warm':>9} {'lost':>6} {'fewer':>6} {'more':>5}  off=cold")
    print(hdr)
    print("-" * len(hdr))
    for x in rows:
        print(f"{x['subtree'][:38]:38} {x['repeat']:>2} {x['tests']:>5} {x['union_cold']:>10,} {x['union_warm']:>10,} "
              f"{x['mean_cold']:>9,} {x['mean_warm']:>9,} {x['lost']:>6,} {x['fewer']:>6,} {x['more']:>5,}  "
              f"{'yes' if x['off_eq_cold'] else 'NO'}")

    if args.csv:
        with open(args.csv, "w", newline="") as f:
            wr = csv.DictWriter(f, fieldnames=list(rows[0]))
            wr.writeheader()
            wr.writerows(rows)


if __name__ == "__main__":
    main()