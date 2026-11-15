"""Build the imported writing-samples library (JSON + WebP images + files) from parsed.json.

Usage: python3 -I build_library.py <scratch_dir> <export_dir> <repo_dir>
"""
import html
import json
import re
import shutil
import sys
from pathlib import Path

from PIL import Image

SCRATCH, EXPORT, REPO = (Path(p) for p in sys.argv[1:4])
parsed = json.loads((SCRATCH / "parsed.json").read_text(encoding="utf-8"))
over_t1 = json.loads((SCRATCH / "overrides_t1.json").read_text(encoding="utf-8"))
over_t2 = json.loads((SCRATCH / "overrides_t2.json").read_text(encoding="utf-8"))
manual = json.loads((SCRATCH / "overrides_manual.json").read_text(encoding="utf-8"))
INTRO_NOT_PROMPT = {249, 257, 258, 361, 383}
QUESTION_TYPOS = [(r"\btpyes\b", "types"), (r"\bbelows shows\b", "below shows"), (r"\bfour different counties\b", "four different countries"),
                  (r"\bcollage\b", "college"), (r"\bTo what extend\b", "To what extent"), (r"\bTo some extend\b", "To what extent"),
                  (r"，", ", "), (r"\bThe table show\b", "The table shows"), (r"\bWhy is the case\b", "Why is this the case"),
                  (r"\bWhy is this case\b", "Why is this the case"), (r"\bt\.v\.", "TV"), (r"\bshows the information about\b", "show information about")]


def tidy_question(q):
    for pat, rep in QUESTION_TYPOS:
        q = re.sub(pat, rep, q)
    q = re.sub(r"\s+", " ", q).strip()
    q = q[0].upper() + q[1:] if q else q
    if q and q[-1] not in ".?!" and len(q.split()) > 6:
        q += "?" if re.search(r"(outweigh|agree or disagree|opinion|development|why|what|how)[^.]*$", q, re.I) and not q.lower().startswith("the ") else "."
    return q

IMG_DIR = REPO / "public/writing-samples/library"
FILE_DIR = REPO / "public/writing-samples/files"
DATA_DIR = REPO / "src/data/writing-samples"
THUMB_W, FULL_W = 480, 1400
LEGACY_T1_MAX, LEGACY_T2_MAX = 38, 28

# Posts skipped after manual review (in addition to the parser's rules).
MANUAL_SKIP = {
    93: "overview-only (photo + one paragraph)",
    230: "writing guide, not a sample",
}
# Posts whose first paragraph is the original question (moved into `question`).
PROMPT_IN_FIRST_PARA = {534, 567}
MOVE_TO_T2 = {204, 224, 229}
T1_MIN, T2_MIN = 150, 200

T1_LABEL = {"line": "Line Graph", "bar": "Bar Chart", "table": "Table", "pie": "Pie Chart",
            "map": "Map", "process": "Process", "mixed": "Mixed"}

CTA_RE = re.compile(r"(comment|share|like|subscribe|watch till the end|kanal|link).{0,80}$", re.I)


def classify_t1(text):
    s = text.lower()
    found = []
    for key, pat in [
        ("process", r"\bprocess\b|stages|how .* (is|are) (made|produced|built)|filtration|igloo|cultivation"),
        ("map", r"\bmaps?\b|\bplans?\b|layout|redevelop|harbou?r|before and after|development of a town"),
        ("table", r"\btables?\b"),
        ("pie", r"\bpie\b"),
        ("line", r"\bline graphs?\b|\bline\b"),
        ("bar", r"\bbar\b"),
    ]:
        if re.search(pat, s):
            found.append(key)
    if "map" in found and "process" in found:
        found.remove("process")
    if len(found) > 1:
        return "Mixed"
    if found:
        return T1_LABEL[found[0]]
    if re.search(r"\bdiagram", s):
        return "Process"
    if re.search(r"\bcharts\b|\bgraphs\b", s):
        return "Mixed"
    if re.search(r"\bchart\b", s):
        return "Bar Chart"
    if re.search(r"\bgraph\b", s):
        return "Line Graph"
    return None


def classify_t2(q, hint=None):
    s = q.lower()
    if re.search(r"positive or (a )?negative", s) and len(re.findall(r"\?", s)) < 2:
        return "Positive/Negative Development"
    if re.search(r"advantages?.*outweigh|outweigh", s):
        return "Advantages/Disadvantages"
    if re.search(r"discuss both|both (these )?views", s):
        return "Discussion"
    if re.search(r"agree or disagree|to what extent", s) and len(re.findall(r"\?", s)) < 2:
        return "Agree/Disagree"
    if re.search(r"(cause|reason|problem)s?.{0,120}(solution|solve|done|measures|prevent|encourage|tackle)", s):
        return "Problem/Solution"
    if len(re.findall(r"\?", s)) >= 2:
        return "Two-Part Question"
    if re.search(r"\?\s*$", s):
        return "Direct Question"
    return {
        "opinion": "Agree/Disagree", "discussion": "Discussion", "advantages-disadvantages": "Advantages/Disadvantages",
        "problem-solution": "Problem/Solution", "two-part": "Two-Part Question",
    }.get(hint or "")


def paragraphs(text):
    text = text.replace("\r", "")
    parts = re.split(r"\n\s*\n", text) if "\n\n" in text else text.split("\n")
    return [re.sub(r"\s+", " ", p).strip() for p in parts if p.strip()]


def to_html(paras):
    return "\n".join(f"<p>{html.escape(p, quote=False)}</p>" for p in paras)


def words(t):
    return len(re.findall(r"[A-Za-z0-9][A-Za-z0-9'’\-]*", t))


def clean_note(note):
    lines = [ln.strip() for ln in re.split(r"\n|(?<=[.!])\s{2,}", note) if ln.strip()]
    return " ".join(ln for ln in lines if not CTA_RE.search(ln)).strip()


def file_title(name):
    stem = re.sub(r"\.(pdf|docx?)$", "", name, flags=re.I)
    stem = re.sub(r"[_]+", " ", stem)
    stem = re.sub(r"\s*\(\d+\)\s*$", "", stem).strip()
    return stem[0].upper() + stem[1:] if stem else name


def slug(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")[:60]


def convert(src: Path, base: str):
    im = Image.open(src)
    im = im.convert("RGBA") if im.mode in ("P", "LA") else im
    if im.mode == "RGBA":
        bg = Image.new("RGB", im.size, "white")
        bg.paste(im, mask=im.split()[-1])
        im = bg
    else:
        im = im.convert("RGB")
    out = {}
    for label, width, q in (("thumb", THUMB_W, 72), ("full", FULL_W, 82)):
        w = min(width, im.width)
        h = round(im.height * w / im.width)
        dst = IMG_DIR / f"{base}-{label}.webp"
        im.resize((w, h), Image.LANCZOS).save(dst, "WEBP", quality=q, method=6)
        out[label] = {"src": f"/writing-samples/library/{dst.name}", "w": w, "h": h}
    return out


def main():
    IMG_DIR.mkdir(parents=True, exist_ok=True)
    FILE_DIR.mkdir(parents=True, exist_ok=True)
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    skipped = list(parsed["skipped"])
    records = {1: [], 2: []}
    review = []

    for s in sorted(parsed["kept"], key=lambda x: x["source_ids"][0]):
        sid = s["source_ids"][-1]
        first = s["source_ids"][0]
        task = 2 if sid in MOVE_TO_T2 else s["task"]
        has_youtube = any(re.search(r"youtu", link or "") for link in s["links"])
        kind = s["kind"]
        if kind == "video" and not has_youtube:
            kind = "essay"
        body = s["body"]
        body = re.sub(r"^\s*(NEW ONES|the report itself:)\s*", "", body, flags=re.I)
        question, qsource = s["prompt"].strip(), "original" if s["prompt"].strip() else "none"

        if first in MANUAL_SKIP or sid in MANUAL_SKIP:
            skipped.append({"source_ids": s["source_ids"], "task": task, "reason": MANUAL_SKIP.get(first) or MANUAL_SKIP[sid], "start": body[:90]})
            continue

        if sid in INTRO_NOT_PROMPT:
            body = question + "\n\n" + body
            question, qsource = "", "none"
        if sid == 88:
            body = re.sub(r"^\s*VERSION 1\s*", "", body)
        if sid in PROMPT_IN_FIRST_PARA:
            paras = paragraphs(body)
            question, qsource, body = paras[0], "original", "\n\n".join(paras[1:])
        if sid == 584:
            m = re.search(r"agree or disagree\?\s*", body, re.I)
            body = body[m.end():] if m else body

        wc = words(body)
        if kind == "essay" and wc < (T1_MIN if task == 1 else T2_MIN):
            skipped.append({"source_ids": s["source_ids"], "task": task, "reason": f"overview-only / partial ({wc} words)", "start": body[:90]})
            continue

        etype_hint = s.get("type")
        if task == 1 and str(sid) in over_t1:
            question, qsource = over_t1[str(sid)], "reconstructed"
        if task == 2 and str(sid) in over_t2:
            question, qsource = over_t2[str(sid)][0], "reconstructed"
            etype_hint = over_t2[str(sid)][1]

        if str(sid) in manual:
            question, etype_hint = manual[str(sid)][0], manual[str(sid)][1]
            qsource = "original" if sid in (103, 108, 109, 122, 123, 124, 134, 138, 678, 680, 681, 682, 703, 707, 696, 716, 717, 715, 710) else "reconstructed"
        note = clean_note(s.get("note", ""))
        if str(sid) in manual and len(manual[str(sid)]) > 2:
            note = manual[str(sid)][2]
        if kind in ("file", "image", "video"):
            extra = clean_note(body)
            note = (note + " " + extra).strip() if kind != "image" or wc < 60 else note
            if kind != "image" or wc < 60:
                body = ""
                wc = 0
        if not question and str(sid) not in manual:
            if kind == "file" and s["file_name"]:
                question, qsource = file_title(s["file_name"]), "file-name"
            elif note:
                question, qsource = note[:200], "caption"

        if qsource == "caption" and question and note and note.startswith(question[:40]):
            qsource, note = "original", ""
        question = tidy_question(question)
        if str(sid) in manual:
            label = manual[str(sid)][1]
        elif task == 1:
            label = classify_t1(question + " " + (s["file_name"] or "")) or classify_t1(body[:400])
            if not label and etype_hint:
                label = T1_LABEL.get(etype_hint)
        else:
            label = classify_t2(question, etype_hint) if question else None
            if not label and etype_hint:
                label = classify_t2("", etype_hint)
        if task == 2 and str(sid) in over_t2 and str(sid) not in manual:
            hint = over_t2[str(sid)][1]
            label = {"opinion": "Agree/Disagree", "discussion": "Discussion", "problem-solution": "Problem/Solution",
                     "advantages-disadvantages": "Positive/Negative Development" if re.search(r"positive or (a )?negative", question, re.I) else "Advantages/Disadvantages",
                     "two-part": "Two-Part Question" if question.count("?") >= 2 else "Direct Question"}[hint]
        label = label or "Other"

        flags = [f for f in s["flags"] if not f.startswith(("type unclassified", "moved to Task 2"))]
        if label == "Other" and str(sid) not in manual:
            flags.append("type could not be determined")
        if sid in MOVE_TO_T2 or any(f.startswith("moved to Task 2") for f in s["flags"]):
            flags.append("tagged #essayt1 but is a Task 2 essay — moved to Task 2")
        if qsource == "reconstructed":
            flags.append("question reconstructed from the answer")

        rec = {
            "sourceIds": s["source_ids"],
            "task": task,
            "kind": kind,
            "type": label,
            "question": question,
            "questionSource": qsource,
            "content": to_html(paragraphs(body)) if body else "",
            "wordCount": wc,
            "band": s.get("band"),
            "date": None if s["forwarded"] else s["date"][:10],
            "note": note or None,
            "videoUrl": next((link for link in s["links"] if re.search(r"youtu", link or "")), None),
            "images": [],
            "file": None,
            "_photos": s["photos"],
            "_file": s["file"],
            "_file_name": s["file_name"],
        }
        records[task].append(rec)
        if [f for f in flags if f != "question reconstructed from the answer"]:
            review.append((rec, flags))
        rec["_flags"] = flags

    # assign ids, convert media
    out = {}
    for task, recs in records.items():
        start = (LEGACY_T1_MAX if task == 1 else LEGACY_T2_MAX) + 1
        items = []
        for i, rec in enumerate(recs):
            num = start + i
            rec["id"] = f"t{task}-{num}"
            rec["number"] = num
            for n, p in enumerate(rec.pop("_photos")):
                rec["images"].append(convert(EXPORT / p, f"{rec['id']}-{n + 1}"))
            fsrc, fname = rec.pop("_file"), rec.pop("_file_name")
            if fsrc and (EXPORT / fsrc).exists():
                ext = Path(fname).suffix.lower()
                dst = FILE_DIR / f"{rec['id']}-{slug(Path(fname).stem)}{ext}"
                shutil.copyfile(EXPORT / fsrc, dst)
                rec["file"] = {"href": f"/writing-samples/files/{dst.name}", "name": fname,
                               "ext": ext.lstrip("."), "size": dst.stat().st_size}
            rec["needsReview"] = [f for f in rec.pop("_flags") if f != "question reconstructed from the answer"] or None
            ordered = {k: rec[k] for k in ("id", "number", "task", "kind", "type", "question", "questionSource",
                                           "content", "wordCount", "band", "date", "note", "videoUrl", "images",
                                           "file", "needsReview", "sourceIds")}
            items.append({k: v for k, v in ordered.items() if v not in (None, [], "")} | {"task": task, "id": rec["id"]})
        (DATA_DIR / f"imported-task{task}.json").write_text(json.dumps(items, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
        out[task] = items

    legacy = {}
    for src in sorted((REPO / "public/writing-samples").glob("report-*.*")):
        if src.suffix.lower() not in (".jpg", ".jpeg", ".png", ".webp"):
            continue
        legacy[f"/writing-samples/{src.name}"] = convert(src, f"legacy-{src.stem}")
    (DATA_DIR / "legacy-covers.json").write_text(json.dumps(legacy, indent=1) + "\n", encoding="utf-8")

    report = {
        "tagged_samples": parsed["total_tagged_units"],
        "imported": {1: len(out[1]), 2: len(out[2])},
        "duplicates": parsed["duplicates"],
        "skipped": skipped,
        "review": [{"id": r["id"], "sourceIds": r["sourceIds"], "type": r["type"], "flags": f,
                    "question": r["question"][:120]} for r, f in review],
    }
    (SCRATCH / "import_report.json").write_text(json.dumps(report, ensure_ascii=False, indent=1), encoding="utf-8")
    print("imported", report["imported"], "skipped", len(skipped), "dups", len(parsed["duplicates"]), "review", len(review))


if __name__ == "__main__":
    main()
