#!/bin/sh
DREDD_CHECKOUT=/data/dev/dredd
PROGRAM=/data/dev/dredd-webgpu-testing/llvmpipe/output/tests/wgslsmith_3179931480/prog.js 
MESA=/data/dev/mesa/build_sanitized
DAWN=/data/dev/dawn/out/Debug/dawn.node
MUTANT_ID=438114

#python ${DREDD_CHECKOUT}/scripts/query_mutant_info.py /data/dev/mesa_mutated/mutation_info.json --show-info-for-mutant ${MUTANT_ID}  --path-prefix-replacement /data/dev/mesa_mutated/build /data/dev/mesa/build

export VK_ICD_FILENAMES=${MESA}/install/share/vulkan/icd.d/lvp_icd.x86_64.json 
export LD_PRELOAD="/usr/lib/llvm-18/lib/clang/18/lib/linux/libclang_rt.asan-x86_64.so"
node $PROGRAM $DAWN
