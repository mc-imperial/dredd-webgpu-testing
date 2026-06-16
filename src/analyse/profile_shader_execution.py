import subprocess
import argparse
import random
import os

from pathlib import Path

from src.kill.utils import gen_wgslsmith_program, run_wgslsmith_program_harness

class Shader():
    def __init__(self,
                 base: Path):
        self.shader = base / 'original.wgsl'
        self.inputs = base / 'input.json'

class Profiler():
    def __init__(self,
                 output: Path,
                 sample: int | None = 1) -> None:
        self.output = output
        self.shader_dir = output / 'shaders'
        self.profile_dir = output / 'profile_data'
        self.sample = sample 
        self.vk_icd = '/data/dev/mesa/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json'
        self.device = 'dawn:vk:7425'

        for dr in [self.output, self.shader_dir, self.profile_dir]:
            dr.mkdir(parents=True, exist_ok=True)

        self.shaders = [Shader(p) for p in self.shader_dir.iterdir() if p.is_dir()]

        if sample:
            self.shaders = self.shaders[:sample]

    def generate_batch(self):
        for i in range(self.sample):
            print(f'Generating test [{i}/{self.sample}]')
            self.generate()

    def generate(self):
        seed = random.randint(0, 2**32 - 1)
        test_name = f"wgslsmith_{seed}"

        test_dir = self.shader_dir / test_name
        
        test_dir.mkdir(parents=True, exist_ok=False)

        print(f'Generating WGSLsmith program in {test_dir}')
        shader = Shader(test_dir)
        gen_wgslsmith_program(shader.shader, shader.inputs, seed=seed)
        
        self.shaders.append(shader)

    def profile(self):
        print(f'Profiling {len(self.shaders)} shaders...')

        for shader in self.shaders:
            print(f'Shader: {shader.shader.parent.name}')
            result = run_wgslsmith_program_harness(
                shader.shader,
                shader.inputs,
                #vk_icd=self.vk_icd, # If vk_icd is set to None, harness uses default driver
                device=self.device,
                timeout=300
            )

            print(result.stdout)

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
    args.add_argument('--sample',
            type = int,
            default = 10)

    args = args.parse_args()

    profiler = Profiler(args.output, sample=args.sample)

    if args.action == 'gen':
        profiler.generate_batch()
    elif args.action == 'run': 
        profiler.profile()
    elif args.action == 'all':
        profiler.generate_batch()
        profiler.profile()

if __name__=="__main__":
    main()
