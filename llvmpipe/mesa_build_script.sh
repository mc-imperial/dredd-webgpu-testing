#!/bin/bash

MESA=$1

source /data/dev/dredd-webgpu/testing/llvmpipe/mesavenv/bin/activate

export CC=/data/dev/dredd/third_party/clang+llvm/bin/clang
export CXX=/data/dev/dredd/third_party/clang+llvm/bin/clang++
export CC_LD=/data/dev/dredd/third_party/clang+llvm/bin/clang
export CXX_LD=/data/dev/dredd/third_party/clang+llvm/bin/clang++

cd $MESA

meson setup --reconfigure  \
    --prefix="${MESA}/build/install" \
    -Dgallium-drivers=llvmpipe \
    -Dvulkan-drivers=swrast \
    -Dplatforms=x11 \
    -Dincludedir=include \
    -Db_sanitize=address \
    -Dc_args='-fuse-ld=/data/dev/dredd/third-party/clang+llvm/bin/clang' \
    -Dcpp_args='-fuse-ld=/data/dev/dredd/third-party/clang+llvm/bin/clang++' \
    build/
    #-Dincludedir=/data/dev/${MESA}/src \


ninja -C build/
ninja -C build/ install


