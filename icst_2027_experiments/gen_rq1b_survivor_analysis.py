#!/usr/bin/env python3
"""RQ1(b): where the unreached and the surviving mutants are, for the paper.

Inputs
  ranges       mutant_file_ranges.csv      (gen_setup_generated.py --ranges-out)
  --functions  mutant_function_ranges.csv  (analysis/map_mutants_to_functions.py)
  --isolated   the isolated repeats' *_per_mutant.csv (mutant_id,n_tests)
  --runs       survival run folders containing results.jsonl

Evaluated / killed / survived use the survival table's set: mutants evaluated by
every run with the same outcome in every run. Unreached: reached by no test in
any isolated repeat.

Outputs, in --out-dir
  rq1b_unreached_files.tex      the --top-files files with the most unreached
                                mutants (generated ones marked "(gen)"), each
                                followed by its --top-functions functions with
                                the most unreached mutants; columns: mutants,
                                unreached, and % of the row's mutants unreached
  rq1b_survived_files.tex       full width (table*): the --top-files files with
                                the most surviving mutants, each followed by its
                                --top-functions functions with the most survivors;
                                columns: mutants, unreached, evaluated, killed,
                                survived
  rq1b_survivors_macros.tex     macros:
    \\SurvFuncsWithSurvivors, \\SurvFuncsTotal     functions holding survivors, of all
    \\SurvTopFuncsN, \\SurvTopFuncsPct            the table's functions' share of survivors
    \\SurvFilesWithSurvivors                      files holding survivors
    \\SurvGenSurvivedPct, \\UnreachedGenPct        share held by the generated files
    \\UnreachedWholeFiles                         hand-written files with every mutant unreached
    \\UnreachedWholeFilesMutants, ...Pct          their mutants, and share of the
                                                 hand-written unreached mutants

Usage:
  python3 icst_2027_experiments/gen_rq1b_survivors.py \\
      icst_2027_experiments/generated/mutant_file_ranges.csv \\
      --functions icst_2027_experiments/generated/mutant_function_ranges.csv \\
      --isolated results/reachability/processed/isolated/run-*/mutant_to_tests_isolated-no-cache_per_mutant.csv \\
      --runs results/cts-survival/twenty-four-hours/run*_24h \\
      --out-dir icst_2027_experiments/generated
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


def read_ranges(path, with_function):
    rows = []
    with open(path) as f:
        for r in csv.DictReader(line for line in f if not line.startswith("#")):
            key = (r["path"], r["function"]) if with_function else r["path"]
            rows.append((int(r["first_id"]), int(r["mutants"]), key))
    rows.sort()
    return rows


def lookup(rows):
    starts = [r[0] for r in rows]

    def find(m):
        i = bisect.bisect_right(starts, m) - 1
        return rows[i][2] if i >= 0 and m < rows[i][0] + rows[i][1] else None
    return find


def fmt_int(n):
    return f"{n:,}".replace(",", "{,}")


def tt(name):
    return "\\texttt{" + name.replace("_", "\\_") + "}"


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("ranges", type=Path)
    ap.add_argument("--functions", type=Path, required=True)
    ap.add_argument("--isolated", nargs="+", required=True)
    ap.add_argument("--runs", nargs="+", type=Path, required=True)
    ap.add_argument("--top", type=int, default=8,
                    help="functions counted for \\SurvTopFuncsPct (share of survivors in the top functions)")
    ap.add_argument("--top-files", type=int, default=5, help="files in each of the tables")
    ap.add_argument("--top-functions", type=int, default=3,
                    help="functions listed under each file in both tables")
    ap.add_argument("--out-dir", type=Path, required=True)
    args = ap.parse_args()

    files = read_ranges(args.ranges, False)
    funcs = read_ranges(args.functions, True)
    file_of, func_of = lookup(files), lookup(funcs)

    reached = set()
    for p in args.isolated:
        with open(p, newline="") as f:
            reached.update(int(r["mutant_id"]) for r in csv.DictReader(f) if int(r["n_tests"]) > 0)

    per = collections.defaultdict(list)
    for d in sorted(args.runs):
        for line in open(d / "results.jsonl"):
            if line.strip():
                r = json.loads(line)
                per[r["mutant_id"]].append(outcome(r))
    out = {m: o[0] for m, o in per.items()
           if len(o) == len(args.runs) and len(set(o)) == 1 and o[0] != "other"}

    fst = {k: collections.Counter(mutants=n) for _, n, k in files}
    gst = {k: collections.Counter(mutants=n) for _, n, k in funcs}
    for m in reached:
        fst[file_of(m)]["reached"] += 1
        k = func_of(m)
        if k is not None:
            gst[k]["reached"] += 1
    for m, o in out.items():
        fst[file_of(m)][o] += 1
        fst[file_of(m)]["evaluated"] += 1
        k = func_of(m)
        if k is None:
            raise SystemExit(f"mutant {m} is in no function range -- regenerate mutant_function_ranges.csv")
        gst[k]["evaluated"] += 1
        gst[k][o] += 1
    for c in list(fst.values()) + list(gst.values()):
        c["unreached"] = c["mutants"] - c["reached"]

    survived = sum(c["survived"] for c in fst.values())
    unreached = sum(c["unreached"] for c in fst.values())
    gen = [p for p in fst if p.startswith("build/")]
    hand = [p for p in fst if p not in gen]
    whole = [p for p in hand if fst[p]["unreached"] == fst[p]["mutants"]]
    hand_unreached = sum(fst[p]["unreached"] for p in hand)
    whole_m = sum(fst[p]["mutants"] for p in whole)

    top = sorted(gst, key=lambda k: -gst[k]["survived"])[:args.top]
    top_share = 100 * sum(gst[k]["survived"] for k in top) / max(1, survived)
    with_surv = sum(1 for c in gst.values() if c["survived"])
    files_with = sum(1 for c in fst.values() if c["survived"])

    print(f"survivors: {survived:,} in {with_surv} of {len(gst):,} functions ({files_with} files); "
          f"top {args.top} functions hold {top_share:.1f}%")
    for k in top:
        c = gst[k]
        print(f"   {k[1]:36} {os.path.basename(k[0]):34} evaluated {c['evaluated']:>5,} "
              f"killed {c['killed']:>5,} survived {c['survived']:>5,}")
    print(f"unreached: {unreached:,}; generated files hold {100 * sum(fst[p]['unreached'] for p in gen) / unreached:.1f}%; "
          f"{len(whole)} hand-written files are entirely unreached ({whole_m:,} mutants, "
          f"{100 * whole_m / max(1, hand_unreached):.1f}% of hand-written unreached)")

    # Three small tables, counts only. File names get " (gen)" if generated.
    def fname(p):
        return tt(os.path.basename(p)) + (" (gen)" if p in gen else "")

    def header(cols):
        return ["% Generated by gen_rq1b_survivors.py -- do not edit by hand.",
                "\\begin{tabular}{l" + "r" * (len(cols) - 1) + "}", "\\toprule",
                " & ".join(cols) + " \\\\", "\\midrule"]

    footer = ["\\bottomrule", "\\end{tabular}"]

    # 1. Where are the unreached mutants? The files with the most, each followed
    #    by its --top-functions functions with the most unreached mutants.
    #    % = share of that row's own mutants that are unreached.
    def urow(label, c):
        return (f"{label} & {fmt_int(c['mutants'])} & {fmt_int(c['unreached'])} & "
                f"{100 * c['unreached'] / max(1, c['mutants']):.0f} \\\\")

    t_unreached = header(["File / function", "Mutants", "Unreached", "\\%"])
    for i, p in enumerate(sorted(fst, key=lambda p_: -fst[p_]["unreached"])[:args.top_files]):
        if i:
            t_unreached.append("\\addlinespace")
        t_unreached.append(urow(fname(p), fst[p]))
        for k in sorted((k for k in gst if k[0] == p), key=lambda k: -gst[k]["unreached"])[:args.top_functions]:
            if gst[k]["unreached"]:
                t_unreached.append(urow(f"\\quad {tt(k[1])}", gst[k]))
    t_unreached += footer

    # 2. Where are the mutants the CTS reaches but does not kill? The files with
    #    the most survivors, each followed by its --top-functions functions with
    #    the most survivors (a function row identical to its file row is skipped).
    keys = ("mutants", "unreached", "evaluated", "killed", "survived")

    def srow(label, c):
        return f"{label} & " + " & ".join(fmt_int(c[k]) for k in keys) + " \\\\"

    t_survived = header(["File / function", "Mutants", "Unreached", "Evaluated", "Killed", "Survived"])
    for i, p in enumerate(sorted(fst, key=lambda p_: -fst[p_]["survived"])[:args.top_files]):
        if i:
            t_survived.append("\\addlinespace")
        t_survived.append(srow(fname(p), fst[p]))
        for k in sorted((k for k in gst if k[0] == p), key=lambda k: -gst[k]["survived"])[:args.top_functions]:
            same = all(gst[k][x] == fst[p][x] for x in ("evaluated", "killed", "survived"))
            if gst[k]["survived"] and not same:
                t_survived.append(srow(f"\\quad {tt(k[1])}", gst[k]))
    t_survived += footer

    tables = {"rq1b_unreached_files.tex": t_unreached,
              "rq1b_survived_files.tex": t_survived}

    macros = ["% Generated by gen_rq1b_survivors.py -- do not edit by hand.",
              f"\\newcommand{{\\SurvFuncsWithSurvivors}}{{{fmt_int(with_surv)}}}",
              f"\\newcommand{{\\SurvFuncsTotal}}{{{fmt_int(len(gst))}}}",
              f"\\newcommand{{\\SurvFilesWithSurvivors}}{{{files_with}}}",
              f"\\newcommand{{\\SurvTopFuncsN}}{{{args.top}}}",
              f"\\newcommand{{\\SurvTopFuncsPct}}{{{top_share:.1f}\\%}}",
              f"\\newcommand{{\\SurvGenSurvivedPct}}{{{100 * sum(fst[p]['survived'] for p in gen) / max(1, survived):.1f}\\%}}",
              f"\\newcommand{{\\UnreachedGenPct}}{{{100 * sum(fst[p]['unreached'] for p in gen) / max(1, unreached):.1f}\\%}}",
              f"\\newcommand{{\\UnreachedWholeFiles}}{{{len(whole)}}}",
              f"\\newcommand{{\\UnreachedWholeFilesMutants}}{{{fmt_int(whole_m)}}}",
              f"\\newcommand{{\\UnreachedWholeFilesPct}}{{{100 * whole_m / max(1, hand_unreached):.1f}\\%}}"]

    args.out_dir.mkdir(parents=True, exist_ok=True)
    for name, lines in tables.items():
        (args.out_dir / name).write_text("\n".join(lines) + "\n")
    (args.out_dir / "rq1b_survivors_macros.tex").write_text("\n".join(macros) + "\n")
    print(f"wrote {', '.join(tables)} and rq1b_survivors_macros.tex to {args.out_dir}")


if __name__ == "__main__":
    main()