import pandas as pd
import argparse
from tqdm import tqdm

def ascii_histogram(mutant_test_counts, bins, max_bar_width=50):
    """Display histogram using ASCII bars."""
    counts = []
    for i in range(len(bins) - 1):
        lower, upper = bins[i], bins[i+1]
        count = ((mutant_test_counts >= lower) & (mutant_test_counts < upper)).sum()
        counts.append((f"{lower}-{upper-1}", count))
    last_bin_count = (mutant_test_counts >= bins[-1]).sum()
    counts.append((f">= {bins[-1]}", last_bin_count))

    # Scale bars to max_bar_width
    max_count = max(count for _, count in counts)
    print("\nHistogram of mutants by number of touching tests:")
    for label, count in counts:
        bar_length = int((count / max_count) * max_bar_width) if max_count > 0 else 0
        bar = '#' * bar_length
        print(f"{label:>10} | {bar} ({count})")

def load_large_csv_with_progress(filepath, chunksize=10_000):
    """Load a large CSV in chunks with a progress bar."""
    total_rows = sum(1 for _ in open(filepath)) - 1  # subtract header
    chunks = []
    with tqdm(total=total_rows, desc=f"Loading {filepath}") as pbar:
        for chunk in pd.read_csv(filepath, chunksize=chunksize):
            chunks.append(chunk)
            pbar.update(len(chunk))
    df = pd.concat(chunks, ignore_index=True)
    return df

def analyze(mutant_tests_fp, init_mutants_fp):
    # Load CSVs
    df = load_large_csv_with_progress(mutant_tests_fp)
    init_df = pd.read_csv(init_mutants_fp)

    # Ensure correct columns
    assert 'mutant_id' in df.columns and 'test_id' in df.columns, \
        "Mutant-Test CSV must have 'mutant_id' and 'test_id'"
    assert 'unique_id' in init_df.columns, \
        "Initialisation CSV must have 'unique_id' column"

    # Unique mutant IDs
    unique_mutants = df['mutant_id'].nunique()
    print(f"\nTotal unique mutants: {unique_mutants}")

    # Mutants in initialization CSV
    init_mutants = set(init_df['unique_id'])
    print(f"Mutants in initialization CSV: {len(init_mutants)}")

    # Compute number of tests per mutant
    mutant_test_counts = df.groupby('mutant_id')['test_id'].nunique()

    # Define histogram bins
    bins = [0, 10, 50, 100, 500, 1000]

    # Display histogram
    ascii_histogram(mutant_test_counts, bins)

    # Remove initialization mutants and repeat
    filtered_mutants = mutant_test_counts[~mutant_test_counts.index.isin(init_mutants)]
    print("\nAfter removing initialization mutants:")
    print(f"Unique mutants remaining: {filtered_mutants.shape[0]}")
    ascii_histogram(filtered_mutants, bins)

def main():
    parser = argparse.ArgumentParser(description="Analyze mutant-test coverage.")
    parser.add_argument("mutant_tests_csv", help="CSV with columns 'mutant_id' and 'test_id'")
    parser.add_argument("initialisation_csv", help="CSV with column 'unique_id' for initialization mutants")
    args = parser.parse_args()

    analyze(args.mutant_tests_csv, args.initialisation_csv)

if __name__ == "__main__":
    main()