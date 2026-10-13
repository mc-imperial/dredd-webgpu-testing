#!/usr/bin/env bash
# Usage: kill.sh <mapping.json> <run-name> [extra cts-lab kill args...]
#   e.g. kill.sh results/.../mutant_to_tests_isolated-no-cache.json first-pass --limit 20

set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd -- "$SCRIPT_DIR/../.." && pwd)"

CONTAINER_PROJECT_ROOT=/workspace/dredd-webgpu-testing
IMAGE="${IMAGE:-dredd-webgpu-testing:mutants}"

USAGE="Usage: $0 <mapping.json> <run-name> [extra cts-lab kill args...]"
MAPPING="$(realpath "${1:?$USAGE}")"
RUN_NAME="${2:?$USAGE}"
shift 2

if [[ "$MAPPING" != "$PROJECT_ROOT"/* ]]; then
    echo "ERROR: mapping must be inside $PROJECT_ROOT so the container can see it" >&2
    exit 1
fi

# Fixed name (no timestamp) so rerunning the same command resumes.
OUTDIR="results/mutant-killing/$RUN_NAME"
mkdir -p "$PROJECT_ROOT/$OUTDIR"
chmod 777 "$PROJECT_ROOT/$OUTDIR"
cp "$SCRIPT_DIR/common.sh" "$PROJECT_ROOT/$OUTDIR/common.sh"

echo "Mapping: $MAPPING"
echo "Output:  $OUTDIR"
echo "Image:   $IMAGE"

time docker run --rm --init ${DOCKER_NAME:+--name "$DOCKER_NAME"} \
    --ulimit core=0 \
    --mount "type=bind,source=$PROJECT_ROOT,target=$CONTAINER_PROJECT_ROOT" \
    --workdir "$CONTAINER_PROJECT_ROOT" \
    "$IMAGE" \
    /bin/bash icst_2027_experiments/mutant-killing/kill.sh \
        "$CONTAINER_PROJECT_ROOT/${MAPPING#"$PROJECT_ROOT/"}" \
        "$OUTDIR" \
        "$@"