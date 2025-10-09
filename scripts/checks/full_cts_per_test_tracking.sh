#!/bin/bash

BASE=/home/ubuntu/dev
DAWN=$BASE/dawn
CTS=$BASE/webgpu_cts
MESA=$BASE/mesa_tracked/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json

export VK_ICD_FILENAMES=$MESA 

$DAWN/tools/run run-cts \
    --verbose \
    --bin=$DAWN/out/Debug \
    --cts=$CTS \
    --mutant-tracking \
    'webgpu:shader,execution,expression,*'   
    
#'webgpu:shader,execution,expression,access,array,index:concrete_scalar:*'

