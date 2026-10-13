#!/usr/bin/env bash
# Re-run one mutant with a long timeout, watching CPU use, to tell a real hang
# from a slowdown (and a busy loop from a deadlock).
#
# Run from the host. Uses kill-runner.sh (host side), which starts the
# container and runs kill.sh inside it.
#
# Usage: check-timeout.sh <mapping.json> <mutant_id> [timeout_seconds]
#   e.g. check-timeout.sh results/.../mutant_to_tests_isolated-no-cache.json 242628 300
#
# Requires kill-runner.sh to pass a container name through, i.e. its
# docker run line must include:   ${DOCKER_NAME:+--name "$DOCKER_NAME"}

set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd -- "$SCRIPT_DIR/../.." && pwd)"

USAGE="Usage: $0 <mapping.json> <mutant_id> [timeout_seconds]"
MAPPING="${1:?$USAGE}"
MUTANT_ID="${2:?$USAGE}"
TIMEOUT="${3:-300}"

RUN_NAME="timeout-check/mutant-${MUTANT_ID}-${TIMEOUT}s"
OUTDIR="$PROJECT_ROOT/results/mutant-killing/$RUN_NAME"
CONTAINER="timeout-check-${MUTANT_ID}"
LOG="/tmp/${CONTAINER}.log"

# Start fresh each time, otherwise kill_cts would resume and skip the mutant.
# (Docker writes these files as root, so plain rm can fail.)
rm -rf "$OUTDIR" 2>/dev/null || sudo rm -rf "$OUTDIR"
docker rm -f "$CONTAINER" >/dev/null 2>&1 || true

echo "Mutant $MUTANT_ID, timeout ${TIMEOUT}s (CPU sampled every 15s)"
echo "Full log: $LOG"
echo

# Run in the background, with a named container so we can watch its CPU use.
DOCKER_NAME="$CONTAINER" "$SCRIPT_DIR/kill-runner.sh" "$MAPPING" "$RUN_NAME" \
    --mutants "$MUTANT_ID" --min-timeout "$TIMEOUT" --timeout-factor 1 \
    > "$LOG" 2>&1 &
RUN_PID=$!

START=$(date +%s)
while kill -0 "$RUN_PID" 2>/dev/null; do
    sleep 15
    CPU=$(docker stats --no-stream --format '{{.CPUPerc}}' "$CONTAINER" 2>/dev/null || true)
    if [[ -n "$CPU" ]]; then
        echo "  $(( $(date +%s) - START ))s  CPU: $CPU"
    fi
done
wait "$RUN_PID" || true

echo
echo "Result:"
if ! jq -r '"  \(.status)  (\(.tests[0].mutant_duration // "?")s, test: \(.tests[0].test // "-"))"' \
        "$OUTDIR/results.jsonl" 2>/dev/null; then
    echo "  no result; last lines of the log:"
    tail -n 20 "$LOG"
    exit 1
fi
echo
echo "Output: $OUTDIR/mutants/$MUTANT_ID/"