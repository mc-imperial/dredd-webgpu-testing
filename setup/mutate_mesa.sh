#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"

# Build Mesa with the system Python (which has apt's mako/packaging), not the venv.
PATH="$(printf '%s' "$PATH" | tr ':' '\n' | grep -vxF '/opt/venv/bin' | paste -sd: -)"
export PATH
unset VIRTUAL_ENV
echo "Mesa will use: $(command -v python3.12)"   # should print /usr/bin/python3.12

source "${SCRIPT_DIR}/mesa_dredd_common.sh"

prepare_mesa "${MESA_MUTATED}"