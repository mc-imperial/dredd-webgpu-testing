import subprocess
import os
from pathlib import Path
import numpy as np
import sys
import json
import pandas as pd

from mutate.mutate_mesa import clean, get_files_for_mutation, mutate
from run.cts.utils import run_cts
from run.wgslsmith.utils import run_wgslsmith_program

class QueryList:
    def __init__(self, queries):
        self.queries : set[str] = queries
        self.length : int = len(self.queries)

def map_mutants(cts : Path,
    dawn : Path,
    tracking_dir : Path,
    output_dir : Path,
    vk_icd : Path = None,
    query : str = 'webgpu:*'):
    
    # Run CTS with tracking
    tracking_file = Path(tracking_dir,'tracking.txt')
    query_map_file = Path(tracking_dir,'query_map.json')
    
    run_cts(cts, 
        dawn, 
        tracking_file, 
        query_map_file=query_map_file, 
        vk_icd=vk_icd,
        query=query)

    # Process tracking information to produce mutant mapping files
    process_test_wise_tracking(tracking_dir, output_dir, query_map)

def process_test_wise_tracking(tracking_dir : Path, output_dir : Path, query_map : Path):

    mutant_to_test_mapping = {}

    with open(query_map,'r') as f:
        test_to_id_map = json.load(f)

    id_to_test_map = {v : k for k,v in test_to_id_map.items()}
    
    n_files = len(os.listdir(tracking_dir))
    for i,file in enumerate(tracking_dir.iterdir()):

        print(f'Processing file {i} of {n_files}: {file.stem}')

        with open(file,'r') as f:
            for line in f:
                mutant = line.rstrip()
                if mutant not in mutant_to_test_mapping.keys():
                    mutant_to_test_mapping[mutant] = set()

                query = id_to_test_map[file.stem]

                # Transform query into runnable string
                if query[-1] == ':' or query[-1] == ',':
                    query = query + '*'

                mutant_to_test_mapping[mutant].add(query)

    # Convert to df
    mutant_to_test_mapping = {mutant : ' '.join(queries) for mutant, queries in mutant_to_test_mapping.items()}

    mutant_df = pd.DataFrame.from_dict(mutant_to_test_mapping, orient = 'index', columns = ['queries'])
    mutant_df.index.rename('mutant_id', inplace=True)
    print(mutant_df.head(10))
    mutant_df['n_tests'] = mutant_df['queries'].apply(lambda x: len(str(x).split(' ')))
    print(mutant_df.head(10))
    mutant_df = mutant_df.sort_values(by='n_tests')
    print(mutant_df.head(10))

    mutant_df.to_csv(Path(output_dir,'mapping_mutant_to_query_list.csv'), index_label='mutant_id')

def get_least_covered_mutants(mutant_to_test_mapping : Path,
    covered_mutant_ids : Path,
    sample : int = None,
    cts_tracking : Path = None, 
    wgslsmith_tracking : Path = None) -> list[str]:

    if mutant_to_test_mapping.is_file():
        mutant_to_test_mapping = pd.read_csv(mutant_to_test_mapping)

    # Get mutants covered by wgslsmith also
    if covered_mutant_ids.is_file():
        with open(covered_mutant_ids, 'r') as f:
            all_mutants_to_kill = [x.rstrip() for x in f.readlines()]
    else:
        all_mutants_to_kill = get_mutants_to_kill(cts_tracking, wgslsmith_tracking, covered_mutant_ids)

    # Filter the mutants for those also covered by wgslsmith
    mask = mutant_to_test_mapping['mutant_id'].isin([int(x) for x in all_mutants_to_kill])
    mutant_to_test_mapping = mutant_to_test_mapping[mask] 

    if sample == None:
        sample = len(mutant_to_test_mapping)

    mutant_to_test_mapping.sort_values('n_tests',ascending=True,inplace=True)

    mutant_sample = mutant_to_test_mapping.head(sample)
    
    mutants = list(mutant_sample['mutant_id'])
    
    return mutants

def get_mutants_to_kill(cts_tracking, wgslsmith_tracking, mutant_file, n_sample=None) -> list[str]:

    coverage = process_tracking(cts_tracking, wgslsmith_tracking)

    if target_mutants == 'cts_intersect_wgslsmith':
        with open(mutant_file,'w') as f:
            f.writelines(coverage['covered_by_both'])

        mutants = coverage['covered_by_both']

    elif target_mutants == 'wgslsmith_only':
        with open(mutant_file,'w') as f:
            f.writelines(coverage['covered_by_wgslsmith_only'])

        mutants = coverage['covered_by_wgslsmith_only']

    # Sample mutants if required
    if n_sample is None:
        return mutants

    mutant_sample = sample(mutants, n_sample)

    return mutant_sample

    
def track_mesa(mesa, dredd, mutation_dir, info_file, compile_commands):

    clean(mesa)

    mutation_files = get_files_for_mutation(compile_commands, 
                                        mutation_dir, 
                                        mesa)

    mutate(dredd,
        mutation_files,
        info_file,
        compile_commands,
        mesa,
        track_only=True)

    build(mesa)
    install(mesa)

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
    base = Path('/data/dev/dredd-webgpu-testing/llvmpipe')
    tracking_dir = Path(base, 'output', 'covered_by_cts', 'test_wise_tracking', 'tracking_files')
    output_dir = Path(base, 'output', 'covered_by_cts', 'test_wise_tracking')
    mapping = Path(base, 'output', 'covered_by_cts', 'test_wise_tracking', 'mapping_test_to_id.json' )
    process_test_wise_tracking(tracking_dir, output_dir, mapping)