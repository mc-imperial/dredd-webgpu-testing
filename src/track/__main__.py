import subprocess
import os
import argparse
import zipfile
import csv
from tqdm import tqdm
from pathlib import Path
from typing import List, Set

from run.cts.map import map_mutants
from run.cts.utils import run_cts
from run.wgslsmith.utils import run_wgslsmith_program

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

    args = parser.parse_args()
    
    args.output.mkdir(parents=True,exist_ok=True)

    if args.tracker == 'cts':
        track_cts(args)


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
        

def track_cts(args):

    output = args.output
    tracking_output = f'{str(args.output)}/tracking_files'
    compressed_output = f'{str(args.output)}/tracking_files.zip'
    mapping_csv = Path(output / 'mapping_mutant_id_to_tests.csv')
    
    # Gather tracking data
    run_cts(args.cts, 
        dawn=args.dawn, 
        outdir=output,
        vk_icd=args.vk_icd,
        query=args.query,
        tracking=True)

    # Compress output
    files = compress(tracking_output, compressed_output)
    delete_files(files)
    remove_empty_dirs(tracking_output)

    # Get mutant - to - test mapping
    get_mutant_to_test_mapping(compressed_output, mapping_csv)

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
            run_cts(cts, dawn, mesa_vk_icd, output_name = f'tracking/tracking_run_{i}', tracking_file = tracking_file)

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

    for filename in os.listdir(filepath):
        file = os.path.join(filepath, filename)
        with open(file) as f:
            mutants = set(f.readlines())

        all_mutants = all_mutants.union(mutants)

    return all_mutants

if __name__=="__main__":
    main()
