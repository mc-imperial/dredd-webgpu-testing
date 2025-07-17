#!/bin/bash


BASE=/home/ubuntu/dev

export CC=$BASE/dredd-webgpu-testing/external/dredd/third_party/clang+llvm/bin/clang
export CXX=$BASE/dredd-webgpu-testing/external/dredd/third_party/clang+llvm/bin/clang++

python -m mutate mesa \
	$BASE/mesa_mutated \
	$BASE/mesa_tracked \
	--mutation_dir src \
	--dredd $BASE/dredd-webgpu-testing/external/dredd
