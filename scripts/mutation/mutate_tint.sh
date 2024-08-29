#!/bin/sh

FILE=$1
MUTATED=$2
TRACKING=$3

DREDD='/data/dev/dredd/third_party/clang+llvm/bin/dredd'

# Mutate tint
$DREDD -p ${MUTATED}/out/Debug/compile_commands.json \
    --mutation-info-file ${MUTATED}/dawn_mutated.json \
    ${MUTATED}/${FILE}

cd ${MUTATED}/out/Debug
ninja dawn.node
ninja

echo "Tint mutation finished"

# Create mutation tracking tint

$DREDD --only-track-mutant-coverage \
    -p ${TRACKING}/out/Debug/compile_commands.json \
    --mutation-info-file ${TRACKING}/dawn_tracking.json \
    ${TRACKING}/${FILE}

cd ${TRACKING}/out/Debug
ninja dawn.node
ninja

echo "Mutation tracking finished"

