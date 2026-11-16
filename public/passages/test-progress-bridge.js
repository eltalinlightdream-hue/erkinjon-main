/*
 * Shared progress bridge for the standalone test pages in /passages.
 *
 * When a student checks their answers, this records the test as "finished"
 * in localStorage (key `ielts_test_completions`) together with the score the
 * page displays. The Reading/Listening tabs that opened the test pick the
 * entry up on focus and sync it to Supabase (`test_progress`).
 */
(function () {
  const LS_KEY = "ielts_test_completions";

  // Elements the shared test templates write their result into, e.g.
  // "7/13", "Score: 31 / 40 · Estimated Band 7", "You scored 8 out of 10".
  const SCORE_SELECTORS = ["#score-display", "#cdi-score", "#score-summary"];
  const SCORE_PATTERN = /(\d+)\s*(?:\/|out of)\s*(\d+)/i;

  // A score the page saved itself (some pages do) is kept if it is this fresh.
  const OWN_SAVE_WINDOW_MS = 15000;
  const CLICK_SETTLE_MS = 300;

  function getTestId() {
    const params = new URLSearchParams(window.location.search);
    return (
      params.get("testId") ||
      document.body.dataset.testId ||
      document.documentElement.dataset.testId ||
      location.pathname.split("/").pop()?.replace(".html", "") ||
      document.title ||
      "reading-passage"
    );
  }

  function getSectionType() {
    return document.querySelector("audio") ? "listening" : "reading";
  }

  function readAllProgress() {
    try {
      return JSON.parse(localStorage.getItem(LS_KEY) || "{}");
    } catch (_) {
      return {};
    }
  }

  function writeProgress(testId, data) {
    const all = readAllProgress();
    all[testId] = data;
    localStorage.setItem(LS_KEY, JSON.stringify(all));
  }

  /** The score currently shown on the page, or null if none is displayed. */
  function readDisplayedScore() {
    for (const selector of SCORE_SELECTORS) {
      const el = document.querySelector(selector);
      const match = el && (el.textContent || "").match(SCORE_PATTERN);
      if (!match) continue;
      const score = Number(match[1]);
      const total = Number(match[2]);
      if (total > 0 && score >= 0 && score <= total) return { score, total };
    }
    return null;
  }

  /** A score this page itself saved moments ago (before this bridge ran). */
  function readFreshOwnScore(existing) {
    if (!existing || typeof existing.score !== "number" || !existing.total) return null;
    const savedAt = Date.parse(existing.completedAt || existing.updatedAt || "");
    if (!Number.isFinite(savedAt) || Date.now() - savedAt > OWN_SAVE_WINDOW_MS) return null;
    return { score: existing.score, total: existing.total };
  }

  function markFinished() {
    try {
      const testId = getTestId();
      const sectionType = getSectionType();
      const now = new Date().toISOString();
      const result = readDisplayedScore() || readFreshOwnScore(readAllProgress()[testId]);

      writeProgress(testId, {
        status: "finished",
        score: result ? result.score : null,
        total: result ? result.total : null,
        completedAt: now,
        completed_at: now,
        updatedAt: now,
        updated_at: now,
      });

      const detail = {
        testId: testId,
        sectionType: sectionType,
        status: "finished",
        score: result ? result.score : null,
        total: result ? result.total : null,
        completed_at: now,
      };
      window.dispatchEvent(new CustomEvent("ielts-test-completed", { detail: detail }));
      window.dispatchEvent(new CustomEvent(sectionType + "-test-finished", { detail: detail }));
      if (window.parent && window.parent !== window) {
        window.parent.postMessage({ type: "ielts-test-completed", detail: detail }, "*");
      }
    } catch (error) {
      console.error("Could not save test progress:", error);
    }
  }

  // 1) Save as soon as the page renders a score.
  function watchScoreElements() {
    let lastSaved = "";
    const observer = new MutationObserver(function () {
      const result = readDisplayedScore();
      if (!result) return;
      const key = result.score + "/" + result.total;
      if (key === lastSaved) return;
      lastSaved = key;
      markFinished();
    });
    for (const selector of SCORE_SELECTORS) {
      const el = document.querySelector(selector);
      if (el) observer.observe(el, { childList: true, characterData: true, subtree: true });
    }
  }

  // 2) Fallback for pages without a score element: a check/submit click.
  document.addEventListener(
    "click",
    function (e) {
      const btn = e.target.closest("button, input[type='button'], input[type='submit']");
      if (!btn) return;
      const text = (
        (btn.textContent || "") +
        " " +
        (btn.value || "") +
        " " +
        (btn.id || "") +
        " " +
        (btn.className || "")
      ).toLowerCase();
      if (
        text.includes("check") ||
        text.includes("submit") ||
        text.includes("deliver") ||
        text.includes("finish")
      ) {
        setTimeout(markFinished, CLICK_SETTLE_MS);
      }
    },
    true,
  );

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", watchScoreElements);
  } else {
    watchScoreElements();
  }
})();
