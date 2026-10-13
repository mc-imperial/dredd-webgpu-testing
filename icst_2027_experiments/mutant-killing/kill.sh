#!/usr/bin/env bash
set -euo pipefail

source "$(dirname "$0")/common.sh"

USAGE="Usage: $0 <mapping.json> <outdir> [extra cts-lab kill args...]"
MAPPING="${1:?$USAGE}"
OUTDIR="${2:?$USAGE}"
shift 2

mkdir -p "$OUTDIR"

cts-lab kill \
    --cts "$CTS" \
    --dawn "$DAWN" \
    --vk-icd "$VK_ICD_FILENAMES" \
    --outdir "$OUTDIR" \
    --mesa-shader-cache-off \
    --mapping "$MAPPING" \
    --n-dawn-runners 1 \
    "$@"