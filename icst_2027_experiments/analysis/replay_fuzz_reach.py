#!/usr/bin/env python3
"""Replay the programs of finished fuzzing trials to record which mutants each reached.

Older kill_fuzz.py runs saved only how many mutants each program reached
(`reached`) and how many targets (`candidates`), not which ones. This regenerates
each program from its recorded seed with kill_fuzz.py's own functions (same
wgslsmith, same --recondition and generator settings) and runs it once on the
tracking Mesa, as kill_fuzz.py did in its step 3.

Only programs whose original outcome was "ok" are replayed (the others never
reached the tracking step). Each replayed program is checked against the run:
its number of reached mutants must equal the recorded `reached`, and the targets
it reaches must be at least the recorded `candidates` (candidates excluded
targets already killed). Mismatches are counted and reported -- they would mean
the program or the build differs from the original run.

Output, one file per trial in --out-dir (rerunning resumes, skipping seeds done):
  <trial-label>.jsonl.gz   one line per program, in the original order:
      seed, index (position in the trial), elapsed_hours (cumulative run time of
      the original trial at the end of this program), reached (count),
      reached_targets (sorted IDs of reached targets), check ("ok" / why not),
      and, unless --no-full, reached_ids (sorted IDs of all mutants reached)
  summary.txt              per trial and overall: programs, check results, union of
                           reached targets, and of all reached mutants

Run inside the wgslsmith image, from the repository root (cts_lab importable):
  python3 icst_2027_experiments/analysis/replay_fuzz_reach.py \\
      results/fuzz/run_72h/cts5x72h-random-seed-*/cts5x72h-random-seed \\
      --targets results/cts-survival/combined/survivors.txt \\
      --out-dir results/fuzz/run_72h/replayed-reach --jobs 8
(wgslsmith and the tracking ICD default to the paths fuzz.sh uses; or use
icst_2027_experiments/mutant-killing/replay-reach.sh, which runs it in the container)
"""
import argparse
import concurrent.futures as cf
import gzip
import json
import os
import sys
import tempfile
import time
from pathlib import Path

from cts_lab.kill_fuzz import (SMALL_PROGRAM, FuzzSettings, generate, read_input,
                               reached_mutants)


def replay_one(settings: FuzzSettings, seed: int) -> tuple[set[int] | None, str]:
    with tempfile.TemporaryDirectory() as tmp:
        work = Path(tmp)
        prog = work / "prog.wgsl"
        ok, text = generate(settings, seed, prog)
        if not ok:
            return None, "gen_failed"
        reached = reached_mutants(settings, prog, read_input(prog), work)
        return (reached, "ok") if reached is not None else (None, "tracking_failed")


def work_item(args):
    settings, seed = args
    try:
        return seed, *replay_one(settings, seed)
    except Exception as e:  # one odd program must not stop the replay
        return seed, None, f"error: {type(e).__name__}: {e}"[:300]


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("trials", nargs="+", type=Path, help="kill_fuzz.py output folders (with programs.jsonl)")
    ap.add_argument("--targets", nargs="+", type=Path, required=True, help="the target list(s) the trials used")
    # Defaults as in icst_2027_experiments/mutant-killing/fuzz.sh (same environment overrides).
    ap.add_argument("--wgslsmith", type=Path,
                    default=Path(os.environ.get("WGSLSMITH_BIN", "/data/wgslsmith/target/release/wgslsmith")))
    ap.add_argument("--tracked-icd", type=Path, default=Path(os.environ.get(
        "TRACKED_ICD", "/data/mesa_tracked/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json")))
    ap.add_argument("--config", default="dawn:vk:0")
    ap.add_argument("--gen-arg", action="append", default=None,
                    help="generator settings, if the trials did not use kill_fuzz.py's SMALL_PROGRAM defaults")
    ap.add_argument("--labels", help="comma-separated trial labels (default R1, R2, ...)")
    ap.add_argument("--out-dir", type=Path, required=True)
    ap.add_argument("--jobs", type=int, default=8, help="programs replayed in parallel")
    ap.add_argument("--no-full", action="store_true", help="do not save the full set of reached mutants")
    ap.add_argument("--limit", type=int, help="replay only the first N programs per trial (for a trial run)")
    args = ap.parse_args()
    for f in (args.wgslsmith, args.tracked_icd):
        if not f.exists():
            sys.exit(f"not found: {f} (run inside the wgslsmith image, or pass --wgslsmith / --tracked-icd)")

    labels = args.labels.split(",") if args.labels else [f"R{i}" for i in range(1, len(args.trials) + 1)]
    if len(labels) != len(args.trials):
        sys.exit("--labels must give one label per trial")
    targets: set[int] = set()
    for f in args.targets:
        targets |= {int(x) for x in f.read_text().split()}
    settings = FuzzSettings(wgslsmith=args.wgslsmith, mutated_icd=args.tracked_icd,
                            tracked_icd=args.tracked_icd, config=args.config,
                            gen_args=args.gen_arg if args.gen_arg else list(SMALL_PROGRAM))
    args.out_dir.mkdir(parents=True, exist_ok=True)
    print(f"{len(targets):,} targets; generator settings: {' '.join(settings.gen_args)}", flush=True)

    summary = []
    all_targets_reached, all_reached = set(), set()
    for label, trial in zip(labels, args.trials):
        recs = [json.loads(l) for l in open(trial / "programs.jsonl") if l.strip()]
        elapsed, rows = 0.0, []
        for i, r in enumerate(recs):
            elapsed += r.get("seconds", 0.0)
            if r.get("outcome") == "ok":
                rows.append((i, r, elapsed / 3600))
        if args.limit:
            rows = rows[:args.limit]

        out = args.out_dir / f"{label}.jsonl.gz"
        done = {}
        if out.exists():
            with gzip.open(out, "rt") as f:
                for line in f:
                    d = json.loads(line)
                    done[d["seed"]] = d
        todo = [(i, r, h) for i, r, h in rows if r["seed"] not in done]
        print(f"== {label} ({trial}): {len(rows):,} programs to replay, {len(done):,} already done", flush=True)

        start, n = time.time(), 0
        with gzip.open(out, "at") as f, cf.ProcessPoolExecutor(max_workers=args.jobs) as pool:
            by_seed = {r["seed"]: (i, r, h) for i, r, h in todo}
            for seed, reached, how in pool.map(work_item, [(settings, r["seed"]) for _, r, _ in todo]):
                i, r, h = by_seed[seed]
                d = {"seed": seed, "index": i, "elapsed_hours": round(h, 4)}
                if reached is None:
                    d.update(check=how)
                else:
                    hit = reached & targets
                    check = "ok"
                    if len(reached) != r.get("reached"):
                        check = f"reached {len(reached)} != recorded {r.get('reached')}"
                    elif len(hit) < r.get("candidates", 0):
                        check = f"targets {len(hit)} < recorded candidates {r.get('candidates')}"
                    d.update(reached=len(reached), reached_targets=sorted(hit), check=check)
                    if not args.no_full:
                        d["reached_ids"] = sorted(reached)
                f.write(json.dumps(d) + "\n")
                f.flush()
                done[seed] = d
                n += 1
                if n % 25 == 0 or n == len(todo):
                    rate = n / max(1e-9, time.time() - start)
                    print(f"   {label}: {n:,}/{len(todo):,} replayed ({rate * 3600:.0f}/h)", flush=True)

        checks = {}
        tr, ar = set(), set()
        for d in done.values():
            checks[d["check"] if d["check"] == "ok" else d["check"].split()[0]] = \
                checks.get(d["check"] if d["check"] == "ok" else d["check"].split()[0], 0) + 1
            tr.update(d.get("reached_targets", []))
            ar.update(d.get("reached_ids", []))
        all_targets_reached |= tr
        all_reached |= ar
        line = (f"{label}: {len(done):,} programs; checks {checks}; targets reached {len(tr):,} "
                f"({100 * len(tr) / len(targets):.1f}%)" + (f"; all mutants reached {len(ar):,}" if ar else ""))
        print(line, flush=True)
        summary.append(line)

    summary.append(f"all trials: targets reached {len(all_targets_reached):,} of {len(targets):,} "
                   f"({100 * len(all_targets_reached) / len(targets):.1f}%)"
                   + (f"; all mutants reached {len(all_reached):,}" if all_reached else ""))
    print(summary[-1])
    (args.out_dir / "summary.txt").write_text("\n".join(summary) + "\n")


if __name__ == "__main__":
    main()