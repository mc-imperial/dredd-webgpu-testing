#!/usr/bin/env bash

set -euo pipefail

usage() {
    echo "Usage: $0 <repeat-id> <manifest.json>" >&2
    echo "  e.g. $0 3 results/webgpu-shader-run/run-.../individual_test_results.json" >&2
    exit 1
}

[[ $# -eq 2 ]] || usage

REPEAT="$1"
MANIFEST_ARG="$2"

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd -- "$SCRIPT_DIR/../.." && pwd)"

CONTAINER_PROJECT_ROOT=/workspace/dredd-webgpu-testing
IMAGE=dredd-webgpu-testing:reachability-stability

RUN_TIMESTAMP=$(date +%Y%m%d_%H%M%S)

RESULTS_ROOT="results/webgpu-shader-run/run-${RUN_TIMESTAMP}"
SERVERS=4

# Resolve the manifest to an absolute host path
if [[ ! -s "$MANIFEST_ARG" ]]; then
    echo "ERROR: manifest not found or empty: $MANIFEST_ARG" >&2
    exit 1
fi
MANIFEST="$(cd -- "$(dirname -- "$MANIFEST_ARG")" && pwd)/$(basename -- "$MANIFEST_ARG")"

# The manifest must be inside the project so the container can see it
if [[ "$MANIFEST" != "$PROJECT_ROOT/"* ]]; then
    echo "ERROR: manifest must be inside $PROJECT_ROOT" >&2
    exit 1
fi
CONTAINER_MANIFEST="$CONTAINER_PROJECT_ROOT/${MANIFEST#"$PROJECT_ROOT/"}"

mkdir -p "$PROJECT_ROOT/$RESULTS_ROOT"
chmod 777 "$PROJECT_ROOT/$RESULTS_ROOT"

cp "$SCRIPT_DIR/common.sh" "$PROJECT_ROOT/$RESULTS_ROOT/common.sh"

echo "Using test manifest:"
echo "$MANIFEST"

echo
echo "============================================================"
echo "Running: isolated-no-cache.sh (repeat ${REPEAT})"
echo "============================================================"

time docker run --rm \
    --ulimit core=1073741824:1073741824 \
    --mount "type=bind,source=$PROJECT_ROOT,target=$CONTAINER_PROJECT_ROOT" \
    --workdir "$CONTAINER_PROJECT_ROOT" \
    -e RESULTS_ROOT="$RESULTS_ROOT" \
    "$IMAGE" \
    "/bin/bash" \
    "icst_2027_experiments/reachability-stability/isolated-no-cache.sh" \
    "$SERVERS" \
    "$REPEAT" \
    "$CONTAINER_MANIFEST"