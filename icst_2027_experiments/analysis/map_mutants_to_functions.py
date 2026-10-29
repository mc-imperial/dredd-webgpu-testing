#!/usr/bin/env python3
"""Map every mutant ID to the C function it is in, by reading the mutated source
inside the Docker image (no Dredd query tool needed, works for generated files).

In Dredd's output each mutation site is a call such as
    __dredd_replace_expr_unsigned_short_zero(0, 243164)
whose last argument is the site's first mutant number, local to the file; the
global mutant ID is the file's offset (first_id in the ranges CSV, from
gen_setup_generated.py --ranges-out) plus that number. Mutant IDs run through a
file in order, so each function owns the IDs from its first site up to the next
function's first site (the last function: up to the end of the file's range).

Functions are found with a simple scan: an identifier followed by "(" at brace
depth 0, then "{" opening the body. Comments and string literals are skipped.
Good enough for Mesa's style; files where it finds nothing are reported.

Usage (on a machine with the image, from the repository root):
  python3 icst_2027_experiments/analysis/map_mutants_to_functions.py \
      icst_2027_experiments/generated/mutant_file_ranges.csv \
      --out icst_2027_experiments/generated/mutant_function_ranges.csv
Options: --image (default dredd-webgpu-testing:reachability-stability),
         --mesa (default /data/mesa_tracked)
Output CSV: first_id,mutants,path,function  (global IDs, one row per function)
"""
import argparse
import csv
import json
import subprocess
import sys

# Runs inside the container: prints, per file, the functions and the smallest
# local mutant number found in each.
INNER = r'''
import json, os, re, sys
mesa = sys.argv[1]
paths = json.loads(sys.stdin.readline())
ident = re.compile(r"[A-Za-z_][A-Za-z0-9_]*")
call = re.compile(r"__dredd_[A-Za-z0-9_]+\s*\(")
keywords = {"if", "for", "while", "switch", "return", "sizeof", "defined"}

def strip(text):
    # blank out comments and string/char literals, keeping offsets
    out, i, n = list(text), 0, len(text)
    while i < n:
        c = text[i]
        if text.startswith("//", i):
            j = text.find("\n", i); j = n if j < 0 else j
            for k in range(i, j): out[k] = " "
            i = j
        elif text.startswith("/*", i):
            j = text.find("*/", i + 2); j = n if j < 0 else j + 2
            for k in range(i, j):
                if out[k] != "\n": out[k] = " "
            i = j
        elif c in "\"'":
            j = i + 1
            while j < n and text[j] != c:
                j += 2 if text[j] == "\\" else 1
            for k in range(i + 1, min(j, n)): out[k] = " "
            i = j + 1
        else:
            i += 1
    return "".join(out)

def last_int_arg(s, open_paren):
    depth, i = 0, open_paren
    while i < len(s):
        if s[i] == "(": depth += 1
        elif s[i] == ")":
            depth -= 1
            if depth == 0:
                m = re.search(r"(\d+)\s*$", s[open_paren + 1:i])
                return int(m.group(1)) if m else None
        i += 1
    return None

for path in paths:
    text = strip(open(os.path.join(mesa, path), errors="replace").read())
    # skip the prelude (helper definitions)
    end = text.find("DREDD PRELUDE END")
    start_at = 0 if end < 0 else end
    depth, candidate, current, funcs = 0, None, None, {}
    i, n = start_at, len(text)
    while i < n:
        c = text[i]
        if c == "{":
            if depth == 0 and candidate:
                current = candidate
                funcs.setdefault(current, None)
            depth += 1
        elif c == "}":
            depth = max(0, depth - 1)
            if depth == 0:
                current, candidate = None, None
        elif c == ";" and depth == 0:
            candidate = None
        elif depth == 0 and (c.isalpha() or c == "_"):
            m = ident.match(text, i)
            j = m.end()
            k = j
            while k < n and text[k] in " \t\n": k += 1
            if k < n and text[k] == "(" and m.group(0) not in keywords and not m.group(0).startswith("__dredd"):
                candidate = m.group(0)
            i = j
            continue
        elif depth > 0 and c == "_" and current:
            m = call.match(text, i)
            if m:
                v = last_int_arg(text, m.end() - 1)
                if v is not None and (funcs[current] is None or v < funcs[current]):
                    funcs[current] = v
                i = m.end()
                continue
        i += 1
    print(json.dumps({"path": path, "funcs": {f: v for f, v in funcs.items() if v is not None}}))
'''


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("ranges")
    ap.add_argument("--image", default="dredd-webgpu-testing:reachability-stability")
    ap.add_argument("--mesa", default="/data/mesa_tracked")
    ap.add_argument("--out", required=True)
    args = ap.parse_args()

    files = []
    with open(args.ranges) as f:
        for r in csv.DictReader(line for line in f if not line.startswith("#")):
            files.append((int(r["first_id"]), int(r["mutants"]), r["path"]))

    res = subprocess.run(["docker", "run", "--rm", "-i", args.image, "python3", "-c", INNER, args.mesa],
                         input=json.dumps([p for _, _, p in files]) + "\n", capture_output=True, text=True)
    if res.returncode != 0:
        sys.exit(f"docker run failed:\n{res.stderr}")
    found = {d["path"]: d["funcs"] for d in map(json.loads, res.stdout.splitlines()) if d}

    rows, empty, n_funcs = [], [], 0
    for first, size, path in files:
        funcs = sorted(found.get(path, {}).items(), key=lambda kv: kv[1])
        if not funcs:
            empty.append(path)
            rows.append((first, size, path, "?"))
            continue
        # anything before the first function's first site belongs to that function
        starts = [0] + [v for _, v in funcs[1:]]
        ends = starts[1:] + [size]
        for (name, _), s, e in zip(funcs, starts, ends):
            if e > s:
                rows.append((first + s, e - s, path, name))
                n_funcs += 1

    with open(args.out, "w", newline="") as f:
        f.write(f"# from {args.image}, {args.mesa}, by map_mutants_to_functions.py\n")
        w = csv.writer(f)
        w.writerow(["first_id", "mutants", "path", "function"])
        w.writerows(rows)
    print(f"{len(files)} files, {n_funcs:,} functions with mutants; wrote {args.out}")
    if empty:
        print(f"no functions found in {len(empty)} file(s) (whole file mapped to '?'): " + ", ".join(empty[:10]))
    covered = sum(r[1] for r in rows)
    print(f"mutants covered: {covered:,} of {sum(s for _, s, _ in files):,}")


if __name__ == "__main__":
    main()