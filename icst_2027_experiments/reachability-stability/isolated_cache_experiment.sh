#!/usr/bin/env bash
# Cache-effect experiment under ISOLATED execution (one process per test): for each
# subtree of the shared-execution cache experiment, run its tests in isolation
#   off   cache disabled                                  isolated-no-cache repeat 1
#   cold  cache on, starting empty (fills as tests run)   isolated-cache    repeat 1
#   warm  cache on, filled by the cold pass               isolated-cache    repeat 2
# all in one container, so the cache survives from cold to warm. Off vs cold shows
# whether a test can miss mutants because *earlier tests* filled the cache; cold vs
# warm is the worst case (every shader seen before).
#
# The test lists come from the shared experiment's cache-off runs
# ($CACHE_EXPERIMENT_SRC/<subtree>/subtree-no-cache/servers-1/repeat-1/individual_test_results.json).
# One server, as in the main isolated runs, so tests fill the cache in a fixed order.
#
# Run inside the reachability-stability container, from the project root (see
# run-isolated-cache.sh, which starts the container):
#   bash icst_2027_experiments/reachability-stability/isolated_cache_experiment.sh
# A subtree with a .done marker is skipped, so rerunning resumes after an interruption.
#
# Results: $CACHE_EXPERIMENT_OUT (default results/cache-experiment-isolated)/<subtree>/
#          {isolated-no-cache,isolated-cache}/servers-1/repeat-N
# Summarise: python3 icst_2027_experiments/reachability-stability/cache_effect.py \
#                results/cache-experiment-isolated --mode isolated --prefix IsoCache
set -euo pipefail

S=icst_2027_experiments/reachability-stability
SRC="${CACHE_EXPERIMENT_SRC:-results/cache-experiment-3}"
OUT="${CACHE_EXPERIMENT_OUT:-results/cache-experiment-isolated}"
CACHE_DIR="${XDG_CACHE_HOME:-$HOME/.cache}/mesa_shader_cache"

for d in "$SRC"/*/; do
  name=$(basename "$d")
  json="$d/subtree-no-cache/servers-1/repeat-1/individual_test_results.json"
  if [[ ! -f "$json" ]]; then echo "==== $name: no $json, skipped"; continue; fi
  if [[ -f "$OUT/$name/.done" ]]; then echo "==== $name: done, skipped"; continue; fi
  echo "==== $name ($(date '+%F %T'))"
  rm -rf "${OUT:?}/$name"                 # partial results from an interrupted run
  rm -rf "$CACHE_DIR"
  export RESULTS_ROOT="$OUT/$name"
  bash "$S/isolated-no-cache.sh" 1 1 "$json"   # off
  bash "$S/isolated-cache.sh" 1 1 "$json"      # cold
  echo "   cache after cold pass: $(du -sh "$CACHE_DIR" 2>/dev/null | cut -f1 || echo none)"
  bash "$S/isolated-cache.sh" 1 2 "$json"      # warm
  touch "$OUT/$name/.done"
done
echo "Done ($(date '+%F %T')). Summarise with: python3 $S/cache_effect.py $OUT --mode isolated --prefix IsoCache"