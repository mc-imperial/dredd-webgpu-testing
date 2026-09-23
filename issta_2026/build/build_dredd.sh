#!/bin/bash

cd $BASE

rm -rf $DREDD_SRC
git clone --recursive https://github.com/mc-imperial/dredd.git $DREDD_SRC
cd $DREDD_SRC
git checkout $DREDD_COMMIT

DREDD_CHECKOUT=$DREDD_SRC

cmake -S . -B build -G Ninja -DCMAKE_BUILD_TYPE=Release -DDREDD_CLANG_LLVM_DIR=/usr/lib/llvm-17
cmake --build build --config Release

