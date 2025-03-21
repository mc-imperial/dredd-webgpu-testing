#!/bin/sh

MESA_INSTALL=/data/dev/mesa/build_sanitized/install
#MESA_INSTALL=/data/dev/mesa_tracked/build/install
DAWN=/data/dev/dawn
#export LD_LIBRARY_PATH=/usr/lib/llvm-18/lib/clang/18/lib/linux/libclang_rt.asan-x86_64.so
export VK_ICD_FILENAMES=$MESA_INSTALL/share/vulkan/icd.d/lvp_icd.x86_64.json 
export LD_PRELOAD=/usr/lib/llvm-18/lib/clang/18/lib/linux/libclang_rt.asan-x86_64.so

$DAWN/tools/run run-cts \
    --no-cache \
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


