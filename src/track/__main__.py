import subprocess
import os
import argparse
from pathlib import Path
from typing import List, Set

from run.cts.map import map_mutants
from run.wgslsmith.utils import run_wgslsmith_program

def main():

    root = Path(os.path.dirname(os.path.abspath(__file__))).parent.parent

    parser = argparse.ArgumentParser()
    
    parser.add_argument('tracker',
            choices=['cts','wgslsmith'])
    parser.add_argument('tracked_vk_icd',
            type=Path,
            help = "Path to tracked_mesa vk_icd.json")
    parser.add_argument('dawn',
            type=Path,
            help='Path to Dawn')
    parser.add_argument('--cts',
            type=Path,
            help='Path to CTS',
            default="")
    parser.add_argument('--output',
            type=Path,
            default=Path(root, 'data'))
    parser.add_argument('--query',
            type=str,
            default='webgpu:*')
    parser.add_argument('--wgslsmith_sample',
            type=int,
            default=1)

    args = parser.parse_args()
    
    tracking_dir = Path(args.output, 'tracking_files')
    tracking_dir.mkdir(exist_ok=False)

    if args.tracker == 'cts':
        # Get the mutant to test ID mapping so that we know 
        # which mutants are touched by which tests
        output_file = 'mapping_mutant_to_query_list.csv'

        map_mutants(args.cts,
            args.dawn,
            tracking_dir,
            args.output,
            output_file,
            args.tracked_vk_icd,
            args.query) 

    elif args.tracker == 'wgslsmith':
        # Get aggregate mutant coverage of a sample of tests
        program_dir = Path(args.output, 'wgslsmith_progs')
        program_dir.mkdir(exist_ok=True)
        track_wgslsmith(tracking_dir, 
            program_dir, 
            args.tracked_vk_icd, 
            Path(args.dawn,'out','Debug','dawn.node'), 
            args.wgslsmith_sample)

        mutants = get_mutants(tracking_dir)

        output_file = 'covered_by_wgslsmith.txt'

        with open(Path(args.output, output_file),'w') as f:
            f.writelines(mutants)
        
def track_wgslsmith(tracking_dir : Path, 
    program_dir : Path, 
    mesa_vk_icd : Path,
    dawn_node : Path,
    n : int = 1):
    for i in range(n):
        tracking_file = Path(tracking_dir, f'tracking_file_wgslsmith_run_{i}.txt').resolve()
        wgslsmith_program = Path(program_dir, f'wgslsmith/wgslsmith_prog_{i}.js').resolve()
        run_wgslsmith_program(wgslsmith_program,
            str(dawn_node),
            str(mesa_vk_icd),
            generate=True,
            tracking=tracking_file)

def track(track_cts : bool = True, track_wgslsmith : bool = True, n : int = 1):

    base = Path('/data/dev')
    dredd = Path(base,'dredd/third_party/clang+llvm/bin/dredd')
    mesa = Path(base, 'mesa_tracked')
    mutation_dir = Path('src')
    info_file = Path(mesa,'mutant_info.json')
    compile_commands = Path(mesa, 'build', 'compile_commands.json')

    cts = Path('/data/dev/webgpu_cts')
    dawn = Path('/data/dev/dawn')
    mesa_vk_icd = Path(mesa, 'build/install/share/vulkan/icd.d/lvp_icd.x86_64.json')

    if track_cts:
        for i in range(n):
            tracking_file = Path(f'tracking/tracking_file_run_{i}.txt').resolve()
            run_cts(cts, dawn, mesa_vk_icd, output_name = f'tracking/tracking_run_{i}', tracking_file = tracking_file)

    if track_wgslsmith:
        for i in range(100):
            tracking_file = Path(f'wgslsmith/tracking/tracking_file_wgslsmith_run_{i}.txt').resolve()
            wgslsmith_program = Path(f'wgslsmith/wgslsmith_prog_{i}.js').resolve()
            run_wgslsmith_program(wgslsmith_program,
                mesa_vk_icd,
                generate=True,
                tracking=tracking_file)

def process_tracking(cts : Path, wgslsmith : Path) -> dict[str,list[int]]:

    if cts is not None:
        cts_mutants = get_mutants(cts)
        print(f'The CTS covers {len(cts_mutants)} mutants in total')

    if wgslsmith is not None:
        wgslsmith_mutants = get_mutants(wgslsmith)
        print(f'A sample of 100 WGSLsmith tests cover {len(wgslsmith_mutants)} mutants in total')

    if cts is not None and wgslsmith is not None:
        covered_by_both = cts_mutants.intersection(wgslsmith_mutants)
        covered_by_cts_only = cts_mutants.difference(wgslsmith_mutants)
        covered_by_wgslsmith_only = wgslsmith_mutants.difference(cts_mutants)

        print(f'Covered by both: {len(covered_by_both)}')
        print(f'Covered by CTS only: {len(covered_by_cts_only)}')
        print(f'Covered by WGSLsmith only: {len(covered_by_wgslsmith_only)}')

    coverage = {'covered_by_both' : covered_by_both,
                'covered_by_cts_only' : covered_by_cts_only,
                'covered_by_wgslsmith_only' : covered_by_wgslsmith_only
                }

    return coverage

def get_mutants(filepath : Path):
        
    all_mutants = set()

    for filename in os.listdir(filepath):
        file = os.path.join(filepath, filename)
        with open(file) as f:
            mutants = set(f.readlines())

        all_mutants = all_mutants.union(mutants)

    return all_mutants

if __name__=="__main__":
    main()