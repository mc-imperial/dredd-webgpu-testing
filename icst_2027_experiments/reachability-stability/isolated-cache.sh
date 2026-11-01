#!/usr/bin/env bash

# As isolated-no-cache.sh, but with Mesa's shader cache ON: every test still runs in
# its own process, but the on-disk cache is shared between them, so a test can be
# served shaders that earlier tests compiled. Used by isolated_cache_experiment.sh.
# This script takes an individual_test_results.json as an input. This should specify all
# individual queries that are to be run in isolation.

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
    --test-json "$INDIVIDUAL_TEST_JSON" \
    --mesa-shader-cache-on \
    --track-mutants \
    --n-dawn-runners $SERVERS \
    --test-level 'individual-tests'