#!/bin/bash

BASE=/home/ubuntu/dev
CTS=$BASE/webgpu_cts
DAWN=$BASE/dawn
MESA_INSTALL=$BASE/build/install
export VK_ICD_FILENAMES=$MESA_INSTALL/share/vulkan/icd.d/lvp_icd.x86_64.json 

$DAWN/tools/run run-cts \
    --verbose \
    --bin=$DAWN/out/Debug \
    --cts=$CTS \
    'webgpu:*'
 
