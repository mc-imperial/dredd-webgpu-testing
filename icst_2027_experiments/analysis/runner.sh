#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"

RUN_DIR="${1:?Usage: $0 <run-dir>}"

RUN_DIR="$(cd "$RUN_DIR" && pwd)"
PROCESSED_DIR="$RUN_DIR/processed"
OUTPUT="$PROCESSED_DIR/reachability.csv"

mkdir -p "$PROCESSED_DIR"

if [[ -f "$OUTPUT" ]]; then
    echo "Processed dataset already exists:"
    echo "$OUTPUT"
    echo
    echo "Skipping extraction."
else
    echo "Processed dataset does not exist."
    echo "Extracting reachability data..."

    python3 "$SCRIPT_DIR/extract_results.py" \
        "$RUN_DIR" \
        --output "$OUTPUT"
fi

echo "============================================================"
echo "Running summary"
echo "============================================================"

python3 "$SCRIPT_DIR/summarise_results.py" \
    "$OUTPUT"

echo
echo "============================================================"
echo "Running pairwise reachability comparisons"
echo "============================================================"

COMPARISONS="$PROCESSED_DIR/reachability_comparisons.csv"

python3 "$SCRIPT_DIR/compare_reachability.py" \
    "$OUTPUT" \
    --servers 1 \
    --repeat 1 \
    --output "$COMPARISONS"

echo
echo "============================================================"
echo "Summarising pairwise comparisons"
echo "============================================================"

python3 "$SCRIPT_DIR/summarise_comparisons.py" \
    "$COMPARISONS"

echo
echo "Processed results:"
echo "$OUTPUT"