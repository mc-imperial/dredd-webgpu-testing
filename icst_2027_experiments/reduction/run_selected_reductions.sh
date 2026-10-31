#!/usr/bin/env bash
# Reduce the kills chosen by select_reductions.py, one at a time, with `one` (so
# none is skipped as "already covered": group A compares neighbours on purpose).
# A mutant whose result.json exists is skipped, so rerun it after an interruption.
#
# Usage (from anywhere, on moray, inside tmux):
#   bash icst_2027_experiments/reduction/run_selected_reductions.sh [SELECTION_CSV]
#   default: results/reduce/survivors-72h/selection.csv; results go next to it.
# Log of each mutant: <outdir>/logs/<mutant>.log; overall: <outdir>/run.log
set -uo pipefail

REPO="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$REPO"
SEL="${1:-results/reduce/survivors-72h/selection.csv}"
OUT="$(dirname "$SEL")"
RUNNER=icst_2027_experiments/reduction/reduce-runner.sh
[[ -f "$SEL" ]] || { echo "ERROR: $SEL not found: run select_reductions.py first" >&2; exit 1; }
mkdir -p "$OUT/logs"

total=$(grep -v '^#' "$SEL" | tail -n +2 | wc -l); n=0; done_=0; failed=0
while IFS=, read -r mutant group trial _; do
    n=$((n + 1))
    if [[ -f "$OUT/$mutant/result.json" ]]; then
        echo "[$n/$total] $mutant ($group): done, skipped"; continue
    fi
    if [[ -d "$OUT/$mutant" ]]; then   # left over from an interrupted run (owned by root)
        docker run --rm -v "$REPO/$OUT:/r" dredd-webgpu-testing:reduce rm -rf "/r/$mutant"
    fi
    echo "[$n/$total] $mutant ($group) from $trial: started $(date '+%F %T')"
    if bash "$RUNNER" --survivors results/cts-survival/combined/survivors.txt \
            --reducer perses,cvise,wgsl --outdir "$OUT" \
            one "$trial" "$mutant" > "$OUT/logs/$mutant.log" 2>&1; then
        done_=$((done_ + 1))
    else
        failed=$((failed + 1)); echo "    FAILED (see $OUT/logs/$mutant.log)"
    fi
done < <(grep -v '^#' "$SEL" | tail -n +2) 2>&1 | tee -a "$OUT/run.log"

echo "finished $(date '+%F %T')" | tee -a "$OUT/run.log"