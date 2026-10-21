#!/usr/bin/env python3
"""Combine repeated CTS kill runs: which mutants survive in every run?

Each run directory is a kill run's output (results.jsonl from kill_cts.py; one
JSON record per mutant with its KillStatus name). Runs may have stopped at
different points (e.g. a 24 h limit), so a mutant only counts as a consistent
survivor if *every* run evaluated it and every run says SURVIVED.

Writes, in --outdir:
  survivors.txt       mutants that SURVIVED in all runs  -> input for the fuzzing loop
  killed.txt          mutants killed in all runs
  inconsistent.csv    mutants killed in some runs and surviving in others (flaky kills)
  summary.txt         per-run and combined counts

Usage:
  combine_survivors.py results/cts-survival/run{1..5} --outdir results/cts-survival/combined
  [--mapping merged.json]   also report how much of the mapping every run covered
"""

import argparse
import csv
import json
from collections import Counter
from pathlib import Path

SURVIVED = "SURVIVED"
NO_VALID = "NO_VALID_TESTS"


def read_results(run_dir: Path) -> dict[int, dict]:
    """mutant -> record. Skips a half-written last line; later records win."""
    recs = {}
    with (run_dir / "results.jsonl").open() as f:
        for line in f:
            try:
                r = json.loads(line)
            except json.JSONDecodeError:
                continue
            recs[int(r["mutant_id"])] = r
    return recs


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("runs", type=Path, nargs="+", help="kill run directories (each with results.jsonl)")
    p.add_argument("--outdir", type=Path, required=True)
    p.add_argument("--mapping", type=Path, help="the mapping the runs used, to report coverage")
    args = p.parse_args()

    runs = [read_results(d) for d in args.runs]
    lines = []
    w = lines.append

    w(f"Combining {len(runs)} CTS kill runs")
    for d, r in zip(args.runs, runs):
        c = Counter(x["status"] for x in r.values())
        killed = sum(n for s, n in c.items() if s.startswith("KILL"))
        w(f"  {d}: {len(r):,} evaluated, {killed:,} killed, {c.get(SURVIVED, 0):,} survived, "
          f"{c.get(NO_VALID, 0):,} no valid tests")

    in_all = set.intersection(*(set(r) for r in runs))
    in_any = set.union(*(set(r) for r in runs))
    w("")
    w(f"Evaluated in every run: {len(in_all):,}   (in at least one run: {len(in_any):,}; "
      f"{len(in_any) - len(in_all):,} only in some runs are left out)")

    statuses = {m: [r[m]["status"] for r in runs] for m in in_all}
    survived_all = sorted(m for m, s in statuses.items() if all(x == SURVIVED for x in s))
    killed_all = sorted(m for m, s in statuses.items() if all(x.startswith("KILL") for x in s))
    no_valid = sorted(m for m, s in statuses.items() if any(x == NO_VALID for x in s))
    mixed = sorted(m for m in in_all
                   if m not in set(survived_all) | set(killed_all) | set(no_valid))

    w(f"  survived in all runs:          {len(survived_all):,}  -> survivors.txt")
    w(f"  killed in all runs:            {len(killed_all):,}")
    w(f"  killed in some, survived in others (inconsistent): {len(mixed):,}  -> inconsistent.csv")
    w(f"  no valid tests in some run:    {len(no_valid):,}")
    if mixed:
        kinds = Counter(x for m in mixed for x in statuses[m] if x != SURVIVED)
        w(f"    kill types among the inconsistent ones: {dict(kinds)}")

    if args.mapping:
        mapping = json.loads(args.mapping.read_text())
        w("")
        w(f"Mapping {args.mapping}: {len(mapping):,} mutants; every run covered {len(in_all):,} "
          f"({len(in_all) / max(len(mapping), 1):.1%})")
        if in_all:
            reach = sorted(len(mapping[str(m)]) for m in in_all if str(m) in mapping)
            if reach:
                w(f"  evaluated-in-all mutants are reached by {reach[0]}-{reach[-1]} tests")

    args.outdir.mkdir(parents=True, exist_ok=True)
    (args.outdir / "survivors.txt").write_text("".join(f"{m}\n" for m in survived_all))
    (args.outdir / "killed.txt").write_text("".join(f"{m}\n" for m in killed_all))
    with (args.outdir / "inconsistent.csv").open("w", newline="") as f:
        cw = csv.writer(f)
        cw.writerow(["mutant_id"] + [f"run{i}" for i in range(len(runs))] + ["killed_by"])
        for m in mixed:
            by = sorted({r[m].get("killed_by") or "" for r in runs} - {""})
            cw.writerow([m] + statuses[m] + [" | ".join(by)])
    summary = "\n".join(lines)
    (args.outdir / "summary.txt").write_text(summary + "\n")
    print(summary)


if __name__ == "__main__":
    main()