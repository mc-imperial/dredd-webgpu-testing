import os
import subprocess
from pathlib import Path

from common.constants import COMMITS
import subprocess
import sys

def main():

    base = Path('/data/dev')
    depot_tools = base / 'depot_tools'
    dawn = base / 'dawn'

    env = os.environ.copy()
    env["PATH"] = str(depot_tools) + ':' + env["PATH"]

    try:
        build_depot_tools(depot_tools, env)
        build_dawn(dawn, env)

    except subprocess.CalledProcessError as e:
        handle_error(e)

    print('Success!')

def handle_error(e):
    print("ERROR: subprocess failed", file=sys.stderr)
    print(f"  step: {getattr(e, 'step', 'unknown')}", file=sys.stderr)
    print(f"  cwd: {e.cwd}", file=sys.stderr)
    print(f"  command: {' '.join(e.cmd)}", file=sys.stderr)
    print(f"  exit code: {e.returncode}", file=sys.stderr)
    print("  stderr:", file=sys.stderr)
    print(e.stderr, file=sys.stderr)
    sys.exit(e.returncode)

def build_depot_tools(wd, env):
    commit = COMMITS['depot_tools']['commit']
    get(wd, commit, env)

def build_dawn(wd, env):
    commit = COMMITS['dawn']['commit']
    get(wd, commit, env)

def get(wd, commit, env):
    run(
        ['git', 'checkout', 'main'],
        cwd=wd,
        env=env,
        step='git checkout main',
    )

    run(
        ['git', 'pull'],
        cwd=wd,
        env=env,
        step='git pull',
    )

    run(
        ['git', 'checkout', commit],
        cwd=wd,
        env=env,
        step=f'git checkout {commit}',
    )

def run(cmd, *, cwd, env, step):
    try:
        subprocess.run(
            cmd,
            cwd=cwd,
            env=env,
            check=True,
            text=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
        )
    except subprocess.CalledProcessError as e:
        e.step = step
        e.cwd = cwd
        raise

if __name__=="__main__":
    main()

