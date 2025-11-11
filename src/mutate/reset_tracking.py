import shutil
import os
import subprocess
import json
from pathlib import Path

def get_file_matches(folder, pattern) -> list[tuple]:
    '''
        Finds all occurences of the pattern in a folder
        returns a list of tuples with (file_path, line_number)
    '''

    find_cmd = f"find {folder} -name '*.c' | xargs grep -nI '{pattern}'"
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

    return matches

def insert_tracking_multiple_files(header: str, folder: str, fn_decorator: str, function_call: str):
    
    matches = get_file_matches(folder, fn_decorator)

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

def insert_tracking(mutation_info: Path, dest : Path):
    
    git_reset(dest)

    fn_names = ['lvp_CreateComputePipelines(',
                'lvp_CreateGraphicsPipelines(']

    fn_locations = []

    track_info = get_tracking(mutation_info)

    tracking, extern_decl, reset_fn, reset_fn_call = track_info
  
    # Find insertion locations
    with open(dest, 'r') as f:
        file = f.read()

    decl_location = file.find('\n', file.find('#define MAX_DYNAMIC_STATES 72')) + 1

    for fn in fn_names:
        location = file.find(fn)
        if location == -1:
            raise RuntimeError(f'Function {fn} not found!')
        location = file.find('{', location) +2
        fn_locations.append(location)

    # Sort fn insert locations
    fn_locations.sort()

    # Insert fn definitions in new file
    new_file = file[:decl_location]
    curr_location = decl_location
    new_file += '\n#include<stdatomic.h>\n'
    new_file += '\n' + extern_decl + '\n'
    new_file += '\n' + reset_fn + '\n'

    # Insert reset fn calls in new file
    for location in fn_locations:
        new_file += file[curr_location:location]
        new_file += reset_fn_call
        curr_location = location

    new_file += file[curr_location:]
   
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
    result = subprocess.run(['git','restore', file],cwd='/home/ubuntu/dev/mesa_tracked')
    if result.returncode != 0:
        raise RuntimeError(f'Git restore failed for {file}')

def dredd_into_lvp_pipeline():
    mutation_info = '/home/ubuntu/dev/mesa_tracked/mutation_info.json'

    dests = ['/home/ubuntu/dev/mesa_tracked/src/gallium/frontends/lavapipe/lvp_pipeline.c']

    for dest in dests:
        subprocess.run(['git','restore', dest],cwd='/home/ubuntu/dev/mesa_tracked')
        insert_tracking(mutation_info, dest)

def dredd_into_vkapi_attr():
    ''' Insert extern bool declaration and dredd_reset 
        calls into all VKAPI_ATTR decorated functions 
        directly (not using a dredd include)
    '''
    mutation_info = '/home/ubuntu/dev/mesa_tracked/mutation_info.json'
    folder = '/home/ubuntu/dev/mesa_tracked/src/gallium/frontends/lavapipe'
    call_location = 'VKAPI_ATTR'
    fn_call = '\n__dredd_reset();\n'

    track_info = get_tracking(mutation_info)

    insert_tracking_mutliple_files(header, folder, call_location, fn_call)

def track_multiple_vk():
    ''' Insert dredd_reset and print_stack_trace 
        calls into all VKAPI_ATTR decorated functions
        by including a separate dredd header file
    '''
    base = '/home/ubuntu/dev/mesa_tracked'
    header = '#include "dredd_reset_vulkan.h"\nstatic int COUNTER = 0;\n'
    folder = base + '/src/vulkan/runtime'
    fn_decorator = 'VKAPI_ATTR'
    function_call = '\n__dredd_reset_tracking_vulkan();\n'

    insert_tracking_multiple_files(header, folder, fn_decorator, function_call)


def track_multiple():
    ''' Insert dredd_reset and print_stack_trace 
        calls into all VKAPI_ATTR decorated functions
        by including a separate dredd header file
    '''
    base = '/home/ubuntu/dev/mesa_tracked'
    header = '#include "dredd_reset.h"\nstatic int COUNTER = 0;\n'
    folder = base + '/src/gallium/frontends/lavapipe'
    fn_decorator = 'VKAPI_ATTR'
    #function_call = '\n   print_stack_trace(COUNTER);\n   COUNTER++;\n   __dredd_reset_tracking();'
    function_call = '\n   __dredd_reset_tracking();\n'
    insert_tracking_multiple_files(header, folder, fn_decorator, function_call)

if __name__=="__main__":
    base = '/home/ubuntu/dev/mesa_tracked'
    mutation_info = base + '/mutation_info.json'
    dest = base + '/src/gallium/frontends/lavapipe/lvp_pipeline.c'
    #insert_tracking(mutation_info, dest)
