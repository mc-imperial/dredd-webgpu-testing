import shutil
import os
import subprocess
import json
from pathlib import Path

def insert_tracking_multiple_files(header: str, folder: str, fn_decorator: str, function_call: str):
    # find all occurences of the function decorator
    find_cmd = f"find {folder} -name '*.c' | xargs grep -nI '{fn_decorator}'"
    result = subprocess.run(
            find_cmd,
            shell=True,
            capture_output=True,
            text=True)
    
    matches = []
    for line in result.stdout.splitlines():
        try:
            # Each line looks like: path:line_number:content
            file_path, line_num, content = line.split(":", 2)
            matches.append((file_path, int(line_num)))
        except ValueError:
            continue

    print(f'Found {len(matches)} matches in {folder}')
    for match in matches:
        print(match)

    files = list(set([file for (file, line) in matches]))
    for filepath in files:
        print(filepath)
        git_reset(filepath)

        with open(filepath, 'r') as f:
            file = f.read()

        # Insert at newline after include
        insert_location = file.find('\n', file.find('#include '))
        
        # Copy the start of the file to the new file
        new_file = file[:insert_location]
        
        # Drop part of file that has already been inserted
        file = file[insert_location:]
        
        # Add the header to the new file
        new_file += f'\n{header}\n'

        # Next insert is first { after fn_decorator
        insert_location = file.find('{', file.find(fn_decorator))
        
        while insert_location != -1:
            # Copy the file preceeding the new insert location
            new_file += file[:insert_location + 1]
            
            # Update the file to remove the part that has been inserted
            file = file[insert_location + 1:]
            
            # Insert the function call
            new_file += function_call
            
            # Find the next insert location
            insert_location = file.find('{', file.find(fn_decorator))

        # Copy the remainding file into the new file
        new_file += file
        
        with open(filepath, 'w') as f:
            file = f.write(new_file)

        print(f'Finished {filepath}')
        exit()
    

def insert_tracking(track_info: tuple, dest : Path):
    
    # Unpack tracking tuple
    tracking, extern_decl, reset_fn, reset_fn_call = track_info
   
    # Insert tracking functions into destination file
    shutil.copy(dest, f'{dest}_backup')
    with open(dest, 'r') as f:
        file = f.read()

    decl_location = file.find('\n', file.find('#define MAX_DYNAMIC_STATES 72')) + 1

    function = 'lvp_CreateComputePipelines('
    fn_location = file.find(function)
    fn_location = file.find('{',fn_location) + 2
   
    new_file = file[:decl_location]
    new_file += '\n#include<stdatomic.h>\n'
    new_file += '\n' + extern_decl + '\n'
    new_file += '\n' + reset_fn + '\n'
    new_file += file[decl_location:fn_location] 
    new_file += reset_fn_call
    new_file += file[fn_location:]
   
    print(f'Writing to {dest}')
    with open(dest, 'w') as f:
        f.write(new_file)

def get_tracking(mutation_info):
    with open(mutation_info, 'r') as f:
        info = json.load(f)

    tracking = info["resetTrackingCode"]
    extern_decl = tracking["externDeclarations"]
    reset_fn = tracking["resetFunction"]
    reset_fn_call = '    __dredd_reset_tracking();\n'
    
    return (tracking, extern_decl, reset_fn, reset_fn_call)

def git_reset(file):
    subprocess.run(['git','restore', file],cwd='/home/ubuntu/dev/mesa_tracked')

def mutate():
    mutation_info = '/home/ubuntu/dev/mesa_tracked/mutation_info.json'

    track_info = get_tracking(mutation_info)

    dests = ['/home/ubuntu/dev/mesa_tracked/src/gallium/frontends/lavapipe/lvp_pipeline.c']

    for dest in dests:
        subprocess.run(['git','restore', dest],cwd='/home/ubuntu/dev/mesa_tracked')
        insert_tracking(track_info, dest)

def track_multiple():
    base = '/home/ubuntu/dev/mesa_tracked'
    header = '#include "dredd_reset.h"\nstatic int COUNTER = 0;\n'
    folder = base + '/src/gallium/frontends/lavapipe'
    fn_decorator = 'VKAPI_ATTR'
    function_call = '\n   print_stack_trace(COUNTER++);\n'

    insert_tracking_multiple_files(header, folder, fn_decorator, function_call)

if __name__=="__main__":
    track_multiple()
