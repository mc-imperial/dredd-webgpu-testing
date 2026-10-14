#!/usr/bin/env python3
"""Summarise a CTS mutant-killing run.

Reads results.jsonl (and baselines.json, if present) from one or more kill-run
directories (e.g. one per shard) and prints:
  - how many mutants were killed / survived, and the mutation score
  - how they were killed (fail / crash / timeout)
  - kill rate by how many tests reach the mutant
  - which tests kill the most mutants
  - how long it took
  - baseline problems (tests that didn't pass without a mutant)

The summary is also written to <first dir>/summary.txt.

Usage:
  summarise_kills.py results/mutant-killing/first-pass [more dirs ...]
  summarise_kills.py results/mutant-killing/first-pass --mapping <mapping.json>
    (--mapping adds how many mutants in the mapping haven't been run yet)
"""

import argparse
import json
from collections import Counter
from pathlib import Path

KILL_TYPES = {
    "KILL_TEST_FAILURE": "test failed",
    "KILL_CRASH": "crashed",
    "KILL_TIMEOUT": "timed out",
}
# Same ranges as the reachability summary, so the two can be compared.
RANGES = [(1, 1), (2, 2), (3, 5), (6, 10), (11, 20), (21, 50), (51, 100),
          (101, 200), (201, 500), (501, 1000), (1001, None)]


def pct(part: int, whole: int) -> str:
    return f"{part / whole:6.1%}" if whole else "     -"


def hours(seconds: float) -> str:
    return f"{seconds / 3600:.1f} h" if seconds >= 3600 else f"{seconds / 60:.1f} min"


def load(dirs: list[Path]) -> tuple[dict[int, dict], dict[str, dict]]:
    results: dict[int, dict] = {}
    baselines: dict[str, dict] = {}
    for d in dirs:
        rf = d / "results.jsonl"
        if not rf.exists():
            raise SystemExit(f"No results.jsonl in {d}")
        for line in rf.read_text().splitlines():
            if line.strip():
                r = json.loads(line)
                results[r["mutant_id"]] = r  # a mutant seen twice: keep the latest
        bf = d / "baselines.json"
        if bf.exists():
            baselines.update(json.loads(bf.read_text()))
    return results, baselines


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("run_dirs", type=Path, nargs="+")
    p.add_argument("--mapping", type=Path, help="mapping used for the run, to report mutants not yet run")
    p.add_argument("--top", type=int, default=10, help="how many top killing tests to list")
    args = p.parse_args()

    results, baselines = load(args.run_dirs)
    rs = list(results.values())
    status = Counter(r["status"] for r in rs)

    killed = sum(c for s, c in status.items() if s.startswith("KILL_"))
    survived = status.get("SURVIVED", 0)
    no_valid = status.get("NO_VALID_TESTS", 0)
    decided = killed + survived

    out = []
    w = out.append

    w(f"Mutants run: {len(rs):,}")
    if args.mapping:
        in_mapping = len(json.loads(args.mapping.read_text()))
        w(f"  ({len(rs) / in_mapping:.1%} of the {in_mapping:,} in the mapping; "
          f"{in_mapping - len(rs):,} not run yet)")
    w("")
    w("OUTCOME")
    w(f"  Killed:          {killed:>8,}  {pct(killed, len(rs))}")
    w(f"  Survived:        {survived:>8,}  {pct(survived, len(rs))}")
    w(f"  No valid tests:  {no_valid:>8,}  {pct(no_valid, len(rs))}"
      "   (no reaching test passed without the mutant)")
    w("")
    w(f"  Mutation score:  {pct(killed, decided).strip()}  "
      f"= killed / (killed + survived) = {killed:,} / {decided:,}")
    w("")

    w("HOW MUTANTS WERE KILLED")
    for s, label in KILL_TYPES.items():
        c = status.get(s, 0)
        w(f"  {label:<14} {c:>8,}  {pct(c, killed)} of kills")
    w("")

    w("KILL RATE BY NUMBER OF TESTS REACHING THE MUTANT")
    w(f"  {'tests reaching':>14}  {'run':>8}  {'killed':>8}  {'survived':>8}  {'no valid':>8}  {'score':>6}")
    for lo, hi in RANGES:
        group = [r for r in rs if r["tests_reaching"] >= lo and (hi is None or r["tests_reaching"] <= hi)]
        if not group:
            continue
        g = Counter(r["status"] for r in group)
        gk = sum(c for s, c in g.items() if s.startswith("KILL_"))
        gs = g.get("SURVIVED", 0)
        label = str(lo) if lo == hi else (f"{lo}+" if hi is None else f"{lo}-{hi}")
        w(f"  {label:>14}  {len(group):>8,}  {gk:>8,}  {gs:>8,}  {g.get('NO_VALID_TESTS', 0):>8,}  "
          f"{pct(gk, gk + gs)}")
    w("  (score = killed / (killed + survived) within that row)")
    w("")

    killers = Counter(r["killed_by"] for r in rs if r.get("killed_by"))
    if killers:
        w(f"TESTS THAT KILLED THE MOST MUTANTS (top {args.top})")
        for test, c in killers.most_common(args.top):
            w(f"  {c:>6,}  {test}")
        w(f"  ({len(killers):,} different tests killed at least one mutant)")
        w("")

    total_s = sum(r.get("seconds", 0) for r in rs)
    tests_run = sum(r.get("tests_run", 0) for r in rs)
    w("TIME")
    w(f"  Total mutant time: {hours(total_s)}  (excludes one-off baseline runs)")
    w(f"  Mutated test runs: {tests_run:,}  (avg {tests_run / len(rs):.1f} per mutant)" if rs else "")
    for s in ["SURVIVED", *KILL_TYPES]:
        sec = [r["seconds"] for r in rs if r["status"] == s]
        if sec:
            w(f"  {s:<18} avg {sum(sec) / len(sec):6.1f} s per mutant, total {hours(sum(sec))}")
    w("")

    if baselines:
        b = Counter(v["status"] for v in baselines.values())
        bad = {s: c for s, c in b.items() if s != "pass"}
        w(f"BASELINES (tests run without a mutant): {len(baselines):,}")
        w(f"  passed: {b.get('pass', 0):,}")
        for s, c in sorted(bad.items(), key=lambda x: -x[1]):
            w(f"  {s}: {c:,}")
        if bad:
            w("  (only tests that passed can kill a mutant; not_found means the test name didn't match)")

    text = "\n".join(out)
    print(text)
    summary = args.run_dirs[0] / "summary.txt"
    summary.write_text(text + "\n")
    print(f"\nWrote {summary}")


if __name__ == "__main__":
    main()