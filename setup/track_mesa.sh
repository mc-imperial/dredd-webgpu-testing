#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"

source "${SCRIPT_DIR}/mesa_dredd_common.sh"

VANILLA=false

if [[ "${1:-}" == "--vanilla" ]]; then
    VANILLA=true
fi

MESA_OPTIONS=(
    "${MESA_TRACKED}"
    --only-track-mutant-coverage
)

if [[ "${VANILLA}" == false ]]; then
    MESA_OPTIONS+=(--allow-reset-of-tracking-counters)
fi

prepare_mesa "${MESA_OPTIONS[@]}"