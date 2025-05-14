#!/bin/bash

BASE=/data/dev
PKG_ROOT=$BASE/dredd-webgpu-testing
QUERY='webgpu:shader,execution,flow_control,while:*'
MESA_INSTALL=/data/dev/mesa_tracked/build/install
VK_ICD=$MESA_INSTALL/share/vulkan/icd.d/lvp_icd.x86_64.json 
UNPATCHED_DAWN_COMMIT=411c3186e00f930a257bc01ca0b4d31d19caad9c

MESA_MUTATED=$BASE/mesa_mutated
MESA_TRACKED=$BASE/mesa_tracked

VK_ICD_MESA_MUTATED=$MESA_MUTATED/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json
VK_ICD_MESA_TRACKED=$MESA_TRACKED/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json

INFO_MUTATED=$MESA_MUTATED/mutation_info.json
INFO_TRACKED=$MESA_TRACKED/mutation_info.json

WGSLSMITH=/data/dev/wgslsmith

# Checkout non-test wise tracking versions of CTS and Dawn
cd $PKG_ROOT/external/webgpu_cts
git checkout main

cd $PKG_ROOT/external/dawn
git checkout $UNPATCHED_DAWN_COMMIT
git restore .

cd $PKG_ROOT/external/wgslsmith
git checkout abstract_numerics

cd $PKG_ROOT

python run \
    --query "'$QUERY'" \
    --vk_icd $VK_ICD \
    --wgslsmith $WGSLSMITH \
    kill \
    $INFO_MUTATED \
    $INFO_TRACKED \
    $VK_ICD_MESA_MUTATED \
    $VK_ICD_MESA_TRACKED