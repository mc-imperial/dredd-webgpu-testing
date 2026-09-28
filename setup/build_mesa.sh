#!/usr/bin/env bash
set -euo pipefail

echo "=== Setup ==="

cd "$BASE"

git clone https://gitlab.freedesktop.org/mesa/mesa.git "$MESA"

cd "$MESA"
git checkout "$MESA_COMMIT"

meson setup build \
    --prefix="$MESA/build/install" \
    -Dgallium-drivers=llvmpipe \
    -Dvulkan-drivers=swrast \
    -Dincludedir=include \
    -Dwarning_level=0

echo "=== Build ==="

meson compile -C build

echo "=== Install ==="

meson install -C build

echo "Done."