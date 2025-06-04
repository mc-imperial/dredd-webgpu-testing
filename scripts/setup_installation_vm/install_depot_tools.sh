#!/bin/bash

BASE=~/dev

cd $BASE

export CXX=/usr/bin/clang++
export CXX=/usr/bin/clang

git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git && cd depot_tools
git checkout 196d9416106a6ace0729b09acda46546c4a12ce1
export PATH=$BASE/depot_tools:$PATH

