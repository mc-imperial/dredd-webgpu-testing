from pathlib import Path
import json

root = Path("results/e2/20260928_230448")
other_file = Path("results/e1/20260928_210609/run_001/individual_test_results.json")

def hms(seconds):
    h, rem = divmod(int(seconds), 3600)
    m, s = divmod(rem, 60)
    return f"{h}h {m}m {s}s"

times = [
    json.loads((d / "run_info.json").read_text())["time_seconds"]
    for d in root.iterdir()
    if d.is_dir() and (d / "run_info.json").is_file()
]

entries = json.loads(other_file.read_text())
n_entries = len(entries)

n_dirs = len(times)
total_time = sum(times)
avg_time = total_time / n_dirs
estimated_total = avg_time * n_entries

print(f"Dirs:              {n_dirs}")
print(f"Total time:        {total_time:.2f} seconds")
print(f"Average time/dir:  {avg_time:.2f} seconds")
print(f"Entries:            {n_entries}")
print(f"Avg time × entries: {estimated_total:.2f} seconds")

print("\nHMS")
print(f"Dirs:               {n_dirs}")
print(f"Total time:         {hms(total_time)}")
print(f"Average time/dir:   {hms(avg_time)}")
print(f"Entries:            {n_entries}")
print(f"Avg time × entries: {hms(estimated_total)}")

