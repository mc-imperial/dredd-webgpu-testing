#!/usr/bin/env bash
# Polish reduced kills for hand-writing CTS tests (run inside the container).
#
#   ./polish.sh 683041 697887 697822 697859
#
# For each mutant ID:
#   1. copy results/reduce/reduce-batch/<m> to results/reduce/polish/<m> (skipped if it exists:
#      delete that folder, or set FORCE=1, to start again)
#   2. point test.sh at the copy's input.json; make test_raw.sh (no reconditioning)
#   3. raw.wgsl = reduced.wgsl, then the meaning-preserving WGSL passes
#   4. trim input.json to the size of each binding (values kept; input_pass --zero to zero them)
# Output per mutant goes to results/reduce/polish/<m>/polish.log; a summary is printed at the end.
#
# Settings (environment): REPO (default /workspace/dredd-webgpu-testing),
#   BATCH (default results/reduce/reduce-batch), POLISH (default results/reduce/polish), FORCE.

REPO="${REPO:-/workspace/dredd-webgpu-testing}"
BATCH="${BATCH:-results/reduce/reduce-batch}"
POLISH="${POLISH:-results/reduce/polish}"

if [ $# -eq 0 ]; then
  echo "usage: $0 <mutant-id>..." >&2
  exit 2
fi
cd "$REPO" || exit 1
summary=()

for m in "$@"; do
  src="$REPO/$BATCH/$m"
  dst="$REPO/$POLISH/$m"
  echo "=== $m ==="
  if [ ! -f "$src/reduced.wgsl" ]; then
    echo "  no $src/reduced.wgsl: skipping"
    summary+=("$m  skipped: not in $BATCH")
    continue
  fi
  if [ -d "$dst" ] && [ -z "$FORCE" ]; then
    echo "  $dst exists: skipping (FORCE=1 to redo)"
    summary+=("$m  skipped: already polished")
    continue
  fi
  rm -rf "$dst"
  mkdir -p "$(dirname "$dst")"
  cp -r "$src" "$dst"

  sed -i "s|^export REDUCE_INPUT=.*|export REDUCE_INPUT=$dst/input.json|" "$dst/test.sh"
  sed 's/^export REDUCE_RECONDITION=.*/export REDUCE_RECONDITION=0/' "$dst/test.sh" > "$dst/test_raw.sh"
  cp "$dst/reduced.wgsl" "$dst/raw.wgsl"

  log="$dst/polish.log"
  {
    echo "--- wgsl pass (safe) ---"
    python3 -m cts_lab.wgsl_pass "$dst" --file raw.wgsl --test test_raw.sh --passes safe
    wgsl_rc=$?
    echo "--- input pass ---"
    python3 -m cts_lab.input_pass "$dst" --file raw.wgsl --test test_raw.sh
    input_rc=$?
    echo "wgsl_rc=$wgsl_rc input_rc=$input_rc"
  } 2>&1 | tee "$log" | sed 's/^/  /'

  rcs=$(tail -n 1 "$log")
  lines=$(wc -l < "$dst/raw.wgsl")
  if [ "$rcs" = "wgsl_rc=0 input_rc=0" ]; then
    # the input pass's own description, e.g. "0:0: 32 bytes, 1 non-zero word(s)" or "no inputs"
    inp=$(grep -E '^ *([0-9]+:[0-9]+: [0-9]+ bytes|no inputs)' "$log" | sed 's/^ *//' | paste -sd ';' -)
    summary+=("$m  ok: raw.wgsl $lines lines; input: ${inp:-see $log}")
  else
    summary+=("$m  FAILED ($rcs): see $log")
  fi
done

echo
echo "=== summary ==="
printf '%s\n' "${summary[@]}"
echo "Check by hand: diff -u <dir>/raw.wgsl.before-wgsl <dir>/raw.wgsl"