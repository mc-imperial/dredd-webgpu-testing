#!/bin/bash

BASE=/data/dev/dredd-webgpu-testing
UPDATED=5aa1334165e38e9b7ad52fcda66b2e65f7e4d1d1
ORIGINAL=411c3186e00f930a257bc01ca0b4d31d19caad9c

cd $BASE/external/dawn
git checkout $ORIGINAL
git apply $BASE/run/cts/dawn_patch_to_run_cts.txt