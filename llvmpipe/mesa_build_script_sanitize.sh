#!/bin/bash

MESA=$1

source /data/dev/dredd-webgpu/testing/llvmpipe/mesavenv/bin/activate

cd $MESA

meson setup --reconfigure  \
    --prefix="${MESA}/build/install" \
    -Dgallium-drivers=llvmpipe \
    -Dvulkan-drivers=swrast \
    -Dplatforms=x11 \
    -Dincludedir=include \
    -Db_sanitize=address \
    build/
    #-Dincludedir=/data/dev/${MESA}/src \


ninja -C build/
ninja -C build/ install


