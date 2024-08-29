#!/bin/sh

NAME=ast_printer.cc
FILE=src/tint/lang/spirv/writer/ast_printer/${NAME}

MUTATED='/data/dev/dawn_mutated'
TRACKING='/data/dev/dawn_mutant_tracking'

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

