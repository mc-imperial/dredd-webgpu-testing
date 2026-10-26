#!/usr/bin/env python3
"""Compare repeated wgslsmith fuzzing runs (independent trials) against the same survivors.

Each run directory is a kill_fuzz.py output folder (programs.jsonl, kills.jsonl,
run_info.json). Reports:
  - per run: programs, hours, kills by type, % of survivors killed, kills per hour
    (plus mean / median / range across runs)
  - kills over time: cumulative kills against elapsed fuzzing hours, per run
  - with --split-hours (default 24,48; 0 turns it off): programs and kills in each
    period between those points, e.g. the first 24 h session and each resumed one
    (split points beyond a run's length are ignored)
  - variation across runs: union and intersection of killed mutants

Output in --outdir:
  summary.txt             everything above, as text
  per_run.csv             the per-run table
  kills_over_time.csv     hour, then cumulative kills per run (15-minute steps)
  kills_over_time.png     the same, one line per run
  mutants.csv             each killed mutant: in how many runs, and its status in each run

Usage:
  compare_fuzz_runs.py results/fuzz/24h/i{1..5} --survivors results/cts-survival/combined/survivors.txt \\
      --outdir results/fuzz/24h/comparison
"""

import argparse
import csv
import json
import statistics
from collections import Counter
from pathlib import Path

TYPE_NAMES = {"KILL_OUTPUT_MISMATCH": "mismatch", "KILL_CRASH": "crash", "KILL_TIMEOUT": "timeout"}

# Chart styling: validated categorical slots 1-5 (light surface) and recessive chrome.
SERIES = ["#2a78d6", "#eb6834", "#1baf7a", "#eda100", "#e87ba4"]
SURFACE, INK, INK_2, MUTED, GRID, AXIS = "#fcfcfb", "#0b0b0b", "#52514e", "#898781", "#e1e0d9", "#c3c2b7"


def read_jsonl(path: Path) -> list[dict]:
    rows = []
    if path.exists():
        for line in path.read_text().splitlines():
            try:
                rows.append(json.loads(line))
            except json.JSONDecodeError:
                pass  # half-written last line
    return rows


def load_run(d: Path) -> dict:
    programs = read_jsonl(d / "programs.jsonl")
    kills = read_jsonl(d / "kills.jsonl")
    info = json.loads((d / "run_info.json").read_text()) if (d / "run_info.json").exists() else {}

    # Elapsed fuzzing time at the end of each program, in file order.
    t, end_time = 0.0, {}
    for p in programs:
        t += p.get("seconds", 0)
        end_time.setdefault(p["seed"], t)
    total_h = t / 3600
    # A kill happens when its program finishes; a kill whose program record was never
    # written (run stopped mid-program) is placed at the end.
    kill_times = sorted(end_time.get(k["seed"], t) / 3600 for k in kills)
    status = {k["mutant_id"]: k["status"] for k in kills}
    program_times = sorted(end_time.values())
    return {"name": d.name, "programs": programs, "kills": kills, "status": status,
            "hours": total_h, "kill_times": kill_times, "program_times": [x / 3600 for x in program_times],
            "kill_hour": {k["mutant_id"]: end_time.get(k["seed"], t) / 3600 for k in kills},
            "master_seed": info.get("master_seed")}


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("runs", type=Path, nargs="+")
    p.add_argument("--survivors", type=Path, help="the CTS survivors the runs targeted (for % killed)")
    p.add_argument("--outdir", type=Path, required=True)
    p.add_argument("--labels", help="comma-separated run labels (default: folder names)")
    p.add_argument("--split-hours", default="24,48",
                   help="comma-separated fuzzing hours to split the run at, e.g. where it was "
                        "resumed (default 24,48; 0 = off)")
    args = p.parse_args()

    runs = [load_run(d) for d in args.runs]
    # Default labels are folder names; if those repeat (e.g. run0/name, run1/name),
    # use the parent folders instead.
    if len({r["name"] for r in runs}) < len(runs):
        for r, d in zip(runs, args.runs):
            r["name"] = d.resolve().parent.name
    if args.labels:
        for r, lab in zip(runs, args.labels.split(",")):
            r["name"] = lab.strip()
    targets = {int(x) for x in args.survivors.read_text().split()} if args.survivors else None
    args.outdir.mkdir(parents=True, exist_ok=True)
    out = []
    w = out.append

    # ---- per run ------------------------------------------------------------
    rows = []
    for r in runs:
        types = Counter(TYPE_NAMES.get(k["status"], k["status"]) for k in r["kills"])
        ok = sum(1 for p in r["programs"] if p.get("outcome") == "ok")
        n = len(r["status"])
        rows.append({
            "run": r["name"], "master_seed": r["master_seed"], "programs": len(r["programs"]),
            "programs_ok": ok, "hours": round(r["hours"], 2), "kills": n,
            "mismatch": types.get("mismatch", 0), "crash": types.get("crash", 0),
            "timeout": types.get("timeout", 0),
            "pct_survivors_killed": round(100 * n / len(targets), 2) if targets else "",
            "kills_per_hour": round(n / r["hours"], 2) if r["hours"] else "",
            "programs_with_kill": sum(1 for p in r["programs"] if p.get("kills")),
        })
    with (args.outdir / "per_run.csv").open("w", newline="") as f:
        cw = csv.DictWriter(f, fieldnames=list(rows[0]))
        cw.writeheader()
        cw.writerows(rows)

    w(f"PER RUN ({len(runs)} runs" + (f", {len(targets):,} target survivors)" if targets else ")"))
    w(f"  {'run':<14}{'programs':>9}{'hours':>7}{'kills':>7}{'mism':>6}{'crash':>6}{'tmout':>6}"
      f"{'%killed':>9}{'kills/h':>8}  master seed")
    for row in rows:
        w(f"  {row['run']:<14}{row['programs']:>9,}{row['hours']:>7.1f}{row['kills']:>7,}{row['mismatch']:>6}"
          f"{row['crash']:>6}{row['timeout']:>6}{str(row['pct_survivors_killed']):>9}"
          f"{str(row['kills_per_hour']):>8}  {row['master_seed']}")
    for key in ("programs", "kills"):
        vals = [row[key] for row in rows]
        w(f"  {key}: mean {statistics.mean(vals):,.1f}, median {statistics.median(vals):,.1f}, "
          f"range {min(vals):,}-{max(vals):,}" +
          (f", sd {statistics.stdev(vals):,.1f}" if len(vals) > 1 else ""))
    w("")

    # ---- kills over time ----------------------------------------------------
    max_h = max(r["hours"] for r in runs)
    steps = [i / 4 for i in range(int(max_h * 4) + 2)]
    curves = {r["name"]: [sum(1 for t in r["kill_times"] if t <= h) for h in steps] for r in runs}
    with (args.outdir / "kills_over_time.csv").open("w", newline="") as f:
        cw = csv.writer(f)
        cw.writerow(["hours"] + list(curves))
        for i, h in enumerate(steps):
            cw.writerow([h] + [curves[name][i] for name in curves])
    w("KILLS OVER TIME (cumulative)")
    marks = [h for h in (1, 3, 6, 12, 24, 36, 48, 60, 72, 96) if h <= max_h + 0.01]
    w(f"  {'run':<14}" + "".join(f"{str(h) + ' h':>8}" for h in marks))
    for r in runs:
        w(f"  {r['name']:<14}" + "".join(f"{sum(1 for t in r['kill_times'] if t <= h):>8,}" for h in marks))
    w("")

    # ---- periods between split points (e.g. each 24 h session) ---------------
    splits = sorted(float(x) for x in str(args.split_hours).split(",") if x.strip() and float(x) > 0)
    splits = [s for s in splits if max_h > s + 2]          # ignore points past the end of the runs
    if splits:
        bounds = [0.0] + splits + [float("inf")]
        names = [f"{a:g}-{b:g} h" if b != float("inf") else f"{a:g} h-end"
                 for a, b in zip(bounds, bounds[1:])]
        w(f"PER PERIOD (split at {', '.join(f'{s:g}' for s in splits)} h of fuzzing time, "
          f"by when each program finished)")
        w("  kills (kills per hour)")
        w(f"  {'run':<14}" + "".join(f"{n:>18}" for n in names))
        period_tot = [0] * len(names)
        for r in runs:
            cells = []
            for i, (a, b) in enumerate(zip(bounds, bounds[1:])):
                k = sum(1 for x in r["kill_times"] if a < x <= b or (a == 0 and x == 0))
                length = (min(b, r["hours"]) - a)
                period_tot[i] += k
                cells.append(f"{k:,} ({k / length:.1f}/h)" if length > 0 else "-")
            w(f"  {r['name']:<14}" + "".join(f"{c:>18}" for c in cells))
        w(f"  {'all runs':<14}" + "".join(f"{k:>18,}" for k in period_tot))
        w("  programs")
        w(f"  {'run':<14}" + "".join(f"{n:>18}" for n in names))
        for r in runs:
            w(f"  {r['name']:<14}" + "".join(
                f"{sum(1 for x in r['program_times'] if a < x <= b):>18,}" for a, b in zip(bounds, bounds[1:])))
        unions = []
        for s in splits:
            unions.append((f"{s:g} h", len(set.union(*({m for m, h in r["kill_hour"].items() if h <= s}
                                                        for r in runs)))))
        unions.append(("end", len(set.union(*(set(r["status"]) for r in runs)))))
        w("  union across runs: " + " -> ".join(f"{n:,} at {label}" for label, n in unions))
        w("")

    # ---- variation across runs ----------------------------------------------
    sets = [set(r["status"]) for r in runs]
    union, inter = set.union(*sets), set.intersection(*sets)
    w("VARIATION ACROSS RUNS")
    w(f"  union (killed by any run):   {len(union):,}" +
      (f"  ({100 * len(union) / len(targets):.1f}% of survivors)" if targets else ""))
    w(f"  intersection (by every run): {len(inter):,}")
    disagree = sum(1 for m in union if len({r['status'][m] for r in runs if m in r['status']}) > 1)
    w(f"  killed in several runs with different kill types: {disagree:,}")

    with (args.outdir / "mutants.csv").open("w", newline="") as f:
        cw = csv.writer(f)
        cw.writerow(["mutant_id", "runs_killing"] + [r["name"] for r in runs])
        for m in sorted(union, key=lambda m: (-sum(m in s for s in sets), m)):
            cw.writerow([m, sum(m in s for s in sets)] +
                        [TYPE_NAMES.get(r["status"].get(m, ""), r["status"].get(m, "")) for r in runs])

    summary = "\n".join(out)
    (args.outdir / "summary.txt").write_text(summary + "\n")
    print(summary)

    # ---- chart --------------------------------------------------------------
    try:
        import matplotlib
        matplotlib.use("Agg")
        import matplotlib.pyplot as plt
    except ImportError:
        print("\n(matplotlib not installed: skipped kills_over_time.png; the CSV has the data)")
        return
    fig, ax = plt.subplots(figsize=(8, 4.5), dpi=150)
    fig.patch.set_facecolor(SURFACE)
    ax.set_facecolor(SURFACE)
    ends = []
    for idx, r in enumerate(runs):
        colour = SERIES[idx % len(SERIES)] if len(runs) <= len(SERIES) else INK_2
        ys = curves[r["name"]]
        ax.step(steps, ys, where="post", color=colour, linewidth=2, label=r["name"])
        ends.append([ys[-1], ys[-1], r["name"]])
    # Direct labels at the line ends, in ink, nudged apart so they never overlap.
    top = max(max(c) for c in curves.values()) or 1
    gap = 0.045 * top
    ytop = top * 1.08
    ends.sort()
    for i in range(1, len(ends)):                      # push up to make room ...
        ends[i][1] = max(ends[i][1], ends[i - 1][1] + gap)
    if ends and ends[-1][1] > ytop - gap / 2:         # ... but stay inside the plot
        ends[-1][1] = ytop - gap / 2
        for i in range(len(ends) - 2, -1, -1):
            ends[i][1] = min(ends[i][1], ends[i + 1][1] - gap)
    for y, label_y, name in ends:
        ax.annotate(f"{name}  {y:,}", xy=(steps[-1], y), xytext=(steps[-1] + 0.3, label_y),
                    textcoords="data", va="center", fontsize=8, color=INK_2, annotation_clip=False)
    for s in splits:
        ax.axvline(s, color=AXIS, linewidth=1, linestyle=(0, (4, 3)), zorder=0)
        ax.annotate(f"resumed at {s:g} h", xy=(s, 0), xytext=(4, 4), textcoords="offset points",
                    fontsize=8, color=MUTED)
    ax.set_xlabel("Fuzzing time (hours)", color=INK_2)
    ax.set_ylabel("CTS survivors killed (cumulative)", color=INK_2)
    ax.set_title("Kills over time, per fuzzing run", color=INK, loc="left", fontsize=11)
    ax.grid(axis="y", color=GRID, linewidth=0.6)
    ax.set_axisbelow(True)
    for side in ("top", "right"):
        ax.spines[side].set_visible(False)
    for side in ("left", "bottom"):
        ax.spines[side].set_color(AXIS)
    ax.tick_params(colors=MUTED, labelsize=8)
    ax.set_xlim(0, steps[-1])
    ax.set_ylim(0, ytop)
    ax.legend(frameon=False, fontsize=8, labelcolor=INK_2, loc="upper left")
    fig.tight_layout(rect=(0, 0, 0.9, 1))   # room on the right for the end labels
    fig.savefig(args.outdir / "kills_over_time.png", facecolor=SURFACE)
    print(f"\nWrote {args.outdir / 'kills_over_time.png'}")


if __name__ == "__main__":
    main()