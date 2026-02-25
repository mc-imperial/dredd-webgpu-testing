#!/bin/bash

BASE=/data/dev
INFOMUTATED=$BASE/mesa_mutated/mutation_info.json
VKICDMUTATED=$BASE/mesa_mutated/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json
DAWN=$BASE/dawn
CTS=$BASE/webgpu_cts
MAP=$BASE/dredd-webgpu-testing/data/mutants_to_kill.csv

python -m kill \
    $INFOMUTATED \
    $VKICDMUTATED \
    $DAWN \
    --cts $CTS \
    --map $MAP \
    --sample 2000
