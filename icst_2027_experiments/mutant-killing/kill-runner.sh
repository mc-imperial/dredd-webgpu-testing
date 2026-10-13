#!/usr/bin/env bash
# Usage: kill.sh <mutant_id> <query> [timeout_seconds]

set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd -- "$SCRIPT_DIR/../.." && pwd)"

CONTAINER_PROJECT_ROOT=/workspace/dredd-webgpu-testing
IMAGE="${IMAGE:-dredd-webgpu-testing:mutants}"   # image with the mutated Mesa build

USAGE="Usage: $0 <mapping-json> <mutant-id> [timeout_seconds]"
MAPPING="${1:?$USAGE}"
MUTANT_ID="${2:?$USAGE}"
TIMEOUT="${3:-300}"

RUN_TIMESTAMP=$(date +%Y%m%d_%H%M%S)
RESULTS_ROOT="results/mutant-killing/run-${RUN_TIMESTAMP}"

mkdir -p "$PROJECT_ROOT/$RESULTS_ROOT"
chmod 777 "$PROJECT_ROOT/$RESULTS_ROOT"

# Keep a copy of the settings used, as with the tracking runs.
cp "$SCRIPT_DIR/common.sh" "$PROJECT_ROOT/$RESULTS_ROOT/common.sh"

echo "============================================================"
echo "Mapping:  $MAPPING"
echo "Mutant ID:   $MUTANT_ID"
echo "Timeout: ${TIMEOUT}s"
echo "Image:   $IMAGE"
echo "Results: $RESULTS_ROOT"
echo "============================================================"

time docker run --rm --init \
    --ulimit core=1073741824:1073741824 \
    --mount "type=bind,source=$PROJECT_ROOT,target=$CONTAINER_PROJECT_ROOT" \
    --workdir "$CONTAINER_PROJECT_ROOT" \
    -e RESULTS_ROOT="$RESULTS_ROOT" \
    "$IMAGE" \
    /bin/bash \
    "icst_2027_experiments/mutant-killing/kill.sh" \
    "$MAPPING" \
    "$MUTANT_ID" \
    "$TIMEOUT"