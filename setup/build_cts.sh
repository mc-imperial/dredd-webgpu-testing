#!/usr/bin/env bash
set -euo pipefail

echo "=== Setting up CTS ==="

git clone https://github.com/gpuweb/cts.git "$CTS"

cd "$CTS"
git checkout "$CTS_COMMIT"
npm install

echo "CTS checked out at:"
git rev-parse HEAD