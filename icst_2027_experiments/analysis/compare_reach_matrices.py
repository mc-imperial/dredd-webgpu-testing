#!/usr/bin/env python3
"""Compare the sets of tests that reach each mutant, across reachability runs
(the matrices from build_reach_matrix.py; all share mutants.txt and tests.txt).

1. Isolated repeats against each other. Per mutant: the union U and the
   intersection I of its reaching-test sets over the repeats.
     identical      U == I: every repeat found exactly the same tests
     varies         U != I: |U| - |I| tests were found by some repeats only
   Plus, per pair of repeats, how many mutants have identical sets.

2. Each shared run against the isolated repeats. Per mutant, with S its set
   under the shared run:
     missed         S is empty (reached under isolated, not under this shared run)
     same           I <= S <= U: no different from isolated, given isolated's own variation
     fewer          S <= U but some test in I (found by every isolated repeat) is not in S
     other          S has a test that no isolated repeat found
   Broken down by |U| (the number of tests reaching the mutant under isolated).

The per-mutant CSV also has shared_union_<cfg>: the number of tests reaching each mutant
in any run of that shared configuration.

Usage (from the repository root, on moray; needs ~40 GB of memory):
  python3 icst_2027_experiments/analysis/compare_reach_matrices.py \\
      [--matrix-dir results/reachability/matrix] [--per-mutant out.csv.gz]
"""
import argparse
import glob
import gzip
import os
import re
import sys
import time
from itertools import combinations

import numpy as np

POPCOUNT = np.array([bin(i).count("1") for i in range(256)], dtype=np.uint8)
CHUNK = 2048
BINS = [("all", 1, None), ("1-100", 1, 100), ("101-1000", 101, 1000), (">1000", 1001, None)]


def pc(a):
    return POPCOUNT[a].sum(axis=1, dtype=np.int64)


def load(path):
    z = np.load(path)
    return z["bits"], z["mutants"], int(z["n_tests"])


def pad(bits, width):
    if bits.shape[1] == width:
        return bits
    out = np.zeros((bits.shape[0], width), dtype=np.uint8)
    out[:, : bits.shape[1]] = bits
    return out


def label(path):
    name = os.path.basename(path)[: -len(".npz")]
    m = re.match(r"(isolated|shared-subtree-no-cache|shared-file-subtrees-no-cache)-(run-[0-9_]+)$", name)
    if not m:
        return name
    cfg = {"isolated": "iso", "shared-subtree-no-cache": "sub", "shared-file-subtrees-no-cache": "file"}[m[1]]
    return f"{cfg} {m[2]}"


def pct(a, b):
    return f"{100 * a / b:.1f}%" if b else "-"


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--matrix-dir", default="results/reachability/matrix")
    ap.add_argument("--per-mutant", help="also write a per-mutant CSV (.csv or .csv.gz)")
    args = ap.parse_args()

    iso_paths = sorted(glob.glob(os.path.join(args.matrix_dir, "isolated-*.npz")))
    sh_paths = (sorted(glob.glob(os.path.join(args.matrix_dir, "shared-subtree-no-cache-*.npz")))
                + sorted(glob.glob(os.path.join(args.matrix_dir, "shared-file-subtrees-no-cache-*.npz"))))
    if len(iso_paths) < 2:
        sys.exit(f"need at least 2 isolated matrices in {args.matrix_dir}")
    t0 = time.time()

    # The widest matrix decides the number of columns; narrower ones get empty columns.
    widths, mutants = [], None
    for p in iso_paths + sh_paths:
        with np.load(p) as z:
            widths.append((int(z["n_tests"]) + 7) // 8)
            m = z["mutants"]
        if mutants is None:
            mutants = m
        elif not np.array_equal(m, mutants):
            sys.exit(f"{p}: different row index (mutants) from {iso_paths[0]}")
    width = max(widths)
    n = len(mutants)

    # ---- 1. isolated repeats ------------------------------------------------
    print(f"loading {len(iso_paths)} isolated matrices ({n:,} mutants) ...", flush=True)
    iso = [pad(load(p)[0], width) for p in iso_paths]
    iso_lab = [label(p) for p in iso_paths]
    U = np.empty((n, width), dtype=np.uint8)
    I = np.empty((n, width), dtype=np.uint8)
    n_rep = np.empty((len(iso), n), dtype=np.int64)
    pair_same = {pr: 0 for pr in combinations(range(len(iso)), 2)}
    for s in range(0, n, CHUNK):
        e = min(s + CHUNK, n)
        u = iso[0][s:e].copy()
        i = iso[0][s:e].copy()
        for k, b in enumerate(iso):
            u |= b[s:e]
            i &= b[s:e]
            n_rep[k, s:e] = pc(b[s:e])
        U[s:e], I[s:e] = u, i
        for a, b in pair_same:
            pair_same[(a, b)] += int((~np.any(iso[a][s:e] ^ iso[b][s:e], axis=1)).sum())
    del iso
    nU = np.concatenate([pc(U[s:s + CHUNK]) for s in range(0, n, CHUNK)])
    nI = np.concatenate([pc(I[s:s + CHUNK]) for s in range(0, n, CHUNK)])

    reached_all = (n_rep > 0).all(axis=0)
    reached_any = nU > 0
    same = reached_any & (nU == nI)
    varies = reached_any & (nU != nI)
    diff = (nU - nI)[varies]
    print(f"\n== 1. Isolated repeats ({len(iso_lab)}): {', '.join(iso_lab)}")
    print(f"mutants reached in any repeat: {reached_any.sum():,}; in every repeat: {reached_all.sum():,}")
    print(f"identical test sets in every repeat: {same.sum():,} ({pct(same.sum(), reached_any.sum())})")
    print(f"test sets vary: {varies.sum():,} ({pct(varies.sum(), reached_any.sum())})")
    if varies.any():
        rel = diff / nU[varies]
        print(f"  tests in U but not I per varying mutant: median {int(np.median(diff)):,}, "
              f"mean {diff.mean():.1f}, max {int(diff.max()):,}; "
              f"as a share of U: median {100 * np.median(rel):.1f}%, max {100 * rel.max():.1f}%")
    print("by |U| (tests reaching the mutant in any repeat):")
    print(f"  {'|U|':>9} {'mutants':>9} {'identical':>16} {'vary':>16}")
    for name, lo, hi in BINS:
        sel = reached_any & (nU >= lo) & (nU <= (hi if hi else nU.max()))
        k = sel.sum()
        print(f"  {name:>9} {k:>9,} {f'{(same & sel).sum():,} ({pct((same & sel).sum(), k)})':>16} "
              f"{f'{(varies & sel).sum():,} ({pct((varies & sel).sum(), k)})':>16}")
    print("pairs of repeats: mutants with identical test sets (of those reached in any repeat)")
    for (a, b), k in pair_same.items():
        k -= int((~reached_any).sum())   # rows empty in both count as identical; leave them out
        print(f"  {iso_lab[a]} / {iso_lab[b]}: {k:,} ({pct(k, reached_any.sum())})")

    # ---- 2. shared runs -----------------------------------------------------
    per_mutant_cols = []
    shared_union = {}      # configuration -> OR of its runs' bits (tests reaching in any run)
    print(f"\n== 2. Shared runs against the isolated repeats (missed / same / fewer / other)")
    for p in sh_paths:
        lab = label(p)
        S = pad(load(p)[0], width)
        cfg = lab.split()[0]
        if cfg not in shared_union:
            shared_union[cfg] = S.copy()
        else:
            for s in range(0, n, CHUNK):
                shared_union[cfg][s:s + CHUNK] |= S[s:s + CHUNK]
        nS = np.empty(n, dtype=np.int64)
        missI = np.empty(n, dtype=np.int64)    # tests every isolated repeat found, not in S
        extraU = np.empty(n, dtype=np.int64)   # tests in S that no isolated repeat found
        for s in range(0, n, CHUNK):
            e = min(s + CHUNK, n)
            sc = S[s:e]
            nS[s:e] = pc(sc)
            missI[s:e] = pc(I[s:e] & ~sc)
            extraU[s:e] = pc(sc & ~U[s:e])
        del S
        missed = reached_any & (nS == 0)
        other = reached_any & (nS > 0) & (extraU > 0)
        sameS = reached_any & (nS > 0) & (extraU == 0) & (missI == 0)
        fewer = reached_any & (nS > 0) & (extraU == 0) & (missI > 0)
        print(f"-- {lab}  (also reached under shared but not isolated: {((~reached_any) & (nS > 0)).sum():,})")
        print(f"  {'|U|':>9} {'mutants':>9} {'missed':>16} {'same':>16} {'fewer':>16} {'other':>16}")
        for name, lo, hi in BINS:
            sel = reached_any & (nU >= lo) & (nU <= (hi if hi else nU.max()))
            k = sel.sum()
            cells = [f"{(c & sel).sum():,} ({pct((c & sel).sum(), k)})" for c in (missed, sameS, fewer, other)]
            print(f"  {name:>9} {k:>9,} " + " ".join(f"{c:>16}" for c in cells))
        if fewer.any():
            m = missI[fewer]
            print(f"  fewer: tests missing (in I, not in S) per mutant: median {int(np.median(m)):,}, "
                  f"max {int(m.max()):,}; as a share of I: median {100 * np.median(m / nI[fewer]):.1f}%")
        if other.any():
            x = extraU[other]
            print(f"  other: extra tests per mutant: median {int(np.median(x)):,}, max {int(x.max()):,}")
        per_mutant_cols.append((lab.replace(" ", "_"), nS, missI, extraU))

    # union over each shared configuration's runs: number of tests reaching each mutant in any run
    union_counts = {cfg: np.concatenate([pc(b[s:s + CHUNK]) for s in range(0, n, CHUNK)])
                    for cfg, b in shared_union.items()}
    for cfg, cnt in union_counts.items():
        print(f"\nshared {cfg}, union of runs: {int((cnt > 0).sum()):,} mutants reached "
              f"(of {int(reached_any.sum()):,} reached in isolation)")
    shared_union.clear()

    if args.per_mutant:
        opener = gzip.open if args.per_mutant.endswith(".gz") else open
        with opener(args.per_mutant, "wt") as f:
            head = ["mutant_id", "n_union", "n_intersection"] + [f"n_{l}" for l in iso_lab]
            head = [h.replace(" ", "_") for h in head]
            for lab, *_ in per_mutant_cols:
                head += [f"{lab}_n", f"{lab}_missing", f"{lab}_extra"]
            head += [f"shared_union_{cfg}" for cfg in union_counts]
            f.write(",".join(head) + "\n")
            for r in range(n):
                row = [int(mutants[r]), int(nU[r]), int(nI[r])] + [int(n_rep[k, r]) for k in range(len(iso_lab))]
                for _, nS, missI, extraU in per_mutant_cols:
                    row += [int(nS[r]), int(missI[r]), int(extraU[r])]
                row += [int(cnt[r]) for cnt in union_counts.values()]
                f.write(",".join(map(str, row)) + "\n")
        print(f"\nwrote {args.per_mutant}")
    print(f"\ndone in {(time.time() - t0) / 60:.1f} min")


if __name__ == "__main__":
    main()