import subprocess
import argparse

from dataclasses import dataclass
from pathlib import Path

@dataclass
class FilePaths:
    base: Path
    output: Path

def main():
 
    args = argparse.ArgumentParser()

    args.add_argument('analysis',
            choices=['all',''])
    args.add_argument('--base',
            type=str,
            default='/data/dev/dredd-webgpu-testing')
    args.add_argument('--output',
            type=str,
            default='/data/dev/dredd-webgpu-testing/data/icst_output')

    args = args.parse_args()

    base = Path(args.base)
    output = Path(args.output)

    paths : FilePaths(
            base = base,
            output = output
            )

    if args.analysis == 'all':
        run_all(paths)
   
def run_all(paths : FilePaths):
    pass

if __name__=="__main__":
    main()
