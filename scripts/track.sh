#!/bin/bash

BASE=/data/dev
DAWN=$BASE/dawn
CTS=$BASE/webgpu_cts
VK_ICD=$BASE/mesa_tracked/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json
OUTPUT=$BASE/dredd-webgpu-testing/data

python -m track cts \
    --vk-icd $VK_ICD \
    --dawn $DAWN \
    --cts $CTS \
    --output $OUTPUT \
    --query 'webgpu:*'


#    --query 'webgpu:shader,execution,expression,access,array,index:concrete_scalar:*'