import subprocess
import os
import argparse
import csv
import json 
import zipfile
import re
import random
import pandas as pd

from dataclasses import dataclass
from collections import Counter, defaultdict
from tqdm import tqdm
from pathlib import Path
from typing import List, Set

from run.cts.map import map_mutants
from run.cts.utils import run_cts
from run.wgslsmith.utils import run_wgslsmith_program

@dataclass
class TestPaths:
    vk_icd: Path
    dawn: Path
    cts: Path
    tracking_output: Path
    compressed_output: Path
    map_test_to_mutant_json: Path
    map_mutant_to_test_csv: Path
    tests_with_results_json: Path
    tests_with_track_flag_json: Path
    isolated_output: Path
    group_output: Path
    isolated_mutant_csv: Path
    stdout: Path

def main():

    root = Path(os.path.dirname(os.path.abspath(__file__))).parent.parent

    parser = argparse.ArgumentParser()
    
    parser.add_argument('tracker',
            choices=['cts','wgslsmith'])
    parser.add_argument('--vk-icd',
            type=Path,
            help = "Path to tracked_mesa vk_icd.json")
    parser.add_argument('--dawn',
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
    parser.add_argument('--test-wise-touching',
            action=argparse.BooleanOptionalAction,
            default=True)
    parser.add_argument('--run-tests',
            action=argparse.BooleanOptionalAction,
            default=True)
    parser.add_argument('--compress',
            action=argparse.BooleanOptionalAction,
            default=True)
    parser.add_argument('--identify-initialisation-ids',
            action=argparse.BooleanOptionalAction,
            default=False)

    args = parser.parse_args()
 
    test_paths: TestPaths = TestPaths(
        vk_icd = args.vk_icd,
        dawn = args.dawn,
        cts = args.cts,
        tracking_output = args.output / 'tracking_files',
        compressed_output = args.output / 'tracking_files.zip',
        map_test_to_mutant_json = args.output / 'mapping_test_to_id.json',
        map_mutant_to_test_csv = args.output / 'mapping_mutant_id_to_tests.csv',
        tests_with_results_json = args.output / 'tests_with_results.json',
        tests_with_track_flag_json = args.output/ 'tests_with_tracking_flag.json',
        isolated_output = args.output / 'isolated_output',
        group_output = args.output / 'group_output',
        isolated_mutant_csv = args.output / 'isolated_only_mutants.csv',
        stdout = args.output / 'cts_stdout.txt'
    )
    
    args.output.mkdir(parents=True,exist_ok=True)

    if args.tracker == 'cts':
        if args.identify_initialisation_ids:
            find_initialisation_mutants(test_paths)
        else:
            track_cts(args, test_paths)

    if args.tracker == 'wgslsmith':
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
        

def track_cts(args, test_paths):

    if args.identify_initialisation_ids:
        find_initialisation_mutants(test_paths)
    else:
        # Gather tracking data
        if args.run_tests:
            run_cts(test_paths.cts, 
                dawn=test_paths.dawn, 
                outdir=test_paths.output,
                vk_icd=test_paths.vk_icd,
                query=args.query,
                tracking=True)
        
        # Compress output
        if args.compress:
            files = compress(test_paths.tracking_output, test_paths.compressed_output)
            delete_files(files)
            remove_empty_dirs(test_paths.tracking_output)

        # Get mutant - to - test mapping
        get_mutant_to_test_mapping(test_paths.compressed_output, test_paths.map_mutant_to_test_csv)

def find_initialisation_mutants(test_paths):
    '''
    This fn identifies which mutants are likely to be initialisation mutants by: 
     1. running a sample of tests in isolation
     2. comparing the mutants touched in isolation with those touched in the group run
     3. predicting that mutant IDs touched in isolation but not in the group run are
        likely to be initialisation mutants
    '''

    # Identify which tests have an associated tracking file
    query_dict = get_test_results_from_stdout(test_paths)

    # Select sample from these tests
    queries = sorted([k for k, v in query_dict.items() if v == 1])

    sample = sample_queries(queries)

    print(f'\nThere are {len(sample)} queries selected')
 
    runnable_queries = [(query, group.rstrip(':') + ':*') for (query, group) in sample]

    # Run each sample test in isolation
    run_tests_in_isolation(runnable_queries, test_paths)

def run_tests_in_isolation(runnable_queries, test_paths):

    # Open CSV once, write header
    with open(test_paths.isolated_mutant_csv, 'w', newline='') as f:
        fieldnames = [
            "query", "group", "n_isolated_mutants",
            "n_group_mutants", "n_isolated_only", "isolated_only_ids"
        ]
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
    
        for i, (query, group) in enumerate(runnable_queries):
            print(f'Processing test {i}')

            # Run in isolation and record tracked IDs
            iso_output_dir = test_paths.isolated_output / f'filter_test_{i}'
            make_dir_with_empty_check(iso_output_dir)

            run_cts(test_paths.cts, 
                dawn=test_paths.dawn, 
                outdir=iso_output_dir,
                vk_icd=test_paths.vk_icd,
                query=query,
                tracking=True,
                mesa_shader_cache=False)

            # Run as part of a group and record tracked IDs
            group_output_dir = test_paths.group_output / f'filter_test_{i}'
            make_dir_with_empty_check(group_output_dir)
            
            run_cts(test_paths.cts, 
                dawn=test_paths.dawn, 
                outdir=group_output_dir,
                vk_icd=test_paths.vk_icd,
                query=group,
                tracking=True,
                mesa_shader_cache=False)

            # Get the matching test output from the group run
            assert len(list(iso_output_dir.rglob('*.txt'))) == 1
            individual_mutants = get_mutants_from_file(iso_output_dir / 'tracking_files' / 'test_id_0.txt')
            group_mutants = get_mutants_from_file(get_mutant_file(query, group_output_dir))

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

def get_test_results_from_stdout(test_paths):
    stdout = test_paths.stdout
    tracking_files = test_paths.compressed_output
    test_to_id_json = test_paths.map_test_to_mutant_json
    results_output = test_paths.tests_with_results_json
    tracked_output = test_paths.tests_with_track_flag_json

    print(f'Getting test results...')
    test_result_dict = get_tests_with_results(stdout, results_output)

    print('Loading test to ID map...')
    with open(test_to_id_json, 'r') as f:
        test_to_id_map = json.load(f)

    id_to_test_map = {v : k for k, v in test_to_id_map.items()}
    
    print(f'Getting tracked test info...')
    tracked_tests = get_tests_with_tracking(tracking_files, id_to_test_map)

    print(f'There are {len(tracked_tests)} tracked tests')

    df = make_test_df(test_result_dict, tracked_tests)

    # Count how many 1s and 0s in the tracked column
    counts = df["tracked"].value_counts().sort_index()  # sort_index to show 0 then 1
    print(counts)

    assert len(tracked_tests) == counts.get(1, 0), f"Expected {len(tracked_tests)}"

    df_subset = df[['test_name', 'tracked']]

    # Convert to dictionary: key = test_name, value = tracked flag
    test_tracked_dict = dict(zip(df_subset['test_name'], df_subset['tracked']))

    # Write to JSON
    with open(tracked_output, 'w') as f:
        json.dump(test_tracked_dict, f, indent=2)

    print(f"Wrote {len(test_tracked_dict)} entries to {tracked_output}")

    return test_tracked_dict

def make_dir_with_empty_check(path):
    if path.exists():
        if not path.is_dir():
            raise NotADirectoryError(f"{path} exists and is not a directory")
        if any(path.iterdir()):
            raise FileExistsError(f"{path} already exists and is not empty")
    else:
        path.mkdir(parents=True)

def get_tests_with_tracking(tracking_files, id_to_test_map):
    with zipfile.ZipFile(tracking_files, 'r') as z:
        file_names = z.namelist()

    pattern = re.compile(r"test_id_(\d+)\.txt")    
    
    # Step 1: filter files matching 'test_id_{x}.txt'
    test_ids = ['test_id_' + m.group(1)
                for fname in file_names
                if (m := pattern.search(fname))]
    
    # Step 2: map test IDs to test names
    test_names = [id_to_test_map[tid] for tid in test_ids]

    return test_names

def get_tests_with_results(stdout, output):
    # If output JSON already exists, load and return it
    if output.exists():
        with open(output, 'r') as f:
            result = json.load(f)
        print(f"Loaded results from existing file: {output}")
        
        return result
    
    with open(stdout, 'r') as f:
        lines = f.readlines()

    tests = [x for x in lines if x.startswith('webgpu:')]

    # Use a dict comprehension with the helper function
    result = {
        test.split(" - ", 1)[0]: extract_status(test.split(" - ", 1)[1])
        for test in tests
        if " - " in test
    }
    
    with open(output, 'w') as f:
        json.dump(result, f, indent=2)

    return result

def extract_status(status_part: str) -> str:
    """Return 'pass', 'fail', or 'skip' based on the text, or 'unknown'."""
    status_part = status_part.rstrip(":").lower()
    if "pass" in status_part:
        return "pass"
    elif "fail" in status_part:
        return "fail"
    elif "skip" in status_part:
        return "skip"
    else:
        return "unknown"


def make_test_df(test_result_dict, tracked_tests):
    # Convert test_result_dict to DataFrame
    df_results = pd.DataFrame(
        list(test_result_dict.items()), columns=["test_name", "result"]
    )

    # Convert tracked_tests to DataFrame
    df_tracked = pd.DataFrame(tracked_tests, columns=["test_name"])
    df_tracked["tracked"] = 1

    # Merge with all tracked_tests to see if any are missing in test_result_dict
    df_merged = df_tracked.merge(df_results, on="test_name", how="left")

    # Fill NaN in 'tracked' (should always be 1) and 'result'
    missing_results = df_merged[df_merged["result"].isna()]["test_name"].tolist()
    if missing_results:
        print("Warning: These tracked tests are missing in test_result_dict:")
        for test in missing_results:
            print("  ", test)

    # Now merge df_results with tracked info to get full DataFrame
    df_results = df_results.merge(df_tracked, on="test_name", how="left")
    df_results["tracked"] = df_results["tracked"].fillna(0).astype(int)

    return df_results

def collect_files(folder_path):
    """Return a list of all file paths under folder_path."""
    file_paths = []
    for root, _, files in os.walk(folder_path):
        for name in files:
            file_paths.append(os.path.join(root, name))
    return file_paths


def compress(folder_path, output_zip):
    files = collect_files(folder_path)

    with zipfile.ZipFile(output_zip, "w", zipfile.ZIP_DEFLATED) as zipf:
        for file in tqdm(files, desc="Compressing", unit="file"):
            arcname = os.path.relpath(file, folder_path)
            zipf.write(file, arcname)

    return files  # important: exact list that was zipped


def delete_files(files):
    for file in tqdm(files, desc="Deleting originals", unit="file"):
        try:
            os.remove(file)
        except FileNotFoundError:
            pass

def get_mutants_from_file(file: Path):
    
    try:
        with open(file, 'r') as f:
            mutants = f.readlines()
    except FileNotFoundError:
        print('Problem with file')
        mutants = []

    unique_mutants = list(sorted({int(m.strip()) for m in mutants}))

    return unique_mutants

def get_mutant_file(query: str, folder: Path):
    with open(folder / 'mapping_test_to_id.json') as f:
        mapping = json.load(f)

    test_id = mapping[query]

    return folder / f'{test_id}.txt'

def remove_empty_dirs(root):
    """Remove empty directories bottom-up."""
    for current, dirs, _ in os.walk(root, topdown=False):
        for d in dirs:
            path = os.path.join(current, d)
            try:
                os.rmdir(path)
            except OSError:
                pass

def get_mutant_to_test_mapping(tracking_archive, output_path):

    mutant_to_test_mapping = {}

    with zipfile.ZipFile(tracking_archive, 'r') as z:
        files = z.infolist()
        n_files = len(files)
        for i, info in enumerate(files):
            print(f'Processing file {i} of {n_files}')
            if not info.is_dir():

                with z.open(info.filename) as f:
                    text = f.read().decode('utf-8')
                    
                    numbers = [int(line) for line in text.splitlines()]
                    unique_ids = sorted(set(numbers))
                    
                    # Store mapping as list because they are more memory-efficient
                    # than sets. If we use sets here, we run out of memory
                    for mutant in unique_ids:
                        if mutant not in mutant_to_test_mapping.keys():
                            mutant_to_test_mapping[mutant] = []
                        
                        test_id = Path(info.filename).stem.removeprefix('test_id_')
                        mutant_to_test_mapping[mutant].append(test_id)
                    
    # Deduplicate
    mutant_to_test_mapping = {k: list(sorted(set(v))) for k, v in mutant_to_test_mapping.items()}
    
    # Write out ot csv
    print(f'Writing to {output_path}...')
    try:
        with open(output_path, "w", newline="", encoding="utf-8") as f:
            writer = csv.writer(f)
            writer.writerow(["mutant_id", "test_id"])  # header

            for mutant_id, test_ids in mutant_to_test_mapping.items():
                for test_id in test_ids:
                    writer.writerow([mutant_id, test_id])
    except Exception as e:
        raise RuntimeError(f'Problem writing to csv!: \n {e}')

    print(f'Finished writing to {output_path}!')
    
def track_wgslsmith(tracking_dir : Path, 
    program_dir : Path, 
    mesa_vk_icd : Path,
    dawn_node : Path,
    n : int = 1):
    for i in range(n):
        print(f'Running wgslsmith program {i+1} of {n}')
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
            run_cts(cts, 
                dawn, 
                mesa_vk_icd, 
                output_name = f'tracking/tracking_run_{i}', 
                tracking_file = tracking_file)

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

    for filename in filepath.rglob('*.txt'):
        file = os.path.join(filepath, filename)
        with open(file) as f:
            mutants = set(f.readlines())

        all_mutants = all_mutants.union(mutants)

    return all_mutants

if __name__=="__main__":
    main()
