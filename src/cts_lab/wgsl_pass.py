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
  inline-body     inline a multi-statement function at each call site (one call per caller):
                  `let p: T = arg;` for each parameter, then the body, then the call
                  replaced by the returned expression
  inline-const    replace a global `const` by its value everywhere
  drop-unused-param  remove a parameter the body never uses (entry points included)

Then, once nothing more can be removed, a polishing phase:

  rename          give wgslsmith-style names (global0, func_1, var_2, Struct_3, and the
                  reconditioner's _wgslsmith_*) short
                  ones: f/g/h for functions, S/T/U for structs, v/w for globals, K/L for
                  consts, a/b/c for parameters, x/y/z for locals. All at once first; one
                  at a time if that fails. Member names and buffer names are kept.

Typed `let`/`var`/`const` are inlined as `T(init)` when T is a scalar, vector or
matrix, so an abstract literal can't silently change type (e.g. u32 to i32).

It works on the un-reconditioned program (prog.wgsl), like the other reducers, and
uses the test.sh that reduce.py wrote. The text handling is deliberately simple
(brackets, commas, identifiers): a mangled candidate just fails the test.

Usage:
  as a stage:  python3 -m cts_lab.reduce --reducer perses,cvise,wgsl one results/fuzz/run1 221889
  on its own:  python3 -m cts_lab.wgsl_pass results/reduce-both/221889
               (updates prog.wgsl and reduced.wgsl there; keeps prog.before-wgsl.wgsl)
  polishing:   python3 -m cts_lab.wgsl_pass results/reduce-batch/<m> --test test_raw.sh
               python3 -m cts_lab.wgsl_pass results/reduce-batch/<m> --passes rename
               python3 -m cts_lab.wgsl_pass results/reduce-batch/<m>/hand --file e.wgsl --test test_raw.sh
  final polish of a reconditioned program, without reconditioning:
               python3 -m cts_lab.wgsl_pass <polish-dir> --file raw.wgsl --test test_raw.sh --passes safe
  --test picks the interestingness script (e.g. a copy of test.sh with REDUCE_RECONDITION=0);
  --file reduces another program in the folder in place (backup: <file>.before-wgsl).
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


LOCAL_DECL = re.compile(r"\b(?:let|var|const)\s*(?:<[^>]*>)?\s+([A-Za-z_]\w*)")
ATTRS = r"(?:@\w+(?:\([^)]*\))?\s*)*"
# Types for which `T(init)` is a value-preserving way to keep an inlined literal's type.
CONVERTIBLE = re.compile(r"^(?:[iu]32|f32|f16|bool|vec[234](?:[iufh]|<.*>)|mat[234]x[234](?:[fh]|<.*>))$", re.S)


def typed(ty: str | None, init: str) -> str:
    ty = (ty or "").strip()
    return f"{ty}({init})" if ty and CONVERTIBLE.match(ty) else f"({init})"


def idents(text: str, base: int = 0) -> list[tuple[int, str]]:
    """(position, name) of identifiers that aren't member accesses or swizzles (after '.')."""
    out = []
    for m in re.finditer(r"(?<![\w.])[A-Za-z_]\w*", text):
        j = m.start() - 1
        while j >= 0 and text[j].isspace():
            j -= 1
        if j >= 0 and text[j] == ".":
            continue
        out.append((base + m.start(), m.group(0)))
    return out


def struct_members(src: str, a: int):
    """For the struct item at a: (body_open, body_close, separator, member spans in the body)."""
    bo = src.index("{", a)
    bc = matching_close(src, bo)
    inner = src[bo + 1:bc]
    sep = ";" if ";" in inner and "," not in inner else ","
    return bo, bc, sep, split_top(inner, sep)


def member_decl_positions(src: str) -> set[int]:
    """Positions of member names in struct declarations (never renamed or inlined into)."""
    pos = set()
    for a, b in top_level_items(src):
        kind = item_name(src[a:b])
        if not kind or kind[0] != "struct":
            continue
        bo, _, _, spans = struct_members(src, a)
        for x, y in spans:
            m = re.match(rf"\s*{ATTRS}([A-Za-z_]\w*)\s*:", src[bo + 1 + x:bo + 1 + y])
            if m:
                pos.add(bo + 1 + x + m.start(1))
    return pos


def fn_items(src: str) -> list[tuple]:
    """(start, end, name, params_open, params_close, body_open, body_close) for each function."""
    out = []
    for a, b in top_level_items(src):
        if re.search(r"\bfn\b", src[a:b]):
            try:
                parts = _fn_parts(src, a, b)
            except ValueError:
                parts = None
            if parts:
                out.append((a, b) + parts)
    return out


def fn_params(src: str, po: int, pc: int) -> list[tuple[str, str]]:
    """(name, type) of each parameter, attributes stripped."""
    out = []
    for x, y in split_top(src[po + 1:pc]):
        m = re.match(rf"\s*{ATTRS}([A-Za-z_]\w*)\s*:\s*(.*?)\s*$", src[po + 1 + x:po + 1 + y], re.S)
        if m:
            out.append((m.group(1), m.group(2)))
    return out


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


SIMPLE_ARG = re.compile(r"^\s*(?:[A-Za-z_][\w.]*|[-+]?[\d.]+[a-z]*|\(\s*\))\s*$")


def cand_inline_fn(src):
    """Inline a function whose body is `return <expr>;` at every call, innermost call
    first (so f(g(f(x))) works). Skipped if a parameter is used more than once in expr
    and some call passes it a non-trivial argument: that would copy the argument."""
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
        params = [p for p, _ in fn_params(src, po, pc)]
        uses = {p: sum(1 for _, n in idents(expr) if n == p) for p in params}
        cur = src[:a] + src[b:]               # drop the definition first
        ok, done = True, 0
        while True:
            calls = call_sites(cur, name)
            if not calls:
                break
            # innermost: a call with no other call to name inside its parentheses
            inner = [(op, cl) for op, cl in calls
                     if not any(op < o2 < cl for o2, _ in calls)]
            op, cl = inner[0]
            args = [cur[op + 1:cl][x:y].strip() for x, y in split_top(cur[op + 1:cl])]
            if len(args) != len(params) or any(
                    uses[p] > 1 and not SIMPLE_ARG.match(v) for p, v in zip(params, args)):
                ok = False
                break
            sub = dict(zip(params, args))
            new = "".join(f"({sub[n]})" if n in sub else n
                          for n in re.split(r"(\b\w+\b)", expr)) if sub else expr
            start = cur.rindex(name, 0, op)
            cur = cur[:start] + f"({new})" + cur[cl + 1:]
            done += 1
        if ok and done:
            yield f"inline-fn {name}", cur


def _arg_is_pure(arg: str, user_fns: set[str]) -> bool:
    """No call to a user function (the only calls that could have side effects here)."""
    return not any(re.search(rf"\b{re.escape(f)}\s*\(", arg) for f in user_fns)


def cand_drop_unused_param(src):
    """Remove a parameter the function never uses (and its argument at every call, if
    that argument has no calls to user functions). Entry points included: an unused
    @builtin parameter does nothing."""
    fns = fn_items(src)
    user_fns = {f[2] for f in fns}
    for a, b, name, po, pc, bo, bc in fns:
        params = fn_params(src, po, pc)
        used = {n for _, n in idents(src[bo:bc])}
        for k, (p, _) in enumerate(params):
            if p in used:
                continue
            edits = [drop_list_element(src, po, pc, k)]
            for op, cl in call_sites(src, name):
                e = drop_list_element(src, op, cl, k)
                arg = src[op + 1:cl][slice(*split_top(src[op + 1:cl])[k])] if e else ""
                if e is None or not _arg_is_pure(arg, user_fns):
                    edits = [None]
                    break
                edits.append(e)
            if all(edits):
                yield f"drop-unused-param {name}.{p}", apply_edits(src, edits)


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


def _assigned(name: str, text: str) -> bool:
    """Whether text assigns to name (or a part of it), increments it, or takes its address."""
    n = re.escape(name)
    return bool(re.search(rf"(?:^|[;{{}}])\s*{n}\b[^;=]*?(?:[-+*/%&|^]|<<|>>)?=(?!=)", text)
                or re.search(rf"(?<![\w.]){n}\b\s*(?:\+\+|--)", text)
                or re.search(rf"&\s*{n}\b", text))


def cand_inline_local(src):
    items = top_level_items(src)
    for m in re.finditer(r"\b(let|var|const)\s+(\w+)\s*(?::([^=;{}]+))?=\s*([^;{}]+);", src):
        name, ty, init = m.group(2), m.group(3), m.group(4).strip()
        end = next((b for a, b in items if a <= m.start() < b), len(src))
        rest = src[m.end():end]
        if not re.search(rf"\b{re.escape(name)}\b", rest):
            continue
        if m.group(1) == "var" and _assigned(name, rest):
            continue
        val = typed(ty, init)
        rest = re.sub(rf"(?<!\.)\b{re.escape(name)}\b", lambda _: val, rest)
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


CONTROL_HEAD = re.compile(r"\s*(?:if|else|while|for|switch|loop|case|default|break|continuing)\b")


def _statement_start(src: str, body_open: int, i: int) -> int | None:
    """Start of the statement containing position i in the function body that opens at
    body_open, or None if i is inside parentheses that contain a ';' (a for header)."""
    j = i
    while j > body_open + 1 and src[j - 1] not in ";{}":
        j -= 1
    before = src[body_open + 1:j]
    if before.count("(") != before.count(")"):
        return None
    return j


def _callee_parts(text: str):
    """For a function's text: (params, statements before the final return, returned
    expression or None), or None if it has another return or nothing before the return."""
    m = re.search(r"\bfn\s+\w+\s*\(", text)
    po = m.end() - 1
    pc = matching_close(text, po)
    bo = text.index("{", pc)
    bc = matching_close(text, bo)
    body = text[bo + 1:bc]
    rets = [r.start() for r in re.finditer(r"\breturn\b", body)]
    if len(rets) > 1:
        return None
    expr, pre = None, body
    if rets:
        r = re.search(r"\breturn\b(.*);\s*$", body, re.S)
        if not r or r.start() != rets[0]:
            return None
        expr, pre = r.group(1).strip(), body[:r.start()]
        if not expr or len(split_top(expr, ";")) != 1:
            return None
    if not pre.strip():
        return None                       # a bare `return e;`: inline-fn's job
    return fn_params(text, po, pc), pre.strip(), expr


def cand_inline_body(src):
    """Inline a function with several statements: `let p: T = arg;` per parameter, the
    body before the final `return e;`, and the call replaced by (e). Only where it's
    clearly safe: one return, at the end; at most one call per caller; the call isn't in
    a control-flow header; no global the callee uses is shadowed in the caller. Callee
    parameters and locals whose names the caller already uses get a fresh name first."""
    fns = fn_items(src)
    for a, b, name, po, pc, bo, bc in fns:
        if ENTRY.search(src[a:b]) or _callee_parts(src[a:b]) is None:
            continue
        text = src[a:b]
        callee_ids = {n for _, n in idents(text)}
        callee_decls = {p for p, _ in fn_params(src, po, pc)} | set(LOCAL_DECL.findall(src[bo:bc]))
        free = callee_ids - callee_decls
        calls = call_sites(src, name)
        if not calls:
            continue
        edits, ok, callers = [], True, set()
        for op, cl in calls:
            start = src.rindex(name, 0, op)
            caller = next((f for f in fns if f[0] <= start < f[1]), None)
            if caller is None or caller[0] == a or caller[0] in callers:
                ok = False
                break
            callers.add(caller[0])
            ca, cb, _, cpo, cpc, cbo, cbc = caller
            s = _statement_start(src, cbo, start)
            if s is None or CONTROL_HEAD.match(src[s:start]):
                ok = False
                break
            caller_ids = {n for _, n in idents(src[ca:cb])}
            caller_decls = {p for p, _ in fn_params(src, cpo, cpc)} | set(LOCAL_DECL.findall(src[cbo:cbc]))
            if free & caller_decls:
                ok = False                # the caller shadows a global the callee uses
                break
            # give clashing callee names fresh ones, e.g. arg_0 -> arg_0_1
            taken = caller_ids | callee_ids
            plan = []
            for old in sorted(callee_decls & caller_ids):
                i = 1
                while f"{old}_{i}" in taken:
                    i += 1
                taken.add(f"{old}_{i}")
                plan.append((old, f"{old}_{i}", 0, len(text)))
            parts = _callee_parts(apply_renames(text, plan) if plan else text)
            if parts is None:
                ok = False
                break
            params, pre, expr = parts
            args = [src[op + 1:cl][x:y].strip() for x, y in split_top(src[op + 1:cl])]
            if len(args) != len(params):
                ok = False
                break
            prelude = "".join(f"let {p}: {t} = {v};\n" for (p, t), v in zip(params, args)) + pre + "\n"
            if not src[s:start].strip():
                # the call is the whole statement
                k = cl + 1
                while k < len(src) and src[k].isspace():
                    k += 1
                if k >= len(src) or src[k] != ";":
                    ok = False
                    break
                tail = f"_ = ({expr});\n" if expr is not None else ""
                edits.append((s, k + 1, "\n" + prelude + tail))
            elif expr is None:
                ok = False
                break
            else:
                edits.append((s, s, "\n" + prelude))
                edits.append((start, cl + 1, f"({expr})"))
        if ok and edits:
            yield f"inline-body {name}", apply_edits(src, edits + [(a, b, "")])


def cand_inline_const(src):
    members = member_decl_positions(src)
    for a, b in top_level_items(src):
        m = re.fullmatch(r"\s*const\s+(\w+)\s*(?::\s*([^=]+?))?\s*=\s*(.*?);\s*", src[a:b], re.S)
        if not m:
            continue
        name, ty, init = m.group(1), m.group(2), m.group(3).strip()
        val = typed(ty, init)
        edits = [(p, p + len(name), val) for p, n in idents(src)
                 if n == name and not a <= p < b and p not in members]
        if edits:                         # unused ones are delete-decl's job
            yield f"inline-const {name}", apply_edits(src, edits + [(a, b, "")])


# --------------------------------------------------------------------------- #
# Polishing: names
# --------------------------------------------------------------------------- #

# Names that look machine-generated: global0, func_1, var_2, Struct_3, _arg4, and the
# arg_0_1 that inline-body makes. Readable names (u_input, counter) are left alone.
# Also everything the reconditioner adds (_wgslsmith_f_op_vec4_f32, ...).
GENERATED = re.compile(r"^(?:_?[A-Za-z]+(?:_?\d+)+|_wgslsmith_\w+)$")
POOLS = {"fn": "f g h".split(), "struct": "S T U".split(), "var": "v w p q".split(),
         "const": "K L M N".split(), "override": "K L M N".split(), "alias": "A B".split(),
         "let": "K L M N".split(), "param": "a b c d e".split(), "local": "t r q i j k".split()}


def _fresh(kind: str, taken: set[str]) -> str:
    pool = POOLS.get(kind, ["n"])
    for n in pool:
        if n not in taken:
            return n
    i = 1
    while f"{pool[0]}{i}" in taken:
        i += 1
    return f"{pool[0]}{i}"


def rename_plan(src: str) -> list[tuple[str, str, int, int]]:
    """(old, new, scope_start, scope_end) for every generated-looking declared name."""
    members = member_decl_positions(src)
    ids = [(p, n) for p, n in idents(src) if p not in members]
    taken = {n for _, n in ids}
    globals_, entries = {}, set()
    for a, b in top_level_items(src):
        kind = item_name(src[a:b])
        if kind:
            globals_.setdefault(kind[1], kind[0])
            if ENTRY.search(src[a:b]):
                entries.add(kind[1])
    plan = []
    for name, kind in globals_.items():
        if GENERATED.match(name) and name not in entries:
            new = _fresh(kind, taken)
            taken.add(new)
            plan.append((name, new, 0, len(src)))
    global_names = set(globals_) | {new for _, new, _, _ in plan}
    for a, b, _, po, pc, bo, bc in fn_items(src):
        scope_taken = {n for p, n in ids if a <= p < b} | global_names
        seen = set()
        decls = [(p, "param") for p, _ in fn_params(src, po, pc)]
        decls += [(n, "local") for n in LOCAL_DECL.findall(src[bo:bc])]
        for old, kind in decls:
            if old in seen or old in globals_ or not GENERATED.match(old):
                continue
            seen.add(old)
            new = _fresh(kind, scope_taken)
            scope_taken.add(new)
            plan.append((old, new, a, b))
    return plan


def apply_renames(src: str, plan) -> str:
    members = member_decl_positions(src)
    edits, done = [], set()
    for old, new, lo, hi in plan:
        for p, n in idents(src[lo:hi], lo):
            if n == old and p not in members and p not in done:
                edits.append((p, p + len(old), new))
                done.add(p)
    return apply_edits(src, edits)


def cand_rename(src):
    plan = rename_plan(src)
    if not plan:
        return
    yield "rename " + ", ".join(f"{o}->{n}" for o, n, _, _ in plan), apply_renames(src, plan)
    if len(plan) > 1:
        for step in plan:
            yield f"rename {step[0]}->{step[1]}", apply_renames(src, [step])


PASSES = {"delete-decl": cand_delete_decl, "inline-fn": cand_inline_fn, "inline-body": cand_inline_body,
          "drop-unused-param": cand_drop_unused_param,
          "drop-param": cand_drop_param, "drop-member": cand_drop_member,
          "inline-local": cand_inline_local, "inline-const": cand_inline_const}
FINAL_PASSES = {"rename": cand_rename}     # run once the others have converged
# Passes that keep the program's meaning (they only inline, rename or delete unused
# declarations), so they are safe on a reconditioned program checked without
# reconditioning: inlining a _wgslsmith_* helper keeps its guard. The others aren't.
PRESETS = {"safe": ["delete-decl", "inline-fn", "inline-body", "drop-unused-param", "inline-local",
                    "inline-const", "rename"]}


# --------------------------------------------------------------------------- #
# Driver
# --------------------------------------------------------------------------- #

def _test_env(work: Path, test: str = "test.sh") -> dict[str, str]:
    env = {}
    for line in (work / test).read_text().splitlines():
        m = re.match(r"export (\w+)=(.*)", line)
        if m:
            env[m.group(1)] = m.group(2).strip("'")
    return env


class Oracle:
    def __init__(self, work: Path, timeout: float = 300, test: str = "test.sh"):
        self.test = (work / test).resolve()
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


def _fixpoint(src: str, gens, oracle, log, rejected: set[str]) -> str:
    """Apply the first passing candidate of each generator until none makes progress."""
    rounds = 0
    while True:
        rounds += 1
        changed = False
        for gen in gens:
            progress = True
            while progress:
                progress = False
                for desc, cand in gen(src):
                    if cand == src or cand in rejected:
                        continue
                    if oracle(cand):
                        log(f"    {desc}: {len(src)} -> {len(cand)} bytes")
                        src, progress, changed = cand, True, True
                        break
                    rejected.add(cand)
        if not changed:
            log(f"    no more edits after {rounds} rounds ({getattr(oracle, 'calls', '?')} tests so far)")
            return src


def reduce_text(src: str, oracle, log=print, passes=None, final=None) -> str:
    """Reduce with `passes` to a fixpoint, then polish with `final` (default: rename)."""
    passes = list(PASSES.values()) if passes is None else passes
    final = list(FINAL_PASSES.values()) if final is None else final
    rejected: set[str] = set()       # candidates already tested and failed
    if passes:
        src = _fixpoint(src, passes, oracle, log, rejected)
    if final:
        src = _fixpoint(src, final, oracle, log, rejected)
    tidy = re.sub(r"\n[ \t]*(\n[ \t]*)+\n", "\n\n", src)
    return tidy if tidy == src or oracle(tidy) else src


def select_passes(names: str | None, rename: bool = True):
    """(passes, final) from a comma-separated list of pass names; None means all."""
    if names is None:
        return list(PASSES.values()), list(FINAL_PASSES.values()) if rename else []
    every = {**PASSES, **FINAL_PASSES}
    wanted = [w for n in names.split(",") if n.strip()
              for w in PRESETS.get(n.strip(), [n.strip()])]
    unknown = [n for n in wanted if n not in every]
    if unknown:
        raise SystemExit(f"unknown pass(es) {', '.join(unknown)}; choose from {', '.join(every)}")
    return ([PASSES[n] for n in wanted if n in PASSES],
            [FINAL_PASSES[n] for n in wanted if n in FINAL_PASSES and rename])


def reduce_dir(work: Path, log=print, *, test: str = "test.sh", file: str = "prog.wgsl",
               passes: str | None = None, rename: bool = True) -> int:
    """Reduce work/<file> in place. Returns 0 on success (a reducer exit code)."""
    work = Path(work)
    prog = work / file
    oracle = Oracle(work, test=test)
    env = _test_env(work, test)
    gens, final = select_passes(passes, rename)
    src = strip_comments(prog.read_text())
    if not oracle(src):
        log(f"    wgsl pass: {file} does not pass {test}; nothing done")
        return 1
    fmt = env.get("REDUCE_WGSLSMITH", "wgslsmith")
    formatted = wgslsmith_fmt(fmt, src)
    if formatted and oracle(formatted):
        src = formatted
    src = reduce_text(src, oracle, log, gens, final)
    formatted = wgslsmith_fmt(fmt, src)
    if formatted and oracle(formatted):
        src = formatted
    backup = "prog.before-wgsl.wgsl" if file == "prog.wgsl" else f"{file}.before-wgsl"
    shutil.copy(prog, work / backup)
    prog.write_text(src)
    return 0


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("work", type=Path, help="a reduce.py work folder (with prog.wgsl and test.sh)")
    p.add_argument("--test", default="test.sh",
                   help="interestingness script in the folder (default test.sh; e.g. test_raw.sh)")
    p.add_argument("--file", default="prog.wgsl", help="program in the folder to reduce in place")
    p.add_argument("--passes", help="comma-separated passes to run (default: all): "
                                    + ", ".join([*PASSES, *FINAL_PASSES])
                                    + "; or 'safe' for the meaning-preserving ones: "
                                    + ", ".join(PRESETS["safe"]))
    p.add_argument("--no-rename", action="store_true", help="skip the final rename phase")
    args = p.parse_args()
    target = args.work / args.file
    before = target.read_text()
    if reduce_dir(args.work, test=args.test, file=args.file, passes=args.passes,
                  rename=not args.no_rename) != 0:
        sys.exit(1)
    after = target.read_text()
    print(f"{args.file}: {len(before.splitlines())} -> {len(after.splitlines())} lines")
    if args.file != "prog.wgsl":
        return

    env = _test_env(args.work, args.test)
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