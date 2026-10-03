#!/usr/bin/env bash

# Run individual CTS tests in isolated processes
# The list of tests to run should be in the test result .json
# that is output from running the full CTS.

set -euo pipefail

TIMESTAMP=$(date +%Y%m%d_%H%M%S)

QUERY="webgpu:*"
VK_ICD_FILENAMES="$MESA/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json"
TEST_JSON="results/e1/20260928_210609/run_001/individual_test_results.json"

WORKING_DIR=20260929_094741
OUTDIR="results/e2/$WORKING_DIR"

mkdir -p $OUTDIR

cts-lab isolate \
    --cts "$CTS" \
    --dawn "$DAWN" \
    --vk-icd "$VK_ICD_FILENAMES" \
    --outdir "$OUTDIR" \
    --test-json "$TEST_JSON" 