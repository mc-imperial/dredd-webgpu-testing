#!/usr/bin/env bash
# Start the isolated-execution cache experiment (isolated_cache_experiment.sh) in the
# reachability-stability container, with the repository mounted (as run-shared.sh does).
#
# Usage (on moray or an instance, from anywhere; run inside tmux, it takes ~3.5 hours):
#   bash icst_2027_experiments/reachability-stability/run-isolated-cache.sh
# Environment: CACHE_EXPERIMENT_SRC (default results/cache-experiment-3),
#              CACHE_EXPERIMENT_OUT (default results/cache-experiment-isolated)
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd -- "$SCRIPT_DIR/../.." && pwd)"
CONTAINER_PROJECT_ROOT=/workspace/dredd-webgpu-testing
IMAGE=dredd-webgpu-testing:reachability-stability
SRC="${CACHE_EXPERIMENT_SRC:-results/cache-experiment-3}"
OUT="${CACHE_EXPERIMENT_OUT:-results/cache-experiment-isolated}"

[[ -d "$PROJECT_ROOT/$SRC" ]] || { echo "ERROR: $SRC not found (the shared cache experiment's results)" >&2; exit 1; }
mkdir -p "$PROJECT_ROOT/$OUT"
chmod 777 "$PROJECT_ROOT/$OUT"
echo "Image: $(docker image inspect -f '{{.Id}} (built {{.Created}})' "$IMAGE")" | tee "$PROJECT_ROOT/$OUT/image.txt"

time docker run --rm --init --name isolated-cache \
    --ulimit core=0 \
    --mount "type=bind,source=$PROJECT_ROOT,target=$CONTAINER_PROJECT_ROOT" \
    --workdir "$CONTAINER_PROJECT_ROOT" \
    -e CACHE_EXPERIMENT_SRC="$SRC" -e CACHE_EXPERIMENT_OUT="$OUT" \
    "$IMAGE" \
    /bin/bash icst_2027_experiments/reachability-stability/isolated_cache_experiment.sh \
    2>&1 | tee -a "$PROJECT_ROOT/$OUT/run.log"