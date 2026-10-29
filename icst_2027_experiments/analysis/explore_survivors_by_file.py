#!/usr/bin/env python3
"""Explore where the survival analysis's mutants are, by source file.

The survival runs evaluate the least-reached mutants. This shows which files
those mutants come from, and where, among them, the killed and the surviving
ones are -- reported as counts and as each file's share of all mutants of
that kind (no per-file kill rates). Unreached mutants are shown alongside.

For every mutated file:
  mutants        all mutants in the file
  unreached      reached by no CTS shader test in any isolated repeat
  evaluated      evaluated in every survival run with the same outcome in every run
                 (the least-reached mutants; the survival table's set)
  killed         of those, killed in every run
  survived       of those, survived in every run

Prints (no output files):
  1. totals, with the generated files separately
  2. top files by unreached mutants (hand-written files; generated in the totals)
  3. top files by evaluated (least-reached) mutants: how concentrated they are
  4. top files by killed mutants, and 5. by surviving mutants
  6. how the lists compare: how concentrated each kind is (share held by the
     top files) and how many files the lists have in common
  7. with --functions (CSV from map_mutants_to_functions.py): the same counts per
     function -- the top functions by surviving mutants overall, then inside each
     of the --detail-files files with the most survivors

Inputs:
  ranges      CSV from gen_setup_generated.py --ranges-out (first_id,mutants,path)
  --isolated  the isolated repeats' *_per_mutant.csv (mutant_id,n_tests)
  runs        survival run folders containing results.jsonl

Usage:
  python3 icst_2027_experiments/analysis/explore_survivors_by_file.py \
      icst_2027_experiments/generated/mutant_file_ranges.csv \
      --isolated results/reachability/processed/isolated/run-*/mutant_to_tests_isolated-no-cache_per_mutant.csv \
      --runs results/cts-survival/twenty-four-hours/run*_24h
"""
import argparse
import bisect
import collections
import csv
import json
import os
from pathlib import Path


def outcome(rec):
    if rec.get("killed_by") or str(rec.get("status", "")).startswith("KILL"):
        return "killed"
    if rec.get("status") == "SURVIVED":
        return "survived"
    return "other"


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("ranges", type=Path)
    ap.add_argument("--isolated", nargs="+", required=True)
    ap.add_argument("--runs", nargs="+", type=Path, required=True)
    ap.add_argument("--top", type=int, default=10)
    ap.add_argument("--functions", type=Path, help="mutant_function_ranges.csv, for section 7")
    ap.add_argument("--detail-files", type=int, default=3,
                    help="section 7: list functions inside this many files with the most survivors")
    args = ap.parse_args()

    # ---- files ----
    files = []
    with open(args.ranges) as f:
        for r in csv.DictReader(line for line in f if not line.startswith("#")):
            files.append((int(r["first_id"]), int(r["mutants"]), r["path"]))
    files.sort()
    starts = [s for s, _, _ in files]

    def file_of(m):
        i = bisect.bisect_right(starts, m) - 1
        return files[i][2] if i >= 0 and m < files[i][0] + files[i][1] else None

    # ---- reached (any isolated repeat) ----
    reached = set()
    for p in args.isolated:
        with open(p, newline="") as f:
            reached.update(int(r["mutant_id"]) for r in csv.DictReader(f) if int(r["n_tests"]) > 0)

    # ---- survival outcomes (consistent across runs) ----
    per = collections.defaultdict(list)
    for d in sorted(args.runs):
        for line in open(d / "results.jsonl"):
            if line.strip():
                r = json.loads(line)
                per[r["mutant_id"]].append(outcome(r))
    out = {m: o[0] for m, o in per.items()
           if len(o) == len(args.runs) and len(set(o)) == 1 and o[0] != "other"}

    # ---- per-file counts ----
    st = {path: collections.Counter(mutants=n) for _, n, path in files}
    for m in reached:
        p = file_of(m)
        if p is None:
            raise SystemExit(f"mutant {m} is outside every file range -- wrong ranges file?")
        st[p]["reached"] += 1
    for m, o in out.items():
        p = file_of(m)
        st[p]["evaluated"] += 1
        st[p][o] += 1
    for p, c in st.items():
        c["unreached"] = c["mutants"] - c["reached"]

    gen = {p for p in st if p.startswith("build/")}
    hand = set(st) - gen
    name = lambda p: os.path.basename(p) + (" (gen)" if p in gen else "")
    kinds = ("unreached", "evaluated", "killed", "survived")
    total = {k: sum(c[k] for c in st.values()) for k in kinds}

    def tot(paths, key):
        return sum(st[p][key] for p in paths)

    print("1. Totals")
    for label, paths in (("all files", set(st)), ("hand-written", hand), ("generated", gen)):
        print(f"   {label:>12}: {len(paths):>3} files, {tot(paths, 'mutants'):>8,} mutants, "
              + ", ".join(f"{k} {tot(paths, k):,}" for k in kinds))
    print("   generated files' share: " + ", ".join(
        f"{k} {100 * tot(gen, k) / max(1, total[k]):.1f}%" for k in kinds))

    def share(p, k):
        return f"{st[p][k]:>7,} ({100 * st[p][k] / max(1, total[k]):4.1f}%)"

    def show(title, paths):
        print(f"\n{title}")
        print(f"   {'file':40} {'mutants':>8} " + " ".join(f"{k:>16}" for k in kinds))
        for p in paths:
            print(f"   {name(p)[:40]:40} {st[p]['mutants']:>8,} " + " ".join(share(p, k) for k in kinds))
        print("   (percentages: the file's share of all mutants of that kind)")

    tops = {}
    tops["unreached"] = sorted(hand, key=lambda p: -st[p]["unreached"])[:args.top]
    for k in ("evaluated", "killed", "survived"):
        tops[k] = sorted(st, key=lambda p: -st[p][k])[:args.top]
    show(f"2. Top {args.top} hand-written files by unreached mutants", tops["unreached"])
    show(f"3. Top {args.top} files by evaluated (least-reached) mutants", tops["evaluated"])
    show(f"4. Top {args.top} files by killed mutants", tops["killed"])
    show(f"5. Top {args.top} files by surviving mutants", tops["survived"])

    print("\n6. How the lists compare")
    for k in kinds:
        pool = hand if k == "unreached" else set(st)
        n_files = sum(1 for p in pool if st[p][k])
        held = 100 * sum(st[p][k] for p in tops[k]) / max(1, sum(st[p][k] for p in pool))
        print(f"   {k:>9}: in {n_files:>3} files; the top {args.top} hold {held:5.1f}%"
              + (" (hand-written files only)" if k == "unreached" else ""))
    for a_, b_ in (("killed", "survived"), ("unreached", "survived"), ("unreached", "evaluated")):
        common = set(tops[a_]) & set(tops[b_])
        print(f"   top-{args.top} {a_} and {b_} lists share {len(common)} file(s)"
              + (f": {', '.join(name(p) for p in sorted(common))}" if common else ""))


    if not args.functions:
        return
    # ---- 7. per function ----
    franges = []
    with open(args.functions) as f:
        for r in csv.DictReader(line for line in f if not line.startswith("#")):
            franges.append((int(r["first_id"]), int(r["mutants"]), r["path"], r["function"]))
    franges.sort()
    fstarts = [x[0] for x in franges]

    def func_of(m):
        i = bisect.bisect_right(fstarts, m) - 1
        return (franges[i][2], franges[i][3]) if i >= 0 and m < franges[i][0] + franges[i][1] else None

    fst = {(p_, fn): collections.Counter(mutants=n) for _, n, p_, fn in franges}
    for m in reached:
        k = func_of(m)
        if k:
            fst[k]["reached"] += 1
    for m, o in out.items():
        k = func_of(m)
        if k:
            fst[k]["evaluated"] += 1
            fst[k][o] += 1
    for c in fst.values():
        c["unreached"] = c["mutants"] - c["reached"]
    ftotal = {k: sum(c[k] for c in fst.values()) for k in kinds}

    def fshow(title, keys):
        print(f"\n{title}")
        print(f"   {'function':52} {'mutants':>8} " + " ".join(f"{k:>16}" for k in kinds))
        for key in keys:
            c = fst[key]
            label = f"{key[1]} ({os.path.basename(key[0])})"
            print(f"   {label[:52]:52} {c['mutants']:>8,} " + " ".join(
                f"{c[k]:>7,} ({100 * c[k] / max(1, ftotal[k]):4.1f}%)" for k in kinds))

    n_with = sum(1 for c in fst.values() if c["survived"])
    top_f = sorted(fst, key=lambda k: -fst[k]["survived"])[:args.top]
    held = 100 * sum(fst[k]["survived"] for k in top_f) / max(1, ftotal["survived"])
    print(f"\n7. Functions: surviving mutants are in {n_with:,} of {len(fst):,} functions; "
          f"the top {args.top} hold {held:.1f}%")
    fshow(f"   Top {args.top} functions by surviving mutants", top_f)
    for path in sorted(st, key=lambda p_: -st[p_]["survived"])[:args.detail_files]:
        keys = sorted((k for k in fst if k[0] == path), key=lambda k: -fst[k]["survived"])[:args.top]
        n_f = sum(1 for k in fst if k[0] == path and fst[k]["survived"])
        fshow(f"   {name(path)}: survivors in {n_f} function(s); top {len(keys)}", keys)


if __name__ == "__main__":
    main()