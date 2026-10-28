#!/usr/bin/env bash
# Copy the shared-execution reachability runs from the AWS instances to this machine.
#
# Usage (from the repository root on moray):
#   bash icst_2027_experiments/aws/copy_shared_runs.sh [PATTERN] [DEST]
#   PATTERN  run folders to copy (default: run-20261028_*, the runs on the fixed image)
#   DEST     where to put them (default: results/reachability/raw/shared-v2)
#
# Uses rsync, so it can be stopped and rerun: files already copied are skipped.
# The results on the instances are owned by root, hence sudo rsync on their side.
# Prints the size first; the copy itself can take a while, so run it in tmux.
set -euo pipefail

KEY="${AWS_KEY:-$HOME/.ssh/amber-aws.pem}"
IPS=(16.16.219.2 16.16.170.119 16.16.251.113 16.16.219.147)   # webgpu-0, 2, 3, 4
PATTERN="${1:-run-20261028_*}"
DEST="${2:-results/reachability/raw/shared-v2}"
SRC=dredd-webgpu-testing/results/webgpu-shader-run
SSH="ssh -i $KEY -o BatchMode=yes -o ConnectTimeout=10"

mkdir -p "$DEST"
for ip in "${IPS[@]}"; do
    runs=$($SSH "ubuntu@$ip" "cd ~/$SRC 2>/dev/null && ls -d $PATTERN 2>/dev/null" || true)
    if [ -z "$runs" ]; then
        echo "== $ip: no $PATTERN"; continue
    fi
    for run in $runs; do
        size=$($SSH "ubuntu@$ip" "sudo du -sh ~/$SRC/$run | cut -f1")
        echo "== $ip: $run ($size)"
        rsync -a --info=progress2 -e "$SSH" --rsync-path="sudo rsync" \
            "ubuntu@$ip:/home/ubuntu/$SRC/$run" "$DEST/"
    done
done

echo "== copied to $DEST:"
du -sh "$DEST"/* 2>/dev/null