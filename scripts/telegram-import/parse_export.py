"""Parse a Telegram Desktop JSON export into IELTS writing sample candidates.

Usage: python3 -I parse_export.py <export_dir> <repo_dir> <out_json>
"""
import hashlib
import html
import json
import re
import sys
from pathlib import Path

from PIL import Image

EXPORT = Path(sys.argv[1])
REPO = Path(sys.argv[2])
OUT = Path(sys.argv[3])

TAG_RE = re.compile(r"#essayt([12])\b", re.I)
HASHTAG_RE = re.compile(r"#\w+")
URL_RE = re.compile(r"(https?://\S+|t\.me/\S+|www\.\S+)", re.I)
EMOJI_RE = re.compile(
    "[\U0001F000-\U0001FAFF\U00002600-\U000027BF\U0001F900-\U0001F9FF‍️←-⇿⬀-⯿]+"
)
CONT_RE = re.compile(r"^(in conclusion|to conclude|to sum up|overall|in summary|all in all)\b", re.I)
VIDEO_RE = re.compile(r"youtube|youtu\.be|video", re.I)
BAND_RE = re.compile(r"band(?:\s*score)?\s*[:\-–]?\s*([4-9](?:\.[05])?)\b|\b([4-9]\.[05])\s*band", re.I)
NOTE_RE = re.compile(
    r"\b(i wrote|we wrote|with (my )?students|during (our|my|the|one of my)|lesson|ielts group|sample answer for|"
    r"not me|here we go|tepadagi|darsdan|bugungi|guruh|kanal|another essay|another report|file i used|file of the sample)\b",
    re.I,
)
UZ_RE = re.compile(r"\b(uchun|bilan|yozdik|kerak|edi|ham|lekin|bolgan|yozilgan|imtihon\w*|savol\w*|darsdan)\b", re.I)

T1_PROMPT_RE = re.compile(
    r"^(the|these|this)\s+(\w+\s+){0,3}(graph|chart|charts|graphs|table|tables|diagram|diagrams|map|maps|plans?|pictures?|line|bar|pie)\b.{0,250}?\b(shows?|show|illustrates?|gives?|compares?|presents?|provides?|depicts?|describes?)\b",
    re.I | re.S,
)
T2_QMARK_RE = re.compile(
    r"(to what extent|agree or disagree|discuss both|give your (own )?opinion|advantages|disadvantages|outweigh|"
    r"what (are|is|can|do|should)|why (is|do|are)|how (can|could|should)|positive or (a )?negative|\?\s*$)",
    re.I,
)


def text_of(m):
    t = m.get("text", "")
    if isinstance(t, str):
        return t
    return "".join(x if isinstance(x, str) else x.get("text", "") for x in t)


def links_of(m):
    out = []
    for e in m.get("text_entities", []):
        if e.get("type") in ("link", "text_link"):
            out.append(e.get("href") or e.get("text"))
    return out


def clean(t):
    t = HASHTAG_RE.sub("", t)
    t = URL_RE.sub("", t)
    t = EMOJI_RE.sub("", t)
    t = re.sub(r"[ \t]+", " ", t)
    t = re.sub(r" *\n *", "\n", t)
    t = re.sub(r"\n{3,}", "\n\n", t)
    return t.strip()


def norm(t):
    t = HASHTAG_RE.sub(" ", t)
    t = URL_RE.sub(" ", t)
    t = re.sub(r"[^a-z0-9]+", " ", t.lower())
    return re.sub(r"\s+", " ", t).strip()


def shingles(t, k=5):
    w = norm(t).split()
    return {" ".join(w[i : i + k]) for i in range(max(0, len(w) - k + 1))}


def jaccard(a, b):
    if not a or not b:
        return 0.0
    return len(a & b) / len(a | b)


def dhash(path):
    try:
        im = Image.open(path).convert("L").resize((17, 16))
    except Exception:
        return None
    px = list(im.get_flattened_data()) if hasattr(im, 'get_flattened_data') else list(im.getdata())
    bits = 0
    for r in range(16):
        for c in range(16):
            bits = (bits << 1) | (px[r * 17 + c] > px[r * 17 + c + 1])
    return bits


def ham(a, b):
    return bin(a ^ b).count("1")


def words(t):
    return len(re.findall(r"[A-Za-z0-9][A-Za-z0-9'’\-]*", t))


# ---------------------------------------------------------------- units
def build_units(msgs):
    """Group messages into units: albums (photos sharing a timestamp), texts, files."""
    units = []
    for m in msgs:
        if m.get("type") != "message":
            continue
        raw = text_of(m)
        kind = "photo" if "photo" in m else ("file" if "file" in m else "text")
        prev = units[-1] if units else None
        if (
            kind == "photo"
            and prev
            and prev["kind"] == "photo"
            and prev["date"] == m["date"]
            and prev.get("fwd") == m.get("forwarded_from")
            and not raw.strip()
        ):
            prev["photos"].append(m["photo"])
            prev["ids"].append(m["id"])
            continue
        units.append(
            {
                "ids": [m["id"]],
                "date": m["date"],
                "fwd": m.get("forwarded_from"),
                "kind": kind,
                "raw": raw,
                "tags": [int(x) for x in TAG_RE.findall(raw)],
                "links": links_of(m),
                "photos": [m["photo"]] if kind == "photo" else [],
                "file": m.get("file") if kind == "file" else None,
                "file_name": m.get("file_name"),
                "mime": m.get("mime_type"),
            }
        )
    return units


def split_prompt(text, task):
    """Return (note, prompt, body) from a cleaned post text."""
    paras = [p.strip() for p in re.split(r"\n\s*\n|\n(?=[A-Z])", text) if p.strip()]
    note, prompt = [], []
    src = re.match(r"\s*(cambridge\s*\d+\s*test\s*\d+(\s*task\s*\d)?)\s*:?", text, re.I)
    if src:
        note.append(src.group(1).title())
        text = text[src.end():].strip()
        paras = [p.strip() for p in re.split(r"\n\s*\n|\n(?=[A-Z])", text) if p.strip()]
    # leading lesson notes
    while paras and words(paras[0]) < 45 and NOTE_RE.search(paras[0]) and len(paras) > 1:
        note.append(paras.pop(0))
    if paras:
        first = paras[0]
        if task == 1 and T1_PROMPT_RE.search(first) and words(first) < 60 and len(paras) > 1 and (
            re.search(r"\b(below|summari[sz]e|report the main features)\b", first, re.I) or re.search(r"\bshows?\b", first[:120], re.I)
        ):
            prompt.append(paras.pop(0))
            while paras and re.search(r"summari[sz]e|make comparisons|write at least", paras[0], re.I):
                prompt.append(paras.pop(0))
        elif task == 2:
            acc = []
            for i, p in enumerate(paras[:3]):
                acc.append(p)
                if T2_QMARK_RE.search(p) and words(" ".join(acc)) < 90 and len(paras) > i + 1:
                    prompt = acc
                    paras = paras[i + 1 :]
                    break
    return " ".join(note), " ".join(prompt), "\n\n".join(paras)


def classify_t1(s):
    s = s.lower()
    found = []
    for key, pat in [
        ("process", r"process|stages|life cycle|production of|how .* (is|are) (made|produced)|manufactur"),
        ("map", r"\bmaps?\b|\bplans?\b|town|village|island|layout|development of|\bsite\b|before and after|redevelop|harbou?r|airport|campus|hospital|museum|park\b|changes (that )?took place in|floor"),
        ("table", r"\btables?\b"),
        ("pie", r"\bpie\b"),
        ("line", r"\bline\b|line graph"),
        ("bar", r"\bbar\b|column"),
    ]:
        if re.search(pat, s):
            found.append(key)
    if "process" in found and len(found) > 1 and "map" not in found:
        found = [f for f in found if f != "process"] if re.search(r"chart|graph|table", s) else ["process"]
    if not found:
        if re.search(r"\bgraphs?\b", s):
            return "line?"
        if re.search(r"\bcharts?\b", s):
            return "bar?"
        return None
    if len(found) > 1:
        return "mixed"
    return found[0]


def classify_t2(q):
    s = q.lower()
    if re.search(r"advantages?.*disadvantages?|outweigh|positive or (a )?negative (development|trend)", s):
        return "advantages-disadvantages"
    if re.search(r"discuss both|both (these )?views|while others|whereas others", s):
        return "discussion"
    if re.search(r"(problems?|causes?|reasons?|effects?).*(solutions?|solve|measures|tackle|address)|what (can|could|should) be done", s):
        return "problem-solution"
    if re.search(r"agree or disagree|to what extent|do you agree|your (own )?opinion", s):
        return "opinion"
    if len(re.findall(r"\?", s)) >= 2 or re.search(r"what are the (reasons|problems|causes|effects)|why (is|are|do|does)", s):
        return "two-part"
    # inferred from the essay's thesis when no prompt is present
    if re.search(r"outweigh|drawbacks|benefits and (drawbacks|downsides)|pros and cons", s):
        return "advantages-disadvantages?"
    if re.search(r"(problems?|issues?|causes?).{0,200}(solutions?|measures|tackled?|addressed|remed)", s):
        return "problem-solution?"
    if re.search(r"both (views|sides|ideas|opinions)|former view|latter view|while (some|many|others)|others (argue|believe|claim|think)|opponents", s):
        return "discussion?"
    if re.search(r"\bi\b.{0,30}\b(agree|disagree|believe|feel|side with|support|am convinced|opine)", s):
        return "opinion?"
    return None


# ---------------------------------------------------------------- samples
def build_samples(units):
    samples = []
    consumed = set()
    for i, u in enumerate(units):
        if not u["tags"] or i in consumed:
            continue
        task = u["tags"][0]
        text = clean(u["raw"])
        s = {
            "source_ids": list(u["ids"]),
            "task": task,
            "date": u["date"],
            "forwarded": bool(u["fwd"]),
            "photos": list(u["photos"]),
            "file": u["file"],
            "file_name": u["file_name"],
            "links": list(u["links"]),
            "text": text,
            "flags": [],
            "caption_prompt": "",
        }
        # attach a preceding untagged photo/album (the chart + prompt)
        j = i - 1
        if not s["photos"] and j >= 0 and j not in consumed:
            p = units[j]
            if p["kind"] == "photo" and not p["tags"] and words(clean(p["raw"])) < 120:
                s["photos"] = list(p["photos"]) + s["photos"]
                s["caption_prompt"] = clean(p["raw"])
                s["source_ids"] = list(p["ids"]) + s["source_ids"]
                consumed.add(j)
        # merge a following continuation part ("In conclusion..." split across messages)
        k = i + 1
        while k < len(units):
            n = units[k]
            nt = clean(n["raw"])
            if n["kind"] == "text" and n["tags"][:1] == [task] and CONT_RE.match(nt) and words(nt) < 160 and words(text) > 120:
                s["text"] = s["text"] + "\n\n" + nt
                s["source_ids"] += n["ids"]
                consumed.add(k)
                k += 1
            else:
                break
        samples.append(s)
    return samples


def enrich(s):
    task = s["task"]
    note, prompt, body = split_prompt(s["text"], task)
    if not prompt and s["caption_prompt"]:
        cap_note, cap_prompt, cap_rest = split_prompt(s["caption_prompt"] + "\n\nx", task)
        prompt = cap_prompt or s["caption_prompt"].split("\n\n")[0]
    # strip trailing metadata lines ("354 words", "Band 8.0 or 8.5", "the report No323", lesson notes)
    meta = []
    lines = body.rstrip().split("\n")
    while lines and (not lines[-1].strip() or re.match(
        r"\s*(\d+\s*words\.?|.*\bband\b.*|the report no\s*\d+|lesson work.*|written by.*|\(?\d+\s*words\)?)\s*$", lines[-1], re.I)
    ) and len(lines[-1]) < 90:
        if lines[-1].strip():
            meta.insert(0, lines[-1].strip())
        lines.pop()
    body = "\n".join(lines).strip()
    s["meta"] = meta
    s["note"] = note
    s["prompt"] = prompt
    s["body"] = body
    s["word_count"] = words(body)
    bm = re.search(r"band(?:\s*score)?\s*[:\-–]?\s*([4-9](?:\.[05])?)(?:\s*(?:or|-|–|/)\s*([4-9](?:\.[05])?))?", " ".join(meta) + " " + s["caption_prompt"], re.I)
    s["band"] = "–".join(sorted({f"{float(x):.1f}" for x in bm.groups() if x})) if bm else None
    basis = (prompt + " " + s["caption_prompt"] + " " + body[:500]).strip()
    s["type"] = classify_t1(basis) if task == 1 else classify_t2(basis)
    if task == 1 and not s["type"] and s["file_name"]:
        s["type"] = classify_t1(s["file_name"])
    # kind
    raw = s["text"] + " " + " ".join(s["links"])
    if s["file"] and s["word_count"] < 120:
        s["kind"] = "file"
    elif VIDEO_RE.search(raw) and s["word_count"] < 120:
        s["kind"] = "video"
    elif s["photos"] and s["word_count"] < 60:
        s["kind"] = "image"
    else:
        s["kind"] = "essay"
    # flags
    if s["kind"] == "essay":
        lo = 150 if task == 1 else 250
        if s["word_count"] < lo:
            s["flags"].append(f"short ({s['word_count']} words) — overview/partial?")
        if s["word_count"] > 650:
            s["flags"].append(f"very long ({s['word_count']} words) — may contain several essays")
    if not s["type"] and s["kind"] == "essay":
        s["flags"].append("type unclassified")
    if re.match(r"\s*dear\b", s["body"], re.I):
        s["flags"].append("letter (General Training) — not academic Task 1/2")
    if task == 1 and T2_QMARK_RE.search((prompt or s["body"])[:300]) and not T1_PROMPT_RE.search((prompt or s["body"])[:200]):
        s["flags"].append("looks like Task 2 but tagged #essayt1")
    if s["type"] and s["type"].endswith("?"):
        s["type"] = s["type"][:-1]
        s["type_inferred"] = True
    if UZ_RE.search(s["text"]):
        s["flags"].append("contains Uzbek notes")
    if re.search(r"\bnot me\b", s["text"], re.I):
        s["flags"].append("tagged 'not me' — not your writing?")
    if s["forwarded"]:
        s["flags_date"] = "forward date (original date not in export)"
    return s


# ---------------------------------------------------------------- existing site
def existing_site():
    src = (REPO / "src/lib/writing-samples-data.ts").read_text(encoding="utf-8")
    out = []
    for m in re.finditer(
        r'id: "(t[12]-\d+)".*?question:\s*"((?:[^"\\]|\\.)*)".*?content: `(.*?)`', src, re.S
    ):
        sid, q, content = m.groups()
        body = html.unescape(re.sub(r"<[^>]+>", " ", content))
        cover = re.search(r'coverImage: "([^"]+)"', src[m.start() : m.end() + 2000].split("vocabulary")[0])
        out.append({"id": sid, "question": q, "body": body, "cover": cover.group(1) if cover else None})
    return out


def main():
    data = json.loads((EXPORT / "result.json").read_text(encoding="utf-8"))
    units = build_units(data["messages"])
    samples = [enrich(s) for s in build_samples(units)]
    site = existing_site()

    for s in samples:
        s["shingles"] = shingles(s["prompt"] + " " + s["body"]) if s["body"] else set()
        s["body_sh"] = shingles(s["body"]) if s["body"] else set()
        s["hashes"] = [h for h in (dhash(EXPORT / p) for p in s["photos"]) if h is not None]
        s["norm_hash"] = hashlib.sha1(norm(s["body"]).encode()).hexdigest() if words(s["body"]) > 40 else None
    for e in site:
        e["body_sh"] = shingles(e["body"])
        e["hash"] = dhash(REPO / "public" / e["cover"].lstrip("/")) if e["cover"] else None
        e["norm_hash"] = hashlib.sha1(norm(e["body"]).encode()).hexdigest()

    def file_sig(s):
        if not s["file"]:
            return None
        p = EXPORT / s["file"]
        return hashlib.sha1(p.read_bytes()).hexdigest() if p.exists() else None

    kept = []
    for s in samples:
        s["dup_of"] = None
        s["dup_reason"] = None
        fs = file_sig(s)
        # against site
        for e in site:
            if int(e["id"][1]) != s["task"]:
                continue
            j = jaccard(s["body_sh"], e["body_sh"])
            img = e["hash"] is not None and any(ham(h, e["hash"]) <= 6 for h in s["hashes"])
            if (s["norm_hash"] and s["norm_hash"] == e["norm_hash"]) or j >= 0.2 or (img and (j >= 0.15 or s["word_count"] < 60)):
                s["dup_of"], s["dup_reason"] = f"site:{e['id']}", f"text {j:.2f}" + (" + image" if img else "")
                break
            if 0.1 <= j < 0.2 or (img and s["kind"] == "essay"):
                s["flags"].append(f"possible duplicate of site {e['id']} (text {j:.2f}{', same image' if img else ''})")
        if not s["dup_of"]:
            for k in kept:
                if k["task"] != s["task"]:
                    continue
                j = jaccard(s["body_sh"], k["body_sh"])
                img = any(ham(a, b) <= 6 for a in s["hashes"] for b in k["hashes"])
                same_file = fs and fs == k.get("file_sig")
                if j >= 0.3 and s["word_count"] > 1.5 * k["word_count"]:
                    # the new copy is the complete version of an earlier partial one: swap them
                    k["dup_of"], k["dup_reason"] = f"export:{s['source_ids'][-1]}", f"partial version (text {j:.2f})"
                    kept.remove(k)
                    break
                if (s["norm_hash"] and s["norm_hash"] == k["norm_hash"]) or j >= 0.3 or same_file or (
                    img and (j >= 0.2 or (s["word_count"] < 60 and k["word_count"] < 60))
                ):
                    s["dup_of"], s["dup_reason"] = f"export:{k['source_ids'][-1]}", (
                        "same file" if same_file else f"text {j:.2f}" + (" + image" if img else "")
                    )
                    # prefer the richer copy's data: merge photos/date into the kept one
                    if not k["photos"] and s["photos"]:
                        k["photos"] = s["photos"]
                    if k["forwarded"] and not s["forwarded"]:
                        k["date"], k["forwarded"] = s["date"], False
                    break
                if 0.2 <= j < 0.3:
                    s["flags"].append(f"possible duplicate of export msg {k['source_ids'][-1]} (text {j:.2f})")
        s["file_sig"] = fs
        if not s["dup_of"]:
            kept.append(s)

    def public(s):
        return {
            k: v
            for k, v in s.items()
            if k not in ("shingles", "body_sh", "hashes", "norm_hash", "file_sig", "text")
        }

    imported, skipped = [], []
    for s in kept:
        reason = None
        if any("not me" in f for f in s["flags"]):
            reason = "tagged 'not me'"
        elif any(f.startswith("letter") for f in s["flags"]):
            reason = "General Training letter"
        elif s["kind"] == "essay" and s["word_count"] < (150 if s["task"] == 1 else 200):
            reason = f"overview-only / partial ({s['word_count']} words)"
        if any(f.startswith("looks like Task 2") for f in s["flags"]):
            s["task"] = 2
            s["type"] = classify_t2(s["prompt"] or s["body"][:500])
            s["flags"] = [f for f in s["flags"] if not f.startswith("looks like")] + ["moved to Task 2 (was tagged #essayt1)"]
        s["flags"] = [f for f in s["flags"] if not f.startswith("short")]
        if reason:
            skipped.append({"source_ids": s["source_ids"], "task": s["task"], "reason": reason, "start": s["body"][:90]})
        else:
            imported.append(s)

    result = {
        "total_tagged_units": len(samples),
        "kept": [public(s) for s in imported],
        "skipped": skipped,
        "duplicates": [
            {"source_ids": s["source_ids"], "task": s["task"], "dup_of": s["dup_of"], "reason": s["dup_reason"],
             "start": (s["prompt"] or s["body"])[:90]}
            for s in samples if s["dup_of"]
        ],
    }
    OUT.write_text(json.dumps(result, ensure_ascii=False, indent=1), encoding="utf-8")
    print("units", len(units), "samples", len(samples), "kept", len(kept), "dups", len(result["duplicates"]))


if __name__ == "__main__":
    main()
