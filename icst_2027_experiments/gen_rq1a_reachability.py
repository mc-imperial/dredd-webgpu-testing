#!/usr/bin/env python3
"""Generate the RQ1(a) reachability-distribution outputs for the paper.

Reads the *_counts_summary.txt files that plot_reachability.py writes (one per
isolated repeat) and produces, in --out-dir:

  rq1a_reachability_macros.tex   \\newcommand macros for numbers used in prose
  rq1a_reachability_ranges.tex   a tabular of mutants by reaching-test range
  rq1a_reachability_hist.pdf     bar chart of the same ranges (vector PDF)

How values that differ across repeats are written (--spread):
  mean   (default) the mean across repeats only; \\ReachMaxDiff gives the largest
         difference between repeats over all mutant counts, for one sentence
         about stability instead of a spread on every number
  sd     mean and sample standard deviation ("113{,}964 $\\pm$ 0.8")
  range  min--max
Each macro also has a ...Mean variant holding only the mean, for prose.
"""
import argparse
import re
import statistics
import sys

SPREAD = "mean"  # set from --spread in main()
from pathlib import Path

THRESHOLD_NAMES = {
    1: "One", 2: "Two", 5: "Five", 10: "Ten", 20: "Twenty", 50: "Fifty",
    100: "Hundred", 200: "TwoHundred", 500: "FiveHundred", 1000: "Thousand",
    5000: "FiveThousand", 10000: "TenThousand", 100000: "HundredThousand",
}
PERCENTILE_NAMES = {25: "QOne", 50: "QTwo", 75: "QThree", 90: "PNinety"}


def num(s):
    return int(s.replace(",", ""))


def section(text, start, end, path):
    try:
        i = text.index(start)
    except ValueError:
        sys.exit(f"{path}: missing section '{start}'")
    j = text.find(end, i) if end else -1
    return text[i:j] if j != -1 else text[i:]


def need(pattern, text, path):
    m = re.search(pattern, text, re.M)
    if not m:
        sys.exit(f"{path}: could not find pattern {pattern!r}")
    return m


def parse(path):
    text = path.read_text()
    d = {"path": path}
    d["reached"] = num(need(r"Mutants reached by at least 1 test: ([\d,]+)", text, path).group(1))

    m = need(r"Average ([\d,.]+) tests, median ([\d,]+), maximum ([\d,]+)\.", text, path)
    d["mean"] = float(m.group(1).replace(",", ""))
    d["median"] = num(m.group(2))
    d["max"] = num(m.group(3))

    d["percentiles"] = {
        int(p): num(v)
        for p, v in re.findall(r"^\s*(\d+)% of mutants are reached by at most ([\d,]+) tests", text, re.M)
    }

    m = need(r"Reached by every one of the ([\d,]+) tests: ([\d,]+) mutants \(([\d.]+)%\)", text, path)
    d["total_tests"] = num(m.group(1))
    d["all_tests"] = num(m.group(2))
    d["all_tests_pct"] = float(m.group(3))

    thr = section(text, "MUTANTS BY TEST-COUNT THRESHOLD", "Reached by every", path)
    d["thresholds"] = {
        num(n): (num(c), float(p))
        for n, c, p, _, _ in re.findall(
            r"^\s*([\d,]+)\s+([\d,]+)\s+([\d.]+)%\s+([\d,]+)\s+([\d.]+)%\s*$", thr, re.M)
    }

    rng = section(text, "MUTANTS BY TEST-COUNT RANGE", None, path)
    d["ranges"] = [
        (label, num(c), float(p), float(cum))
        for label, c, p, cum in re.findall(
            r"^\s*(\d+(?:-\d+)?)\s+([\d,]+)\s+([\d.]+)%\s+([\d.]+)%\s*$", rng, re.M)
    ]

    if not d["thresholds"] or not d["ranges"] or not d["percentiles"]:
        sys.exit(f"{path}: parsed an empty table; has the summary format changed?")
    return d


# ---- LaTeX formatting -------------------------------------------------------

def fmt_int(n):
    return f"{n:,}".replace(",", "{,}")


def fmt_dec(x, places=1):
    return f"{x:,.{places}f}".replace(",", "{,}")


def sd(values):
    return statistics.stdev(values) if len(values) > 1 else 0.0


def fmt_int_range(values):
    """Counts: mean +- SD (default) or min--max across repeats."""
    lo, hi = min(values), max(values)
    if lo == hi:
        return fmt_int(lo)
    if SPREAD == "mean":
        return fmt_int_mean(values)
    if SPREAD == "range":
        return f"{fmt_int(lo)}--{fmt_int(hi)}"
    s = sd(values)
    mean = fmt_int(round(statistics.mean(values)))
    return mean if round(s, 1) == 0 else f"{mean} $\\pm$ {fmt_dec(s)}"


def fmt_pct_range(values):
    """Percentages: mean +- SD (default) or min--max, one decimal place."""
    lo, hi = min(values), max(values)
    if lo == hi:
        return f"{lo:.1f}\\%"
    if SPREAD == "mean":
        return fmt_pct_mean(values)
    if SPREAD == "range":
        return f"{lo:.1f}--{hi:.1f}\\%"
    m, s = statistics.mean(values), sd(values)
    return f"{m:.1f}\\%" if round(s, 1) == 0 else f"{m:.1f}\\% $\\pm$ {s:.1f}"


def fmt_int_mean(values):
    return fmt_int(round(statistics.mean(values)))


def fmt_pct_mean(values):
    return f"{statistics.mean(values):.1f}\\%"


def fmt_range_label(label):
    if "-" in label:
        lo, hi = label.split("-")
        return f"{fmt_int(int(lo))}--{fmt_int(int(hi))}"
    return fmt_int(int(label))


# ---- outputs ----------------------------------------------------------------

def write_macros(runs, out):
    def col(f):
        return [f(r) for r in runs]

    spread = {"mean": "mean only (see \\ReachMaxDiff)", "sd": "mean $\\pm$ sample SD",
              "range": "min--max"}[SPREAD]
    lines = [
        "% Generated by gen_rq1a_reachability.py -- do not edit by hand.",
        f"% Spread across repeats: {spread}; ...Mean macros hold the mean only.",
        "% Sources:",
        *[f"%   {r['path']}" for r in runs],
        f"\\newcommand{{\\ReachRuns}}{{{len(runs)}}}",
    ]

    def add(name, values, pct=False):
        full = fmt_pct_range(values) if pct else fmt_int_range(values)
        mean = fmt_pct_mean(values) if pct else fmt_int_mean(values)
        lines.append(f"\\newcommand{{\\{name}}}{{{full}}}")
        lines.append(f"\\newcommand{{\\{name}Mean}}{{{mean}}}")

    add("ReachTotalTests", col(lambda r: r["total_tests"]))
    add("ReachMutants", col(lambda r: r["reached"]))
    add("ReachMedian", col(lambda r: r["median"]))
    add("ReachAllTests", col(lambda r: r["all_tests"]))
    add("ReachAllTestsPct", col(lambda r: r["all_tests_pct"]), pct=True)
    for p, name in PERCENTILE_NAMES.items():
        if all(p in r["percentiles"] for r in runs):
            add(f"Reach{name}", col(lambda r: r["percentiles"][p]))
    for n, name in THRESHOLD_NAMES.items():
        if all(n in r["thresholds"] for r in runs):
            add(f"ReachAtMost{name}", col(lambda r: r["thresholds"][n][0]))
            add(f"ReachAtMost{name}Pct", col(lambda r: r["thresholds"][n][1]), pct=True)

    # Largest difference between repeats over every mutant count reported
    # (reached, reached by every test, each threshold, each range bin).
    counts = {"reached": col(lambda r: r["reached"]),
              "reached by every test": col(lambda r: r["all_tests"])}
    for n in runs[0]["thresholds"]:
        if all(n in r["thresholds"] for r in runs):
            counts[f"at most {n}"] = col(lambda r: r["thresholds"][n][0])
    for i, (label, *_) in enumerate(runs[0]["ranges"]):
        counts[f"range {label}"] = col(lambda r: r["ranges"][i][1])
    what, values = max(counts.items(), key=lambda kv: max(kv[1]) - min(kv[1]))
    max_diff = max(values) - min(values)
    print(f"largest difference between repeats: {max_diff} mutants ({what}: {min(values):,}--{max(values):,})")
    lines.append(f"\\newcommand{{\\ReachMaxDiff}}{{{fmt_int(max_diff)}}}")
    out.write_text("\n".join(lines) + "\n")


def write_table(runs, out):
    labels = [lab for lab, *_ in runs[0]["ranges"]]
    for r in runs[1:]:
        if [lab for lab, *_ in r["ranges"]] != labels:
            sys.exit(f"{r['path']}: range bins differ from {runs[0]['path']}")

    lines = [
        "% Generated by gen_rq1a_reachability.py -- do not edit by hand.",
        "\\begin{tabular}{rrrr}",
        "\\toprule",
        "Reaching tests & Mutants & \\% & Cumulative \\% \\\\",
        "\\midrule",
    ]
    for i, label in enumerate(labels):
        counts = [r["ranges"][i][1] for r in runs]
        pcts = [r["ranges"][i][2] for r in runs]
        cums = [r["ranges"][i][3] for r in runs]
        lines.append(
            f"{fmt_range_label(label)} & {fmt_int_range(counts)} & "
            f"{fmt_pct_range(pcts)} & {fmt_pct_range(cums)} \\\\")
    lines += ["\\bottomrule", "\\end{tabular}"]
    out.write_text("\n".join(lines) + "\n")


def write_figure(runs, out, threshold):
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt

    labels = [lab for lab, *_ in runs[0]["ranges"]]
    # Mean percentage across repeats; repeats differ by at most a few mutants.
    pcts = [sum(r["ranges"][i][2] for r in runs) / len(runs) for i in range(len(labels))]
    tick_labels = ["–".join(f"{int(x):,}" for x in lab.split("-")) for lab in labels]

    plt.rcParams.update({"font.size": 7, "pdf.fonttype": 42})
    fig, ax = plt.subplots(figsize=(3.5, 2.2))
    ax.bar(range(len(labels)), pcts, color="0.35")
    ax.set_xticks(range(len(labels)))
    ax.set_xticklabels(tick_labels, rotation=55, ha="right")
    ax.set_xlabel("Tests reaching the mutant (bins widen to the right)")
    ax.set_ylabel("% of reached mutants")
    ax.spines[["top", "right"]].set_visible(False)

    # Dashed line after the last bin whose upper bound is <= the threshold.
    upper = [int(lab.split("-")[-1]) for lab in labels]
    idx = [i for i, u in enumerate(upper) if u <= threshold]
    if idx:
        x = idx[-1] + 0.5
        ax.axvline(x, linestyle="--", linewidth=0.8, color="black")
        ax.text(x - 0.2, max(pcts) * 0.95, f"≤{threshold} tests", ha="right", va="top")

    fig.tight_layout()
    fig.savefig(out)
    plt.close(fig)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("summaries", nargs="+", type=Path, help="*_counts_summary.txt files, one per repeat")
    ap.add_argument("--out-dir", type=Path, required=True)
    ap.add_argument("--threshold", type=int, default=100, help="mapping threshold marked on the figure")
    ap.add_argument("--spread", choices=["mean", "sd", "range"], default="mean",
                    help="how to show variation across repeats (default: mean only, plus \\ReachMaxDiff)")
    args = ap.parse_args()
    global SPREAD
    SPREAD = args.spread

    runs = [parse(p) for p in sorted(args.summaries)]
    args.out_dir.mkdir(parents=True, exist_ok=True)
    write_macros(runs, args.out_dir / "rq1a_reachability_macros.tex")
    write_table(runs, args.out_dir / "rq1a_reachability_ranges.tex")
    write_figure(runs, args.out_dir / "rq1a_reachability_hist.pdf", args.threshold)
    print(f"Parsed {len(runs)} summaries; wrote macros, table and figure to {args.out_dir}")


if __name__ == "__main__":
    main()