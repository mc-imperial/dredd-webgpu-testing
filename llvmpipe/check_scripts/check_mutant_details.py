import subprocess
import os

from pathlib import Path
from run.wgslsmith.utils import get_mutant_killing_tests

def main():
    base=Path('/data/dev/dredd-webgpu-testing')
    kill_dir=Path(base, 'llvmpipe/output/killed_mutants')
    test_dir=Path(base, 'llvmpipe/output/tests')

    mesa_build = Path('/data/dev/mesa/build')
    mesa_mutated_build = Path('/data/dev/mesa_mutated/build')
    mutation_info = Path('/data/dev/mesa_mutated/mutation_info.json')

    query_script = Path('/data/dev/dredd/scripts/query_mutant_info.py')

    mutant_file = Path(base, 'llvmpipe/output/killed_mutants_crash_snippets.txt')

    #mutant_killing_tests = get_mutant_killing_tests(kill_dir)
    mutant_killing_tests = {'95847' : 'wgslsmith_3585826504'}

    for mutant in mutant_killing_tests.keys():
        print(mutant)

        cmd = ['python',
            str(query_script),
            str(mutation_info),
            '--show-info-for-mutant', str(mutant),
            '--path-prefix-replacement', str(mesa_mutated_build), str(mesa_build)]

        result = subprocess.run(cmd, capture_output=True, text=True)

        with open(mutant_file, 'a') as f:
            f.write(f'Mutant: {mutant}\n')
            f.write(result.stdout)
            f.write('\n\n')

if __name__=="__main__":
    main()