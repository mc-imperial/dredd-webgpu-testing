#!/bin/sh
MESA=/data/dev/mesa/build_sanitized
export VK_ICD_FILENAMES=${MESA}/install/share/vulkan/icd.d/lvp_icd.x86_64.json
export LD_PRELOAD=/usr/lib/llvm-18/lib/clang/18/lib/linux/libclang_rt.asan-x86_64.so

vkcube
