"""Which reduced kills still read their input buffers?

For each reduction folder (results/reduce/reduce-batch/<mutant>/, with input.json),
report for the original fuzz program, the reduced program and (if polished) raw.wgsl
whether each input binding in input.json is declared and actually read.

  python3 scan_inputs.py results/reduce/reduce-batch [--polish results/polish] [--only-reads]

Columns: mutant, mode, final lines, then for each stage 'R' (input read), 'd' (declared,
never used), '-' (not declared), '?' (file missing). A kill whose reduced column is 'R'
still depends on runtime input.
"""

import argparse
import json
import re
from pathlib import Path

DECL = re.compile(r"@group\s*\(\s*(\d+)\s*\)\s*@binding\s*\(\s*(\d+)\s*\)\s*var\s*(?:<[^>]*>)?\s+(\w+)|"
                  r"@binding\s*\(\s*(\d+)\s*\)\s*@group\s*\(\s*(\d+)\s*\)\s*var\s*(?:<[^>]*>)?\s+(\w+)")


def bindings(src: str) -> dict[str, str]:
    """{"group:binding": variable name} for every declared resource."""
    src = re.sub(r"/\*.*?\*/|//[^\n]*", "", src, flags=re.S)
    out = {}
    for m in DECL.finditer(src):
        if m.group(1) is not None:
            g, b, name = m.group(1), m.group(2), m.group(3)
        else:
            b, g, name = m.group(4), m.group(5), m.group(6)
        out[f"{int(g)}:{int(b)}"] = name
    return out


def status(path: Path, keys: list[str]) -> str:
    """'R' if any input binding is read, 'd' if declared but unused, '-' if absent."""
    if not path.exists():
        return "?"
    src = re.sub(r"/\*.*?\*/|//[^\n]*", "", path.read_text(), flags=re.S)
    decl = bindings(src)
    best = "-"
    for k in keys:
        if k in decl:
            name = decl[k]
            uses = len(re.findall(rf"(?<![\w.]){re.escape(name)}\b", src))
            if uses > 1:            # the declaration itself is one occurrence
                return "R"
            best = "d"
    return best


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("batch", type=Path)
    p.add_argument("--polish", type=Path, help="folder of polished copies (raw.wgsl)")
    p.add_argument("--only-reads", action="store_true", help="list only kills whose reduced program reads input")
    args = p.parse_args()

    rows = []
    for d in sorted(x for x in args.batch.iterdir() if (x / "input.json").exists()):
        try:
            keys = list(json.loads((d / "input.json").read_text()))
        except json.JSONDecodeError:
            keys = []
        res = json.loads((d / "result.json").read_text()) if (d / "result.json").exists() else {}
        orig = status(d / "original.wgsl", keys)
        red = status(d / "reduced.wgsl", keys)
        raw = status(args.polish / d.name / "raw.wgsl", keys) if args.polish else ""
        rows.append((d.name, res.get("mode", "?"), res.get("final_lines", "?"), orig, red, raw))

    rows.sort(key=lambda r: (r[4] != "R", r[1] != "mismatch", r[2] if isinstance(r[2], int) else 10**9))
    print(f"{'mutant':>8} {'mode':>8} {'lines':>5}  original reduced" + ("  raw" if args.polish else ""))
    for m, mode, lines, orig, red, raw in rows:
        if args.only_reads and red != "R":
            continue
        print(f"{m:>8} {mode:>8} {lines:>5}  {orig:>8} {red:>7}" + (f"  {raw:>3}" if args.polish else ""))
    n = len(rows)
    print(f"\n{n} kills: input read by {sum(r[3] == 'R' for r in rows)} originals, "
          f"{sum(r[4] == 'R' for r in rows)} reduced programs "
          f"({sum(r[4] == 'R' and r[1] == 'mismatch' for r in rows)} of them mismatches)")


if __name__ == "__main__":
    main()