#!/usr/bin/env bash
# Build the mutant-by-test reachability matrix of each shared-execution repeat
# (analysis/build_reach_matrix.py), with the same row and column indexes as the
# isolated matrices, so the two can be compared mutant by mutant.
#
# Usage (from anywhere; on moray, after build_isolated_matrices.sh has finished):
#   bash icst_2027_experiments/analysis/build_shared_matrices.sh
#
# Builds one repeat at a time (they share the index files); a repeat whose matrix
# exists is skipped, so rerun it after an interruption or when a new repeat (e.g.
# the fifth) has been copied. Run it inside tmux.
#
# Inputs:  results/reachability/raw/shared-v2/<run>/<configuration>/servers-*/repeat-*
#          results/reachability/matrix/mutants.txt, tests.txt   (from the isolated build)
# Outputs: results/reachability/matrix/shared-<configuration>-<run>.npz, and build logs
set -euo pipefail

REPO="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$REPO"
M=results/reachability/matrix
BUILD=icst_2027_experiments/analysis/build_reach_matrix.py

for f in "$M/mutants.txt" "$M/tests.txt"; do
    [[ -e "$f" ]] || { echo "missing $f: run build_isolated_matrices.sh first" >&2; exit 1; }
done
python3 -c "import zstandard" 2>/dev/null || echo "note: python zstandard not installed; builds will be slow (pip install zstandard)"

for cfg in subtree-no-cache file-subtrees-no-cache; do
    for dir in results/reachability/raw/shared-v2/run-*/"$cfg"/servers-*/repeat-*; do
        [[ -d "$dir" ]] || continue
        run=$(echo "$dir" | grep -o 'run-[0-9_]*')
        out="$M/shared-$cfg-$run.npz"
        if [[ -e "$out" ]]; then echo "== $cfg $run: exists, skipped"; continue; fi
        echo "== $cfg $run: building $out ($(date '+%F %T'))"
        python3 "$BUILD" "$dir" --mutants "$M/mutants.txt" --tests "$M/tests.txt" --out "$out" --jobs 16 \
            2>&1 | tee "$M/build-shared-$cfg-$run.log"
    done
done

echo "== shared matrices in $M:"
ls -lh "$M"/shared-*.npz 2>/dev/null || echo "   none yet"