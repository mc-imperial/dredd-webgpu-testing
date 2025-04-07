#!/bin/bash

BASE=/data/dev

DAWN=$BASE/dawn
OUTPUT=$BASE/dredd-webgpu-testing/llvmpipe/output/covered_by_cts
CTS=$BASE/webgpu_cts

MESA_MUTATED=$BASE/mesa_mutated
MESA_TRACKED=$BASE/mesa_tracked

VK_ICD_MESA_MUTATED=$MESA_MUTATED/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json
VK_ICD_MESA_TRACKED=$MESA_TRACKED/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json

INFO_MUTATED=$MESA_MUTATED/mutation_info.json
INFO_TRACKED=$MESA_TRACKED/mutation_info.json

CTS_TRACKING=$BASE/dredd-webgpu-testing/llvmpipe/tracking
WGSLSMITH_TRACKING=$BASE/dredd-webgpu-testing/llvmpipe/wgslsmith/tracking
TRACKING_DIR=$OUTPUT/test_wise_tracking/mutant_files

TARGET_MUTANT_FILE=$BASE/dredd-webgpu-testing/llvmpipe/output/cts_mutant_targets.txt

cd $BASE/dredd-webgpu-testing

source venv/bin/activate

python llvmpipe \
    $OUTPUT \
    $VK_ICD_MESA_MUTATED \
    $VK_ICD_MESA_TRACKED \
    $INFO_MUTATED \
    $INFO_TRACKED \
    $CTS_TRACKING \
    $WGSLSMITH_TRACKING \
    $DAWN \
    kill_with_cts \
    $CTS \
    'cts_intersect_wgslsmith' \
    $TARGET_MUTANT_FILE \
    100 \
    '--killing_strategy' 'least_covered_mutants' \
    '--tracking_dir' $TRACKING_DIR

