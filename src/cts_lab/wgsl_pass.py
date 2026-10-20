"""WGSL-aware reduction pass: the edits Perses and C-Vise can't make.

Perses and C-Vise change one place at a time, and every step must leave a valid
program, so they can't (for example) drop a function parameter -- that needs the
parameter *and* every matching argument removed together. This pass makes such
paired edits, keeping each one only if the interestingness test (test.sh) still
passes, and repeats until nothing more can be removed:

  delete-decl     delete a global declaration (var/const/struct/fn, not the entry point)
  inline-fn       inline a function whose body is a single `return <expr>;`
  drop-param      remove a parameter from a function and the argument from every call
  inline-local    replace a local let/var/const by its initialiser, within its function
  drop-member     remove a struct member and the matching argument from every S(...) call

It works on the un-reconditioned program (prog.wgsl), like the other reducers, and
uses the test.sh that reduce.py wrote. The text handling is deliberately simple
(brackets, commas, identifiers): a mangled candidate just fails the test.

Usage:
  as a stage:  python3 -m cts_lab.reduce --reducer perses,cvise,wgsl one results/fuzz/run1 221889
  on its own:  python3 -m cts_lab.wgsl_pass results/reduce-both/221889
               (updates prog.wgsl and reduced.wgsl there; keeps prog.before-wgsl.wgsl)
"""

import argparse
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

TEMPLATE_WORDS = re.compile(r"^(vec[234]|mat[234]x[234]|array|ptr|atomic|bitcast|texture\w*|sampler\w*)$")
ENTRY = re.compile(r"@(compute|vertex|fragment)\b")


# --------------------------------------------------------------------------- #
# Minimal WGSL text structure
# --------------------------------------------------------------------------- #

def strip_comments(src: str) -> str:
    src = re.sub(r"/\*.*?\*/", "", src, flags=re.S)
    return re.sub(r"//[^\n]*", "", src)


def _word_before(src: str, i: int) -> str:
    j = i
    while j > 0 and (src[j - 1].isalnum() or src[j - 1] == "_"):
        j -= 1
    return src[j:i]


def matching_close(src: str, open_idx: int) -> int:
    """Index of the bracket closing the one at open_idx ('(', '[', '{' or a template '<')."""
    stack = []
    i = open_idx
    while i < len(src):
        c = src[i]
        if c in "([{":
            stack.append(c)
        elif c == "<" and TEMPLATE_WORDS.match(_word_before(src, i)):
            stack.append("<")
        elif c in ")]}":
            while stack and stack[-1] == "<":   # an unclosed '<' was a less-than after all
                stack.pop()
            stack.pop()
            if not stack:
                return i
        elif c == ">" and stack and stack[-1] == "<":
            stack.pop()
            if not stack:
                return i
        i += 1
    return -1


def split_top(s: str, sep: str = ",") -> list[tuple[int, int]]:
    """Spans of the parts of s separated by top-level sep (ignoring brackets/templates)."""
    spans, depth, start, i = [], 0, 0, 0
    angle = 0
    while i < len(s):
        c = s[i]
        if c in "([{":
            depth += 1
        elif c in ")]}":
            depth -= 1
        elif c == "<" and TEMPLATE_WORDS.match(_word_before(s, i)):
            angle += 1
        elif c == ">" and angle:
            angle -= 1
        elif c == sep and depth == 0 and angle == 0:
            spans.append((start, i))
            start = i + 1
        i += 1
    if s[start:].strip():
        spans.append((start, len(s)))
    return spans


def top_level_items(src: str) -> list[tuple[int, int]]:
    """(start, end) spans of global declarations, attributes included."""
    items, depth, start, i = [], 0, None, 0
    while i < len(src):
        c = src[i]
        if start is None and not c.isspace():
            start = i
        if c in "([{":
            depth += 1
        elif c in ")]}":
            depth -= 1
            if c == "}" and depth == 0 and start is not None:
                items.append((start, i + 1))
                start = None
        elif c == ";" and depth == 0 and start is not None:
            if src[start:i].strip():
                items.append((start, i + 1))
            start = None
        i += 1
    return items


def item_name(text: str) -> tuple[str, str] | None:
    m = re.search(r"\bfn\s+(\w+)", text) or None
    if m:
        return "fn", m.group(1)
    m = re.search(r"\bstruct\s+(\w+)", text)
    if m:
        return "struct", m.group(1)
    m = re.search(r"\b(var|const|let|override|alias)\b(?:\s*<[^>]*>)?\s+(\w+)", text)
    if m:
        return m.group(1), m.group(2)
    return None


def call_sites(src: str, name: str) -> list[tuple[int, int]]:
    """(open_paren, close_paren) of every call/constructor `name(...)`, excluding the definition."""
    out = []
    for m in re.finditer(rf"\b{re.escape(name)}\s*\(", src):
        before = src[:m.start()].rstrip()
        if before.endswith("fn") or before.endswith("struct"):
            continue
        op = m.end() - 1
        cl = matching_close(src, op)
        if cl > 0:
            out.append((op, cl))
    return out


def apply_edits(src: str, edits: list[tuple[int, int, str]]) -> str:
    for a, b, rep in sorted(edits, key=lambda e: e[0], reverse=True):
        src = src[:a] + rep + src[b:]
    return src


def drop_list_element(src: str, open_idx: int, close_idx: int, k: int) -> tuple[int, int, str] | None:
    """Edit removing element k of the comma list between brackets open_idx..close_idx."""
    inner = src[open_idx + 1:close_idx]
    parts = split_top(inner)
    if k >= len(parts):
        return None
    kept = [inner[a:b].strip() for j, (a, b) in enumerate(parts) if j != k]
    return open_idx + 1, close_idx, ", ".join(kept)


# --------------------------------------------------------------------------- #
# Candidate edits
# --------------------------------------------------------------------------- #

def cand_delete_decl(src):
    for a, b in top_level_items(src):
        text = src[a:b]
        if ENTRY.search(text):
            continue
        yield f"delete-decl {item_name(text)}", src[:a] + src[b:]


def _fn_parts(src, a, b):
    """For a fn item: (name, params_open, params_close, body_open, body_close)."""
    text = src[a:b]
    m = re.search(r"\bfn\s+(\w+)\s*\(", text)
    if not m:
        return None
    po = a + m.end() - 1
    pc = matching_close(src, po)
    bo = src.index("{", pc)
    bc = matching_close(src, bo)
    return m.group(1), po, pc, bo, bc


def cand_inline_fn(src):
    for a, b in top_level_items(src):
        if ENTRY.search(src[a:b]) or not re.search(r"\bfn\b", src[a:b]):
            continue
        parts = _fn_parts(src, a, b)
        if not parts:
            continue
        name, po, pc, bo, bc = parts
        body = src[bo + 1:bc].strip()
        m = re.fullmatch(r"return\s+(.*);", body, flags=re.S)
        if not m or len(split_top(m.group(1), ";")) != 1:
            continue
        expr = m.group(1).strip()
        params = [src[po + 1:pc][x:y].split(":")[0].strip() for x, y in split_top(src[po + 1:pc])]
        edits = []
        for op, cl in call_sites(src, name):
            args = [src[op + 1:cl][x:y].strip() for x, y in split_top(src[op + 1:cl])]
            if len(args) != len(params):
                break
            sub = dict(zip(params, args))
            new = re.sub(r"\b\w+\b", lambda w: f"({sub[w.group(0)]})" if w.group(0) in sub else w.group(0), expr) \
                if sub else expr
            # replace the whole call: from the name to the closing paren
            start = src.rindex(name, 0, op)
            edits.append((start, cl + 1, f"({new})"))
        else:
            if edits:
                yield f"inline-fn {name}", apply_edits(src, edits + [(a, b, "")])


def cand_drop_param(src):
    for a, b in top_level_items(src):
        if ENTRY.search(src[a:b]) or not re.search(r"\bfn\b", src[a:b]):
            continue
        parts = _fn_parts(src, a, b)
        if not parts:
            continue
        name, po, pc, _, _ = parts
        n = len(split_top(src[po + 1:pc]))
        for k in range(n):
            edits = [drop_list_element(src, po, pc, k)]
            for op, cl in call_sites(src, name):
                edits.append(drop_list_element(src, op, cl, k))
            if all(edits):
                yield f"drop-param {name}#{k}", apply_edits(src, edits)


def cand_inline_local(src):
    items = top_level_items(src)
    for m in re.finditer(r"\b(let|var|const)\s+(\w+)\s*(?::[^=;{}]+)?=\s*([^;{}]+);", src):
        name, init = m.group(2), m.group(3).strip()
        end = next((b for a, b in items if a <= m.start() < b), len(src))
        rest = src[m.end():end]
        if not re.search(rf"\b{re.escape(name)}\b", rest):
            continue
        rest = re.sub(rf"\b{re.escape(name)}\b", f"({init})", rest)
        yield f"inline-local {name}", src[:m.start()] + rest + src[end:]


def cand_drop_member(src):
    for a, b in top_level_items(src):
        kind = item_name(src[a:b])
        if not kind or kind[0] != "struct":
            continue
        name = kind[1]
        bo = src.index("{", a)
        bc = matching_close(src, bo)
        sep = ";" if ";" in src[bo + 1:bc] and "," not in src[bo + 1:bc] else ","
        members = split_top(src[bo + 1:bc], sep)
        for k in range(len(members)):
            x, y = members[k]
            member = src[bo + 1 + x:bo + 1 + y].strip()
            mname = re.sub(r"@\w+(\([^)]*\))?", "", member).split(":")[0].strip()
            if re.search(rf"\.{re.escape(mname)}\b", src):
                continue   # still accessed somewhere: removing it can't compile
            kept = [src[bo + 1 + p:bo + 1 + q].strip() for j, (p, q) in enumerate(members) if j != k]
            edits = [(bo + 1, bc, "\n    " + f"{sep}\n    ".join(kept) + "\n")]
            ok = True
            for op, cl in call_sites(src, name):
                if not src[op + 1:cl].strip():
                    continue          # S() zero-value constructor: nothing to remove
                e = drop_list_element(src, op, cl, k)
                if e is None:
                    ok = False
                    break
                edits.append(e)
            if ok:
                yield f"drop-member {name}.{mname}", apply_edits(src, edits)


PASSES = [cand_delete_decl, cand_inline_fn, cand_drop_param, cand_drop_member, cand_inline_local]


# --------------------------------------------------------------------------- #
# Driver
# --------------------------------------------------------------------------- #

def _test_env(work: Path) -> dict[str, str]:
    env = {}
    for line in (work / "test.sh").read_text().splitlines():
        m = re.match(r"export (\w+)=(.*)", line)
        if m:
            env[m.group(1)] = m.group(2).strip("'")
    return env


class Oracle:
    def __init__(self, work: Path, timeout: float = 300):
        self.test = (work / "test.sh").resolve()
        self.timeout = timeout
        self.calls = 0

    def __call__(self, src: str) -> bool:
        self.calls += 1
        with tempfile.TemporaryDirectory() as tmp:
            (Path(tmp) / "prog.wgsl").write_text(src)
            shutil.copy(self.test, Path(tmp) / "test.sh")
            try:
                return subprocess.run(["bash", "test.sh"], cwd=tmp, timeout=self.timeout,
                                      stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL).returncode == 0
            except subprocess.TimeoutExpired:
                return False


def wgslsmith_fmt(wgslsmith: str, src: str) -> str | None:
    with tempfile.TemporaryDirectory() as tmp:
        i, o = Path(tmp) / "in.wgsl", Path(tmp) / "out.wgsl"
        i.write_text(src)
        for cmd in ([wgslsmith, "fmt", str(i), str(o)], [wgslsmith, "fmt", str(i)]):
            try:
                p = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
            except (subprocess.TimeoutExpired, FileNotFoundError):
                return None
            if p.returncode == 0:
                if o.exists() and o.stat().st_size:
                    return o.read_text()
                if p.stdout.strip():
                    return p.stdout
    return None


def reduce_text(src: str, oracle: Oracle, log=print) -> str:
    rounds = 0
    while True:
        rounds += 1
        changed = False
        for gen in PASSES:
            progress = True
            while progress:
                progress = False
                for desc, cand in gen(src):
                    if cand != src and oracle(cand):
                        log(f"    {desc}: {len(src)} -> {len(cand)} bytes")
                        src, progress, changed = cand, True, True
                        break
        if not changed:
            log(f"    no more edits after {rounds} rounds ({oracle.calls} tests)")
            tidy = re.sub(r"\n[ \t]*(\n[ \t]*)+\n", "\n\n", src)
            return tidy if tidy == src or oracle(tidy) else src


def reduce_dir(work: Path, log=print) -> int:
    """Reduce work/prog.wgsl in place. Returns 0 on success (a reducer exit code)."""
    work = Path(work)
    prog = work / "prog.wgsl"
    oracle = Oracle(work)
    env = _test_env(work)
    src = strip_comments(prog.read_text())
    if not oracle(src):
        log("    wgsl pass: prog.wgsl does not pass test.sh; nothing done")
        return 1
    formatted = wgslsmith_fmt(env.get("REDUCE_WGSLSMITH", "wgslsmith"), src)
    if formatted and oracle(formatted):
        src = formatted
    src = reduce_text(src, oracle, log)
    formatted = wgslsmith_fmt(env.get("REDUCE_WGSLSMITH", "wgslsmith"), src)
    if formatted and oracle(formatted):
        src = formatted
    shutil.copy(prog, work / "prog.before-wgsl.wgsl")
    prog.write_text(src)
    return 0


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("work", type=Path, help="a reduce.py work folder (with prog.wgsl and test.sh)")
    args = p.parse_args()
    before = (args.work / "prog.wgsl").read_text()
    if reduce_dir(args.work) != 0:
        sys.exit(1)
    after = (args.work / "prog.wgsl").read_text()
    print(f"prog.wgsl: {len(before.splitlines())} -> {len(after.splitlines())} lines")

    env = _test_env(args.work)
    if env.get("REDUCE_RECONDITION") == "1":
        rc = subprocess.run([env["REDUCE_WGSLSMITH"], "recondition", str(args.work / "prog.wgsl"),
                             str(args.work / "reduced.wgsl")]).returncode
        print("reduced.wgsl updated (reconditioned)" if rc == 0 else "could not recondition: reduced.wgsl unchanged")
    else:
        shutil.copy(args.work / "prog.wgsl", args.work / "reduced.wgsl")
        print("reduced.wgsl updated")
    print("result.json was not updated: rerun the reduction (or check by hand) for verified results")


if __name__ == "__main__":
    main()
