import json
import random
from pathlib import Path
from collections import defaultdict

def main():
    base = Path('/data/dev/dredd-webgpu-testing/data')
    query_json = Path(base, 'mapping_test_to_id_031225.json')
    
    with open(query_json) as f:
        query_dict = json.load(f)

    queries = sorted(list(query_dict.keys()))

    sample = sample_queries(queries)

    for query in sample:
        print(query)

    print(f'There are {len(sample)} queries selected')

def sample_queries(queries, per_group=1, seed=None):
    """
    Sample queries after the first in each group.

    queries: list of query strings
    per_group: how many queries to select per group
    seed: optional random seed
    """
    if seed is not None:
        random.seed(seed)

    # Group queries by prefix (everything before the last colon)
    groups = defaultdict(list)

    for q in queries:
        # Split on colon; take first two parts as the group prefix
        parts = q.split(':')
        if len(parts) < 2:
            continue  # skip malformed queries
        prefix = ':'.join(parts[:2])
        groups[prefix].append(q)

    sampled = []

    for prefix, qs in groups.items():
        if len(qs) <= 1:
            continue  # skip group with only the first query
        # skip the first query in the group
        candidates = qs[1:]
        # sample up to per_group queries
        n = min(per_group, len(candidates))
        sampled.extend(random.sample(candidates, n))

    return sampled

if __name__=="__main__":
    main()
