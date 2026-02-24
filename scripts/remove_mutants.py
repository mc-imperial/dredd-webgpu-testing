import csv
import argparse
import json
import pandas as pd
from pathlib import Path

def main():
    args = argparse.ArgumentParser()
    
    args.add_argument('mutant_map',
            type=str,
            help='Map of mutant ID to the test IDs that touch it in long csv format')
    args.add_argument('test_map',
            type=str,
            help='Map of test name to test ID in json format')
    args.add_argument('remove',
            type=str,
            help='List of mutants for removal in long csv format')
 
    args = args.parse_args()

    print(f'Loading mutant data')
    df = pd.read_csv(args.mutant_map)
    remove = pd.read_csv(args.remove)

    print(f'Filtering mutants')
    filtered_df = df[~df["mutant_id"].isin(remove["unique_id"])]

    print(f'Loading test data')
    with open(args.test_map, 'r') as f:
        name_to_id: dict = json.load(f)

    print(f'Mapping tests')
    id_to_name: dict = {int(v.removeprefix('test_id_')): k for k, v in name_to_id.items()}

    filtered_df['test_name'] = filtered_df["test_id"].map(id_to_name)

    if filtered_df['test_name'].isna().any():
        unmapped_ids = filtered_df.loc[filtered_df['test_name'].isna(), 'test_id'].unique()
        raise ValueError(f"Unmapped test_id(s) found: {unmapped_ids}")

    # Count how many times each mutant_id appears
    filtered_df['mutant_count'] = filtered_df.groupby('mutant_id')['mutant_id'].transform('count')

    # Sort ascending so least frequent mutants appear first
    filtered_df = filtered_df.sort_values(by='mutant_count', ascending=True)

    filtered_df.to_csv(Path(args.mutant_map).parent / 'mutants_to_kill.csv', index=False)
    
    unique_mutant_count = df["mutant_id"].nunique()
    unique_mutant_count_after_removal = filtered_df["mutant_id"].nunique()

    print(f'Number of mutants in map: {unique_mutant_count}')
    print(f'Number of mutants for removal: {len(remove)}')
    print(f'Remaining number of mutants for killing: {unique_mutant_count_after_removal}')

if __name__=="__main__":
    main()