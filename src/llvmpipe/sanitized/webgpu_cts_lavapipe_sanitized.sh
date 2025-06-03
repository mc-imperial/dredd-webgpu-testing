#!/bin/sh

MESA=/data/dev/mesa/build_sanitized
DAWN=/data/dev/dawn

export VK_ICD_FILENAMES=${MESA}/install/share/vulkan/icd.d/lvp_icd.x86_64.json 
export LD_PRELOAD="/usr/lib/llvm-18/lib/clang/18/lib/linux/libclang_rt.asan-x86_64.so"

$DAWN/tools/run run-cts \
    --verbose \
    --bin=$DAWN/out/Debug \
    --cts=/data/dev/webgpu_cts \
    'webgpu:*'


