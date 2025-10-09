import shutil
import os
import subprocess
import json
from pathlib import Path

def insert_tracking(mutation_info : Path, dest : Path):
    
    with open(mutation_info, 'r') as f:
        info = json.load(f)

    tracking = info["resetTrackingCode"]
    extern_decl = tracking["externDeclarations"]
    reset_fn = tracking["resetFunction"]
    reset_fn_call = '    __dredd_reset_tracking();\n'
    
    # Insert tracking functions into destination file
    shutil.copy(dest, f'{dest}_backup')
    with open(dest, 'r') as f:
        file = f.read()

    decl_location = file.find('\n', file.find('#define DOUBLE_EQ')) + 1

    function = 'handle_compute_shader('
    fn_location = file.find(function)
    fn_location = file.find('{',fn_location) + 2
    
    new_file = file[:decl_location]
    new_file += '\n#include<stdatomic.h>\n'
    new_file += '\n' + extern_decl + '\n'
    new_file += '\n' + reset_fn + '\n'
    new_file += file[decl_location:fn_location] 
    new_file += reset_fn_call
    new_file += file[fn_location:]
    
    with open(dest, 'w') as f:
        f.write(new_file)
    
if __name__=="__main__":
    dest = '/home/ubuntu/dev/mesa_tracked/src/gallium/frontends/lavapipe/lvp_execute.c'
    subprocess.run(['git','restore', dest],cwd='/home/ubuntu/dev/mesa_tracked')
    insert_tracking('/home/ubuntu/dev/mesa_tracked/mutation_info.json', dest) 
