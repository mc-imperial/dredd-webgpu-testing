#!/usr/bin/env bash
# Show the last line(s) of a log on each AWS instance.
#
# Usage:
#   icst_2027_experiments/aws/aws_tail.sh LOG [LINES] [IP ...]
#
# Example:
#   icst_2027_experiments/aws/aws_tail.sh process_shared.log
set -euo pipefail

KEY="${AWS_KEY:-$HOME/.ssh/amber-aws.pem}"
DEFAULT_IPS=(16.16.219.2 16.16.170.119 16.16.251.113 16.16.219.147)

[ $# -ge 1 ] || { sed -n '2,8p' "$0"; exit 1; }
LOG="$1"; LINES="${2:-1}"; shift $(( $# >= 2 ? 2 : 1 ))
IPS=("$@"); [ ${#IPS[@]} -gt 0 ] || IPS=("${DEFAULT_IPS[@]}")

for ip in "${IPS[@]}"; do
    echo "== $ip"
    ssh -n -i "$KEY" "ubuntu@$ip" "tail -n $LINES ~/$LOG 2>/dev/null || echo '  (no log yet)'" | sed 's/^/  /'
done