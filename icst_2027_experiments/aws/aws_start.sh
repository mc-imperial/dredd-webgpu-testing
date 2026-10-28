#!/usr/bin/env bash
# Start a long-running command on AWS instances, detached, after pulling the repo.
#
# Usage:
#   icst_2027_experiments/aws/aws_start.sh LOG 'COMMAND' [IP ...]
#
#   LOG       log file name, written to ~/LOG on each instance
#   COMMAND   run from the repository root on each instance (use double quotes inside it)
#   IP ...    instances to start on (default: the four full-run instances)
#
# Example:
#   icst_2027_experiments/aws/aws_start.sh process_shared.log \
#       'bash icst_2027_experiments/reachability-stability/run_process_shared.sh'
set -euo pipefail

KEY="${AWS_KEY:-$HOME/.ssh/amber-aws.pem}"
DEFAULT_IPS=(16.16.219.2 16.16.170.119 16.16.251.113 16.16.219.147)

[ $# -ge 2 ] || { sed -n '2,13p' "$0"; exit 1; }
LOG="$1"; CMD="$2"; shift 2
IPS=("$@"); [ ${#IPS[@]} -gt 0 ] || IPS=("${DEFAULT_IPS[@]}")

for ip in "${IPS[@]}"; do
    # The pull runs first and on its own; only the nohup line is backgrounded,
    # so ssh returns straight away.
    ssh -n -A -i "$KEY" "ubuntu@$ip" "
        cd ~/dredd-webgpu-testing || exit 1
        git pull -q || { echo \"$ip: git pull FAILED, not started\"; exit 1; }
        nohup bash -c '$CMD' > ~/$LOG 2>&1 < /dev/null &
        echo \"$ip: started on \$(hostname), log ~/$LOG\""
done