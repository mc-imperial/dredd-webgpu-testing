#!/usr/bin/env python3
"""Explore whether CTS kills depend on WHICH tests reach a mutant rather than HOW MANY.

Hypothesis: mutants reached by the same number of tests are often reached by the
same group of tests (e.g. parameter variants of one CTS test case); the outcome
is shared by the whole group, which would explain both the very uneven kill rate
across numbers of reaching tests and why the first test run usually kills.

Prints (no output files):
  0. data check: mapping test lists vs tests_reaching in the runs
  1. shared test sets: how many mutants share their exact set of reaching tests
     with other mutants, and whether mutants sharing a set share an outcome
     (compared with what independent outcomes at the overall kill rate would give)
  2. test families: how many distinct CTS test cases (file + case, ignoring
     parameters) and files reach each mutant
  3. kill rate by number of reaching tests vs by number of distinct test cases
  4. the largest groups of mutants sharing a test set, with their outcomes and
     the test cases involved
  5. a closer look at chosen numbers of reaching tests (--look, default 5,19)

Outcomes are those used in the survival table: mutants evaluated by every run
with the same outcome in every run (killed in all, or survived in all).

A CTS test name is webgpu:<file path>:<case>:<parameters>; its "case" is
webgpu:<file path>:<case>, and its "file" is webgpu:<file path>.

Usage:
  python3 icst_2027_experiments/analysis/explore_kill_clusters.py \
      results/cts-survival/twenty-four-hours/run*_24h \
      --mapping results/reachability/merged/mutant_to_tests_union5_isolated-no-cache_max100.json
"""
import argparse
import collections
import json
from pathlib import Path


def outcome(rec):
    if rec.get("killed_by") or str(rec.get("status", "")).startswith("KILL"):
        return "killed"
    if rec.get("status") == "SURVIVED":
        return "survived"
    return "other"


def case_of(test):
    parts = test.split(":")
    return ":".join(parts[:3]) if len(parts) >= 3 else test


def file_of(test):
    parts = test.split(":")
    return ":".join(parts[:2]) if len(parts) >= 2 else test


def short(name, n=70):
    name = name.replace("webgpu:shader,execution,", "")
    return name if len(name) <= n else name[:n - 3] + "..."


def rate(ms, out):
    return 100.0 * sum(out[m] == "killed" for m in ms) / len(ms) if ms else 0.0


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("runs", nargs="+", type=Path)
    ap.add_argument("--mapping", type=Path, required=True)
    ap.add_argument("--look", default="5,19", help="numbers of reaching tests to look at closely")
    ap.add_argument("--top", type=int, default=12, help="how many of the largest groups to show")
    args = ap.parse_args()

    # ---- outcomes (consistent across runs) ----
    per = collections.defaultdict(list)
    reaching = {}
    for d in sorted(args.runs):
        for line in open(d / "results.jsonl"):
            if line.strip():
                r = json.loads(line)
                per[r["mutant_id"]].append(outcome(r))
                reaching[r["mutant_id"]] = r["tests_reaching"]
    out = {m: o[0] for m, o in per.items()
           if len(o) == len(args.runs) and len(set(o)) == 1 and o[0] != "other"}
    mapping = {int(m): frozenset(t) for m, t in json.load(open(args.mapping)).items()}
    ms = [m for m in out if m in mapping]
    p = sum(out[m] == "killed" for m in ms) / len(ms)

    print("0. Data check")
    print(f"   {len(out):,} mutants with a consistent outcome; {len(ms):,} of them in the mapping; "
          f"overall kill rate {100 * p:.1f}%")
    mismatch = sum(1 for m in ms if len(mapping[m]) != reaching[m])
    print(f"   mapping list length differs from tests_reaching for {mismatch:,} mutants"
          f"{' (fine)' if mismatch == 0 else ' -- check which mapping the runs used'}")

    # ---- 1. shared test sets ----
    groups = collections.defaultdict(list)
    for m in ms:
        groups[mapping[m]].append(m)
    multi = [g for g in groups.values() if len(g) >= 2]
    in_multi = sum(len(g) for g in multi)
    same = sum(1 for g in multi if len({out[m] for m in g}) == 1)
    expected = sum(p ** len(g) + (1 - p) ** len(g) for g in multi)
    # mutant-weighted: share of mutants whose group is all one outcome
    same_m = sum(len(g) for g in multi if len({out[m] for m in g}) == 1)
    print("\n1. Mutants sharing their exact set of reaching tests")
    print(f"   {len(groups):,} distinct test sets for {len(ms):,} mutants")
    print(f"   {in_multi:,} mutants ({100 * in_multi / len(ms):.1f}%) share their set with at least one other mutant, "
          f"in {len(multi):,} groups (largest {max((len(g) for g in multi), default=0):,})")
    print(f"   groups where every mutant has the same outcome: {same:,} of {len(multi):,} "
          f"({100 * same / max(1, len(multi)):.1f}%); expected if outcomes were independent: "
          f"{expected:,.0f} ({100 * expected / max(1, len(multi)):.1f}%)")
    print(f"   mutants in a group with a single outcome: {same_m:,} of {in_multi:,} ({100 * same_m / max(1, in_multi):.1f}%)")

    # ---- 2. test families ----
    n_case = {m: len({case_of(t) for t in mapping[m]}) for m in ms}
    n_file = {m: len({file_of(t) for t in mapping[m]}) for m in ms}
    print("\n2. Distinct CTS test cases (ignoring parameters) and files reaching each mutant")
    for label, n in (("test cases", n_case), ("files", n_file)):
        c = collections.Counter(min(v, 5) for v in n.values())
        print(f"   {label:>10}: " + ", ".join(f"{'5+' if k == 5 else k}: {100 * c[k] / len(ms):.1f}%" for k in sorted(c)))
    multi_tests = [m for m in ms if reaching[m] >= 2]
    one_case = sum(1 for m in multi_tests if n_case[m] == 1)
    print(f"   of the {len(multi_tests):,} mutants reached by >= 2 tests, {one_case:,} "
          f"({100 * one_case / max(1, len(multi_tests)):.1f}%) are reached by variants of a single test case")

    # ---- 3. kill rate by tests vs by test cases ----
    def table(title, key, bands):
        print(f"\n   {title}")
        for lo, hi in bands:
            g = [m for m in ms if lo <= key[m] <= hi]
            if g:
                label = f"{lo}" if lo == hi else f"{lo}-{hi}" if hi < 10 ** 9 else f"{lo}+"
                print(f"   {label:>7}: {len(g):>6,} mutants, kill rate {rate(g, out):5.1f}%")
    print("\n3. Kill rate by number of reaching tests and by number of distinct test cases")
    table("by reaching tests", reaching, [(1, 1), (2, 2), (3, 4), (5, 8), (9, 16), (17, 10 ** 9)])
    table("by distinct test cases", n_case, [(1, 1), (2, 2), (3, 4), (5, 10 ** 9)])
    table("by distinct files", n_file, [(1, 1), (2, 2), (3, 4), (5, 10 ** 9)])

    # Within one test case: does the case decide the outcome? Kill rate per case,
    # for mutants reached by a single case.
    by_case = collections.defaultdict(list)
    for m in ms:
        if n_case[m] == 1:
            by_case[next(iter({case_of(t) for t in mapping[m]}))].append(m)
    big = [(c, g) for c, g in by_case.items() if len(g) >= 20]
    if big:
        extreme = sum(1 for _, g in big if rate(g, out) <= 10 or rate(g, out) >= 90)
        print(f"\n   test cases that alone reach >= 20 mutants: {len(big):,}; of these, {extreme:,} "
              f"({100 * extreme / len(big):.1f}%) kill <= 10% or >= 90% of their mutants")

    # ---- 4. largest groups ----
    print(f"\n4. The {args.top} largest groups of mutants sharing a test set")
    for tests, g in sorted(groups.items(), key=lambda kv: -len(kv[1]))[:args.top]:
        cases = collections.Counter(case_of(t) for t in tests)
        top_case, n = cases.most_common(1)[0]
        print(f"   {len(g):>5,} mutants, {len(tests):>3} tests, kill rate {rate(g, out):5.1f}%, "
              f"{len(cases)} case(s); main: {short(top_case)} ({n} tests)")

    # ---- 5. closer look ----
    for k in [int(x) for x in args.look.split(",") if x.strip()]:
        g = [m for m in ms if reaching[m] == k]
        if not g:
            continue
        sets = collections.Counter(mapping[m] for m in g)
        print(f"\n5. Mutants reached by {k} tests: {len(g):,}, kill rate {rate(g, out):.1f}%, "
              f"{len(sets):,} distinct test sets")
        for tests, n in sets.most_common(4):
            sub = [m for m in g if mapping[m] == tests]
            cases = collections.Counter(case_of(t) for t in tests)
            print(f"   {n:>5,} mutants, kill rate {rate(sub, out):5.1f}%: "
                  + "; ".join(f"{short(c, 60)} x{c_n}" for c, c_n in cases.most_common(3)))


if __name__ == "__main__":
    main()