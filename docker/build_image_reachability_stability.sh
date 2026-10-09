#!/usr/bin/env bash
set -euo pipefail

echo "Building base image..."
./docker/build_image.sh

echo "Building application image..."
docker build \
    -f docker/Dockerfile.reachability-stability \
    -t dredd-webgpu-testing:reachability-stability .

echo "Both images built successfully."