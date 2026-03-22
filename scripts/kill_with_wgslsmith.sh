#!/bin/bash

BASE=/data/dev
INFOMUTATED=$BASE/mesa_mutated/mutation_info.json
VKICDMUTATED=$BASE/mesa_mutated/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json
DAWN=$BASE/dawn
WGSLSMITH=$BASE/wgslsmith

python -m kill wgslsmith \
    --vk-icd $VKICDMUTATED \
    --dawn $DAWN \
    --wgslsmith $WGSLSMITH \
    --debug