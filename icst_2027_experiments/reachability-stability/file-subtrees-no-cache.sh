#!/usr/bin/env bash

set -euo pipefail

source "$(dirname "$0")/common.sh"

SERVERS="${1:?Usage: $0 <servers> <repeat> <individual_test_results.json>}"
REPEAT="${2:?Usage: $0 <servers> <repeat> <individual_test_results.json>}"
INDIVIDUAL_TEST_JSON="${3:?Usage: $0 <servers> <repeat> <individual_test_results.json>}"

TIMESTAMP=$(date +%Y%m%d_%H%M%S)

OUTDIR="$RESULTS_ROOT/reachability-stability/file-subtrees-no-cache/servers-${SERVERS}/repeat-${REPEAT}_${TIMESTAMP}"

mkdir -p "$OUTDIR"

cts-lab run \
    --cts "$CTS" \
    --dawn "$DAWN" \
    --vk-icd "$VK_ICD_FILENAMES" \
    --outdir "$OUTDIR" \
    --query "$QUERY" \
    --mesa-shader-cache-off \
    --n-dawn-runners "$SERVERS" \
    --test-json "$INDIVIDUAL_TEST_JSON" \
    --track-mutants \
    --test-level 'test-file'