#!/usr/bin/env python3
"""Setup: mutant counts per NIR source file, read from the tracking Mesa build in
a Docker image, including the files Mesa generates at build time (under build/).

For every file Dredd mutated (contains "DREDD PRELUDE START") under
<mesa>/src/compiler/nir and <mesa>/build/src/compiler/nir, the script reads:
  - the file's first mutant ID, from "<N> + local_mutation_id" in the prelude
  - the file's number of mutants, from the size of its tracking array
    ("already_recorded...[<size>]")
It checks that the files' ID ranges are contiguous from 0 and that the first IDs
agree with the sizes, then writes LaTeX macros.

Usage (from the repository root, on a machine with the image):
  python3 icst_2027_experiments/gen_setup_generated.py \
      --out icst_2027_experiments/generated/setup_generated_macros.tex
Lines of code: cloc (its "code" count: no blank or comment lines) over the same files in
the UNMUTATED Mesa (--mesa-src, default /data/mesa), split into hand-written source and
files generated during the build; cloc is installed in the (throwaway) container if the
image lacks it. Macros \\NirLines, \\NirLinesSource, \\NirLinesGenerated,
\\NirLinesGeneratedPct, \\ClocVersion. --no-cloc skips this.

Options: --image (default dredd-webgpu-testing:reachability-stability),
         --mesa (default /data/mesa_tracked), --mesa-src (default /data/mesa),
         --ranges-out FILE  also save each file's mutant ID range as CSV
                            (first_id,mutants,path) for per-file analyses
"""
import argparse
import json
import subprocess
import sys

# Runs inside the container; prints one JSON object per mutated file.
INNER = r'''
import json, os, re, sys
mesa = sys.argv[1]
for sub in ["src/compiler/nir", "build/src/compiler/nir"]:
    root = os.path.join(mesa, sub)
    for dirpath, _, names in os.walk(root):
        for name in sorted(names):
            if not name.endswith((".c", ".cpp")):
                continue
            path = os.path.join(dirpath, name)
            text = open(path, errors="replace").read()
            if "DREDD PRELUDE START" not in text:
                continue
            first = re.search(r"(\d+)\s*\+\s*local_mutation_id", text)
            size = re.search(r"already_recorded\w*\s*\[\s*(\d+)\s*\]", text)
            print(json.dumps({"path": os.path.relpath(path, mesa),
                              "first": int(first.group(1)) if first else None,
                              "size": int(size.group(1)) if size else None}))
'''

# Runs inside the container: cloc over the listed files (one path per line on stdin,
# relative to the Mesa folder), hand-written and generated separately; prints JSON.
CLOC = r'''
set -e
command -v cloc >/dev/null 2>&1 || { apt-get update -qq >/dev/null && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y -qq cloc >/dev/null; } >&2
cd "$1"
cat > /tmp/all.txt
grep -v '^build/' /tmp/all.txt > /tmp/src.txt || true
grep '^build/' /tmp/all.txt > /tmp/gen.txt || true
echo "{\"version\": \"$(cloc --version)\","
echo "\"source\": $(cloc --quiet --json --list-file=/tmp/src.txt),"
echo "\"generated\": $(cloc --quiet --json --list-file=/tmp/gen.txt)}"
'''


def cloc_counts(image, mesa_src, paths):
    res = subprocess.run(["docker", "run", "--rm", "-i", image, "bash", "-c", CLOC, "cloc", mesa_src],
                         input="\n".join(paths) + "\n", capture_output=True, text=True)
    if res.returncode != 0:
        sys.exit(f"cloc in {image} failed:\n{res.stderr[-2000:]}")
    d = json.loads(res.stdout)
    code = {k: d[k]["SUM"]["code"] for k in ("source", "generated")}
    files = {k: d[k]["SUM"]["nFiles"] for k in ("source", "generated")}
    return d["version"], code, files


WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]


def fmt_int(x):
    return f"{x:,}".replace(",", "{,}")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--image", default="dredd-webgpu-testing:reachability-stability")
    ap.add_argument("--mesa", default="/data/mesa_tracked")
    ap.add_argument("--mesa-src", default="/data/mesa", help="the unmutated Mesa, for cloc")
    ap.add_argument("--no-cloc", action="store_true", help="skip counting lines of code")
    ap.add_argument("--out", required=True)
    ap.add_argument("--ranges-out", help="also write each mutated file's mutant ID range to this CSV "
                                         "(first_id,mutants,path), for per-file analyses")
    args = ap.parse_args()

    res = subprocess.run(["docker", "run", "--rm", "-i", args.image, "python3", "-", args.mesa],
                         input=INNER, capture_output=True, text=True)
    if res.returncode != 0:
        sys.exit(f"docker run failed:\n{res.stderr}")
    files = [json.loads(line) for line in res.stdout.splitlines() if line.strip()]
    if not files:
        sys.exit(f"no Dredd-mutated files found under {args.mesa} in {args.image}")

    bad = [f["path"] for f in files if f["first"] is None or f["size"] is None]
    if bad:
        sys.exit("could not read the first ID or array size in:\n  " + "\n  ".join(bad))

    # Sanity check: ID ranges should be contiguous from 0 with no gaps or overlaps.
    files.sort(key=lambda f: f["first"])
    expected, problems = 0, []
    for f in files:
        if f["first"] != expected:
            problems.append(f"{f['path']}: first ID {f['first']:,}, expected {expected:,}")
        expected = f["first"] + f["size"]
    if problems:
        print("WARNING: ID ranges not contiguous:\n  " + "\n  ".join(problems[:10]))

    total = sum(f["size"] for f in files)
    gen = [f for f in files if f["path"].startswith("build/")]
    gen_mutants = sum(f["size"] for f in gen)

    print(f"{args.image} ({args.mesa}): {len(files)} mutated files, {total:,} mutants, "
          f"IDs 0..{expected - 1:,}")
    for f in gen:
        print(f"  generated: {f['path']}  first ID {f['first']:,}, {f['size']:,} mutants")
    print(f"generated: {len(gen)} files, {gen_mutants:,} mutants ({100 * gen_mutants / total:.1f}%)")

    n_gen = WORDS[len(gen)] if len(gen) < len(WORDS) else str(len(gen))
    macros = ["% Generated by gen_setup_generated.py -- do not edit by hand.",
              f"% from {args.image}, {args.mesa}",
              f"\\newcommand{{\\MutatedFilesCount}}{{{len(files)}}}",
              f"\\newcommand{{\\MutantsTotal}}{{{fmt_int(total)}}}",
              f"\\newcommand{{\\GenFiles}}{{{n_gen}}}",
              f"\\newcommand{{\\GenMutants}}{{{fmt_int(gen_mutants)}}}",
              f"\\newcommand{{\\GenMutantsPct}}{{{100 * gen_mutants / total:.1f}\\%}}"]
    if not args.no_cloc:
        version, code, nfiles = cloc_counts(args.image, args.mesa_src, [f["path"] for f in files])
        all_code = code["source"] + code["generated"]
        print(f"cloc {version} on {args.mesa_src}: {all_code:,} lines of code; hand-written "
              f"{code['source']:,} ({nfiles['source']} files), generated {code['generated']:,} "
              f"({nfiles['generated']} files)")
        if nfiles["source"] + nfiles["generated"] != len(files):
            print(f"note: cloc counted {nfiles['source'] + nfiles['generated']} files of {len(files)} "
                  f"(cloc skips files with identical content)")
        macros += [f"% lines of code: cloc {version} (code lines: no blank or comment lines), "
                   f"unmutated Mesa at {args.mesa_src}",
                   f"\\newcommand{{\\NirLines}}{{{fmt_int(all_code)}}}",
                   f"\\newcommand{{\\NirLinesSource}}{{{fmt_int(code['source'])}}}",
                   f"\\newcommand{{\\NirLinesGenerated}}{{{fmt_int(code['generated'])}}}",
                   f"\\newcommand{{\\NirLinesGeneratedPct}}{{{100 * code['generated'] / all_code:.1f}\\%}}",
                   f"\\newcommand{{\\ClocVersion}}{{{version}}}"]
    with open(args.out, "w") as fh:
        fh.write("\n".join(macros) + "\n")
    print(f"wrote {args.out}")
    if args.ranges_out:
        with open(args.ranges_out, "w") as fh:
            fh.write(f"# from {args.image}, {args.mesa}, by gen_setup_generated.py\n")
            fh.write("first_id,mutants,path\n")
            for f in files:
                fh.write(f"{f['first']},{f['size']},{f['path']}\n")
        print(f"wrote {args.ranges_out} ({len(files)} files)")


if __name__ == "__main__":
    main()