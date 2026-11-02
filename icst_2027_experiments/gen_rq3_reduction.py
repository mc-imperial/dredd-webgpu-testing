#!/usr/bin/env python3
"""RQ3: summarise the reduction and polishing of the selected fuzzer kills (macros and a table).

Inputs (defaults are the repository's locations; run from the repository root):
  --reduce-dir  results/reduce/survivors-72h          reductions.jsonl (reduce.py), selection.csv
                                                      (select_reductions.py), <m>/reduced.wgsl
  --polish-dir  results/reduce/survivors-72h-polish   <m>/raw.wgsl and <m>/polish.log (polish.sh)
  --exclude-timing IDs   reductions left out of the timing (default: the first eight, run while
                         the reduction image downloaded Rust toolchains, which inflated their time)

Per mutant (the last record in reductions.jsonl for it):
  success     still kills with an output mismatch, clean runs agree and are deterministic,
              and the outputs differ in data (not only padding)
  sizes       bytes before/after each reducer (Perses, C-Vise, our WGSL pass; on the
              un-reconditioned program), the reconditioned result (reduced.wgsl) and the
              polished test (raw.wgsl); lines of the fuzzer's program, reduced and polished
  input       from polish.log's input pass: none (no input buffer left), zero (an input
              buffer, all zeros suffice) or values (specific values needed)
  coverage    the survivors the reduced program kills (its own mutant plus also_kills)
Neighbours (selection groups A1, A2, ...): reduced and polished programs compared with their
top-level declarations in sorted order (so helper order does not count as a difference), and
polished programs also byte for byte.

Outputs:
  --out         LaTeX macros (\\Red...), listed at the end of this docstring
  --table-out   a tabular: one row per stage; bytes: median, mean, min, max
  --csv         one row per mutant (optional)

Usage:
  python3 icst_2027_experiments/gen_rq3_reduction.py \\
      --out icst_2027_experiments/generated/rq3_reduction_macros.tex \\
      --table-out icst_2027_experiments/generated/rq3_reduction_table.tex

Macros:
  \\RedN \\RedSucceeded                      selected mutants; reductions that succeeded
  \\Red{Perses,CVise,Wgsl}PctMedian         median % of bytes removed by each reducer
  \\RedPctMedian, ...Min, ...Max            % of bytes removed overall (fuzzer program -> WGSL pass)
  \\RedLines{Before,Reduced,Polished}Median median lines; \\RedPolishedBytesMedian
  \\RedTimed \\RedMinutes{Median,Min,Max}   reductions timed; minutes per reduction
  \\RedCovered                              survivors killed by at least one reduced program
  \\RedAlsoKills{Median,Max}                other survivors each reduced program kills
  \\RedKilledByOther                        selected mutants killed by another one's program
  \\RedNeighbourMutants, \\RedNeighbourGroups, \\RedNeighbourSharedProgram (killed by the same
      fuzzer program as another neighbour), \\RedNeighbourDistinct (distinct reduced tests
      among those, helper order ignored), \\RedNeighbourDistinctPolished (distinct polished
      tests, helper order ignored; polishing is checked per mutant, so it can name or inline
      helpers differently), \\RedNeighbourDistinctPolishedExact (byte for byte)
  \\RedDispersed, \\RedDispersedFunctions, \\RedDispersedFiles   group B: mutants, functions, files
  \\RedInput{None,Zero,Values}             polished tests by input needed
  \\RedConstFold, \\RedConstFoldInputNone    mutants in constant folding (nir_constant_expressions.c),
  \\RedOther, \\RedOtherInputNone            and elsewhere; of those, tests that need no input
"""
import argparse
import collections
import csv
import hashlib
import json
import os
import re
import statistics
import sys

EXCLUDE_TIMING = "767774,767776,767777,767778,767781,33047,33052,33053"
INPUT_LINE = re.compile(r"^\s*(\d+:\d+): (\d+) bytes, (\d+) non-zero word", re.M)


def fmt_int(n):
    return f"{round(n):,}".replace(",", "{,}")


def med_range(xs, fmt=fmt_int):
    xs = sorted(xs)
    return f"{fmt(statistics.median(xs))} ({fmt(xs[0])}--{fmt(xs[-1])})"


def read_selection(path):
    with open(path) as f:
        return list(csv.DictReader(line for line in f if not line.startswith("#")))


def read_records(path):
    recs = {}
    with open(path) as f:
        for line in f:
            line = line.strip()
            if line.startswith("{"):
                r = json.loads(line)
                recs[int(r["mutant_id"])] = r          # the last record per mutant wins
    return recs


def input_class(log_path):
    """none / zero / values / unknown, from polish.log's input pass."""
    if not os.path.exists(log_path):
        return "unknown"
    text = open(log_path, errors="replace").read()
    if re.search(r"^\s*no inputs\s*$", text, re.M):
        return "none"
    words = [int(m.group(3)) for m in INPUT_LINE.finditer(text)]
    if not words:
        return "unknown"
    return "zero" if all(w == 0 for w in words) else "values"


def normalised(text):
    """The program with its top-level declarations sorted, so their order does not matter."""
    blocks = [b.strip() for b in re.split(r"\n\s*\n", text.strip()) if b.strip()]
    return "\n\n".join(sorted(blocks))


def digest(text):
    return hashlib.sha256(text.encode()).hexdigest()


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--reduce-dir", default="results/reduce/survivors-72h")
    ap.add_argument("--polish-dir", default="results/reduce/survivors-72h-polish")
    ap.add_argument("--exclude-timing", default=EXCLUDE_TIMING)
    ap.add_argument("--out", default="icst_2027_experiments/generated/rq3_reduction_macros.tex")
    ap.add_argument("--table-out", default="icst_2027_experiments/generated/rq3_reduction_table.tex")
    ap.add_argument("--csv")
    args = ap.parse_args()

    sel = read_selection(os.path.join(args.reduce_dir, "selection.csv"))
    recs = read_records(os.path.join(args.reduce_dir, "reductions.jsonl"))
    missing = [s["mutant_id"] for s in sel if int(s["mutant_id"]) not in recs]
    if missing:
        sys.exit(f"no reduction record for {len(missing)} selected mutants, e.g. {missing[:5]}")
    no_timing = {int(x) for x in args.exclude_timing.split(",") if x.strip()}

    rows = []
    for s in sel:
        m = int(s["mutant_id"])
        r = recs[m]
        st = {x["reducer"]: x for x in r["stages"]}
        pol = os.path.join(args.polish_dir, str(m), "raw.wgsl")
        red = os.path.join(args.reduce_dir, str(m), "reduced.wgsl")
        if not os.path.exists(pol):
            sys.exit(f"{pol} not found: run polish.sh on the selection first")
        pol_text = open(pol).read()
        red_text = open(red).read() if os.path.exists(red) else ""
        rows.append({
            "mutant_id": m, "group": s["group"], "path": s["path"], "function": s["function"],
            "seed": r.get("seed"),
            "success": (r.get("status") == "KILL_OUTPUT_MISMATCH" and r.get("clean_ok") and r.get("deterministic")
                        and not r.get("padding_only")),
            "bytes_fuzzer": st["perses"]["bytes_before"],
            "bytes_perses": st["perses"]["bytes_after"],
            "bytes_cvise": st["cvise"]["bytes_after"],
            "bytes_wgsl": st["wgsl"]["bytes_after"],
            "bytes_reconditioned": os.path.getsize(red) if os.path.exists(red) else None,
            "bytes_polished": len(pol_text.encode()),
            "lines_fuzzer": r["lines_before"], "lines_reduced": r["final_lines"],
            "lines_polished": pol_text.count("\n") + (0 if pol_text.endswith("\n") else 1),
            "minutes": r["reduce_seconds"] / 60, "timed": m not in no_timing,
            "also_kills": [int(k) for k in r.get("also_kills", {})],
            "input": input_class(os.path.join(args.polish_dir, str(m), "polish.log")),
            "const_fold": s["path"].endswith("nir_constant_expressions.c"),
            "exact": digest(pol_text), "norm": digest(normalised(pol_text)),
            "red_norm": digest(normalised(red_text)) if red_text else None,
        })
    n = len(rows)
    sel_ids = {x["mutant_id"] for x in rows}
    pct = lambda a, b: 100.0 * (1 - b / a)
    mac = {}
    mac["RedN"] = fmt_int(n)
    mac["RedSucceeded"] = fmt_int(sum(x["success"] for x in rows))
    for name, a, b in (("Perses", "bytes_fuzzer", "bytes_perses"), ("CVise", "bytes_perses", "bytes_cvise"),
                       ("Wgsl", "bytes_cvise", "bytes_wgsl")):
        mac[f"Red{name}PctMedian"] = f"{statistics.median(pct(x[a], x[b]) for x in rows):.0f}\\%"
    overall = [pct(x["bytes_fuzzer"], x["bytes_wgsl"]) for x in rows]
    mac["RedPctMedian"] = f"{statistics.median(overall):.0f}\\%"
    mac["RedPctMin"] = f"{min(overall):.0f}\\%"
    mac["RedPctMax"] = f"{max(overall):.0f}\\%"
    for k, key in (("Before", "lines_fuzzer"), ("Reduced", "lines_reduced"), ("Polished", "lines_polished")):
        mac[f"RedLines{k}Median"] = fmt_int(statistics.median(x[key] for x in rows))
    mac["RedPolishedBytesMedian"] = fmt_int(statistics.median(x["bytes_polished"] for x in rows))
    timed = [x["minutes"] for x in rows if x["timed"]]
    mac["RedTimed"] = fmt_int(len(timed))
    mac["RedMinutesMedian"] = fmt_int(statistics.median(timed))
    mac["RedMinutesMin"] = fmt_int(min(timed))
    mac["RedMinutesMax"] = fmt_int(max(timed))

    covered = sel_ids | {k for x in rows for k in x["also_kills"]}
    mac["RedCovered"] = fmt_int(len(covered))
    mac["RedAlsoKillsMedian"] = fmt_int(statistics.median(len(x["also_kills"]) for x in rows))
    mac["RedAlsoKillsMax"] = fmt_int(max(len(x["also_kills"]) for x in rows))
    mac["RedKilledByOther"] = fmt_int(sum(1 for x in rows
                                          if any(x["mutant_id"] in y["also_kills"] for y in rows if y is not x)))

    # neighbours: within each group A*, mutants killed by the same fuzzer program (seed)
    groups = collections.defaultdict(list)
    for x in rows:
        if x["group"] != "B":
            groups[x["group"]].append(x)
    shared, distinct, distinct_exact, distinct_red = 0, 0, 0, 0
    print("neighbour groups: distinct reduced tests (helper order ignored); distinct polished tests "
          "(helper order ignored / byte for byte):")
    for g, xs in sorted(groups.items()):
        by_seed = collections.defaultdict(list)
        for x in xs:
            by_seed[x["seed"]].append(x)
        for seed, ys in by_seed.items():
            if len(ys) < 2:
                continue
            shared += len(ys)
            distinct += len({y["norm"] for y in ys})
            distinct_exact += len({y["exact"] for y in ys})
            distinct_red += len({y["red_norm"] for y in ys})
            print(f"  {g}: {len(ys)} mutants from one fuzzer program -> reduced: {len({y['red_norm'] for y in ys})} "
                  f"distinct; polished: {len({y['norm'] for y in ys})} ({len({y['exact'] for y in ys})} byte for byte): "
                  f"{[y['mutant_id'] for y in ys]}")
    mac["RedNeighbourMutants"] = fmt_int(sum(len(xs) for xs in groups.values()))
    mac["RedNeighbourGroups"] = fmt_int(len(groups))
    mac["RedNeighbourSharedProgram"] = fmt_int(shared)
    mac["RedNeighbourDistinct"] = fmt_int(distinct_red)            # reduced tests, helper order ignored
    mac["RedNeighbourDistinctPolished"] = fmt_int(distinct)        # polished, helper order ignored
    mac["RedNeighbourDistinctPolishedExact"] = fmt_int(distinct_exact)
    # dispersed: group B, one kill per function
    disp = [x for x in rows if x["group"] == "B"]
    mac["RedDispersed"] = fmt_int(len(disp))
    mac["RedDispersedFunctions"] = fmt_int(len({(x["path"], x["function"]) for x in disp}))
    mac["RedDispersedFiles"] = fmt_int(len({x["path"] for x in disp}))
    print(f"dispersed: {len(disp)} mutants, {mac['RedDispersedFunctions']} functions, "
          f"{mac['RedDispersedFiles']} files")

    inp = collections.Counter(x["input"] for x in rows)
    if inp["unknown"]:
        print(f"note: no input-pass result in polish.log for {inp['unknown']} mutants")
    mac["RedInputNone"] = fmt_int(inp["none"])
    mac["RedInputZero"] = fmt_int(inp["zero"])
    mac["RedInputValues"] = fmt_int(inp["values"])
    cf = [x for x in rows if x["const_fold"]]
    other = [x for x in rows if not x["const_fold"]]
    mac["RedConstFold"] = fmt_int(len(cf))
    mac["RedConstFoldInputNone"] = fmt_int(sum(x["input"] == "none" for x in cf))
    mac["RedOther"] = fmt_int(len(other))
    mac["RedOtherInputNone"] = fmt_int(sum(x["input"] == "none" for x in other))

    # table: one row per stage
    def bytes_row(label, key):
        vals = [x[key] for x in rows if x[key] is not None]
        return (f"{label} & {fmt_int(statistics.median(vals))} & {fmt_int(statistics.mean(vals))} & "
                f"{fmt_int(min(vals))} & {fmt_int(max(vals))} \\\\")

    lines = ["% Generated by gen_rq3_reduction.py -- do not edit by hand.",
             f"% Bytes over the {n} selected kills. Reducer stages work on the program without",
             "% wgslsmith's safety checks; the reduced and polished tests include them.",
             "\\begin{tabular}{lrrrr}", "\\toprule",
             "& \\multicolumn{4}{c}{Bytes} \\\\", "\\cmidrule(lr){2-5}",
             "Stage & Median & Mean & Min & Max \\\\", "\\midrule",
             bytes_row("Fuzzer program", "bytes_fuzzer"),
             bytes_row("After Perses", "bytes_perses"),
             bytes_row("After C-Vise", "bytes_cvise"),
             bytes_row("After WGSL pass", "bytes_wgsl"),
             "\\midrule",
             bytes_row("+ safety checks (reconditioned)", "bytes_reconditioned"),
             bytes_row("Polished (with safety checks)", "bytes_polished"),
             "\\bottomrule", "\\end{tabular}"]
    for path, content in ((args.table_out, "\n".join(lines) + "\n"),
                          (args.out, f"% Generated by gen_rq3_reduction.py from {args.reduce_dir} and "
                                     f"{args.polish_dir} -- do not edit by hand.\n"
                                     + "".join(f"\\newcommand{{\\{k}}}{{{v}}}\n" for k, v in mac.items()))):
        os.makedirs(os.path.dirname(os.path.abspath(path)), exist_ok=True)
        with open(path, "w") as f:
            f.write(content)
    if args.csv:
        with open(args.csv, "w", newline="") as f:
            keys = [k for k in rows[0] if k not in ("also_kills", "exact", "norm")] + ["also_kills_n"]
            w = csv.DictWriter(f, fieldnames=keys, extrasaction="ignore")
            w.writeheader()
            for x in rows:
                w.writerow({**x, "also_kills_n": len(x["also_kills"])})

    print("\n".join(l for l in lines if not l.startswith("%")))
    width = max(map(len, mac))
    for k, v in mac.items():
        print(f"  \\{k:<{width}}  {v}")
    print(f"wrote {args.out} and {args.table_out}")


if __name__ == "__main__":
    main()