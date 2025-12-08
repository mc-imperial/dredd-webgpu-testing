import csv
import zipfile
from pathlib import Path
from tqdm import tqdm

def main():
    base = Path('/data/dev/dredd-webgpu-testing')
    tracking_archive = base / 'data' / 'tracking_files_full_cts_031225.zip'
    output_path = base / 'data' / 'mutant_id_to_test_id_mapping_031225.csv'

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

if __name__ == "__main__":
    main()
