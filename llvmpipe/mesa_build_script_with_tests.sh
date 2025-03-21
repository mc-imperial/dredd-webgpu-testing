#!/bin/bash

MESA=$1

cd $MESA

export CC=clang
export CXX=clang++

BUILDDIR=build_tests

source /data/dev/dredd-webgpu-testing/llvmpipe/mesavenv/bin/activate

meson setup $BUILDDIR

meson setup --reconfigure  \
    --prefix="${MESA}/${BUILDDIR}/install" \
    -Dgallium-drivers=llvmpipe \
    -Dvulkan-drivers=swrast \
    -Dplatforms=x11 \
    -Dincludedir=include \
    -Dbuild-tests=true \
    $BUILDDIR/

ninja -C $BUILDDIR/
ninja -C $BUILDDIR/ install


