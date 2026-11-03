#!/usr/bin/env python3
"""RQ2: one figure of mutants killed over fuzzing time, for both target sets.

Survivors (blue) and unreached mutants (orange) on a shared y-axis (counts): each
trial as a thin line, and the union of the set's trials as a bold line. Both sets end at
--hours (default 72, the trials' budget; a trial's last program can end slightly later). Same style
as gen_rq2_fuzz.py's per-set figures (Computer Modern font, commas, y grid).

Inputs, per set: the compare_fuzz_runs.py folder (its kills_over_time.csv gives the
per-trial lines) and the trials' kill_fuzz.py folders (programs.jsonl and kills.jsonl
give the union, each kill dated by the end of the program that found it).

Usage (from the repository root):
  python3 icst_2027_experiments/gen_rq2_fuzz_combined.py \\
      --surv-comparison results/fuzz/run_72h/comparison \\
      --surv-runs results/fuzz/run_72h/cts5x72h-random-seed-*/cts5x72h-random-seed \\
      --unr-comparison results/fuzz/unreached-comparison \\
      --unr-runs results/fuzz/unreached-ip-* \\
      --out icst_2027_experiments/generated/rq2_kills_over_time_combined.pdf
"""
import argparse
import csv
import sys
from pathlib import Path

from gen_rq2_fuzz import parse_summary, read_programs, union_over_time

SETS = (("surv", "Survivors", "#2a78d6"), ("unr", "Unreached", "#eb6834"))


def trial_lines(csv_path):
    with csv_path.open() as f:
        rows = list(csv.reader(f))
    header, data = rows[0], rows[1:]
    if not data or len(header) < 2:
        sys.exit(f"{csv_path}: expected a header and rows of: hour, then one column per run")
    hours = [float(r[0]) for r in data]
    lines = [[float(r[i]) if r[i] != "" else float("nan") for r in data] for i in range(1, len(header))]
    return hours, lines


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    for key, name, _ in SETS:
        ap.add_argument(f"--{key}-comparison", type=Path, required=True, help=f"{name}: compare_fuzz_runs.py --outdir")
        ap.add_argument(f"--{key}-runs", nargs="+", type=Path, required=True, help=f"{name}: the trials' folders")
    ap.add_argument("--out", type=Path, required=True)
    ap.add_argument("--hours", type=float, default=72,
                    help="end of the x-axis; both sets are cut here (default 72, the trials' budget)")
    ap.add_argument("--height", type=float, default=2.6, help="figure height in inches (width 3.4)")
    args = ap.parse_args()

    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    from matplotlib.lines import Line2D
    from matplotlib.ticker import FuncFormatter

    plt.rcParams.update({"font.size": 8, "pdf.fonttype": 42, "font.family": "serif",
                         "font.serif": ["cmr10", "Computer Modern Roman", "DejaVu Serif"],
                         "mathtext.fontset": "cm", "axes.unicode_minus": False,
                         "axes.formatter.use_mathtext": True})
    fig, ax = plt.subplots(figsize=(3.4, args.height))
    handles = []
    for key, name, colour in SETS:
        comp, runs = getattr(args, f"{key}_comparison"), getattr(args, f"{key}_runs")
        d = parse_summary(comp / "summary.txt")
        if len(runs) != d["n_runs"]:
            sys.exit(f"--{key}-runs gives {len(runs)} folders but {comp}/summary.txt has {d['n_runs']} trials")
        hours, lines = trial_lines(comp / "kills_over_time.csv")
        keep = [i for i, h in enumerate(hours) if h <= args.hours + 1e-9]   # cut both sets at --hours
        hours, lines = [hours[i] for i in keep], [[ys[i] for i in keep] for ys in lines]
        for ys in lines:
            ax.plot(hours, ys, color=colour, linewidth=0.6, alpha=0.5)
        _, records = read_programs(runs)
        union, n = union_over_time(runs, records, hours)
        ax.plot(hours, union, color=colour, linewidth=1.2)
        handles.append(Line2D([], [], color=colour, linewidth=1.2, label=f"{name}, union of trials"))
        print(f"{name}: union at {hours[-1]:g} h: {union[-1]:,} (all kills {n:,}; summary says {d['union']:,})")
    handles.reverse()   # unreached first in the legend, matching its higher curve
    handles.append(Line2D([], [], color="#888888", linewidth=0.6, alpha=0.7, label="Each trial"))

    comma = FuncFormatter(lambda v, _: f"{int(v):,}")
    ax.xaxis.set_major_formatter(comma)
    ax.yaxis.set_major_formatter(comma)
    ax.set_xlabel("Fuzzing time (hours)")
    ax.set_ylabel("Mutants killed")
    x_max = args.hours
    ax.set_xlim(0, x_max)
    ax.set_ylim(bottom=0)
    ax.set_xticks(range(0, int(x_max) + 1, 12))
    ax.spines[["top", "right"]].set_visible(False)
    ax.grid(True, axis="y", color="#e4e3df", linewidth=0.5)
    ax.set_axisbelow(True)
    ax.legend(handles=handles, loc="center right", fontsize=7, handlelength=1.5, borderaxespad=0.2,
              frameon=True, facecolor="white", edgecolor="none", framealpha=1.0)
    fig.tight_layout()
    args.out.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(args.out)
    fig.savefig(args.out.with_suffix(".png"), dpi=200)
    plt.close(fig)
    print(f"wrote {args.out} (and .png)")


if __name__ == "__main__":
    main()