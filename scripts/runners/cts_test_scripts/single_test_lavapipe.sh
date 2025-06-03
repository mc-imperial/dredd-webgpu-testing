#!/bin/sh

MESA_INSTALL=/data/dev/mesa/build/install
DAWN=/data/dev/dawn_mutated
export VK_ICD_FILENAMES=$MESA_INSTALL/share/vulkan/icd.d/lvp_icd.x86_64.json 
#export DREDD_ENABLED_MUTATION=437417
$DAWN/tools/run run-cts \
    --verbose \
    --bin=$DAWN/out/Debug \
    --cts=/data/dev/webgpu_cts_fork \
    'webgpu:shader,execution,flow_control,while:*'
    
    #'webgpu:shader,execution,expression,call,builtin,textureSampleGrad:sampled_3d_coords:stage="f";format="astc-8x5-unorm";dim="cube";filt="nearest";modeU="m";modeV="r";modeW="c";offset=false'
    #'webgpu:shader,execution,expression,call,builtin,textureSample:sampled_1d_coords:format="r8unorm";filt="linear";modeU="c"'
    #'webgpu:shader,execution,shadow:while:*'
    #'webgpu:shader,execution,flow_control,loop:*'    
    #'webgpu:api,operation,command_buffer,copyTextureToTexture:*'
    #'webgpu:shader,mutate:*'
    #'webgpu:api,operation,buffers,map_oom:*'
    #'webgpu:examples:gpu,buffers:*'
    #'webgpu:*'


