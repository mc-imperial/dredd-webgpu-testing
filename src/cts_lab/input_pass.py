"""Reduce a kill's input buffers (input.json), keeping the program fixed.

input.json maps "group:binding" to the bytes `wgslsmith run` puts in that buffer, e.g.
{"0:0": [167, 210, ...]}. This pass makes the input as simple as it can while the
interestingness test still passes (the mutant is still killed):

  drop-unused   remove entries for bindings the program doesn't declare
  zero-all      set a whole buffer to zero bytes
  zero-words    otherwise, zero as much as possible: halves, then quarters, ...,
                down to single 4-byte words (delta debugging, "set to 0")

Then it prints the remaining non-zero words as i32 / u32 / f32 so you can see what
the program depends on.

It runs the program with the given test script (test.sh, or test_raw.sh for a
reconditioned program checked as is), pointing REDUCE_INPUT at each candidate.

Usage (inside the container):
  python3 -m cts_lab.input_pass results/polish/297811 --file raw.wgsl --test test_raw.sh
  python3 -m cts_lab.input_pass results/reduce/reduce-batch/297811      # prog.wgsl, test.sh
Updates input.json in place; keeps input.before-input.json.
"""

import argparse
import json
import re
import shutil
import struct
import subprocess
import sys
import tempfile
from pathlib import Path

BINDING = re.compile(r"@group\s*\(\s*(\d+)\s*\)\s*@binding\s*\(\s*(\d+)\s*\)|"
                     r"@binding\s*\(\s*(\d+)\s*\)\s*@group\s*\(\s*(\d+)\s*\)")


def declared_bindings(src: str) -> set[str]:
    """"group:binding" keys of every resource the program declares."""
    src = re.sub(r"/\*.*?\*/|//[^\n]*", "", src, flags=re.S)
    out = set()
    for m in BINDING.finditer(src):
        g, b = (m.group(1), m.group(2)) if m.group(1) is not None else (m.group(4), m.group(3))
        out.add(f"{int(g)}:{int(b)}")
    return out


class InputOracle:
    """Runs the test script on a fixed program with a candidate input."""

    def __init__(self, work: Path, program: str, test: str = "test.sh", timeout: float = 300):
        self.src = program
        self.test = (work / test).read_text()
        self.timeout = timeout
        self.calls = 0

    def __call__(self, inputs: dict[str, list[int]]) -> bool:
        self.calls += 1
        with tempfile.TemporaryDirectory() as tmp:
            tmp = Path(tmp)
            (tmp / "prog.wgsl").write_text(self.src)
            (tmp / "input.json").write_text(json.dumps(inputs, separators=(",", ":")))
            test = re.sub(r"(?m)^export REDUCE_INPUT=.*$",
                          f"export REDUCE_INPUT={tmp / 'input.json'}", self.test)
            (tmp / "test.sh").write_text(test)
            try:
                return subprocess.run(["bash", "test.sh"], cwd=tmp, timeout=self.timeout,
                                      stdout=subprocess.DEVNULL,
                                      stderr=subprocess.DEVNULL).returncode == 0
            except subprocess.TimeoutExpired:
                return False


def _zero(data: list[int], lo: int, hi: int) -> list[int]:
    return data[:lo] + [0] * (hi - lo) + data[hi:]


def reduce_inputs(inputs: dict[str, list[int]], declared: set[str], oracle, log=print):
    inputs = dict(inputs)

    for key in [k for k in inputs if k not in declared]:
        cand = {k: v for k, v in inputs.items() if k != key}
        if oracle(cand):
            log(f"    drop-unused {key} ({len(inputs[key])} bytes): the program has no binding {key}")
            inputs = cand
        else:
            log(f"    drop-unused {key}: needed after all (kept)")

    for key in list(inputs):
        data = inputs[key]
        if not any(data):
            continue
        if oracle({**inputs, key: [0] * len(data)}):
            log(f"    zero-all {key}: all {len(data)} bytes can be zero")
            inputs[key] = [0] * len(data)
            continue
        # delta debugging over 4-byte words: zero the largest chunks that still kill
        words = (len(data) + 3) // 4
        size = max(1, words // 2)
        while size >= 1:
            w = 0
            while w < words:
                lo, hi = 4 * w, min(len(data), 4 * (w + size))
                if any(data[lo:hi]):
                    cand = _zero(data, lo, hi)
                    if oracle({**inputs, key: cand}):
                        log(f"    zero-words {key}: bytes {lo}..{hi - 1}")
                        data = cand
                w += size
            size //= 2
        inputs[key] = data
    return inputs


def describe(inputs: dict[str, list[int]]) -> list[str]:
    """The non-zero 4-byte words of each buffer, as i32 / u32 / f32."""
    lines = []
    for key, data in inputs.items():
        nz = [(i, data[i:i + 4]) for i in range(0, len(data), 4) if any(data[i:i + 4])]
        lines.append(f"  {key}: {len(data)} bytes, {len(nz)} non-zero word(s)"
                     + (" (all zero)" if not nz else ""))
        for off, b in nz:
            if len(b) == 4:
                i32, = struct.unpack("<i", bytes(b))
                u32, = struct.unpack("<I", bytes(b))
                f32, = struct.unpack("<f", bytes(b))
                lines.append(f"    offset {off:3}: {b}  i32={i32}  u32={u32}  f32={f32:.9g}")
            else:
                lines.append(f"    offset {off:3}: {b}")
    if not inputs:
        lines.append("  no inputs")
    return lines


def reduce_input_dir(work: Path, log=print, *, test: str = "test.sh", file: str = "prog.wgsl") -> int:
    """Reduce work/input.json for work/<file>. Returns 0 on success (a reducer exit code)."""
    work = Path(work)
    path = work / "input.json"
    inputs = json.loads(path.read_text())
    src = (work / file).read_text()
    oracle = InputOracle(work, src, test)
    if not oracle(inputs):
        log(f"    input pass: {file} with input.json does not pass {test}; nothing done")
        return 1
    new = reduce_inputs(inputs, declared_bindings(src), oracle, log)
    log(f"    input pass: {oracle.calls} tests")
    for line in describe(new):
        log(line)
    if new != inputs:
        shutil.copy(path, work / "input.before-input.json")
        path.write_text(json.dumps(new, separators=(",", ":")) + "\n")
    return 0


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("work", type=Path, help="a work folder with input.json and a test script")
    p.add_argument("--test", default="test.sh",
                   help="interestingness script in the folder (default test.sh; e.g. test_raw.sh)")
    p.add_argument("--file", default="prog.wgsl", help="the program to keep fixed (default prog.wgsl)")
    args = p.parse_args()
    sys.exit(reduce_input_dir(args.work, test=args.test, file=args.file))


if __name__ == "__main__":
    main()