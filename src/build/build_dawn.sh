#!/usr/bin/env bash
set -euo pipefail

# Bootstrap the NodeJS binding gclient configuration
cp scripts/standalone-with-node.gclient .gclient

# Fetch external dependencies and toolchains
gclient sync

rm -rf "$DAWN_BUILD_DIR"
mkdir -p "$DAWN_BUILD_DIR"
cd "$DAWN_BUILD_DIR"

# Build
cmake "$DAWN_ROOT" -GNinja -DDAWN_BUILD_NODE_BINDINGS=1
ninja dawn.node


