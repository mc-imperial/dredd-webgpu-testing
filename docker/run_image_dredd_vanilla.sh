#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd -- "$SCRIPT_DIR/.." && pwd)"

CONTAINER_PROJECT_ROOT=/workspace/dredd-webgpu-testing

docker run --rm -it \
    --ulimit core=1073741824:1073741824 \
    --mount "type=bind,source=$PROJECT_ROOT,target=$CONTAINER_PROJECT_ROOT" \
    --workdir "$CONTAINER_PROJECT_ROOT" \
    dredd-webgpu-tracking-vanilla:dev \
    /bin/bash