#!/usr/bin/env bash
set -euo pipefail

# Setup Mesa

unset VIRTUAL_ENV
export PATH="/usr/lib/llvm-17/bin:/usr/local/go/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"

# Track Mesa
${PROJECT_ROOT}/setup/track_mesa.sh

# Patch Dawn and CTS
cd $CTS
git apply $PROJECT_ROOT/setup/patches/cts_mutant_tracking_5975f536.diff

cd $DAWN
git apply $PROJECT_ROOT/setup/patches/dawn_tracking_9de0fd.diff
