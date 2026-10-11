#!/usr/bin/env bash
set -euo pipefail

echo "Building application image..."
docker build \
    -f docker/Dockerfile.mutants \
    -t dredd-webgpu-testing:mutants .

echo "Mutant image built successfully."