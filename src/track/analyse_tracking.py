import random
import json
import os
import sys 
import pandas as pd
from pathlib import Path

sys.path.insert(0, '/home/ubuntu/dev/dredd-webgpu-testing/src')
from run.cts.utils import run_cts
from run.cts.map import process_test_wise_tracking

base = Path("/home/ubuntu/dev/dredd-webgpu-testing/data")
track = Path(base, "mapping_mutant_to_query_list.csv")
mapping = Path(base, "mapping_test_to_id.json") 
tracking_files = Path(base, "tracking_files")
test_tracked = Path(base, "test_tracked")
test_untracked = Path(base, "test_untracked")

home = Path("/home/ubuntu/dev")
cts = Path(home, "webgpu_cts")
dawn = Path(home, "dawn")
vk_icd = Path(home, "mesa_tracked", "build/install/share/vulkan/icd.d/lvp_icd.x86_64.json")

def main():
    generate_mutant_to_test_csv()

def generate_mutant_to_test_csv():
    '''
    Generates the mapping from mutant ID to list of test
    queries that cover that mutant based on generated 
    tracking files that exist in the test tracking directory
    Note this might be from an incomplete run
    '''

    output_dir = base
    output_file = 'mapping_mutant_to_query.csv'
    process_test_wise_tracking(tracking_files, output_dir, output_file)

def check_tracking_file_creation():
    '''
    Many query IDs do not have an associated tracking file. 
    Assert that when we run these queries standalone, no 
    tracking file is produced and no mutants are covered.
    Otherwise,there is some problem with our tracking file
    creation.
    '''

    # Get list of tracking file IDs
    tracked_ids = []

    for file in os.listdir(tracking_files):
        tracked_ids.append(file[:-4])

    # Get list of all query IDs
    with open(mapping,'r') as f:
        query_to_id = json.load(f)

    all_ids = list(query_to_id.values())

    # Get queries (and associated file IDs) that do not 
    # have an associated tracking file
    untracked_ids = list(set(all_ids).difference(set(tracked_ids)))

    assert(len(all_ids) == len(tracked_ids) + len(untracked_ids))

    # Run 100 of these queries in a standalone way
    # (not with test-wise tracking enabled) and check
    # whether a tracking file is produced. If we see any
    # tracking files, this means our tracking file
    # creation is not working

    print('id to query')
    id_to_query = {v:k for k,v in query_to_id.items()}

    all_queries = list(query_to_id.keys())
    
    print('get tracked_queries')
    tracked_queries = [q for q in all_queries if query_to_id[q] in tracked_ids]

    print(f'get untracked_queries')
    untracked_queries = list(set(all_queries).difference(tracked_queries))

    tracked_sample = random.choices(tracked_queries, k=100)
    untracked_sample = random.choices(untracked_queries, k=100)
    
    for t in ['tracked', 'untracked']:

        print(f'Running {t} sample')
        
        sample = tracked_sample if t == 'tracked' else untracked_sample
        folder = test_tracked if t == 'tracked' else test_untracked

        for q in sample:
            dredd_covered_mutants_path = str(folder) + '/' + query_to_id[q] + '.txt'
             
            print(f'Running query: {q}')
            print(f'Tracking file: {dredd_covered_mutants_path}')
    
            run_cts(cts,
            dawn,
            dredd_covered_mutants_path,
            query = q,
            vk_icd = vk_icd)
        

def check_mutant_appearences():

    track_df = pd.read_csv(track, sep=' ')

    track_df.sort_values('mutant_id', inplace = True)

    print(track_df.head(10))

    print(track_df.tail(10))

    i = 0
    files = 0

    for file in os.listdir(tracking_files):
        
        with open(Path(tracking_files, file),'r') as f:
            data = f.readlines()
            data = [line.rstrip('\n') for line in data]
        
        if '10' in data:
            print(f'mutant 10 appearence: {i} in file {file}')
            i += 1

        files = files + 1

    print(f'Total appearences of mutant 10: {i}\n')
    print(f'Total generated tracking files: {files}')

    # Get list of all query IDs
    with open(mapping,'r') as f:
        query_to_id = json.load(f)

    ids = set(list(query_to_id.values()))

    print(f'Total queries (i.e. potential tracking files): {len(ids)}')

if __name__=="__main__":
    main()
