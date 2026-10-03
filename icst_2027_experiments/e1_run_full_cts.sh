#!/usr/bin/env bash

# Run the full CTS.

set -euo pipefail

TIMESTAMP=$(date +%Y%m%d_%H%M%S)

QUERY="webgpu:*"
VK_ICD_FILENAMES="$MESA/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json"
OUTDIR="results/e1/$TIMESTAMP"

mkdir -p $OUTDIR

cts-lab run \
    --cts "$CTS" \
    --dawn "$DAWN" \
    --vk-icd "$VK_ICD_FILENAMES" \
    --query "$QUERY" \
    --outdir "$OUTDIR" \
    --mesa-shader-cache-off