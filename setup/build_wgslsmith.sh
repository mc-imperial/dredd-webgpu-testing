#!/bin/bash

git clone https://github.com/wgslsmith/wgslsmith $WGSLSMITH
cd $WGSLSMITH

git checkout "$WGSLSMITH_COMMIT"

git submodule update --init --depth 1 external/wgpu

# Put the gclient_sync_hash into the Dawn folder so WGSLsmith does not rebuild Dawn
mkdir -p build/dawn
git -C "$DAWN" rev-parse HEAD > build/dawn/gclient_sync_hash

./build.py --no-reducer --dawn-path "$DAWN"