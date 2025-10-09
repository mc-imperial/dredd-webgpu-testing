#!/bin/bash

BASE=/home/ubuntu/dev
MESA_INSTALL=$BASE/mesa_mutated/build/install
DAWN=$BASE/dawn
CTS=$BASE/webgpu_cts
export VK_ICD_FILENAMES=$MESA_INSTALL/share/vulkan/icd.d/lvp_icd.x86_64.json 

#export DREDD_ENABLED_MUTATION=''
echo "Running test WITHOUT mutant enabled..."

$DAWN/tools/run run-cts \
    --verbose \
    --bin=$DAWN/out/Debug \
    --cts=$CTS \
    'webgpu:shader,execution,expression,access,array,index:concrete_scalar:inputSource="storage_r";elementType="i32";indexType="u32"'

#export DREDD_ENABLED_MUTATION=89967
echo "Running test WITH mutant enabled..."

$DAWN/tools/run run-cts \
    --verbose \
    --bin=$DAWN/out/Debug \
    --cts=$BASE/webgpu_cts \
    'webgpu:shader,execution,expression,access,array,index:concrete_scalar:inputSource="storage_r";elementType="i32";indexType="u32"'
  
