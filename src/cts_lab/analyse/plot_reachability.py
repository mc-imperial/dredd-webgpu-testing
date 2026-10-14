#!/usr/bin/env python3
"""Summarise how many tests reach each mutant.

Input: the <mapping>_counts.csv written by build_mutant_mapping.py
       (columns: tests_reaching_mutant, n_mutants; one row per exact count).

Output (next to the input):
  <stem>_summary.txt   headline numbers + binned table
  <stem>_binned.csv    the binned table
  <stem>_hist.png      histogram of the binned table

Usage: plot_reachability.py <mapping>_counts.csv [--total-mutants N]
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

    lines = [f"Mutants reached by >= 1 test: {reached:,}"]
    if args.total_mutants:
        unreached = args.total_mutants - reached
        lines.append(f"Mutants reached by 0 tests:   {unreached:,} "
                     f"({unreached / args.total_mutants:.1%} of {args.total_mutants:,})")
    lines += [
        f"Tests per mutant: median {pct(0.5)}, 90th pct {pct(0.9)}, max {int(k.max())}",
        f"Reached by exactly 1 test: {share(1):.1%}",
        f"Reached by <= 5 tests:     {share(5):.1%}",
        f"Reached by <= 20 tests:    {share(20):.1%}",
        "",
        f"{'tests reaching':>15}  {'mutants':>10}  {'share':>6}  {'cumulative':>10}",
    ]

    # Bin.
    edges = [e for e in EDGES if e <= k.max()] + [int(k.max()) + 1]
    binned = []
    running = 0
    for lo, hi in zip(edges[:-1], edges[1:]):
        count = int(n[(k >= lo) & (k < hi)].sum())
        running += count
        binned.append((bin_label(lo, hi), count))
        lines.append(f"{bin_label(lo, hi):>15}  {count:>10,}  {count / reached:>6.1%}  {running / reached:>10.1%}")

    stem = args.counts_csv.with_suffix("")
    summary = "\n".join(lines)
    Path(f"{stem}_summary.txt").write_text(summary + "\n")
    with open(f"{stem}_binned.csv", "w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["tests_reaching_mutant", "n_mutants"])
        w.writerows(binned)
    print(summary)

    # Plot.
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt

    labels = [b[0] for b in binned]
    values = [b[1] for b in binned]
    fig, ax = plt.subplots(figsize=(9, 4.5), dpi=150)
    fig.patch.set_facecolor(SURFACE)
    ax.set_facecolor(SURFACE)

    x = np.arange(len(values))
    ax.bar(x, values, width=0.8, color=SERIES, edgecolor=SURFACE, linewidth=2, zorder=2)

    ax.set_xticks(x, labels, rotation=0 if len(labels) <= 10 else 45,
                  ha="center" if len(labels) <= 10 else "right", color=INK_2, fontsize=9)
    ax.tick_params(axis="y", colors=INK_2, labelsize=9, length=0)
    ax.tick_params(axis="x", length=0)
    ax.yaxis.set_major_formatter(matplotlib.ticker.FuncFormatter(lambda v, _: f"{v:,.0f}"))
    ax.grid(axis="y", color=GRID, linewidth=0.8, zorder=0)
    for side in ("top", "right", "left"):
        ax.spines[side].set_visible(False)
    ax.spines["bottom"].set_color(GRID)

    ax.set_xlabel("Number of tests reaching the mutant", color=INK_2, fontsize=10)
    ax.set_ylabel("Mutants", color=INK_2, fontsize=10)
    ax.set_title("How many CTS tests reach each mutant", color=INK, fontsize=12, loc="left", pad=12)

    # Label only the tallest bar and the first bar, to keep it uncluttered.
    for i in sorted({0, int(np.argmax(values))}):
        ax.annotate(f"{values[i]:,}", (x[i], values[i]), textcoords="offset points", xytext=(0, 4),
                    ha="center", color=INK, fontsize=8)

    fig.tight_layout()
    fig.savefig(f"{stem}_hist.png", facecolor=SURFACE)
    print(f"\nWrote {stem}_summary.txt, {stem}_binned.csv, {stem}_hist.png")


if __name__ == "__main__":
    main()