#!/usr/bin/env bash
# Process this instance's shared-execution reachability run (both configurations)
# into per-mutant counts and test lists for the isolated mapping mutants.
#
# Run on the instance that holds the run, from anywhere:
#   bash icst_2027_experiments/reachability-stability/run_process_shared.sh
#
# Inputs:  results/webgpu-shader-run/run-<timestamp>/   (latest run-20261028_* by default;
#                                                        pass a run folder name to choose another)
#          icst_2027_experiments/data/isolated_max100_mutant_ids.txt
# Outputs: results/shared-processed/run-<timestamp>/<configuration>/
#          {per_mutant.csv, mapping_lists.json, summary.txt}
set -euo pipefail

REPO="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/../.." && pwd)"
RUNS="$REPO/results/webgpu-shader-run"
IDS="$REPO/icst_2027_experiments/generated/isolated_max100_mutant_ids.txt"
SCRIPT="$REPO/icst_2027_experiments/analysis/process_shared_tracking.py"

[ -f "$IDS" ] || { echo "missing $IDS (create it with figures_for_paper.sh mapping_ids)"; exit 1; }

if [ $# -ge 1 ]; then R="$RUNS/$1"; else R=$(ls -d "$RUNS"/run-20261028_* | tail -1); fi
echo "Run: $R"

# Stop the tracking compressor, if running, so no file is renamed while being read.
pkill -f "^bash /home/ubuntu/compress_tracking.sh$" || true

OUT="$REPO/results/shared-processed/$(basename "$R")"
for c in subtree-no-cache file-subtrees-no-cache; do
    for rep in "$R"/$c/servers-*/repeat-*; do
        echo "== $c: $rep"
        sudo python3 "$SCRIPT" "$rep" --ids "$IDS" --out-dir "$OUT/$c"
    done
done
sudo chown -R "$(id -un)" "$REPO/results/shared-processed"
echo "ALL DONE"