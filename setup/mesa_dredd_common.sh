#!/usr/bin/env bash
set -euo pipefail

DREDD_EXE="$DREDD/build/src/dredd/dredd"

select_mesa_sources() {
    local builddir="$1"

    jq -r '.[].file' "${builddir}/compile_commands.json" |
        grep -E '/(compiler/nir/[^/]+\.(c|cc|cpp))' |
        sort
}

patch_dredd_prelude() {
    local mesa_dir="$1"
    local mesa_build_dir="$2"

    grep -rlZ \
        --include='*.c' \
        'DREDD PRELUDE START' \
        "${mesa_dir}/src/" "${mesa_build_dir}/src/" |
      xargs -0 --no-run-if-empty \
        sed -i \
        '0,/^#include <threads\.h>$/s//#define thread_local _Thread_local/'
}

turn_off_werror() {
    local mesa_dir="$1"
    local meson_build="${mesa_dir}/meson.build"

    echo "==> Removing -Werror flags from ${meson_build}"

    sed -i -E \
        "s/'-Werror[^']*'[[:space:]]*,?[[:space:]]*//g" \
        "${meson_build}"
}


prepare_mesa() {
    local mesa_dir="$1"
    shift

    local builddir="${mesa_dir}/build"
    local mutation_args=("$@")

    echo "=== Preparing Mesa ==="
    echo "Mesa:  ${mesa_dir}"
    echo "Dredd: ${DREDD_EXE}"

    if [[ ! -d "${builddir}" ]]; then
        echo "error: Mesa build directory does not exist: ${builddir}" >&2
        exit 1
    fi

    if [[ ! -f "${builddir}/compile_commands.json" ]]; then
        echo "error: compile_commands.json not found" >&2
        exit 1
    fi

    mapfile -t sources < <(
        select_mesa_sources "${builddir}"
    )

    if ((${#sources[@]} == 0)); then
        echo "error: no Mesa compiler sources found" >&2
        exit 1
    fi

    echo "==> Selected ${#sources[@]} source files"

    cd "${builddir}"

    "${DREDD_EXE}" \
        "${mutation_args[@]}" \
        --mutation-info-file=mutation-info.json \
        -p . \
        "${sources[@]}"

    echo "==> Patching Dredd prelude"
    patch_dredd_prelude "${mesa_dir}" "${builddir}" 

    echo "==> Disabling -Werror"
    turn_off_werror "${mesa_dir}"

    echo "==> Rebuilding Mesa"
    meson compile -C "${builddir}"

    echo "==> Install Mesa"
    meson install -C "${builddir}"

    echo "=== Done ==="
}