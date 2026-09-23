#!/usr/bin/env bash
set -euo pipefail

# Usage:
# ./build.sh /path/to/target

TARGET=$1

echo "=== Setup ==="

cd $BASE

git clone https://gitlab.freedesktop.org/mesa/mesa.git $TARGET 

cd $TARGET
git checkout $MESA_COMMIT

meson setup build/

meson setup --reconfigure \
    --prefix="$TARGET/build/install" \
    -Dgallium-drivers=llvmpipe \
    -Dvulkan-drivers=swrast \
    -Dplatforms=x11 \
    -Dincludedir=include \
    -Dwarning_level=0 \
    build/

echo "=== Build ==="

ninja -C build/

echo "=== Install ==="

ninja -C build/ install

echo "Done."