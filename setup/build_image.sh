#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"

set -a
source "$SCRIPT_DIR/env"
set +a

docker build \
    --build-arg MESA_COMMIT="$MESA_COMMIT" \
    --build-arg DREDD_COMMIT="$DREDD_COMMIT" \
    --build-arg CTS_COMMIT="$CTS_COMMIT" \
    --build-arg DAWN_COMMIT="$DAWN_COMMIT" \
    -f "$SCRIPT_DIR/../docker/Dockerfile" \
    -t dredd-webgpu-testing:dev \
    "$SCRIPT_DIR/.."