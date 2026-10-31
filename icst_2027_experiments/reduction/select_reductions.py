#!/usr/bin/env python3
"""Choose which fuzzing kills of CTS survivors to reduce (RQ3), reproducibly.

Two groups:
  A  neighbour groups: source lines where two or more different mutants were killed
     (e.g. several replacements of one operator). Every kill on the chosen lines is
     reduced, so we can see whether neighbouring mutants reduce to the same program
     (and whether one's reduced program kills the others: reductions.jsonl,
     also_kills). At most one chosen line per file, for spread.
  B  variety sample: one kill per function, from functions not in group A, spread
     over files (with --kinds including crashes: half mismatches, half crashes).
Only output-mismatch kills are used by default (--kinds mismatch,crash adds crashes);
timeouts are always left out (the reducer handles mismatch and crash kills only).

Each mutant is reduced from one trial that killed it: the first trial (in sorted
order) whose kill was a mismatch, else a crash.

Inputs (defaults are the repository's locations; run from the repository root):
  --kills          the fuzz trials' kills.jsonl files (glob)
  --survivors      the consistent CTS survivors (kills of other mutants are ignored)
  --mutation-info  Dredd's mutation-info.json(.zst) of the mutated build that was fuzzed
  --ranges         mutant_file_ranges.csv (first_id,mutants,path), from gen_setup_generated.py
  --functions      mutant_function_ranges.csv, from map_mutants_to_functions.py
Output: --out CSV, one row per selected mutant:
  mutant_id,group,trial_dir,status,path,line,function,snippet

Usage:
  python3 icst_2027_experiments/reduction/select_reductions.py \\
      --out results/reduce/survivors-72h/selection.csv
"""
import argparse
import bisect
import csv
import glob
import json
import os
import random
import subprocess
import sys
from collections import defaultdict

STATUS_RANK = {"KILL_OUTPUT_MISMATCH": 0, "KILL_CRASH": 1}   # preferred first; others ignored


def load_json(path):
    if path.endswith(".zst"):
        data = subprocess.run(["zstd", "-dcq", path], capture_output=True, check=True).stdout
        return json.loads(data)
    with open(path) as f:
        return json.load(f)


def read_csv(path):
    with open(path) as f:
        return list(csv.DictReader(line for line in f if not line.startswith("#")))


def mutation_ids(value):
    """Every mutationId inside one mutation group (some groups hold several instances)."""
    out = []
    if isinstance(value, dict):
        for k, v in value.items():
            if k == "mutationId" and isinstance(v, int):
                out.append(v)
            else:
                out += mutation_ids(v)
    elif isinstance(value, list):
        for v in value:
            out += mutation_ids(v)
    return out


def find_key(value, key):
    """The first value stored under `key` anywhere inside a mutation group (breadth-first)."""
    queue = [value]
    while queue:
        v = queue.pop(0)
        if isinstance(v, dict):
            if key in v:
                return v[key]
            queue += list(v.values())
        elif isinstance(v, list):
            queue += v
    return None


def find_suffix(value, suffix):
    """The first value under any key ending in `suffix` (top level of the group first)."""
    queue = [value]
    while queue:
        v = queue.pop(0)
        if isinstance(v, dict):
            for k in sorted(v):
                if k.endswith(suffix):
                    return v[k]
            queue += list(v.values())
        elif isinstance(v, list):
            queue += v
    return None


def locations(info_path, ranges):
    """mutant ID -> (path, line, snippet), with paths as in the ranges CSV."""
    first = {r["path"]: (int(r["first_id"]), int(r["mutants"])) for r in ranges}
    per_file = []
    for f in load_json(info_path)["infoForFiles"]:
        # filenames are relative to the build folder, ranges paths to the Mesa root
        path = os.path.normpath(os.path.join("build", f["filename"]))
        entries = []
        for node in f["mutationTree"]:
            for group in node["mutationGroups"]:
                for kind, val in group.items():
                    # statements have start/snippet; operators and expressions exprStart/exprSnippet
                    # (plus lhsStart, operandStart, ...: used only if nothing better is there)
                    start = find_key(val, "start") or find_key(val, "exprStart") or find_suffix(val, "Start")
                    line = start.get("line") if isinstance(start, dict) else None
                    snippet = (find_key(val, "snippet") or find_key(val, "exprSnippet")
                               or find_suffix(val, "Snippet") or kind)
                    for mid in mutation_ids(val):
                        entries.append((mid, line, snippet))
        per_file.append((path, entries))

    # Are the IDs in mutation-info.json global, or local to each file? Check against the ranges.
    fits_global = fits_local = checked = 0
    for path, entries in per_file:
        if path not in first or not entries:
            continue
        lo, size = first[path]
        ids = [e[0] for e in entries]
        checked += 1
        fits_global += all(lo <= i < lo + size for i in ids)
        fits_local += all(0 <= i < size for i in ids)
    missing = [p for p, e in per_file if e and p not in first]
    if missing:
        sys.exit(f"{len(missing)} files in mutation-info.json not in the ranges CSV, e.g. {missing[:3]}")
    if fits_global == checked:
        offset = lambda path: 0
        how = "global"
    elif fits_local == checked:
        offset = lambda path: first[path][0]
        how = "local to each file (offset by first_id)"
    else:
        sys.exit(f"mutation IDs fit neither global ({fits_global}/{checked} files) nor per-file "
                 f"({fits_local}/{checked}) ranges: is this the mutation info of the fuzzed build?")
    loc = {}
    for path, entries in per_file:
        off = offset(path)
        for mid, line, snippet in entries:
            loc[mid + off] = (path, line, snippet)
    print(f"mutation info: {len(loc):,} mutants in {len(per_file)} files; IDs are {how}")
    return loc


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--kills", default="results/fuzz/run_72h/cts5x72h-random-seed*/cts5x72h-random-seed/kills.jsonl")
    ap.add_argument("--survivors", default="results/cts-survival/combined/survivors.txt")
    ap.add_argument("--mutation-info", default="icst_2027_experiments/generated/mutation-info.json.zst")
    ap.add_argument("--ranges", default="icst_2027_experiments/generated/mutant_file_ranges.csv")
    ap.add_argument("--functions", default="icst_2027_experiments/generated/mutant_function_ranges.csv")
    ap.add_argument("--groups", type=int, default=5, help="group A: number of source lines")
    ap.add_argument("--group-max", type=int, default=4, help="group A: at most this many kills per line")
    ap.add_argument("--sample", type=int, default=20, help="group B: number of kills")
    ap.add_argument("--kinds", default="mismatch", help="kills to use: mismatch, crash or mismatch,crash")
    ap.add_argument("--seed", type=int, default=1)
    ap.add_argument("--out", required=True)
    args = ap.parse_args()
    rng = random.Random(args.seed)

    survivors = {int(x) for x in open(args.survivors).read().split()}
    names = {"mismatch": "KILL_OUTPUT_MISMATCH", "crash": "KILL_CRASH"}
    try:
        kinds = {names[k.strip()] for k in args.kinds.split(",")}
    except KeyError:
        sys.exit(f"--kinds: use mismatch, crash or mismatch,crash (got {args.kinds})")

    # Kills: per mutant, the preferred trial and status.
    kill_files = sorted(glob.glob(args.kills))
    if not kill_files:
        sys.exit(f"no kills files match {args.kills}")
    best, n_rec, n_timeout, n_other = {}, 0, 0, 0
    for path in kill_files:
        trial = os.path.dirname(path)
        with open(path) as f:
            for line in f:
                if not line.strip():
                    continue
                r = json.loads(line)
                n_rec += 1
                mid, st = int(r["mutant_id"]), r["status"]
                if mid not in survivors:
                    continue
                if st not in STATUS_RANK:
                    n_timeout += 1
                    continue
                if st not in kinds:
                    n_other += 1
                    continue
                if mid not in best or STATUS_RANK[st] < STATUS_RANK[best[mid][1]]:
                    best[mid] = (trial, st)
    print(f"kills: {n_rec:,} records in {len(kill_files)} trials; {len(best):,} survivors with a kill of the "
          f"kinds used ({args.kinds}); left out: {n_timeout} timeout and {n_other} other-kind records")

    ranges = read_csv(args.ranges)
    loc = locations(args.mutation_info, ranges)
    funcs = sorted((int(r["first_id"]), int(r["mutants"]), r["path"], r["function"]) for r in read_csv(args.functions))
    starts = [f[0] for f in funcs]

    def function_of(mid):
        i = bisect.bisect_right(starts, mid) - 1
        if i >= 0 and mid < funcs[i][0] + funcs[i][1]:
            return funcs[i][3]
        return "?"

    no_loc = [m for m in best if m not in loc]
    if no_loc:
        sys.exit(f"{len(no_loc)} killed mutants not in the mutation info, e.g. {no_loc[:5]}")
    killed = {m: dict(trial=t, status=s, path=loc[m][0], line=loc[m][1], snippet=loc[m][2],
                      function=function_of(m)) for m, (t, s) in best.items()}

    # ---- group A: lines with two or more killed mutants, at most one line per file
    no_line = sorted(m for m, k in killed.items() if k["line"] is None)
    if no_line:
        print(f"note: {len(no_line)} killed mutants have no line in the mutation info (left out of "
              f"group A), e.g. {no_line[:5]}")
    by_line = defaultdict(list)
    for m, k in killed.items():
        if k["line"] is not None:
            by_line[(k["path"], k["line"])].append(m)
    lines = sorted(key for key, ms in by_line.items() if len(ms) >= 2)
    print(f"group A: {len(lines)} source lines with two or more killed survivors "
          f"(in {len({p for p, _ in lines})} files)")
    rng.shuffle(lines)
    chosen_lines, used_files = [], set()
    for key in lines:
        if key[0] in used_files:
            continue
        chosen_lines.append(key)
        used_files.add(key[0])
        if len(chosen_lines) == args.groups:
            break
    rows = []
    for g, key in enumerate(sorted(chosen_lines), 1):
        ms = sorted(by_line[key])
        if len(ms) > args.group_max:
            ms = sorted(rng.sample(ms, args.group_max))
        rows += [(m, f"A{g}") for m in ms]
    a_functions = {(killed[m]["path"], killed[m]["function"]) for m, _ in rows}

    # ---- group B: one kill per function (not in A), spread over files, half crashes
    per_function = defaultdict(list)
    for m, k in killed.items():
        fk = (k["path"], k["function"])
        if fk not in a_functions:
            per_function[fk].append(m)
    candidates = {"KILL_OUTPUT_MISMATCH": [], "KILL_CRASH": []}
    for fk in sorted(per_function):
        m = rng.choice(sorted(per_function[fk]))
        candidates[killed[m]["status"]].append(m)
    want = {"KILL_CRASH": args.sample // 2 if "KILL_CRASH" in kinds and "KILL_OUTPUT_MISMATCH" in kinds
                          else args.sample if "KILL_CRASH" in kinds else 0}
    want["KILL_CRASH"] = min(want["KILL_CRASH"], len(candidates["KILL_CRASH"]))
    want["KILL_OUTPUT_MISMATCH"] = min(args.sample - want["KILL_CRASH"], len(candidates["KILL_OUTPUT_MISMATCH"]))
    for st, n in want.items():
        pool = candidates[st][:]
        rng.shuffle(pool)
        picked, files = [], set()
        for spread in (True, False):        # first one per file, then fill up if needed
            for m in pool:
                if len(picked) == n:
                    break
                if m in picked or (spread and killed[m]["path"] in files):
                    continue
                picked.append(m)
                files.add(killed[m]["path"])
        rows += [(m, "B") for m in sorted(picked)]
    print(f"group B: {len(per_function)} functions outside group A; picked "
          f"{want['KILL_OUTPUT_MISMATCH']} mismatch and {want['KILL_CRASH']} crash kills")

    os.makedirs(os.path.dirname(os.path.abspath(args.out)), exist_ok=True)
    with open(args.out, "w", newline="") as f:
        f.write(f"# select_reductions.py --kinds {args.kinds} --seed {args.seed} --groups {args.groups} "
                f"--group-max {args.group_max} --sample {args.sample}\n")
        w = csv.writer(f)
        w.writerow(["mutant_id", "group", "trial_dir", "status", "path", "line", "function", "snippet"])
        for m, g in rows:
            k = killed[m]
            w.writerow([m, g, k["trial"], k["status"], k["path"], k["line"], k["function"],
                        " ".join(str(k["snippet"]).split())[:80]])
    print(f"wrote {args.out}: {len(rows)} mutants")
    for m, g in rows:
        k = killed[m]
        print(f"  {g:3} {m:>7} {k['status']:21} {k['path']}:{k['line']}  {k['function']}")


if __name__ == "__main__":
    main()