#!/usr/bin/env python3
"""RQ1(b): kill rate by number of reaching tests, with the runs' time shown behind.

Reads each CTS kill run's results.jsonl (one record per evaluated mutant, in the
order the run evaluated them: mutant_id, status, killed_by, tests_reaching,
tests_run, seconds). Writes, in --out-dir:

  rq1b_killrate.pdf (+.png)  kill rate for each number of reaching tests, with
                             95% Wilson intervals (long bars = few mutants). Thin
                             vertical lines mark each hour of run time (darker
                             every 6 hours, labelled on the top axis), averaged
                             across runs: they show where the runs spent their time.
  rq1b_killrate_macros.tex   overall kill rate; lowest and highest kill rate among
                             counts with at least --min-mutants mutants; a
                             Cochran-Armitage trend test on log2(reaching tests);
                             time to evaluate a mutant, killed vs survived

Kill rates use the mutants evaluated by every run with the same outcome in every
run (killed in all, or survived in all), as in the survival table; mutants with
no valid tests, or inconsistent outcomes, are left out. Times use every record of
every run.

A record counts as killed if killed_by is set or its status starts with KILL,
as survived if its status is SURVIVED, and as neither otherwise.

Usage:
  python3 icst_2027_experiments/gen_rq1b_killrate.py \
      results/cts-survival/twenty-four-hours/run*_24h --out-dir icst_2027_experiments/generated
"""
import argparse
import collections
import json
import math
import statistics
from pathlib import Path


def outcome(rec):
    if rec.get("killed_by") or str(rec.get("status", "")).startswith("KILL"):
        return "killed"
    if rec.get("status") == "SURVIVED":
        return "survived"
    return "other"


def read_run(d):
    recs = [json.loads(line) for line in open(d / "results.jsonl") if line.strip()]
    if not recs:
        raise SystemExit(f"{d}: empty results.jsonl")
    return recs


def hour_positions(recs, max_hours):
    """x position (in reaching tests) where each whole hour of run time ended.

    Mutants with k reaching tests occupy the slot [k - 0.5, k + 0.5); within it
    they sit in evaluation order, evenly spaced."""
    n_at = collections.Counter(r["tests_reaching"] for r in recs)
    seen = collections.Counter()
    pos, t, h = [], 0.0, 1
    for r in recs:
        k = r["tests_reaching"]
        seen[k] += 1
        t += r["seconds"]
        while h <= max_hours and t >= h * 3600:
            pos.append(k - 0.5 + seen[k] / n_at[k])
            h += 1
    return pos


def wilson(k, n, z=1.96):
    """95% Wilson score interval for k successes out of n, in percent."""
    p = k / n
    d = 1 + z * z / n
    c = (p + z * z / (2 * n)) / d
    h = z * math.sqrt(p * (1 - p) / n + z * z / (4 * n * n)) / d
    return 100 * (c - h), 100 * (c + h)


def trend_test(xs, killed, total):
    """Cochran-Armitage test for a trend in kill rate, scores log2(reaching tests)."""
    s = {k: math.log2(k) for k in xs}
    N = sum(total[k] for k in xs)
    pbar = sum(killed[k] for k in xs) / N
    T = sum(s[k] * (killed[k] - total[k] * pbar) for k in xs)
    var = pbar * (1 - pbar) * (sum(total[k] * s[k] ** 2 for k in xs) - sum(total[k] * s[k] for k in xs) ** 2 / N)
    z = T / math.sqrt(var) if var > 0 else 0.0
    return z, math.erfc(abs(z) / math.sqrt(2))


def fmt_int(n):
    return f"{n:,}".replace(",", "{,}")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("runs", nargs="+", type=Path, help="run folders containing results.jsonl")
    ap.add_argument("--out-dir", type=Path, required=True)
    ap.add_argument("--min-mutants", type=int, default=100,
                    help="only counts with at least this many mutants are used for the lowest/highest kill rate")
    args = ap.parse_args()

    runs = {d: read_run(d) for d in sorted(args.runs)}
    for d, recs in runs.items():
        hours = sum(r["seconds"] for r in recs) / 3600
        print(f"{d}: {len(recs):,} mutants, {hours:.1f} h of evaluation time, "
              f"reaching tests up to {max(r['tests_reaching'] for r in recs)}")

    # ---- kill rate per number of reaching tests (consistent outcomes only) ----
    per_mutant = collections.defaultdict(list)
    reaching = {}
    for recs in runs.values():
        for r in recs:
            per_mutant[r["mutant_id"]].append(outcome(r))
            reaching[r["mutant_id"]] = r["tests_reaching"]
    killed, total = collections.Counter(), collections.Counter()
    for m, outs in per_mutant.items():
        if len(outs) == len(runs) and len(set(outs)) == 1 and outs[0] != "other":
            total[reaching[m]] += 1
            killed[reaching[m]] += outs[0] == "killed"
    xs = sorted(total)
    rates = [100.0 * killed[k] / total[k] for k in xs]
    print("\nreaching tests: mutants (consistent outcome), kill rate")
    for k, rate in zip(xs, rates):
        print(f"  {k:>3}: {total[k]:>6,}  {rate:5.1f}%")

    # ---- hour boundaries, averaged across runs ----
    max_hours = int(min(sum(r["seconds"] for r in recs) for recs in runs.values()) // 3600)
    per_run = [hour_positions(recs, max_hours) for recs in runs.values()]
    bounds = [statistics.mean(p[h] for p in per_run) for h in range(max_hours)]
    print(f"\nhour boundaries (mean over runs, in reaching tests): "
          + ", ".join(f"{h + 1}h={b:.1f}" for h, b in enumerate(bounds)))

    # ---- trend test and the range of kill rates ----
    # Cochran-Armitage test for a trend in kill rate with log2(reaching tests).
    z, pval = trend_test(xs, killed, total)
    overall = 100.0 * sum(killed.values()) / sum(total.values())
    big = [k for k in xs if total[k] >= args.min_mutants]
    kmin = min(big, key=lambda k: killed[k] / total[k])
    kmax = max(big, key=lambda k: killed[k] / total[k])
    print(f"\noverall kill rate {overall:.1f}%; among counts with >= {args.min_mutants} mutants: "
          f"lowest {100 * killed[kmin] / total[kmin]:.1f}% ({kmin} tests), "
          f"highest {100 * killed[kmax] / total[kmax]:.1f}% ({kmax} tests)")
    print(f"Cochran-Armitage trend on log2(reaching tests): z = {z:.2f}, p = {pval:.3g}")

    # ---- figure ----
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt

    plt.rcParams.update({"font.size": 7, "pdf.fonttype": 42})
    fig, ax = plt.subplots(figsize=(3.5, 2.2))
    for h, b in enumerate(bounds, 1):
        ax.axvline(b, color="0.55" if h % 6 == 0 else "0.85", lw=0.6 if h % 6 == 0 else 0.4, zorder=0)
    cis = [wilson(killed[k], total[k]) for k in xs]
    err = [[r - c[0] for r, c in zip(rates, cis)], [c[1] - r for r, c in zip(rates, cis)]]
    ax.errorbar(xs, rates, yerr=err, color="0.1", lw=1.0, marker="o", markersize=2.2,
                elinewidth=0.6, ecolor="0.5", capsize=0, zorder=3)
    ax.set_xlim(0.5, max(max(xs), bounds[-1] if bounds else 1) + 0.5)
    ax.set_ylim(0, 100)
    ax.set_xlabel("Tests reaching the mutant")
    ax.set_ylabel("Kill rate (%)")
    ax.spines[["top", "right"]].set_visible(False)
    top = ax.secondary_xaxis("top")
    marks = [h for h in range(6, max_hours + 1, 6)]
    top.set_xticks([bounds[h - 1] for h in marks])
    top.set_xticklabels([f"{h} h" for h in marks])
    top.tick_params(length=2, pad=1)
    top.spines["top"].set_visible(False)
    fig.tight_layout()
    args.out_dir.mkdir(parents=True, exist_ok=True)
    fig.savefig(args.out_dir / "rq1b_killrate.pdf")
    fig.savefig(args.out_dir / "rq1b_killrate.png", dpi=200)
    plt.close(fig)

    # ---- time macros ----
    secs = {"killed": [], "survived": []}
    tests_run = {"killed": [], "survived": []}
    for recs in runs.values():
        for r in recs:
            o = outcome(r)
            if o in secs:
                secs[o].append(r["seconds"])
                tests_run[o].append(r["tests_run"])
    macros = ["% Generated by gen_rq1b_killrate.py -- do not edit by hand.",
              "% Seconds per mutant, over every evaluated mutant in every run",
              f"\\newcommand{{\\KillRateMaxHours}}{{{max_hours}}}"]
    macros += [f"\\newcommand{{\\KillRateOverall}}{{{overall:.1f}\\%}}",
               f"\\newcommand{{\\KillRateMinMutants}}{{{args.min_mutants}}}",
               f"\\newcommand{{\\KillRateLowest}}{{{100 * killed[kmin] / total[kmin]:.1f}\\%}}",
               f"\\newcommand{{\\KillRateLowestTests}}{{{kmin}}}",
               f"\\newcommand{{\\KillRateHighest}}{{{100 * killed[kmax] / total[kmax]:.1f}\\%}}",
               f"\\newcommand{{\\KillRateHighestTests}}{{{kmax}}}",
               f"\\newcommand{{\\KillRateTrendZ}}{{{z:.1f}}}",
               f"\\newcommand{{\\KillRateTrendP}}{{{'< 0.001' if pval < 0.001 else f'{pval:.2f}'}}}"]
    for o, name in (("killed", "Killed"), ("survived", "Survived")):
        s, t = secs[o], tests_run[o]
        print(f"{o}: {len(s):,} evaluations, mean {statistics.mean(s):.1f} s, median {statistics.median(s):.1f} s, "
              f"mean tests run {statistics.mean(t):.1f}")
        macros += [f"\\newcommand{{\\Surv{name}MeanSeconds}}{{{statistics.mean(s):.0f}}}",
                   f"\\newcommand{{\\Surv{name}MedianSeconds}}{{{statistics.median(s):.0f}}}",
                   f"\\newcommand{{\\Surv{name}MeanTestsRun}}{{{statistics.mean(t):.1f}}}"]
    # Which test killed a mutant, among killed mutants with a choice of tests
    # (reached by >= 2 tests), so the 1-test mutants cannot inflate "first test".
    multi = [r for recs in runs.values() for r in recs
             if outcome(r) == "killed" and r["tests_reaching"] >= 2]
    if multi:
        first = 100.0 * sum(1 for r in multi if r["tests_run"] == 1) / len(multi)
        frac = statistics.mean(r["tests_run"] / r["tests_reaching"] for r in multi)
        print(f"\nkilled with >= 2 reaching tests: {len(multi):,} evaluations, "
              f"median {statistics.median(r['tests_reaching'] for r in multi):.0f} reaching tests; "
              f"killed by the first test run {first:.1f}%; mean share of reaching tests run {100 * frac:.1f}%")
        print("  killed by first test, by reaching tests:")
        by_k = collections.defaultdict(list)
        for r in multi:
            by_k[r["tests_reaching"]].append(r["tests_run"] == 1)
        for k in sorted(by_k):
            print(f"    {k:>3}: {len(by_k[k]):>6,}  {100 * sum(by_k[k]) / len(by_k[k]):5.1f}%")
        macros += [f"\\newcommand{{\\SurvKilledMultiN}}{{{fmt_int(len(multi))}}}",
                   f"\\newcommand{{\\SurvKilledFirstTestPct}}{{{first:.1f}\\%}}",
                   f"\\newcommand{{\\SurvKilledShareRunPct}}{{{100 * frac:.1f}\\%}}"]
    (args.out_dir / "rq1b_killrate_macros.tex").write_text("\n".join(macros) + "\n")
    print(f"\nwrote rq1b_killrate.pdf, rq1b_killrate.png and rq1b_killrate_macros.tex to {args.out_dir}")


if __name__ == "__main__":
    main()