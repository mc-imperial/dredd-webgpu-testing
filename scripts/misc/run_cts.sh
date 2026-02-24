#!/bin/bash

BASE=/data/dev
QUERY='webgpu:shader,execution,flow_control,call:*'
QUERY='webgpu:shader,execution,flow_control,call:arg_eval_pointers:preventValueOptimizations=false'
CTS=$BASE/webgpu_cts
DAWN=$BASE/dawn
MESA_INSTALL=$BASE/mesa_tracked/build/install
export VK_ICD_FILENAMES=$MESA_INSTALL/share/vulkan/icd.d/lvp_icd.x86_64.json 
export MESA_DISABLE_SHADER_CACHE=true

$DAWN/tools/run run-cts \
    --verbose \
    --bin=$DAWN/out/Debug \
    --cts=$CTS \
    -j=1 \
    $QUERY
 
