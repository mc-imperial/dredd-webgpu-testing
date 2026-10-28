#!/usr/bin/env bash
# Progress of a fuzzing run on the AWS instances.
#
# Usage:
#   icst_2027_experiments/aws/check_fuzz_progress.sh [SESSION] [IP ...]
#   SESSION  tmux session / log name (default: fuzz_unreached)
#   IP ...   instances (default: all five, amber-webgpu-0 .. 4)
#
# For each instance prints: whether the tmux session is still running, the last
# log line, and from results/fuzz/*/programs.jsonl: number of programs, how many
# records carry reached_targets, and the number of distinct targets reached so far.
set -uo pipefail

KEY="${AWS_KEY:-$HOME/.ssh/amber-aws.pem}"
#            webgpu-0     webgpu-1      webgpu-2      webgpu-3      webgpu-4
DEFAULT_IPS=(16.16.219.2 16.192.199.63 16.16.170.119 16.16.251.113 16.16.219.147)
SESSION="${1:-fuzz_unreached}"; shift || true
IPS=("$@"); [ ${#IPS[@]} -gt 0 ] || IPS=("${DEFAULT_IPS[@]}")

read -r -d '' PY <<'EOF' || true
import glob, json, os
files = sorted(glob.glob(os.path.expanduser("~/dredd-webgpu-testing/results/fuzz/*/programs.jsonl")),
               key=os.path.getmtime)
if not files:
    print("   no programs.jsonl yet")
for path in files[-1:]:
    n = with_field = 0
    reached = set()
    for line in open(path):
        try:
            rec = json.loads(line)
        except ValueError:
            continue
        n += 1
        if "reached_targets" in rec:
            with_field += 1
            reached.update(rec["reached_targets"])
    print(f"   {path.split('results/fuzz/')[1]}: {n} programs, "
          f"{with_field} with reached_targets, {len(reached):,} distinct targets reached")

# Outcomes from the log lines "mutant ID <n>: <STATUS>". Checks count every check;
# distinct mutants counts each mutant once, under its first kill type (or SURVIVED
# if never killed).
import collections, re
log = os.path.expanduser(f"~/{os.environ['SESSION']}.log")
checks, first_kill, seen = collections.Counter(), {}, set()
if os.path.exists(log):
    for m, s in re.findall(r"mutant ID (\d+): ([A-Z_]+)", open(log, errors="replace").read()):
        checks[s] += 1
        seen.add(m)
        if s.startswith("KILL") and m not in first_kill:
            first_kill[m] = s
by_type = collections.Counter(first_kill.values())
print(f"   checks: " + ", ".join(f"{s} {c:,}" for s, c in sorted(checks.items())))
print(f"   distinct mutants checked {len(seen):,}, killed {len(first_kill):,} ("
      + ", ".join(f"{s} {c:,}" for s, c in sorted(by_type.items())) + ")")
EOF

for ip in "${IPS[@]}"; do
    echo "== $ip"
    ssh -i "$KEY" -o BatchMode=yes -o ConnectTimeout=10 "ubuntu@$ip" "
        if tmux has-session -t '$SESSION' 2>/dev/null; then echo '   session: running'; else echo '   session: NOT running'; fi
        echo \"   last log line: \$(tail -n 1 ~/$SESSION.log 2>/dev/null | cut -c1-150)\"
        SESSION='$SESSION' python3 -" <<< "$PY" || echo "   (could not reach $ip)"
done