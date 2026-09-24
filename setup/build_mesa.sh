#!/usr/bin/env bash
set -euo pipefail

TARGET="$1"

echo "=== Setup ==="

cd "$BASE"

git clone https://gitlab.freedesktop.org/mesa/mesa.git "$TARGET"

cd "$TARGET"
git checkout "$MESA_COMMIT"

meson setup build \
    --prefix="$TARGET/build/install" \
    -Dgallium-drivers=llvmpipe \
    -Dvulkan-drivers=swrast \
    -Dincludedir=include \
    -Dwarning_level=0

echo "=== Build ==="

meson compile -C build

echo "=== Install ==="

meson install -C build

echo "Done."