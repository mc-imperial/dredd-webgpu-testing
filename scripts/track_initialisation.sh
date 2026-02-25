#!/bin/bash

BASE=/data/dev
REPO=$BASE/dredd-webgpu-testing
DAWN=$BASE/dawn
CTS=$BASE/webgpu_cts
VK_ICD=$BASE/mesa_tracked/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json
OUTPUT=$REPO/data

rm -rf $OUTPUT/group_output
rm -rf $OUTPUT/isolated_output

python -m track cts \
    --vk-icd $VK_ICD \
    --dawn $DAWN \
    --cts $CTS \
    --output $OUTPUT \
    --query 'webgpu:*' \
    --identify-initialisation-ids
