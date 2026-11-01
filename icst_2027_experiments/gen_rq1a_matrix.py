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
  Bands of isolated reach as a share of N, the number of tests (--tests: the matrix's
  column index), each boundary at a share of N (BANDS below):
    \\MatTestsN, \\MatMaxNotEvery, \\MatMaxNotEveryPct   largest isolated count below N
    \\MatBand<B>Mutants, ...Pct (of reached), ...MinTests, ...MaxTests
    \\MatSh<Cfg>PctUnder<B>, \\MatSh<Cfg>Under<B>   % and number of the band undercounted
                              (misses a test every isolated repeat found, or the whole
                              mutant), min--max over runs; ...Mean: the mean over runs,
                              rounded as in the table (whole %)
    \\MatReach{Iso,Sub,File}<B>, ...NotReached   mutants in each band by that mode's own
                              count (mean over runs); \\MatMutantsTotal
    \\MatSh<Cfg>Sel<B>[Mean]   selecting by SHARED count: mutants whose shared count is below
                              band B's upper boundary (VeryRare <0.1% of N, Rare <1%,
                              Moderate <25%, Broad <50%)
      ...Under[Mean], ...UnderPct[Mean]   of those, undercounted (number, % of selected)
      ...IsoAbove[Mean]       of those, reached by at least that many tests in isolation
    B = VeryRare (<0.1% of N), Rare (0.1--1%), Moderate (1--25%), Broad (25--50%), Every (= N)
  and two tables (rows: the bands plus the 50%-to-<N range):
    --reach-table-out       mutants per band, isolated | subtree | file subtrees, each by its
                            own counts, plus not reached; counts only
    --selection-table-out   per band of SHARED reach (subtree): selected (count); undercounted
                            (count, % of selected, and how many reached by every test in
                            isolation); macros \\MatSh<Cfg>Row<B>{Selected,SelectedPct,Under,
                            UnderPct,IsoMedian,IsoMax,Every}[Mean] for both configurations
    --undercount-table-out  per band of isolated reach: mutants, and the number and % (no
                            decimals) undercounted under subtree | file subtrees
"""
import argparse
import csv
import gzip
import os
import statistics
import sys

CHEAP = 100
# (name, label in the table, lower share of N (inclusive), upper share (exclusive)); "Every" is |U| = N
BANDS = [("VeryRare", "$<$0.1\\%", 0.0, 0.001), ("Rare", "0.1--1\\%", 0.001, 0.01),
         ("Moderate", "1--25\\%", 0.01, 0.25), ("Broad", "25--50\\%", 0.25, 0.5),
         (None, "50\\%--$<$100\\%", 0.5, 1.0), ("Every", "100\\% (every test)", None, None)]


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


def total_mutants(ranges_csv):
    """All mutants: the sum of the per-file counts in mutant_file_ranges.csv."""
    with open(ranges_csv) as f:
        return sum(int(r["mutants"]) for r in csv.DictReader(l for l in f if not l.startswith("#")))


def whole_pct(p):
    """A percentage with no decimals, never rounded to 0 or 100 unless it is exactly that."""
    if 0 < p < 0.5:
        return "$<$1"
    if 99.5 <= p < 100:
        return "$>$99"
    return f"{round(p)}"


def write_table(path, lines):
    os.makedirs(os.path.dirname(os.path.abspath(path)), exist_ok=True)
    with open(path, "w") as f:
        f.write("\n".join(lines) + "\n")
    print("\n".join(l for l in lines if not l.startswith("%")))
    print(f"wrote {path}\n")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--per-mutant", default="results/reachability/matrix/compare_per_mutant.csv.gz")
    ap.add_argument("--out", default="icst_2027_experiments/generated/rq1a_matrix_macros.tex")
    ap.add_argument("--tests", default="results/reachability/matrix/tests.txt",
                    help="the matrices' column index: its length is N, the number of tests")
    ap.add_argument("--ranges", default="icst_2027_experiments/generated/mutant_file_ranges.csv",
                    help="mutant_file_ranges.csv, for the total number of mutants")
    ap.add_argument("--reach-table-out", default="icst_2027_experiments/generated/rq1a_reach_bands.tex")
    ap.add_argument("--undercount-table-out", default="icst_2027_experiments/generated/rq1a_undercount_bands.tex")
    ap.add_argument("--selection-table-out", default="icst_2027_experiments/generated/rq1a_selection_bands.tex")
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

    # ---- bands of isolated reach, as shares of N
    with open(args.tests) as f:
        N = sum(1 for line in f if line.strip())
    max_not_every = max(r["n_union"] for r in reached if r["n_union"] < N)
    m["MatTestsN"] = fmt_int(N)
    m["MatMaxNotEvery"] = fmt_int(max_not_every)
    m["MatMaxNotEveryPct"] = f"{pct(max_not_every, N):.1f}\\%"
    cfgs = [c for c in ("Sub", "File") if runs[c]]
    heads = {"Sub": "Subtree", "File": "File subtrees"}
    total = total_mutants(args.ranges)

    def in_band(u, lo, hi):
        return u == N if lo is None else (u > 0 and lo * N <= u < hi * N)

    def cell(count, base):
        return f"{fmt_int(round(count))} ({pct(count, base):.1f}\\%)"

    # ---- table 1: mutants per band of reach, isolated and each shared configuration;
    # each column bands mutants by their own count in that mode; mean over runs; % of all mutants
    modes = [("Isolated", [c for c in iso_cols])] + [(heads[c], [run + "_n" for run in runs[c]]) for c in cfgs]
    t1 = []
    for name, text, lo, hi in BANDS:
        cells = []
        for mode, cols_ in modes:
            mean = statistics.mean(sum(1 for r in reached if in_band(r[c], lo, hi)) for c in cols_)
            cells.append(fmt_int(round(mean)) if mean else "--")
            if name:
                tag = "Iso" if mode == "Isolated" else ("Sub" if mode == "Subtree" else "File")
                m[f"MatReach{tag}{name}"] = fmt_int(round(mean))
        t1.append(f"{text} & " + " & ".join(cells) + " \\\\")
    cells = []
    for mode, cols_ in modes:
        reached_mean = statistics.mean(sum(1 for r in reached if r[c] > 0) for c in cols_)
        cells.append(fmt_int(round(total - reached_mean)))
        tag = "Iso" if mode == "Isolated" else ("Sub" if mode == "Subtree" else "File")
        m[f"MatReach{tag}NotReached"] = fmt_int(round(total - reached_mean))
    t1 += ["\\midrule", "Not reached & " + " & ".join(cells) + " \\\\"]
    m["MatMutantsTotal"] = fmt_int(total)
    write_table(args.reach_table_out, [
        "% Generated by gen_rq1a_matrix.py -- do not edit by hand.",
        f"% Mutants by number of reaching tests as a share of N = {N:,} tests, each column by its own",
        f"% counts; mean over the runs of each mode; {total:,} mutants in all.",
        "\\setlength{\\tabcolsep}{4pt}",
        "\\begin{tabular}{l" + "r" * len(modes) + "}",
        "\\toprule",
        "Reaching tests & \\multicolumn{" + str(len(modes)) + "}{c}{Mutants} \\\\",
        f"\\cmidrule(lr){{2-{1 + len(modes)}}}",
        "(\\% of tests) & " + " & ".join(md for md, _ in modes) + " \\\\",
        "\\midrule"] + t1 + ["\\bottomrule", "\\end{tabular}"])

    # ---- table 2: undercounting, by band of isolated reach (union over repeats)
    t2 = []
    for name, text, lo, hi in BANDS:
        band = [r for r in reached if in_band(r["n_union"], lo, hi)]
        if not band:
            t2.append(f"{text} & -- & " + " & ".join("--" for _ in range(2 * len(cfgs))) + " \\\\")
            if name:
                print(f"note: band {name} is empty")
            continue
        us = [r["n_union"] for r in band]
        cells = []
        for cfg in cfgs:
            per_run = [sum(1 for r in band if r[run + "_missing"] > 0 or r[run + "_n"] == 0) for run in runs[cfg]]
            mean = statistics.mean(per_run)
            cells += [fmt_int(round(mean)), whole_pct(pct(mean, len(band)))]
            if name:
                m[f"MatSh{cfg}PctUnder{name}"] = rng_pct([pct(k, len(band)) for k in per_run])
                m[f"MatSh{cfg}Under{name}"] = rng_int(per_run)
                # means, rounded exactly as in the table, for text that should match it
                m[f"MatSh{cfg}PctUnder{name}Mean"] = whole_pct(pct(mean, len(band))) + "\\%"
                m[f"MatSh{cfg}Under{name}Mean"] = fmt_int(round(mean))
        t2.append(f"{text} & {fmt_int(len(band))} & " + " & ".join(cells) + " \\\\")
        if name:
            b = f"MatBand{name}"
            m[b + "Mutants"] = fmt_int(len(band))
            m[b + "Pct"] = f"{pct(len(band), len(reached)):.1f}\\%"
            m[b + "MinTests"] = fmt_int(min(us))
            m[b + "MaxTests"] = fmt_int(max(us))
    # ---- selecting cheap mutants by their SHARED count: all mutants whose shared count is below
    # a band's upper boundary (e.g. <0.1% of N); how many of them are undercounted, and how many
    # are really above that boundary under isolated execution. Mean (as in the tables) and range.
    for name, _, lo, hi in BANDS:
        if not name or lo is None:
            continue
        cut = hi * N
        for cfg in cfgs:
            sel_n, sel_under, sel_above = [], [], []
            for run in runs[cfg]:
                sel = [r for r in reached if 0 < r[run + "_n"] < cut]
                sel_n.append(len(sel))
                sel_under.append(sum(1 for r in sel if r[run + "_missing"] > 0))
                sel_above.append(sum(1 for r in sel if r["n_union"] >= cut))
            p_ = f"MatSh{cfg}Sel{name}"
            m[p_] = rng_int(sel_n)
            m[p_ + "Mean"] = fmt_int(round(statistics.mean(sel_n)))
            m[p_ + "Under"] = rng_int(sel_under)
            m[p_ + "UnderMean"] = fmt_int(round(statistics.mean(sel_under)))
            m[p_ + "UnderPct"] = rng_pct([pct(u, n) for u, n in zip(sel_under, sel_n)])
            m[p_ + "UnderPctMean"] = whole_pct(statistics.mean(pct(u, n) for u, n in zip(sel_under, sel_n))) + "\\%"
            m[p_ + "IsoAbove"] = rng_int(sel_above)
            m[p_ + "IsoAboveMean"] = fmt_int(round(statistics.mean(sel_above)))
            print(f"  select by {cfg} count < {cut:,.1f} ({name}): {statistics.mean(sel_n):,.0f} mutants, "
                  f"{statistics.mean(sel_under):,.0f} undercounted, {statistics.mean(sel_above):,.0f} at or above "
                  f"that in isolation")

    # ---- table 3: mutants grouped by their SHARED reach band (per run), and their reach in isolation.
    # Cells: means over the configuration's runs; macros: mean and range, for every configuration.
    t3 = []
    for name, text, lo, hi in BANDS:
        if lo is None or not name:          # shared counts never reach N; 50%--<100% has no name
            continue
        stats = {}
        for cfg in cfgs:
            acc = {k: [] for k in ("sel", "sel_pct", "under", "under_pct", "med", "max", "every")}
            for run in runs[cfg]:
                got = [r for r in reached if r[run + "_n"] > 0]
                sel = [r for r in got if lo * N <= r[run + "_n"] < hi * N]
                if not sel:
                    continue
                under = sum(1 for r in sel if r[run + "_missing"] > 0)
                acc["sel"].append(len(sel))
                acc["sel_pct"].append(pct(len(sel), len(got)))
                acc["under"].append(under)
                acc["under_pct"].append(pct(under, len(sel)))
                us = [r["n_union"] for r in sel]
                acc["med"].append(statistics.median(us))
                acc["max"].append(max(us))
                acc["every"].append(sum(1 for u in us if u == N))
            stats[cfg] = acc
            if acc["sel"]:
                p_ = f"MatSh{cfg}Row{name}"
                for key, mac, kind in (("sel", "Selected", "int"), ("sel_pct", "SelectedPct", "pct"),
                                       ("under", "Under", "int"), ("under_pct", "UnderPct", "pct"),
                                       ("med", "IsoMedian", "int"), ("max", "IsoMax", "int"),
                                       ("every", "Every", "int")):
                    v = acc[key]
                    if kind == "int":
                        m[p_ + mac] = rng_int([round(x) for x in v])
                        m[p_ + mac + "Mean"] = fmt_int(round(statistics.mean(v)))
                    else:
                        m[p_ + mac] = rng_pct(v)
                        m[p_ + mac + "Mean"] = whole_pct(statistics.mean(v)) + "\\%"
        acc = stats.get(cfgs[0], {})
        if not acc or not acc["sel"]:
            continue                         # leave out bands empty under shared execution
        t3.append(f"{text} & {fmt_int(round(statistics.mean(acc['sel'])))} & "
                  f"{fmt_int(round(statistics.mean(acc['under'])))} & "
                  f"{whole_pct(statistics.mean(acc['under_pct']))} & "
                  f"{fmt_int(round(statistics.mean(acc['every'])))} \\\\")
    write_table(args.selection_table_out, [
        "% Generated by gen_rq1a_matrix.py -- do not edit by hand.",
        f"% Rows: bands of SHARED reach ({heads[cfgs[0]]}) as shares of N = {N:,} tests, per run; isolated reach:",
        "% union over the isolated repeats; undercounted: misses a test every isolated repeat found;",
        "% means over the runs (ranges in the \\MatSh<Cfg>Row<Band>... macros).",
        "\\setlength{\\tabcolsep}{4pt}",
        "% Columns: selected (count); undercounted (count, % of selected, and how many of them are",
        "% reached by every test in isolation).",
        "\\begin{tabular}{lrrrr}",
        "\\toprule",
        "Shared reach & & \\multicolumn{3}{c}{Undercounted} \\\\",
        "\\cmidrule(lr){3-5}",
        "(\\% of tests) & Selected & Count & \\% & "
        "\\begin{tabular}[b]{@{}c@{}}Reached by every\\\\test in isolation\\end{tabular} \\\\",
        "\\midrule"] + t3 + ["\\bottomrule", "\\end{tabular}"])

    write_table(args.undercount_table_out, [
        "% Generated by gen_rq1a_matrix.py -- do not edit by hand.",
        f"% Bands of isolated reach (union over repeats) as a share of N = {N:,} tests; undercounted:",
        "% the shared run misses a test every isolated repeat found; mean over each configuration's runs.",
        "\\setlength{\\tabcolsep}{4pt}",
        "\\begin{tabular}{lr" + "rr" * len(cfgs) + "}",
        "\\toprule",
        "Isolated reach & & \\multicolumn{" + str(2 * len(cfgs)) + "}{c}{Undercounted} \\\\",
        f"\\cmidrule(lr){{3-{2 + 2 * len(cfgs)}}}",
        " & & " + " & ".join("\\multicolumn{2}{c}{" + heads[c] + "}" for c in cfgs) + " \\\\",
        "".join(f"\\cmidrule(lr){{{3 + 2 * k}-{4 + 2 * k}}}" for k in range(len(cfgs))),
        "(\\% of tests) & Mutants & " + " & ".join("Count & \\%" for _ in cfgs) + " \\\\",
        "\\midrule"] + t2 + ["\\bottomrule", "\\end{tabular}"])

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