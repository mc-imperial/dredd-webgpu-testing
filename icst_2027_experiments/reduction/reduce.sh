#!/usr/bin/env bash
# Reduce fuzzing kills inside the container (see cts_lab/reduce.py).
#
# Usage: reduce.sh one   <fuzz-run-dir> <mutant ID>... [options]
#        reduce.sh batch <fuzz-run-dir> [--limit N] [options]
#   e.g. reduce.sh one results/fuzz/run1 221889
#
# Results go to results/reduce/<mutant>/ (change with --outdir).

set -euo pipefail
ulimit -c 0   # no core dumps from crashing mutants

python3 -m cts_lab.reduce "$@"
