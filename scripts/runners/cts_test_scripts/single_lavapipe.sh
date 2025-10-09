#!/bin/bash

BASE=/home/ubuntu/dev
MESA_INSTALL=$BASE/mesa_mutated/build/install
DAWN=$BASE/dawn
CTS=$BASE/webgpu_cts
export VK_ICD_FILENAMES=$MESA_INSTALL/share/vulkan/icd.d/lvp_icd.x86_64.json 

$DAWN/tools/run run-cts \
    --verbose \
    --bin=$DAWN/out/Debug \
    --cts=$CTS \
    'webgpu:shader,execution,*' | tee $BASE/dredd-webgpu-testing/data/unmutated_cts_test.txt    

#'webgpu:shader,execution,expression,access,array,index:concrete_scalar:inputSource="const";elementType="u32";indexType="i32"'
#'webgpu:api,validation,render_pipeline,overrides:value,type_error,vertex:*'
#'webgpu:api,validation,render_pipeline,overrides:value,type_error,vertex:isAsync=false;vertexConstants={"cf":"_nan_"}'
  
