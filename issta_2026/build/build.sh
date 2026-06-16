#!/bin/bash
set -euo pipefail

source ./env

echo $DREDD_COMMIT

# Build Dredd

# Build Mesa (twice - once for mutant tracking and once for mutant injection)

# Build Dawn

# Build WGSLsmith