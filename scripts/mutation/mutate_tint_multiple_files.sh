#!/bin/sh

MUTATED=$1
TRACKING=$2
MUTATION_FILEPATH=$3
TRACKING_FILEPATH=$4

DREDD='/data/dev/dredd/third_party/clang+llvm/bin/dredd'

MUTATION_FILES=$(cat ${MUTATION_FILEPATH})

# Mutate tint
$DREDD -p ${MUTATED}/out/Debug/compile_commands.json \
    --mutation-info-file ${MUTATED}/dawn_mutated.json \
    ${MUTATION_FILES}

cd ${MUTATED}/out/Debug
ninja dawn.node
ninja

echo "Tint mutation finished"

# Create mutation tracking tint
TRACKING_FILES=$(cat ${TRACKING_FILEPATH})

$DREDD --only-track-mutant-coverage \
    -p ${TRACKING}/out/Debug/compile_commands.json \
    --mutation-info-file ${TRACKING}/dawn_tracking.json \
    ${TRACKING_FILES}


cd ${TRACKING}/out/Debug
ninja dawn.node
ninja

echo "Mutation tracking finished"

