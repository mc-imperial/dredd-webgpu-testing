from pathlib import Path
import re

def main():

    base = Path('/data/dev/dredd-webgpu-testing')
    text = Path(base, 'output_texture.txt')
    server_out = Path(base, 'server_output.txt')

    with open(text, 'r') as f:
        lines = f.readlines()

    server_output = [x for x in lines if re.match(f"^\[\d]", x)]

    server_output.sort()

    with open(server_out, 'w') as f:
        f.writelines(server_output)

    coverage = [x for x in server_output if '[coverage]' in x]

    env = ["{} {}\n".format(s.split()[0], s.split()[4]) for s in coverage]

    env = list(set(env))

    env.sort()

    with open(server_out, 'w') as f:
        f.writelines(env)

if __name__=="__main__":
    main()
