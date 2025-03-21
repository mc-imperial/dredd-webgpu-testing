#!/bin/bash

BASE=/data/dev/dredd-webgpu-testing
DAWN=/data/dev/dawn/out/Debug/dawn.node
VK_ICD_FILENAMES=/data/dev/mesa_mutated/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json

INPUTS=$BASE/reduce/inputs.json

CWD=$(pwd)
ORIGINAL=$CWD/original.wgsl
PROGRAM_JS=$CWD/reduced.js
REDUCED=$CWD/reduced.wgsl

source $BASE/venv/bin/activate

# Recondition the reduced shader
wgslsmith recondition $ORIGINAL $REDUCED

# Make JS program from the reduced WGSL shader
python $BASE/reduce/interesting.py \
    $ORIGINAL \
    $INPUTS \
    $REDUCED \
    $PROGRAM_JS \
    $DAWN \
    $VK_ICD_FILENAMES \
    $MUTANT

RETURN=$?

if [ $RETURN == 42 ]; then
    exit 0
else
    exit 1
fi