#!/usr/bin/env bash
# Run the wgslsmith fuzzing kill loop inside the container.
#
# Usage: fuzz.sh <survivors.txt> <outdir> [extra cts-lab fuzz args...]
#   e.g. fuzz.sh results/mutant-killing/first-pass/survivors.txt results/fuzz/run1 --hours 12
#
# Rerunning the same command resumes (skips seeds already tried).

set -euo pipefail

USAGE="Usage: $0 <survivors.txt> <outdir> [extra cts-lab fuzz args...]"
SURVIVORS="${1:?$USAGE}"
OUTDIR="${2:?$USAGE}"
shift 2

WGSLSMITH_BIN="${WGSLSMITH_BIN:-/data/wgslsmith/target/release/wgslsmith}"
MUTATED_ICD="${MUTATED_ICD:-/data/mesa_mutated/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json}"
TRACKED_ICD="${TRACKED_ICD:-/data/mesa_tracked/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json}"

for f in "$WGSLSMITH_BIN" "$MUTATED_ICD" "$TRACKED_ICD" "$SURVIVORS"; do
    [[ -e "$f" ]] || { echo "ERROR: not found: $f" >&2; exit 1; }
done

mkdir -p "$OUTDIR"

cts-lab fuzz \
    --wgslsmith "$WGSLSMITH_BIN" \
    --mutated-icd "$MUTATED_ICD" \
    --tracked-icd "$TRACKED_ICD" \
    --survivors "$SURVIVORS" \
    --outdir "$OUTDIR" \
    "$@"