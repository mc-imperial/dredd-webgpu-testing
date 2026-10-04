#!/usr/bin/env python3

import json
import sys
from pathlib import Path


def load_tracking(run_dir):
    run_dir = Path(run_dir)

    # Normal run: one tracking directory for all tests.
    tracking_dir = run_dir / "tracking"
    if (tracking_dir / "mapping_test_to_id.json").exists():
        return load_tracking_dir(tracking_dir)

    # Isolated run: one tracking directory per test.
    result = {}

    for child in sorted(run_dir.iterdir()):
        if not child.is_dir():
            continue

        tracking_dir = child / "tracking"
        if (tracking_dir / "mapping_test_to_id.json").exists():
            result.update(load_tracking_dir(tracking_dir))

    return result


def load_tracking_dir(tracking_dir):
    mapping = json.loads(
        (tracking_dir / "mapping_test_to_id.json").read_text()
    )

    result = {}

    for test, test_id in mapping.items():
        path = tracking_dir / f"{test_id}.txt"

        if path.exists():
            result[test] = set(path.read_text().splitlines())
        else:
            result[test] = set()

    return result


if len(sys.argv) != 3:
    print(f"Usage: {sys.argv[0]} <run1> <run2>")
    sys.exit(1)

run1 = sys.argv[1]
run2 = sys.argv[2]

a = load_tracking(run1)
b = load_tracking(run2)

tests = sorted(set(a) | set(b))

same = 0
different = 0

for test in tests:
    if a.get(test, set()) == b.get(test, set()):
        same += 1
    else:
        different += 1

        only_a = a.get(test, set()) - b.get(test, set())
        only_b = b.get(test, set()) - a.get(test, set())

        print(f"DIFFERENT: {test}")
        print(f"  run1: {len(a.get(test, set()))} mutants")
        print(f"  run2: {len(b.get(test, set()))} mutants")
        print(f"  only in run1: {len(only_a)}")
        print(f"  only in run2: {len(only_b)}")
        print()

print(f"Tests compared: {len(tests)}")
print(f"Same:          {same}")
print(f"Different:     {different}")