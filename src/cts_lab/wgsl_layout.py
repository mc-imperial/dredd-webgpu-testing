"""WGSL host-shareable memory layout, following WGSL spec §14.4.

Used to tell whether a difference in an output buffer touches real data or only
padding. WGSL §14.1: "Memory operations on composites will not access padding
memory locations" -- so padding must keep its initial contents, and a change
there is still a (distinct kind of) bug. §14.4 defines AccessibleBytes(T), the
byte offsets within T that contain data; everything else is padding.

Supported types: i32 u32 f32 f16 bool atomic<T>, vecN<T>, matCxR<T> (and the
vec3f / mat4x4h style aliases), array<E, N>, runtime-sized array<E>, and
structs with @size / @align member attributes.
"""

import re
from dataclasses import dataclass


class LayoutError(Exception):
    pass


@dataclass(frozen=True)
class Layout:
    align: int
    size: int
    accessible: frozenset[int]   # AccessibleBytes(T)


def round_up(k: int, n: int) -> int:
    """roundUp(k, n): smallest multiple of k that is >= n."""
    return -(-n // k) * k


# --------------------------------------------------------------------------- #
# Parsing
# --------------------------------------------------------------------------- #

_SCALAR = {"i32": (4, 4), "u32": (4, 4), "f32": (4, 4), "f16": (2, 2), "bool": (4, 4)}
_SUFFIX = {"f": "f32", "i": "i32", "u": "u32", "h": "f16"}


def _strip_comments(src: str) -> str:
    src = re.sub(r"/\*.*?\*/", "", src, flags=re.S)
    return re.sub(r"//[^\n]*", "", src)


def _split_top_level(s: str, sep: str = ",") -> list[str]:
    """Split on sep, ignoring separators inside <...> or (...)."""
    parts, depth, cur = [], 0, []
    for ch in s:
        if ch in "<(":
            depth += 1
        elif ch in ">)":
            depth -= 1
        if ch == sep and depth == 0:
            parts.append("".join(cur))
            cur = []
        else:
            cur.append(ch)
    parts.append("".join(cur))
    return [p.strip() for p in parts if p.strip()]


@dataclass
class Member:
    name: str
    type: str
    size_attr: int | None
    align_attr: int | None


def parse_structs(src: str) -> dict[str, list[Member]]:
    src = _strip_comments(src)
    structs: dict[str, list[Member]] = {}
    for m in re.finditer(r"\bstruct\s+(\w+)\s*\{(.*?)\}", src, flags=re.S):
        members = []
        for chunk in _split_top_level(m.group(2)):
            attrs = {a: int(v) for a, v in re.findall(r"@(\w+)\s*\(\s*(\d+)\s*\)", chunk)}
            decl = re.sub(r"@\w+\s*(\([^)]*\))?", "", chunk).strip()
            mm = re.match(r"(\w+)\s*:\s*(.+)$", decl, flags=re.S)
            if not mm:
                raise LayoutError(f"cannot parse struct member: {chunk!r}")
            members.append(Member(mm.group(1), " ".join(mm.group(2).split()),
                                  attrs.get("size"), attrs.get("align")))
        structs[m.group(1)] = members
    return structs


def storage_bindings(src: str) -> dict[str, str]:
    """'group:binding' -> store type, for every var<storage...> in the program."""
    src = _strip_comments(src)
    out = {}
    pattern = r"((?:@\w+\s*(?:\([^)]*\))?\s*)*)var\s*<\s*storage[^>]*>\s*\w+\s*:\s*([^;]+);"
    for m in re.finditer(pattern, src):
        attrs = dict(re.findall(r"@(\w+)\s*\(\s*(\d+)\s*\)", m.group(1)))
        if "group" in attrs and "binding" in attrs:
            out[f"{attrs['group']}:{attrs['binding']}"] = " ".join(m.group(2).split())
    return out


# --------------------------------------------------------------------------- #
# Layout rules (§14.4.1, §14.4.2, §14.4.4)
# --------------------------------------------------------------------------- #

def _normalise(t: str) -> str:
    t = t.replace(" ", "")
    m = re.fullmatch(r"vec([234])([fiuh])", t)
    if m:
        return f"vec{m.group(1)}<{_SUFFIX[m.group(2)]}>"
    m = re.fullmatch(r"mat([234])x([234])([fh])", t)
    if m:
        return f"mat{m.group(1)}x{m.group(2)}<{_SUFFIX[m.group(3)]}>"
    return t


def layout(t: str, structs: dict[str, list[Member]], runtime_len: int | None = None) -> Layout:
    """Layout of type t. runtime_len: element count for a runtime-sized array."""
    t = _normalise(t)

    if t in _SCALAR:
        a, s = _SCALAR[t]
        return Layout(a, s, frozenset(range(s)))

    m = re.fullmatch(r"atomic<(.+)>", t)
    if m:
        return layout(m.group(1), structs)

    m = re.fullmatch(r"vec([234])<(.+)>", t)
    if m:
        n, (sa, ss) = int(m.group(1)), _SCALAR[_normalise(m.group(2))]
        align = 2 * ss if n == 2 else 4 * ss
        return Layout(align, n * ss, frozenset(range(n * ss)))

    m = re.fullmatch(r"mat([234])x([234])<(.+)>", t)
    if m:
        cols, rows, el = int(m.group(1)), int(m.group(2)), m.group(3)
        col = layout(f"vec{rows}<{el}>", structs)
        stride = round_up(col.align, col.size)
        acc = {k + i * stride for i in range(cols) for k in col.accessible}
        return Layout(col.align, cols * stride, frozenset(acc))

    m = re.fullmatch(r"array<(.+)>", t)
    if m:
        args = _split_top_level(m.group(1))
        elem = layout(args[0], structs)
        stride = round_up(elem.align, elem.size)
        if len(args) == 2:
            if not args[1].rstrip("u").isdigit():
                raise LayoutError(f"non-literal array count: {t}")
            count = int(args[1].rstrip("u"))
        elif runtime_len is not None:
            count = runtime_len
        else:
            raise LayoutError(f"runtime-sized array needs a length: {t}")
        acc = {k + i * stride for i in range(count) for k in elem.accessible}
        return Layout(elem.align, count * stride, frozenset(acc))

    if t in structs:
        members = structs[t]
        offset, end, align, acc = 0, 0, 1, set()
        for i, mem in enumerate(members):
            last = i == len(members) - 1
            # A runtime-sized array can only be the last member of a buffer struct.
            ml = layout(mem.type, structs, runtime_len if last else None)
            m_align = mem.align_attr or ml.align
            m_size = mem.size_attr or ml.size
            offset = 0 if i == 0 else round_up(m_align, end)
            acc |= {offset + k for k in ml.accessible}
            end = offset + m_size
            align = max(align, m_align)
        return Layout(align, round_up(align, end), frozenset(acc))

    raise LayoutError(f"unknown type: {t}")


def buffer_accessible_bytes(src: str, binding: str, buffer_len: int) -> frozenset[int]:
    """AccessibleBytes for the storage buffer at 'group:binding', given its byte length."""
    store_type = storage_bindings(src).get(binding)
    if store_type is None:
        raise LayoutError(f"no storage buffer at binding {binding}")
    structs = parse_structs(src)

    # Runtime-sized trailing array: choose the element count that fits buffer_len.
    rt = None
    probe = layout(store_type, structs, runtime_len=0) if _has_runtime_array(store_type, structs) else None
    if probe is not None:
        one = layout(store_type, structs, runtime_len=1)
        stride = one.size - probe.size or 1
        rt = max(0, (buffer_len - probe.size) // stride)
    return layout(store_type, structs, runtime_len=rt).accessible


def _has_runtime_array(t: str, structs: dict[str, list[Member]]) -> bool:
    t = _normalise(t)
    if re.fullmatch(r"array<[^,]+>", t) and "," not in t[6:-1]:
        return True
    if t in structs and structs[t]:
        return _has_runtime_array(structs[t][-1].type, structs)
    return False