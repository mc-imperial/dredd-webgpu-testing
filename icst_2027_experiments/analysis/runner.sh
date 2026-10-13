#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"

RUN_DIR="${1:?Usage: $0 <run-dir> [configuration] [--mapping-only]}"
CONFIGURATION="${2:-isolated-no-cache}"
MAPPING_ONLY="${3:-}"

RUN_DIR="$(cd "$RUN_DIR" && pwd)"
PROCESSED_DIR="$RUN_DIR/processed"
mkdir -p "$PROCESSED_DIR"

echo "Run directory:  $RUN_DIR"
echo "Configuration:  $CONFIGURATION"
echo "Configurations present in run directory:"
ls -1 "$RUN_DIR" | grep -v '^processed$' | sed 's/^/  /'

if [[ ! -d "$RUN_DIR/$CONFIGURATION" ]]; then
    echo "ERROR: no '$CONFIGURATION' directory under $RUN_DIR" >&2
    exit 1
fi

# ------------------------------------------------------------------
# Mapping for the kill run: extract just this configuration
# ------------------------------------------------------------------
CONFIG_CSV="$PROCESSED_DIR/reachability_${CONFIGURATION}.csv"
MAPPING="$PROCESSED_DIR/mutant_to_tests_${CONFIGURATION}.json"

echo
echo "============================================================"
echo "Building mutant-to-tests mapping for $CONFIGURATION"
echo "============================================================"

if [[ -f "$MAPPING" ]]; then
    echo "Already exists, skipping: $MAPPING"
else
    python3 "$SCRIPT_DIR/build_mutant_mapping.py" \
        "$RUN_DIR" \
        --configuration "$CONFIGURATION" \
        --output "$MAPPING" \
        --max-tests 20
fi

if ! jq -e 'length > 0' "$MAPPING" > /dev/null; then
    echo "ERROR: mapping is empty: $MAPPING" >&2
    exit 1
fi
echo "Mutants in mapping: $(jq 'length' "$MAPPING")"

if [[ "$MAPPING_ONLY" == "--mapping-only" ]]; then
    echo
    echo "Mapping: $MAPPING"
    exit 0
fi

# ------------------------------------------------------------------
# Full analysis across all configurations 
# ------------------------------------------------------------------

OUTPUT="$PROCESSED_DIR/reachability.csv"

echo
echo "============================================================"
echo "Extracting reachability for all configurations"
echo "============================================================"

if [[ -f "$OUTPUT" ]]; then
    echo "Already exists, skipping: $OUTPUT"
else
    python3 "$SCRIPT_DIR/extract_results.py" \
        "$RUN_DIR" \
        --output "$OUTPUT"
fi

echo
echo "============================================================"
echo "Running summary"
echo "============================================================"

python3 "$SCRIPT_DIR/summarise_results.py" "$OUTPUT"

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

python3 "$SCRIPT_DIR/summarise_comparisons.py" "$COMPARISONS"

echo
echo "Processed results: $OUTPUT"
echo "Mapping:           $MAPPING"