import subprocess
import os
from pathlib import Path

def add_hello(dir: Path):

    for item in os.listdir(dir):
        itemname = os.path.join(dir, item)
        if os.path.isfile(itemname) and itemname[-2:] == '.c':
            insert_hello(itemname)

def insert_hello(file : str):
    
    with open(file,'r') as f:
        code = f.readlines()

    # Dredd preludes are identical across file
    # So can insert using line index
    code.insert(15,f'''  printf("hello from {file} \\n");\n''')

    with open(file,'w') as f:
        f.writelines(code)

def remove_hello(src):
    cmd = ['git','restore','*']

    subprocess.run(cmd, cwd=src)

def test_shader():
    pass


def main():
    src = Path('/data/dev/mesa_tracked/src/gallium/drivers/llvmpipe')

    add_hello(src)
    remove_hello(src)


if __name__=="__main__":
    main()