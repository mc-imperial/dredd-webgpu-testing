import os
import subprocess
import sys
from pathlib import Path
from dataclasses import dataclass

from common.constants import COMMITS
from build.build_mesa import clean

@dataclass(frozen=True)
class Dirs:
    base: Path
    depot_tools: Path
    dawn: Path
    dawn_out: str
    build_dawn_sh: Path
    mesa: Path
    mesa_tracked: Path
    mesa_mutated: Path
    clang17: Path
    clangpp17: Path
    dredd: Path
    llvm_dir: Path
    build_dredd_sh: Path
    cts: Path

BASE = Path('/data/dev')
HERE = Path(__file__).resolve().parent

DIRS = Dirs(
    base=BASE,
    depot_tools=BASE / "depot_tools",
    dawn=BASE / "dawn",
    dawn_out='out/Debug',
    build_dawn_sh = HERE / "build_dawn.sh",
    mesa = BASE / "mesa",
    mesa_tracked = BASE / "mesa_tracked",
    mesa_mutated = BASE / "mesa_mutated",
    clang17 = '/usr/bin/clang-17',
    clangpp17 = '/usr/bin/clang++-17',
    dredd = BASE / "dredd",
    llvm_dir = '/usr/lib/llvm-17',
    build_dredd_sh = HERE / "build_dredd.sh",
    cts = BASE / "webgpu_cts"

)

def main():
    
    env = os.environ.copy()
    env["PATH"] = str(DIRS.depot_tools) + ':' + env["PATH"]

    try:
        
        build_depot_tools(env)
        print('\nDepot tools build - success!\n')

        build_dawn(env)
        print('\nDawn build - success!\n')

        build_mesa(env)
        print('\nMesa build - success!\n')
        
        build_dredd(env)
        print('\nDredd build - success!\n')
        
        build_cts(env)
        print('\nCTS build - success!\n')

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

def build_depot_tools(env):
    wd = DIRS.depot_tools
    commit = COMMITS['depot_tools']['commit']
    get(wd, commit, env)

def build_dawn(env):
    wd = DIRS.dawn
    commit = COMMITS['dawn']['commit']
    get(wd, commit, env)
    
    subprocess.run(
        [DIRS.build_dawn_sh],
        cwd=wd,
        env={
            **env,
            "DAWN_BUILD_DIR": DIRS.dawn_out,
            "DAWN_ROOT": str(wd),
        },
        check=True,
    )

def build_mesa(env):
    commit = COMMITS['mesa']['commit']
    
    for wd in [DIRS.mesa, DIRS.mesa_tracked, DIRS.mesa_mutated]:
        print(f'Building {wd}')
        get(wd, commit, env)
        clean(wd, DIRS.clang17, DIRS.clangpp17)

def build_dredd(env):
    wd = DIRS.dredd
    commit = COMMITS['dredd']['commit']
    get(wd, commit, env)
    
    subprocess.run(
        [DIRS.build_dredd_sh],
        cwd=wd,
        env={
            **env,
            "LLVM_DIR": DIRS.llvm_dir,
        },
        check=True,
    )

def build_cts(env):
    wd = DIRS.cts
    commit = COMMITS['cts']['commit']
    get(wd, commit, env)
    run(
        ['npm', 'install'],
        cwd=wd,
        env=env,
        step='npm install cts'
    )

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

