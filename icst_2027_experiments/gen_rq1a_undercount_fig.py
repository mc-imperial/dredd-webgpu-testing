#!/usr/bin/env python3
"""Figure for RQ1(a): shared execution's reaching-test counts against isolated
execution's, mutant by mutant. Two kinds (--kind):

  fraction  the share of mutants that shared execution undercounts, against the
            number of tests reaching the mutant under isolated execution (linear
            x-axis, full range). Mutants are sorted by isolated count and grouped
            into bins of equal size (--per-bin mutants each, mutants with the same
            count never split), so every point averages the same number of mutants;
            each point sits at its bin's mean isolated count. One line per shared
            configuration: the mean over its runs, with a band for their min--max.
            Undercounted: the run misses at least one test that every isolated
            repeat found (or misses the mutant entirely).
  share     (default) 100%-stacked: for each mutant, the share of the tests reaching
            it under isolated execution that the shared run also found (bottom) or
            missed (top); mutants ordered along a linear x-axis (0--100% of mutants,
            averaged in bins of --per-bin) by their reaching-test count under shared
            execution (--order shared, default: the count you would select by) or
            isolated execution (--order isolated); dotted lines where that count
            passes 100, 1,000, 10,000 (and every test). --config sub|file.
  missed    the mutants selected as cheap by shared count (<= --threshold, default
            100) whose shared test list is incomplete, sorted by how many tests they
            miss (mean over the configuration's runs); linear axes. --config sub|file.
  density   shared count against isolated count for every mutant (both axes linear,
            full range), as a 2-D histogram, one panel per configuration, with the
            diagonal where the counts are equal. Shared count: the mean over the
            configuration's runs.

Reads only the per-mutant CSV from compare_reach_matrices.py --per-mutant.

Usage (from the repository root):
  python3 icst_2027_experiments/gen_rq1a_undercount_fig.py --kind fraction \\
      --per-mutant results/reachability/matrix/compare_per_mutant.csv.gz \\
      --out icst_2027_experiments/generated/rq1a_undercount.pdf
Writes a .png next to the .pdf too, for a quick look.
"""
import argparse
import csv
import gzip
import os
import statistics
import sys

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.colors import LogNorm, LinearSegmentedColormap
from matplotlib.ticker import FuncFormatter, PercentFormatter

CONFIGS = [("sub", "Subtree", "#2a78d6"), ("file", "File subtrees", "#eb6834")]   # validated pair
INK, MUTED, GRID = "#1f1f1e", "#5f5e5a", "#e4e3df"
BLUES = LinearSegmentedColormap.from_list("blues", ["#cde2fb", "#86b6ef", "#2a78d6", "#184f95", "#0d366b"])
thousands = FuncFormatter(lambda x, _: f"{int(x):,}")


def style(ax):
    ax.grid(True, color=GRID, linewidth=0.5)
    ax.set_axisbelow(True)
    for side in ("top", "right"):
        ax.spines[side].set_visible(False)


def equal_bins(rows, per_bin):
    """Sort by isolated count; cut into bins of about per_bin mutants, never splitting a count."""
    rows = sorted(rows, key=lambda r: r["n_union"])
    bins, cur = [], []
    for i, r in enumerate(rows):
        cur.append(r)
        nxt = rows[i + 1]["n_union"] if i + 1 < len(rows) else None
        if len(cur) >= per_bin and nxt != r["n_union"]:
            bins.append(cur)
            cur = []
    if cur:
        bins.append(cur)
    return bins


def fraction(rows, runs, args):
    fig, ax = plt.subplots(figsize=(args.width, 2.1))
    bins = equal_bins(rows, args.per_bin)
    x = [statistics.mean(r["n_union"] for r in b) for b in bins]
    print(f"{len(rows):,} reached mutants in {len(bins)} bins of about {args.per_bin:,} "
          f"(largest {max(map(len, bins)):,}: mutants with the same count stay together)")

    def under(r, run):
        return r[run + "_missing"] > 0 or r[run + "_n"] == 0

    for cfg, label, colour in CONFIGS:
        per_run = [[sum(under(r, run) for r in b) / len(b) for b in bins] for run in runs[cfg]]
        mean = [statistics.mean(v[i] for v in per_run) for i in range(len(bins))]
        lo = [min(v[i] for v in per_run) for i in range(len(bins))]
        hi = [max(v[i] for v in per_run) for i in range(len(bins))]
        ax.fill_between(x, lo, hi, color=colour, alpha=0.25, linewidth=0)
        ax.plot(x, mean, color=colour, linewidth=1.5, label=label)
        for i in (0, len(bins) // 4, len(bins) // 2, len(bins) - 1):
            print(f"  {label}: bin {i + 1} (isolated count {bins[i][0]['n_union']:,}-{bins[i][-1]['n_union']:,}): "
                  f"{100 * mean[i]:.1f}% undercounted")
    ax.set_xlim(0, max(r["n_union"] for r in rows) * 1.01)
    ax.set_ylim(0, 1.02)
    ax.xaxis.set_major_formatter(thousands)
    ax.yaxis.set_major_formatter(PercentFormatter(1.0, decimals=0))
    ax.set_xlabel("Tests reaching the mutant under isolated execution")
    ax.set_ylabel("Mutants undercounted")
    style(ax)
    leg = ax.legend(loc="lower right", frameon=False, fontsize=6.5, handlelength=1.5, title="Shared execution",
                    title_fontsize=6.5)
    for t in leg.get_texts():
        t.set_color(INK)
    return fig


def density(rows, runs, args):
    fig, axes = plt.subplots(1, 2, figsize=(args.width, 1.9), sharey=True)
    xmax = max(r["n_union"] for r in rows)
    ymax = 0
    shared = {}
    for cfg, _, _ in CONFIGS:
        shared[cfg] = [statistics.mean(r[run + "_n"] for run in runs[cfg]) for r in rows]
        ymax = max(ymax, max(shared[cfg]))
    xs = [r["n_union"] for r in rows]
    for ax, (cfg, label, _) in zip(axes, CONFIGS):
        h = ax.hist2d(xs, shared[cfg], bins=[80, 60], range=[[0, xmax * 1.01], [0, ymax * 1.05]],
                      cmap=BLUES, norm=LogNorm(), cmin=1, rasterized=True)
        ax.plot([0, ymax * 1.05], [0, ymax * 1.05], color=MUTED, linewidth=0.8, linestyle="--")
        ax.text(ymax * 0.32, ymax * 0.97, "same count", fontsize=6, color=MUTED, ha="left", va="top")
        ax.set_title(label, fontsize=7.5, color=INK)
        ax.xaxis.set_major_formatter(FuncFormatter(lambda x, _: f"{int(x / 1000)}k" if x else "0"))
        ax.yaxis.set_major_formatter(FuncFormatter(lambda x, _: f"{int(x / 1000)}k" if x else "0"))
        style(ax)
        below = sum(s < x for s, x in zip(shared[cfg], xs))
        print(f"  {label}: shared count below isolated for {below:,} of {len(rows):,} mutants "
              f"({100 * below / len(rows):.1f}%); largest shared count {max(shared[cfg]):,.0f}")
    axes[0].set_ylabel("Tests (shared)")
    fig.supxlabel("Tests (isolated)", fontsize=7.5, color=INK, y=-0.06)
    cb = fig.colorbar(h[3], ax=axes, fraction=0.05, pad=0.02)
    cb.set_label("Mutants", fontsize=6.5)
    cb.ax.tick_params(labelsize=6)
    return fig


def share(rows, runs, args):
    """100%-stacked: per mutant, the share of its isolated tests that shared execution
    also found (bottom) and missed (top); mutants ordered along x by their number of
    reaching tests under shared execution (--order shared, the default: what you would
    select by) or isolated execution (--order isolated)."""
    cfg, label, colour = next(c for c in CONFIGS if c[0] == args.config)
    for r in rows:
        r["_shared"] = statistics.mean(r[run + "_n"] for run in runs[cfg])
    key = "_shared" if args.order == "shared" else "n_union"
    rows = sorted(rows, key=lambda r: (r[key], r["n_union"]))
    n = len(rows)
    found = [statistics.mean(min(1.0, (r[run + "_n"] - r[run + "_extra"]) / r["n_union"]) for run in runs[cfg])
             for r in rows]
    k = args.per_bin
    xs, ys = [], []
    # complete: the run found every test that every isolated repeat found (averaged over runs)
    complete = [statistics.mean(1.0 if (r[run + "_n"] > 0 and r[run + "_missing"] == 0) else 0.0
                                for run in runs[cfg]) for r in rows]
    if args.cumulative:                  # selection view: all mutants up to this one
        cum = 0.0
        step = max(1, n // 2000)         # plot about 2,000 points
        for i, c in enumerate(complete):
            cum += c
            if i % step == 0 or i == n - 1:
                xs.append(100 * (i + 1) / n)
                ys.append(cum / (i + 1))
    for i in (range(0, n, k) if not args.cumulative else ()):
        xs += [100 * i / n, 100 * min(i + k, n) / n]          # a flat step per bin
        if args.measure == "mutants":    # the average mutant's share
            ys += [statistics.mean(found[i:i + k])] * 2
        else:                            # share of all the bin's isolated tests (weighted by tests)
            iso = sum(r["n_union"] for r in rows[i:i + k])
            ys += [sum(f * r["n_union"] for f, r in zip(found[i:i + k], rows[i:i + k])) / iso] * 2
    fig, ax = plt.subplots(figsize=(args.width, 2.1))
    lab_lo, lab_hi = ((f"Found by shared ({label.lower()})", "Missed by shared") if not args.cumulative else
                      (f"Complete test list ({label.lower()})", "Incomplete test list"))
    ax.fill_between(xs, 0, ys, color=colour, linewidth=0, label=lab_lo)
    ax.fill_between(xs, ys, 1, color="#d9d8d3", linewidth=0, label=lab_hi)
    # where the ordering count passes some round numbers (and, for isolated, where the
    # every-test mutants start)
    every = max(r["n_union"] for r in rows)
    marks = [(100, "100"), (1000, "1,000"), (10000, "10,000")]
    if args.order == "isolated":
        marks.append((every, "every\ntest"))
    for value, text in marks:
        idx = next((i for i, r in enumerate(rows)
                    if (r[key] >= value if value == every and key == "n_union" else r[key] > value)), None)
        if idx is None:
            continue
        x = 100 * idx / n
        ax.axvline(x, color=INK, linewidth=0.6, linestyle=":")
        ax.text(x + 0.8, 1.03, text, fontsize=6, color=MUTED, ha="left", va="bottom")
        sel = found[:idx]
        inc = idx - sum(complete[:idx])
        print(f"  {args.order} count > {value:,}: from mutant {idx:,} ({x:.1f}%); the {idx:,} mutants before "
              f"it: incomplete test list {inc:,.0f} ({100 * inc / idx:.1f}%), "
              f"mean share of isolated tests found {100 * statistics.mean(sel):.1f}%, "
              f"isolated tests in total {sum(r['n_union'] for r in rows[:idx]):,} vs shared "
              f"{sum(r['_shared'] for r in rows[:idx]):,.0f}")
    ax.text(0, 1.03, f"Tests ({args.order}):", fontsize=6, color=MUTED, ha="right", va="bottom")
    ax.set_xlim(0, 100)
    ax.set_ylim(0, 1)
    ax.xaxis.set_major_formatter(PercentFormatter(100, decimals=0))
    ax.yaxis.set_major_formatter(PercentFormatter(1.0, decimals=0))
    ax.set_xlabel(f"Mutants, ordered by number of reaching tests ({args.order})")
    ax.set_ylabel("Share of isolated tests" if not args.cumulative else "Mutants selected so far")
    for side in ("top", "right"):
        ax.spines[side].set_visible(False)
    leg = ax.legend(loc="upper center", bbox_to_anchor=(0.45, -0.25), ncol=2, frameon=False, fontsize=6.5,
                    handlelength=1.2, columnspacing=1.2)
    for t in leg.get_texts():
        t.set_color(INK)
    print(f"  {label}: {n:,} mutants in bins of {k:,}; overall mean share found {100 * statistics.mean(found):.1f}%")
    return fig


def missed(rows, runs, args):
    """For the mutants selected as cheap by their shared count (<= --threshold) whose shared
    test list is incomplete: how many tests each misses, sorted, on linear axes."""
    cfg, label, colour = next(c for c in CONFIGS if c[0] == args.config)
    sel = []
    for r in rows:
        shared = statistics.mean(r[run + "_n"] for run in runs[cfg])
        miss = statistics.mean(r[run + "_missing"] for run in runs[cfg])
        if shared <= args.threshold and miss > 0:
            sel.append(miss)
    selected = sum(1 for r in rows if statistics.mean(r[run + "_n"] for run in runs[cfg]) <= args.threshold)
    sel.sort()
    n = len(sel)
    if not n:
        sys.exit("no selected mutant has an incomplete test list")
    bands = [(0, 10, "1–10"), (10, 100, "11–100"), (100, 1000, "101–1,000"),
             (1000, 10000, "1,001–\n10,000"), (10000, None, ">10,000")]
    counts = [sum(1 for v in sel if v > lo and (hi is None or v <= hi)) for lo, hi, _ in bands]
    if args.bands:           # bar chart: how many selected mutants miss how many tests
        fig, ax = plt.subplots(figsize=(args.width, 2.0))
        xb = list(range(len(bands)))
        ax.bar(xb, counts, color=colour, width=0.7)
        for x, c in zip(xb, counts):
            ax.text(x, c, f"{c:,}", ha="center", va="bottom", fontsize=6.5, color=INK)
        ax.set_xticks(xb, [b[2] for b in bands])
        ax.set_xlabel(f"Tests missed by shared execution ({label.lower()})")
        ax.set_ylabel("Selected mutants")
        ax.yaxis.set_major_formatter(thousands)
        ax.set_ylim(0, max(counts) * 1.15)
        style(ax)
        ax.grid(False, axis="x")
        print(f"  {label}: {selected:,} mutants with shared count <= {args.threshold:,}; {n:,} incomplete "
              f"({100 * n / selected:.1f}%)")
        for (lo, hi, t), k in zip(bands, counts):
            print(f"    missing {t.replace(chr(10), '')} tests: {k:,} ({100 * k / n:.1f}%)")
        return fig
    fig, ax = plt.subplots(figsize=(args.width, 2.1))
    xs = [100 * (i + 0.5) / n for i in range(n)]
    ax.fill_between(xs, 0, sel, color=colour, linewidth=0, step="mid")
    med = statistics.median(sel)
    ax.axhline(med, color=INK, linewidth=0.6, linestyle=":")
    ax.text(1, med, f"median {med:,.0f}", fontsize=6, color=MUTED, ha="left", va="bottom")
    ax.set_xlim(0, 100)
    ax.set_ylim(0, max(sel) * 1.05)
    ax.xaxis.set_major_formatter(PercentFormatter(100, decimals=0))
    ax.yaxis.set_major_formatter(thousands)
    ax.set_xlabel(f"Selected mutants with an incomplete test list ({label.lower()}),\nsorted by tests missed")
    ax.set_ylabel("Tests missed")
    style(ax)
    print(f"  {label}: {selected:,} mutants with shared count <= {args.threshold:,}; {n:,} incomplete "
          f"({100 * n / selected:.1f}%); tests missed: median {med:,.0f}, max {max(sel):,.0f}")
    for lo, hi in ((0, 10), (10, 100), (100, 1000), (1000, 10000), (10000, None)):
        k = sum(1 for v in sel if v > lo and (hi is None or v <= hi))
        print(f"    missing {'>' + format(lo, ',') if hi is None else f'{lo + 1:,}-{hi:,}'} tests: "
              f"{k:,} ({100 * k / n:.1f}%)")
    return fig


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--per-mutant", default="results/reachability/matrix/compare_per_mutant.csv.gz")
    ap.add_argument("--out", default="icst_2027_experiments/generated/rq1a_undercount.pdf")
    ap.add_argument("--kind", choices=("share", "missed", "fraction", "density"), default="share")
    ap.add_argument("--bands", action="store_true",
                    help="missed: a bar chart of how many mutants miss 1-10, 11-100, ... tests, instead")
    ap.add_argument("--threshold", type=int, default=100,
                    help="missed: mutants selected as cheap have a shared count up to this")
    ap.add_argument("--config", choices=("sub", "file"), default="sub", help="share: which shared configuration")
    ap.add_argument("--cumulative", action="store_true",
                    help="share: for all mutants up to each point (the selection view): the share whose "
                         "shared test list is complete (blue) or incomplete (grey); ignores --per-bin/--measure")
    ap.add_argument("--measure", choices=("mutants", "tests"), default="mutants",
                    help="share: per bin, the mean of the mutants' shares (default) or the share of "
                         "all the bin's isolated tests (weighted by tests: the cost view)")
    ap.add_argument("--order", choices=("shared", "isolated"), default="shared",
                    help="share: order mutants by their shared (default) or isolated reaching-test count")
    ap.add_argument("--per-bin", type=int, default=500, help="share, fraction: mutants per bin")
    ap.add_argument("--width", type=float, default=3.4, help="inches (one IEEE column is about 3.4)")
    args = ap.parse_args()

    opener = gzip.open if args.per_mutant.endswith(".gz") else open
    with opener(args.per_mutant, "rt") as f:
        reader = csv.DictReader(f)
        cols = reader.fieldnames
        rows = [{k: int(v) for k, v in r.items()} for r in reader if int(r["n_union"]) > 0]
    runs = {cfg: [c[:-2] for c in cols if c.startswith(cfg + "_") and c.endswith("_n")] for cfg, _, _ in CONFIGS}
    if not all(runs.values()):
        sys.exit(f"{args.per_mutant}: expected sub_* and file_* columns (compare_reach_matrices.py)")

    plt.rcParams.update({"font.size": 7.5, "font.family": "sans-serif", "axes.edgecolor": MUTED,
                         "axes.labelcolor": INK, "xtick.color": MUTED, "ytick.color": MUTED,
                         "pdf.fonttype": 42})
    fig = {"share": share, "missed": missed, "fraction": fraction, "density": density}[args.kind](rows, runs, args)

    os.makedirs(os.path.dirname(os.path.abspath(args.out)), exist_ok=True)
    fig.savefig(args.out, bbox_inches="tight", pad_inches=0.02, dpi=300)
    png = os.path.splitext(args.out)[0] + ".png"
    fig.savefig(png, bbox_inches="tight", pad_inches=0.02, dpi=200)
    print(f"wrote {args.out} and {png}")


if __name__ == "__main__":
    main()