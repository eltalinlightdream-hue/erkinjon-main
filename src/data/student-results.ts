import type { StudentResult } from "@/lib/student-results";

/*
  Real student results, transcribed from their official certificates.

  PRIVACY RULES — follow these for every new entry:
  - Never publish a student's face, passport/ID number, candidate number,
    date of birth, Test Report Form number, certificate reference number, or
    QR code. Proof images in /public/results are redacted with OPAQUE blocks
    (never blur — blurred digits can be recovered) and stripped of metadata.
  - Never commit an unredacted original anywhere in the repo: git keeps every
    version forever, even after the file is deleted.
  - `overall` and `level` must match the certificate. The colocated test
    recomputes both from the four skill scores to catch typos.
*/
export const STUDENT_RESULTS: readonly StudentResult[] = [
  {
    id: "mahmudaxon-ielts-7-5",
    exam: "ielts",
    module: "Academic",
    name: "Mahmudaxon Muhammadxonova",
    overall: 7.5,
    level: "C1",
    skills: { listening: 8.0, reading: 7.5, writing: 7.0, speaking: 7.0 },
    month: "2026-09",
    proof: {
      src: "/results/ielts-mahmudaxon.webp",
      thumb: "/results/ielts-mahmudaxon-thumb.webp",
      width: 1400,
      height: 1981,
      kind: "certificate",
    },
  },
  {
    id: "abdulaziz-ielts-7-0",
    exam: "ielts",
    name: "Abdulaziz",
    overall: 7.0,
    level: "C1",
    skills: { listening: 7.0, reading: 8.0, writing: 6.0, speaking: 6.0 },
    proof: {
      src: "/results/ielts-abdulaziz.webp",
      thumb: "/results/ielts-abdulaziz-thumb.webp",
      width: 591,
      height: 848,
      kind: "screenshot",
    },
  },
  {
    id: "gulhayo-ielts-6-5",
    exam: "ielts",
    module: "Academic",
    name: "Gulhayo Tojiboyeva",
    overall: 6.5,
    level: "B2",
    skills: { listening: 6.0, reading: 6.0, writing: 6.0, speaking: 7.0 },
    month: "2026-08",
    proof: {
      src: "/results/ielts-gulhayo.webp",
      thumb: "/results/ielts-gulhayo-thumb.webp",
      width: 1400,
      height: 1981,
      kind: "certificate",
    },
  },
  {
    id: "xurshidbek-ielts-6-0",
    exam: "ielts",
    module: "Academic",
    name: "Xurshidbek Arabboyev",
    overall: 6.0,
    level: "B2",
    skills: { listening: 6.0, reading: 5.0, writing: 6.5, speaking: 6.0 },
    month: "2026-06",
    proof: {
      src: "/results/ielts-xurshidbek.webp",
      thumb: "/results/ielts-xurshidbek-thumb.webp",
      width: 924,
      height: 1440,
      kind: "screenshot",
    },
  },
  {
    id: "ruxshona-cefr-59",
    exam: "cefr",
    name: "Ruxshona Abdullayeva",
    overall: 59,
    level: "B2",
    skills: { listening: 71, reading: 62, writing: 51, speaking: 51 },
    month: "2026-01",
    proof: {
      src: "/results/cefr-ruxshona.webp",
      thumb: "/results/cefr-ruxshona-thumb.webp",
      width: 1400,
      height: 1980,
      kind: "certificate",
    },
  },
  // TODO(owner): the four results below were shared as chat previews only.
  // Add a redacted `proof` image for each once the original files are sent.
  {
    id: "baxtiyorjon-cefr-57",
    exam: "cefr",
    name: "Baxtiyorjon Neʼmatjonov",
    overall: 57,
    level: "B2",
    skills: { listening: 62, reading: 62, writing: 61, speaking: 42 },
    month: "2026-02",
  },
  {
    id: "muhammadkarim-cefr-57",
    exam: "cefr",
    name: "Muhammadkarim Turdialiyev",
    overall: 57,
    level: "B2",
    skills: { listening: 65, reading: 62, writing: 51, speaking: 50 },
    month: "2026-01",
  },
  {
    id: "sohibjon-cefr-53",
    exam: "cefr",
    name: "Sohibjon Nishonov",
    overall: 53,
    level: "B2",
    skills: { listening: 65, reading: 57, writing: 45, speaking: 45 },
    month: "2026-01",
  },
  {
    id: "xusnida-cefr-52",
    exam: "cefr",
    name: "Xusnida Komilova",
    overall: 52,
    level: "B2",
    skills: { listening: 55, reading: 55, writing: 50, speaking: 46 },
    month: "2026-01",
  },
];
