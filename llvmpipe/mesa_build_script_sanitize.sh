#!/bin/bash

MESA=$1

cd $MESA

BUILDDIR=build_sanitized

meson setup --reconfigure  \
    --prefix="${MESA}/${BUILDDIR}/install" \
    -Dgallium-drivers=llvmpipe \
    -Dvulkan-drivers=swrast \
    -Dplatforms=x11 \
    -Dincludedir=include \
    -Db_sanitize=address \
    $BUILDDIR/

ninja -C build_sanitized/
ninja -C build_sanitized/ install


