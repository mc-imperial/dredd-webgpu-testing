#!/usr/bin/env bash
# Run reduce.sh in a container, from the host.
#
# Usage: reduce-runner.sh one   results/fuzz/run1 221889 [more IDs...]
#        reduce-runner.sh batch results/fuzz/run1 --limit 20
# Global options (e.g. --survivors, --jobs) go *before* one/batch:
#        reduce-runner.sh --survivors results/mutant-killing/first-pass/survivors.txt one results/fuzz/run1 221889

set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd -- "$SCRIPT_DIR/../.." && pwd)"
CONTAINER_PROJECT_ROOT=/workspace/dredd-webgpu-testing
IMAGE="${IMAGE:-dredd-webgpu-testing:reduce}"

mkdir -p "$PROJECT_ROOT/results/reduce"
chmod 777 "$PROJECT_ROOT/results/reduce"

time docker run --rm --init ${DOCKER_NAME:+--name "$DOCKER_NAME"} \
    --ulimit core=0 \
    --mount "type=bind,source=$PROJECT_ROOT,target=$CONTAINER_PROJECT_ROOT" \
    --workdir "$CONTAINER_PROJECT_ROOT" \
    "$IMAGE" \
    /bin/bash icst_2027_experiments/reduction/reduce.sh "$@"