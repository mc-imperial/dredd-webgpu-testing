#!/usr/bin/env bash
# Runtime of each shared-execution reachability run, on every instance.
#
# Usage (from moray):
#   bash icst_2027_experiments/analysis/check_shared_runtime.sh [--csv FILE] [IP ...]
#
#   --csv FILE  also write one row per run to FILE (commit it; gen_rq1a_runtime.py
#               turns it into the paper's macros), e.g.
#               results/reachability/runtimes/shared_runtimes.csv
#
# Each runner invocation writes a run_info.json with its time_seconds. A
# subtree-no-cache repeat is one invocation; a file-subtrees-no-cache repeat is one
# invocation per test file, run one after another, so its runtime is the sum.
# Invocations with a non-zero return code are counted and reported (the CTS
# runner also exits non-zero when tests fail, so this is not by itself an error).
set -uo pipefail

KEY="${AWS_KEY:-$HOME/.ssh/amber-aws.pem}"
DEFAULT_IPS=(16.16.219.2 16.192.199.63 16.16.170.119 16.16.251.113 16.16.219.147)
CSV=""
if [ "${1:-}" = "--csv" ]; then CSV="$2"; shift 2; fi
IPS=("$@"); [ ${#IPS[@]} -gt 0 ] || IPS=("${DEFAULT_IPS[@]}")
ROWS=$(mktemp); trap 'rm -f "$ROWS"' EXIT

read -r -d '' REMOTE <<'EOF' || true
cd ~/dredd-webgpu-testing/results/webgpu-shader-run 2>/dev/null || { echo "   no results/webgpu-shader-run"; exit 0; }
sudo python3 - <<'PY'
import glob, json, os
dirs = sorted(glob.glob("run-*/subtree-no-cache/servers-*/repeat-*") +
              glob.glob("run-*/file-subtrees-no-cache/servers-*/repeat-*"))
if not dirs:
    print("   no shared run folders")
for d in dirs:
    infos = [os.path.join(d, "run_info.json")] if os.path.exists(os.path.join(d, "run_info.json")) \
        else sorted(glob.glob(os.path.join(d, "*", "run_info.json")))
    if not infos:
        print(f"   {d}: no run_info.json (compressed?)")
        continue
    total, nonzero, timed_out = 0.0, 0, 0
    for p in infos:
        info = json.load(open(p))
        total += info["time_seconds"]
        nonzero += info.get("returncode", 0) != 0
        timed_out += bool(info.get("timed_out"))
    print(f"   {d}: {len(infos)} invocation(s), {total / 3600:.2f} h"
          f" ({nonzero} non-zero exit, {timed_out} timed out)")
    print(f"ROW,{d},{len(infos)},{total / 3600:.3f},{nonzero},{timed_out}")
PY
EOF

for ip in "${IPS[@]}"; do
    host=$(ssh -i "$KEY" -o BatchMode=yes -o ConnectTimeout=10 "ubuntu@$ip" hostname 2>/dev/null || echo unreachable)
    echo "== $ip ($host)"
    ssh -i "$KEY" -o BatchMode=yes -o ConnectTimeout=10 "ubuntu@$ip" 'bash -s' <<< "$REMOTE" |
    while IFS= read -r line; do
        if [[ "$line" == ROW,* ]]; then echo "$ip,$host,${line#ROW,}" >> "$ROWS"; else echo "$line"; fi
    done
done

if [ -n "$CSV" ]; then
    mkdir -p "$(dirname "$CSV")"
    { echo "# measured $(date -u '+%Y-%m-%dT%H:%M:%SZ') by check_shared_runtime.sh:" \
           "sum of time_seconds over each repeat's run_info.json files"
      echo "ip,host,run,invocations,hours,nonzero_exit,timed_out"
      cat "$ROWS"; } > "$CSV"
    echo "wrote $CSV ($(wc -l < "$ROWS") runs)"
fi