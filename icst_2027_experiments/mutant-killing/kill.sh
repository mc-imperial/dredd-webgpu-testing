#!/usr/bin/env bash

set -euo pipefail

source "$(dirname "$0")/common.sh"

SCRIPT_NAME="$(basename "$0" .sh)"

USAGE="Usage: $0 <mapping-json> <n-mutants> [timeout_seconds]"
MAPPING="${1:?$USAGE}"
LIMIT="${2:?USAGE}"
TIMEOUT="${3:-300}"

OUTDIR="$RESULTS_ROOT/$SCRIPT_NAME"
mkdir -p "$OUTDIR"

cts-lab kill \
    --cts "$CTS" \
    --dawn "$DAWN" \
    --vk-icd "$VK_ICD_FILENAMES" \
    --outdir "$OUTDIR" \
    --mesa-shader-cache-off \
    --n-dawn-runners 1 \
    --mapping "$MAPPING" \
    --limit "$LIMIT"