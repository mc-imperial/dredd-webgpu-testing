#!/usr/bin/env bash

set -euo pipefail

source "$(dirname "$0")/common.sh"

SERVERS="${1:?Usage: $0 <servers> <repeat>}"
REPEAT="${2:?Usage: $0 <servers> <repeat>}"

TIMESTAMP=$(date +%Y%m%d_%H%M%S)
OUTDIR="results/reachability-stability/isolated-dawn-option/servers-${SERVERS}/repeat-${REPEAT}_${TIMESTAMP}"
mkdir -p "$OUTDIR"

cts-lab run \
    --cts "$CTS" \
    --dawn "$DAWN" \
    --vk-icd "$VK_ICD_FILENAMES" \
    --outdir "$OUTDIR" \
    --query "webgpu:shader,execution,flow_control,for,*" \
    --mesa-shader-cache-off \
    --n-dawn-runners $SERVERS \
    --track-mutants \
    --dawn-isolate