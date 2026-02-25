#!/bin/sh

DAWN=$1 # pass dawn src directory as argument

cd $DAWN
git pull
git checkout 5d99b9ac23c5e2bd73ee1a137027767679e879bc
cp scripts/standalone-with-node.gclient .gclient
gclient sync
mkdir -p out/Debug
cd out/Debug
cmake -GNinja ../.. -DDAWN_BUILD_NODE_BINDINGS=1 \
    -DCMAKE_EXPORT_COMPILE_COMMANDS=ON .
ninja