#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd -- "$SCRIPT_DIR/../.." && pwd)"

RUN_DIR="${1:?Usage: $0 <run-dir>}"

RUN_DIR="$(cd "$RUN_DIR" && pwd)"
PROCESSED_DIR="$RUN_DIR/processed"

mkdir -p "$PROCESSED_DIR"

python3 "$SCRIPT_DIR/extract_results.py" \
    "$RUN_DIR" \
    --output "$PROCESSED_DIR/reachability.csv"

echo
echo "Processed results:"
echo "$PROCESSED_DIR"