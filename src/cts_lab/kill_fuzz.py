"""Mutant killing with wgslsmith-generated programs.

Works program-first, like the Csmith runner: for each seed,

  1. generate a reconditioned program (gen --recondition)
  2. run it twice on unmutated Mesa; skip it unless both runs give the same output
  3. run it on the tracking Mesa to see which mutants it reaches
  4. for each reached mutant that is a CTS survivor and not yet killed:
     run it with the mutant enabled and compare with step 2

A mutant is killed if the mutated run crashes, times out, or prints different
outputs. Survivors are never "done": a later program may still kill them.

Output mismatches carry a padding_only flag. WGSL §14.1 says operations on
composites must not access padding, so padding should keep its initial (zero)
contents: a padding-only change is still a bug, but a distinct kind, and the
flag lets it be reported separately. See wgsl_layout.py.

Output, in ``outdir`` (rerunning the same command resumes):
  programs.jsonl        one line per seed tried: what happened, timings, kills
  kills.jsonl           one line per killed mutant: status, seed, evidence path
  killed.txt            killed mutant IDs, appended as found
  kills/<mutant>/       the killing program, its input, both outputs
"""

import json
import os
import re
import shutil
import signal
import subprocess
import tempfile
import time
from dataclasses import dataclass, field
from pathlib import Path

from .killing import KillStatus, mutant_timeout
from .wgsl_layout import LayoutError, buffer_accessible_bytes


# --------------------------------------------------------------------------- #
# Settings
# --------------------------------------------------------------------------- #

# Small programs: the default generator settings produce shaders that can take
# >30s on llvmpipe. Override with --gen-arg.
SMALL_PROGRAM = [
    "--max-fns", "2", "--fn-min-stmts", "1", "--fn-max-stmts", "4",
    "--block-max-stmts", "3", "--max-block-depth", "2", "--max-if-chain-depth", "1",
    "--min-structs", "1", "--max-structs", "2", "--max-struct-members", "3",
]


@dataclass
class FuzzSettings:
    wgslsmith: Path
    mutated_icd: Path
    tracked_icd: Path
    config: str = "dawn:vk:0"
    gen_args: list[str] = field(default_factory=lambda: list(SMALL_PROGRAM))
    baseline_timeout: float = 30.0   # per run without a mutant
    timeout_factor: float = 5.0      # mutated timeout = factor * baseline time ...
    min_timeout: float = 10.0        # ... but at least this


# --------------------------------------------------------------------------- #
# Running wgslsmith
# --------------------------------------------------------------------------- #

@dataclass
class RunResult:
    kind: str            # "ok" | "timeout" | "crash"
    outputs: str | None  # the "outputs:" section, for comparison
    seconds: float
    returncode: int | None
    text: str            # full stdout+stderr, kept as evidence


def _run(cmd: list[str], env: dict[str, str], timeout: float) -> tuple[int | None, str, float]:
    """Run a command in its own process group; kill the whole group on timeout."""
    start = time.perf_counter()
    # Mutants can make the program print arbitrary bytes (e.g. corrupted IR dumps),
    # so decode leniently: invalid bytes become U+FFFD instead of raising.
    proc = subprocess.Popen(cmd, env=env, stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
                            text=True, encoding="utf-8", errors="replace",
                            start_new_session=True)
    def kill_group():
        try:
            os.killpg(proc.pid, signal.SIGKILL)
        except ProcessLookupError:
            pass

    try:
        out, _ = proc.communicate(timeout=timeout)
        return proc.returncode, out, time.perf_counter() - start
    except subprocess.TimeoutExpired:
        kill_group()
        out, _ = proc.communicate()
        return None, out or "", time.perf_counter() - start
    except BaseException:
        # Ctrl-C etc.: the child is in its own process group, so it would not get
        # the signal itself -- kill it before stopping.
        kill_group()
        proc.wait()
        raise


def extract_outputs(text: str) -> str | None:
    """The indented lines after 'outputs:' (the buffer contents), or None."""
    lines = text.splitlines()
    for i, line in enumerate(lines):
        if line.strip() == "outputs:":
            body = []
            for l in lines[i + 1:]:
                if not l.startswith((" ", "\t")):
                    break
                body.append(l.strip())
            return "\n".join(body)
    return None


def parse_buffers(outputs: str) -> dict[str, list[int]]:
    """'0:1 : [255, 0, ...]' lines -> {'0:1': [255, 0, ...]}."""
    buffers = {}
    for line in outputs.splitlines():
        m = re.match(r"\s*(\d+:\d+)\s*:\s*\[(.*)\]\s*$", line)
        if m:
            buffers[m.group(1)] = [int(x) for x in m.group(2).split(",") if x.strip()]
    return buffers


def mismatch_detail(prog_src: str, base_outputs: str, mut_outputs: str) -> dict:
    """Which bytes differ, and whether they are all padding (WGSL §14.4 AccessibleBytes).

    padding_only is True/False, or None if the layout couldn't be worked out
    (then check the kill by hand).
    """
    base, mut = parse_buffers(base_outputs), parse_buffers(mut_outputs)
    diff: dict[str, list[int]] = {}
    padding_only: bool | None = True
    for binding in sorted(set(base) | set(mut)):
        b, m = base.get(binding), mut.get(binding)
        if b is None or m is None or len(b) != len(m):
            diff[binding] = []          # buffer missing or resized: certainly not just padding
            padding_only = False
            continue
        idx = [i for i, (x, y) in enumerate(zip(b, m)) if x != y]
        if not idx:
            continue
        diff[binding] = idx
        if padding_only is False:
            continue
        try:
            accessible = buffer_accessible_bytes(prog_src, binding, len(b))
            if any(i in accessible for i in idx):
                padding_only = False
        except LayoutError:
            padding_only = None
    return {"padding_only": padding_only,
            "diff_bytes": {k: v[:64] for k, v in diff.items()}}


def run_program(s: FuzzSettings, prog: Path, input_json: str, icd: Path,
                timeout: float, extra_env: dict[str, str] | None = None) -> RunResult:
    env = os.environ.copy()
    env.pop("DREDD_ENABLED_MUTATION", None)
    env["VK_ICD_FILENAMES"] = str(icd)
    env["MESA_SHADER_CACHE_DISABLE"] = "true"
    env.update(extra_env or {})

    # wgslsmith's own --timeout is the main limit; ours only catches wgslsmith itself hanging.
    cmd = [str(s.wgslsmith), "run", str(prog), input_json, "-c", s.config,
           "--timeout", str(max(1, int(round(timeout))))]
    rc, text, secs = _run(cmd, env, timeout + 5)

    outputs = extract_outputs(text)
    if rc is None or (outputs is None and any(l.strip() == "timeout" for l in text.splitlines())):
        kind = "timeout"
    elif rc != 0 or outputs is None:
        kind = "crash"
    else:
        kind = "ok"
    return RunResult(kind, outputs, secs, rc, text)


def generate(s: FuzzSettings, seed: int, prog: Path) -> tuple[bool, str]:
    cmd = [str(s.wgslsmith), "gen", str(seed), "--recondition", *s.gen_args, "-o", str(prog)]
    rc, text, _ = _run(cmd, os.environ.copy(), 60)
    return rc == 0 and prog.exists(), text


def read_input(prog: Path) -> str:
    """Input data is a JSON comment on the program's first line: // {"0:0":[...]}"""
    first = prog.read_text().splitlines()[0] if prog.exists() else ""
    return first[2:].strip() if first.startswith("//") and "{" in first else "{}"


def reached_mutants(s: FuzzSettings, prog: Path, input_json: str, workdir: Path) -> set[int] | None:
    track = workdir / "reached.txt"
    track.unlink(missing_ok=True)
    r = run_program(s, prog, input_json, s.tracked_icd, s.baseline_timeout,
                    {"DREDD_MUTANT_TRACKING_FILE": str(track),
                     "DREDD_MUTANT_TRACKING_DIR": str(workdir)})
    if r.kind != "ok" or not track.exists():
        return None
    return {int(x) for x in track.read_text().split()}


# --------------------------------------------------------------------------- #
# One program
# --------------------------------------------------------------------------- #

def classify(base: RunResult, mutated: RunResult) -> KillStatus:
    if mutated.kind == "timeout":
        return KillStatus.KILL_TIMEOUT
    if mutated.kind == "crash":
        return KillStatus.KILL_CRASH
    if mutated.outputs != base.outputs:
        return KillStatus.KILL_OUTPUT_MISMATCH
    return KillStatus.SURVIVED


def try_seed(s: FuzzSettings, seed: int, targets: set[int], killed: set[int],
             outdir: Path, on_kill) -> dict:
    """Run one program against all targets it reaches. Returns a programs.jsonl record."""
    start = time.perf_counter()
    rec: dict = {"seed": seed}
    with tempfile.TemporaryDirectory() as tmp:
        work = Path(tmp)
        prog = work / "prog.wgsl"

        ok, text = generate(s, seed, prog)
        if not ok:
            return {**rec, "outcome": "gen_failed", "seconds": round(time.perf_counter() - start, 2)}
        input_json = read_input(prog)

        base = run_program(s, prog, input_json, s.mutated_icd, s.baseline_timeout)
        if base.kind != "ok":
            return {**rec, "outcome": f"baseline_{base.kind}", "seconds": round(time.perf_counter() - start, 2)}
        again = run_program(s, prog, input_json, s.mutated_icd, s.baseline_timeout)
        if again.kind != "ok" or again.outputs != base.outputs:
            return {**rec, "outcome": "nondeterministic", "seconds": round(time.perf_counter() - start, 2)}

        reached = reached_mutants(s, prog, input_json, work)
        if reached is None:
            return {**rec, "outcome": "tracking_failed", "seconds": round(time.perf_counter() - start, 2)}

        candidates = sorted((reached & targets) - killed)
        rec.update(reached=len(reached), candidates=len(candidates),
                   baseline_seconds=round(base.seconds, 2))
        timeout = mutant_timeout(base.seconds, s.timeout_factor, s.min_timeout)

        print(f"  seed {seed}: reaches {len(reached):,} mutants, of which {len(candidates)} "
              f"{'is a survivor' if len(candidates) == 1 else 'are survivors'} not yet killed (timeout {timeout:.0f}s each)", flush=True)

        kills = []
        for i, m in enumerate(candidates, 1):
            if m in killed:  # killed meanwhile (not possible single-process, but cheap)
                continue
            mut = run_program(s, prog, input_json, s.mutated_icd, timeout,
                              {"DREDD_ENABLED_MUTATION": str(m)})
            status = classify(base, mut)
            print(f"    [{i}/{len(candidates)}] mutant ID {m}: {status.name} ({mut.seconds:.1f}s)", flush=True)
            if status.is_kill():
                evidence = outdir / "kills" / str(m)
                evidence.mkdir(parents=True, exist_ok=True)
                shutil.copy(prog, evidence / "prog.wgsl")
                (evidence / "input.json").write_text(input_json + "\n")
                (evidence / "baseline.txt").write_text(base.text)
                (evidence / "mutant.txt").write_text(mut.text)
                kills.append(m)
                record = {"mutant_id": m, "status": status.name, "seed": seed,
                          "mutant_seconds": round(mut.seconds, 2), "timeout": round(timeout, 2),
                          "evidence": str(evidence)}
                if status is KillStatus.KILL_OUTPUT_MISMATCH:
                    record.update(mismatch_detail(prog.read_text(), base.outputs, mut.outputs))
                on_kill(record)

        return {**rec, "outcome": "ok", "kills": kills,
                "seconds": round(time.perf_counter() - start, 2)}


# --------------------------------------------------------------------------- #
# The campaign
# --------------------------------------------------------------------------- #

def load_targets(survivors_files: list[Path]) -> set[int]:
    targets: set[int] = set()
    for f in survivors_files:
        targets |= {int(x) for x in f.read_text().split()}
    return targets


def _read_jsonl(path: Path) -> list[dict]:
    if not path.exists():
        return []
    return [json.loads(l) for l in path.read_text().splitlines() if l.strip()]


def fuzz(s: FuzzSettings, survivors_files: list[Path], outdir: Path,
         max_programs: int | None = None, hours: float | None = None,
         first_seed: int = 0) -> None:
    outdir = Path(outdir)
    outdir.mkdir(parents=True, exist_ok=True)
    programs_file = outdir / "programs.jsonl"
    kills_file = outdir / "kills.jsonl"
    killed_file = outdir / "killed.txt"
    killed_file.touch()

    targets = load_targets(survivors_files)
    killed = {k["mutant_id"] for k in _read_jsonl(kills_file)}
    done_seeds = {p["seed"] for p in _read_jsonl(programs_file)}
    print(f"{len(targets):,} target mutants, {len(killed & targets):,} already killed, "
          f"{len(done_seeds):,} seeds already tried", flush=True)

    def on_kill(k: dict):
        killed.add(k["mutant_id"])
        with kills_file.open("a") as f:
            f.write(json.dumps(k) + "\n")
        with killed_file.open("a") as f:
            f.write(f"{k['mutant_id']}\n")
        note = ""
        if "padding_only" in k:
            note = {True: " (padding only)", False: " (data)", None: " (layout unknown: check by hand)"}[k["padding_only"]]
        if note:
            print(f"      -> {note.strip(' ()')}", flush=True)

    deadline = time.time() + hours * 3600 if hours else None
    seed, n = first_seed, 0
    while (max_programs is None or n < max_programs) and (deadline is None or time.time() < deadline):
        if seed in done_seeds:
            seed += 1
            continue
        if not (targets - killed):
            print("All targets killed.", flush=True)
            break

        seed_start = time.perf_counter()
        try:
            rec = try_seed(s, seed, targets, killed, outdir, on_kill)
        except KeyboardInterrupt:
            print(f"\nInterrupted during seed {seed}. Kills so far are saved; "
                  f"rerun the same command to resume (seed {seed} will be retried).", flush=True)
            return
        except Exception as e:
            # One odd program must not stop a long campaign: record it and move on.
            # Kills found before the error are already saved.
            print(f"  seed {seed}: ERROR {type(e).__name__}: {e}", flush=True)
            rec = {"seed": seed, "outcome": "error", "error": f"{type(e).__name__}: {e}"[:500],
                   "seconds": round(time.perf_counter() - seed_start, 2)}
        with programs_file.open("a") as f:
            f.write(json.dumps(rec) + "\n")
        n += 1
        extra = (f"reached {rec['reached']:,}, candidates {rec['candidates']}, kills {len(rec['kills'])}"
                 if rec["outcome"] == "ok" else rec["outcome"])
        print(f"[{n}] seed {seed}: {extra} ({rec['seconds']}s) "
              f"| killed {len(killed & targets):,}/{len(targets):,}", flush=True)
        seed += 1