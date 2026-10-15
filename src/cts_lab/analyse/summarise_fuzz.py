#!/usr/bin/env python3
"""Summarise a wgslsmith fuzzing kill run -- safe to run while it is still going.

Reads <run-dir>/programs.jsonl and kills.jsonl (both append-only; a half-written
last line is skipped) and prints:
  - how many programs were tried, and why some were skipped
  - how many survivors each program reached
  - kills by type, with data vs padding-only for output mismatches
  - how kills accumulated over the run (is it still finding new ones?)
  - a few output-mismatch kills to look at by hand

Usage:
  summarise_fuzz.py results/fuzz/run1 [--survivors results/mutant-killing/first-pass/survivors.txt]
    (--survivors gives the "killed X of Y CTS survivors" percentage)
"""

import argparse
import json
from collections import Counter
from pathlib import Path


def read_jsonl(path: Path) -> list[dict]:
    if not path.exists():
        return []
    rows = []
    for line in path.read_text().splitlines():
        try:
            rows.append(json.loads(line))
        except json.JSONDecodeError:
            pass  # last line may be mid-write
    return rows


def pct(part: int, whole: int) -> str:
    return f"{part / whole:.1%}" if whole else "-"


def hours(seconds: float) -> str:
    return f"{seconds / 3600:.1f} h" if seconds >= 3600 else f"{seconds / 60:.0f} min"


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("run_dir", type=Path)
    p.add_argument("--survivors", type=Path, nargs="*", help="CTS survivors file(s) used for the run")
    p.add_argument("--examples", type=int, default=5, help="how many mismatch kills to list")
    args = p.parse_args()

    programs = read_jsonl(args.run_dir / "programs.jsonl")
    kills = read_jsonl(args.run_dir / "kills.jsonl")
    if not programs and not kills:
        raise SystemExit(f"No programs.jsonl / kills.jsonl in {args.run_dir} yet")

    targets = None
    if args.survivors:
        targets = set()
        for f in args.survivors:
            targets |= {int(x) for x in f.read_text().split()}

    out = []
    w = out.append

    # ---- programs --------------------------------------------------------
    outcomes = Counter(r["outcome"] for r in programs)
    ok = [r for r in programs if r["outcome"] == "ok"]
    total_s = sum(r.get("seconds", 0) for r in programs)
    w(f"PROGRAMS: {len(programs):,} finished, {hours(total_s)} of fuzzing "
      f"(avg {total_s / max(len(programs), 1):.0f} s per program)")
    labels = {"ok": "ran normally", "nondeterministic": "skipped: output differed between two runs",
              "gen_failed": "skipped: generation failed", "tracking_failed": "skipped: tracking run failed"}
    for outcome, c in outcomes.most_common():
        label = labels.get(outcome, "skipped: unmutated run " + outcome.removeprefix("baseline_")
                           if outcome.startswith("baseline_") else outcome)
        w(f"  {c:>7,}  {pct(c, len(programs)):>6}  {label}")
    w("")

    if ok:
        cands = [r["candidates"] for r in ok]
        reached = sorted(r["reached"] for r in ok)
        w("SURVIVORS REACHED PER PROGRAM (programs that ran normally)")
        w(f"  Mutants reached per program: median {reached[len(reached) // 2]:,}")
        w(f"  Survivors tried per program:  mean {sum(cands) / len(cands):.1f}, max {max(cands)}")
        buckets = [("0", lambda c: c == 0), ("1-5", lambda c: 1 <= c <= 5),
                   ("6-20", lambda c: 6 <= c <= 20), ("21-100", lambda c: 21 <= c <= 100),
                   ("over 100", lambda c: c > 100)]
        for name, test in buckets:
            n = sum(1 for c in cands if test(c))
            if n:
                w(f"    {name:>8} survivors: {n:>6,} programs  {pct(n, len(ok)):>6}")
        with_kill = sum(1 for r in ok if r.get("kills"))
        w(f"  Programs that killed at least one survivor: {with_kill:,} ({pct(with_kill, len(ok))})")
        w("")

    # ---- kills -----------------------------------------------------------
    killed = {k["mutant_id"] for k in kills}
    status = Counter(k["status"] for k in kills)
    headline = f"KILLS: {len(killed):,} survivors killed"
    if targets:
        headline += f" out of {len(targets):,} CTS survivors ({pct(len(killed & targets), len(targets))})"
    w(headline)
    names = {"KILL_CRASH": "crash", "KILL_TIMEOUT": "timeout", "KILL_OUTPUT_MISMATCH": "output mismatch"}
    for s, c in status.most_common():
        w(f"  {c:>7,}  {pct(c, len(kills)):>6}  {names.get(s, s)}")
    mism = [k for k in kills if k["status"] == "KILL_OUTPUT_MISMATCH"]
    if mism:
        pad = Counter(k.get("padding_only") for k in mism)
        w(f"  Output mismatches: {pad.get(False, 0):,} in data, {pad.get(True, 0):,} padding only"
          + (f", {pad[None]:,} layout unknown (check by hand)" if pad.get(None) else ""))
    w("")

    # ---- progress over the run -------------------------------------------
    if len(programs) >= 4:
        seed_order = [r["seed"] for r in programs]
        position = {s: i for i, s in enumerate(seed_order)}
        kill_pos = sorted(position[k["seed"]] for k in kills if k["seed"] in position)
        w("KILLS OVER THE RUN (cumulative)")
        for q in (0.25, 0.5, 0.75, 1.0):
            upto = int(len(programs) * q)
            n = sum(1 for kp in kill_pos if kp < upto)
            w(f"  after {upto:>6,} programs ({int(q * 100):>3}%): {n:>6,} kills")
        last = programs[-max(1, len(programs) // 10):]
        recent = sum(len(r.get("kills", [])) for r in last)
        w(f"  last {len(last):,} programs: {recent:,} new kills")
        w("")

    # ---- examples --------------------------------------------------------
    data = [k for k in mism if k.get("padding_only") is False]
    if data:
        w(f"OUTPUT-MISMATCH KILLS IN DATA (first {min(args.examples, len(data))} of {len(data)})")
        for k in data[:args.examples]:
            diffs = "; ".join(f"buffer {b}: bytes {v[:8]}{'...' if len(v) > 8 else ''}"
                              for b, v in k.get("diff_bytes", {}).items())
            w(f"  mutant ID {k['mutant_id']} (seed {k['seed']}): {diffs}")
            w(f"    evidence: {k['evidence']}")

    print("\n".join(out))


if __name__ == "__main__":
    main()