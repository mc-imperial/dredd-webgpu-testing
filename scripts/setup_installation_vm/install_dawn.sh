#!/bin/bash

BASE=/home/ubuntu/dev

cd $BASE

export CXX=/usr/bin/clang++
export CC=/usr/bin/clang
export PATH=$BASE/depot_tools:$PATH
export PATH=$PATH:/home/ubuntu/dev/go/bin

git clone https://dawn.googlesource.com/dawn && cd dawn
git checkout chromium/7190
cp scripts/standalone-with-node.gclient .gclient
gclient sync

RESULT=$?

if [ $RESULT != 0 ]; then
    echo "Gclient problem!"
    exit 1
fi

cd $BASE/dawn
mkdir -p out/Debug
cd out/Debug
cmake -GNinja ../.. -DDAWN_BUILD_NODE_BINDINGS=1
ninja

NINJA=$?

if [ $NINJA != 0 ]; then
    echo 'Ninja problem!'
    exit 1
fi
