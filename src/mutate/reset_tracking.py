import shutil
import os
import subprocess
import json
from pathlib import Path

def insert_tracking_multiple_files(header: str, folder: str, fn_decorator: str):
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
            matches.append((file_path, int(line_num), content.strip()))
        except ValueError:
            continue

    print(f'Found {len(matches)} matches in {folder}')
    for match in matches:
        print(match)


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

def mutate():
    mutation_info = '/home/ubuntu/dev/mesa_tracked/mutation_info.json'

    track_info = get_tracking(mutation_info)

    dests = ['/home/ubuntu/dev/mesa_tracked/src/gallium/frontends/lavapipe/lvp_pipeline.c']

    for dest in dests:
        subprocess.run(['git','restore', dest],cwd='/home/ubuntu/dev/mesa_tracked')
        insert_tracking(track_info, dest)

def track_multiple():
    base = '/home/ubuntu/dev/mesa_tracked'
    header = base + '/src/gallium/frontends/lavapipe/dredd_reset.h'
    folder = base + '/src/gallium/frontends/lavapipe'
    fn_decorator = 'VKAPI_ATTR'

    insert_tracking_multiple_files(header, folder, fn_decorator)

if __name__=="__main__":
    track_multiple()
