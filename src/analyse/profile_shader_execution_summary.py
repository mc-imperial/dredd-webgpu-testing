import os
import re
import numpy as np
from collections import defaultdict

BASE = "/data/dev/dredd-webgpu-testing/data/profiling/"
FOLDERS = [BASE + "profile_data_built_mesa_no_mutation",
            BASE + "profile_data"]

for FOLDER in FOLDERS:
    pattern = re.compile(r"\[dawn-run\] (.*?): ([0-9.]+) s")

    data = defaultdict(list)
    incomplete_count = 0

    all_keys = set()
    key_order = []          # <-- preserves order of first appearance
    file_entries = []

    for fname in os.listdir(FOLDER):
        if not fname.endswith(".log"):
            continue
        
        filepath = os.path.join(FOLDER, fname)
        entries = {}
        
        with open(filepath, "r") as f:
            for line in f:
                m = pattern.match(line.strip())
                if m:
                    key, val = m.group(1), float(m.group(2))
                    entries[key] = val

                    # track order of first occurrence globally
                    if key not in all_keys:
                        key_order.append(key)
                    all_keys.add(key)
        
        file_entries.append(entries)

    for entries in file_entries:
        if not all(k in entries for k in all_keys):
            incomplete_count += 1
            continue
        
        for k in all_keys:
            data[k].append(entries[k])

    print(f"\nTimeouts: {incomplete_count} out of {len(file_entries)}\n")

    def summarize(values):
        arr = np.array(values)
        return [
            np.mean(arr),
            np.min(arr),
            np.percentile(arr, 10),
            np.percentile(arr, 25),
            np.median(arr),
            np.percentile(arr, 75),
            np.percentile(arr, 90),
            np.max(arr),
        ]

    print(FOLDER)
    headers = ["mean", "min", "p10", "q1", "median", "q3", "p90", "max"]
    print(f"{'segment':<35} " + " ".join(f"{h:>10}" for h in headers))

    # ANSI colors
    YELLOW = "\033[93m"
    RESET = "\033[0m"
    highlight_targets = {"get dawn device and queue", "create pipeline", "read results"}

    # iterate in original log order
    for key in key_order:
        if key not in data:
            continue  # skip keys that never had complete data
        
        stats = summarize(data[key])
        row = f"{key:<35} " + " ".join(f"{v:10.6f}" for v in stats)
        
        if key.lower() in highlight_targets:
            row = f"{YELLOW}{row}{RESET}"
        
        print(row)

    print('\n')