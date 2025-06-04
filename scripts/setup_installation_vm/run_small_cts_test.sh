#!/bin/bash

BASE=/home/ubuntu/dev
DAWN=$BASE/dawn
CTS=$BASE/cts

$DAWN/tools/run run-cts \
	--verbose \
	--bin=$DAWN/out/Debug \
	--cts=$CTS \
	'webgpu:shader,execution,flow_control,while:*'
