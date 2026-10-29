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
  rq1a_shared_cheap.tex     Table B. Per shared configuration, rows: mutants
                            reached by <= X tests under shared execution. Columns:
                            mutants; mean reaching tests shared / isolated; % reached
                            by more tests in isolation; % reached by every test.
  rq1a_shared_macros.tex    macros for the text, including the overall comparison
                            (no table): per configuration (Sub, File)
                              \\Sh<cfg>PctFewer{All,UpToHundred,AboveThousand,Every}
                                % of mutants (grouped by isolated reaching tests)
                                reached by fewer tests under shared execution
                              \\Sh<cfg>Mean{All,UpToHundred,AboveThousand,Every}
                                mean shared reaching tests of each group
                              \\Sh<cfg>Missed  reached in isolation, by no test shared
                              \\Sh<cfg>Extra   reached shared, by no test in isolation
                            and \\ShIsoReached, \\ShIsoUpToHundred, \\ShIsoEvery (group sizes)
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

    shared = {}
    for cfg, _, _ in CONFIGS:
        dirs = sorted(glob.glob(os.path.join(args.shared_root, "*", cfg)))
        if not dirs:
            sys.exit(f"no {cfg} runs under {args.shared_root}")
        shared[cfg] = [(read_counts(os.path.join(d, "per_mutant.csv")),
                        {int(m): set(t) for m, t in json.load(open(os.path.join(d, "mapping_lists.json"))).items()})
                       for d in dirs]
        print(f"{cfg}: {len(dirs)} repeats")

    # ---- Overall comparison, for the text (no table) ----
    # Groups of mutants by isolated reaching tests, and the share of each group
    # reached by fewer tests under shared execution (0 if not reached at all).
    groups = {"All": list(iso),
              "UpToHundred": [m for m, n in iso.items() if n <= 100],
              "AboveThousand": [m for m, n in iso.items() if n > 1000],
              "Every": [m for m, n in iso.items() if n == n_all]}
    print("\nOverall (spread across repeats where it varies):")
    for name, members in groups.items():
        print(f"   {name}: {len(members):,} mutants, mean isolated {mean0(iso[m] for m in members):,.0f}")
    O = {}  # (cfg, key) -> value, mean across repeats
    for cfg, _, _ in CONFIGS:
        reps = shared[cfg]
        for name, members in groups.items():
            O[(cfg, f"PctFewer{name}")] = across(
                [100.0 * sum(1 for m in members if sh.get(m, 0) < iso[m]) / max(1, len(members)) for sh, _ in reps],
                f"{cfg} {name} % fewer")
            O[(cfg, f"Mean{name}")] = across([mean0(sh.get(m, 0) for m in members) for sh, _ in reps],
                                             f"{cfg} {name} mean shared")
        O[(cfg, "Missed")] = across([sum(1 for m in iso if m not in sh) for sh, _ in reps], f"{cfg} missed")
        O[(cfg, "Extra")] = across([sum(1 for m in sh if m not in iso) for sh, _ in reps], f"{cfg} extra")
        print(f"   {cfg}: % fewer all {O[(cfg, 'PctFewerAll')]:.1f}, <=100 {O[(cfg, 'PctFewerUpToHundred')]:.1f}, "
              f">1000 {O[(cfg, 'PctFewerAboveThousand')]:.1f}; every-test mutants: mean shared "
              f"{O[(cfg, 'MeanEvery')]:,.0f}; missed {O[(cfg, 'Missed')]:,.1f}, extra {O[(cfg, 'Extra')]:,.1f}")

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
           f"\\newcommand{{\\ShEveryTest}}{{{fmt_int(n_all)}}}",
           f"\\newcommand{{\\ShIsoReached}}{{{fmt_int(len(iso))}}}",
           f"\\newcommand{{\\ShIsoUpToHundred}}{{{fmt_int(len(groups['UpToHundred']))}}}",
           f"\\newcommand{{\\ShIsoEvery}}{{{fmt_int(len(groups['Every']))}}}"]
    for cfg, tag, _ in CONFIGS:
        mac.append(f"\\newcommand{{\\Sh{tag}Repeats}}{{{len(shared[cfg])}}}")
        for name in groups:
            mac.append(f"\\newcommand{{\\Sh{tag}PctFewer{name}}}{{{fmt_pct(O[(cfg, 'PctFewer' + name)])}\\%}}")
            mac.append(f"\\newcommand{{\\Sh{tag}Mean{name}}}{{{fmt_int(O[(cfg, 'Mean' + name)])}}}")
        mac.append(f"\\newcommand{{\\Sh{tag}EveryMean}}{{{fmt_int(O[(cfg, 'MeanEvery')])}}}")
        mac.append(f"\\newcommand{{\\Sh{tag}Missed}}{{{fmt_int(O[(cfg, 'Missed')])}}}")
        mac.append(f"\\newcommand{{\\Sh{tag}Extra}}{{{fmt_int(O[(cfg, 'Extra')])}}}")
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
    for name, lines in [("rq1a_shared_cheap.tex", tb),
                        ("rq1a_shared_macros.tex", mac)]:
        open(os.path.join(args.out_dir, name), "w").write("\n".join(lines) + "\n")
    print(f"\nWrote rq1a_shared_cheap.tex, rq1a_shared_macros.tex to {args.out_dir}")


if __name__ == "__main__":
    main()