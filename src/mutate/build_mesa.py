import subprocess
import os

def setup(target: Path, dredd: Path):

    print('Initial build...')
    env = os.environ.copy()

    env['CC']= '/usr/lib/clang-17'
    env['CXX']= '/usr/lib/clang++-17'

    setup_cmd = ['meson', 'setup', 'build/']
    
    result = subprocess.run(setup_cmd, cwd = target, env=env)

    if result.returncode != 0:
        raise RuntimeError(f'Problem with initial setup of {target}')

    configure_cmd = ['meson', 'setup', '--reconfigure',
        f'--prefix={target}/build/install',
        '-Dgallium-drivers=llvmpipe',
        '-Dvulkan-drivers=swrast',
        '-Dplatforms=x11',
        '-Dincludedir=include',
        '-Dwarning_level=0',
        'build/']

    config_result = subprocess.run(configure_cmd, cwd = target, env=env)

    if config_result.returncode != 0:
        raise RuntimeError(f'Problem with initial configuration of {target}')
   

def build(target : Path, dredd : Path, recording=False):

    env = os.environ.copy()

    env['CC']= '/usr/lib/clang-17'
    env['CXX']= '/usr/lib/clang++-17'

    build_cmd = ['ninja',
        '-C',
        'build/']

    result = subprocess.run(build_cmd, cwd = target, env=env)

    if result.returncode != 0:
        raise RuntimeError(f'Problem building {target}')

def install(target : Path, dredd : Path, recording=False):

    env = os.environ.copy()

    env['CC']= '/usr/lib/clang-17'
    env['CXX']= '/usr/lib/clang++-17'

    install_cmd = ['ninja',
        '-C',
        'build/',
        'install']

    result = subprocess.run(install_cmd, cwd = target, env=env)

    if result.returncode != 0:
        raise RuntimeError(f'Problem installing {target}')

def restore(target : Path):

    restore_cmd = ['git',
        'restore',
        '.']
    
    result = subprocess.run(restore_cmd, cwd = target)

    if result.returncode != 0:
        raise RuntimeError(f'Problem restoring {target}')

    replace_threads_h(target)
    turn_off_werror(target)

def clean(target : Path, dredd):
    restore(target)
    setup(target, dredd)
    build(target, dredd)
    install(target, dredd)
 
