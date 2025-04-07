#!/bin/bash

CTS=/data/dev/webgpu_cts_fork
DAWN=/data/dev/dawn

export VK_ICD_FILENAMES=/data/dev/mesa_tracked/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json 
export DREDD_MUTANT_TRACKING_FILE=/data/dev/dredd-webgpu-testing/scripts/test_wise_mutant_tracking/hello.txt

$DAWN/tools/run run-cts \
    --verbose \
    --bin=$DAWN/out/Debug \
    --cts=$CTS \
    'webgpu:*'   
    
#'webgpu:shader,execution,flow_control,while:*'
