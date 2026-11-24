/* Keyword & Synonym Matching table — shared add-on for every reading passage.

   Loaded by test-progress-bridge.js, so any passage that includes the bridge
   gets the table automatically, appended under its #questions-container.

   - Rows are generated from the page's own question numbers (progress bar,
     falling back to the question inputs), so no per-passage setup is needed.
   - What the student types is kept in localStorage, per passage.
   - Optional model answers: add a JSON block to the passage HTML and a
     "Show model answers" button unlocks after the student submits:

       <script type="application/json" id="synonym-answers">
       { "7": [{ "question": "parts of a tree", "passage": "leaves, roots and bark of trees" }] }
       </script>

   Rendered inside a shadow root so the templates' global CSS, their Reset
   button (which clears every textarea) and their post-submit lock (which
   disables every input) leave the student's notes alone. */
(function () {
  "use strict";

  if (window.__synonymTableLoaded) return;
  window.__synonymTableLoaded = true;

  const NOTES_PREFIX = "ielts_synonym_notes:";
  const UI_PREFIX = "ielts_synonym_ui:";
  const ANSWERS_ID = "synonym-answers";
  const MAX_QUESTION = 60;
  const PAGE_KEY = location.pathname;

  /* ---------- storage (never throws: private mode, blocked storage) ---------- */

  function readStore(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || "null");
    } catch (_) {
      return null;
    }
  }

  function writeStore(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (_) {
      /* notes simply won't persist */
    }
  }

  /* ---------- page inspection ---------- */

  function isReadingPage() {
    if (document.querySelector("audio")) return false;
    // Match "IELTS Listening …" pages, not reading titles like "Listening to the Ocean".
    if (/\bIELTS\s+Listening\b/i.test(document.title)) return false;
    return Boolean(document.getElementById("questions-container"));
  }

  // Some templates nest a second #questions-container; mount in the innermost.
  function findMountPoint() {
    let el = document.getElementById("questions-container");
    let inner = el && el.querySelector(".questions-container");
    while (inner) {
      el = inner;
      inner = el.querySelector(".questions-container");
    }
    return el;
  }

  // "7" -> [7], "21-22" / "21–22" / "q21_22" -> [21, 22]
  function numbersFrom(text) {
    const m = String(text || "").match(/(\d+)(?:\s*[-–_&]\s*(\d+))?/);
    if (!m) return [];
    const lo = parseInt(m[1], 10);
    const hi = m[2] ? parseInt(m[2], 10) : lo;
    if (hi < lo || hi - lo > 10) return [lo];
    const out = [];
    for (let n = lo; n <= hi; n += 1) out.push(n);
    return out;
  }

  function fromProgressBar() {
    const found = [];
    document.querySelectorAll(".progress-item").forEach((item) => {
      const label = item.dataset.qid || item.dataset.q || item.textContent;
      found.push(...numbersFrom(label));
    });
    return found;
  }

  function fromQuestionInputs(container) {
    const found = [];
    container
      .querySelectorAll("[name], [id], [data-q], [data-qnum]")
      .forEach((el) => {
        const attr = el.dataset.q || el.dataset.qnum;
        if (attr) {
          found.push(...numbersFrom(attr));
          return;
        }
        const key = el.getAttribute("name") || el.id || "";
        if (/^q\d+(?:[-_]\d+)?$/.test(key)) found.push(...numbersFrom(key));
      });
    return found;
  }

  function collectQuestions(container, answers) {
    let nums = fromProgressBar();
    if (nums.length === 0) nums = fromQuestionInputs(container);
    nums = nums.concat(Object.keys(answers).map(Number));
    const valid = nums.filter((n) => Number.isInteger(n) && n > 0 && n <= MAX_QUESTION);
    return Array.from(new Set(valid)).sort((a, b) => a - b);
  }

  // Shape: { "7": [{ question, passage }, ...] } — a single object is accepted too.
  function readAnswers() {
    const node = document.getElementById(ANSWERS_ID);
    if (!node) return {};
    try {
      const raw = JSON.parse(node.textContent || "{}");
      const clean = {};
      Object.keys(raw).forEach((key) => {
        const list = Array.isArray(raw[key]) ? raw[key] : [raw[key]];
        const pairs = list.filter(
          (p) => p && typeof p.question === "string" && typeof p.passage === "string",
        );
        if (/^\d+$/.test(key) && pairs.length) clean[key] = pairs;
      });
      return clean;
    } catch (error) {
      console.error("synonym-table: invalid #synonym-answers JSON", error);
      return {};
    }
  }

  /* ---------- styles ---------- */

  const STYLES = `
    :host {
      --st-q: #2350c8;
      --st-p: #a8530b;
      --st-ok: #15803d;
      --st-rule: color-mix(in srgb, currentColor 16%, transparent);
      --st-wash: color-mix(in srgb, currentColor 3.5%, transparent);
      --st-muted: color-mix(in srgb, currentColor 62%, transparent);
      display: block;
      margin: 2.25em 0 1em;
      color: inherit;
      font: inherit;
      container-type: inline-size;
    }
    :host([data-theme="dark"]) {
      --st-q: #8fb0ff;
      --st-p: #f2b764;
      --st-ok: #5fd08a;
    }
    *, *::before, *::after { box-sizing: border-box; }
    [hidden] { display: none !important; }

    .st { border-top: 2px solid currentColor; }

    .st-toggle {
      all: unset;
      display: flex;
      align-items: baseline;
      gap: 0.6em;
      width: 100%;
      padding: 0.85em 0.25em 0.7em;
      cursor: pointer;
      border-radius: 4px;
    }
    .st-toggle:focus-visible { outline: 2px solid var(--st-q); outline-offset: 2px; }
    .st-chevron {
      flex: none;
      width: 0.75em;
      height: 0.75em;
      align-self: center;
      transition: transform 160ms ease-out;
    }
    .st-toggle[aria-expanded="false"] .st-chevron { transform: rotate(-90deg); }
    .st-title { font-weight: 700; font-size: 1.08em; letter-spacing: 0.005em; }
    .st-range {
      margin-left: auto;
      font-size: 0.8em;
      font-variant-numeric: tabular-nums;
      color: var(--st-muted);
      white-space: nowrap;
    }

    .st-body { animation: st-in 180ms ease-out; }
    @keyframes st-in { from { opacity: 0; transform: translateY(-4px); } }

    .st-hint {
      margin: 0 0 1.1em;
      font-size: 0.88em;
      line-height: 1.5;
      color: var(--st-muted);
      max-width: 52ch;
    }
    .st-hint b { font-weight: 600; }
    .st-hint .q { color: var(--st-q); }
    .st-hint .p { color: var(--st-p); }

    .st-grid { display: grid; grid-template-columns: 2.6em 1fr 1fr; }
    .st-head, .st-row { display: contents; }
    .st-head > span {
      padding: 0 0.6em 0.45em;
      font-size: 0.72em;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      border-bottom: 1px solid var(--st-rule);
    }
    .st-head .q { color: var(--st-q); }
    .st-head .p { color: var(--st-p); }

    .st-num, .st-cell, .st-model { border-bottom: 1px solid var(--st-rule); }
    .st-row.has-model .st-num,
    .st-row.has-model .st-cell { border-bottom: 0; }
    .st-num {
      padding: 0.75em 0 0;
      text-align: center;
      font-weight: 700;
      font-variant-numeric: tabular-nums;
    }
    .st-cell { padding: 0.45em 0.6em; }
    .st-cell-label { display: none; }

    textarea {
      display: block;
      width: 100%;
      min-height: 2.6em;
      field-sizing: content;
      max-height: 9em;
      resize: vertical;
      margin: 0;
      padding: 0.45em 0.6em;
      font: inherit;
      font-size: 0.95em;
      line-height: 1.4;
      color: inherit;
      background: var(--st-wash);
      border: 1px solid transparent;
      border-bottom: 1.5px solid var(--st-rule);
      border-radius: 4px 4px 2px 2px;
      transition: border-color 120ms, background-color 120ms;
    }
    textarea::placeholder { color: var(--st-muted); opacity: 0.7; }
    textarea:hover { border-bottom-color: var(--st-muted); }
    .st-cell.q textarea:focus {
      outline: none;
      border-color: var(--st-q);
      background: color-mix(in srgb, var(--st-q) 7%, transparent);
    }
    .st-cell.p textarea:focus {
      outline: none;
      border-color: var(--st-p);
      background: color-mix(in srgb, var(--st-p) 7%, transparent);
    }

    .st-model {
      grid-column: 2 / -1;
      margin: 0 0.6em;
      padding: 0.15em 0 0.7em 0.75em;
      border-left: 2px solid var(--st-ok);
      font-size: 0.86em;
      line-height: 1.45;
    }
    .st-model-pair + .st-model-pair { margin-top: 0.2em; }
    .st-model .tag {
      font-size: 0.78em;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--st-ok);
      margin-right: 0.4em;
    }
    .st-model .q { color: var(--st-q); }
    .st-model .p { color: var(--st-p); }
    .st-model .arrow { color: var(--st-muted); padding: 0 0.3em; }

    .st-foot {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.75em 1em;
      padding-top: 0.9em;
      font-size: 0.85em;
    }
    .st-lock { color: var(--st-muted); }
    .st-btn {
      font: inherit;
      color: inherit;
      cursor: pointer;
      padding: 0.4em 0.9em;
      border-radius: 999px;
      border: 1px solid var(--st-rule);
      background: transparent;
      transition: background-color 120ms, border-color 120ms, transform 80ms;
    }
    .st-btn:hover { background: var(--st-wash); border-color: var(--st-muted); }
    .st-btn:active { transform: translateY(1px); }
    .st-btn:focus-visible { outline: 2px solid var(--st-q); outline-offset: 2px; }
    .st-btn.primary { border-color: var(--st-ok); color: var(--st-ok); font-weight: 600; }
    .st-btn.primary[aria-pressed="true"] {
      background: color-mix(in srgb, var(--st-ok) 12%, transparent);
    }
    .st-btn.quiet {
      margin-left: auto;
      border-color: transparent;
      color: var(--st-muted);
    }
    .st-saved { color: var(--st-muted); font-size: 0.92em; }

    @container (max-width: 520px) {
      .st-grid { grid-template-columns: 2.2em 1fr; }
      .st-head { display: none; }
      .st-num { grid-row: span 2; padding-top: 1.3em; }
      .st-cell { padding: 0.35em 0.2em 0.35em 0.4em; }
      .st-cell.q { border-bottom: 0; padding-top: 0.6em; }
      .st-cell.p { padding-bottom: 0.7em; }
      .st-row.has-model .st-cell.p { padding-bottom: 0.35em; }
      .st-cell-label {
        display: block;
        margin-bottom: 0.25em;
        font-size: 0.7em;
        font-weight: 700;
        letter-spacing: 0.07em;
        text-transform: uppercase;
      }
      .st-cell.q .st-cell-label { color: var(--st-q); }
      .st-cell.p .st-cell-label { color: var(--st-p); }
      .st-model { grid-column: 2; margin-left: 0.4em; }
    }

    @media (prefers-reduced-motion: reduce) {
      .st-body { animation: none; }
      .st-chevron, textarea, .st-btn { transition: none; }
    }
  `;

  /* ---------- rendering ---------- */

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function buildModel(pairs) {
    const box = el("div", "st-model");
    box.hidden = true;
    pairs.forEach((pair, i) => {
      const line = el("div", "st-model-pair");
      if (i === 0) line.appendChild(el("span", "tag", "Model"));
      line.appendChild(el("span", "q", pair.question));
      line.appendChild(el("span", "arrow", "→"));
      line.appendChild(el("span", "p", pair.passage));
      box.appendChild(line);
    });
    return box;
  }

  function buildField(kind, num, value, onInput) {
    const isQuestion = kind === "q";
    const cell = el("div", "st-cell " + kind);
    const label = isQuestion ? "Words from the question" : "Alternatives in the passage";
    cell.appendChild(el("span", "st-cell-label", label));
    const area = document.createElement("textarea");
    area.rows = 1;
    area.spellcheck = false;
    area.value = value || "";
    area.setAttribute("aria-label", "Question " + num + ": " + label.toLowerCase());
    area.addEventListener("input", () => onInput(num, kind, area.value));
    cell.appendChild(area);
    return cell;
  }

  function buildRow(num, notes, answers, onInput) {
    const row = el("div", "st-row");
    row.dataset.q = String(num);
    const saved = notes[num] || {};
    row.appendChild(el("div", "st-num", String(num)));
    row.appendChild(buildField("q", num, saved.q, onInput));
    row.appendChild(buildField("p", num, saved.p, onInput));
    const pairs = answers[num];
    if (pairs) row.appendChild(buildModel(pairs));
    return row;
  }

  const CHEVRON =
    '<svg class="st-chevron" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function rangeLabel(questions) {
    const first = questions[0];
    const last = questions[questions.length - 1];
    return first === last ? "Question " + first : "Questions " + first + "–" + last;
  }

  function render(host, questions, answers) {
    const root = host.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = STYLES;
    root.appendChild(style);

    let notes = readStore(NOTES_PREFIX + PAGE_KEY) || {};
    const ui = readStore(UI_PREFIX + PAGE_KEY) || {};

    const section = el("section", "st");
    section.setAttribute("aria-labelledby", "st-title");

    const toggle = el("button", "st-toggle");
    toggle.type = "button";
    toggle.setAttribute("aria-controls", "st-body");
    toggle.innerHTML = CHEVRON; // static markup, no data
    const title = el("span", "st-title", "Keyword & Synonym Matching");
    title.id = "st-title";
    toggle.appendChild(title);
    toggle.appendChild(el("span", "st-range", rangeLabel(questions)));

    const body = el("div", "st-body");
    body.id = "st-body";

    const hint = el("p", "st-hint");
    hint.append("For each question, note the ");
    hint.appendChild(el("b", "q", "key words"));
    hint.append(", then find the ");
    hint.appendChild(el("b", "p", "different words"));
    hint.append(" the passage uses for the same idea.");
    body.appendChild(hint);

    const grid = el("div", "st-grid");
    const head = el("div", "st-head");
    head.setAttribute("aria-hidden", "true");
    head.appendChild(el("span", "", "#"));
    head.appendChild(el("span", "q", "Words from the question"));
    head.appendChild(el("span", "p", "Alternatives in the passage"));
    grid.appendChild(head);

    const saveNote = (num, kind, value) => {
      notes = { ...notes, [num]: { ...notes[num], [kind]: value } };
      writeStore(NOTES_PREFIX + PAGE_KEY, notes);
    };
    const clearNotes = () => {
      notes = {};
      writeStore(NOTES_PREFIX + PAGE_KEY, notes);
      root.querySelectorAll("textarea").forEach((t) => {
        t.value = "";
      });
    };
    questions.forEach((num) => grid.appendChild(buildRow(num, notes, answers, saveNote)));
    body.appendChild(grid);
    body.appendChild(buildFooter(grid, answers, clearNotes));

    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      body.hidden = !open;
    };
    setOpen(ui.open !== false);
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      setOpen(open);
      writeStore(UI_PREFIX + PAGE_KEY, { open });
    });

    section.appendChild(toggle);
    section.appendChild(body);
    root.appendChild(section);
  }

  function buildFooter(grid, answers, clearNotes) {
    const foot = el("div", "st-foot");
    const hasAnswers = Object.keys(answers).length > 0;

    if (hasAnswers) {
      const lock = el("span", "st-lock", "Model answers unlock after you submit.");
      const show = el("button", "st-btn primary", "Show model answers");
      show.type = "button";
      show.hidden = true;
      show.setAttribute("aria-pressed", "false");
      show.addEventListener("click", () => {
        const on = show.getAttribute("aria-pressed") !== "true";
        show.setAttribute("aria-pressed", String(on));
        show.textContent = on ? "Hide model answers" : "Show model answers";
        grid.querySelectorAll(".st-row").forEach((row) => {
          const model = row.querySelector(".st-model");
          if (!model) return;
          model.hidden = !on;
          row.classList.toggle("has-model", on);
        });
      });
      window.addEventListener("reading-test-finished", () => {
        lock.hidden = true;
        show.hidden = false;
      });
      foot.appendChild(lock);
      foot.appendChild(show);
    }

    const clear = el("button", "st-btn quiet", "Clear my notes");
    clear.type = "button";
    clear.addEventListener("click", () => {
      if (window.confirm("Clear everything you typed in this table?")) clearNotes();
    });
    foot.appendChild(clear);
    return foot;
  }

  // Templates switch theme with body.night-mode; mirror it onto the host.
  function syncTheme(host) {
    const apply = () => {
      host.dataset.theme = document.body.classList.contains("night-mode") ? "dark" : "light";
    };
    apply();
    new MutationObserver(apply).observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });
  }

  function init() {
    try {
      if (!isReadingPage()) return;
      const mount = findMountPoint();
      if (!mount || mount.querySelector(".synonym-table-host")) return;
      const answers = readAnswers();
      const questions = collectQuestions(mount, answers);
      if (questions.length === 0) return;

      const host = document.createElement("section");
      host.className = "synonym-table-host";
      syncTheme(host);
      render(host, questions, answers);
      mount.appendChild(host);
    } catch (error) {
      console.error("synonym-table: could not render", error);
    }
  }

  if (document.readyState === "complete") init();
  else window.addEventListener("load", init);
})();
