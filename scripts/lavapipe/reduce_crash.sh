#!/bin/bash

OUTPUT=/data/dev/dredd-webgpu-testing/llvmpipe/output/uncovered_by_cts
KILL_DIR=$OUTPUT/killed_mutants
TEST_DIR=$OUTPUT/tests


python reduce/reduce.py \
    crash \
    $KILL_DIR \
    $TEST_DIR