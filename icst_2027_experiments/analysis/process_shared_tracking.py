#!/usr/bin/env python3
"""Summarise one shared-execution reachability run, on the instance that holds it.

Reads every tracking folder under a run's repeat directory -- either
<repeat>/tracking (one process per server) or <repeat>/<n>/tracking (one
process per test file) -- including files already compressed to .txt.zst.
Each test_id_N.txt lists the mutants one test reached (possibly with
duplicates); each folder's mapping_test_to_id.json maps test names to IDs.

Writes, in --out-dir:
  per_mutant.csv     mutant_id,n_tests   distinct tests reaching each reached mutant
  mapping_lists.json {mutant: [test names]} for the mutant IDs in --ids
                     (the isolated <=100-test mapping), for the subset check
  summary.txt        tests tracked, mutants reached, anything unexpected

Usage:
  process_shared_tracking.py <repeat dir> --ids mapping_ids.txt --out-dir DIR
"""
import argparse
import glob
import json
import os
import subprocess
import sys
import time
from collections import defaultdict

try:
    import zstandard
    _DCTX = zstandard.ZstdDecompressor()
except ImportError:
    _DCTX = None


def read_mutants(path):
    if path.endswith(".zst"):
        if _DCTX is not None:
            with open(path, "rb") as f:
                data = _DCTX.stream_reader(f).read()
        else:
            data = subprocess.run(["zstd", "-dcq", path], check=True, capture_output=True).stdout
    else:
        with open(path, "rb") as f:
            data = f.read()
    return {int(x) for x in data.split()}


def tracking_dirs(repeat_dir):
    direct = os.path.join(repeat_dir, "tracking")
    if os.path.isdir(direct):
        return [direct]
    dirs = sorted(glob.glob(os.path.join(repeat_dir, "*", "tracking")),
                  key=lambda d: int(os.path.basename(os.path.dirname(d)))
                  if os.path.basename(os.path.dirname(d)).isdigit() else 0)
    if not dirs:
        sys.exit(f"no tracking folders under {repeat_dir}")
    return dirs


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("repeat_dir")
    ap.add_argument("--ids", required=True, help="file of mutant IDs (one per line) to keep test lists for")
    ap.add_argument("--out-dir", required=True)
    args = ap.parse_args()

    wanted = {int(l) for l in open(args.ids) if l.strip()}
    counts = defaultdict(int)
    lists = defaultdict(list)
    seen_names = set()
    n_files = n_dup = n_unmapped = n_no_mapping = 0
    t0 = time.time()

    dirs = tracking_dirs(args.repeat_dir)
    for d in dirs:
        mpath = os.path.join(d, "mapping_test_to_id.json")
        if os.path.exists(mpath):
            inv = {str(v).replace("test_id_", ""): k for k, v in json.load(open(mpath)).items()}
        else:
            inv, n_no_mapping = {}, n_no_mapping + 1
        for f in os.listdir(d):
            if not f.startswith("test_id_"):
                continue
            tid = f[len("test_id_"):].split(".")[0]
            name = inv.get(tid)
            if name is None:
                n_unmapped += 1
                name = f"{d}:{tid}"
            if name in seen_names:  # same test tracked twice: count it once
                n_dup += 1
                continue
            seen_names.add(name)
            ms = read_mutants(os.path.join(d, f))
            for m in ms:
                counts[m] += 1
            for m in ms & wanted if len(ms) > len(wanted) else (m for m in ms if m in wanted):
                lists[m].append(name)
            n_files += 1
            if n_files % 5000 == 0:
                print(f"  {n_files:,} tests read, {len(counts):,} mutants so far, {time.time() - t0:.0f} s", flush=True)

    os.makedirs(args.out_dir, exist_ok=True)
    with open(os.path.join(args.out_dir, "per_mutant.csv"), "w") as f:
        f.write("mutant_id,n_tests\n")
        for m in sorted(counts):
            f.write(f"{m},{counts[m]}\n")
    with open(os.path.join(args.out_dir, "mapping_lists.json"), "w") as f:
        json.dump({str(m): sorted(v) for m, v in sorted(lists.items())}, f)
    summary = [
        f"repeat dir: {args.repeat_dir}",
        f"tracking folders: {len(dirs)}",
        f"tests tracked: {n_files}",
        f"mutants reached: {len(counts)}",
        f"mapping mutants reached: {len(lists)} of {len(wanted)}",
        f"tracking files whose test appeared twice (counted once): {n_dup}",
        f"tracking files with no name in their mapping: {n_unmapped}",
        f"tracking folders with no mapping file: {n_no_mapping}",
        f"seconds: {time.time() - t0:.0f}",
    ]
    open(os.path.join(args.out_dir, "summary.txt"), "w").write("\n".join(summary) + "\n")
    print("\n".join(summary))


if __name__ == "__main__":
    main()