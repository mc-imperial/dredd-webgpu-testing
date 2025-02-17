import subprocess
import os
from pathlib import Path

from mutate_mesa import *


def catalogue_dredd_issues(dredd, compile_commands_mutated, mutation_dir, mesa_mutated, mesa_tracked, outdir, info_file_mutated):
    
    (mutation_files, tracked_files) = get_files_for_mutation(compile_commands_mutated, 
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

def main():
    
    base = Path('/data/dev')
    dredd = Path(base,'dredd/third_party/clang+llvm/bin/dredd')
    mutation_dir = Path('src/gallium/drivers/llvmpipe')
    #mutation_dir = Path('src')
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