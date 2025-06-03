#!/bin/bash

MESA=$1

cd $MESA

export CC=clang
export CXX=clang++

#export LD=clang++

export CC_LD=lld
export CXX_LD=lld

source /data/dev/dredd-webgpu-testing/llvmpipe/mesavenv/bin/activate

BUILDDIR=build_sanitized

meson setup --reconfigure  \
    --prefix="${MESA}/${BUILDDIR}/install" \
    -Dgallium-drivers=llvmpipe \
    -Dvulkan-drivers=swrast \
    -Dplatforms=x11 \
    -Dincludedir=include \
    -Db_sanitize=address \
    -Dc_args=-Wl,-rpath=$(dirname $($CXX --print-file-name libclang_rt.asan-x86_64.so)) \
    -Dcpp_args=-Wl,-rpath=$(dirname $($CXX --print-file-name libclang_rt.asan-x86_64.so)) \
    -Db_asneeded=false \
    -Db_lundef=false \
    $BUILDDIR/

ninja -C $BUILDDIR/
ninja -C $BUILDDIR/ install


