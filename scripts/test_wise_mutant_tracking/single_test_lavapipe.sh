#!/bin/sh

MESA_INSTALL=/home/ubuntu/dev/mesa_tracked/build/install
DAWN=/home/ubuntu/dev/dawn
export VK_ICD_FILENAMES=$MESA_INSTALL/share/vulkan/icd.d/lvp_icd.x86_64.json 

$DAWN/tools/run run-cts \
    --bin=$DAWN/out/Debug \
    --cts=/home/ubuntu/dev/webgpu_cts \
    'webgpu:shader,execution,flow_control,*'
    #'webgpu:shader,execution,flow_control,loop:*'    
    #'webgpu:api,operation,command_buffer,copyTextureToTexture:*'
    #'webgpu:shader,mutate:*'
    #'webgpu:api,operation,buffers,map_oom:*'
    #'webgpu:examples:gpu,buffers:*'
    #'webgpu:*'


