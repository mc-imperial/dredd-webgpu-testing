#!/bin/bash

BASE=/home/ubuntu/dev

cd $BASE

export CXX=/usr/bin/clang++
export CC=/usr/bin/clang
export PATH=$PATH:/home/ubuntu/dev/go/bin

# Build WebGPU CTS
echo "Build CTS..."
git clone https://github.com/gpuweb/cts.git && cd cts
git checkout f5816ba
npm install


