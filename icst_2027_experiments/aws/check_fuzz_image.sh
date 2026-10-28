#!/usr/bin/env bash
# Check that the fuzzing image is ready for a new target list.
#
# Run on an instance, from anywhere:
#   bash icst_2027_experiments/aws/check_fuzz_image.sh
#
# Checks:
#   1. the container uses this repository's cts_lab (so local edits, e.g. the
#      reached_targets field in kill_fuzz.py, take effect)
#   2. both Mesa builds in the fuzzing image number mutants exactly as the
#      reachability image does (same files, same first mutant ID per file), so
#      mutant IDs from the reachability runs mean the same mutants here
set -euo pipefail

REPO="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/../.." && pwd)"
FUZZ_IMAGE="${FUZZ_IMAGE:-dredd-webgpu-testing:wgslsmith}"
REACH_IMAGE="${REACH_IMAGE:-dredd-webgpu-testing:reachability-stability}"
TMP=$(mktemp -d); trap 'rm -rf "$TMP"' EXIT

# Prints "<first mutant ID> <file path relative to Mesa>" for every Dredd-mutated NIR file.
# Tracking builds write the file's first ID as "<N> + local_mutation_id";
# mutation builds convert an enabled ID with "local_value = value - <N>".
OFFSETS='for f in $(grep -rl "DREDD PRELUDE START" $M/src/compiler/nir $M/build/src/compiler/nir 2>/dev/null); do
  n=$(grep -o -m1 -E "[0-9]+ \+ local_mutation_id|value - [0-9]+" "$f" | grep -o -E "[0-9]+" | head -1)
  echo "${n:-NONE} ${f#$M/}"; done | sort -n'

echo "== 1. which cts_lab the fuzzing container uses"
docker run --rm --mount "type=bind,source=$REPO,target=/workspace/dredd-webgpu-testing" \
    --workdir /workspace/dredd-webgpu-testing "$FUZZ_IMAGE" \
    python3 -c "import cts_lab; print('  ', cts_lab.__file__)"

echo "== 2. mutant numbering"
docker run --rm -e M=/data/mesa_tracked "$REACH_IMAGE" bash -c "$OFFSETS" > "$TMP/reach.txt"
docker run --rm -e M=/data/mesa_tracked "$FUZZ_IMAGE"  bash -c "$OFFSETS" > "$TMP/fuzz_tracked.txt"
docker run --rm -e M=/data/mesa_mutated "$FUZZ_IMAGE"  bash -c "$OFFSETS" > "$TMP/fuzz_mutated.txt"
echo "   reachability image:  $(wc -l < "$TMP/reach.txt") files, last first-ID $(tail -1 "$TMP/reach.txt" | cut -d' ' -f1)"
ok=1
for b in fuzz_tracked fuzz_mutated; do
    if diff -q "$TMP/reach.txt" "$TMP/$b.txt" > /dev/null; then
        echo "   $b: identical numbering"
    else
        echo "   $b: DIFFERENT numbering (first differences below)"; ok=0
        diff "$TMP/reach.txt" "$TMP/$b.txt" | head -6 | sed 's/^/      /'
    fi
done

echo "== result"
if [ $ok -eq 1 ]; then echo "   OK: mutant IDs match across images"; else echo "   MISMATCH: do not use reachability-derived IDs with this image"; exit 1; fi