#!/bin/bash

LD_LIBRARY_PATH=/data/dev/mesa_tracked/build/install
LIBGL_DRIVERS_PATH=/data/dev/mesa_tracked/build/install

export VK_ICD_FILENAMES="/data/dev/mesa_tracked/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json" 

export DREDD_MUTANT_TRACKING_FILE="/data/dev/dredd-webgpu-testing/llvmpipe/sample_shader/tracking.txt" 

#VK_ICD_FILENAMES="/data/dev/mesa_tracked/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json" 

node script.js /data/dev/dawn/out/Debug/dawn.node /data/dev/dredd-webgpu-testing/llvmpipe/sample_shader/wgslsmith.js
