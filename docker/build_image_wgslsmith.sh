#!/usr/bin/env bash
set -euo pipefail

echo "Building application image..."
docker build \
    -f docker/Dockerfile.wgslsmith \
    -t dredd-webgpu-testing:wgslsmith .

echo "WGSLsmith image built successfully."