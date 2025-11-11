#!/bin/bash

BASE=/home/ubuntu/dev

export VK_ICD_FILENAMES=$BASE/mesa_tracked/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json 

export DREDD_MUTANT_TRACKING_FILE=$BASE/dredd-webgpu-testing/src/llvmpipe/sample_shader/tracking.txt 

node standalone.js $BASE/dawn/out/Debug/dawn.node 
