import subprocess
from pathlib import Path
import os
import json
import ast

def gen_wgslsmith_program(program_path : Path, recondition : bool = True, as_js : bool = True) -> bool:

    input_path = f'{Path(program_path.parent, program_path.stem)}_inputs.json'
    js_path = f'{Path(program_path.parent, program_path.stem)}.js'

    # Generate and recondition WGSL program
    gen_cmd = ['wgslsmith',
        'gen',
        '-o',
        str(program_path)]

    if recondition:
        gen_cmd.append('--recondition')

    gen_result = subprocess.run(gen_cmd)

    if gen_result.returncode != 0:
        print('Generation problem!')
        return False

    # Extract inputs
    with open(program_path, 'r') as f:
        code = f.readlines()

    # Get first line without comment chars
    inputs = code[0][3:]

    # Convert str representation of dict to dict
    inputs = ast.literal_eval(inputs)

    with open(input_path, 'w') as f:
        json.dump(inputs, f)

    if as_js:
        gen_js_program(program_path, input_path, js_path)

def gen_js_program(program : Path,
    input : Path,
    program_js : Path):

        with open(program, 'r') as f:
            program_wgsl = f.read()

        with open(input, 'r') as f:
            program_input = json.load(f)
        
        program_input = program_input["0:0"]

        # storage buffer must be at least 64 bytes so extend with '0' bytes if it is not long enough
        if len(program_input) < 64:
            extra_input = [0]*(64 - len(program_input))
            program_input.extend(extra_input)

        program_input = ','.join(map(str, program_input)) 

        with open(program_js,'w') as f:
            f.write(f'export const input = [{program_input}];\n')
            f.write(f'export const expected = [{program_input}];\n')
            f.write(f'export const shaderCode = ` \n {program_wgsl}`;')

def run_wgslsmith_program(program_js : Path, 
    dawn_node : Path, 
    vk_icd : Path = None, 
    generate : bool = False, 
    tracking : Path = None,
    mutants : List[int] = None):

    if tracking is not None and mutants is not None:
        print('Error! Cannot run with tracking and mutants enabled')
        exit(1)
        
    if generate:
        gen_wgslsmith_program(program_js)

    env = os.environ.copy()
    env["VK_ICD_FILENAMES"] = str(vk_icd)
    
    if tracking is not None:
        print(tracking)
        env["DREDD_MUTANT_TRACKING_FILE"] = str(tracking)

    if mutants is not None:  
        env["DREDD_ENABLED_MUTATION"] = ','.join([str(m) for m in mutants])

    run_cmd = ['node', 'script.js', str(dawn_node), str(program_js)]

    abspath = os.path.abspath(__file__)
    dname = Path(os.path.dirname(abspath),'../../standalone').resolve()

    try:
        result = subprocess.run(run_cmd, cwd=str(dname), env=env, timeout=180)
    except subprocess.TimeoutExpired:
        print('Timeout expired!')
        return None

    return result

