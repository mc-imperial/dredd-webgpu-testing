#!/usr/bin/env bash
# Start a long-running command on AWS instances in a detached tmux session,
# after pulling the repo. Output is shown in the session and also saved to ~/NAME.log.
#
# Usage:
#   icst_2027_experiments/aws/aws_start.sh NAME 'COMMAND' [IP ...]
#
#   NAME      tmux session name on each instance; the log is ~/NAME.log
#   COMMAND   run from the repository root on each instance
#   IP ...    instances to start on (default: the four full-run instances)
#
# Watch a job:   ssh in, then  tmux attach -t NAME   (detach: Ctrl-b then d)
# Check logs:    icst_2027_experiments/aws/aws_tail.sh NAME.log
#
# Example:
#   icst_2027_experiments/aws/aws_start.sh fuzz_unreached \
#       'bash icst_2027_experiments/mutant-killing/fuzz-runner.sh targets.txt run-$(hostname) --hours 24'
set -euo pipefail

KEY="${AWS_KEY:-$HOME/.ssh/amber-aws.pem}"
DEFAULT_IPS=(16.16.219.2 16.16.170.119 16.16.251.113 16.16.219.147 16.192.199.63)

[ $# -ge 2 ] || { sed -n '2,18p' "$0"; exit 1; }
NAME="$1"; CMD="$2"; shift 2
IPS=("$@"); [ ${#IPS[@]} -gt 0 ] || IPS=("${DEFAULT_IPS[@]}")

# The job script that runs inside tmux on each instance. Sent over stdin, so the
# command needs no extra quoting. The session stays open after the job ends, so
# its final output can still be read with tmux attach.
JOB=$(cat <<EOF
#!/usr/bin/env bash
cd ~/dredd-webgpu-testing
echo "== \$(date '+%F %T') starting on \$(hostname): $NAME"
{ $CMD ; } 2>&1 | tee -a ~/$NAME.log
echo "== \$(date '+%F %T') finished, exit code \${PIPESTATUS[0]}" | tee -a ~/$NAME.log
exec bash
EOF
)

for ip in "${IPS[@]}"; do
    ssh -A -i "$KEY" -o StrictHostKeyChecking=accept-new "ubuntu@$ip" "
        set -e
        if tmux has-session -t '$NAME' 2>/dev/null; then
            echo '$ip: tmux session $NAME already exists, not started'; exit 0
        fi
        cd ~/dredd-webgpu-testing && git pull -q
        mkdir -p ~/.aws_jobs && cat > ~/.aws_jobs/$NAME.sh
        tmux new-session -d -s '$NAME' 'bash ~/.aws_jobs/$NAME.sh'
        echo \"$ip: started tmux session '$NAME' on \$(hostname), log ~/$NAME.log\"" <<< "$JOB"
done