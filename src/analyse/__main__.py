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

    paths : FilePaths = FilePaths(
            base = base,
            output = output
            )

    if args.analysis == 'all':
        run_all(paths)
   
def run_all(paths : FilePaths):
    pass

def get_cts_runtime():
    '''
    Calculates the full CTS runtime without instrumentation
    and with instrumentation
    '''
    raise NotImplementedError

def get_single_test_runtime():
    '''
    Calculates the typical runtime of a single test in isolation
    Uses a sample of tests (since they may have different runtimes)
    For measurement of startup costs
    '''
    raise NotImplementedError

def get_cts_size_stats():
    '''
    Statistics on the number of tests in the  CTS
    '''
    raise NotImplementedError

def calculate_mutant_matrix_time():
    '''
    Calculates the cost of running the full CTS on all mutants
    '''
    raise NotImplementedError

def analyse_startup_costs():
    '''
    Analysis of the difference in time required to run single tests
    vs run all tests. Runs tests at increasing levels of granularity
    (all, first file level, second file level... samples at the
    individual test level).
    Outputs visualisations to show the relationship between 
    granularity and the total test suite runtime.
    '''
    get_single_test_runtime()
    raise NotImplementedError

def analyse_mutant_recording_slowdown():
    '''
    Analysis of the time and space overhead associated with recording
    a mutant every time it is encountered, rather than just the first time
    '''

def analyse_persistency_effect_on_mutant_touches():
    '''
    Analysis of the effect of shared resources on the test-mutant
    relationship.
    Runs tests in isolation and in groups to identify shared resources.
    '''
    analyse_device_sharing_effect_on_mutant_touches()
    analyse_caching_effect_on_mutant_touches()
    raise NotImplementedError

def analyse_device_sharing_effect_on_mutant_touches():
    '''
    Analysis of the effect of device sharing and other initialisation
    code on the test-mutant relationship
    '''
    raise NotImplementedError

def analyse_caching_effect_on_mutant_touches():
    '''
    Analysis of the Mesa cache effect on which tests touch which
    mutants. 
    '''
    raise NotImplementedError

def analyse_initialisation_mutants():
    '''
    Analysis of which mutants are associated with shared resource
    initialisation and should therefore be excluded from our 
    mutation testing candidates
    '''
    raise NotImplementedError


if __name__=="__main__":
    main()
