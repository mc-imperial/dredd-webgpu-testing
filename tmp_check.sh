#!/bin/bash

IP=13.63.126.70
RUN_ID=20261016_152317
DEST=mutant_to_tests_$RUN_ID

cd results/mutant-test-mapping

mkdir -p $DEST

scp -i ~/.ssh/amber-aws.pem -r \
  ubuntu@$IP:~/dredd-webgpu-testing/results/webgpu-shader-run/run-$RUN_ID/processed \
  $DEST