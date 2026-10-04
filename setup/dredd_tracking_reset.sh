#!/usr/bin/env bash
set -euo pipefail

# Setup Mesa

unset VIRTUAL_ENV
export PATH="/usr/lib/llvm-17/bin:/usr/local/go/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"

export MESA_TRACKED="${BASE}/mesa_tracked"

# Get Dredd with tracking reset
cd $DREDD
git checkout allow_tracking_array_resetting
cmake -S . -B build -G Ninja \
    -DCMAKE_BUILD_TYPE=Release \
    -DDREDD_CLANG_LLVM_DIR=/usr/lib/llvm-17

cmake --build build --config Release

echo "Done."

# Build and track Mesa

echo "BASE=${BASE}"
echo "MESA_TRACKED=${MESA_TRACKED}"

${PROJECT_ROOT}/setup/build_mesa.sh $MESA_TRACKED

${PROJECT_ROOT}/setup/track_mesa.sh

# Patch Dawn and CTS
cd $CTS
git apply $PROJECT_ROOT/setup/patches/cts_mutant_tracking_5975f536.diff

cd $DAWN
git apply $PROJECT_ROOT/setup/patches/dawn_tracking_9de0fd.diff
