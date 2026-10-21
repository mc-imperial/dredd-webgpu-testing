#!/usr/bin/env bash
# Run the wgslsmith fuzzing kill loop in a container, from the host.
#
# Usage: fuzz-runner.sh <survivors.txt> <run-name> [extra cts-lab fuzz args...]
#   e.g. fuzz-runner.sh results/mutant-killing/first-pass/survivors.txt run1 --hours 12
#
# Results go to results/fuzz/<run-name>/. Rerunning with the same run name resumes
# (seeds already tried are skipped, killed mutants aren't retried).

set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd -- "$SCRIPT_DIR/../.." && pwd)"

CONTAINER_PROJECT_ROOT=/workspace/dredd-webgpu-testing
IMAGE="${IMAGE:-dredd-webgpu-testing:wgslsmith}"   # wgslsmith + mutated and tracking Mesa (Dockerfile.wgslsmith)

USAGE="Usage: $0 <survivors.txt> <run-name> [extra cts-lab fuzz args...]"
SURVIVORS="$(realpath "${1:?$USAGE}")"
RUN_NAME="${2:?$USAGE}"
shift 2

if [[ "$SURVIVORS" != "$PROJECT_ROOT"/* ]]; then
    echo "ERROR: survivors file must be inside $PROJECT_ROOT so the container can see it" >&2
    exit 1
fi

OUTDIR="results/fuzz/$RUN_NAME"
mkdir -p "$PROJECT_ROOT/$OUTDIR"
chmod 777 "$PROJECT_ROOT/$OUTDIR"

echo "Survivors: $SURVIVORS ($(wc -l < "$SURVIVORS") mutants)"
echo "Output:    $OUTDIR"
echo "Image:     $IMAGE"
echo "Extra:     $*"

time docker run --rm --init ${DOCKER_NAME:+--name "$DOCKER_NAME"} \
    --ulimit core=0 \
    --mount "type=bind,source=$PROJECT_ROOT,target=$CONTAINER_PROJECT_ROOT" \
    --workdir "$CONTAINER_PROJECT_ROOT" \
    "$IMAGE" \
    /bin/bash icst_2027_experiments/mutant-killing/fuzz.sh \
        "$CONTAINER_PROJECT_ROOT/${SURVIVORS#"$PROJECT_ROOT/"}" \
        "$OUTDIR" \
        "$@"