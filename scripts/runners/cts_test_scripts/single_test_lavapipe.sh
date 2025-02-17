#!/bin/sh

MESA_INSTALL=/data/dev/mesa/build/install
DAWN=/data/dev/dawn

export VK_ICD_FILENAMES=$MESA_INSTALL/share/vulkan/icd.d/lvp_icd.x86_64.json 
export LD_PRELOAD=/usr/lib/gcc/x86_64-linux-gnu/12/libasan.so

$DAWN/tools/run run-cts \
    --isolate \
    --verbose \
    --bin=$DAWN/out/Debug \
    --cts=/data/dev/webgpu_cts \
    'webgpu:shader,execution,flow_control,while:*'
    #'webgpu:shader,execution,flow_control,loop:*'    
    #'webgpu:api,operation,command_buffer,copyTextureToTexture:*'
    #'webgpu:shader,mutate:*'
    #'webgpu:api,operation,buffers,map_oom:*'
    #'webgpu:examples:gpu,buffers:*'
    #'webgpu:*'


