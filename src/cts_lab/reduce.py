"""Reduce fuzzing kills to small programs, for turning into CTS tests.

wgslsmith's own `reduce mismatch` keeps programs whose output differs *between
implementations*; here the interesting property is "unmutated Mesa runs it
cleanly, the mutant doesn't". So C-Vise and/or Perses (wgslsmith's fork, with a
WGSL grammar) do the reducing, with check() below as their interestingness test. It mirrors wgslsmith's test.rs:

  - the candidate is the *un-reconditioned* program (regenerated from the seed)
    and is reconditioned before every run, so the reducer can't remove the
    safety checks that keep the program free of undefined behaviour;
  - the input data is a fixed input.json, passed to `wgslsmith run`.

A candidate is interesting if
  1. it reconditions, and the clean (unmutated) run finishes with outputs, and
  2. mismatch kills: the mutant runs and its outputs differ in data (not just padding)
     crash kills:    the mutant crashes (optionally matching --crash-regex).
Any mutant-only crash or data change is still a kill of that mutant, so drifting to
a different symptom of the same mutant is fine.

After reducing, verify() checks the reconditioned result: two clean runs agree,
the mutant still kills it, and (with --survivors) which *other* CTS survivors it
kills, so later reductions can skip mutants already covered.

Usage (inside the container):
  python3 -m cts_lab.reduce one   results/fuzz/run1 221889 [more IDs...]
  python3 -m cts_lab.reduce --reducer perses,cvise one results/fuzz/run1 221889
  python3 -m cts_lab.reduce batch results/fuzz/run1 --limit 20 --survivors .../survivors.txt

Output, per mutant, in <outdir>/<mutant>/:
  original.wgsl      the killing program from fuzzing (reconditioned)
  unreconditioned.wgsl  the regenerated seed: where reduction starts
  prog.wgsl          the reduced program (un-reconditioned)
  reduced.wgsl       the final, reconditioned program -> the test candidate
  input.json, test.sh, reduce.log, clean.txt, mutant.txt, result.json
and <outdir>/reductions.jsonl collects all result.json records.
"""

import argparse
import json
import os
import re
import shlex
import shutil
import subprocess
import sys
import time
from pathlib import Path

from .killing import KillStatus, mutant_timeout
from .kill_fuzz import (FuzzSettings, SMALL_PROGRAM, _run, classify, load_targets,
                        mismatch_detail, reached_mutants, run_program)

MODES = {"KILL_OUTPUT_MISMATCH": "mismatch", "KILL_CRASH": "crash"}


# --------------------------------------------------------------------------- #
# Reconditioning
# --------------------------------------------------------------------------- #

def recondition_file(s: FuzzSettings, src: Path, dst: Path) -> bool:
    """wgslsmith recondition <INPUT> <OUTPUT>, with default options (as test.rs does)."""
    dst.unlink(missing_ok=True)
    rc, _, _ = _run([str(s.wgslsmith), "recondition", str(src), str(dst)], os.environ.copy(), 60)
    return rc == 0 and dst.exists() and dst.stat().st_size > 0


# --------------------------------------------------------------------------- #
# Interestingness
# --------------------------------------------------------------------------- #

def interesting(s: FuzzSettings, cand: Path, mutant: int, mode: str, input_json: str,
                recondition: bool, crash_regex: str | None = None) -> tuple[bool, str]:
    prog = cand
    if recondition:
        prog = cand.with_name("_reconditioned_" + cand.name)
        if not recondition_file(s, cand, prog):
            return False, "recondition failed"

    clean = run_program(s, prog, input_json, s.mutated_icd, s.baseline_timeout)
    if clean.kind != "ok":
        return False, f"clean run: {clean.kind}"
    if not (clean.outputs or "").strip():
        return False, "clean run: no outputs"

    timeout = mutant_timeout(clean.seconds, s.timeout_factor, s.min_timeout)
    mut = run_program(s, prog, input_json, s.mutated_icd, timeout,
                      {"DREDD_ENABLED_MUTATION": str(mutant)})
    status = classify(clean, mut)

    if mode == "mismatch":
        if status is not KillStatus.KILL_OUTPUT_MISMATCH:
            return False, f"mutant: {status.name}"
        if mismatch_detail(prog.read_text(), clean.outputs, mut.outputs)["padding_only"] is True:
            return False, "mutant: padding-only difference"
        return True, "mismatch"
    if mode == "crash":
        if status is not KillStatus.KILL_CRASH:
            return False, f"mutant: {status.name}"
        if crash_regex and not re.search(crash_regex, mut.text):
            return False, "mutant: crash, but regex not matched"
        return True, "crash"
    raise ValueError(f"unknown mode {mode}")


def check_main(cand: str) -> int:
    """Entry point for test.sh: settings come from REDUCE_* variables it exports."""
    e = os.environ
    s = FuzzSettings(wgslsmith=Path(e["REDUCE_WGSLSMITH"]), mutated_icd=Path(e["REDUCE_ICD"]),
                     tracked_icd=Path(e["REDUCE_ICD"]), config=e["REDUCE_CONFIG"],
                     baseline_timeout=float(e["REDUCE_CLEAN_TIMEOUT"]),
                     min_timeout=float(e["REDUCE_MIN_TIMEOUT"]))
    ok, why = interesting(s, Path(cand), int(e["REDUCE_MUTANT"]), e["REDUCE_MODE"],
                          Path(e["REDUCE_INPUT"]).read_text().strip(),
                          e["REDUCE_RECONDITION"] == "1", e.get("REDUCE_CRASH_REGEX") or None)
    if e.get("REDUCE_VERBOSE"):
        print(why, file=sys.stderr)
    return 0 if ok else 1


# --------------------------------------------------------------------------- #
# One reduction
# --------------------------------------------------------------------------- #

def _kill_records(run_dir: Path) -> dict[int, dict]:
    recs = {}
    for line in (run_dir / "kills.jsonl").read_text().splitlines():
        if line.strip():
            r = json.loads(line)
            recs[r["mutant_id"]] = r
    return recs


def prepare(s: FuzzSettings, run_dir: Path, kill: dict, work: Path, mode: str,
            crash_regex: str | None) -> bool:
    """Set up work/prog.wgsl to reduce. Returns whether checks must recondition it."""
    evidence = run_dir / "kills" / str(kill["mutant_id"])
    shutil.copy(evidence / "prog.wgsl", work / "original.wgsl")
    shutil.copy(evidence / "input.json", work / "input.json")
    input_json = (work / "input.json").read_text().strip()
    m = kill["mutant_id"]

    # Preferred: regenerate the same seed without --recondition, and recondition in each check.
    unrec = work / "unreconditioned.wgsl"
    t0 = time.perf_counter()
    print(f"  checking the kill reproduces from regenerated seed {kill['seed']} "
          f"(unmutated run, then mutant run)...", flush=True)
    rc, _, _ = _run([str(s.wgslsmith), "gen", str(kill["seed"]), *s.gen_args, "-o", str(unrec)],
                    os.environ.copy(), 60)
    if rc == 0 and unrec.exists():
        ok, why = interesting(s, unrec, m, mode, input_json, True, crash_regex)
        print(f"    {'yes' if ok else 'no'} ({why}, {time.perf_counter() - t0:.0f}s)", flush=True)
        if ok:
            shutil.copy(unrec, work / "prog.wgsl")
            return True
        print(f"  regenerated seed {kill['seed']} doesn't reproduce the kill ({why}); "
              f"reducing the reconditioned program directly", flush=True)

    # Fallback: reduce the reconditioned program as is. The reducer may then remove
    # safety checks, so verify() and a look by hand matter more.
    t0 = time.perf_counter()
    print("  checking the kill reproduces from the original fuzz program...", flush=True)
    ok, why = interesting(s, work / "original.wgsl", m, mode, input_json, False, crash_regex)
    print(f"    {'yes' if ok else 'no'} ({why}, {time.perf_counter() - t0:.0f}s)", flush=True)
    if not ok:
        raise RuntimeError(f"kill does not reproduce: {why}")
    shutil.copy(work / "original.wgsl", work / "prog.wgsl")
    return False


def write_test_script(s: FuzzSettings, work: Path, mutant: int, mode: str, recondition: bool,
                      crash_regex: str | None, clean_timeout: float) -> Path:
    env = {
        "REDUCE_WGSLSMITH": s.wgslsmith, "REDUCE_ICD": s.mutated_icd, "REDUCE_CONFIG": s.config,
        "REDUCE_MUTANT": mutant, "REDUCE_MODE": mode, "REDUCE_INPUT": (work / "input.json").resolve(),
        "REDUCE_RECONDITION": "1" if recondition else "0", "REDUCE_CLEAN_TIMEOUT": clean_timeout,
        "REDUCE_MIN_TIMEOUT": s.min_timeout, "REDUCE_CRASH_REGEX": crash_regex or "",
    }
    lines = ["#!/usr/bin/env bash", "# C-Vise interestingness test: exit 0 = still kills the mutant.",
             "ulimit -c 0"]
    lines += [f"export {k}={shlex.quote(str(v))}" for k, v in env.items()]
    lines.append(f"exec {shlex.quote(sys.executable)} -m cts_lab.reduce check prog.wgsl")
    test = work / "test.sh"
    test.write_text("\n".join(lines) + "\n")
    test.chmod(0o755)
    return test


def verify(s: FuzzSettings, final: Path, input_json: str, mutant: int, work: Path,
           targets: set[int] | None) -> dict:
    out: dict = {}
    c1 = run_program(s, final, input_json, s.mutated_icd, s.baseline_timeout)
    c2 = run_program(s, final, input_json, s.mutated_icd, s.baseline_timeout)
    (work / "clean.txt").write_text(c1.text)
    out["clean_ok"] = c1.kind == "ok"
    out["deterministic"] = c1.kind == c2.kind == "ok" and c1.outputs == c2.outputs
    if not out["clean_ok"]:
        out["status"] = None
        return out

    timeout = mutant_timeout(c1.seconds, s.timeout_factor, s.min_timeout)
    mut = run_program(s, final, input_json, s.mutated_icd, timeout,
                      {"DREDD_ENABLED_MUTATION": str(mutant)})
    (work / "mutant.txt").write_text(mut.text)
    status = classify(c1, mut)
    out["status"] = status.name
    if status is KillStatus.KILL_OUTPUT_MISMATCH:
        out.update(mismatch_detail(final.read_text(), c1.outputs, mut.outputs))

    if targets:
        reached = reached_mutants(s, final, input_json, work)
        others = sorted((reached or set()) & targets - {mutant})
        out["reached_survivors"] = len(others)
        print(f"  checking the {len(others)} other CTS survivors it reaches", flush=True)
        also = {}
        for i, m in enumerate(others, 1):
            r = run_program(s, final, input_json, s.mutated_icd, timeout,
                            {"DREDD_ENABLED_MUTATION": str(m)})
            st = classify(c1, r)
            if st.is_kill():
                also[m] = st.name
            if i % 100 == 0:
                print(f"    {i}/{len(others)}: {len(also)} killed so far", flush=True)
        out["also_kills"] = also
    return out


def run_reducer(name: str, work: Path, jobs: int, timeout: int, perses_jar: Path | None,
                log) -> int:
    """Run one reducer on work/prog.wgsl in place, echoing its output. Returns the exit code."""
    if name in ("cvise", "creduce"):
        cmd = [name, "--n", str(jobs), "--not-c", "--timeout", str(timeout), "./test.sh", "prog.wgsl"]
        out_dir = None
    elif name == "perses":
        # As wgslsmith's reducer.rs runs it, but into a separate output directory.
        out_dir = work / "perses_out"
        shutil.rmtree(out_dir, ignore_errors=True)
        # "test.sh", not "./test.sh": Perses compares parent folders literally, and the
        # parent of ".../221889/./test.sh" is ".../221889/.", which it treats as different.
        cmd = ["java", "-jar", str(perses_jar), "-i", "prog.wgsl", "-t", "test.sh",
               "-o", out_dir.name, "--threads", str(jobs)]
    elif name == "wgsl":
        # Our own WGSL-aware pass (paired edits Perses/C-Vise can't make); runs in-process.
        from .wgsl_pass import reduce_dir

        def emit(msg):
            log.write(msg + "\n")
            log.flush()
            print(msg, flush=True)
        return reduce_dir(work, emit)
    else:
        raise SystemExit(f"unknown reducer {name}")

    proc = subprocess.Popen(cmd, cwd=work, stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
                            text=True, errors="replace", bufsize=1)
    for line in proc.stdout:
        log.write(line)
        log.flush()
        print("    " + line.rstrip(), flush=True)
    rc = proc.wait()

    if out_dir is not None and rc == 0:
        result = out_dir / "prog.wgsl"
        if result.exists():
            shutil.copy(work / "prog.wgsl", work / f"prog.before-{name}.wgsl")
            shutil.copy(result, work / "prog.wgsl")
    return rc


def reduce_one(s: FuzzSettings, run_dir: Path, mutant: int, outroot: Path, *, jobs: int,
               reducer: str, reducer_timeout: int, perses_jar: Path | None, crash_regex: str | None,
               targets: set[int] | None, kills: dict[int, dict]) -> dict | None:
    work = outroot / str(mutant)
    if (work / "result.json").exists():
        print(f"mutant ID {mutant}: already reduced, skipping", flush=True)
        return json.loads((work / "result.json").read_text())

    kill = kills.get(mutant)
    if kill is None:
        print(f"mutant ID {mutant}: not in {run_dir}/kills.jsonl, skipping", flush=True)
        return None
    mode = MODES.get(kill["status"])
    if mode is None:
        print(f"mutant ID {mutant}: {kill['status']} kills aren't reduced, skipping", flush=True)
        return None

    print(f"mutant ID {mutant}: reducing {mode} kill from seed {kill['seed']}", flush=True)
    work.mkdir(parents=True, exist_ok=True)
    start = time.perf_counter()
    try:
        recondition = prepare(s, run_dir, kill, work, mode, crash_regex)
    except RuntimeError as e:
        print(f"  {e}; skipping", flush=True)
        return None
    write_test_script(s, work, mutant, mode, recondition, crash_regex, s.baseline_timeout)
    before = (work / "prog.wgsl").read_text()

    stages = []
    with (work / "reduce.log").open("w") as log:
        for name in reducer.split(","):
            size_before = (work / "prog.wgsl").stat().st_size
            print(f"  running {name} with {jobs} jobs (log: {work / 'reduce.log'})", flush=True)
            log.write(f"===== {name} =====\n")
            rc = run_reducer(name, work, jobs, reducer_timeout, perses_jar, log)
            size_after = (work / "prog.wgsl").stat().st_size
            stages.append({"reducer": name, "exit": rc, "bytes_before": size_before,
                           "bytes_after": size_after})
            if rc != 0:
                print(f"  {name} failed (exit {rc}); see {work / 'reduce.log'}", flush=True)
                return None
            print(f"  {name}: {size_before:,} -> {size_after:,} bytes", flush=True)
    reduce_secs = time.perf_counter() - start

    final = work / "reduced.wgsl"
    if recondition:
        if not recondition_file(s, work / "prog.wgsl", final):
            print("  could not recondition the reduced program", flush=True)
            return None
    else:
        shutil.copy(work / "prog.wgsl", final)

    after = (work / "prog.wgsl").read_text()
    print(f"  reduced {len(before.splitlines())} -> {len(after.splitlines())} lines "
          f"in {reduce_secs / 60:.0f} min; verifying", flush=True)
    result = {"mutant_id": mutant, "mode": mode, "seed": kill["seed"],
              "reconditioned_in_checks": recondition,
              "lines_before": len(before.splitlines()), "lines_after": len(after.splitlines()),
              "final_lines": len(final.read_text().splitlines()),
              "reduce_seconds": round(reduce_secs, 1), "stages": stages}
    result.update(verify(s, final, (work / "input.json").read_text().strip(), mutant, work, targets))

    (work / "result.json").write_text(json.dumps(result, indent=2) + "\n")
    with (outroot / "reductions.jsonl").open("a") as f:
        f.write(json.dumps(result) + "\n")
    also = len(result.get("also_kills", {}))
    print(f"  done: {result['status']}, deterministic={result['deterministic']}"
          + (f", also kills {also} other survivors" if "also_kills" in result else ""), flush=True)
    return result


# --------------------------------------------------------------------------- #
# CLI
# --------------------------------------------------------------------------- #

def batch_order(run_dir: Path, kills: dict[int, dict]) -> list[int]:
    """Mismatch kills before crashes; smaller fuzz programs first (they reduce faster)."""
    def key(m):
        size = (run_dir / "kills" / str(m) / "prog.wgsl").stat().st_size
        return (0 if kills[m]["status"] == "KILL_OUTPUT_MISMATCH" else 1, size, m)
    return sorted((m for m, k in kills.items() if k["status"] in MODES), key=key)


def main(argv=None):
    if argv is None:
        argv = sys.argv[1:]
    if argv[:1] == ["check"]:
        sys.exit(check_main(argv[1]))

    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--wgslsmith", type=Path,
                   default=os.environ.get("WGSLSMITH_BIN", "/data/wgslsmith/target/release/wgslsmith"))
    p.add_argument("--mutated-icd", type=Path, default=os.environ.get(
        "MUTATED_ICD", "/data/mesa_mutated/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json"))
    p.add_argument("--tracked-icd", type=Path, default=os.environ.get(
        "TRACKED_ICD", "/data/mesa_tracked/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json"))
    p.add_argument("--outdir", type=Path, default=Path("results/reduce"))
    p.add_argument("--jobs", type=int, default=max(1, (os.cpu_count() or 2) // 2),
                   help="parallel checks in C-Vise (default: half the cores)")
    p.add_argument("--reducer", default="cvise",
                   help="cvise, creduce, perses or wgsl (our WGSL-aware pass), or several in sequence, "
                        "e.g. perses,cvise,wgsl")
    p.add_argument("--perses-jar", type=Path,
                   default=os.environ.get("PERSES_JAR", "/data/perses_deploy.jar"))
    p.add_argument("--reducer-timeout", type=int, default=120, help="seconds per interestingness check")
    p.add_argument("--clean-timeout", type=float, default=10.0,
                   help="timeout for an unmutated run during reduction (s)")
    p.add_argument("--crash-regex", help="crash kills: require the mutant's output to match this")
    p.add_argument("--survivors", type=Path, nargs="*",
                   help="CTS survivors file(s): also check which other survivors each result kills")
    sub = p.add_subparsers(dest="cmd", required=True)
    one = sub.add_parser("one", help="reduce the given kills")
    one.add_argument("run_dir", type=Path)
    one.add_argument("mutants", type=int, nargs="+")
    bat = sub.add_parser("batch", help="reduce kills from a fuzz run, skipping ones already covered")
    bat.add_argument("run_dir", type=Path)
    bat.add_argument("--limit", type=int, help="stop after this many reductions")
    args = p.parse_args(argv)

    s = FuzzSettings(wgslsmith=args.wgslsmith, mutated_icd=args.mutated_icd,
                     tracked_icd=args.tracked_icd, gen_args=list(SMALL_PROGRAM),
                     baseline_timeout=args.clean_timeout)
    for name in args.reducer.split(","):
        if name == "perses":
            if shutil.which("java") is None or not args.perses_jar.exists():
                raise SystemExit(f"perses needs java and {args.perses_jar}: rebuild the wgslsmith image "
                                 "(Dockerfile.wgslsmith) or pass --perses-jar")
        elif name == "wgsl":
            continue
        elif shutil.which(name) is None:
            raise SystemExit(f"{name} not found: rebuild the wgslsmith image (Dockerfile.wgslsmith)")
    targets = load_targets(args.survivors) if args.survivors else None
    kills = _kill_records(args.run_dir)
    args.outdir.mkdir(parents=True, exist_ok=True)
    common = dict(jobs=args.jobs, reducer=args.reducer, reducer_timeout=args.reducer_timeout,
                  perses_jar=args.perses_jar,
                  crash_regex=args.crash_regex, targets=targets, kills=kills)

    if args.cmd == "one":
        for m in args.mutants:
            reduce_one(s, args.run_dir, m, args.outdir, **common)
        return

    covered: set[int] = set()
    log = args.outdir / "reductions.jsonl"
    if log.exists():
        for line in log.read_text().splitlines():
            if line.strip():
                r = json.loads(line)
                covered.add(r["mutant_id"])
                covered |= {int(m) for m in r.get("also_kills", {})}
    done = 0
    for m in batch_order(args.run_dir, kills):
        if args.limit is not None and done >= args.limit:
            break
        if m in covered:
            continue
        r = reduce_one(s, args.run_dir, m, args.outdir, **common)
        covered.add(m)
        if r:
            covered |= {int(x) for x in r.get("also_kills", {})}
            done += 1
    print(f"Finished: {done} reductions this run; {len(covered)} kills covered in total", flush=True)


if __name__ == "__main__":
    main()