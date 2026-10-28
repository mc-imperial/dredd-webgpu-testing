#!/usr/bin/env bash
# Compare how the tracking Mesa builds in two images are configured.
#
# Run on an instance that has both images:
#   bash icst_2027_experiments/aws/compare_mesa_builds.sh [IMAGE_A] [IMAGE_B] [MESA_DIR]
# Defaults: reachability-stability vs wgslsmith, /data/mesa_tracked.
#
# For each image prints the meson build type, assertion settings, optimisation,
# drivers, and the compile flags of src/compiler/nir/nir.c (NDEBUG, -O, -g).
# Builds that differ here can reach different code even with identical mutant IDs.
set -euo pipefail

A="dredd-webgpu-testing:${1:-reachability-stability}"
B="dredd-webgpu-testing:${2:-wgslsmith}"
MESA="${3:-/data/mesa_tracked}"

read -r -d '' PY <<'EOF' || true
import json, os, re, sys
b = os.environ["MESA"] + "/build"
try:
    opts = {o["name"]: o["value"] for o in json.load(open(b + "/meson-info/intro-buildoptions.json"))}
except FileNotFoundError:
    sys.exit(f"   no meson-info under {b}")
for k in ["buildtype", "b_ndebug", "debug", "optimization", "gallium-drivers", "vulkan-drivers"]:
    print(f"   {k}: {opts.get(k)}")
cmds = [c.get("command", " ".join(c.get("arguments", [])))
        for c in json.load(open(b + "/compile_commands.json"))
        if c["file"].endswith("src/compiler/nir/nir.c")]
if not cmds:
    print("   nir.c: not in compile_commands.json")
for cmd in cmds[:1]:
    flags = sorted(set(re.findall(r"(-DNDEBUG\S*|-O\S+|-g\S*)", cmd)))
    print(f"   nir.c flags: {' '.join(flags) or '(none of -DNDEBUG/-O/-g)'}")
EOF

for img in "$A" "$B"; do
    echo "== $img ($MESA)"
    docker run --rm -i -e MESA="$MESA" "$img" python3 - <<< "$PY"
done