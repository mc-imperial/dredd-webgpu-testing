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
    args.add_argument('--base',
            type=str,
            default='/data/dev')

    args = args.parse_args()

    base = Path(args.base)
    working = Path(base, 'dredd-webgpu-testing')
    data = Path(working, 'data')
    output = Path(data, 'testwise_tracking_checks')

    compressed = Path(data, 'tracking_files_compressed_take_2.zip')
    uncompressed = Path(data, 'tracking_files.zip')
    mapping = Path(data, 'mapping_test_to_id.json')

    if args.compress:
        compare_compressed(compressed, uncompressed, output)
    if args.map:
        map_tests(compressed, mapping, output)
    if args.missing:
        check_missing_tests(compressed, mapping, output)
        
def map_tests(archive: Path, mapping_json: Path, output: Path):
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

    # Get test subgroups
    df['test_folder'] = df['test_name'].str.extract(r'^[^:]*:([^:]*)')
    split_cols = df['test_folder'].str.split(',', expand=True)
    split_cols = split_cols.add_prefix('folder_l')
    df = df.join(split_cols)

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
                z.extract(file, path=extract_dir)
    except Exception as e:
        print('Problem with extraction!')
        print(e)
        raise RuntimeError

    print('Extraction completed successfully')

def clear_dir(folder: Path):
    shutil.rmtree(folder)

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
