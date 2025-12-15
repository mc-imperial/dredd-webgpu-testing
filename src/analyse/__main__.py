import datetime
import os
import subprocess
import argparse
import time

from typing import Sequence, Tuple
from dataclasses import dataclass
from pathlib import Path

@dataclass
class FilePaths:
    base: Path
    output: Path
    cts: Path
    dawn: Path
    mesa: Path
    mesa_tracked: Path
    mesa_mutated: Path
    dredd: Path
    vk_icd: Path
    runid: str

def main():
 
    args = argparse.ArgumentParser()

    args.add_argument('analysis',
            choices=['all',
                     'cts-stats'
                     ])
    args.add_argument('--base',
            type=str,
            default='/data/dev')
    args.add_argument('--output',
            type=str,
            default='/data/dev/dredd-webgpu-testing/data/icst_output')

    args = args.parse_args()

    base = Path(args.base)
    output = Path(args.output)

    paths : FilePaths = FilePaths(
            base = base,
            output = output,
            cts = base / 'webgpu_cts',
            dawn = base / 'dawn',
            mesa = base / 'mesa',
            mesa_tracked = base / 'mesa_tracked',
            mesa_mutated = base / 'mesa_mutated',
            vk_icd = Path('build/install/share/vulkan/icd.d/lvp_icd.x86_64.json'),
            dredd = base / 'dredd',
            runid = timestamp_string()
            )

    if args.analysis == 'all':
        run_all(paths)
    if args.analysis == 'cts-stats':
        get_full_cts_stats(paths)


def run_all(paths : FilePaths):
    raise NotImplementedError


def get_full_cts_stats(paths: FilePaths) -> Path:
    '''
    Calculates the full CTS runtime without instrumentation
    and with instrumentation.
    Returns path to which stdout was written
    '''

    out_time = paths.output / f'full_cts_runtime_{paths.runid}.txt'
    stdout = paths.output / f'full_cts_stdout_{paths.runid}.txt'
    out_size = paths.output / f'full_cts_size_{paths.runid}.txt'

    query = 'webgpu:*'

    
    elapsed_seconds = run_cts(dawn = paths.dawn,
            cts = paths.cts,
            mesa = paths.mesa,
            vk_icd = paths.vk_icd,
            stdout = stdout,
            query = query,
            cache_enabled=True)

    
    with open(outfile, 'w') as f:
        f.write(f'The full CTS runtime is: {elapsed_seconds} seconds\n')
        f.write(f'This is {int(elapsed_seconds) // 60} minutes and int(total_seconds % 60} seconds')

    stats_dict : dict = get_cts_size_stats(paths, stdout)

    with open(outfile, 'w') as f:
        for k, v in stats_dict:
            f.write(f'{k} : {v}\n')

def run_cts(dawn: Path, 
            cts: Path, 
            mesa: Path, 
            vk_icd: str, 
            stdout: Path,
            query: str,
            cache_enabled: bool = False) -> float:
    
    env = os.environ.copy()
    env['VK_ICD_FILENAMES'] = f'{str(mesa)}/{vk_icd}'

    if not cache_enabled:
        env['MESA_DISABLE_SHADER_CACHE']='true'

    cmd = [f'{str(dawn)}/tools/run',
           'run-cts',
           f'--bin={dawn}/out/Debug',
           f'--cts={str(cts)}',
           query
           ]
    
    start_time = time.perf_counter()
    
    with open(stdout, 'w', encoding='utf-8') as f:
        result = subprocess.run(
            cmd,
            stdout=f,
            stderr.subprocess.STDOUT,
            text=True,
            check=False,
            env=env
        )

    elapsed_seconds = time.perf_counter() - start_time

    return elapsed_seconds

def get_single_test_runtime():
    '''
    Calculates the typical runtime of a single test in isolation
    Uses a sample of tests (since they may have different runtimes)
    For measurement of startup costs
    '''
    raise NotImplementedError

def get_cts_size_stats(paths: FilePaths, cts_stdout: Path):
    '''
    Statistics on the number of tests in the  CTS
    '''

    outfile = paths.output / 'cts_size_stats_{paths.runid}.txt'
    
    with open(cts_stdout, 'r') as f:
        lines = f.readlines()

    completed_re = re.compile(r"Completed in (.+)")
    result_re = re.compile(r"(PASS|FAIL|SKIP):\s+(\d+)")

    passed = failed = skipped = None
    runtime = None

    with open(path, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()

            # Runtime
            m = completed_re.search(line)
            if m:
                runtime = m.group(1)
                continue

            # PASS / FAIL / SKIP counts
            m = result_re.search(line)
            if m:
                label, count = m.group(1), int(m.group(2))
                if label == "PASS":
                    passed = count
                elif label == "FAIL":
                    failed = count
                elif label == "SKIP":
                    skipped = count

    if runtime is None:
        raise ValueError("Could not find 'Completed in ...' line")

    if any(v is None for v in (passed, failed, skipped)):
        raise ValueError("Missing PASS / FAIL / SKIP counts")

    total_tests = passed + failed + skipped

    stats_dict = {
        "total_tests": total_tests,
        "passed": passed,
        "failed": failed,
        "skipped": skipped,
        "runtime": runtime,
    }

    return stats_dict


def get_number_of_mutant_stats(paths: FilePaths):
    '''
    Statistics on the number of mutants in our SUT
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


def timestamp_string() -> str:
    return datetime.now().strftime("%Y%m%d_%H%M%S")

if __name__=="__main__":
    main()
