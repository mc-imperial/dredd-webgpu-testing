#!/usr/bin/env bash

set -euo pipefail

source "$(dirname "$0")/common.sh"

SCRIPT_NAME="$(basename "$0" .sh)"

SERVERS="${1:?Usage: $0 <servers> <repeat> <individual_test_results.json>}"
REPEAT="${2:?Usage: $0 <servers> <repeat> <individual_test_results.json>}"
INDIVIDUAL_TEST_JSON="${3:?Usage: $0 <servers> <repeat> <individual_test_results.json>}"


OUTDIR="$RESULTS_ROOT/$SCRIPT_NAME/servers-${SERVERS}/repeat-${REPEAT}"
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