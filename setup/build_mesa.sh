#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then
    echo "Usage: $0 <target-mesa-dir>" >&2
    exit 1
fi

TARGET_DIR="$1"

echo "=== Setup ==="

git clone https://gitlab.freedesktop.org/mesa/mesa.git "$TARGET_DIR"

cd "$TARGET_DIR"
git checkout "$MESA_COMMIT"

meson setup build \
    --prefix="$TARGET_DIR/build/install" \
    -Dgallium-drivers=llvmpipe \
    -Dvulkan-drivers=swrast \
    -Dincludedir=include \
    -Dwarning_level=0

echo "=== Build ==="

meson compile -C build

echo "=== Install ==="

meson install -C build

echo "Done."