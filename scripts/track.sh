#!/bin/bash

BASE=/home/ubuntu/dev
DAWN=$BASE/dawn
CTS=$BASE/webgpu_cts
VK_ICD=$BASE/mesa_tracked/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json

TIMESTAMP="$(date +"%s")"

OUTPUT=$BASE/dredd-webgpu-testing/data/cts_output_$TIMESTAMP.txt

rm -rf $BASE/dredd-webgpu-testing/data/tracking_files

python -m track cts \
	$VK_ICD \
	$DAWN \
	--cts $CTS \
	--query 'webgpu:shader,execution,*' \
	| tee $OUTPUT
