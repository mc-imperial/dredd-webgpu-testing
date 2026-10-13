#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"

RUN_DIR="${1:?Usage: $0 <run-dir> [configuration]}"
CONFIGURATION="${2:-isolated-no-cache}"

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
echo "============================================================"
echo "Building mutant-to-tests mapping ($CONFIGURATION)"
echo "============================================================"

MAPPING="$PROCESSED_DIR/mutant_to_tests_${CONFIGURATION}.json"

if [[ -f "$MAPPING" ]]; then
    echo "Mapping already exists, skipping:"
    echo "$MAPPING"
else
    python3 "$SCRIPT_DIR/mutants_to_tests.py" \
        "$OUTPUT" \
        "$CONFIGURATION" \
        --output "$MAPPING" \
        --histogram
fi

if ! jq -e 'length > 0' "$MAPPING" > /dev/null; then
    echo "ERROR: mapping is empty. Is '$CONFIGURATION' a configuration in $OUTPUT?" >&2
    echo "Configurations present:" >&2
    python3 -c 'import csv,sys; csv.field_size_limit(2**31-1); print(*sorted({r["configuration"] for r in csv.DictReader(open(sys.argv[1]))}), sep="\n")' "$OUTPUT" >&2
    exit 1
fi

echo
echo "Processed results:"
echo "$OUTPUT"