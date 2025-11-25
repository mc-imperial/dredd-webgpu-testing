import json
import subprocess
import os
import argparse
from pathlib import Path 
from collections import Counter

from common.utils import FileInfo
from mutate.build_mesa import build, install, clean
from mutate.reset_tracking import insert_tracking

def main():

    args = argparse.ArgumentParser()

    root = Path(os.path.dirname(os.path.abspath(__file__))).parent.parent

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
        default= Path(root,'/external/dredd'), 
        help="Path to Dredd build")
    args.add_argument('--mutation_dir',
        type=Path,
        default="src",
        help="Path to directory to be mutated")
    args.add_argument('--reset',
        action='store_true',
        help="Use mutant resets during tracking")
    args.add_argument('--clang17',
                      type=str,
                      default='/usr/bin/clang-17')
    args.add_argument('--clangpp17',
                      type=str,
                      default='/usr/bin/clang++-17')
 
    args = args.parse_args()

    clang17 = args.clang17
    clangpp17 = args.clangpp17

    if args.subject == 'dawn':
        raise NotImplementedError

    dredd_exe = Path(args.dredd, 'build/src/dredd/dredd')
    
    mutated : FileInfo = FileInfo(Path(args.mutated),
        Path(args.mutated,'build','compile_commands.json'),
        Path(args.mutated,'mutation_info.json'),
        track_only=False,
        reset=False)

    tracked : FileInfo = FileInfo(Path(args.tracked),
        Path(args.tracked,'build','compile_commands.json'),
        Path(args.tracked,'mutation_info.json'),
        track_only=True,
        reset=args.reset)

    for x in [mutated, tracked]:
        print(f'Cleaning {x}')
        
        clean(x.src, clang17, clangpp17)

        x.mutation_files = get_files_for_mutation(x.compile_commands, 
                                args.mutation_dir, 
                                x.src)

        with open(Path(x.src,'mutated_files.txt'), 'w') as f:
            for file in x.mutation_files:
                f.write(file + '\n')
        
        print('Mutating...')
        mutate(dredd=dredd_exe, 
            mutation_files=x.mutation_files,
            info_file=x.mutant_info_file,
            compile_commands=x.compile_commands,
            src=x.src,
            track_only=x.track_only,
            reset=x.reset)

        build_result = build(x.src, clang17, clangpp17)

        install_result = install(x.src, clang17, clangpp17)

        print(f'Completed building and installing {x}')

def mutate(dredd : Path, 
        mutation_files : list[str],
        info_file : Path,
        compile_commands : Path,
        src : Path,
        track_only : bool,
        recording : bool = False,
        reset: bool = False):

    remove_flag_from_compile_commands(compile_commands)
    
    if track_only:
        if reset:
            mutate_cmd = [str(dredd),
                '--only-track-mutant-coverage',
                '--allow-reset-of-tracking-counters',
                '-p',
                str(compile_commands),
                '--mutation-info-file',
                str(info_file)]
        else:
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

    # Insert reset of tracking counters to handle_compute_shaders()
    if track_only:
        insert_tracking(info_file, Path(src,'src/gallium/frontends/lavapipe/lvp_pipeline.c'))
    
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
