#!/usr/bin/env bash

set -euo pipefail

OUTDIR="${1:-results/run_001}"
QUERY="webgpu:shader,execution,flow_control,if,*"
VK_ICD_FILENAMES="$MESA/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json"
OUTDIR="/results"

mkdir -p $OUTDIR

cts-lab run \
    --cts "$CTS" \
    --dawn "$DAWN" \
    --vk-icd "$VK_ICD_FILENAMES" \
    --query "$QUERY" \
    --outdir "$OUTDIR"