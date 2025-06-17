import subprocess
import os
import argparse
from pathlib import Path
from typing import List, Set

from run.cts.map import map_mutants

def main():

    root = Path(os.path.dirname(os.path.abspath(__file__))).parent.parent

    parser = argparse.ArgumentParser()
    
    parser.add_argument('tracked_vk_icd',
            type=Path,
            help = "Path to tracked_mesa vk_icd.json")
    parser.add_argument('cts',
            type=Path,
            help='Path to CTS')
    parser.add_argument('dawn',
            type=Path,
            help='Path to Dawn')
    parser.add_argument('--output',
            type=Path,
            default=Path(root, 'data'))
    parser.add_argument('--query',
            type=str,
            default='webgpu:*')

    args = parser.parse_args()

    tracking = Path(args.output, 'tracking')
    tracking.mkdir(exist_ok=True)

    map_mutants(args.cts,
        args.dawn,
        tracking,
        args.output,
        args.vk_icd,
        args.query)