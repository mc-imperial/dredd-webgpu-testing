import csv
import shutil
import os
import subprocess
import json
import random
import argparse
import pandas as pd
from pathlib import Path
from collections import defaultdict
from dataclasses import dataclass

@dataclass
class TestPaths:
    output_temp: Path
    vk_icd: Path
    dawn: Path
    cts: Path
    test_output_dir: Path
    cwd: Path
    map_temp: Path
    query_json: Path
    tracked_json: Path
    isolated_output: Path
    group_output: Path
    isolated_mutant_csv: Path

def main():
    args = argparse.ArgumentParser()
    
    args.add_argument('--get-data',
            action='store_true',
            default=False)
    args.add_argument('--base',
            type=str,
            default='/data/dev')
    
    args = args.parse_args()

    base = args.base
 
    data = Path(base, 'dredd-webgpu-testing/data')
    
    test_paths: TestPaths = TestPaths(
        output_temp = data / 'tracking_files', 
        vk_icd = base / 'mesa_tracked/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json',
        dawn = base / 'dawn',
        cts = base / 'webgpu_cts',
        test_output_dir = Path(data, 'filter_analysis'),
        cwd = base / 'dredd-webgpu-testing/src',
        map_temp = data / 'mapping_test_to_id.json',
        query_json = Path(data, 'tests_with_results_031225.json'),
        tracked_json = Path(data, 'tests_with_tracking_flag_031225.json'),
        isolated_output = Path(test_output_dir, 'isolated_output'),
        group_output = Path(test_output_dir, 'group_output'),
        isolated_mutant_csv = Path(test_output_dir, 'isolated_only_mutants.csv'))
    
    if args.get_data:
        get_data(test_paths)
    if args.analyse:
        analyse(test_paths)
   
def analyse(test_paths, isolated_output, group_output):
    pass

def get_data(test_paths, isolated_output, group_output):

    isolated_mutant_csv = test_paths.isolated_mutant_csv
    isolated_output = test_paths.isolated_output
    group_output = test_paths.group_output
    tracked_json = test_paths.tracked_json
    query_json = test_paths.query_json

    with open(tracked_json) as f:
        query_dict = json.load(f)

    queries = sorted([k for k, v in query_dict.items() if v == 1])

    sample = sample_queries(queries)

    print(f'\nThere are {len(sample)} queries selected')
 
    runnable_queries = [(query, group.rstrip(':') + ':*') for (query, group) in sample]

    env = os.environ.copy()
    env['CC'] = '/usr/bin/clang-17'
    env['CXX'] = '/usr/bin/clang++-17'
    env['MESA_SHADER_CACHE_DISABLE'] = 'true'

    # Open CSV once, write header
    with open(isolated_mutant_csv, 'w', newline='') as f:
        fieldnames = [
            "query", "group", "n_isolated_mutants",
            "n_group_mutants", "n_isolated_only", "isolated_only_ids"
        ]
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
    
        for i, (query, group) in enumerate(runnable_queries):
            print(f'Processing test {i}')

            # Run in isolation and record tracked IDs
            iso_output_dir = isolated_output / f'filter_test_{i}'
            run_test(query, test_paths, iso_output_dir, env)

            # Run as part of a group and record tracked IDs
            group_output_dir = group_output / f'filter_test_{i}'
            run_test(group, test_paths, group_output_dir, env, keep_query=query)

            # Get the matching test output from the group run
            assert len(list(iso_output_dir.rglob('*.txt'))) == 1
            individual_mutants = get_mutants(iso_output_dir / 'test_id_0.txt')
            group_mutants = get_mutants(get_mutant_file(query, group_output_dir))

            individual_only_mutants = sorted(set(individual_mutants) - set(group_mutants))

            # Store row data
            writer.writerow({
                "query": query,
                "group": group,
                "n_isolated_mutants": len(individual_mutants),
                "n_group_mutants": len(group_mutants),
                "n_isolated_only": len(individual_only_mutants),
                "isolated_only_ids": individual_only_mutants
            })

    print(f'Finished!')

def get_mutant_file(query: str, folder: Path):
    with open(folder / 'mapping_test_to_id.json') as f:
        mapping = json.load(f)

    test_id = mapping[query]

    return folder / f'{test_id}.txt'

def get_mutants(file: Path):
    
    try:
        with open(file, 'r') as f:
            mutants = f.readlines()
    except FileNotFoundError:
        print('Problem with file')
        mutants = []

    unique_mutants = list(sorted({int(m.strip()) for m in mutants}))

    return unique_mutants

def sample_queries(queries, per_group=1, seed=None):
    """
    Sample queries after the first in each group.

    queries: list of query strings
    per_group: how many queries to select per group
    seed: optional random seed
    """
    if seed is not None:
        random.seed(seed)

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
        if len(qs) <= 1:
            continue  # skip group with only the first query
        # skip the first query in the group
        candidates = qs[1:]
        # sample up to per_group queries
        n = min(per_group, len(candidates))
        selected = random.sample(candidates, n)
        # store tuples (query, group)
        sampled.extend([(q, prefix) for q in selected])
    
    return sampled

def run_test(test, test_paths, output_dir, env):

    output_temp = test_paths.output_temp
    vk_icd = test_paths.vk_icd
    dawn = test_paths.dawn
    cts = test_paths.cts
    test_output_dir = test_paths.test_output_dir
    cwd = test_paths.cwd
    map_temp = test_paths.map_temp

    clear_folder(output_temp)

    cmd = ['python',
           '-m',
           'track',
           'cts',
           str(vk_icd),
           str(dawn),
           '--cts', str(cts),
           '--query', test,
           '--output', str(test_output_dir)]

    result = subprocess.run(cmd, env=env, cwd=cwd)
    
    if os.path.exists(output_dir):
        shutil.rmtree(output_dir)
   
    shutil.copytree(output_temp, output_dir)
    print(f'Copied from {output_temp} to {output_dir}')
    clear_folder(output_temp)

    # Copy the test id to test name mapping into the output folder
    shutil.copy(map_temp, output_dir / 'mapping_test_to_id.json')

def clear_folder(folder):
    for item in os.listdir(folder):
        item_path = os.path.join(folder, item)
        try:
            if os.path.isfile(item_path) or os.path.islink(item_path):
                os.unlink(item_path)  # delete file or link
            elif os.path.isdir(item_path):
                shutil.rmtree(item_path)  # delete subfolder
        except Exception as e:
            raise RuntimeException(f'Failed to delete {item_path}. Reason: {e}')

    print(f'Folder cleared: {folder}')

if __name__=="__main__":
    main()
