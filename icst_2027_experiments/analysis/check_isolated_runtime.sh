#!/usr/bin/env bash
# Estimate the wall-clock time of each isolated reachability run, on every instance.
#
# Usage (from moray):
#   bash icst_2027_experiments/aws/check_isolated_runtime.sh [--csv FILE] [IP ...]
#
#   --csv FILE  also write one row per run to FILE (commit it; it is the record
#               that gen_rq1a_runtime.py turns into the paper's macros), e.g.
#               results/reachability/runtimes/isolated_runtimes.csv
#
# Each isolated run writes one folder per test (0, 1, 2, ...), each with a
# run_info.json. Without reading all of them, the run's wall-clock time is about
#   modification time of the last test's run_info.json
#   - modification time of the first test's run_info.json
#   + the first test's own time_seconds
# Folders that were copied from elsewhere, or compressed, are reported as such:
# their timestamps are from the copy, not the run.
set -uo pipefail

KEY="${AWS_KEY:-$HOME/.ssh/amber-aws.pem}"
DEFAULT_IPS=(16.16.219.2 16.192.199.63 16.16.170.119 16.16.251.113 16.16.219.147)
CSV=""
if [ "${1:-}" = "--csv" ]; then CSV="$2"; shift 2; fi
IPS=("$@"); [ ${#IPS[@]} -gt 0 ] || IPS=("${DEFAULT_IPS[@]}")
ROWS=$(mktemp); trap 'rm -f "$ROWS"' EXIT

read -r -d '' REMOTE <<'EOF' || true
cd ~/dredd-webgpu-testing/results/webgpu-shader-run 2>/dev/null || { echo "   no results/webgpu-shader-run"; exit 0; }
shopt -s nullglob
dirs=(run-*/isolated-no-cache/servers-*/repeat-*)
[ ${#dirs[@]} -gt 0 ] || echo "   no isolated run folders"
for d in "${dirs[@]}"; do
  # test folders are numbered; list names only (fast, no sorting by ls)
  last=$(sudo ls -f "$d" | grep -E '^[0-9]+$' | sort -n | tail -1)
  n=$(sudo ls -f "$d" | grep -cE '^[0-9]+$')
  if [ -z "$last" ]; then
    echo "   $d: no numbered test folders ($(sudo ls "$d" | head -3 | tr '\n' ' '))"
    continue
  fi
  first_info="$d/0/run_info.json"; last_info="$d/$last/run_info.json"
  if ! sudo test -f "$first_info" || ! sudo test -f "$last_info"; then
    echo "   $d: $n test folders, but run_info.json missing (compressed?)"
    continue
  fi
  t0=$(sudo stat -c %Y "$first_info"); t1=$(sudo stat -c %Y "$last_info")
  s0=$(sudo python3 -c "import json,sys; print(json.load(open(sys.argv[1]))['time_seconds'])" "$first_info")
  python3 - "$d" "$n" "$t0" "$t1" "$s0" <<'PY'
import sys, datetime as dt
d, n, t0, t1, s0 = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), int(sys.argv[4]), float(sys.argv[5])
start = t0 - s0
f = lambda t: dt.datetime.fromtimestamp(t, dt.timezone.utc).strftime("%d %b %H:%M")
print(f"   {d}: {n:,} tests, {f(start)} -> {f(t1)} UTC, about {(t1 - start) / 3600:.1f} h")
iso = lambda t: dt.datetime.fromtimestamp(t, dt.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
print(f"ROW,{d},{n},{iso(start)},{iso(t1)},{(t1 - start) / 3600:.2f}")
PY
done
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
    { echo "# measured $(date -u '+%Y-%m-%dT%H:%M:%SZ') by check_isolated_runtime.sh:" \
           "first test's run_info.json mtime minus its time_seconds, to last test's run_info.json mtime"
      echo "ip,host,run,tests,start_utc,end_utc,hours"
      cat "$ROWS"; } > "$CSV"
    echo "wrote $CSV ($(wc -l < "$ROWS") runs)"
fi