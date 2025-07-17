#!/bin/bash

BASE=/home/ubuntu/dev
DAWN=$BASE/dawn
CTS=$BASE/webgpu_cts
VK_ICD=$BASE/mesa_tracked/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json

python -m track cts \
	$VK_ICD \
	$DAWN \
	--cts $CTS \
	--query 'webgpu:shader,execution,shadow:*'
