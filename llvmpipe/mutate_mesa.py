import json
import subprocess
import os
from pathlib import Path 
from collections import Counter

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

    # Attempted fix of Dredd errors:
    # Replace #include <threads.h> with #include <c11/threads.h> in mutated file
    for file in mutation_files:
        with open(file,'r') as f:
            code = f.readlines()
            code = [x if '#include <threads.h>' not in x else x.replace('#include <threads.h>','#include <c11/threads.h>') for x in code]

        with open(file,'w') as f:
            f.writelines(code)

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

def build(target : Path, recording=False):

    build_cmd = ['ninja',
        '-C',
        'build/']

    result = subprocess.run(build_cmd, cwd = target,  capture_output=recording, text=True)

    return result

def restore(target : Path):

    restore_cmd = ['git',
        'restore',
        'src/']
    
    result = subprocess.run(restore_cmd, cwd = target)

def get_files(compile_commands : Path, 
            mutation_target : Path,
            mesa_mutated : Path,
            mesa_tracked : Path) -> tuple[list[str],list[str]]:

    # read in compile commands database
    with open(compile_commands) as f:
        data = json.load(f)
    
    files = [x["file"] for x in data]
    files = [x for x in files if str(mutation_target) in x and x[-2:] == ".c"]
    
    mutated = [f'{str(mesa_mutated)}{x[2:]}' for x in files]
    tracked = [f'{str(mesa_tracked)}{x[2:]}' for x in files]

    return (mutated, tracked)

def catalogue_dredd_issues(dredd, compile_commands_mutated, mutation_dir, mesa_mutated, mesa_tracked, outdir, info_file_mutated):
    
    (mutation_files, tracked_files) = get_files(compile_commands_mutated, 
                                        mutation_dir, 
                                        mesa_mutated, 
                                        mesa_tracked)

    results_summary = Path(outdir, 'results_summary.txt')

    for f in mutation_files:

        file = Path(f).stem

        mutate_result = mutate(dredd,
            [f],
            info_file_mutated,
            compile_commands_mutated,
            mesa_mutated,
            recording=True)

        build_result = build(mesa_mutated,recording=True)

        with open(results_summary, 'a+') as f:
            f.write(f'File: {str(file)}\n')
            f.write(f'\tMutate returncode: {mutate_result.returncode}\n')
            f.write(f'\tBuild returncode:  {build_result.returncode}\n\n')

        with open(Path(outdir, 'stdout', f'{file}.txt'), 'w') as f:
            f.write('mutate_stdout\n')
            f.write(str(mutate_result.stdout) + '\n')
            f.write('mutate_stderr\n')
            f.write(str(mutate_result.stderr) + '\n')
            f.write('build_stdout\n')
            f.write(str(build_result.stdout) + '\n')
            f.write('build_stderr\n')
            f.write(str(build_result.stderr) + '\n')

        restore(mesa_mutated)

def analyse_dredd_issues(dir : Path):

    error_summary = Path(dir, 'error_summary.txt')
    allerrors = []

    for file in os.listdir(dir):

        filepath = os.path.join(dir,file)

        if os.path.isfile(filepath) and 'lp' in file:

            with open(filepath,'r') as f:
                data = f.readlines()
                errors = [x for x in data if 'error:' in x]
                allerrors.extend(errors)

                with open(error_summary, 'a+') as f:
                    f.write(file + '\n')
                    f.writelines(errors)

    allerrors = Counter(allerrors)

    with open(error_summary, 'a+') as f:
        f.write('\nUnique errors:\n')
        for error, occurence in allerrors.items():
            f.write(f'n_files: {occurence} error: {error}')


def run_mutation():

    (mutation_files, tracked_files) = get_files(compile_commands_mutated, 
                                        mutation_dir, 
                                        mesa_mutated, 
                                        mesa_tracked)

    mutate(dredd,
        mutation_files,
        info_file_mutated,
        compile_commands_mutated,
        mesa_mutated)

    build(mesa_mutated)

    #track(mesa_tracked, tracked_files))

class FileInfo:
    def __init__(self, 
        src : Path, 
        compile_commands : Path, 
        mutant_info_file : Path,
        track_only : bool):

        self.src : Path = src
        self.compile_commands : Path = compile_commands
        self.mutant_info_file : Path = mutant_info_file
        self.track_only : bool = track_only
        self.mutation_files : list[str] = []

    def __str__(self):
        return self.src.stem

def main():
    
    base = Path('/data/dev')
    dredd = Path(base,'dredd/third_party/clang+llvm/bin/dredd')
    mutation_dir = Path('src/gallium/drivers/llvmpipe')
    dredd_issues = Path(base, 'dredd-webgpu-testing','llvmpipe','dredd_issues')

    mutated : FileInfo = FileInfo(Path(base, 'mesa_mutated'),
        Path(base,'mesa_mutated','build','compile_commands.json'),
        Path(base,'mesa_mutated','mutation_info.json'),
        track_only=False)

    tracked : FileInfo = FileInfo(Path(base, 'mesa_tracked'),
        Path(base,'mesa_tracked','build','compile_commands.json'),
        Path(base,'mesa_tracked','mutation_info.json'),
        track_only=True)

    restore(mutated.src)
    restore(tracked.src)

    (mutation_files, tracked_files) = get_files(mutated.compile_commands, 
                                        mutation_dir, 
                                        mutated.src, 
                                        tracked.src)

    mutated.mutation_files = mutation_files
    tracked.mutation_files = tracked_files
    
    for x in [mutated, tracked]:

        mutate(dredd,
            x.mutation_files,
            x.mutant_info_file,
            x.compile_commands,
            x.src,
            x.track_only)

        build_result = build(x.src)

        with open(f'build_result_{x}.txt','w') as f:
            f.write(f'build returncode: {build_result.returncode}')

if __name__=="__main__":
    main()