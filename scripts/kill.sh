#!/bin/bash

BASE=/data/dev
INFOMUTATED=$BASE/mesa_mutated/mutation_info.json
INFOTRACKED=$BASE/mesa_tracked/mutation_info.json
VKICDMUTATED=$BASE/mesa_mutated/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json
VKICDTRACKED=$BASE/mesa_tracked/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json
DAWN=$BASE/dawn
CTS=$BASE/webgpu_cts
MAP=$BASE/data/mutants_to_kill.csv

python -m kill \
    $INFOMUTATED \
    $INFOTRACKED \
    $VKICDMUTATED \
    $VKICDTRACKED \
    $DAWN \
    --cts $CTS \
    --map $MAP \
    --sample 5
