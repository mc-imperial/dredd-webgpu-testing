#!/bin/bash

BASE=/home/ubuntu/dev
DAWN=$BASE/dawn
CTS=$BASE/webgpu_cts
MESA=$BASE/mesa_tracked/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json
QUERY='webgpu:shader,execution,while:*'

export VK_ICD_FILENAMES=$MESA 
export DREDD_MUTANT_TRACKING_FILE=$BASE/dredd-webgpu-testing/data/check_tracking_files/normal_tracking.txt

$DAWN/tools/run run-cts \
    --verbose \
    --bin=$DAWN/out/Debug \
    --cts=$CTS \
    'webgpu:shader,execution,expression,access,array,index:concrete_scalar:*'

