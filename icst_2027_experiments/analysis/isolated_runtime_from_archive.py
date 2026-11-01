#!/usr/bin/env python3
"""Measure the wall-clock time of isolated reachability runs kept in a .tar.zst
archive, the same way check_isolated_runtime.sh measures runs on the instances, and
add them to its CSV (results/reachability/runtimes/isolated_runtimes.csv), so that
gen_rq1a_runtime.py uses every complete repeat.

As in check_isolated_runtime.sh:
  start = modification time of test 0's run_info.json - its time_seconds
  end   = modification time of the highest-numbered test's run_info.json
The archive keeps each file's modification time, so this needs no unpacking; the
archive is streamed once (it is large: expect a while; run in tmux).

Usage (from the repository root, with python zstandard installed):
  python3 icst_2027_experiments/analysis/isolated_runtime_from_archive.py \\
      results/reachability/raw/isolated-archives/results-webgpu-shader-run-20261027.tar.zst \\
      --repeat webgpu-shader-run/run-20261009_130726/isolated-no-cache/servers-1/repeat-1 \\
      --repeat webgpu-shader-run/run-20261016_130744/isolated-no-cache/servers-1/repeat-5 \\
      --csv results/reachability/runtimes/isolated_runtimes.csv

Rows for the same run already in the CSV are replaced; other rows are kept. The
ip and host columns say "archive" and the archive's file name.
"""
import argparse
import csv
import datetime as dt
import json
import os
import re
import sys
import tarfile

try:
    import zstandard
except ImportError:
    sys.exit("needs python zstandard (pip install zstandard, or activate the venv)")


def iso(t):
    return dt.datetime.fromtimestamp(t, dt.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("archive")
    ap.add_argument("--repeat", action="append", required=True,
                    help="a repeat folder's path inside the archive (repeatable)")
    ap.add_argument("--csv", required=True, help="isolated_runtimes.csv, to update")
    args = ap.parse_args()

    prefixes = [p.strip("/") for p in args.repeat]
    pat = re.compile(r"^\.?/?(" + "|".join(map(re.escape, prefixes)) + r")/(\d+)/run_info\.json$")
    info = {p: {"tests": 0, "first_mtime": None, "first_secs": None, "last_n": -1, "last_mtime": None}
            for p in prefixes}

    n_members = 0
    with open(args.archive, "rb") as fh:
        stream = zstandard.ZstdDecompressor(max_window_size=2 ** 31).stream_reader(fh)
        with tarfile.open(fileobj=stream, mode="r|") as tar:
            for m in tar:
                n_members += 1
                if n_members % 1_000_000 == 0:
                    print(f"  {n_members:,} archive entries read", flush=True)
                hit = pat.match(m.name)
                if not hit or not m.isfile():
                    continue
                p, n = hit.group(1), int(hit.group(2))
                r = info[p]
                r["tests"] += 1
                if n == 0:
                    r["first_mtime"] = m.mtime
                    r["first_secs"] = float(json.loads(tar.extractfile(m).read())["time_seconds"])
                if n > r["last_n"]:
                    r["last_n"], r["last_mtime"] = n, m.mtime

    new_rows = []
    for p, r in info.items():
        if r["tests"] == 0 or r["first_mtime"] is None:
            sys.exit(f"{p}: no run_info.json files (or no test 0) found in the archive -- check the path")
        start = r["first_mtime"] - r["first_secs"]
        hours = (r["last_mtime"] - start) / 3600
        run = p.split("webgpu-shader-run/", 1)[-1]          # as check_isolated_runtime.sh writes it
        print(f"{run}: {r['tests']:,} tests, {iso(start)} -> {iso(r['last_mtime'])}, about {hours:.1f} h")
        new_rows.append({"ip": "archive", "host": os.path.basename(args.archive), "run": run,
                         "tests": r["tests"], "start_utc": iso(start), "end_utc": iso(r["last_mtime"]),
                         "hours": f"{hours:.2f}"})

    # Update the CSV: keep its comment lines and other rows, replace rows for these runs.
    comments, rows, fields = [], [], ["ip", "host", "run", "tests", "start_utc", "end_utc", "hours"]
    if os.path.exists(args.csv):
        with open(args.csv) as f:
            lines = f.read().splitlines()
        comments = [l for l in lines if l.startswith("#")]
        body = [l for l in lines if not l.startswith("#")]
        if body:
            reader = csv.DictReader(body)
            fields = reader.fieldnames
            rows = list(reader)
    done = {r["run"] for r in new_rows}
    rows = [r for r in rows if r["run"] not in done] + new_rows
    comments.append(f"# {', '.join(sorted(done))}: added {dt.datetime.now(dt.timezone.utc):%Y-%m-%dT%H:%M:%SZ} "
                    f"by isolated_runtime_from_archive.py from {os.path.basename(args.archive)} (file mtimes in the archive)")
    with open(args.csv, "w", newline="") as f:
        f.write("\n".join(comments) + "\n")
        w = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        w.writeheader()
        w.writerows(rows)
    print(f"updated {args.csv}: {len(rows)} runs")


if __name__ == "__main__":
    main()