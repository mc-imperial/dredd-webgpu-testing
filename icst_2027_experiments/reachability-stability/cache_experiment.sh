#!/usr/bin/env bash
# Cache-effect experiment: for each CTS subtree, run subtree-no-cache once, then
# subtree-cache twice in the same container (cold, then warm), clearing Mesa's
# shader cache before each subtree so the first cache-on run really is cold.
#
# Run inside the reachability-stability container, from the project root:
#   bash icst_2027_experiments/reachability-stability/cache_experiment.sh [repeats]
#
# Results: $CACHE_EXPERIMENT_OUT (default results/cache-experiment-2)/<subtree>/{subtree-no-cache,subtree-cache}/servers-1/repeat-N
#   repeat 1 of subtree-cache = cold, repeat 2 = warm (per experiment repeat r: 2r-1 cold, 2r warm)
set -euo pipefail

S=icst_2027_experiments/reachability-stability
REPEATS="${1:-1}"
CACHE_DIR="${XDG_CACHE_HOME:-$HOME/.cache}/mesa_shader_cache"

# One subtree per category of execution test: a whole directory where the
# category is small, a representative file where it is large. The last two are
# larger directory-level subtrees, where shaders may repeat within a single run.
SUBTREES=(
  "webgpu:shader,execution,expression,call,builtin,abs:*"
  "webgpu:shader,execution,expression,call,builtin,textureSampleCompare:*"
  "webgpu:shader,execution,expression,call,builtin,textureDimensions:*"
  "webgpu:shader,execution,expression,call,builtin,atomics,atomicAdd:*"
  "webgpu:shader,execution,expression,binary,bitwise:*"
  "webgpu:shader,execution,expression,access,array,index:*"
  "webgpu:shader,execution,flow_control,*"
  "webgpu:shader,execution,memory_model,*"
  "webgpu:shader,execution,robust_access_vertex:*"
  "webgpu:shader,execution,shader_io,fragment_builtins:*"
  "webgpu:shader,execution,zero_init:*"
  "webgpu:shader,execution,shader_io,*"
  "webgpu:shader,execution,statement,*"
)

OUT="${CACHE_EXPERIMENT_OUT:-results/cache-experiment-2}"

for q in "${SUBTREES[@]}"; do
  name=$(echo "$q" | sed -E 's/^webgpu:shader,execution,//; s/(:|,)\*$//; s/[,:]/_/g')
  for r in $(seq 1 "$REPEATS"); do
    echo "==== $name (experiment repeat $r)"
    rm -rf "$CACHE_DIR"
    export RESULTS_ROOT="$OUT/$name" QUERY="$q"
    bash "$S/subtree-no-cache.sh" 1 "$r"
    bash "$S/subtree-cache.sh" 1 $((2 * r - 1))      # cold
    echo "   cache after cold run: $(du -sh "$CACHE_DIR" 2>/dev/null | cut -f1 || echo none)"
    bash "$S/subtree-cache.sh" 1 $((2 * r))          # warm
  done
done
echo "Done. Summarise with: python3 $S/cache_effect.py $OUT"