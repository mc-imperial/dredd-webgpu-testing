#!/usr/bin/env bash

set -euo pipefail

CTS="${CTS:?CTS must be set}"
DAWN="${DAWN:?DAWN must be set}"

VK_ICD_FILENAMES="$MESA_TRACKED/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json"

QUERY="webgpu:shader,execution,flow_control,for,*"

RESULTS_ROOT="${RESULTS_ROOT:-results}"