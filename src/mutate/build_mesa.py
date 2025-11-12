import argparse
import subprocess
import os
from pathlib import Path

def main():
   
    args = argparse.ArgumentParser()

    root = Path(os.path.dirname(os.path.abspath(__file__))).parent.parent

    args.add_argument('target',
                      type=Path,
                      help='Path to build target')
    args.add_argument('--clang17',
                      type=str,
                      default='/usr/bin/clang-17')
    args.add_argument('--clangpp17',
                      type=str,
                      default='/usr/bin/clang++-17')
    args.add_argument('--clean',
                      action="store_true")
 
    args = args.parse_args()
    target = args.target
    clang = args.clang17
    clangpp = args.clangpp17

    if args.clean:
        print('Clean build...')
        clean(target, clang, clangpp)

def setup(target: Path, clang17: str, clangpp17: str):

    print('Initial build...')
    env = os.environ.copy()

    env['CC']= clang17 
    env['CXX']= clangpp17

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
   

def build(target : Path, clang17: str, clangpp17: str):

    env = os.environ.copy()

    env['CC']= clang17
    env['CXX']= clangpp17

    build_cmd = ['ninja',
        '-C',
        'build/']

    result = subprocess.run(build_cmd, cwd = target, env=env)

    if result.returncode != 0:
        raise RuntimeError(f'Problem building {target}')

def install(target : Path, clang17: str, clangpp17: str):

    env = os.environ.copy()

    env['CC']= clang17
    env['CXX']= clangpp17

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

def clean(target : Path, clang17: str, clangpp17: str):
    restore(target)
    setup(target, clang17, clangpp17)
    build(target, clang17, clangpp17)
    install(target, clang17, clangpp17)

def replace_threads_h(src : Path):

    find_files_a = ['find',
        f'{src}/src',
        '-name',
        '*.c*',
        '-o',
        '-name',
        '*.h']

    find_files_b = ['xargs',
        'grep',
        'c11/threads.h']

    find_result = subprocess.Popen(find_files_a, stdout=subprocess.PIPE)
    result = subprocess.run(find_files_b, stdin=find_result.stdout, capture_output = True, text = True)

    files = result.stdout.split('\n')
    files = [x[:x.find(':')] for x in files if x.find(':') > 0 ]

    for file in files:
        with open(file,'r') as f:
            code = f.readlines()

        for index, line in enumerate(code):
            if 'c11/threads.h' in line:
                code[index] = line.replace('c11/threads.h','threads.h')
                code.insert(index,'#include <pthread.h>\n#include <unistd.h>\n#include<errno.h>\n#include<limits.h>\n#include<stdlib.h>\n')
                continue

       # code = [x if 'c11/threads.h' not in x else x.replace('c11/threads.h','threads.h') for x in code]

        with open(file, 'w') as f:
            f.writelines(code)

    find_files = subprocess.Popen(['find',str(src),'-name','*.c*','-o','-name','*.h'], stdout=subprocess.PIPE)
    find_c11 = subprocess.Popen(['xargs','grep','-l','c11/threads.h'], stdout=subprocess.PIPE, stdin=find_files.stdout)
    c11_count = subprocess.run(['wc', '-l'], stdin=find_c11.stdout, capture_output=True)
    
    print(f'Number of files that contain "c11/threads.h" in "{src}" is: {int(c11_count.stdout)}')

    assert(int(c11_count.stdout) == 0)

def turn_off_werror(src : Path):

    with open(Path(src,'meson.build'), 'r') as f:
        build = f.readlines()
        
    #build = [x.replace("'-Werror=incompatible-pointer-types'","#'-Werror=incompatible-pointer-types'") for x in build]
    #build = [x.replace("'-Werror=return-type'","#'-Werror=return-type'") for x in build]
    
    build = [remove_werror(x) if "'-Werror" in x else x for x in build]

    with open(Path(src,'meson.build'), 'w') as f:
        f.writelines(build)

def remove_werror(x : str) -> str:
    
    while(True):
        open_quote = x.find("'-Werror")
        close_quote = open_quote + 1 + x[open_quote + 1:].find("'")
        comma = 1 if x[close_quote + 1] == "," else 0
        end = close_quote + comma

        newx = x[:open_quote]
        newx += x[end + 1:]
        
        if 'Werror' not in newx:
            return newx

        x = newx


if __name__=="__main__":
    main()
