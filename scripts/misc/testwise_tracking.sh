#!/bin/bash

export MESA_SHADER_CACHE_DISABLE=true

QUERY='webgpu:*'

cd '/home/ubuntu/dev/dredd-webgpu-testing/src'

python analyse/check_reset_entrypoint.py \
	--query "$QUERY" \
	--mutate \
	--run_joint 


