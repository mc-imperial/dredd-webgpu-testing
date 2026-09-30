#!/usr/bin/env bash
set -euo pipefail

echo "=== Setting up depot_tools ==="

git clone \
    https://chromium.googlesource.com/chromium/tools/depot_tools.git \
    "$DEPOT_TOOLS"

cd "$DEPOT_TOOLS"
git checkout "$DEPOT_TOOLS_COMMIT"

echo "=== Setting up Dawn ==="

git clone https://dawn.googlesource.com/dawn "$DAWN"
cd "$DAWN"
git checkout "$DAWN_COMMIT"
cp scripts/standalone-with-node.gclient .gclient

echo "=== Syncing Dawn dependencies ==="

gclient sync

echo "=== Building Dawn ==="

mkdir -p out/Debug
cd out/Debug
cmake -GNinja ../.. \
    -DDAWN_BUILD_NODE_BINDINGS=1
ninja

echo "=== Dawn build complete ==="

echo "=== Apply patch for mutant tracking ==="

cd "$DAWN"

git apply "${PROJECT_ROOT}/setup/patches/dawn_tracking_9de0fd.diff

echo "=== Patch applied ==="

