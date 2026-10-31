#!/usr/bin/env python3
"""LaTeX macros for RQ1(a) from the mutant-by-test comparison (compare_reach_matrices.py
--per-mutant): how stable the isolated reaching-test *sets* are across repeats, whether
shared execution's undercounting is a strict subset of the isolated set, and how well
selecting cheap mutants by their shared count works.

Reads only the per-mutant CSV (fast; no matrices needed).

Usage (from the repository root):
  python3 icst_2027_experiments/gen_rq1a_matrix.py \\
      --per-mutant results/reachability/matrix/compare_per_mutant.csv.gz \\
      --out icst_2027_experiments/generated/rq1a_matrix_macros.tex

Macros (counts and percentages; for shared runs, min--max over the runs of each
configuration, <Cfg> = Sub (whole subtree) or File (file subtrees)):
  Isolated stability
    \\MatIsoRepeats, \\MatIsoReached (reached in any repeat), \\MatIsoReachedEvery,
    \\MatIsoIdentical, \\MatIsoIdenticalPct   identical test set in every repeat
    \\MatIsoVary, \\MatIsoVaryPct              test set differs between repeats
    \\MatIsoVaryMid                           ... of which reached by 101--1000 tests
    \\MatIsoVaryMedianTests                   tests found by some repeats only (median)
    \\MatIsoVaryMedianSharePct                ... as a share of the union (median)
  Shared runs: undercounting (S = shared set; I, U = isolated intersection, union)
    \\MatSh<Cfg>Runs
    \\MatSh<Cfg>Fewer      S within U, missing tests every isolated repeat found
    \\MatSh<Cfg>Other      S has a test no isolated repeat found
    \\MatSh<Cfg>SubsetPct  Fewer / (Fewer + Other): undercounted sets that are strict subsets
    \\MatSh<Cfg>MissingSharePct   median share of I missing, over Fewer mutants
    \\MatSh<Cfg>OtherExtraMedian  median number of extra tests, over Other mutants
  Shared runs: selecting cheap mutants (shared count 1--100)
    \\MatSh<Cfg>Cheap                 selected
    \\MatSh<Cfg>CheapTrue, ...Pct     truly cheap (isolated union <= 100): precision
    \\MatSh<Cfg>CheapRecallPct        truly cheap mutants that are selected: recall
    \\MatSh<Cfg>CheapMid, ...Pct      isolated 101--1000
    \\MatSh<Cfg>CheapAboveThousand, ...Pct   isolated > 1000
    \\MatSh<Cfg>CheapMaxIso           largest isolated count among those selected
  \\MatTrulyCheap   mutants with isolated union <= 100
"""
import argparse
import csv
import gzip
import os
import statistics
import sys

CHEAP = 100


def fmt_int(n):
    return f"{n:,}".replace(",", "{,}")


def rng_int(values):
    lo, hi = min(values), max(values)
    return fmt_int(lo) if lo == hi else f"{fmt_int(lo)}--{fmt_int(hi)}"


def pct(a, b):
    return 100.0 * a / b if b else 0.0


def rng_pct(values):
    lo, hi = round(min(values), 1), round(max(values), 1)
    return f"{lo:.1f}\\%" if lo == hi else f"{lo:.1f}--{hi:.1f}\\%"


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--per-mutant", default="results/reachability/matrix/compare_per_mutant.csv.gz")
    ap.add_argument("--out", default="icst_2027_experiments/generated/rq1a_matrix_macros.tex")
    args = ap.parse_args()

    opener = gzip.open if args.per_mutant.endswith(".gz") else open
    with opener(args.per_mutant, "rt") as f:
        reader = csv.DictReader(f)
        cols = reader.fieldnames
        rows = [{k: int(v) for k, v in r.items()} for r in reader]
    iso_cols = [c for c in cols if c.startswith("n_iso_")]
    runs = {"Sub": [c[:-2] for c in cols if c.startswith("sub_") and c.endswith("_n")],
            "File": [c[:-2] for c in cols if c.startswith("file_") and c.endswith("_n")]}
    if not iso_cols or not (runs["Sub"] or runs["File"]):
        sys.exit(f"{args.per_mutant}: expected n_iso_* and sub_/file_ columns (from compare_reach_matrices.py)")

    m = {}
    # ---- isolated stability
    reached = [r for r in rows if r["n_union"] > 0]
    vary = [r for r in reached if r["n_union"] != r["n_intersection"]]
    m["MatIsoRepeats"] = str(len(iso_cols))
    m["MatIsoReached"] = fmt_int(len(reached))
    m["MatIsoReachedEvery"] = fmt_int(sum(all(r[c] > 0 for c in iso_cols) for r in rows))
    m["MatIsoIdentical"] = fmt_int(len(reached) - len(vary))
    m["MatIsoIdenticalPct"] = f"{pct(len(reached) - len(vary), len(reached)):.1f}\\%"
    m["MatIsoVary"] = fmt_int(len(vary))
    m["MatIsoVaryPct"] = f"{pct(len(vary), len(reached)):.1f}\\%"
    m["MatIsoVaryMid"] = fmt_int(sum(CHEAP < r["n_union"] <= 1000 for r in vary))
    if vary:
        m["MatIsoVaryMedianTests"] = fmt_int(round(statistics.median(r["n_union"] - r["n_intersection"] for r in vary)))
        m["MatIsoVaryMedianSharePct"] = (
            f"{100 * statistics.median((r['n_union'] - r['n_intersection']) / r['n_union'] for r in vary):.1f}\\%")
    truly_cheap = sum(1 for r in reached if r["n_union"] <= CHEAP)
    m["MatTrulyCheap"] = fmt_int(truly_cheap)

    # ---- shared runs
    for cfg, names in runs.items():
        if not names:
            continue
        acc = {k: [] for k in ("fewer", "other", "subset", "missing", "extra", "cheap", "true", "true_pct",
                               "recall", "mid", "mid_pct", "high", "high_pct", "max")}
        for run in names:
            n, miss, extra = run + "_n", run + "_missing", run + "_extra"
            got = [r for r in reached if r[n] > 0]
            fewer = [r for r in got if r[extra] == 0 and r[miss] > 0]
            other = [r for r in got if r[extra] > 0]
            acc["fewer"].append(len(fewer))
            acc["other"].append(len(other))
            acc["subset"].append(pct(len(fewer), len(fewer) + len(other)))
            acc["missing"].append(100 * statistics.median(r[miss] / r["n_intersection"] for r in fewer
                                                          if r["n_intersection"] > 0) if fewer else 0.0)
            acc["extra"].append(round(statistics.median(r[extra] for r in other)) if other else 0)
            cheap = [r for r in got if r[n] <= CHEAP]
            true_ = sum(r["n_union"] <= CHEAP for r in cheap)
            mid = sum(CHEAP < r["n_union"] <= 1000 for r in cheap)
            high = sum(r["n_union"] > 1000 for r in cheap)
            acc["cheap"].append(len(cheap))
            acc["true"].append(true_)
            acc["true_pct"].append(pct(true_, len(cheap)))
            acc["recall"].append(pct(true_, truly_cheap))
            acc["mid"].append(mid)
            acc["mid_pct"].append(pct(mid, len(cheap)))
            acc["high"].append(high)
            acc["high_pct"].append(pct(high, len(cheap)))
            acc["max"].append(max((r["n_union"] for r in cheap), default=0))
        p = f"MatSh{cfg}"
        m[p + "Runs"] = str(len(names))
        m[p + "Fewer"] = rng_int(acc["fewer"])
        m[p + "Other"] = rng_int(acc["other"])
        m[p + "SubsetPct"] = rng_pct(acc["subset"])
        m[p + "MissingSharePct"] = rng_pct(acc["missing"])
        m[p + "OtherExtraMedian"] = rng_int(acc["extra"])
        m[p + "Cheap"] = rng_int(acc["cheap"])
        m[p + "CheapTrue"] = rng_int(acc["true"])
        m[p + "CheapTruePct"] = rng_pct(acc["true_pct"])
        m[p + "CheapRecallPct"] = rng_pct(acc["recall"])
        m[p + "CheapMid"] = rng_int(acc["mid"])
        m[p + "CheapMidPct"] = rng_pct(acc["mid_pct"])
        m[p + "CheapAboveThousand"] = rng_int(acc["high"])
        m[p + "CheapAboveThousandPct"] = rng_pct(acc["high_pct"])
        m[p + "CheapMaxIso"] = rng_int(acc["max"])

    os.makedirs(os.path.dirname(os.path.abspath(args.out)), exist_ok=True)
    with open(args.out, "w") as f:
        f.write(f"% Generated by gen_rq1a_matrix.py from {args.per_mutant} -- do not edit by hand.\n")
        f.write("% Shared-run values are min--max over the runs of each configuration.\n")
        for k, v in m.items():
            f.write(f"\\newcommand{{\\{k}}}{{{v}}}\n")
    width = max(map(len, m))
    for k, v in m.items():
        print(f"  \\{k:<{width}}  {v}")
    print(f"wrote {args.out} ({len(m)} macros)")


if __name__ == "__main__":
    main()