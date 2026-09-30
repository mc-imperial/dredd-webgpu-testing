#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/mesa_dredd_common.sh"

prepare_mesa \
    "${MESA_TRACKED}" \
    --only-track-mutant-coverage \
    --allow-reset-of-tracking-counters