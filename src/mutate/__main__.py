import json
import subprocess
import os
import argparse
from pathlib import Path 
from collections import Counter

from common.utils import FileInfo

def main():

    args = argparse.ArgumentParser()

    args.add_argument('subject',
        choices=['mesa','dawn'])
    args.add_argument('mutated',
        type=Path,
        help="Path to mutation subject root")
    args.add_argument('tracked',
        type=Path,
        help="Path to tracking subject root")
    args.add_argument('--dredd',
        type=Path,
        default="../external/dredd", #TODO: update to external submodule
        help="Path to Dredd build")
    args.add_argument('--mutation_dir',
        type=Path,
        default="src",
        help="Path to directory to be mutated")

    args = args.parse_args()

    if args.subject == 'dawn':
        raise NotImplementedError

    dredd_exe = Path(args.dredd, '/third_party/clang+llvm/bin/dredd')
    
    #mutation_dir = Path('src/gallium/drivers/llvmpipe')

    mutated : FileInfo = FileInfo(Path(args.mutated),
        Path(args.mutated,'build','compile_commands.json'),
        Path(args.mutated,'mutation_info.json'),
        track_only=False)

    tracked : FileInfo = FileInfo(Path(args.tracked),
        Path(args.tracked,'build','compile_commands.json'),
        Path(args.tracked,'mutation_info.json'),
        track_only=True)

    for x in [mutated, tracked]:

        print('Cleaning {x}')
        clean(x.src)

        x.mutation_files = get_files_for_mutation(x.compile_commands, 
                                args.mutation_dir, 
                                x.src)

        with open(Path(x.src,'mutated_files.txt'), 'w') as f:
            for file in x.mutation_files:
                f.write(file + '\n')

        print('Mutating...')
        mutate(dredd_exe, 
            x.mutation_files,
            x.mutant_info_file,
            x.compile_commands,
            x.src,
            x.track_only)

        build_result = build(x.src)

        with open(f'build_result_{x}.txt','w') as f:
            f.write(f'build returncode: {build_result.returncode}')

        install_result = install(x.src)

        with open(f'install_result_{x}.txt','w') as f:
            f.write(f'install returncode: {install_result.returncode}')

        if build_result.returncode != 0 or install_result.returncode != 0:
            print(f'Error in {x}! Stopping.')
            exit(1)

def mutate(dredd : Path, 
        mutation_files : list[str],
        info_file : Path,
        compile_commands : Path,
        src : Path,
        track_only : bool,
        recording : bool = False):

    remove_flag_from_compile_commands(compile_commands)
    
    if track_only:
        mutate_cmd = [str(dredd),
        '--only-track-mutant-coverage',
        '-p',
        str(compile_commands),
        '--mutation-info-file',
        str(info_file)]
    else:
        mutate_cmd = [str(dredd),
            '-p',
            str(compile_commands),
            '--mutation-info-file',
            str(info_file)]

    mutate_cmd.extend(mutation_files)

    result = subprocess.run(mutate_cmd, capture_output=recording, text=True, cwd = src)

    if not mutants_exist(src):
        print('No files were mutated!')

    return result

def remove_flag_from_compile_commands(file : Path):
    with open(file,'r') as f:
        data = f.readlines()

    newdata = [x.replace('-mtls-dialect=gnu2','') for x in data]

    with open(file,'w') as f:
        f.writelines(newdata)

def mutants_exist(src : Path) -> bool :

    find_files = subprocess.Popen(['find',str(src),'-name','*.c'], stdout=subprocess.PIPE)
    find_dredd = subprocess.Popen(['xargs','grep','-l','dredd'], stdout=subprocess.PIPE, stdin=find_files.stdout)
    dredd_count = subprocess.run(['wc', '-l'], stdin=find_dredd.stdout, capture_output=True)
    
    print(f'Number of files that contain "dredd" in "{src}" is: {int(dredd_count.stdout)}')

    return False if (int(dredd_count.stdout)==0) else True

def setup(target: Path, dredd: Path):

    print('Initial build...')
    env = os.environ.copy()

    env['CC']= str(dredd) + '/third_party/clang+llvm/bin/clang'
    env['CXX']= str(dredd) + '/third_party/clang+llvm/bin/clang++'

    setup_cmd = ['meson', 'setup', 'build/']
    
    result = subprocess.run(setup_cmd, cwd = target, env=env)

    if result.returncode != 0:
        raise RuntimeError(f'Problem with initial setup of {target}')

    configure_cmd = ['meson', 'setup', '--reconfigure',
        f'--prefix="{target}/build/install"',
        '-Dgallium-drivers=llvmpipe',
        '-Dvulkan-drivers=swrast',
        '-Dplatforms=x11',
        '-Dincludedir=include',
        'build/']

    config_result = subprocess.run(configure_cmd, cwd = target, env=env)

    if config_result.returncode != 0:
        raise RuntimeError(f'Problem with initial configuration of {target}')

def build(target : Path, dredd : Path, recording=False):

    env = os.environ.copy()

    env['CC']= str(dredd) + '/third_party/clang+llvm/bin/clang'
    env['CXX']= str(dredd) + '/third_party/clang+llvm/bin/clang++'

    build_cmd = ['ninja',
        '-C',
        'build/']

    result = subprocess.run(build_cmd, cwd = target, env=env)

    if result.returncode != 0:
        raise RuntimeError(f'Problem building {target}')

def install(target : Path, dredd : Path, recording=False):

    env = os.environ.copy()

    env['CC']= str(dredd) + '/third_party/clang+llvm/bin/clang'
    env['CXX']= str(dredd) + '/third_party/clang+llvm/bin/clang++'

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
        'src/']
    
    result = subprocess.run(restore_cmd, cwd = target)

    if result.returncode != 0:
        raise RuntimeError(f'Problem restoring {target}')

def clean(target : Path, dredd):
    restore(target)
    setup(target, dredd)
    build(target, dredd)
    install(target, dredd)
    
def get_files_for_mutation(compile_commands : Path, 
            mutation_target : Path,
            mesa : Path) -> list[str]:

    # read in compile commands database
    with open(compile_commands) as f:
        data = json.load(f)
    
    files = [x["file"] for x in data]
    files = [x for x in files if str(mutation_target) in x and (x[-2:] == ".c" or x[-3:] == ".cc" or x[-4:] == ".cpp")]

    # Get full path
    mutated = [str(Path(compile_commands.parent, x).resolve()) for x in files]

    # Remove files in the build directory (for now)
    mutated = [x for x in mutated if 'build' not in x]

    return mutated

if __name__=="__main__":
    main()
