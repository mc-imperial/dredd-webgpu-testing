#!/usr/bin/env bash
# Check that a fuzzing session is running on every instance, e.g. after restarting it.
#
# Usage (from moray):
#   bash icst_2027_experiments/aws/check_fuzz_started.sh [SESSION] [IP ...]
#   SESSION  tmux session / log name (default: fuzz_unreached)
#   IP ...   instances (default: all five)
#
# Per instance: when the latest session started and whether it has finished (from
# the "== ... starting" / "== ... finished" lines in ~/SESSION.log), whether a
# container is running, and the log's last line. RUNNING means it started after
# the last "finished" line and a container is up.
set -uo pipefail

KEY="${AWS_KEY:-$HOME/.ssh/amber-aws.pem}"
DEFAULT_IPS=(16.16.219.2 16.192.199.63 16.16.170.119 16.16.251.113 16.16.219.147)
SESSION="${1:-fuzz_unreached}"; shift || true
IPS=("$@"); [ ${#IPS[@]} -gt 0 ] || IPS=("${DEFAULT_IPS[@]}")

for ip in "${IPS[@]}"; do
    ssh -i "$KEY" -o BatchMode=yes -o ConnectTimeout=10 "ubuntu@$ip" "
        log=~/$SESSION.log
        start=\$(grep -n ' starting on ' \$log 2>/dev/null | tail -1)
        fin=\$(grep -n ' finished, exit code ' \$log 2>/dev/null | tail -1)
        sl=\${start%%:*}; fl=\${fin%%:*}
        containers=\$(docker ps -q 2>/dev/null | wc -l)
        if [ -n \"\$sl\" ] && { [ -z \"\$fl\" ] || [ \"\$sl\" -gt \"\$fl\" ]; } && [ \"\$containers\" -gt 0 ]; then state=RUNNING
        elif [ -n \"\$sl\" ] && { [ -z \"\$fl\" ] || [ \"\$sl\" -gt \"\$fl\" ]; }; then state='STARTED, but no container running'
        else state='NOT RUNNING (last session finished)'; fi
        echo \"== $ip (\$(hostname)): \$state\"
        echo \"   last start:  \$(echo \"\${start#*:}\" | sed 's/^== //')\"
        echo \"   last finish: \$(echo \"\${fin#*:}\" | sed 's/^== //')\"
        echo \"   last line:   \$(tail -1 \$log 2>/dev/null | cut -c1-110)\"
    " || echo "== $ip: could not connect"
done
