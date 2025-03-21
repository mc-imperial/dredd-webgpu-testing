import os
import shutil
import argparse
from pathlib import Path
import subprocess
import json

from run.wgslsmith.utils import get_inputs, get_mutant_killing_tests

def main():

    parser = argparse.ArgumentParser()

    parser.add_argument("kill", choices=['crash','miscompilation'])

    base=Path('/data/dev/dredd-webgpu-testing')
    reduce=Path(base,'reduce')
    out_dir=Path(reduce, 'output', 'crash')

    kill_dir=Path(base, 'llvmpipe/output/killed_mutants')
    test_dir=Path(base, 'llvmpipe/output/tests')

    args = parser.parse_args()


    if args.kill == 'miscompilation':
        interesting_test=Path(reduce, 'interestingness.sh')
        mutant_killing_tests = get_mutant_killing_tests(kill_dir)
        with open(Path(reduce, 'stdout_kills.json'), 'w') as f:
            json.dump(mutant_killing_tests, f, indent=4)

    else:
        interesting_test=Path(reduce, 'interestingness_crash.sh')
        mutant_killing_tests = {'95847' : 'wgslsmith_3585826504'}
        with open(Path(reduce, 'crash_kills.json'), 'w') as f:
            json.dump(mutant_killing_tests, f, indent=4)

    for mutant, test in mutant_killing_tests.items():

        seed = test[test.find('_')+1:]

        wgslsmith_program = Path(test_dir, test, 'original_prog.wgsl')
        input_path = Path(reduce, 'inputs.json')
        
        output_path = Path(out_dir, f'mutant_{mutant}')     
        interesting_path = Path(output_path, 'interestingness.sh')
        prog_path = Path(output_path, 'original.wgsl')
        mutant_path = Path(output_path, 'mutant.txt')

        # Create output directory - interestingness test and original program must be in same folder
        try:
            os.mkdir(output_path)
        except:
            print('Mutant folder already exists, skipping')
            continue
        shutil.copyfile(wgslsmith_program, prog_path)
        shutil.copyfile(interesting_test, interesting_path)
        cmd = ['chmod','+x','interestingness.sh']
        subprocess.run(cmd, cwd=output_path)

        # Write mutant ID into interestingness script
        with open(interesting_path,'r') as f:
            code = f.readlines()

        code.insert(1, f'MUTANT={mutant}')

        with open(interesting_path,'w') as f:
            f.writelines(code)

        # Perses removes comments from start of file, so must extract inputs before we start reducing
        inputs = get_inputs(wgslsmith_program)

        with open(input_path, 'w') as f:
            json.dump(inputs, f)

        # Now reduce
        
        cmd = ['java',
            '-jar',
            '/data/dev/perses/bazel-bin/src/org/perses/perses_deploy.jar', 
            '--test-script', str(interesting_path),
            '--input-file', str(prog_path),
            '-o', str(Path(output_path,'reduce')),
            '--call-creduce', 'True']
        
        subprocess.run(cmd)

if __name__=="__main__":
    main()