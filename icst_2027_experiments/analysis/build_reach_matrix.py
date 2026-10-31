#!/usr/bin/env python3
"""Build the mutant-by-test reachability matrix of one reachability run (one repeat).

Reads every tracking folder under the repeat directory, or under one repeat inside a
.tar.zst archive (--archive-prefix; streamed, nothing unpacked) -- <repeat>/tracking
(shared, whole subtree), or <repeat>/<n>/tracking (isolated: one test each;
shared file subtrees: one test file each). In each, mapping_test_to_id.json maps
CTS test names to test_id_N, and test_id_N.txt[.zst] lists the mutants that test
reached. Tests are identified by their full CTS name, so the same column means the
same test in every matrix built with the same --tests file.

Shared indexes, so that matrices from different runs line up:
  --mutants   the row index: mutant IDs, one per line. If the file does not exist it
              is created from --mutants-from: every mutant reached (n_tests > 0)
              in any of those per-mutant CSVs (default: all isolated repeats).
              Mutants reached in this run but not in the index are counted and
              reported, not stored.
  --tests     the column index: test names, one per line. Created from this run if
              it does not exist; names this run has that the index lacks are
              appended (earlier matrices then simply have no bits for them).

Output (--out, a .npz): bits (rows = mutants, columns = tests, packed 8 per byte,
numpy's default big-endian bit order), mutants (the row index), n_tests (columns
used), and the run directory. Plus a short summary on the console.

Usage (from the repository root):
  python3 icst_2027_experiments/analysis/build_reach_matrix.py \\
      results/reachability/raw/isolated/run-20261016_152317/isolated-no-cache/servers-1/repeat-4 \\
      --mutants results/reachability/matrix/mutants.txt \\
      --tests results/reachability/matrix/tests.txt \\
      --out results/reachability/matrix/isolated-run-20261016_152317.npz --jobs 16
"""
import argparse
import csv
import glob
import json
import os
import subprocess
import sys
import time
from multiprocessing import Pool

import numpy as np

try:
    import zstandard
except ImportError:
    zstandard = None


def read_ids(path):
    if path.endswith(".zst"):
        if zstandard is not None:
            with open(path, "rb") as f:
                data = zstandard.ZstdDecompressor().stream_reader(f).read()
        else:
            data = subprocess.run(["zstd", "-dcq", path], check=True, capture_output=True).stdout
    else:
        with open(path, "rb") as f:
            data = f.read()
    parts = data.split()
    return np.unique(np.array(parts, dtype=np.int64)) if parts else np.empty(0, dtype=np.int64)


POPCOUNT = np.array([bin(i).count("1") for i in range(256)], dtype=np.uint8)


def row_counts(bits, chunk=4096):
    """Number of set bits (tests) in each row, computed in chunks to bound memory."""
    out = np.empty(bits.shape[0], dtype=np.int64)
    for i in range(0, bits.shape[0], chunk):
        out[i:i + chunk] = POPCOUNT[bits[i:i + chunk]].sum(axis=1, dtype=np.int64)
    return out


def tracking_dirs(repeat_dir):
    direct = os.path.join(repeat_dir, "tracking")
    if os.path.isdir(direct):
        return [direct]
    return sorted(glob.glob(os.path.join(repeat_dir, "*", "tracking")))


def read_folder(d):
    """[(test name, mutant IDs)] for one tracking folder, plus problems found."""
    out, problems = [], []
    mpath = os.path.join(d, "mapping_test_to_id.json")
    if not os.path.exists(mpath):
        return out, [f"{d}: no mapping_test_to_id.json"]
    inv = {str(v).replace("test_id_", ""): k for k, v in json.load(open(mpath)).items()}
    for f in os.listdir(d):
        if not f.startswith("test_id_"):
            continue
        tid = f[len("test_id_"):].split(".")[0]
        name = inv.get(tid)
        if name is None:
            problems.append(f"{d}/{f}: not in the folder's mapping")
            continue
        out.append((name, read_ids(os.path.join(d, f))))
    return out, problems


def ids_from_bytes(data):
    parts = data.split()
    return np.unique(np.array(parts, dtype=np.int64)) if parts else np.empty(0, dtype=np.int64)


def archive_tests(archive, prefix):
    """Yield ([(test name, mutant IDs)], problems) per tracking folder, streaming a
    .tar.zst (or .tar) archive without unpacking it. Only members under `prefix`
    (a path inside the archive, e.g. webgpu-shader-run/run-X/isolated-no-cache/
    servers-1/repeat-5/) are read."""
    import tarfile
    prefix = prefix.rstrip("/") + "/"
    proc = None
    if archive.endswith(".zst"):
        proc = subprocess.Popen(["zstd", "-dcq", archive], stdout=subprocess.PIPE)
        tf = tarfile.open(fileobj=proc.stdout, mode="r|")
    else:
        tf = tarfile.open(archive, mode="r|")
    pending = {}  # tracking folder -> {"mapping": {...} or None, "files": {tid: bytes}}

    def flush(folder):
        entry = pending.pop(folder)
        if entry["mapping"] is None:
            return [], [f"{folder}: no mapping_test_to_id.json"] if entry["files"] else []
        inv = {str(v).replace("test_id_", ""): k for k, v in entry["mapping"].items()}
        out, probs = [], []
        for tid, data in entry["files"].items():
            name = inv.get(tid)
            if name is None:
                probs.append(f"{folder}/test_id_{tid}: not in the folder's mapping")
                continue
            out.append((name, data))
        return out, probs

    current = None
    for m in tf:
        if not m.isfile() or not m.name.startswith(prefix) or "/tracking/" not in m.name:
            continue
        folder, fname = m.name.rsplit("/", 1)
        if current is not None and folder != current and current in pending:
            yield flush(current)
        current = folder
        entry = pending.setdefault(folder, {"mapping": None, "files": {}})
        data = tf.extractfile(m).read()
        if fname == "mapping_test_to_id.json":
            entry["mapping"] = json.loads(data)
        elif fname.startswith("test_id_"):
            tid = fname[len("test_id_"):].split(".")[0]
            if fname.endswith(".zst"):
                data = (zstandard.ZstdDecompressor().decompressobj().decompress(data) if zstandard
                        else subprocess.run(["zstd", "-dcq"], input=data, capture_output=True, check=True).stdout)
            entry["files"][tid] = ids_from_bytes(data)
    for folder in list(pending):
        yield flush(folder)
    if proc is not None:
        proc.wait()
        if proc.returncode not in (0, None):
            sys.exit(f"zstd failed on {archive} (exit {proc.returncode})")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("repeat_dir", help="a repeat folder, or a .tar.zst/.tar archive (with --archive-prefix)")
    ap.add_argument("--archive-prefix",
                    help="for an archive: the repeat's path inside it, e.g. "
                         "webgpu-shader-run/run-20261016_130744/isolated-no-cache/servers-1/repeat-5")
    ap.add_argument("--mutants", required=True, type=str)
    ap.add_argument("--mutants-from", default="results/reachability/processed/isolated/run-*/"
                                              "mutant_to_tests_isolated-no-cache_per_mutant.csv",
                    help="per-mutant CSVs (glob) to build --mutants from, if it does not exist yet")
    ap.add_argument("--tests", required=True, type=str)
    ap.add_argument("--out", required=True)
    ap.add_argument("--jobs", type=int, default=8, help="tracking folders read in parallel")
    args = ap.parse_args()
    if zstandard is None:
        print("note: python zstandard not installed, using the zstd command (slower): "
              "pip install zstandard", flush=True)

    if not os.path.exists(args.mutants):
        sources = sorted(glob.glob(args.mutants_from))
        if not sources:
            sys.exit(f"{args.mutants} does not exist and --mutants-from matches no files: {args.mutants_from}")
        reached = set()
        for f in sources:
            with open(f, newline="") as fh:
                reached |= {int(r["mutant_id"]) for r in csv.DictReader(fh) if int(r["n_tests"]) > 0}
        os.makedirs(os.path.dirname(os.path.abspath(args.mutants)), exist_ok=True)
        with open(args.mutants, "w") as fh:
            fh.write("".join(f"{m}\n" for m in sorted(reached)))
        print(f"created {args.mutants}: {len(reached):,} mutants reached in {len(sources)} file(s) "
              f"matching {args.mutants_from}", flush=True)
    mutants = np.array(sorted({int(l) for l in open(args.mutants) if l.strip()}), dtype=np.int64)
    tests = [l.rstrip("\n") for l in open(args.tests)] if os.path.exists(args.tests) else []
    col = {t: i for i, t in enumerate(tests)}
    n_new_tests = 0

    is_archive = args.repeat_dir.endswith((".tar", ".tar.zst"))
    if is_archive:
        if not args.archive_prefix:
            sys.exit("reading an archive needs --archive-prefix (the repeat's path inside it)")
        print(f"{args.repeat_dir} [{args.archive_prefix}]: streaming the archive; {len(mutants):,} mutants in "
              f"the row index; {len(tests):,} tests in the column index", flush=True)
    else:
        dirs = tracking_dirs(args.repeat_dir)
        if not dirs:
            sys.exit(f"no tracking folders under {args.repeat_dir}")
        print(f"{args.repeat_dir}: {len(dirs):,} tracking folders; {len(mutants):,} mutants in the row index; "
              f"{len(tests):,} tests in the column index", flush=True)

    # Columns grow as new test names appear; allocate generously and trim at the end.
    width = max(len(tests), 1) + 300_000
    bits = np.zeros((len(mutants), (width + 7) // 8), dtype=np.uint8)
    seen, dup, outside, problems, n_tests = set(), 0, set(), [], 0
    t0 = time.time()

    with Pool(args.jobs) as pool:
        source = (archive_tests(args.repeat_dir, args.archive_prefix) if is_archive
                  else pool.imap_unordered(read_folder, dirs, chunksize=64))
        for folder_tests, probs in source:
            problems += probs
            for name, ids in folder_tests:
                if name in seen:       # the same test tracked twice: count it once
                    dup += 1
                    continue
                seen.add(name)
                c = col.get(name)
                if c is None:
                    c = col[name] = len(tests)
                    tests.append(name)
                    n_new_tests += 1
                    if c >= width:
                        sys.exit("more tests than allocated columns -- raise the allocation")
                idx = np.searchsorted(mutants, ids)
                inside = (idx < len(mutants)) & (mutants[np.minimum(idx, len(mutants) - 1)] == ids)
                if not inside.all():
                    outside.update(ids[~inside].tolist())
                bits[idx[inside], c >> 3] |= np.uint8(0x80 >> (c & 7))
                n_tests += 1
                if n_tests % 10000 == 0:
                    print(f"  {n_tests:,} tests read ({time.time() - t0:.0f} s)", flush=True)

    bits = bits[:, : (len(tests) + 7) // 8]
    if n_new_tests:
        with open(args.tests, "w") as f:
            f.write("\n".join(tests) + "\n")
    os.makedirs(os.path.dirname(os.path.abspath(args.out)), exist_ok=True)
    np.savez_compressed(args.out, bits=bits, mutants=mutants, n_tests=len(tests),
                        run=os.path.abspath(args.repeat_dir) + (f"::{args.archive_prefix}" if is_archive else ""))

    per_mutant = row_counts(bits)
    print(f"tests read: {n_tests:,} (counted once: {dup:,} duplicates skipped); "
          f"new test names added to {args.tests}: {n_new_tests:,} (index now {len(tests):,})")
    reached = per_mutant > 0
    print(f"mutants in the index reached by at least one test: {reached.sum():,} of {len(mutants):,}; "
          f"reaching tests per mutant: median {int(np.median(per_mutant[reached])) if reached.any() else 0:,}, "
          f"max {int(per_mutant.max()) if len(per_mutant) else 0:,}")
    print(f"mutants reached but not in the row index: {len(outside):,}")
    if problems:
        print(f"problems ({len(problems)}), first few:\n  " + "\n  ".join(problems[:5]))
    print(f"wrote {args.out} ({time.time() - t0:.0f} s)")


if __name__ == "__main__":
    main()