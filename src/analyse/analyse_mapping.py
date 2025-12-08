from pathlib import Path
import gzip
import csv
from collections import Counter
from tqdm import tqdm  # pip install tqdm
import math
import argparse
import matplotlib.pyplot as plt
from typing import List, Tuple

TOTAL_ROWS=1389833509

def main():
    args = argparse.ArgumentParser()
    
    args.add_argument('--process-raw',
            action='store_true',
            default=False)
    args.add_argument('--analyse-count',
            action='store_true',
            default=False)
    args.add_argument('--base',
            type=str,
            default='/data/dev')
    
    args = args.parse_args()

    base = Path(args.base, 'dredd-webgpu-testing', 'data')
    output = Path(base, 'mapping_analysis')

    mapping_csv = Path(base, 'mutant_id_to_test_id_mapping_031225.csv.gz')
    test_count_csv = Path(base, 'mutant_test_counts_031225.csv')

    if args.process_raw:
        process_raw_data(mapping_csv, test_count_csv)
    if args.analyse_count:
        analyse_count(test_count_csv)

def load_counts(data: Path) -> List[int]:
    counts = []
    with open(data, newline='') as f:
        reader = csv.DictReader(f)
        for row in reader:
            counts.append(int(row["test_count"]))
    return counts


def compute_summary(counts: List[int]) -> Tuple[int, int, int, int, int, int]:
    total = len(counts)
    zero_count = sum(1 for x in counts if x == 0)
    one_count = sum(1 for x in counts if x == 1)
    two_count = sum(1 for x in counts if x == 2)
    max_val = max(counts)
    max_count = sum(1 for x in counts if x == max_val)

    return total, zero_count, one_count, two_count, max_val, max_count


def ascii_histogram(counts: List[int], buckets: int, title: str):
    """Returns bucket_size and bucket_counts."""
    if not counts:
        print(f"\n{title}: No data\n")
        return None, None

    max_tests = max(counts)
    bucket_size = max_tests / buckets if buckets else max_tests
    bucket_counts = [0] * buckets

    for c in counts:
        idx = min(int(c // bucket_size), buckets - 1)
        bucket_counts[idx] += 1

    max_bucket_value = max(bucket_counts) if bucket_counts else 0
    max_bar_width = 50

    print(f"\n{title}")
    print("=" * len(title))

    for i, count in enumerate(bucket_counts):
        start = int(i * bucket_size)
        end = int((i + 1) * bucket_size)
        if max_bucket_value > 0:
            bar_len = int((count / max_bucket_value) * max_bar_width)
        else:
            bar_len = 0
        bar = "#" * bar_len
        print(f"{start:6} - {end:6} | {bar} ({count})")

    return bucket_size, bucket_counts


def extract_bucket_data(counts: List[int], bucket_index: int, bucket_size: float) -> List[int]:
    """Return the subset of counts that fall into the requested bucket."""
    start = bucket_index * bucket_size
    end = (bucket_index + 1) * bucket_size
    return [c for c in counts if start <= c < end]


def analyse_count(data: Path):
    counts = load_counts(data)

    total, zero, one, two, max_val, num_max = compute_summary(counts)

    print("\nSummary Statistics")
    print("==================")
    print(f"Total mutants: {total}")
    print(f"Mutants with 0 tests: {zero}")
    print(f"Mutants with 1 test: {one}")
    print(f"Mutants with 2 tests: {two}")
    print(f"Max tests for a mutant: {max_val}")
    print(f"Number of mutants at max: {num_max}")

    # 1️⃣ Full Histogram
    full_size, full_bucket_counts = ascii_histogram(
        counts, buckets=50, title="Full Histogram"
    )

    # Determine second zoom boundary → lowest bucket is index 0
    low_subset = extract_bucket_data(counts, bucket_index=0, bucket_size=full_size)

    # 2️⃣ Histogram of lowest bucket
    low_size, low_counts = ascii_histogram(
        low_subset, buckets=25, title="Zoom-Level 2 (Low Coverage Range)"
    )

    # Now zoom lowest bucket of that → still index 0
    low_low_subset = extract_bucket_data(low_subset, bucket_index=0, bucket_size=low_size)

    # 3️⃣ Histogram of the lowest bucket of the lowest bucket
    ascii_histogram(
        low_low_subset, buckets=20, title="Zoom-Level 3 (Lowest of Low Coverage)"
    )

def analyse_count_with_matplotlib(data: Path):
    counts = []

    # Read CSV
    with open(data, newline='') as f:
        reader = csv.DictReader(f)
        for row in reader:
            counts.append(int(row["test_count"]))

    # Number of mutants with 0 tests
    num_zero = sum(1 for x in counts if x == 0)

    # Maximum tests
    max_tests = max(counts)

    # Number of mutants with max tests
    num_max = sum(1 for x in counts if x == max_tests)

    # Print summary stats
    print("\nSummary Statistics")
    print("==================")
    print(f"Total mutants: {len(counts)}")
    print(f"Mutants with 0 tests: {num_zero}")
    print(f"Maximum number of tests for a single mutant: {max_tests}")
    print(f"Mutants with maximum number of tests: {num_max}")

    # Histogram plot
    plt.figure()
    plt.hist(counts, bins=50)  # bucket count fixed at 50
    plt.title("Histogram of Test Counts per Mutant")
    plt.xlabel("Number of tests")
    plt.ylabel("Number of mutants")
    plt.show()


def process_raw_data(mapping_csv: Path, output_file: Path):
    # Step 1: Count total rows for progress bar
    total_rows = TOTAL_ROWS 
    print(f"Total rows in CSV (excluding header): {total_rows:,}\n")
    
    # Step 2: Count tests per mutant with progress bar
    distribution = count_all_mutants_with_tqdm(mapping_csv, total_rows=total_rows)
    
    # Step 3: Print summary
    print(f"\nTotal unique mutants: {len(distribution)}")
    print("First 20 mutants and their test counts:")
    for i, (mutant_id, count) in enumerate(distribution.items()):
        print(mutant_id, count)
        if i >= 19:
            break

    # Step 4: Generate bucketed histogram
    print("\nBucketed histogram of number of tests per mutant:")
    generate_bucketed_histogram(distribution, num_buckets=20)
    
    # Step 5: Write counts to CSV
    print(f"\nWriting results to {output_file}...")

    with open(output_file, "w", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(["mutant_id", "test_count"])  # header
        for mutant_id, count in distribution.items():
            writer.writerow([mutant_id, count])

    print("Done.")

def count_all_mutants_with_tqdm(archive: Path, total_rows: int):
    """
    Count tests per mutant from a gzipped CSV, showing a dynamic tqdm progress bar.
    """
    counts = Counter()
    
    with gzip.open(archive, "rt") as f:
        reader = csv.reader(f)
        next(reader)  # skip header
        
        with tqdm(total=total_rows, desc="Processing rows", unit="rows") as pbar:
            for row in reader:
                mutant_id = row[0]
                counts[mutant_id] += 1
                pbar.update(1)
    
    return counts

def generate_bucketed_histogram(counts: Counter, num_buckets: int = 20):
    """
    Generate a histogram of counts grouped into buckets.
    """
    if not counts:
        print("No data to create histogram.")
        return

    max_tests = max(counts.values())
    bucket_size = math.ceil(max_tests / num_buckets)

    # Initialize buckets
    buckets = [0] * num_buckets

    for test_count in counts.values():
        index = min((test_count - 1) // bucket_size, num_buckets - 1)
        buckets[index] += 1

    # Print buckets
    for i, num_mutants in enumerate(buckets):
        start = i * bucket_size + 1
        end = (i + 1) * bucket_size
        print(f"{num_mutants} mutants have {start}-{end} tests")

if __name__ == "__main__":
    main()

