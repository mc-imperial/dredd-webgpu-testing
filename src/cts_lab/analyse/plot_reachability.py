#!/usr/bin/env python3
"""Summarise how many tests reach each mutant.

Input: the <mapping>_counts.csv written by build_mutant_mapping.py
       (columns: tests_reaching_mutant, n_mutants; one row per exact count).

Output (next to the input):
  <stem>_summary.txt     headline numbers, thresholds, percentiles, binned table
  <stem>_thresholds.csv  mutants reached by <= N and > N tests, for each threshold N
  <stem>_binned.csv      the binned table (widening bins: 1, 2, 3-5, 6-10, ...)
  <stem>_hist.png        histogram of the binned table

Usage: plot_reachability.py <mapping>_counts.csv [--total-mutants N]
                            [--thresholds 1,5,10,...] [--log-y]
  --total-mutants: all mutants Dredd created, so unreached mutants (reached by
  0 tests, which never appear in the counts file) can be reported too.
"""

import argparse
import csv
from pathlib import Path

import numpy as np

# Bin edges grow roughly x2-x2.5, since counts range from 1 to thousands.
EDGES = [1, 2, 3, 6, 11, 21, 51, 101, 201, 501, 1001, 2001, 5001, 10001, 20001, 50001]

SERIES = "#2a78d6"      # one hue for a single series
INK = "#0b0b0b"
INK_2 = "#52514e"
GRID = "#e4e3df"
SURFACE = "#fcfcfb"


def bin_label(lo: int, hi: int) -> str:
    return str(lo) if hi - lo == 1 else f"{lo}-{hi - 1}"


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("counts_csv", type=Path)
    p.add_argument("--total-mutants", type=int, default=None)
    p.add_argument("--total-tests", type=int, default=None,
                   help="number of tests in the run (default: the most tests reaching any mutant)")
    p.add_argument("--thresholds", default="1,2,5,10,20,50,100,200,500,1000,5000,10000,100000",
                   help="comma-separated N values for the 'reached by <= N tests' table")
    p.add_argument("--log-y", action="store_true", help="log scale for the mutant counts")
    args = p.parse_args()

    with args.counts_csv.open() as f:
        rows = [(int(r["tests_reaching_mutant"]), int(r["n_mutants"])) for r in csv.DictReader(f)]
    k = np.array([r[0] for r in rows])
    n = np.array([r[1] for r in rows])
    reached = int(n.sum())

    # Percentiles from the exact distribution.
    cum = np.cumsum(n) / reached
    def pct(q):
        return int(k[np.searchsorted(cum, q)])

    def share(limit):
        return n[k <= limit].sum() / reached

    lines = [f"Mutants reached by at least 1 test: {reached:,}"]
    if args.total_mutants:
        unreached = args.total_mutants - reached
        lines.append(f"Mutants reached by no test:         {unreached:,} "
                     f"({unreached / args.total_mutants:.1%} of all {args.total_mutants:,} mutants)")
    lines.append(f"All percentages below are out of the {reached:,} mutants reached by at least 1 test.")

    mean = float((k * n).sum() / reached)
    lines += [
        "",
        "HOW MANY TESTS REACH A MUTANT",
        f"  Average {mean:,.1f} tests, median {pct(0.5):,}, maximum {int(k.max()):,}.",
    ]
    for q in (25, 50, 75, 90, 95, 99):
        lines.append(f"  {q:>2}% of mutants are reached by at most {pct(q / 100):,} tests")

    lines += [
        "",
        "MUTANTS BY TEST-COUNT THRESHOLD",
        "  For each N: how many mutants are reached by at most N tests, and by more than N.",
        "",
        f"  {'':>7}  {'at most N tests':>19}  {'more than N tests':>19}",
        f"  {'N':>7}  {'mutants':>10} {'%':>8}  {'mutants':>10} {'%':>8}",
    ]
    thresholds = sorted({int(t) for t in args.thresholds.split(",") if t.strip()})
    threshold_rows = []
    for t in thresholds:
        if t > k.max():
            break
        at_most = int(n[k <= t].sum())
        more = reached - at_most
        threshold_rows.append((t, at_most, at_most / reached, more, more / reached))
        lines.append(f"  {t:>7,}  {at_most:>10,} {at_most / reached:>8.1%}  {more:>10,} {more / reached:>8.1%}")

    # Final row: all tests. Everything is "at most all", so the useful number is
    # how many mutants are reached by every single test.
    total_tests = args.total_tests or int(k.max())
    every = int(n[k >= total_tests].sum())
    threshold_rows.append(("all", reached, 1.0, 0, 0.0))
    lines.append(f"  {'all':>7}  {reached:>10,} {1:>8.1%}  {0:>10,} {0:>8.1%}")
    lines += [
        "",
        f"  Reached by every one of the {total_tests:,} tests: {every:,} mutants ({every / reached:.1%})"
        + ("" if args.total_tests else "\n  (assuming the most-reaching mutant is reached by all tests;"
                                      " pass --total-tests to set it)"),
    ]

    lines += [
        "",
        "MUTANTS BY TEST-COUNT RANGE (ranges widen to the right)",
        f"  {'tests reaching':>15}  {'mutants':>10}  {'% in range':>10}  {'% up to here':>12}",
    ]

    # Bin.
    edges = [e for e in EDGES if e <= k.max()] + [int(k.max()) + 1]
    binned = []
    running = 0
    for lo, hi in zip(edges[:-1], edges[1:]):
        count = int(n[(k >= lo) & (k < hi)].sum())
        running += count
        binned.append((bin_label(lo, hi), count))
        lines.append(f"  {bin_label(lo, hi):>15}  {count:>10,}  {count / reached:>10.1%}  {running / reached:>12.1%}")

    stem = args.counts_csv.with_suffix("")
    summary = "\n".join(lines)
    Path(f"{stem}_summary.txt").write_text(summary + "\n")
    with open(f"{stem}_binned.csv", "w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["tests_reaching_mutant", "n_mutants", "pct_in_range", "pct_up_to_here"])
        running = 0
        for label, count in binned:
            running += count
            w.writerow([label, count, round(100 * count / reached, 2), round(100 * running / reached, 2)])
    print(summary)

    draw(binned, f"{stem}_hist.png", "How many CTS tests reach each mutant",
         "Number of tests reaching the mutant (bins widen to the right)", args.log_y)
    written = [f"{stem}_summary.txt", f"{stem}_binned.csv", f"{stem}_hist.png"]

    with open(f"{stem}_thresholds.csv", "w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["n", "mutants_at_most_n", "pct_at_most_n", "mutants_more_than_n", "pct_more_than_n"])
        w.writerows((t, a, round(100 * as_, 2), m, round(100 * ms, 2))
                    for t, a, as_, m, ms in threshold_rows)
    written.insert(1, f"{stem}_thresholds.csv")

    print("\nWrote " + ", ".join(written))


def draw(bins, path, title, xlabel, log_y=False):
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt

    labels = [b[0] for b in bins]
    values = [b[1] for b in bins]
    fig, ax = plt.subplots(figsize=(9, 4.5), dpi=150)
    fig.patch.set_facecolor(SURFACE)
    ax.set_facecolor(SURFACE)

    x = np.arange(len(values))
    ax.bar(x, values, width=0.85, color=SERIES, edgecolor=SURFACE, linewidth=2, zorder=2)

    # Thin out tick labels when there are many bins.
    step = max(1, int(np.ceil(len(labels) / 14)))
    ticks = [i for i in range(len(labels)) if i % step == 0]
    rotate = len(ticks) > 10
    ax.set_xticks(ticks, [labels[i] for i in ticks], rotation=45 if rotate else 0,
                  ha="right" if rotate else "center", color=INK_2, fontsize=9)
    ax.tick_params(axis="y", colors=INK_2, labelsize=9, length=0)
    ax.tick_params(axis="x", length=0)
    if log_y:
        ax.set_yscale("log")
    else:
        ax.yaxis.set_major_formatter(matplotlib.ticker.FuncFormatter(lambda v, _: f"{v:,.0f}"))
    ax.grid(axis="y", color=GRID, linewidth=0.8, zorder=0)
    for side in ("top", "right", "left"):
        ax.spines[side].set_visible(False)
    ax.spines["bottom"].set_color(GRID)

    ax.set_xlabel(xlabel, color=INK_2, fontsize=10)
    ax.set_ylabel("Mutants" + (" (log scale)" if log_y else ""), color=INK_2, fontsize=10)
    ax.set_title(title, color=INK, fontsize=12, loc="left", pad=12)

    label_at = {0, int(np.argmax(values))}
    for i in sorted(label_at):
        ax.annotate(f"{values[i]:,}", (x[i], values[i]), textcoords="offset points", xytext=(0, 4),
                    ha="center", color=INK, fontsize=8)

    fig.tight_layout()
    fig.savefig(path, facecolor=SURFACE)
    plt.close(fig)




if __name__ == "__main__":
    main()