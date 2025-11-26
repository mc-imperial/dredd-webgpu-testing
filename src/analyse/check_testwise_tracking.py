import subprocess
import os
import argparse
import zipfile

from pathlib import Path

def main():
    args = argparse.ArgumentParser()
    
    args.add_argument('--compress',
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

    compressed = Path(data, 'tracking_files_compressed.zip')
    uncompressed = Path(data, 'tracking_files.zip') 

    if args.compress:
        compare_compressed(compressed, uncompressed, output)

def compare_compressed(compressed: Path, 
        uncompressed: Path,
        output: Path,
        sample_size: int = 10):
    ''' 
    Compares the output written to .txt.gz with the output
    written directly to .txt. The output written to .txt 
    has been compressed into a .zip folder, which we don't
    want to fully unzip because it is so big. We compare a
    random sample of the .txt.gz files to the .txt files
    '''

    with zipfile.ZipFile(compressed, 'r') as z:
        compressed_files = z.namelist()

    with zipfile.ZipFile(uncompressed, 'r') as z:
        uncompressed_files = z.namelist()

    print(f'There are {len(compressed_files)} compressed files')
    print(f'There are {len(uncompressed_files)} uncompressed files')

    files_in_both = set(compressed_files) & set(uncompressed_files)

    print(f'There are {len(files_in_both)} files in both compressed and uncompressed dirs')

    sample = random.sample(files_in_both, sample_size)

    # Get the compressed and uncompressed versions of the files from the zip archive
    compressed_files_dir = Path(output, 'compressed')
    uncompressed_files_dir = Path(output, 'uncompressed')

    extract(compressed_files, sample, compressed_files_dir)
    extract(uncompressed_files, sample, uncompressed_files_dir)

def extract(archive: Path, files_to_extract: list, extract_dir: Path):
    with zipfile.ZipFile(archive, 'r') as z:
        for file in files_to_extract:
            z.extract(file, path=extract_dir)
 
if __name__=="__main__":
    main()
