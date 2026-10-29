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
Also checks that off and cold are identical (same number of tests reaching every
mutant), and counts the mutants whose number of reaching tests differs if not.

Usage:
  cache_effect.py results/cache-experiment [--csv out.csv] [--macros out.tex]

--macros writes LaTeX macros for the paper. Lost and fewer are taken as a % of
the mutants reached in the cold run, averaged over each subtree's repeats, then
summarised across subtrees:
  \\CacheSubtrees, \\CacheRuns            subtrees and runs (subtree x repeat) used
  \\CacheLostPctMedian/Min/Max           % reached by no test when warm
  \\CacheFewerPctMedian/Min/Max          % reached by fewer tests when warm
  \\CacheAffectedPctMedian/Min/Max       lost + fewer
  \\CacheRepeatMaxDiff                   largest difference in lost + fewer between
                                         repeats of the same subtree (mutants)
  \\CacheMoreMax                         largest "more" in any run (mutants)
  \\CacheOffEqCold                       runs where off and cold were identical
  \\CacheOffColdMaxDiff                  most mutants whose count differed off vs cold
"""
import argparse
import collections
import csv
import glob
import os
import re
import statistics
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
    ap.add_argument("--macros", help="also write LaTeX macros for the paper to this file")
    args = ap.parse_args()

    rows = []
    hdr = (f"{'subtree':38} {'r':>2} {'tests':>5} {'union cold':>10} {'union warm':>10} "
           f"{'mean cold':>9} {'mean warm':>9} {'lost':>6} {'fewer':>6} {'more':>5}  off=cold")
    print(hdr)
    print("-" * len(hdr), flush=True)
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
                "off_cold_diff": sum(1 for m in set(off["counts"]) | set(c) if off["counts"].get(m, 0) != c.get(m, 0)),
                "lost": sum(1 for m in c if m not in w),
                "fewer": sum(1 for m in c if 0 < w.get(m, 0) < c[m]),
                "more": sum(1 for m in w if w[m] > c.get(m, 0)),
            })
            x = rows[-1]
            print(f"{x['subtree'][:38]:38} {x['repeat']:>2} {x['tests']:>5} {x['union_cold']:>10,} {x['union_warm']:>10,} "
                  f"{x['mean_cold']:>9,} {x['mean_warm']:>9,} {x['lost']:>6,} {x['fewer']:>6,} {x['more']:>5,}  "
                  f"{'yes' if x['off_eq_cold'] else 'NO'}", flush=True)

    if not rows:
        sys.exit("no complete subtree runs found")


    if args.csv:
        with open(args.csv, "w", newline="") as f:
            wr = csv.DictWriter(f, fieldnames=list(rows[0]))
            wr.writeheader()
            wr.writerows(rows)

    if args.macros:
        write_macros(rows, args.macros)


def write_macros(rows, out):
    by_sub = collections.defaultdict(list)
    for x in rows:
        by_sub[x["subtree"]].append(x)

    def pct(x, key):
        return 100.0 * x[key] / x["union_cold"] if x["union_cold"] else 0.0

    per_sub = {}  # subtree -> mean % over its repeats
    for sub, xs in by_sub.items():
        per_sub[sub] = {k: statistics.mean(pct(x, k) for x in xs) for k in ("lost", "fewer")}
        per_sub[sub]["affected"] = per_sub[sub]["lost"] + per_sub[sub]["fewer"]
    repeat_diff = max(max(x["lost"] + x["fewer"] for x in xs) - min(x["lost"] + x["fewer"] for x in xs)
                      for xs in by_sub.values())

    print(f"\n{'subtree':38} {'repeats':>7} {'lost %':>7} {'fewer %':>8} {'affected %':>10}")
    for sub in sorted(per_sub, key=lambda s: -per_sub[s]["affected"]):
        p = per_sub[sub]
        print(f"{sub[:38]:38} {len(by_sub[sub]):>7} {p['lost']:>7.1f} {p['fewer']:>8.1f} {p['affected']:>10.1f}")

    def fmt_int(n):
        return f"{n:,}".replace(",", "{,}")

    lines = ["% Generated by cache_effect.py --macros -- do not edit by hand.",
             f"\\newcommand{{\\CacheSubtrees}}{{{len(by_sub)}}}",
             f"\\newcommand{{\\CacheRuns}}{{{len(rows)}}}"]
    for key, name in (("lost", "Lost"), ("fewer", "Fewer"), ("affected", "Affected")):
        vals = [p[key] for p in per_sub.values()]
        lines += [f"\\newcommand{{\\Cache{name}PctMedian}}{{{statistics.median(vals):.1f}\\%}}",
                  f"\\newcommand{{\\Cache{name}PctMin}}{{{min(vals):.1f}\\%}}",
                  f"\\newcommand{{\\Cache{name}PctMax}}{{{max(vals):.1f}\\%}}"]
    lines += [f"\\newcommand{{\\CacheRepeatMaxDiff}}{{{fmt_int(repeat_diff)}}}",
              f"\\newcommand{{\\CacheMoreMax}}{{{fmt_int(max(x['more'] for x in rows))}}}",
              f"\\newcommand{{\\CacheOffEqCold}}{{{sum(1 for x in rows if x['off_eq_cold'])}}}",
              f"\\newcommand{{\\CacheOffColdMaxDiff}}{{{fmt_int(max(x['off_cold_diff'] for x in rows))}}}"]
    with open(out, "w") as f:
        f.write("\n".join(lines) + "\n")
    print(f"wrote {out}")


if __name__ == "__main__":
    main()