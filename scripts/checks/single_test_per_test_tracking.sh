#!/bin/bash

BASE=/data/dev
OUTPUT=$BASE/dredd-webgpu-testing/data
DAWN=$BASE/dawn
CTS=$BASE/webgpu_cts
MESA=$BASE/mesa_tracked/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json

export VK_ICD_FILENAMES=$MESA 

$DAWN/tools/run run-cts \
    --verbose \
    --bin=$DAWN/out/Debug \
    --cts=$CTS \
    --mutant-tracking \
    --mutant-output=$OUTPUT \
    'webgpu:shader,execution,expression,access,array,index:concrete_scalar:*'
 
