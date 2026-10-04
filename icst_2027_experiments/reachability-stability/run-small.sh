#!/usr/bin/env bash

set -euo pipefail

source "$(dirname "$0")/common.sh"

RESULTS_ROOT="results/small-run"
export RESULTS_ROOT

# Save experiment config script 
mkdir -p "$RESULTS_ROOT"
cp "$(dirname "$0")/common.sh" "$RESULTS_ROOT/common.sh"

TEST_RESULTS=""

run_timed() {
    local name="$1"
    shift

    echo
    echo "========================================"
    echo "Running: $name"
    echo "========================================"

    local start
    local end
    local elapsed

    start=$(date +%s)

    "$@"

    end=$(date +%s)
    elapsed=$((end - start))

    echo
    echo "$name took ${elapsed}s"

    printf '%s\t%ss\n' "$name" "$elapsed" >> "$RESULTS_FILE"
}

RESULTS_FILE="results/reachability-stability/small-run-timings.txt"
mkdir -p "$(dirname "$RESULTS_FILE")"
: > "$RESULTS_FILE"

run_timed "subtree-no-cache" \
    ./experiments/subtree-no-cache.sh 1 1

# Find the test_results.json produced by the subtree run.
TEST_RESULTS=$(find results/reachability-stability/subtree-no-cache/servers-1 \
    -name test_results.json \
    -type f \
    | sort \
    | tail -n 1)

if [[ -z "$TEST_RESULTS" ]]; then
    echo "ERROR: Could not find test_results.json"
    exit 1
fi

run_timed "subtree-cached" \
    ./experiments/subtree-cached.sh 1 1


run_timed "isolated-dawn-option" \
    ./experiments/solated-dawn-option.sh 1 1

run_timed "isolated-no-cache" \
    ./experiments/isolated-no-cache.sh "$TEST_RESULTS" 1 1

run_timed "file-subtrees-no-cache" \
    ./experiments/file-subtrees-no-cache.sh "$TEST_RESULTS" 1 1

echo
echo "========================================"
echo "Timing summary"
echo "========================================"
cat "$RESULTS_FILE"