#!/bin/bash

BASE=/home/ubuntu/dev
INFOMUTATED=$BASE/mesa_mutated/mutation_info.json
INFOTRACKED=$BASE/mesa_tracked/mutation_info.json
VKICDMUTATED=$BASE/mesa_mutated/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json
VKICDTRACKED=$BASE/mesa_tracked/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json
DAWN=$BASE/dawn
CTS=$BASE/webgpu_cts

python -m kill \
    $INFOMUTATED \
    $INFOTRACKED \
    $VKICDMUTATED \
    $VKICDTRACKED \
    $DAWN \
    --cts $CTS \
    --map $BASE/dredd-webgpu-testing/data/mapping_mutant_to_query_list.csv \
    --wgslsmith_touched $BASE/dredd-webgpu-testing/data/covered_by_wgslsmith.txt \
    --sample 5