#!/usr/bin/env bash
# Replay the 72-hour survivor fuzzing trials' programs to record which mutants each
# reached (analysis/replay_fuzz_reach.py), inside the wgslsmith image.
#
# Usage (from anywhere; on a machine with the image):
#   bash icst_2027_experiments/mutant-killing/replay-reach.sh [extra replay_fuzz_reach.py args...]
#   e.g. ... --limit 5      a quick trial run: 5 programs per trial
#        ... --jobs 16      more programs in parallel
#
# Output: results/fuzz/run_72h/replayed-reach/ (R1.jsonl.gz ... and summary.txt).
# Rerunning resumes. Run it inside tmux: the full replay takes hours.
set -euo pipefail

REPO="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/../.." && pwd)"
IMAGE="${IMAGE:-dredd-webgpu-testing:wgslsmith}"
W=/workspace/dredd-webgpu-testing

cd "$REPO"
trials=( results/fuzz/run_72h/cts5x72h-random-seed-*/cts5x72h-random-seed )
[ ${#trials[@]} -gt 0 ] && [ -e "${trials[0]}" ] || { echo "no trials under results/fuzz/run_72h" >&2; exit 1; }
labels=$(seq -s, -f "R%g" 1 "${#trials[@]}")

docker run --rm --ulimit core=0 \
    --mount "type=bind,source=$REPO,target=$W" --workdir "$W" \
    --user "$(id -u):$(id -g)" \
    "$IMAGE" \
    python3 icst_2027_experiments/analysis/replay_fuzz_reach.py "${trials[@]}" \
        --targets results/cts-survival/combined/survivors.txt \
        --labels "$labels" \
        --out-dir results/fuzz/run_72h/replayed-reach \
        "$@"