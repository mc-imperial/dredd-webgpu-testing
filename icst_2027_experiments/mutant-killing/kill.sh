#!/usr/bin/env bash

set -euo pipefail

source "$(dirname "$0")/common.sh"

SCRIPT_NAME="$(basename "$0" .sh)"

USAGE="Usage: $0 <mutant_id> <query> [timeout_seconds]"
MUTANT_ID="${1:?$USAGE}"
KILL_QUERY="${2:?$USAGE}"
TIMEOUT="${3:-300}"

OUTDIR="$RESULTS_ROOT/$SCRIPT_NAME/mutant-${MUTANT_ID}"
mkdir -p "$OUTDIR"

cts-lab kill \
    --cts "$CTS" \
    --dawn "$DAWN" \
    --vk-icd "$VK_ICD_FILENAMES" \
    --outdir "$OUTDIR" \
    --query "$KILL_QUERY" \
    --mesa-shader-cache-off \
    --n-dawn-runners 1 \
    --mutant-id "$MUTANT_ID" \
    --timeout "$TIMEOUT"