#!/bin/bash

MESA=$1

source /data/dev/dredd-webgpu-testing/llvmpipe/mesavenv/bin/activate

export CC=/data/dev/dredd/third_party/clang+llvm/bin/clang
export CXX=/data/dev/dredd/third_party/clang+llvm/bin/clang++

cd $MESA

meson setup build/

meson setup --reconfigure  \
    --prefix="${MESA}/build/install" \
    -Dgallium-drivers=llvmpipe \
    -Dvulkan-drivers=swrast \
    -Dplatforms=x11 \
    -Dincludedir=include \
    build/

ninja -C build/
ninja -C build/ install


