#!/usr/bin/env python3
"""Merge mutant-to-tests mappings from repeated runs (e.g. one per machine) by union.

Each run contributes two files from build_mutant_mapping.py:
  - its mapping JSON, built with some --max-tests limit (e.g. 100)
  - its <stem>_per_mutant.csv from pass 1, which counts ALL mutants

For each mutant, the merged test list is the union over runs, kept if it has at
most --max-tests tests. This is exact without the raw data:
  - if any run reaches the mutant with more than --max-tests tests, the union is
    larger too, so the mutant is dropped (this is what the counts files are for:
    such a mutant is missing from that run's mapping, not reached by 0 tests);
  - otherwise every run that reaches it lists it in full in its mapping, so the
    union of those lists is the true union.
--max-tests must therefore be <= the limit every input mapping was built with;
the script checks this and stops if a mapping is missing a mutant it should list.

Output:
  <output>                    {"<mutant>": [tests...]}, fewest tests first (kill-run format)
  <output stem>_counts.csv    tests_reaching_mutant,n_mutants  (merged, <= --max-tests only)
  <output stem>_summary.txt   what was merged, dropped, and how much the runs differ

Usage:
  merge_mappings.py --max-tests 100 --output merged/mutant_to_tests_union_max100.json \\
      --run machineA/mutant_to_tests_isolated-no-cache_max100.json machineA/mutant_to_tests_isolated-no-cache_per_mutant.csv \\
      --run machineB/mutant_to_tests_isolated-no-cache_max100.json machineB/mutant_to_tests_isolated-no-cache_per_mutant.csv
"""

import argparse
import csv
import json
from collections import Counter
from pathlib import Path


def read_counts(path: Path) -> dict[int, int]:
    with path.open() as f:
        return {int(r["mutant_id"]): int(r["n_tests"]) for r in csv.DictReader(f)}


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--run", nargs=2, action="append", required=True, metavar=("MAPPING_JSON", "PER_MUTANT_CSV"),
                   help="one run's mapping and its per-mutant counts (repeat for each run)")
    p.add_argument("--max-tests", type=int, required=True,
                   help="keep mutants whose union has at most this many tests (<= each mapping's own limit)")
    p.add_argument("--output", type=Path, required=True)
    args = p.parse_args()
    L = args.max_tests

    counts = []
    for i, (_, csv_path) in enumerate(args.run):
        counts.append(read_counts(Path(csv_path)))
        print(f"run {i}: counts for {len(counts[-1]):,} reached mutants ({csv_path})", flush=True)

    # Mutants within the limit in every run that reaches them.
    all_reached = set().union(*counts)
    over = {m for m in all_reached if any(c.get(m, 0) > L for c in counts)}
    candidates = all_reached - over
    print(f"{len(all_reached):,} mutants reached in some run; {len(over):,} exceed {L} tests in at "
          f"least one run (dropped); {len(candidates):,} candidates", flush=True)

    # Union the test lists, sharing test-name strings across runs to save memory.
    names: dict[str, str] = {}
    union: dict[int, set[str]] = {m: set() for m in candidates}
    for i, (map_path, _) in enumerate(args.run):
        with open(map_path) as f:
            mapping = json.load(f)
        print(f"run {i}: {len(mapping):,} mutants in mapping ({map_path})", flush=True)
        seen = set()
        for key, tests in mapping.items():
            m = int(key)
            if m not in union:
                continue
            if len(tests) != counts[i].get(m, -1):
                raise SystemExit(f"run {i}: mutant {m} has {len(tests)} tests in the mapping but "
                                 f"{counts[i].get(m)} in the counts file -- are these from the same run?")
            union[m].update(names.setdefault(t, t) for t in tests)
            seen.add(m)
        # Completeness: every candidate this run reaches must be in its mapping.
        missing = [m for m in candidates if counts[i].get(m, 0) > 0 and m not in seen]
        if missing:
            raise SystemExit(f"run {i}: {len(missing):,} mutants reached by <= {L} tests are missing from "
                             f"{map_path} (e.g. {missing[:5]}). Was it built with a --max-tests below {L}?")
        del mapping

    # How much the runs differ: a union bigger than the biggest single run means
    # different runs reached the mutant from different tests.
    max_single = {m: max(counts[i].get(m, 0) for i in range(len(counts))) for m in candidates}
    grew = sum(1 for m in candidates if len(union[m]) > max_single[m])
    kept = {m: s for m, s in union.items() if len(s) <= L}
    grew_past = len(union) - len(kept)

    order = sorted(kept, key=lambda m: (len(kept[m]), m))
    args.output.parent.mkdir(parents=True, exist_ok=True)
    with args.output.open("w") as f:
        f.write("{\n")
        for i, m in enumerate(order):
            sep = ",\n" if i < len(order) - 1 else "\n"
            f.write(f"  {json.dumps(str(m))}: {json.dumps(sorted(kept[m]))}{sep}")
        f.write("}\n")

    hist = Counter(len(s) for s in kept.values())
    counts_path = args.output.with_name(args.output.stem + "_counts.csv")
    with counts_path.open("w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["tests_reaching_mutant", "n_mutants"])
        for k in sorted(hist):
            w.writerow([k, hist[k]])

    lines = [
        f"Merged {len(args.run)} runs with --max-tests {L}",
        *(f"  run {i}: {m}  +  {c}" for i, (m, c) in enumerate(args.run)),
        "",
        f"Mutants reached in at least one run:           {len(all_reached):,}",
        f"  dropped: > {L} tests in some run:             {len(over):,}",
        f"  dropped: union grew past {L}:                 {grew_past:,}",
        f"  kept (union <= {L} tests):                    {len(kept):,}",
        "",
        f"Of the {len(candidates):,} candidates, {grew:,} ({grew / max(len(candidates), 1):.1%}) have a union",
        f"larger than their largest single run: those runs reached them from different tests.",
        f"Reached in only some runs: "
        f"{sum(1 for m in candidates if sum(1 for c in counts if c.get(m, 0) > 0) < len(counts)):,}",
        "",
        f"Wrote {args.output}",
        f"Wrote {counts_path}",
    ]
    summary = "\n".join(lines)
    args.output.with_name(args.output.stem + "_summary.txt").write_text(summary + "\n")
    print("\n" + summary)


if __name__ == "__main__":
    main()