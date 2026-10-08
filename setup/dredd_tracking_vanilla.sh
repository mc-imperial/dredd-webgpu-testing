#!/usr/bin/env bash
set -euo pipefail

# Setup Mesa

unset VIRTUAL_ENV
export PATH="/usr/lib/llvm-17/bin:/usr/local/go/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"

# Track Mesa using vanilla Dredd (i.e. no array resetting)
${PROJECT_ROOT}/setup/track_mesa.sh --vanilla