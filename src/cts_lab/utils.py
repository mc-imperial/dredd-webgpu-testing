import difflib
import subprocess
import tempfile
from pathlib import Path


def apply_tracking_reset_patch_to_mesa(
    mutation_info: Path,
    dest: Path,
    mesa_tracked: str,
):
    git_reset(dest, mesa_tracked)

    fn_names = [
        'lvp_CreateComputePipelines(',
        'lvp_CreateGraphicsPipelines(',
    ]

    tracking, extern_decl, reset_fn, reset_fn_call = get_tracking(mutation_info)

    original = dest.read_text()

    # Find the declaration insertion point.
    marker = '#define MAX_DYNAMIC_STATES 72'
    marker_pos = original.find(marker)
    if marker_pos == -1:
        raise RuntimeError(
            f'Could not find {marker!r} in {dest}'
        )

    decl_location = original.find('\n', marker_pos)
    if decl_location == -1:
        raise RuntimeError(
            f'Could not find end of line containing {marker!r}'
        )
    decl_location += 1

    # Find function insertion points.
    fn_locations = []

    for fn in fn_names:
        fn_pos = original.find(fn)
        if fn_pos == -1:
            raise RuntimeError(f'Function {fn} not found in {dest}')

        brace_pos = original.find('{', fn_pos)
        if brace_pos == -1:
            raise RuntimeError(
                f'Opening brace for {fn} not found in {dest}'
            )

        # Match the behaviour of the original code:
        # insert after "{\n" (assuming the brace is followed by a newline).
        location = brace_pos + 1
        if location < len(original) and original[location] == '\n':
            location += 1

        fn_locations.append(location)

    fn_locations.sort()

    # Construct the desired version.
    new_file = (
        original[:decl_location]
        + '\n#include <stdatomic.h>\n'
        + '\n' + extern_decl + '\n'
        + '\n' + reset_fn + '\n'
    )

    current = decl_location

    for location in fn_locations:
        new_file += original[current:location]
        new_file += reset_fn_call
        current = location

    new_file += original[current:]

    if new_file == original:
        print(f'No changes required for {dest}')
        return

    # Generate a git-style unified diff.
    diff = ''.join(
        difflib.unified_diff(
            original.splitlines(keepends=True),
            new_file.splitlines(keepends=True),
            fromfile=str(dest),
            tofile=str(dest),
        )
    )

    if not diff:
        return

    print(f'Applying tracking patch to {dest}')

    subprocess.run(
        ['git', 'apply', '--whitespace=error'],
        input=diff,
        text=True,
        check=True,
    )