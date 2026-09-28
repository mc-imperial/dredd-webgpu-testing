#!/usr/bin/env bash
set -euo pipefail

echo "=== Setup ==="

mkdir -p "$BASE"

git clone https://github.com/mc-imperial/dredd.git "$DREDD"

cd "$DREDD"

git checkout "$DREDD_COMMIT"
git submodule update --init --recursive

echo "=== Build ==="

cmake -S . -B build -G Ninja \
    -DCMAKE_BUILD_TYPE=Release \
    -DDREDD_CLANG_LLVM_DIR=/usr/lib/llvm-17

cmake --build build --config Release

echo "Done."