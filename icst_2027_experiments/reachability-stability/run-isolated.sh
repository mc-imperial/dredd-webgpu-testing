#!/usr/bin/env bash

set -euo pipefail

usage() {
    echo "Usage: $0 <run-id>" >&2
    echo "  e.g. $0 20261016_134500   (or run-20261016_134500)" >&2
    exit 1
}

[[ $# -eq 1 ]] || usage

RUN_ID="${1#run-}"

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd -- "$SCRIPT_DIR/../.." && pwd)"

CONTAINER_PROJECT_ROOT=/workspace/dredd-webgpu-testing
IMAGE=dredd-webgpu-testing:reachability-stability

RESULTS_ROOT="results/webgpu-shader-run/run-${RUN_ID}"
SERVERS=1
REPEAT=1

if [[ ! -d "$PROJECT_ROOT/$RESULTS_ROOT" ]]; then
    echo "ERROR: run directory not found:" >&2
    echo "$PROJECT_ROOT/$RESULTS_ROOT" >&2
    exit 1
fi

# Keep the run's original common.sh if it already has one
if [[ ! -f "$PROJECT_ROOT/$RESULTS_ROOT/common.sh" ]]; then
    cp "$SCRIPT_DIR/common.sh" "$PROJECT_ROOT/$RESULTS_ROOT/common.sh"
fi

SUBTREE_RUN="$(
    find \
        "$PROJECT_ROOT/$RESULTS_ROOT/subtree-no-cache/servers-${SERVERS}" \
        -mindepth 1 \
        -maxdepth 1 \
        -type d \
        2>/dev/null \
        | sort \
        | tail -n 1
)"

INDIVIDUAL_TEST_JSON="$SUBTREE_RUN/individual_test_results.json"

if [[ -z "$SUBTREE_RUN" || ! -s "$INDIVIDUAL_TEST_JSON" ]]; then
    echo "ERROR: no valid subtree-no-cache test manifest found in run ${RUN_ID}:" >&2
    echo "$INDIVIDUAL_TEST_JSON" >&2
    exit 1
fi

echo "Using test manifest:"
echo "$INDIVIDUAL_TEST_JSON"

echo
echo "============================================================"
echo "Running: isolated-no-cache.sh (run ${RUN_ID})"
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
    "$CONTAINER_PROJECT_ROOT/${INDIVIDUAL_TEST_JSON#"$PROJECT_ROOT/"}"