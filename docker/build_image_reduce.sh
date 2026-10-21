#!/usr/bin/env bash
set -euo pipefail

echo "Building application image..."
docker build \
    -f docker/Dockerfile.reduce \
    -t dredd-webgpu-testing:reduce .

echo "Reduction image built successfully."