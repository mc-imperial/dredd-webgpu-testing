#!/bin/bash

BASE=/data/dev/dredd-webgpu-testing
QUERY='webgpu:shader,execution,flow_control,while:*'
MESA_INSTALL=/data/dev/mesa_tracked/build/install
VK_ICD=$MESA_INSTALL/share/vulkan/icd.d/lvp_icd.x86_64.json 
UNPATCHED_DAWN_COMMIT=411c3186e00f930a257bc01ca0b4d31d19caad9c

cd $BASE/external/webgpu_cts
git checkout mutant_tracking

# Apply patch if we are running the test-wise tracking
cd $BASE/external/dawn
git checkout $UNPATCHED_DAWN_COMMIT
git restore .
git apply $BASE/run/cts/dawn_patch_to_run_cts.txt

cd $BASE

python run \
    --query "'$QUERY'" \
    --vk_icd $VK_ICD \
    kill \
    'cts'