#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd -- "$SCRIPT_DIR/.." && pwd)"

docker run --rm -it \
    --ulimit core=0 \ # Very important to stop huge core dumps when the CTS crashes
    -v "$PROJECT_ROOT:${PROJECT_ROOT}" \
    -w "$PROJECT_ROOT" \
    dredd-webgpu-testing:dev \
    /bin/bash
