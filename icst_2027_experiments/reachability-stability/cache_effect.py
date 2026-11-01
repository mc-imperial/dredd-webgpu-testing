#!/usr/bin/env python3
"""Summarise the cache-effect experiment (cache_experiment.sh, shared execution, or
isolated_cache_experiment.sh, isolated execution: --mode isolated).

For each subtree and experiment repeat r, compares three runs of the same tests
(<mode> = subtree or isolated):
  off   <mode>-no-cache  repeat r
  cold  <mode>-cache     repeat 2r-1   (empty cache at start)
  warm  <mode>-cache     repeat 2r     (cache filled by the cold run)

Per run: tests tracked, union of mutants, mean unique mutants per test.
Cold vs warm, per mutant (number of tests reaching it):
  lost      reached when cold, reached by no test when warm
  fewer     reached by fewer tests when warm
  more      reached by more tests when warm (should be ~0)
Off vs cold, the same way (coldlost, coldfewer: as a share of the mutants reached
with the cache off): the effect of the cache filling up *during* one pass, i.e. of
earlier tests' shaders being reused by later tests. Also checks that off and cold
are identical, and counts the mutants whose number of reaching tests differs if not.

Usage:
  cache_effect.py results/cache-experiment-3 [--csv out.csv] [--macros out.tex]
  cache_effect.py results/cache-experiment-isolated --mode isolated --prefix IsoCache --macros out.tex

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
  \\CacheCold{Lost,Fewer,Affected}Pct{Median,Min,Max}   off vs cold, % of mutants reached when off
(--prefix replaces "Cache" in every name, e.g. IsoCache for the isolated experiment.)
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
    ap.add_argument("--mode", choices=("subtree", "isolated"), default="subtree",
                    help="which runs: subtree-[no-]cache (default) or isolated-[no-]cache")
    ap.add_argument("--prefix", default="Cache", help="macro name prefix (default Cache)")
    args = ap.parse_args()
    off_cfg, on_cfg = f"{args.mode}-no-cache", f"{args.mode}-cache"

    rows = []
    hdr = (f"{'subtree':38} {'r':>2} {'tests':>5} {'union cold':>10} {'union warm':>10} "
           f"{'mean cold':>9} {'mean warm':>9} {'lost':>6} {'fewer':>6} {'more':>5} {'coldlost':>8} {'coldfewer':>9}  off=cold")
    print(hdr)
    print("-" * len(hdr), flush=True)
    for sub in sorted(os.listdir(args.root)):
        off_reps = glob.glob(rep(args.root, sub, off_cfg, "*"))
        for r in sorted(int(re.search(r"repeat-(\d+)$", p).group(1)) for p in off_reps):
            off = per_mutant_counts(rep(args.root, sub, off_cfg, r))
            cold = per_mutant_counts(rep(args.root, sub, on_cfg, 2 * r - 1))
            warm = per_mutant_counts(rep(args.root, sub, on_cfg, 2 * r))
            if not (off and cold and warm):
                print(f"{sub} repeat {r}: missing a run, skipped", file=sys.stderr)
                continue
            o, c, w = off["counts"], cold["counts"], warm["counts"]
            rows.append({
                "subtree": sub, "repeat": r, "tests": cold["tests"],
                "union_off": len(off["counts"]), "union_cold": len(c), "union_warm": len(w),
                "mean_off": round(off["mean"]), "mean_cold": round(cold["mean"]), "mean_warm": round(warm["mean"]),
                "off_eq_cold": off["counts"] == c,
                "off_cold_diff": sum(1 for m in set(off["counts"]) | set(c) if off["counts"].get(m, 0) != c.get(m, 0)),
                "lost": sum(1 for m in c if m not in w),
                "fewer": sum(1 for m in c if 0 < w.get(m, 0) < c[m]),
                "more": sum(1 for m in w if w[m] > c.get(m, 0)),
                "cold_lost": sum(1 for m in o if m not in c),
                "cold_fewer": sum(1 for m in o if 0 < c.get(m, 0) < o[m]),
            })
            x = rows[-1]
            print(f"{x['subtree'][:38]:38} {x['repeat']:>2} {x['tests']:>5} {x['union_cold']:>10,} {x['union_warm']:>10,} "
                  f"{x['mean_cold']:>9,} {x['mean_warm']:>9,} {x['lost']:>6,} {x['fewer']:>6,} {x['more']:>5,} "
                  f"{x['cold_lost']:>8,} {x['cold_fewer']:>9,}  "
                  f"{'yes' if x['off_eq_cold'] else 'NO'}", flush=True)

    if not rows:
        sys.exit("no complete subtree runs found")


    if args.csv:
        with open(args.csv, "w", newline="") as f:
            wr = csv.DictWriter(f, fieldnames=list(rows[0]))
            wr.writeheader()
            wr.writerows(rows)

    if args.macros:
        write_macros(rows, args.macros, args.prefix)


def write_macros(rows, out, prefix="Cache"):
    by_sub = collections.defaultdict(list)
    for x in rows:
        by_sub[x["subtree"]].append(x)

    def pct(x, key):
        base = x["union_off"] if key.startswith("cold_") else x["union_cold"]
        return 100.0 * x[key] / base if base else 0.0

    per_sub = {}  # subtree -> mean % over its repeats
    for sub, xs in by_sub.items():
        per_sub[sub] = {k: statistics.mean(pct(x, k) for x in xs)
                        for k in ("lost", "fewer", "cold_lost", "cold_fewer")}
        per_sub[sub]["affected"] = per_sub[sub]["lost"] + per_sub[sub]["fewer"]
        per_sub[sub]["cold_affected"] = per_sub[sub]["cold_lost"] + per_sub[sub]["cold_fewer"]
    repeat_diff = max(max(x["lost"] + x["fewer"] for x in xs) - min(x["lost"] + x["fewer"] for x in xs)
                      for xs in by_sub.values())

    print(f"\n{'subtree':38} {'repeats':>7} {'lost %':>7} {'fewer %':>8} {'affected %':>10} "
          f"{'coldlost %':>10} {'coldfewer %':>11}")
    for sub in sorted(per_sub, key=lambda s: -per_sub[s]["affected"]):
        p = per_sub[sub]
        print(f"{sub[:38]:38} {len(by_sub[sub]):>7} {p['lost']:>7.1f} {p['fewer']:>8.1f} {p['affected']:>10.1f} "
              f"{p['cold_lost']:>10.1f} {p['cold_fewer']:>11.1f}")

    def fmt_int(n):
        return f"{n:,}".replace(",", "{,}")

    P = prefix
    lines = [f"% Generated by cache_effect.py --macros (prefix {P}) -- do not edit by hand.",
             f"\\newcommand{{\\{P}Subtrees}}{{{len(by_sub)}}}",
             f"\\newcommand{{\\{P}Runs}}{{{len(rows)}}}"]
    for key, name in (("lost", "Lost"), ("fewer", "Fewer"), ("affected", "Affected"),
                      ("cold_lost", "ColdLost"), ("cold_fewer", "ColdFewer"), ("cold_affected", "ColdAffected")):
        vals = [p[key] for p in per_sub.values()]
        lines += [f"\\newcommand{{\\{P}{name}PctMedian}}{{{statistics.median(vals):.1f}\\%}}",
                  f"\\newcommand{{\\{P}{name}PctMin}}{{{min(vals):.1f}\\%}}",
                  f"\\newcommand{{\\{P}{name}PctMax}}{{{max(vals):.1f}\\%}}"]
    lines += [f"\\newcommand{{\\{P}RepeatMaxDiff}}{{{fmt_int(repeat_diff)}}}",
              f"\\newcommand{{\\{P}MoreMax}}{{{fmt_int(max(x['more'] for x in rows))}}}",
              f"\\newcommand{{\\{P}OffEqCold}}{{{sum(1 for x in rows if x['off_eq_cold'])}}}",
              f"\\newcommand{{\\{P}OffColdMaxDiff}}{{{fmt_int(max(x['off_cold_diff'] for x in rows))}}}"]
    with open(out, "w") as f:
        f.write("\n".join(lines) + "\n")
    print(f"wrote {out}")


if __name__ == "__main__":
    main()