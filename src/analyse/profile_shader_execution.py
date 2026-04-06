import subprocess
import argparse
import random
import os

from pathlib import Path

from src.kill.utils import gen_wgslsmith_program, run_wgslsmith_program

class Profiler():
    def __init__(self,
                 output: Path) -> None:
        self.output = output
        self.shaders = output / 'shaders'
        self.profile_data = output / 'profile_data'

        for dr in [self.output, self.shaders, self.profile_data]:
            dr.mkdir(parents=True, exist_ok=True)

    def generate_batch(self, n: int):
        for i in range(n):
            print(f'Generating test [{i}/{n}]')
            self.generate()

    def generate(self):
        seed = random.randint(0, 2**32 - 1)
        test_name = f"wgslsmith_{seed}"

        test_dir = self.shaders / test_name
        
        test_dir.mkdir(parents=True, exist_ok=False)

        prog = test_dir / "prog.wgsl"
        js = test_dir / "prog.js"
        inputs = test_dir / "input.json"

        print(f'Generating WGSLsmith program in {prog}')
        gen_wgslsmith_program(prog, inputs, seed=seed)

    def profile(self):
        print('Profiling...')

def main():
    args = argparse.ArgumentParser()

    current_file = Path(__file__)
    absolute_path = current_file.resolve()

    args.add_argument('action',
            choices=['gen',
                     'run',
                     'all'])
    args.add_argument('--output',
            default = Path(absolute_path.parent.parent.parent, 'data', 'profiling'))
    args.add_argument('--batch',
            default = 10)

    args = args.parse_args()

    profiler = Profiler(args.output)
    n = args.batch

    if args.action == 'gen':
        profiler.generate_batch(n)
    elif args.action == 'run': 
        profiler.profile()
    elif args.action == 'all':
        profiler.generate_batch(n)
        profiler.profile()

if __name__=="__main__":
    main()