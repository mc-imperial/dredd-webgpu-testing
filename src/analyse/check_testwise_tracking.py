import tempfile
import csv
import json
import shutil
import gzip
import random
import subprocess
import os
import argparse
import zipfile
import struct
import pandas as pd

from collections import Counter
from pathlib import Path

def main():
    args = argparse.ArgumentParser()
    
    args.add_argument('--compress',
            action='store_true',
            default=False)
    args.add_argument('--map',
            action='store_true',
            default=False)
    args.add_argument('--missing',
            action='store_true',
            default=False)
    args.add_argument('--dups',
            action='store_true',
            default=False,
            help='Check duplicate mutant IDs')
    args.add_argument('--rerun',
            action='store_true',
            default=False,
            help='Rerun some tests in isolation')
    args.add_argument('--base',
            type=str,
            default='/data/dev')
    
    args = args.parse_args()

    base = Path(args.base)
    working = Path(base, 'dredd-webgpu-testing')
    data = Path(working, 'data')
    output = Path(data, 'testwise_tracking_checks')

    tracking_files = Path(data, 'tracking_files_full_cts_031225.zip')
    mapping = Path(data, 'mapping_test_to_id_031225.json')
    stdout = Path(data, 'full_cts_stdout_031225.txt')

    if args.compress:
        compare_compressed(compressed, uncompressed, output)
    if args.map:
        tests = map_stdout_results(stdout, output)
        map_tests(compressed, mapping, tests, output)
    if args.missing:
        check_missing_tests(compressed, mapping, output)
    if args.dups:
        get_duplicates(tracking_files, output / 'dups', mapping, compressed=False)
    if args.rerun:
        run_isolated_tests(output)

def run_isolated_test(output: Path, test: str):
   
    env = os.environ.copy()
    env["MESA_SHADER_CACHE_DISABLE"]="true"
    
    pwd = '/data/dev/dredd-webgpu-testing/src'

    cmd = ['python', 
           'analyse/check_reset_entrypoint.py',
           '--query', test,
           '--base', '/data/dev',
           '--run_joint']

    result = subprocess.run(cmd, env=env, cwd=pwd)
    
    if result.returncode != 0:
        exit()

def get_dupes_from_file(file: Path) -> dict:
    with open(file, 'r') as f:
        lst = f.readlines()

    counter = Counter(lst)
    dupes = {item: count for item, count in counter.items() if count > 1}
    
    if len(dupes) > 0:
        print(f'File {file.stem} contains {len(dupes)} duplicates!')
        print(f'  Distribution of duplicates:\n  {Counter(dupes.values())}')
    else:
        print(f'File {file.stem} contains 0 duplicates')

    return dupes

def get_duplicates(folder: Path, out_dir: Path, mapping_json: Path, compressed: bool = False, sample_size=10):
    ''' 
        Gets a list of files that contain duplicate mutant IDs
        Just look at a random sample rather than every file
    '''
    with zipfile.ZipFile(folder, 'r') as z:
        files = z.namelist()

    print(f'There are {len(files)} files')
    
    sample = random.sample(files, sample_size)

    extract(folder, out_dir, sample)
    
    if compressed:
        with tempfile.TemporaryDirectory() as tmpdir:
            tmp_path = Path(tmpdir)
            shutil.copytree(out_dir, tmp_path / out_dir.name)
            ungzip_files(tmp_path, out_dir) 

    print(f'\n========== Duplicate check ==========')

    tests_with_dup = []

    for file in out_dir.rglob('*.txt'):
        dupes = get_dupes_from_file(file)
        if len(dupes) > 0:
            tests_with_dup.append(file.stem)

    print(f'========== End duplicate check ==========\n')


    id_to_name = get_mapping(mapping_json)
    
    test_names = {id_to_name[x] : x for x in tests_with_dup}

    id_to_dupes = {}

    for name, test_id in test_names.items():
        isolated_output = out_dir / test_id 
        run_isolated_test(isolated_output, name)
        
        # Tracking file is output to /data/tracking_files
        for out_file in Path('/data/dev/dredd-webgpu-testing/data/tracking_files').rglob('*.txt'):
            dupes = get_dupes_from_file(out_file)
            id_to_dupes[test_id] = dupes

    print(f'\n========== Duplicate check ==========')

    tests_with_dup = []

    for file in out_dir.rglob('*.txt'):
        dupes = get_dupes_from_file(file)
        if len(dupes) > 0:
            tests_with_dup.append(file.stem)

    print(f'========== End duplicate check ==========\n')


    for test_id, dupes in id_to_dupes.items():
        print(f'\nTest id: {test_id}')
        print(f'Test name: {id_to_name[test_id]}')
        print(f'Duplicates:\n {len(dupes)}')

def map_stdout_results(stdout: Path, output: Path):
    '''
    Read stdout to record which tests passed, failed, and were skipped
    '''
    with open(stdout, 'r') as f:
        lines = f.readlines()

    tests = [x for x in lines if x.startswith('webgpu:')]

    tests = [get_result(x) for x in tests]

    return dict(tests)

def get_result(line: str):
    results = {' - pass' : 'pass',
               ' - fail' : 'fail',
               ' - skip' : 'skip'
               }

    for result, clean_result in results.items():
        if result in line:
            test = line[:line.find(result)]
            return (test, clean_result)
        

    # If we reach the end of the loop, it means
    # we didn't match the line!
    raise RuntimeError(f'Problem with line:\n{line}')

def get_mapping(mapping_json: Path) -> dict:
    with open(mapping_json, 'r') as f:
        mapping = json.load(f)

    inverse_map = {v: k for k, v in mapping.items()}
 
    return inverse_map

def map_tests(archive: Path, mapping_json: Path, test_outcomes: dict, output: Path):
    ''' 
    Maps test ID names to actual test names to check
    which ones are missing
    '''
    
    output_present = Path(output, 'present_tests.csv')
    output_missing = Path(output, 'missing_tests.csv')
    output_df = Path(output, 'mapped_tests.csv')

    # Get test name to id mapping
    with open(mapping_json, 'r') as f:
        mapping = json.load(f)

    df = pd.DataFrame(mapping.items(), columns = ["test_name","test_id"])
    df['test_id_int'] = df['test_id'].str.removeprefix('test_id_')
    
    # Get tests that produced tracking files
    with zipfile.ZipFile(archive, 'r') as z:
        test_files = z.namelist()

    present_ids = [Path(x).stem for x in test_files]
    present_ids.remove('tracking_files')
    
    # Match present tests to mapping
    df['tracking_file_exists'] = df['test_id'].isin(present_ids).astype(int)
    df.sort_values(['test_name'], inplace=True)

    # Match test outcome to test
    df['outcome'] = df['test_name'].map(test_outcomes)
    num_nans = df['outcome'].isna().sum()
    if num_nans > 0:
        raise RuntimeError(f'{num_nans} tests do not have outcomes!')

    # Get test subgroups
    df['test_folder'] = df['test_name'].str.extract(r'^[^:]*:([^:]*)')
    split_cols = df['test_folder'].str.split(',', expand=True)
    split_cols = split_cols.add_prefix('folder_l')
    df = df.join(split_cols)

    df = df[df['outcome'] == 'pass']

    # Show percentage of tracked files for overall tests
    grouplist = ["folder_l0", "folder_l1"]
    show_grouping(df, grouplist)

    # Show percentage of tracked files for shader tests
    df_shader = df[df["folder_l0"] == "shader"]
    grouplist = ["folder_l0", "folder_l1", "folder_l2"]
    show_grouping(df_shader, grouplist)

    # Show percentage of tracked files for shader expression tests
    df_shader_expr = df_shader[
            (df_shader["folder_l1"] == "execution") & 
            (df_shader["folder_l2"] == "expression")
            ]
    grouplist = ["folder_l0", "folder_l1", "folder_l2", "folder_l3"]
    show_grouping(df_shader_expr, grouplist)

    # Show percentage of tracked files for expr call - this is missing the most
    df_shader_expr_call = df_shader_expr[
            (df_shader_expr["folder_l3"] == "call") &
            (df_shader_expr["folder_l4"] == "builtin")
            ]
    grouplist = ["folder_l0", "folder_l1", "folder_l2", "folder_l3", "folder_l4", "folder_l5"]
    show_grouping(df_shader_expr_call, grouplist)

def show_grouping(df: pd.DataFrame, grouplist: list):
    grouped = df.groupby(grouplist)["tracking_file_exists"].agg(
        percent_tracked="mean",
        total_count="count"
    )

    grouped["percent_tracked"] = (grouped["percent_tracked"] * 100).round(2)
    with pd.option_context("display.max_rows", None):
        print(grouped)

def check_missing_tests(test_df_path: Path):
    
    test_df: pd.DataFrame = pd.read_csv(teset_df_path)

    shader_tests = [x for x in all_tests if 'webgpu:shader' in x]
    present_shader_tests = [x for x in present_tests.values() if 'webgpu:shader' in x]
    missing_shader_tests = [x for x in missing_tests.values() if 'webgpu:shader' in x]

    print(f'There are a total of {len(shader_tests)} shader tests')
    print(f'Of these, {len(missing_shader_tests)} are missing')
    print(f'And {len(present_shader_tests)} are present')

def write_tests_csv(out: Path, data: dict):
    sorted_dict = dict(sorted(data.items(), key=lambda item: item[0][0]))
    with open(out, 'w', newline='') as f:
        writer = csv.writer(f, delimiter='\t')
        for k,v in dict(sorted(sorted_dict.items())).items():
            writer.writerow([k,v])

def compare_compressed(compressed_dir: Path, 
        uncompressed_dir: Path,
        output: Path,
        sample_size: int = 10):
    ''' 
    Compares the output written to .txt.gz with the output
    written directly to .txt. The output written to .txt 
    has been compressed into a .zip folder, which we don't
    want to fully unzip because it is so big. We compare a
    random sample of the .txt.gz files to the .txt files
    '''

    with zipfile.ZipFile(compressed_dir, 'r') as z:
        compressed_files = z.namelist()

    with zipfile.ZipFile(uncompressed_dir, 'r') as z:
        uncompressed_files = z.namelist()

    print(f'There are {len(compressed_files)} compressed files')
    print(f'There are {len(uncompressed_files)} uncompressed files')

    files_in_both = set(compressed_files) & set(uncompressed_files)

    print(f'There are {len(files_in_both)} files in both compressed and uncompressed dirs')

    sample = random.sample(list(files_in_both), sample_size)

    # Get the compressed and uncompressed versions of the files from the zip archive
    compressed_output_dir = Path(output, 'compressed')
    uncompressed_output_dir = Path(output, 'uncompressed')
    compressed_processed_dir = Path(output, 'compressed_processed')

    extract(compressed_dir, compressed_output_dir, sample)
    extract(uncompressed_dir, uncompressed_output_dir, sample)

    # Process the compressed files to convert from .txt.gz to .txt
    ungzip_files(compressed_output_dir, compressed_processed_dir) 
    
    # Compare the mutants in each one
    compare_mutants(uncompressed_output_dir, compressed_processed_dir)

def compare_mutants(dir1: Path, dir2: Path):
    print(f'Comparing:')
    print(f' 1 - {dir1}')
    print(f' 2 - {dir2}')
    dir1_files = {x.name : x for x in dir1.rglob('*.txt')}
    dir2_files = {x.name : x for x in dir2.rglob('*.txt')}

    assert dir1_files.keys() == dir2_files.keys()

    for file in dir1_files.keys():
        with open(dir1_files[file],'r') as f:
            mutants1 = f.readlines()

        with open(dir2_files[file],'r') as f:
            mutants2 = f.readlines()

        print(f'\nOutput for {file}')
        print(f'There are {len(mutants1)} mutants in 1')
        print(f'There are {len(mutants2)} mutants in 2')
    
        if mutants1 != mutants2:
            print(f'Mutant mismatch for file {file}!')

            if Counter(mutants1) == Counter(mutants2):
                print(f'Mutant IDs are the same but the order differs')

            if set(mutants1) == set(mutants2):
                print(f'Mutant IDs are the same but number of duplicates differs')

            else:
                print(f'Some mutants differ!')    
                m1_minus_m2 = set(mutants1) - set(mutants2)
                m2_minus_m1 = set(mutants2) - set(mutants1)

                print(f'M1 / M2 : {len(m1_minus_m2)}')
                print(f'  Sample: {list(m1_minus_m2)[:10]}')
                print(f'M2 / M1 : {len(m2_minus_m1)}')
                print(f'  Sample: {list(m2_minus_m1)[:10]}')
        else:
            print(f'Mutants all match for file {file}!')

def extract(archive: Path, extract_dir: Path, files_to_extract: list):
    
    clear_dir(extract_dir)

    print(f'Extracting {len(files_to_extract)} files from {archive} to {extract_dir}')
    
    try:
        with zipfile.ZipFile(archive, 'r') as z:
            for file in files_to_extract:
                try:
                    z.extract(file, path=extract_dir)
                except Exception as e:
                    print(f'Problem with file {file}')
    except Exception as e:
        print('Problem with extraction!')
        print(e)
        raise RuntimeError

    print('Extraction completed successfully')

def clear_dir(folder: Path):
    if folder.exists() and folder.is_dir():
        shutil.rmtree(folder)

    folder.mkdir(parents=True, exist_ok=True)

def ungzip_files(folder: Path, dest: Path):
    dest.mkdir(parents=True, exist_ok=True)
    clear_dir(dest)
    dest.mkdir(parents=True, exist_ok=True)

    for file in folder.rglob('*'):
        file_path = os.path.join(folder, file)
        dest_path = os.path.join(dest, file.name)
        
        if os.path.isfile(file_path):
            ungzip_file(file_path, dest_path)

    print(f'Files ungzipped from {folder} to {dest}')

def ungzip_file(file: Path, dest: Path):
    print(f'Reading file {file}')
    with gzip.open(file, 'rb') as f:
        numbers = [struct.unpack('i', chunk)[0] for chunk in iter(lambda: f.read(4), b'')]
    
    print(f'Writing to file {dest}')
    with open(dest, 'w') as f:
        f.writelines(f'{num}\n' for num in numbers)

if __name__=="__main__":
    main()
