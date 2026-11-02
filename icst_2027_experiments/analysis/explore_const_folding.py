#!/usr/bin/env python3
"""Explore which constant-folding code (nir_constant_expressions.c) the CTS reaches.

Each NIR opcode has its own constant-folding function, evaluate_<opcode>. The
opcodes are put into rough groups by name:
  hardware-specific  name ends in a GPU back end's suffix (_amd, _ir3, _v3d, ...),
                     opcodes lavapipe never produces
  not in WebGPU      an 8-, 16- or 64-bit form (f2f16, i2i64, b16..., u2u8, ...) or a
                     vector wider than vec4 (ball_fequal5/8/16, vec8, vec16): sizes WebGPU
                     shaders cannot express, except 16-bit floats with the optional
                     shader-f16 feature (packing shapes such as 4x8 or 2x16 do not
                     count: those are 32-bit operations)
  generic            everything else
The rest of the file (the dispatcher nir_eval_const_opcode and helpers) is
reported separately. The groups are heuristics on names, so the script also
lists the most common name endings among unreached generic opcodes, to spot
back-end suffixes the list misses.

Also reports nir_opt_algebraic.c (the generated algebraic rewrite rules).

Prints its report; with --macros, also writes LaTeX macros for the groups, as shares
of the unreached mutants in nir_constant_expressions.c:
  \\CfUnreached                       unreached mutants in the file
  \\CfUnreached{Hw,NotWebGPU,Generic,Other}, ...Pct   per group (Hw: hardware-specific;
                                     NotWebGPU: sizes WebGPU cannot express; Other: code
                                     outside the evaluate_<opcode> functions)

Usage:
  python3 icst_2027_experiments/analysis/explore_const_folding.py \\
      icst_2027_experiments/generated/mutant_function_ranges.csv \\
      --isolated results/reachability/processed/isolated/run-*/mutant_to_tests_isolated-no-cache_per_mutant.csv \\
      --runs results/cts-survival/twenty-four-hours/run*_24h
"""
import argparse
import bisect
import collections
import csv
import json
import re
from pathlib import Path

VENDOR = ("amd", "ir3", "v3d", "vc4", "intel", "nv", "agx", "pco", "mali", "bifrost", "etna", "lima",
          "r600", "dxil", "kk", "imm", "ac", "brw", "gfx", "panfrost", "freedreno", "asahi", "nak")
# 8/16/64 as a bit size (f2f16, i2i64, u2u8, b16all_...), but not packing shapes
# such as 4x8 or 2x16 (pack_unorm_4x8, sdot_2x16_iadd), which are 32-bit operations
SIZED = re.compile(r"(?<![x\d])(8|16|64)(?![x\d])")
# vector widths beyond WebGPU's vec4 (NIR has vec5, vec8, vec16 forms, e.g. ball_fequal5)
WIDE = re.compile(r"(equal|vec|dot)(5|8|16)$")


def outcome(rec):
    if rec.get("killed_by") or str(rec.get("status", "")).startswith("KILL"):
        return "killed"
    if rec.get("status") == "SURVIVED":
        return "survived"
    return "other"


def group(fn):
    if not fn.startswith("evaluate_"):
        return "other code"
    op = fn[len("evaluate_"):]
    if op.rsplit("_", 1)[-1] in VENDOR:
        return "hardware-specific"
    if SIZED.search(op) or WIDE.search(op):
        return "not in WebGPU"
    return "generic"


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("functions", type=Path)
    ap.add_argument("--isolated", nargs="+", required=True)
    ap.add_argument("--runs", nargs="+", type=Path, required=True)
    ap.add_argument("--macros", type=Path, help="also write LaTeX macros for the groups to this file")
    args = ap.parse_args()

    rows = []
    with open(args.functions) as f:
        for r in csv.DictReader(line for line in f if not line.startswith("#")):
            rows.append((int(r["first_id"]), int(r["mutants"]), r["path"], r["function"]))
    rows.sort()
    starts = [r[0] for r in rows]

    def where(m):
        i = bisect.bisect_right(starts, m) - 1
        return (rows[i][2], rows[i][3]) if i >= 0 and m < rows[i][0] + rows[i][1] else None

    reached = set()
    for p in args.isolated:
        with open(p, newline="") as f:
            reached.update(int(r["mutant_id"]) for r in csv.DictReader(f) if int(r["n_tests"]) > 0)
    per = collections.defaultdict(list)
    for d in sorted(args.runs):
        for line in open(d / "results.jsonl"):
            if line.strip():
                r = json.loads(line)
                per[r["mutant_id"]].append(outcome(r))
    out = {m: o[0] for m, o in per.items()
           if len(o) == len(args.runs) and len(set(o)) == 1 and o[0] != "other"}

    st = {(p, fn): collections.Counter(mutants=n) for _, n, p, fn in rows}
    for m in reached:
        k = where(m)
        if k:
            st[k]["reached"] += 1
    for m, o in out.items():
        k = where(m)
        if k:
            st[k]["evaluated"] += 1
            st[k][o] += 1

    def summary(label, keys, total_unreached):
        c = collections.Counter()
        for k in keys:
            c.update(st[k])
        n_reached_f = sum(1 for k in keys if st[k]["reached"])
        unreached = c["mutants"] - c["reached"]
        print(f"   {label:>18}: {len(keys):>4} functions ({n_reached_f:>4} reached at all), "
              f"{c['mutants']:>8,} mutants, {100 * c['reached'] / max(1, c['mutants']):5.1f}% reached, "
              f"{unreached:>8,} unreached ({100 * unreached / max(1, total_unreached):5.1f}% of the file's unreached), "
              f"evaluated {c['evaluated']:,}, killed {c['killed']:,}, survived {c['survived']:,}")

    ce = [k for k in st if k[0].endswith("nir_constant_expressions.c")]
    ce_unreached = sum(st[k]["mutants"] - st[k]["reached"] for k in ce)
    groups = collections.defaultdict(list)
    for k in ce:
        groups[group(k[1])].append(k)
    print("1. nir_constant_expressions.c by kind of opcode")
    for g in ("hardware-specific", "not in WebGPU", "generic", "other code"):
        summary(g, groups[g], ce_unreached)
    if args.macros:
        fmt = lambda n: f"{n:,}".replace(",", "{,}")
        lines = ["% Generated by explore_const_folding.py --macros -- do not edit by hand.",
                 f"\\newcommand{{\\CfUnreached}}{{{fmt(ce_unreached)}}}"]
        for g, name in (("hardware-specific", "Hw"), ("not in WebGPU", "NotWebGPU"),
                        ("generic", "Generic"), ("other code", "Other")):
            u = sum(st[k]["mutants"] - st[k]["reached"] for k in groups[g])
            lines += [f"\\newcommand{{\\CfUnreached{name}}}{{{fmt(u)}}}",
                      f"\\newcommand{{\\CfUnreached{name}Pct}}{{{100 * u / max(1, ce_unreached):.1f}\\%}}"]
        args.macros.parent.mkdir(parents=True, exist_ok=True)
        args.macros.write_text("\n".join(lines) + "\n")
        print(f"   wrote {args.macros}")

    print("\n2. Examples (check the grouping looks right)")
    for g in ("hardware-specific", "not in WebGPU", "generic"):
        names = sorted(k[1][len("evaluate_"):] for k in groups[g])
        print(f"   {g}: {len(names)} opcodes, e.g. " + ", ".join(names[:: max(1, len(names) // 12)][:12]))

    gen_unreached = [k for k in groups["generic"] if not st[k]["reached"]]
    endings = collections.Counter(k[1].rsplit("_", 1)[-1] for k in gen_unreached if "_" in k[1][9:])
    print(f"\n3. Generic opcodes never reached: {len(gen_unreached)} of {len(groups['generic'])}; "
          f"most common name endings (look for back-end suffixes missing from the list):")
    print("   " + ", ".join(f"{e} ({n})" for e, n in endings.most_common(20)))
    print("   e.g. " + ", ".join(sorted(k[1][9:] for k in gen_unreached)[:: max(1, len(gen_unreached) // 15)][:15]))
    gen_reached = sorted((k for k in groups["generic"] if st[k]["reached"]),
                         key=lambda k: -st[k]["reached"])
    print(f"   generic opcodes reached: {len(gen_reached)}; most reached mutants: "
          + ", ".join(f"{k[1][9:]} ({st[k]['reached']:,})" for k in gen_reached[:10]))

    print("\n4. Other generated files")
    for name in ("nir_opt_algebraic.c", "nir_opcodes.c"):
        keys = [k for k in st if k[0].endswith(name)]
        if keys:
            u = sum(st[k]["mutants"] - st[k]["reached"] for k in keys)
            summary(name, keys, u)
            top = sorted(keys, key=lambda k: -st[k]["reached"])[:5]
            print("      most reached functions: " + ", ".join(f"{k[1]} ({st[k]['reached']:,} of {st[k]['mutants']:,})"
                                                         for k in top if st[k]["reached"]))


if __name__ == "__main__":
    main()