#!/usr/bin/env bash
set -euo pipefail

cmake -S . -B build -G Ninja -DCMAKE_BUILD_TYPE=Release -DDREDD_CLANG_LLVM_DIR="$LLVM_DIR"
cmake --build build --config Release
ls -la build/src/dredd/dredd