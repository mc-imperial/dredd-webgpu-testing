#!/usr/bin/env bash
# Build the mutant-by-test reachability matrix of each isolated repeat
# (analysis/build_reach_matrix.py), all with the same row and column indexes.
#
# Usage (from anywhere; on moray):
#   bash icst_2027_experiments/analysis/build_isolated_matrices.sh          build what is missing
#   bash icst_2027_experiments/analysis/build_isolated_matrices.sh --clean  delete the indexes and
#                                                                           matrices, and build all
#
# Repeats are built one at a time, in the order below, because they share the
# index files. A repeat whose matrix already exists is skipped, so after an
# interruption just run it again; a repeat whose raw data is not on moray yet is
# skipped with a message. Run it inside tmux: each repeat takes a while.
#
# Inputs (raw tracking data):
#   results/reachability/raw/isolated/<run>/isolated-no-cache/servers-*/repeat-*   copied folders
#   results/reachability/raw/isolated-archives/results-webgpu-shader-run-20261027.tar.zst
#                                                       archive holding two repeats (read in place)
#   results/reachability/processed/isolated/*/..._per_mutant.csv   for the row index (first run only)
# Outputs, in results/reachability/matrix/:
#   mutants.txt, tests.txt                       the shared row and column indexes
#   isolated-<run>.npz                           one matrix per repeat
#   build-<run>.log                              each build's console output
set -euo pipefail

REPO="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$REPO"

RAW=results/reachability/raw/isolated
ARCHIVE=results/reachability/raw/isolated-archives/results-webgpu-shader-run-20261027.tar.zst
M=results/reachability/matrix
BUILD=icst_2027_experiments/analysis/build_reach_matrix.py

# The five isolated repeats: run name, and where its raw data is
# ("folder:<path>" or "archive:<path inside $ARCHIVE>").
REPEATS=(
  "run-20261009_092900 folder:$RAW/run-20261009_092900/isolated-no-cache/servers-4/repeat-1"
  "run-20261009_130726 archive:webgpu-shader-run/run-20261009_130726/isolated-no-cache/servers-1/repeat-1"
  "run-20261016_125750 folder:$RAW/run-20261016_125750/isolated-no-cache/servers-1/repeat-5"
  "run-20261016_130744 archive:webgpu-shader-run/run-20261016_130744/isolated-no-cache/servers-1/repeat-5"
  "run-20261016_152317 folder:$RAW/run-20261016_152317/isolated-no-cache/servers-1/repeat-4"
)

if [[ "${1:-}" == "--clean" ]]; then
    echo "deleting $M/mutants.txt, $M/tests.txt, $M/isolated-*.npz and their logs"
    rm -f "$M/mutants.txt" "$M/tests.txt" "$M"/isolated-*.npz "$M"/build-*.log
fi
mkdir -p "$M"
python3 -c "import zstandard" 2>/dev/null || echo "note: python zstandard not installed; folder builds will be slow (pip install zstandard)"

for entry in "${REPEATS[@]}"; do
    run=${entry%% *}; src=${entry#* }
    out="$M/isolated-$run.npz"
    if [[ -e "$out" ]]; then
        echo "== $run: $out exists, skipped"; continue
    fi
    case "$src" in
        folder:*)
            dir=${src#folder:}
            if [[ ! -d "$dir" ]]; then echo "== $run: $dir not on moray yet, skipped"; continue; fi
            args=( "$dir" ) ;;
        archive:*)
            if [[ ! -f "$ARCHIVE" ]]; then echo "== $run: $ARCHIVE not on moray yet, skipped"; continue; fi
            args=( "$ARCHIVE" --archive-prefix "${src#archive:}" ) ;;
    esac
    echo "== $run: building $out ($(date '+%F %T'))"
    python3 "$BUILD" "${args[@]}" \
        --mutants "$M/mutants.txt" --tests "$M/tests.txt" --out "$out" --jobs 16 \
        2>&1 | tee "$M/build-$run.log"
done

echo "== matrices in $M:"
ls -lh "$M"/isolated-*.npz 2>/dev/null || echo "   none yet"