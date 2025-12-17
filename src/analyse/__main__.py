import csv
import json
import random
import re
import os
import subprocess
import argparse
import time
import math
import pandas as pd

from statistics import mean, stdev
from scipy.stats import t
from datetime import datetime
from typing import Sequence, Tuple
from dataclasses import dataclass
from pathlib import Path
from collections import Counter, defaultdict

CONFIDENCE = 0.95 # 95% CI

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
    default_stdout: Path

def main():
 
    args = argparse.ArgumentParser()

    args.add_argument('analysis',
            choices=['all',
                     'cts-stats',
                     'startup-costs',
                     'n-mutants',
                     'n-tests'
                     ])
    args.add_argument('--base',
            type=str,
            default='/data/dev')
    args.add_argument('--output',
            type=str,
            default='/data/dev/dredd-webgpu-testing/data/icst_output')
    args.add_argument('--data',
            type=str,
            default=None)
    args.add_argument('--individual',
            action='store_true',
            default=False)
    args.add_argument('--indi-non-param',
            action='store_true',
            default=False)
    args.add_argument('--group',
            action='store_true',
            default=False)
    args.add_argument('--full-stdout',
            type=str,
            default='/data/dev/dredd-webgpu-testing/data/full_cts_stdout_031225.txt')

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
            runid = timestamp_string(),
            default_stdout = Path(args.full_stdout)
            )

    if args.analysis == 'all':
        run_all(paths)
    if args.analysis == 'cts-stats':
        get_full_cts_stats(paths)
    if args.analysis == 'startup-costs':
        if args.individual:
            analyse_startup_costs(paths, individual=True, group=False, datafile=args.data)
        elif args.group:
            analyse_startup_costs(paths, individual=False, group=True)
        elif args.indi_non_param:
            analyse_startup_costs(paths, individual=False, group=False, non_param=True)
        else:
            analyse_startup_costs(paths, individual=True, group=True)
    if args.analysis == 'n-mutants':
        n_mutants = count_mutants(paths)
        mesa_loc = get_loc(paths)
    if args.analysis == 'n-tests':
        analyse_n_tests(paths)


def run_all(paths : FilePaths):
    raise NotImplementedError


def analyse_n_tests(paths: FilePaths):

    outfile = paths.output / f'n_tests_analysis.txt'

    if paths.default_stdout is None:
        raise ValueError('You must supply a default stdout file to read data from')

    df = get_test_info_from_stdout(paths.default_stdout) 

    api_count = (df['folder_l0'] == 'api').sum()
    shader_count = (df['folder_l0'] == 'shader').sum()

    output_str = f'Number of tests under webgpu:api,* is {api_count}\n'
    output_str += f'Number of tests under webgpu:shader,* is {shader_count}\n'

    print(output_str)

    with open(outfile, 'w') as f:
        f.write(output_str)

def get_loc(paths: FilePaths):
    
    outfile = paths.output / f'loc_in_mesa_src_compiler_nir.txt'

    folder = paths.mesa / 'src/compiler/nir'

    cmd = ['cloc',
           str(folder),
           '--include-lang=C'
           ]

    result = subprocess.run(cmd, capture_output=True, text=True)

    output_str = f'There are {result.stdout} lines of C code in {folder}'

    print(output_str)

    with open(outfile, 'w') as f:
        f.write(output_str)

def count_mutants(paths: FilePaths):
    '''
    Counts the number of mutants in the mutated Mesa code
    '''

    outfile = paths.output / f'n_mutants_in_mesa.txt'

    cmd = [f'{str(paths.dredd)}/scripts/query_mutant_info.py',
            '--largest-mutant-id',
            f'{str(paths.mesa_tracked)}/mutation_info.json']

    result = subprocess.run(cmd, capture_output=True, text=True)

    n_mutants = result.stdout

    output_str = f'There are a total of {n_mutants} mutants in {paths.mesa_tracked}'

    print(output_str)

    with open(outfile, 'w') as f:
        f.write(output_str)

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
            query = query,
            stdout = stdout,
            cache_enabled=True)
    
    with open(outfile, 'w') as f:
        f.write(f'The full CTS runtime is: {elapsed_seconds} seconds\n')
        f.write(f'This is {int(elapsed_seconds) // 60} minutes and {int(total_seconds % 60)} seconds')

    stats_dict : dict = get_cts_size_stats(stdout)

    with open(outfile, 'w') as f:
        for k, v in stats_dict.items():
            f.write(f'{k} : {v}\n')

def run_cts(dawn: Path, 
            cts: Path, 
            mesa: Path, 
            vk_icd: str, 
            query: str,
            stdout: Path | None = None,
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
    
    # Open the file only if stdout path is provided
    f_handle = stdout.open('w', encoding='utf-8') if stdout else None

    try:
        
        start_time = time.perf_counter()
        
        process = subprocess.Popen(
            cmd,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            env=env
        )

        for line in process.stdout:
            print(line, end="")
            if f_handle:
                f_handle.write(line)

        return_code = process.wait()

        elapsed_seconds = time.perf_counter() - start_time
    
    finally:
        if f_handle:
            f_handle.close()
    
    return elapsed_seconds

def get_cts_size_stats(cts_stdout: Path):
    '''
    Statistics on the number of tests in the  CTS
    '''
    
    completed_re = re.compile(r"Completed in (.+)")
    result_re = re.compile(r"(PASS|FAIL|SKIP):\s+(\d+)")

    passed = failed = skipped = 0
    runtime = None

    with open(cts_stdout, "r", encoding="utf-8") as f:
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

    if all(v is None for v in (passed, failed, skipped)):
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

def get_test_info_from_stdout(stdout: Path) -> pd.DataFrame:

    # Get different testing levels
    test_dict = get_queries(stdout)
    tests = list(test_dict.keys())
    level_prefix = 'folder_l'

    df = pd.DataFrame({'test_name' : tests})
    df['test_folder'] = df['test_name'].str.extract(r'^[^:]*:([^:]*)')
    split_cols = df['test_folder'].str.split(',', expand=True)
    split_cols = split_cols.add_prefix(level_prefix)
    df = df.join(split_cols)

    # Non-parameterised query up to the *last* colon
    df['query_to_last_colon'] = df['test_name'].apply(extract_to_relevant_colon)

    return df
 

def analyse_startup_costs(
        paths: FilePaths, 
        individual: bool, 
        group: bool, 
        non_param: bool = False,
        datafile: Path = None):
    '''
    Analysis of the difference in time required to run single tests
    vs run all tests. Runs tests at increasing levels of granularity
    (all, first file level, second file level... samples at the
    individual test level).
    Outputs visualisations to show the relationship between 
    granularity and the total test suite runtime.
    '''


    df = get_test_info_from_stdout(paths.default_stdout)

    if individual:
        startup_costs_individual(paths, df, datafile)
    if non_param:
        startup_costs_non_param(paths, df)
    if group:
        startup_costs_groups(paths, df)

def startup_costs_non_param(paths: FilePaths, df: pd.DataFrame):

    outname = 'indi_non_param'

    tests = list(set(df['query_to_last_colon']))

    tests = [x + '*' for x in tests]

    total_seconds = time_group_tests(paths, paths.output, outname, tests)

def startup_costs_individual(paths: FilePaths, df: pd.DataFrame, datafile: Path = None):
        # Get a sample of individual level tests. The union of these
        # tests do NOT equate to the complete CTS, they are just a sample
        # and the runtimes need to be scaled up to estimate the runtime
        # of the full CTS if it were run on an individual test level

        
        if datafile is None:

            output_file = paths.output / f'individual_test_runtime_summary_{paths.runid}.txt'
            
            individual_test_sample : list = get_individual_test_sample(df)

            results = time_individual_tests(paths, individual_test_sample)    

        else:
 
            match = re.search(r"(\d{8}_\d{6})", Path(datafile).name)
            
            timestamp = match.group(1) if match else None
            
            output_file = paths.output / f'individual_test_runtime_summary_{timestamp}.txt'
            
            results = pd.read_csv(datafile)


        times_s = list(results['runtime_s'])

        n_samples = len(times_s)
        n_tests = len(df)

        time_results = sample_stats(times_s, total_tests=n_tests)

        mean_h, mean_m, mean_s = time_results["total_mean_hms"]
        low_h, low_m, low_s = time_results["total_ci_low_hms"]
        high_h, high_m, high_s = time_results["total_ci_high_hms"]

        # Per-test stats (seconds)
        mean_test = time_results["mean_test_s"]
        low_test = time_results["mean_test_ci_low_s"]
        high_test = time_results["mean_test_ci_high_s"]

        # Output to console
        output_str = (
            f"Sample of {n_samples} tests run.\n"
            f"\n"
            f"Per-test runtime (seconds):\n"
            f"  Mean: {mean_test:.6f}s "
            f"(95% CI: {low_test:.6f}s – {high_test:.6f}s)\n"
            f"\n"
            f"Estimated TOTAL runtime for {n_tests} tests:\n"
            f"  {mean_h}h {mean_m}m {mean_s}s "
            f"(95% CI: {low_h}h {low_m}m {low_s}s "
            f"– {high_h}h {high_m}m {high_s}s)"
        )

        print(output_str)

        # Write to file if requested
        if output_file is not None:
            with open(output_file, "w") as f:
                f.write(output_str + "\n")

def startup_costs_groups(paths: FilePaths, df: pd.DataFrame):
    # Get a list of query sets where the union of the sets
    # comprises the complete CTS at different levels of granularity
    query_sets : list[set] = get_query_levels_for_startup_analysis(df)

    query_outfile_summary = paths.output / 'group_query_summary.txt'
    query_outfile_detail = paths.output / 'group_query_detail.json'
    query_outfile_times = paths.output / f'group_query_{paths.runid}'
    query_outfile_times_csv = paths.output / f'group_query_runtimes_{paths.runid}.csv'

    with open(query_outfile_summary, 'w') as f:
        for i, q in enumerate(query_sets):
            out_str = f'Level {i} queries: {len(q)}'
            print(out_str)
            f.write(out_str + '\n')

    named_sets = {f"level_{i}": sorted(s) for i, s in enumerate(query_sets)}

    with open(query_outfile_detail, 'w') as f:
        json.dump(named_sets, f, indent=2)
    
    # Open once, write header
    with open(query_outfile_times_csv, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=["name", "n_queries", "total_in_seconds", "total_in_minutes"])
        writer.writeheader()

        # Iterate through query levels
        for name, queries in named_sets.items():
            # Skip level 0 since we run that separately
            if name != 'level_7':
                print(f'Skipping {name}')
                continue

            print(f'Running {name}')
            # Run the timing function
            seconds = time_group_tests(paths, query_outfile_times, name, queries)

            # Write row immediately
            writer.writerow({
                "name": name,
                "n_queries": len(queries),
                "total_in_seconds": round(seconds,2),
                "total_in_minutes": round(seconds / 60, 2)
            })
            f.flush()  # ensure data is written to disk
    
def time_group_tests(paths: FilePaths, outdir: Path, name: str, tests:list[str]) -> float:

    outdir.mkdir(exist_ok=True, parents=True)
    
    group_outfile = outdir / f'group_{name}_runtime.txt'

    total_seconds = 0

    for test in tests: 
        elapsed_seconds = run_cts(dawn = paths.dawn,
                cts = paths.cts,
                mesa = paths.mesa,
                vk_icd = paths.vk_icd,
                query = test,
                cache_enabled=True)
        
        total_seconds += elapsed_seconds

    out_str = f'The runtime for query {name} with {len(tests)} queries is: {total_seconds} seconds\n'
    out_str += f'This is {int(total_seconds) // 60} minutes and {int(total_seconds % 60)} seconds'
    
    print(out_str)

    with open(group_outfile, 'w') as f:
        f.write(out_str)

    return total_seconds

def time_individual_tests(paths: FilePaths, tests: list[str], outname: str = 'individual_test_times') -> pd.DataFrame:

    individual_output = paths.output / outname

    individual_output.mkdir(exist_ok=True)

    outfile = paths.output / f'{outname}_{paths.runid}.csv'

    # Open the CSV file once, write header
    with open(outfile, "w", newline="") as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(["test_name", "runtime_s"])  # header

        for i, test in enumerate(tests):
            print(f'Test {i} out of {len(tests)}')

            stdout_file = individual_output / f"test_{i}_stdout_{paths.runid}.txt"
            runtime = get_single_test_runtime(paths, test, stdout_file)

            # Write each test result immediately
            writer.writerow([test, runtime])

    # Read results back - do this so we don't have to store all results in memory
    # while we're computing them
    results = pd.read_csv(outfile)

    return results

def sample_stats(times_s: list[float], total_tests: int) -> dict:
    n = len(times_s)

    mean_test_s = mean(times_s)
    std_test_s = stdev(times_s)

    # Standard error of the mean
    sem_test_s = std_test_s / math.sqrt(n)

    # t critical value
    alpha = 1 - CONFIDENCE
    t_crit = t.ppf(1 - alpha / 2, df=n - 1)

    # Confidence interval on mean per test
    mean_test_ci_low = mean_test_s - t_crit * sem_test_s
    mean_test_ci_high = mean_test_s + t_crit * sem_test_s

    # ---- Scale to TOTAL runtime ----
    total_mean_s = mean_test_s * total_tests
    total_ci_low_s = mean_test_ci_low * total_tests
    total_ci_high_s = mean_test_ci_high * total_tests

    return {
        "sample_size": n,
        "total_tests": total_tests,

        # Per-test statistics (seconds)
        "mean_test_s": mean_test_s,
        "mean_test_ci_low_s": mean_test_ci_low,
        "mean_test_ci_high_s": mean_test_ci_high,

        # Total runtime statistics (seconds)
        "total_mean_s": total_mean_s,
        "total_ci_low_s": total_ci_low_s,
        "total_ci_high_s": total_ci_high_s,

        # Human-readable total runtime
        "total_mean_hms": ms_to_hms(total_mean_s),
        "total_ci_low_hms": ms_to_hms(total_ci_low_s),
        "total_ci_high_hms": ms_to_hms(total_ci_high_s),
    }


def ms_to_hms(seconds: float) -> tuple[int, int, int]:
    hours = int(seconds // 3600)
    minutes = int((seconds % 3600) // 60)
    seconds = int(seconds % 60)
    return hours, minutes, seconds

def get_individual_test_sample(df) -> list:

    queries = list(df['test_name'])

    sample = sample_queries(queries, by_group=False)

    return sample

def get_query_levels_for_startup_analysis(df) -> list[set]:

    folder_cols = [col for col in df.columns if col.startswith("folder_l")]

    # Compute the deepest non-null level per test
    df['max_level'] = df[folder_cols].notna().sum(axis=1) - 1

    # Top-level query
    query_sets = [["webgpu:*"]]

    max_depth = df['max_level'].max()

    for level in range(max_depth + 1):
        print(f'Processing level {level}...')
        # Build queries up to this level
        # Fill NaNs with empty string so join works
        prefixes = (
            df[folder_cols[:level+1]]
            .fillna("")
            .agg(",".join, axis=1)
            .str.rstrip(",")
        )

        queries = set(prefixes.unique())
        
        # Add tests that don't reach this level: use their deepest available prefix
        shallow_tests = df['max_level'] < level
        if shallow_tests.any():
            shallow_prefixes = df.loc[shallow_tests, folder_cols].apply(
                lambda row: ",".join([v for v in row if pd.notna(v)]), axis=1
            )
            queries.update(shallow_prefixes.unique())
        
        # Determine whether this level is the deepest for each row
        is_leaf = df["max_level"] == level
        
        # Convert logical queries to runnable CTS queries
        runnable = (
            "webgpu:"
            + prefixes
            + is_leaf.map({True: ":*", False: ",*"})
            )

        query_sets.append(sorted(set(runnable)))        

    return query_sets

def query_up_to_level(row, folder_cols, level):
    """
    Returns the query string up to the given level for a test.
    """
    parts = [row[col] for col in folder_cols[:level+1] if pd.notna(row[col])]
    return ','.join(parts)


def get_queries(stdout) -> dict:
     with open(stdout, 'r') as f:
         lines = f.readlines()

     tests = [x for x in lines if x.startswith('webgpu:')]

     tests = [get_result(x) for x in tests]

     return dict(tests)


def get_single_test_runtime(paths: FilePaths, query: str, stdout: Path):
    '''
    Calculates the typical runtime of a single test in isolation
    Uses a sample of tests (since they may have different runtimes)
    For measurement of startup costs
    '''
 
    elapsed_seconds = run_cts(dawn = paths.dawn,
            cts = paths.cts,
            mesa = paths.mesa,
            vk_icd = paths.vk_icd,
            query = query,
            stdout = stdout,
            cache_enabled=True)

    return elapsed_seconds 

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

def get_result(line: str):
    results = {
        ' - pass': 'pass',
        ' - fail': 'fail',
        ' - skip': 'skip'
    }

    for result, clean_result in results.items():
        if result in line:
            test = line[:line.find(result)]
            return test, clean_result

    # If we reach the end of the loop, it means we didn't match the line
    raise RuntimeError(f'Problem with line:\n{line}')

def timestamp_string() -> str:
    return datetime.now().strftime("%Y%m%d_%H%M%S")

def sample_queries(queries, by_group:bool= False, proportion= 0.1, per_group=1, seed=None, exclude_first=False) -> list:
    """
    Sample queries, optionally excluding the first in each group 

    queries: list of query strings
    per_group: how many queries to select per group
    seed: optional random seed
    """
    if seed is not None:
        random.seed(seed)

    # If we are not trying to sample evenly across groups,
    # then simply randomly sample across all queries
    if not by_group:
        n = int(len(queries) * proportion) 
        selected = random.sample(queries, n)
        return selected

    # Group queries by prefix (everything before the last colon)
    groups = defaultdict(list)

    for q in queries:
        # Split on colon; take first two parts as the group prefix
        parts = q.split(':')
        if len(parts) < 2:
            continue  # skip malformed queries
        prefix = ':'.join(parts[:2])
        groups[prefix].append(q)

    sampled = []

    for prefix, qs in groups.items():
        if exclude_first:
            if len(qs) <= 1:
                continue  # skip group with only the first query
            # skip the first query in the group
            candidates = qs[1:]
        else:
            candidates = qs
        # sample up to per_group queries
        n = min(per_group, len(candidates))
        selected = random.sample(candidates, n)
        # store tuples (query, group)
        #sampled.extend([(q, prefix) for q in selected])
        sampled.extend(selected)

    return sampled

def extract_to_relevant_colon(s: str) -> str:
    if '=' in s:
        cutoff = s.index('=')          # first '='
        return s[: s.rfind(':', 0, cutoff) + 1]
    else:
        return s[: s.rfind(':') + 1]

if __name__=="__main__":
    main()
