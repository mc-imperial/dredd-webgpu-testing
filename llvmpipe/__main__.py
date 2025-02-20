import subprocess
import os
from pathlib import Path

import run.cts.kill_mutants
import run.wgslsmith.kill_mutants

from track_mutants_cts import process_tracking

def get_coverage_from_tracking_output(cts_tracking, wgslsmith_tracking, mutants_to_kill):
    coverage = process_tracking(cts_tracking, wgslsmith_tracking)
    with open(mutants_to_kill,'w') as f:
        f.writelines(coverage['covered_by_wgslsmith_only'])

def main():
    
    base = Path('/data/dev/dredd-webgpu-testing/llvmpipe')
    cts_tracking = Path(base,'tracking')
    wgslsmith_tracking = Path(base, 'wgslsmith', 'tracking')
    output = Path(base,'output')
    mutants_to_kill_file = Path(output, 'mutants_to_kill.txt')

    # Get list of Mesa mutants to kill
    with open(mutants_to_kill_file,'r') as f:
        mutants_to_kill = f.readlines()

    print(f'There are {len(mutants_to_kill)} mutants to kill')

    # Kill mutants with wgslsmith


if __name__=="__main__":
    main()