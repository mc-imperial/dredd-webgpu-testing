#!/bin/sh

OUTPUT='/data/work/webgpu/testing/out_tint_lang'
DAWN_MUTATED='/data/dev/dawn_mutated'
DAWN_COVERAGE='/data/dev/dawn_mutant_tracking'
WGSLSMITH_EXE='/data/dev/wgslsmith/target/release'
CTS='/data/dev/webgpu_cts'
INFO_MUTATED=$DAWN_MUTATED/dawn_mutated.json
INFO_COVERAGE=$DAWN_COVERAGE/dawn_tracking.json
VK_ICD='/data/dev/mesa/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json'
JS_WRAPPER='/data/dev/dredd-webgpu-testing/standalone/script.js'

venv/bin/activate

python run \
    $OUTPUT \
    $DAWN_MUTATED \
    $DAWN_COVERAGE \
    $WGSLSMITH_EXE\
    $CTS \
    $VK_ICD \
    coverage \
    wgslsmith \
    $INFO_MUTATED \
    $INFO_COVERAGE \
    --js_wrapper $JS_WRAPPER


