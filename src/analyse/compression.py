import gzip
import os
import struct
from pathlib import Path
from math import log2

def file_entropy(data):
    if not data:
        return 0.0
    counts = [0] * 256
    for b in data:
        counts[b] += 1
    total = len(data)
    entropy = 0.0
    for c in counts:
        if c:
            p = c / total
            entropy -= p * log2(p)
    return entropy

def analyze_pair(txt_file, gz_file):
    size_txt = txt_file.stat().st_size
    size_gz = gz_file.stat().st_size

    with open(txt_file, 'rb') as f:
        txt_sample = f.read(200000)

    with gzip.open(gz_file, 'rb') as f:
        gz_sample = f.read(200000)

    ent_txt = file_entropy(txt_sample)
    ent_gz = file_entropy(gz_sample)

    print("────────────────────────────────────────────")
    print("File:", txt_file.name)
    print(" Uncompressed size: %.2f MB" % (size_txt / 1_000_000))
    print(" Gzip size:         %.2f MB" % (size_gz / 1_000_000))
    if size_txt > 0:
        print(" Gzip ratio:        %.2fx" % (size_gz / size_txt))
    print(" Entropy (txt):     %.2f bits/byte" % ent_txt)
    print(" Entropy (gzip):    %.2f bits/byte" % ent_gz)

def main():
    base = Path("/data/dev/dredd-webgpu-testing/data/testwise_tracking_checks")
    compressed = Path(base, 'compressed')
    uncompressed = Path(base, 'uncompressed')
    txt_files = sorted(uncompressed.rglob("*.txt"))
    gz_files = sorted(compressed.rglob("*.txt"))
    print(f'there are {len(txt_files)} and {len(gz_files)}')
    gz_map = {f.stem: f for f in gz_files}

    for txt in txt_files:
        name = txt.stem
        if name in gz_map:
            analyze_pair(txt, gz_map[name])

if __name__ == "__main__":
    main()

