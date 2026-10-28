#!/usr/bin/env bash
# Copy a Docker image from this instance to other instances.
#
# Run ON THE INSTANCE THAT HAS THE IMAGE, in a session connected with `ssh -A`
# (so it can ssh to the others):
#   bash icst_2027_experiments/aws/copy_image.sh IMAGE IP [IP ...]
# e.g.
#   bash icst_2027_experiments/aws/copy_image.sh dredd-webgpu-testing:wgslsmith 16.192.199.63 16.16.170.119
#
# Steps (each one checked before the next):
#   1. save and compress the image to ~/<name>.tar.zst (skipped if that file already exists)
#   2. copy it to every target in parallel and load it there, with progress bars
#   3. check every target now has the image
#   4. delete the archive, only if all targets have it
set -euo pipefail

[ $# -ge 2 ] || { sed -n '2,14p' "$0"; exit 1; }
IMAGE="$1"; shift
TARGETS=("$@")
ARCHIVE="$HOME/$(echo "$IMAGE" | tr ':/' '__').tar.zst"
SSH=(ssh -o StrictHostKeyChecking=accept-new -o BatchMode=yes)

echo "== 0. checks"
docker image inspect "$IMAGE" > /dev/null || { echo "image $IMAGE not found here"; exit 1; }
ssh-add -l > /dev/null 2>&1 || { echo "no forwarded ssh key: reconnect with ssh -A"; exit 1; }
for t in pv zstd; do command -v $t > /dev/null || sudo apt-get install -y -q $t > /dev/null; done
for ip in "${TARGETS[@]}"; do
    "${SSH[@]}" "ubuntu@$ip" 'command -v zstd > /dev/null || sudo apt-get install -y -q zstd > /dev/null; df -h / | tail -1' \
        | sed "s/^/   $ip: /" || { echo "cannot reach $ip"; exit 1; }
done

echo "== 1. save $IMAGE -> $ARCHIVE"
if [ -s "$ARCHIVE" ]; then
    echo "   already there ($(du -h "$ARCHIVE" | cut -f1)), reusing it"
else
    docker save "$IMAGE" | zstd -T0 -3 -o "$ARCHIVE.partial"
    mv "$ARCHIVE.partial" "$ARCHIVE"
fi

echo "== 2. copy and load"
for ip in "${TARGETS[@]}"; do
    pv -c -N "$ip" "$ARCHIVE" | "${SSH[@]}" "ubuntu@$ip" 'zstd -d | docker load' > "$HOME/load-$ip.log" 2>&1 &
done
wait

echo "== 3. check"
ok=1
for ip in "${TARGETS[@]}"; do
    if "${SSH[@]}" "ubuntu@$ip" "docker image inspect '$IMAGE' > /dev/null 2>&1"; then
        echo "   $ip: has $IMAGE"
    else
        echo "   $ip: MISSING (see ~/load-$ip.log)"; ok=0
    fi
done

if [ $ok -eq 1 ]; then
    rm "$ARCHIVE"; echo "== 4. all loaded; deleted $ARCHIVE"
else
    echo "== 4. kept $ARCHIVE so you can retry: rerun the same command"; exit 1
fi