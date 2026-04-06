import subprocess
import argparse
import os

from kill.utils import {
    gen_wgslsmith_program,
    run_wgslsmith_program
}

class Profiler():
    def __init__(self,
                 output: Path) -> None:
        self.output = output
        self.shaders = output / 'shaders'

        for dr in [self.output, self.shaders, self.profile_data]:
            dr.mkdir(parents=True, exist_ok=True)

    def generate(self):
        print('Generating...')

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
            default = Path(abs_path.parent.parent, 'data', 'profiling'))

    args = args.parse_args()

    profiler = Profiler(args.output)

    if args.action == 'gen':
        profiler.generate()
    elif args.action == 'run': 
        profiler.profile()
    elif args.action == 'all':
        profiler.generate()
        profiler.profile()

if __name__=="__main__":
    main()