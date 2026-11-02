#!/usr/bin/env python3
"""Generate the RQ2 fuzzing outputs for the paper.

Reads the summary.txt and kills_over_time.csv that compare_fuzz_runs.py writes
and produces, in --out-dir:

  rq2_<tag>fuzz_macros.tex      \\newcommand macros for numbers used in prose
  rq2_<tag>fuzz_table.tex       a tabular of per-trial results
  rq2_<tag>kills_over_time.pdf  cumulative kills over fuzzing time: each trial (thin) and, with
                                --runs, their union (bold); also a .png for a quick look

Run it once per target set. --prefix and --tag keep the two sets apart, e.g.
  survivors:  (defaults)                       macros \\Fuzz...,    files rq2_fuzz_...
  unreached:  --prefix FuzzUnr --tag unreached_ macros \\FuzzUnr..., files rq2_unreached_fuzz_...

Always: \\<prefix>ProgramsPerHour, programs per hour of fuzzing over all trials, and
\\<prefix>{Mismatch,Crash,Timeout}Share, each kill type's share of all kills (summed
over trials, whole percent).

With --runs (the trials' kill_fuzz.py folders), medians over all programs:
  \\<prefix>MedianTargetsPerProgram   targets a program reached (candidates)
  \\<prefix>MedianMinutesPerProgram   minutes per program
  \\<prefix>MedianMutantsPerProgram   mutants of any kind a program reached
and, if every program records reached_targets (or --replayed gives the reach
replayed by replay_fuzz_reach.py), reach across trials:
  \\<prefix>Reached           targets reached per trial (range)
  \\<prefix>ReachedUnion, ...UnionPct   reached by any trial (and % of the targets)
  \\<prefix>ReachedAll        reached by every trial
  \\<prefix>KilledOfReachedPct  mutants killed by any trial, as % of those reached by any
With --reach-hours H, reach and the kills behind KilledOfReachedPct count only programs
that ended within H hours of their trial (\\<prefix>ReachHours, \\<prefix>KilledWithinReachHours).

With --kills-at-hours H: \\<prefix>KillsAt, each trial's cumulative kills at H hours
(range), and \\<prefix>KillsAtHours, so sets fuzzed for different lengths can be
compared at the same time (e.g. the 72-hour survivor trials at 24 hours).

With --runs, also the union by kill type: \\<prefix>Union{Mismatch,Crash,Timeout}, mutants
killed by any trial; a mutant killed in more than one way counts once (mismatch, else
crash, else timeout), so the three add up to \\<prefix>Union.

Per-trial values are written as ranges (min--max).
"""
import argparse
import csv
import re
import statistics
import sys
from pathlib import Path

import json

import gen_rq1a_reachability
from gen_rq1a_reachability import fmt_int, fmt_int_range

# Per-trial values here are ranges across trials, not means across repeats.
gen_rq1a_reachability.SPREAD = "range"


def num(s):
    return int(s.replace(",", ""))


def need(pattern, text, path):
    m = re.search(pattern, text, re.M)
    if not m:
        sys.exit(f"{path}: could not find pattern {pattern!r}")
    return m


def parse_summary(path):
    text = path.read_text()
    # The script prints the summary to stdout and to the file; use the first copy only.
    first = text.find("PER RUN")
    second = text.find("PER RUN", first + 1)
    if second != -1:
        text = text[first:second]

    d = {}
    m = need(r"PER RUN \((\d+) runs, ([\d,]+) target survivors\)", text, path)
    d["n_runs"], d["survivors"] = int(m.group(1)), num(m.group(2))

    per_run = section(text, "PER RUN", "programs: mean", path)
    d["runs"] = [
        {"label": lab, "programs": num(p), "hours": float(h), "kills": num(k),
         "mismatch": num(mm), "crash": num(c), "timeout": num(t), "pct": float(pc)}
        for lab, p, h, k, mm, c, t, pc in re.findall(
            r"^\s+(\S+)\s+([\d,]+)\s+([\d.]+)\s+([\d,]+)\s+([\d,]+)\s+([\d,]+)\s+([\d,]+)\s+([\d.]+)\s+[\d.]+\s+\d+\s*$",
            per_run, re.M)
    ]
    if len(d["runs"]) != d["n_runs"]:
        sys.exit(f"{path}: expected {d['n_runs']} per-run rows, found {len(d['runs'])}")
    for r in d["runs"]:
        if r["mismatch"] + r["crash"] + r["timeout"] != r["kills"]:
            sys.exit(f"{path}: {r['label']}: kill types don't add up to kills")

    d["union"] = num(need(r"union \(killed by any run\):\s+([\d,]+)", text, path).group(1))
    d["union_pct"] = float(need(r"union \(killed by any run\):\s+[\d,]+\s+\(([\d.]+)% of survivors\)", text, path).group(1))
    d["intersection"] = num(need(r"intersection \(by every run\):\s+([\d,]+)", text, path).group(1))
    d["mixed_types"] = num(need(r"different kill types:\s+([\d,]+)", text, path).group(1))
    return d


def section(text, start, end, path):
    i = text.find(start)
    j = text.find(end, i)
    if i == -1 or j == -1:
        sys.exit(f"{path}: missing section between '{start}' and '{end}'")
    return text[i:j]


def read_programs(run_dirs):
    """Per trial: the set of targets reached (None if any program lacks
    reached_targets), and the program records."""
    sets, records = [], []
    for d in run_dirs:
        s, missing, recs = set(), 0, []
        for line in open(d / "programs.jsonl"):
            if line.strip():
                rec = json.loads(line)
                recs.append(rec)
                if "reached_targets" in rec:
                    s.update(rec["reached_targets"])
                else:
                    missing += 1
        sets.append(None if missing else s)
        records.append(recs)
    if any(x is None for x in sets):
        print("note: programs.jsonl has no reached_targets for some programs (pass --replayed for reach)")
        sets = []
    return sets, records


def reach_within(run_dirs, records, replayed, hours):
    """Per-trial sets of targets reached, and the union of mutants killed, counting only
    programs that ended within `hours` of their trial's fuzzing time (all if None).

    Reach comes from the replayed files (replay_fuzz_reach.py) if given, else from
    reached_targets in programs.jsonl. Program end times are the cumulative `seconds`
    of the trial's programs.jsonl. Kills come from each trial's kills.jsonl, dated by
    the program (seed) that found them."""
    sets, killed = [], set()
    rep_files = sorted(replayed.glob("*.jsonl.gz")) if replayed else []
    if replayed and len(rep_files) != len(run_dirs):
        sys.exit(f"{replayed}: {len(rep_files)} replayed files for {len(run_dirs)} trials")
    for i, (d, recs) in enumerate(zip(run_dirs, records)):
        ends, t = {}, 0.0
        for r in recs:
            t += r.get("seconds", 0.0)
            ends[r["seed"]] = t / 3600
        inside = lambda seed: hours is None or ends.get(seed, float("inf")) <= hours + 1e-9
        reached = set()
        if replayed:
            import gzip
            with gzip.open(rep_files[i], "rt") as f:
                for line in f:
                    x = json.loads(line)
                    if "reached_targets" in x and inside(x["seed"]):
                        reached.update(x["reached_targets"])
        else:
            if any("reached_targets" not in r for r in recs if r.get("outcome") == "ok"):
                return [], None
            for r in recs:
                if r.get("outcome") == "ok" and inside(r["seed"]):
                    reached.update(r["reached_targets"])
        sets.append(reached)
        kf = d / "kills.jsonl"
        if kf.exists():
            for line in open(kf):
                if line.strip():
                    k = json.loads(line)
                    if inside(k["seed"]):
                        killed.add(k["mutant_id"])
    return sets, killed


UNION_TYPES = ("mismatch", "crash", "timeout")   # precedence when a mutant has kills of several types


def union_by_type(run_dirs):
    """Mutants killed by any trial, split by kill type. A mutant killed in different ways
    (in different trials) counts once, under its first type in UNION_TYPES order, so the
    three counts add up to the union."""
    types = {}
    for d in run_dirs:
        kf = d / "kills.jsonl"
        if not kf.exists():
            continue
        for line in open(kf):
            if line.strip():
                k = json.loads(line)
                st = str(k["status"]).upper()
                kind = next((t for t in UNION_TYPES if t.upper() in st), None)
                if kind is None:
                    sys.exit(f"{kf}: unknown kill status {k['status']!r}")
                types.setdefault(int(k["mutant_id"]), set()).add(kind)
    counts = {t: 0 for t in UNION_TYPES}
    for kinds in types.values():
        counts[next(t for t in UNION_TYPES if t in kinds)] += 1
    return counts, len(types)


def program_stats(records):
    """Medians over all programs of all trials."""
    recs = [r for rs in records for r in rs]

    def med(key):
        vals = [r[key] for r in recs if isinstance(r.get(key), (int, float))]
        return statistics.median(vals) if vals else None
    return {"targets": med("candidates"), "seconds": med("seconds"), "mutants": med("reached"), "n": len(recs)}


def kills_at(csv_path, hours):
    """Cumulative kills per trial at the last row at or before `hours`."""
    with csv_path.open() as f:
        rows = list(csv.reader(f))
    data = [r for r in rows[1:] if float(r[0]) <= hours + 1e-9]
    if not data:
        sys.exit(f"{csv_path}: no rows at or before {hours} h")
    last = data[-1]
    return [int(float(x)) for x in last[1:] if x != ""]


def write_macros(d, out, prefix, reach_sets, at_hours=None, stats=None, reach_killed=None, reach_hours=None,
                 union_types=None):
    runs = d["runs"]
    kills = [r["kills"] for r in runs]
    programs = [r["programs"] for r in runs]
    pcts = [r["pct"] for r in runs]
    lines = [
        "% Generated by gen_rq2_fuzz.py -- do not edit by hand.",
        f"\\newcommand{{\\{prefix}Trials}}{{{d['n_runs']}}}",
        f"\\newcommand{{\\{prefix}Survivors}}{{{fmt_int(d['survivors'])}}}",
        f"\\newcommand{{\\{prefix}Hours}}{{{min(r['hours'] for r in runs):.0f}}}",
        f"\\newcommand{{\\{prefix}Programs}}{{{fmt_int_range(programs)}}}",
        f"\\newcommand{{\\{prefix}ProgramsMean}}{{{statistics.mean(programs):.0f}}}",
        f"\\newcommand{{\\{prefix}Kills}}{{{fmt_int_range(kills)}}}",
        f"\\newcommand{{\\{prefix}KillsMean}}{{{statistics.mean(kills):.0f}}}",
        f"\\newcommand{{\\{prefix}KillsPct}}{{{min(pcts):.1f}--{max(pcts):.1f}\\%}}",
        f"\\newcommand{{\\{prefix}Union}}{{{fmt_int(d['union'])}}}",
        f"\\newcommand{{\\{prefix}UnionPct}}{{{d['union_pct']:.1f}\\%}}",
        f"\\newcommand{{\\{prefix}Intersection}}{{{fmt_int(d['intersection'])}}}",
        f"\\newcommand{{\\{prefix}IntersectionPct}}{{{100 * d['intersection'] / d['survivors']:.1f}\\%}}",
        f"\\newcommand{{\\{prefix}MixedTypes}}{{{fmt_int(d['mixed_types'])}}}",
        f"\\newcommand{{\\{prefix}Mismatch}}{{{fmt_int_range([r['mismatch'] for r in runs])}}}",
        f"\\newcommand{{\\{prefix}Crash}}{{{fmt_int_range([r['crash'] for r in runs])}}}",
        f"\\newcommand{{\\{prefix}Timeout}}{{{fmt_int_range([r['timeout'] for r in runs])}}}",
    ]
    if union_types is not None:
        # the union of all trials, by kill type (each mutant once: mismatch, else crash, else timeout)
        counts, n = union_types
        if n != d["union"]:
            print(f"WARNING: kills.jsonl gives a union of {n:,}, the summary says {d['union']:,}")
        for kind in UNION_TYPES:
            lines.append(f"\\newcommand{{\\{prefix}Union{kind.capitalize()}}}{{{fmt_int(counts[kind])}}}")
        print("union by kill type: " + ", ".join(f"{k} {counts[k]:,}" for k in UNION_TYPES) + f" (total {n:,})")
    if at_hours is not None:
        # cumulative kills per trial at a fixed time, for comparing sets fuzzed for different lengths
        lines.append(f"\\newcommand{{\\{prefix}KillsAtHours}}{{{at_hours[0]:g}}}")
        lines.append(f"\\newcommand{{\\{prefix}KillsAt}}{{{fmt_int_range(at_hours[1])}}}")
        print(f"kills per trial at {at_hours[0]:g} h: {min(at_hours[1]):,}-{max(at_hours[1]):,}")
    # share of each kill type among all kills (summed over trials)
    total_k = max(1, sum(kills))
    for kind, name in (("mismatch", "Mismatch"), ("crash", "Crash"), ("timeout", "Timeout")):
        lines.append(f"\\newcommand{{\\{prefix}{name}Share}}"
                     f"{{{100 * sum(r[kind] for r in runs) / total_k:.0f}\\%}}")
    # programs per hour of fuzzing (all trials), comparable across sets fuzzed for different lengths
    total_h = sum(r["hours"] for r in runs)
    lines.append(f"\\newcommand{{\\{prefix}ProgramsPerHour}}{{{sum(programs) / total_h:.1f}}}")
    if stats:
        if stats["targets"] is not None:
            lines.append(f"\\newcommand{{\\{prefix}MedianTargetsPerProgram}}{{{fmt_int(round(stats['targets']))}}}")
        if stats["seconds"] is not None:
            lines.append(f"\\newcommand{{\\{prefix}MedianMinutesPerProgram}}{{{stats['seconds'] / 60:.0f}}}")
        if stats["mutants"] is not None:
            lines.append(f"\\newcommand{{\\{prefix}MedianMutantsPerProgram}}{{{fmt_int(round(stats['mutants']))}}}")
        print(f"programs: {stats['n']:,} ({sum(programs) / total_h:.1f} per trial-hour); median per program: "
              f"targets reached {stats['targets']}, minutes {stats['seconds'] / 60 if stats['seconds'] else None}, "
              f"mutants reached {stats['mutants']}")
    if reach_sets:
        union = set().union(*reach_sets)
        every = set.intersection(*reach_sets)
        n_killed = len(reach_killed) if reach_killed is not None else d["union"]
        if reach_hours is not None:
            lines.append(f"\\newcommand{{\\{prefix}ReachHours}}{{{reach_hours:g}}}")
            lines.append(f"\\newcommand{{\\{prefix}KilledWithinReachHours}}{{{fmt_int(n_killed)}}}")
        lines += [
            f"\\newcommand{{\\{prefix}Reached}}{{{fmt_int_range([len(x) for x in reach_sets])}}}",
            f"\\newcommand{{\\{prefix}ReachedUnion}}{{{fmt_int(len(union))}}}",
            f"\\newcommand{{\\{prefix}ReachedUnionPct}}{{{100 * len(union) / d['survivors']:.1f}\\%}}",
            f"\\newcommand{{\\{prefix}ReachedAll}}{{{fmt_int(len(every))}}}",
            f"\\newcommand{{\\{prefix}KilledOfReachedPct}}{{{100 * n_killed / max(1, len(union)):.1f}\\%}}",
        ]
        print(f"reach: per trial {min(map(len, reach_sets)):,}-{max(map(len, reach_sets)):,}; "
              f"any trial {len(union):,} ({100 * len(union) / d['survivors']:.2f}%); every trial {len(every):,}; "
              f"killed by any trial {n_killed:,} = {100 * n_killed / max(1, len(union)):.1f}% of reached"
              + (f" (programs within {reach_hours:g} h)" if reach_hours is not None else ""))
    out.write_text("\n".join(lines) + "\n")


def write_table(d, out):
    lines = [
        "% Generated by gen_rq2_fuzz.py -- do not edit by hand.",
        "\\setlength{\\tabcolsep}{4pt}",
        "\\begin{tabular}{lrrrrrr}",
        "\\toprule",
        " & & & \\multicolumn{3}{c}{Kill type} & \\\\",
        "\\cmidrule(lr){4-6}",
        "Trial & Progs. & Kills & Mism. & Crash & T/O & \\% \\\\",
        "\\midrule",
    ]
    for r in d["runs"]:
        lines.append(
            f"{r['label']} & {fmt_int(r['programs'])} & {fmt_int(r['kills'])} & "
            f"{fmt_int(r['mismatch'])} & {fmt_int(r['crash'])} & {fmt_int(r['timeout'])} & "
            f"{r['pct']:.1f}\\% \\\\")
    lines += [
        "\\midrule",
        f"Any & & {fmt_int(d['union'])} & & & & {d['union_pct']:.1f}\\% \\\\",
        f"All & & {fmt_int(d['intersection'])} & & & & "
        f"{100 * d['intersection'] / d['survivors']:.1f}\\% \\\\",
        "\\bottomrule",
        "\\end{tabular}",
    ]
    out.write_text("\n".join(lines) + "\n")


def union_over_time(run_dirs, records, hours):
    """Mutants killed by any trial by each of `hours` (fuzzing time within each trial).

    A kill is dated by the end of the program (seed) that found it, in its own trial's
    time (the cumulative `seconds` of programs.jsonl); a mutant counts from its earliest kill."""
    first = {}
    for d, recs in zip(run_dirs, records):
        ends, t = {}, 0.0
        for r in recs:
            t += r.get("seconds", 0.0)
            ends[r["seed"]] = t / 3600
        kf = d / "kills.jsonl"
        if not kf.exists():
            continue
        for line in open(kf):
            if line.strip():
                k = json.loads(line)
                h = ends.get(k["seed"], float("inf"))
                first[k["mutant_id"]] = min(first.get(k["mutant_id"], float("inf")), h)
    times = sorted(first.values())
    import bisect
    return [bisect.bisect_right(times, h + 1e-9) for h in hours], len(first)


def write_figure(csv_path, out, colour, run_dirs=(), records=(), union_total=None):
    """Cumulative kills over fuzzing time: each trial as a thin line, and (with --runs) the
    union of all trials as a bold line, in one colour. LaTeX-like serif font (Computer
    Modern, bundled with matplotlib, so no LaTeX installation is needed)."""
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    from matplotlib.ticker import FuncFormatter

    with csv_path.open() as f:
        rows = list(csv.reader(f))
    header, data = rows[0], rows[1:]
    if not data or len(header) < 2:
        sys.exit(f"{csv_path}: expected a header and rows of: hour, then one column per run")
    hours = [float(r[0]) for r in data]

    plt.rcParams.update({"font.size": 8, "pdf.fonttype": 42, "font.family": "serif",
                         "font.serif": ["cmr10", "Computer Modern Roman", "DejaVu Serif"],
                         "mathtext.fontset": "cm", "axes.unicode_minus": False,
                         "axes.formatter.use_mathtext": True})
    fig, ax = plt.subplots(figsize=(3.4, 2.0))
    for i, label in enumerate(header[1:], 1):
        ys = [float(r[i]) if r[i] != "" else float("nan") for r in data]
        ax.plot(hours, ys, color=colour, linewidth=0.6, alpha=0.5,
                label="Each trial" if i == 1 else None)
    if run_dirs:
        union, n = union_over_time(run_dirs, records, hours)
        ax.plot(hours, union, color=colour, linewidth=1.2, label="Union of trials")
        print(f"figure: union of trials at {hours[-1]:g} h: {union[-1]:,} (all kills: {n:,}"
              + (f"; summary says {union_total:,})" if union_total is not None else ")"))
    else:
        print("note: no --runs, so no union line in the figure")
    comma = FuncFormatter(lambda v, _: f"{int(v):,}")
    ax.xaxis.set_major_formatter(comma)
    ax.yaxis.set_major_formatter(comma)
    ax.set_xlabel("Fuzzing time (hours)")
    ax.set_ylabel("Mutants killed")
    ax.set_xlim(0, max(hours))
    ax.set_ylim(bottom=0)
    ax.set_xticks(range(0, int(max(hours)) + 1, 12))
    ax.spines[["top", "right"]].set_visible(False)
    ax.grid(True, axis="y", color="#e4e3df", linewidth=0.5)
    ax.set_axisbelow(True)
    ax.legend(loc="lower right", fontsize=7, handlelength=1.5, borderaxespad=0.2,
              frameon=True, facecolor="white", edgecolor="none", framealpha=1.0)
    fig.tight_layout()
    fig.savefig(out)
    fig.savefig(out.with_suffix(".png"), dpi=200)
    plt.close(fig)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("comparison_dir", type=Path, help="compare_fuzz_runs.py --outdir")
    ap.add_argument("--out-dir", type=Path, required=True)
    ap.add_argument("--prefix", default="Fuzz", help="macro name prefix (default Fuzz)")
    ap.add_argument("--tag", default="", help="inserted into the output file names, e.g. unreached_")
    ap.add_argument("--kills-at-hours", type=float,
                    help="also give each trial's cumulative kills at this many hours (\\<prefix>KillsAt), "
                         "to compare sets fuzzed for different lengths")
    ap.add_argument("--runs", nargs="*", type=Path, default=[],
                    help="the trials' kill_fuzz.py folders: program statistics, and reach if recorded")
    ap.add_argument("--replayed", type=Path,
                    help="replay_fuzz_reach.py --out-dir: reach for trials that did not record it "
                         "(one *.jsonl.gz per trial, in the same order as --runs)")
    ap.add_argument("--colour", help="figure colour (default: blue, or orange if --tag mentions unreached)")
    ap.add_argument("--reach-hours", type=float,
                    help="count reach (and the kills used for killed-of-reached) only for programs "
                         "within this many hours of each trial, e.g. 24 to compare with shorter runs")
    args = ap.parse_args()

    d = parse_summary(args.comparison_dir / "summary.txt")
    if args.runs and len(args.runs) != d["n_runs"]:
        sys.exit(f"--runs gives {len(args.runs)} folders but the summary has {d['n_runs']} trials")
    reach_sets, records = read_programs(args.runs) if args.runs else ([], [])
    stats = program_stats(records) if records else None
    reach_killed = None
    if args.runs and (args.replayed or args.reach_hours is not None):
        reach_sets, reach_killed = reach_within(args.runs, records, args.replayed, args.reach_hours)
        if reach_killed is None:
            print("note: no reach recorded for these trials; pass --replayed for reach")
            reach_sets = []
    args.out_dir.mkdir(parents=True, exist_ok=True)
    at = None
    if args.kills_at_hours:
        at = (args.kills_at_hours, kills_at(args.comparison_dir / "kills_over_time.csv", args.kills_at_hours))
    write_macros(d, args.out_dir / f"rq2_{args.tag}fuzz_macros.tex", args.prefix, reach_sets, at, stats,
                 reach_killed, args.reach_hours, union_by_type(args.runs) if args.runs else None)
    write_table(d, args.out_dir / f"rq2_{args.tag}fuzz_table.tex")
    colour = args.colour or ("#eb6834" if "unreached" in args.tag else "#2a78d6")
    write_figure(args.comparison_dir / "kills_over_time.csv", args.out_dir / f"rq2_{args.tag}kills_over_time.pdf",
                 colour, args.runs, records, d.get("union"))
    print(f"Parsed {d['n_runs']} trials; wrote macros, table and figure to {args.out_dir}")


if __name__ == "__main__":
    main()