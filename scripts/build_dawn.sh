#!/bin/sh

DAWN=$1 # pass dawn src directory as argument

cd $DAWN
cp scripts/standalone-with-node.gclient .gclient
gclient sync
mkdir -p out/Debug
cd out/Debug
cmake -GNinja ../.. -DDAWN_BUILD_NODE_BINDINGS=1 \
    -DCMAKE_EXPORT_COMPILE_COMMANDS=ON .
ninja