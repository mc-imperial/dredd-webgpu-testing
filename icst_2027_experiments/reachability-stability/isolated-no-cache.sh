#!/usr/bin/env bash

# This script takes an individual_test_results.json as an input. This should specify all
# individual queries that are to be run in isolation.

set -euo pipefail

source "$(dirname "$0")/common.sh"

SERVERS="${1:?Usage: $0 <servers> <repeat> <test_results.json>}"
REPEAT="${2:?Usage: $0 <servers> <repeat> <test_results.json>}"
INDIVIDUAL_TEST_JSON="${3:?Usage: $0 <servers> <repeat> <test_results.json>}"

TIMESTAMP=$(date +%Y%m%d_%H%M%S)

OUTDIR="$RESULTS_ROOT/reachability-stability/isolated-no-cache/servers-${SERVERS}/repeat-${REPEAT}_${TIMESTAMP}"

mkdir -p "$OUTDIR"

cts-lab run \
    --cts "$CTS" \
    --dawn "$DAWN" \
    --vk-icd "$VK_ICD_FILENAMES" \
    --outdir "$OUTDIR" \
    --test-json "$INDIVIDUAL_TEST_JSON" \
    --mesa-shader-cache-off \
    --track-mutants \
    --n-dawn-runners 1 \
    --test-level 'individual-tests'