#!/bin/bash

BASE=/data/dev
WGSLSMITH=$BASE/wgslsmith_michal
WGSLSMITH_BIN=$WGSLSMITH/target/release

export PATH=$WGSLSMITH_BIN:$PATH

python -m src.analyse.profile_shader_execution \
    run \
    --sample 1