#!/usr/bin/env bash

set -euo pipefail

source "$(dirname "$0")/common.sh"

SCRIPT_NAME="$(basename "$0" .sh)"

SERVERS="${1:?Usage: $0 <servers> <repeat>}"
REPEAT="${2:?Usage: $0 <servers> <repeat>}"

TIMESTAMP=$(date +%Y%m%d_%H%M%S)
OUTDIR="$RESULTS_ROOT/reachability-stability/$SCRIPT_NAME/servers-${SERVERS}/repeat-${REPEAT}_${TIMESTAMP}"

mkdir -p "$OUTDIR"

cts-lab run \
    --cts "$CTS" \
    --dawn "$DAWN" \
    --vk-icd "$VK_ICD_FILENAMES" \
    --outdir "$OUTDIR" \
    --query "$QUERY" \
    --mesa-shader-cache-on \
    --n-dawn-runners $SERVERS \
    --track-mutants