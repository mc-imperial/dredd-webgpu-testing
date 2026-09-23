#!/bin/bash

cd $BASE
git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git $DEPOT_TOOLS
cd $DEPOT_TOOLS
git checkout $DEPOT_TOOLS_COMMIT

git clone https://dawn.googlesource.com/dawn $DAWN
cd $DAWN
git checkout $DAWN_COMMIT
cp scripts/standalone-with-node.gclient .gclient
gclient sync

mkdir -p out/Debug
cd out/Debug
cmake -GNinja ../.. -DDAWN_BUILD_NODE_BINDINGS=1
ninja
