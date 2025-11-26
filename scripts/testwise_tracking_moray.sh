#!/bin/bash

export MESA_SHADER_CACHE_DISABLE=true

QUERY='webgpu:*'
BASE='/data/dev'

cd '/data/dev/dredd-webgpu-testing/src'

python analyse/check_reset_entrypoint.py \
	--query "$QUERY" \
    --base $BASE \
	--run_joint 


