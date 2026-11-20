// Run with: bun test tests/student-results.test.ts
import { describe, expect, test } from "bun:test";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { STUDENT_RESULTS } from "@/data/student-results";
import {
  expectedLevel,
  expectedOverall,
  formatResultMonth,
  ieltsOverall,
  multilevelOverall,
  pickShowcase,
  rankResults,
  SKILL_ORDER,
} from "@/lib/student-results";

const PUBLIC_DIR = join(import.meta.dir, "..", "public");

describe("scoring rules", () => {
  test("IELTS overall rounds .25 up to .5 and .75 up to the next band", () => {
    expect(ieltsOverall({ listening: 6, reading: 6, writing: 6, speaking: 7 })).toBe(6.5); // 6.25
    expect(ieltsOverall({ listening: 7, reading: 8, writing: 6, speaking: 6 })).toBe(7); // 6.75
    expect(ieltsOverall({ listening: 6, reading: 5, writing: 6.5, speaking: 6 })).toBe(6); // 5.875
    expect(ieltsOverall({ listening: 6, reading: 6, writing: 6, speaking: 6.5 })).toBe(6); // 6.125
  });

  test("multilevel overall is the rounded mean", () => {
    expect(multilevelOverall({ listening: 55, reading: 55, writing: 50, speaking: 46 })).toBe(52);
    expect(multilevelOverall({ listening: 62, reading: 62, writing: 61, speaking: 42 })).toBe(57);
  });

  test("month labels are formatted without Intl", () => {
    expect(formatResultMonth("2026-09")).toBe("Sep 2026");
    expect(formatResultMonth("2026-01")).toBe("Jan 2026");
  });
});

describe("STUDENT_RESULTS data", () => {
  test("ids are unique", () => {
    const ids = STUDENT_RESULTS.map((r) => r.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  for (const result of STUDENT_RESULTS) {
    describe(result.id, () => {
      test("skill scores are on the exam's scale", () => {
        for (const key of SKILL_ORDER) {
          const value = result.skills[key];
          if (result.exam === "ielts") {
            expect(value * 2).toBe(Math.round(value * 2)); // half-band steps
            expect(value).toBeGreaterThanOrEqual(0);
            expect(value).toBeLessThanOrEqual(9);
          } else {
            expect(Number.isInteger(value)).toBe(true);
            expect(value).toBeGreaterThanOrEqual(0);
            expect(value).toBeLessThanOrEqual(75);
          }
        }
      });

      test("printed overall matches the four skills", () => {
        expect(result.overall).toBe(expectedOverall(result));
      });

      test("CEFR level matches the overall score", () => {
        expect(result.level).toBe(expectedLevel(result) ?? "below B1");
      });

      if (result.month) {
        test("month is YYYY-MM", () => {
          expect(result.month).toMatch(/^\d{4}-(0[1-9]|1[0-2])$/);
        });
      }

      if (result.proof) {
        const { src, thumb } = result.proof;
        test("proof images exist in /public", () => {
          expect(existsSync(join(PUBLIC_DIR, src))).toBe(true);
          expect(existsSync(join(PUBLIC_DIR, thumb))).toBe(true);
        });
      }
    });
  }
});

describe("pickShowcase", () => {
  test("features the top IELTS result and mixes in both exams", () => {
    const { featured, others } = pickShowcase(STUDENT_RESULTS);
    expect(featured?.exam).toBe("ielts");
    expect(others).toHaveLength(4);
    expect(others).not.toContain(featured);
    expect(others.filter((r) => r.exam === "ielts")).toHaveLength(2);
    expect(others.filter((r) => r.exam === "cefr")).toHaveLength(2);
  });

  test("shows every result exactly once across featured, others and rest", () => {
    const { featured, others, rest } = pickShowcase(STUDENT_RESULTS);
    const shown = [featured, ...others, ...rest].map((r) => r?.id);
    expect(new Set(shown).size).toBe(STUDENT_RESULTS.length);
    expect(shown).toHaveLength(STUDENT_RESULTS.length);
  });

  test("still works when only one exam type exists", () => {
    const cefrOnly = STUDENT_RESULTS.filter((r) => r.exam === "cefr");
    const { featured, others } = pickShowcase(cefrOnly);
    expect(featured?.exam).toBe("cefr");
    expect(others).not.toContain(featured);
    expect(pickShowcase([]).featured).toBeUndefined();
  });
});

describe("rankResults", () => {
  test("lists IELTS first by band, then CEFR by score, without mutating input", () => {
    const before = STUDENT_RESULTS.map((r) => r.id);
    const ranked = rankResults(STUDENT_RESULTS);
    expect(STUDENT_RESULTS.map((r) => r.id)).toEqual(before);

    const firstCefr = ranked.findIndex((r) => r.exam === "cefr");
    expect(ranked.slice(0, firstCefr).every((r) => r.exam === "ielts")).toBe(true);
    expect(ranked.slice(firstCefr).every((r) => r.exam === "cefr")).toBe(true);
    for (let i = 1; i < ranked.length; i++) {
      if (ranked[i].exam === ranked[i - 1].exam) {
        expect(ranked[i].overall).toBeLessThanOrEqual(ranked[i - 1].overall);
      }
    }
  });
});
