import subprocess
import multiprocessing
import os
from pathlib import Path

import run.cts.kill_mutants
import run.wgslsmith.kill_mutants

from track_mutants_cts import process_tracking

class dotdict(dict):
    """dot.notation access to dictionary attributes"""
    __getattr__ = dict.get
    __setattr__ = dict.__setitem__
    __delattr__ = dict.__delitem__


def get_coverage_from_tracking_output(cts_tracking, wgslsmith_tracking, mutants_to_kill):
    coverage = process_tracking(cts_tracking, wgslsmith_tracking)
    with open(mutants_to_kill,'w') as f:
        f.writelines(coverage['covered_by_wgslsmith_only'])

def main():
    
    base = Path('/data/dev')
    cts_tracking = Path(base,'tracking')
    wgslsmith_tracking = Path(base, 'wgslsmith', 'tracking')
    output = Path(base,'dredd-webgpu-testing/llvmpipe/output')
    mutants_to_kill_file = Path(output, 'mutants_to_kill.txt')

    mesa_mutated = Path(base,'mesa_mutated')
    mesa_tracked = Path(base, 'mesa_tracked')
    info_file_mutated = Path(mesa_mutated, 'mutation_info.json')
    info_file_tracked = Path(mesa_tracked, 'mutation_info.json')
    mutated_vk_icd =  Path(mesa_mutated, 'build/install/share/vulkan/icd.d/lvp_icd.x86_64.json')
    tracked_vk_icd = Path(mesa_tracked, 'build/install/share/vulkan/icd.d/lvp_icd.x86_64.json')
    wgslsmith_exe = Path(base,'wgslsmith','target','release','wgslsmith')

    args = dotdict({'info_file_mutated' : info_file_mutated ,
        'info_file_tracked' : info_file_tracked ,
        'wgslsmith_exe' : wgslsmith_exe ,
        'output' : output,
        'mutated_vk_icd' : mutated_vk_icd,
        'tracked_vk_icd' : tracked_vk_icd,
        'dawn' : Path(base,'dawn/out/Debug/dawn.node'),
        'n_processes' : 1,
        })

    # Get list of Mesa mutants to kill
    with open(mutants_to_kill_file,'r') as f:
        mutants_to_kill = f.readlines()

    mutants_to_kill = [x.rstrip() for x in mutants_to_kill]

    print(f'There are {len(mutants_to_kill)} mutants to kill')

    # Kill mutants with wgslsmith
    wgslsmith_args = [str(args.info_file_mutated),
                str(args.info_file_tracked),
                f'{str(args.wgslsmith_exe)}', # wgslsmith_root
                str(args.output),
                '--mutants_to_kill', ','.join([str(m) for m in mutants_to_kill]),
                'mesa',
                str(args.dawn),
                str(args.mutated_vk_icd),
                str(args.tracked_vk_icd)]

    if args.n_processes == 1:
        run.wgslsmith.kill_mutants.main(wgslsmith_args)

    elif args.n_processes > 1:
        processes = []
        for i in range(args.n_processes):
            log_name = Path(args.output, f'process_{i}.log')
            arguments = wgslsmith_args.copy()
            arguments.insert(arguments.index('mesa'),'--log')
            arguments.insert(arguments.index('mesa'),str(log_name))

            p = multiprocessing.Process(target=run.wgslsmith.kill_mutants.main, args=((arguments,)))
            processes.append(p)
            p.start()

        for p in processes:
            p.join()

if __name__=="__main__":
    main()