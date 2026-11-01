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
All comparisons use only the tests tracked in all three runs of a subtree (matched by
test name), so a test that one run did not track cannot look like a cache effect; how
many were left out is printed (and \\<P>TestsLeftOutMax).

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
  \\CacheWarm{Lost,Fewer,Affected}Pct{Median,Min,Max}   off vs warm, % of mutants reached when off
                                         (absolute: the warm cache against no cache at all)
(--prefix replaces "Cache" in every name, e.g. IsoCache for the isolated experiment.)
"""
import argparse
import collections
import csv
import glob
import json
import os
import re
import statistics
import sys


def per_test_sets(rep_dir):
    """{test name: set of mutants it reached} for one run, or None if it has no tracking.

    Tests are named from each tracking folder's mapping_test_to_id.json, so the same test
    can be matched across runs; a test listed twice is counted once. Without a mapping,
    the tracking file's path stands in for the name."""
    tdirs = glob.glob(os.path.join(rep_dir, "**", "tracking"), recursive=True) or \
        ([os.path.join(rep_dir, "tracking")] if os.path.isdir(os.path.join(rep_dir, "tracking")) else [])
    if not tdirs:
        return None
    tests = {}
    for td in tdirs:
        files = {os.path.basename(f): f for f in glob.glob(os.path.join(td, "test_id_*.txt"))}
        names = {}
        mpath = os.path.join(td, "mapping_test_to_id.json")
        if os.path.exists(mpath):
            with open(mpath) as fh:
                for name, tid in json.load(fh).items():
                    tid = str(tid)
                    if not tid.startswith("test_id_"):
                        tid = f"test_id_{tid}"
                    names[tid if tid.endswith(".txt") else tid + ".txt"] = name
        for base, f in files.items():
            name = names.get(base, f)
            if name in tests:
                continue
            with open(f) as fh:
                tests[name] = {int(l) for l in fh if l.strip()}
    return tests


def counts_over(tests, names):
    """Per-mutant number of reaching tests, and mean mutants per test, over the given tests."""
    counts = collections.Counter()
    total = 0
    for n in names:
        counts.update(tests[n])
        total += len(tests[n])
    return {"counts": counts, "tests": len(names), "mean": total / len(names) if names else 0.0}


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
            t_off = per_test_sets(rep(args.root, sub, off_cfg, r))
            t_cold = per_test_sets(rep(args.root, sub, on_cfg, 2 * r - 1))
            t_warm = per_test_sets(rep(args.root, sub, on_cfg, 2 * r))
            if not (t_off and t_cold and t_warm):
                print(f"{sub} repeat {r}: missing a run, skipped", file=sys.stderr)
                continue
            # Compare only the tests tracked in all three runs: a test tracked in one run but
            # not another would otherwise show up as mutants reached by fewer or more tests.
            common = set(t_off) & set(t_cold) & set(t_warm)
            dropped = {k: len(t) - len(common) for k, t in (("off", t_off), ("cold", t_cold), ("warm", t_warm))}
            off, cold, warm = (counts_over(t, common) for t in (t_off, t_cold, t_warm))
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
                "warm_lost": sum(1 for m in o if m not in w),
                "warm_fewer": sum(1 for m in o if 0 < w.get(m, 0) < o[m]),
                "dropped_off": dropped["off"], "dropped_cold": dropped["cold"], "dropped_warm": dropped["warm"],
            })
            x = rows[-1]
            print(f"{x['subtree'][:38]:38} {x['repeat']:>2} {x['tests']:>5} {x['union_cold']:>10,} {x['union_warm']:>10,} "
                  f"{x['mean_cold']:>9,} {x['mean_warm']:>9,} {x['lost']:>6,} {x['fewer']:>6,} {x['more']:>5,} "
                  f"{x['cold_lost']:>8,} {x['cold_fewer']:>9,}  "
                  f"{'yes' if x['off_eq_cold'] else 'NO'}", flush=True)
            if any(dropped.values()):
                print(f"{'':41}tests tracked in only some runs, left out: off {dropped['off']}, "
                      f"cold {dropped['cold']}, warm {dropped['warm']}", flush=True)

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
        base = x["union_off"] if key.startswith(("cold_", "warm_")) else x["union_cold"]
        return 100.0 * x[key] / base if base else 0.0

    per_sub = {}  # subtree -> mean % over its repeats
    for sub, xs in by_sub.items():
        per_sub[sub] = {k: statistics.mean(pct(x, k) for x in xs)
                        for k in ("lost", "fewer", "cold_lost", "cold_fewer", "warm_lost", "warm_fewer")}
        per_sub[sub]["affected"] = per_sub[sub]["lost"] + per_sub[sub]["fewer"]
        per_sub[sub]["cold_affected"] = per_sub[sub]["cold_lost"] + per_sub[sub]["cold_fewer"]
        per_sub[sub]["warm_affected"] = per_sub[sub]["warm_lost"] + per_sub[sub]["warm_fewer"]
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
                      ("cold_lost", "ColdLost"), ("cold_fewer", "ColdFewer"), ("cold_affected", "ColdAffected"),
                      ("warm_lost", "WarmLost"), ("warm_fewer", "WarmFewer"), ("warm_affected", "WarmAffected")):
        vals = [p[key] for p in per_sub.values()]
        lines += [f"\\newcommand{{\\{P}{name}PctMedian}}{{{statistics.median(vals):.1f}\\%}}",
                  f"\\newcommand{{\\{P}{name}PctMin}}{{{min(vals):.1f}\\%}}",
                  f"\\newcommand{{\\{P}{name}PctMax}}{{{max(vals):.1f}\\%}}"]
    lines += [f"\\newcommand{{\\{P}RepeatMaxDiff}}{{{fmt_int(repeat_diff)}}}",
              f"\\newcommand{{\\{P}MoreMax}}{{{fmt_int(max(x['more'] for x in rows))}}}",
              f"\\newcommand{{\\{P}OffEqCold}}{{{sum(1 for x in rows if x['off_eq_cold'])}}}",
              f"\\newcommand{{\\{P}OffColdMaxDiff}}{{{fmt_int(max(x['off_cold_diff'] for x in rows))}}}",
              f"\\newcommand{{\\{P}TestsLeftOutMax}}"
              f"{{{fmt_int(max(max(x['dropped_off'], x['dropped_cold'], x['dropped_warm']) for x in rows))}}}"]
    with open(out, "w") as f:
        f.write("\n".join(lines) + "\n")
    print(f"wrote {out}")


if __name__ == "__main__":
    main()