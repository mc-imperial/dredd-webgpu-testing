#!/bin/bash


BASE=/home/ubuntu/dev

DREDD=$BASE/dredd_with_reset
export CC=/usr/lib/clang-17
export CXX=/usr/lib/clang++-17


python -m mutate mesa \
	$BASE/mesa_mutated \
	$BASE/mesa_tracked \
	--mutation_dir src/compiler/nir \
	--dredd $DREDD
