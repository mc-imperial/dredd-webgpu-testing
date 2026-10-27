#!/usr/bin/env bash
# Compress finished tracking files (untouched for 10+ minutes) in place, every 5 minutes.
while true; do
  sudo find /home/ubuntu/dredd-webgpu-testing/results/webgpu-shader-run -path '*/tracking/test_id_*.txt' -mmin +10 -print0 \
    | sudo xargs -0 -r -n 200 -P 4 zstd -q --rm
  sleep 300
done
