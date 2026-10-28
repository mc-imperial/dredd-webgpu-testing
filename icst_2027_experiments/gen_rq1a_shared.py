#!/usr/bin/env python3
"""RQ1(a): reachability under shared execution compared with the isolated reference.

Inputs
  shared_root  processed shared runs: <run>/<configuration>/{per_mutant.csv,
               mapping_lists.json, summary.txt} (from process_shared_tracking.py)
  --isolated   the isolated repeats' *_per_mutant.csv files (mutant_id,n_tests)
  --mapping    the merged isolated <=100-test mapping JSON {mutant: [tests]}

A mutant's isolated count is its maximum over the isolated repeats. Every value
below is computed per shared repeat and reported as the mean across repeats; the
console shows the range across repeats for each.

Outputs, in --out-dir
  rq1a_shared_overall.tex   Table A. Rows: mutants grouped by isolated reaching
                            tests (their true cost). Columns: mutants; mean reaching
                            tests isolated / per shared configuration; % reached by
                            fewer tests under each shared configuration.
  rq1a_shared_cheap.tex     Table B. Per shared configuration, rows: mutants
                            reached by <= X tests under shared execution. Columns:
                            mutants; mean reaching tests shared / isolated; % reached
                            by more tests in isolation; % reached by every test.
  rq1a_shared_macros.tex    macros for the text
"""
import argparse
import csv
import glob
import json
import os
import statistics
import sys

CONFIGS = [("subtree-no-cache", "Sub", "Shader subtree"),
           ("file-subtrees-no-cache", "File", "File subtrees")]
CHEAP = [(10, "Ten"), (100, "Hundred"), (500, "FiveHundred"), (1000, "Thousand")]


def fmt_int(x):
    return f"{round(x):,}".replace(",", "{,}")


def fmt_pct(x):
    return f"{x:.1f}"


def read_counts(path):
    with open(path, newline="") as f:
        return {int(r["mutant_id"]): int(r["n_tests"]) for r in csv.DictReader(f) if int(r["n_tests"]) > 0}


def mean0(xs):
    xs = list(xs)
    return statistics.mean(xs) if xs else 0.0


def across(values, label):
    """Mean across repeats; report the spread on the console."""
    lo, hi = min(values), max(values)
    if hi - lo > 1e-9:
        print(f"      {label}: {lo:,.1f} .. {hi:,.1f} across repeats")
    return statistics.mean(values)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("shared_root")
    ap.add_argument("--isolated", nargs="+", required=True)
    ap.add_argument("--mapping", required=True)
    ap.add_argument("--out-dir", required=True)
    args = ap.parse_args()

    iso = {}
    for p in args.isolated:
        for m, n in read_counts(p).items():
            iso[m] = max(iso.get(m, 0), n)
    n_all = max(iso.values())
    mapping = {int(m): set(t) for m, t in json.load(open(args.mapping)).items()}
    print(f"isolated: {len(args.isolated)} repeats, {len(iso):,} mutants reached, every test = {n_all:,}")

    bands = [("1", 1, 1), ("2--10", 2, 10), ("11--100", 11, 100), ("101--1{,}000", 101, 1000),
             ("1{,}001--10{,}000", 1001, 10000), (f"10{{,}}001--{fmt_int(n_all - 1)}", 10001, n_all - 1),
             (f"every test ({fmt_int(n_all)})", n_all, n_all)]
    band_members = [[m for m, n in iso.items() if lo <= n <= hi] for _, lo, hi in bands]

    shared = {}
    for cfg, _, _ in CONFIGS:
        dirs = sorted(glob.glob(os.path.join(args.shared_root, "*", cfg)))
        if not dirs:
            sys.exit(f"no {cfg} runs under {args.shared_root}")
        shared[cfg] = [(read_counts(os.path.join(d, "per_mutant.csv")),
                        {int(m): set(t) for m, t in json.load(open(os.path.join(d, "mapping_lists.json"))).items()})
                       for d in dirs]
        print(f"{cfg}: {len(dirs)} repeats")

    # ---- Table A: by isolated band ----
    print("\nTable A (spread across repeats where it varies):")
    A = {}  # (band index or 'all', cfg) -> (mean shared, pct fewer)
    for i, members in enumerate(band_members + [list(iso)]):
        for cfg, _, _ in CONFIGS:
            ms = [mean0(sh.get(m, 0) for m in members) for sh, _ in shared[cfg]]
            fe = [100.0 * sum(1 for m in members if sh.get(m, 0) < iso[m]) / max(1, len(members))
                  for sh, _ in shared[cfg]]
            tag = bands[i][0] if i < len(bands) else "all"
            A[(i, cfg)] = (across(ms, f"{cfg} {tag} mean"), across(fe, f"{cfg} {tag} % fewer"))

    rows = []
    for i, (label, _, _) in enumerate(bands + [("All reached mutants", 0, 0)]):
        members = band_members[i] if i < len(bands) else list(iso)
        if not members:
            continue
        iso_mean = mean0(iso[m] for m in members)
        cells = [fmt_int(len(members)), fmt_int(iso_mean)]
        for cfg, _, _ in CONFIGS:
            mean_sh, pct = A[(i, cfg)]
            cells += [fmt_int(mean_sh), fmt_pct(pct)]
        if i == len(bands):
            rows.append("\\midrule")
        rows.append(f"{label} & " + " & ".join(cells) + " \\\\")
    ta = ["% Generated by gen_rq1a_shared.py -- do not edit by hand.",
          "\\setlength{\\tabcolsep}{4pt}",
          "\\begin{tabular}{lrrrrrr}",
          "\\toprule",
          " & & & \\multicolumn{2}{c}{Shader subtree} & \\multicolumn{2}{c}{File subtrees} \\\\",
          "\\cmidrule(lr){4-5}\\cmidrule(lr){6-7}",
          "Isolated reaching tests & Mutants & Mean & Mean & \\% fewer & Mean & \\% fewer \\\\",
          "\\midrule", *rows, "\\bottomrule", "\\end{tabular}"]

    # ---- Table B: cheap-looking under shared ----
    print("\nTable B (spread across repeats where it varies):")
    B = {}
    for cfg, _, _ in CONFIGS:
        for x, name in CHEAP:
            n, msh, miso, more, every, every_n = [], [], [], [], [], []
            for sh, _ in shared[cfg]:
                look = [m for m, c in sh.items() if c <= x]
                n.append(len(look))
                msh.append(mean0(sh[m] for m in look))
                miso.append(mean0(iso.get(m, 0) for m in look))
                more.append(100.0 * sum(1 for m in look if iso.get(m, 0) > sh[m]) / max(1, len(look)))
                e = sum(1 for m in look if iso.get(m, 0) == n_all)
                every_n.append(e)
                every.append(100.0 * e / max(1, len(look)))
            B[(cfg, x)] = [across(v, f"{cfg} <= {x} {k}") for v, k in
                           [(n, "mutants"), (msh, "mean shared"), (miso, "mean isolated"),
                            (more, "% more"), (every, "% every"), (every_n, "every count")]]
    tb = ["% Generated by gen_rq1a_shared.py -- do not edit by hand.",
          "\\setlength{\\tabcolsep}{4pt}",
          "\\begin{tabular}{lrrrrr}",
          "\\toprule",
          " & & \\multicolumn{2}{c}{Mean reaching tests} & \\multicolumn{2}{c}{\\% reached in isolation by} \\\\",
          "\\cmidrule(lr){3-4}\\cmidrule(lr){5-6}",
          "Shared reaching tests & Mutants & Shared & Isolated & more tests & every test \\\\"]
    for cfg, _, title in CONFIGS:
        tb += ["\\midrule", f"\\multicolumn{{6}}{{l}}{{\\emph{{{title}}}}} \\\\"]
        for x, _ in CHEAP:
            n, msh, miso, more, every, _e = B[(cfg, x)]
            tb.append(f"\\quad $\\leq${fmt_int(x)} & {fmt_int(n)} & {fmt_int(msh)} & {fmt_int(miso)} & "
                      f"{fmt_pct(more)} & {fmt_pct(every)} \\\\")
    tb += ["\\bottomrule", "\\end{tabular}"]

    # ---- macros ----
    mac = ["% Generated by gen_rq1a_shared.py -- do not edit by hand.",
           f"\\newcommand{{\\ShEveryTest}}{{{fmt_int(n_all)}}}"]
    for cfg, tag, _ in CONFIGS:
        mac.append(f"\\newcommand{{\\Sh{tag}Repeats}}{{{len(shared[cfg])}}}")
        mac.append(f"\\newcommand{{\\Sh{tag}PctFewerAll}}{{{fmt_pct(A[(len(bands), cfg)][1])}\\%}}")
        mac.append(f"\\newcommand{{\\Sh{tag}EveryMean}}{{{fmt_int(A[(len(bands) - 1, cfg)][0])}}}")
        for x, name in CHEAP:
            n, msh, miso, more, every, every_n = B[(cfg, x)]
            p = f"\\Sh{tag}UpTo{name}"
            mac += [f"\\newcommand{{{p}Mutants}}{{{fmt_int(n)}}}",
                    f"\\newcommand{{{p}MeanShared}}{{{fmt_int(msh)}}}",
                    f"\\newcommand{{{p}MeanIso}}{{{fmt_int(miso)}}}",
                    f"\\newcommand{{{p}PctMore}}{{{fmt_pct(more)}\\%}}",
                    f"\\newcommand{{{p}PctEvery}}{{{fmt_pct(every)}\\%}}",
                    f"\\newcommand{{{p}EveryCount}}{{{fmt_int(every_n)}}}"]
        # mapping mutants (for a sentence): same / fewer / none / other tests vs isolated
        cnt = {"Same": [], "Fewer": [], "None": [], "Other": []}
        for _, lists in shared[cfg]:
            c = dict.fromkeys(cnt, 0)
            for m, iso_tests in mapping.items():
                s = lists.get(m, set())
                key = "None" if not s else "Other" if not s <= iso_tests else "Same" if s == iso_tests else "Fewer"
                c[key] += 1
            for k in cnt:
                cnt[k].append(c[k])
        for k, v in cnt.items():
            lo, hi = min(v), max(v)
            mac.append(f"\\newcommand{{\\Sh{tag}Map{k}}}{{{fmt_int(lo) if lo == hi else fmt_int(lo) + '--' + fmt_int(hi)}}}")
    mac.append(f"\\newcommand{{\\ShMapping}}{{{fmt_int(len(mapping))}}}")

    os.makedirs(args.out_dir, exist_ok=True)
    for name, lines in [("rq1a_shared_overall.tex", ta), ("rq1a_shared_cheap.tex", tb),
                        ("rq1a_shared_macros.tex", mac)]:
        open(os.path.join(args.out_dir, name), "w").write("\n".join(lines) + "\n")
    print(f"\nWrote rq1a_shared_overall.tex, rq1a_shared_cheap.tex, rq1a_shared_macros.tex to {args.out_dir}")


if __name__ == "__main__":
    main()