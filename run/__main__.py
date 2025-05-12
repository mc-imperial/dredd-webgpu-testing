import subprocess
import os
import argparse
from pathlib import Path
from typing import List, Set

from run.cts.map import map_mutants
import run.cts.kill_mutants
import run.wgslsmith.kill_mutants

def main():

    parser = argparse.ArgumentParser()
    
    parser.add_argument('output',
            type=Path,
            help='Output path')

    subparsers = parser.add_subparsers(dest="cmd")

    map = subparsers.add_parser('map', 
        help='Get mapping showing the list of mutants that are touched by each CTS test')

    kill = subparsers.add_parser('kill', 
        help='Get mapping showing the list of mutants that are touched by each CTS test')

    args = parser.parse_args()

    match args.cmd:
        case 'map':
            map_cts_mutants(args)
        case 'kill':
            kill_mutants(args)
        case None:
            print('Must enter cmd!')
            exit(1)

def map_cts_mutants(args):
    map_mutants()

def kill_mutants(args):
    print('Not implemented yet!')

if __name__=="__main__":

    main()

