"""Export polished kills into a clean folder, one subfolder per mutant, for CTS tests.

For each mutant in <polish>/<m>/ (made by polish.sh), it runs raw.wgsl with the reduced
input.json, unmutated twice (to check it's deterministic) and with the mutant once, and
writes <out>/<m>/:

  test.wgsl        the final program (raw.wgsl)
  input.json       the input buffers, if the program has any ("group:binding": bytes)
  expected.json    output buffers of the unmutated run ("group:binding": bytes)
  mutant.json      output buffers with the mutant enabled
  expected.txt, mutant.txt   the full `wgslsmith run` output of each run
  info.json        mutant ID, kill status, deterministic, and every output word that differs
  README.md        the same, readable: differing words as u32 / i32 / f32, input words

and <out>/summary.md, one line per mutant. Mesa's shader cache is disabled for the runs.

Usage (inside the container, from the repo root):
  python3 -m cts_lab.export_tests 297811 297976 701673 \\
      [--polish results/reduce/polish] [--out results/reduce/submission]
"""

import argparse
import json
import os
import re
import shutil
import struct
import sys
from pathlib import Path

from .kill_fuzz import FuzzSettings, classify, run_program
from .killing import KillStatus, mutant_timeout

OUTPUT_LINE = re.compile(r"^\s*(\d+:\d+)\s*:\s*\[([^\]]*)\]", re.M)


def test_env(work: Path, test: str) -> dict[str, str]:
    env = {}
    for line in (work / test).read_text().splitlines():
        m = re.match(r"export (\w+)=(.*)", line)
        if m:
            env[m.group(1)] = m.group(2).strip("'")
    return env


def parse_outputs(text: str) -> dict[str, list[int]]:
    """The "outputs:" section of `wgslsmith run` output, as {"group:binding": bytes}."""
    part = text.split("outputs:", 1)[1] if "outputs:" in text else ""
    return {k: [int(x) for x in v.split(",") if x.strip()] for k, v in OUTPUT_LINE.findall(part)}


def word(b: list[int]) -> str:
    if len(b) != 4:
        return str(b)
    raw = bytes(b)
    return (f"u32={struct.unpack('<I', raw)[0]} i32={struct.unpack('<i', raw)[0]} "
            f"f32={struct.unpack('<f', raw)[0]:.9g}")


def differences(clean: dict, mut: dict) -> list[dict]:
    out = []
    for key in sorted(set(clean) | set(mut)):
        a, b = clean.get(key, []), mut.get(key, [])
        for off in range(0, max(len(a), len(b)), 4):
            wa, wb = a[off:off + 4], b[off:off + 4]
            if wa != wb:
                out.append({"buffer": key, "offset": off, "expected": wa, "mutant": wb,
                            "expected_as": word(wa), "mutant_as": word(wb)})
    return out


def export_one(m: str, polish: Path, out: Path) -> str:
    src = polish / m
    if not (src / "raw.wgsl").exists():
        return f"| {m} | missing {src}/raw.wgsl | | | |"
    test = "test_raw.sh" if (src / "test_raw.sh").exists() else "test.sh"
    e = test_env(src, test)
    if e.get("REDUCE_RECONDITION") == "1":
        print(f"  warning: {src}/{test} reconditions; raw.wgsl is run as is here", flush=True)
    s = FuzzSettings(wgslsmith=Path(e["REDUCE_WGSLSMITH"]), mutated_icd=Path(e["REDUCE_ICD"]),
                     tracked_icd=Path(e["REDUCE_ICD"]), config=e["REDUCE_CONFIG"],
                     baseline_timeout=float(e["REDUCE_CLEAN_TIMEOUT"]),
                     min_timeout=float(e["REDUCE_MIN_TIMEOUT"]))
    mutant = int(e["REDUCE_MUTANT"])
    if str(mutant) != m:
        print(f"  warning: {src}/{test} is for mutant {mutant}, not {m}", flush=True)

    dst = out / m
    shutil.rmtree(dst, ignore_errors=True)
    dst.mkdir(parents=True)
    shutil.copy(src / "raw.wgsl", dst / "test.wgsl")
    inputs = json.loads((src / "input.json").read_text()) if (src / "input.json").exists() else {}
    input_json = json.dumps(inputs, separators=(",", ":"))
    if inputs:
        (dst / "input.json").write_text(input_json + "\n")

    prog = dst / "test.wgsl"
    c1 = run_program(s, prog, input_json, s.mutated_icd, s.baseline_timeout)
    c2 = run_program(s, prog, input_json, s.mutated_icd, s.baseline_timeout)
    (dst / "expected.txt").write_text(c1.text)
    info = {"mutant_id": mutant, "source": str(src), "lines": len(prog.read_text().splitlines()),
            "inputs": sorted(inputs), "clean_ok": c1.kind == "ok",
            "deterministic": c1.kind == c2.kind == "ok" and c1.outputs == c2.outputs}
    status = "clean run failed"
    diffs = []
    if info["clean_ok"]:
        timeout = mutant_timeout(c1.seconds, s.timeout_factor, s.min_timeout)
        mu = run_program(s, prog, input_json, s.mutated_icd, timeout,
                         {"DREDD_ENABLED_MUTATION": str(mutant)})
        (dst / "mutant.txt").write_text(mu.text)
        st = classify(c1, mu)
        status = st.name
        expected, mutated = parse_outputs(c1.text), parse_outputs(mu.text)
        (dst / "expected.json").write_text(json.dumps(expected, separators=(",", ":")) + "\n")
        if st is KillStatus.KILL_OUTPUT_MISMATCH:
            (dst / "mutant.json").write_text(json.dumps(mutated, separators=(",", ":")) + "\n")
            diffs = differences(expected, mutated)
    info["status"] = status
    info["differences"] = diffs
    (dst / "info.json").write_text(json.dumps(info, indent=2) + "\n")

    lines = [f"# Mutant {mutant}", "",
             f"- program: `test.wgsl`, {info['lines']} lines (from `{src}/raw.wgsl`)",
             f"- status: **{status}**, deterministic: {info['deterministic']}",
             f"- inputs: {', '.join(sorted(inputs)) or 'none'}", ""]
    for key, data in inputs.items():
        nz = [(o, data[o:o + 4]) for o in range(0, len(data), 4) if any(data[o:o + 4])]
        lines.append(f"Input {key}: {len(data)} bytes, "
                     + ("all zero" if not nz else f"{len(nz)} non-zero word(s)"))
        lines += [f"- offset {o}: {word(b)}" for o, b in nz]
        lines.append("")
    if diffs:
        lines += ["| buffer | offset | expected | mutant |", "|---|---|---|---|"]
        lines += [f"| {d['buffer']} | {d['offset']} | {d['expected_as']} | {d['mutant_as']} |"
                  for d in diffs]
        lines.append("")
    lines.append("To do: Mesa pass (query_mutant_info), expected values worked out by hand, CTS test.")
    (dst / "README.md").write_text("\n".join(lines) + "\n")

    print(f"  {status}, deterministic={info['deterministic']}, {len(diffs)} differing word(s)", flush=True)
    return (f"| {m} | {status} | {info['deterministic']} | {info['lines']} | "
            f"{', '.join(sorted(inputs)) or 'none'} | {len(diffs)} |")


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("mutants", nargs="+")
    p.add_argument("--polish", type=Path, default=Path("results/reduce/polish"))
    p.add_argument("--out", type=Path, default=Path("results/reduce/submission"))
    args = p.parse_args()
    os.environ.setdefault("MESA_SHADER_CACHE_DISABLE", "true")
    args.out.mkdir(parents=True, exist_ok=True)
    rows = ["| mutant | status | deterministic | lines | inputs | differing words |",
            "|---|---|---|---|---|---|"]
    for m in args.mutants:
        print(f"=== {m} ===", flush=True)
        rows.append(export_one(m, args.polish, args.out))
    (args.out / "summary.md").write_text("\n".join(rows) + "\n")
    print("\n".join(rows))
    bad = [r for r in rows[2:] if "KILL_OUTPUT_MISMATCH | True" not in r]
    if bad:
        print(f"\n{len(bad)} not clean mismatch kills: check before using them", file=sys.stderr)


if __name__ == "__main__":
    main()