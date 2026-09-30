#!/usr/bin/env bash

# Run CTS and track test-mutant reachability.

set -euo pipefail

TIMESTAMP=$(date +%Y%m%d_%H%M%S)

QUERY="webgpu:*"
VK_ICD_FILENAMES="$MESA/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json"
OUTDIR="results/e3/"

mkdir -p $OUTDIR

cts-lab run \
    --cts "$CTS" \
    --dawn "$DAWN" \
    --vk-icd "$VK_ICD_FILENAMES" \
    --outdir "$OUTDIR" \
    --query "webgpu:shader,execution,flow_control,for,*" \
    --track-mutants 