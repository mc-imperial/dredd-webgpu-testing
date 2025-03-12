import os
import shutil
from pathlib import Path
import subprocess
import json

from run.wgslsmith.utils import get_inputs, get_mutant_killing_tests

def main():

    base=Path('/data/dev/dredd-webgpu-testing')
    reduce=Path(base,'reduce')
    kill_dir=Path(base, 'llvmpipe/output/killed_mutants')
    test_dir=Path(base, 'llvmpipe/output/tests')
    interesting_test=Path(reduce, 'interestingness.sh')

    mutant_killing_tests = get_mutant_killing_tests(kill_dir)

    with open(Path(reduce, 'stdout_kills.json'), 'w') as f:
        json.dump(mutant_killing_tests, f, indent=4)

    for mutant, test in mutant_killing_tests.items():
        seed = test[test.find('_')+1:]

        wgslsmith_program = Path(test_dir, test, 'original_prog.wgsl')
        input_path = Path(reduce, 'inputs.json')
        mutant_path = Path(reduce, 'mutant.txt')
        output_path = Path(reduce, 'output', 'with_creduce_pass', f'mutant_{mutant}')
        interesting_path = Path(output_path, 'interestingness.sh')
        prog_path = Path(output_path, 'original.wgsl')

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
        
        # Record mutant ID so that it can be accessed by the interestingness script
        with open(mutant_path, 'w') as f:
            f.write(mutant)

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
            '-o', str(Path(output_path,'reduce'))]
        

        subprocess.run(cmd)

        exit()

if __name__=="__main__":
    main()