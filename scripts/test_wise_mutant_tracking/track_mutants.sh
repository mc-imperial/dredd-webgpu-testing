#!/bin/bash

CTS=/data/dev/webgpu_cts_fork
DAWN=/data/dev/dawn

export VK_ICD_FILENAMES=/data/dev/mesa_tracked/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json 

$DAWN/tools/run run-cts \
    --verbose \
    --bin=$DAWN/out/Debug \
    --cts=$CTS \
    --mutant-tracking \
    'webgpu:*'
