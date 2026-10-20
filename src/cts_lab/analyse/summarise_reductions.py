#!/usr/bin/env python3
"""Summarise a batch of reductions (reduce.py) -- safe to run while it is still going.

Usage: summarise_reductions.py results/reduce-batch [--kills results/fuzz/run1/kills.jsonl]
"""

import argparse
import json
from collections import Counter
from pathlib import Path


def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("outdir", type=Path)
    p.add_argument("--kills", type=Path, help="fuzz kills.jsonl, to report how many kills are covered")
    args = p.parse_args()

    rows = []
    for line in (args.outdir / "reductions.jsonl").read_text().splitlines():
        try:
            rows.append(json.loads(line))
        except json.JSONDecodeError:
            pass
    if not rows:
        raise SystemExit("no finished reductions yet")

    ok = [r for r in rows if r.get("status", "").startswith("KILL") and r.get("deterministic")]
    print(f"REDUCTIONS: {len(rows)} finished, {len(ok)} verified (still kill, deterministic)")
    print(f"  by mode: {dict(Counter(r['mode'] for r in rows))}")
    bad = [r for r in rows if r not in ok]
    for r in bad:
        print(f"  check by hand: mutant {r['mutant_id']}: status={r.get('status')} "
              f"deterministic={r.get('deterministic')}")

    total_h = sum(r.get("reduce_seconds", 0) for r in rows) / 3600
    print(f"  total reduction time {total_h:.1f} h, "
          f"mean {total_h * 60 / len(rows):.0f} min per kill")

    covered = set()
    for r in rows:
        covered.add(r["mutant_id"])
        covered |= {int(m) for m in r.get("also_kills", {})}
    if args.kills:
        kills = {json.loads(l)["mutant_id"] for l in args.kills.read_text().splitlines() if l.strip()}
        print(f"  kills covered by these programs: {len(covered & kills)} of {len(kills)} "
              f"({len(covered) - len(covered & kills)} more survivors killed that fuzzing hadn't)")
    else:
        print(f"  mutants killed by these programs: {len(covered)}")

    print()
    print(f"{'mutant':>8} {'mode':>8} {'start':>7} " + " ".join(f"{s:>7}" for s in ("perses", "cvise", "wgsl"))
          + f" {'lines':>6} {'also':>5}  status")
    for r in sorted(rows, key=lambda r: r.get("final_lines", 0)):
        stages = {s["reducer"]: s["bytes_after"] for s in r.get("stages", [])}
        start = r["stages"][0]["bytes_before"] if r.get("stages") else 0
        cells = " ".join(f"{stages.get(s, ''):>7}" for s in ("perses", "cvise", "wgsl"))
        print(f"{r['mutant_id']:>8} {r['mode']:>8} {start:>7} {cells} {r.get('final_lines', ''):>6} "
              f"{len(r.get('also_kills', {})):>5}  {r.get('status')}")


if __name__ == "__main__":
    main()