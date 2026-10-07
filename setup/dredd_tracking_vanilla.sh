#!/usr/bin/env bash
set -euo pipefail

# Setup Mesa

unset VIRTUAL_ENV
export PATH="/usr/lib/llvm-17/bin:/usr/local/go/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"

# Build and track Mesa

echo "BASE=${BASE}"
echo "MESA_TRACKED=${MESA_TRACKED}"

${PROJECT_ROOT}/setup/build_mesa.sh $MESA_TRACKED

${PROJECT_ROOT}/setup/track_mesa.sh --vanilla