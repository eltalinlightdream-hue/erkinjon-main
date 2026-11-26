// Browser text-to-speech with an English voice: reads the questions aloud.

let cachedVoice: SpeechSynthesisVoice | null = null;

function pickVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
  const english = window.speechSynthesis
    .getVoices()
    .filter((v) => v.lang.toLowerCase().startsWith("en"));
  for (const lang of ["en-gb", "en-us", "en-au", "en"]) {
    const local = english.find((v) => v.lang.toLowerCase().startsWith(lang) && v.localService);
    if (local) return local;
    const any = english.find((v) => v.lang.toLowerCase().startsWith(lang));
    if (any) return any;
  }
  return english[0] ?? null;
}

export function speechSupported(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

/** Speak text in English. Resolves when finished (or straight away if unsupported). */
export function speak(text: string, rate = 0.95): Promise<void> {
  return new Promise((resolve) => {
    if (!speechSupported()) return resolve();
    const synth = window.speechSynthesis;
    synth.cancel();
    cachedVoice ??= pickVoice();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = cachedVoice?.lang ?? "en-GB";
    if (cachedVoice) u.voice = cachedVoice;
    u.rate = rate;
    // Some phones never fire "end"; never wait longer than the text could take.
    let finished = false;
    const done = () => {
      if (finished) return;
      finished = true;
      window.clearTimeout(timer);
      resolve();
    };
    const timer = window.setTimeout(done, Math.max(4000, text.length * 110));
    u.onend = done;
    u.onerror = done;
    synth.speak(u);
  });
}

/**
 * iPhone/Safari only allows speech that starts from a tap. Call this inside the
 * tap handler (before any await) so later questions can be read aloud.
 */
export function unlockSpeech(): void {
  if (!speechSupported()) return;
  try {
    const u = new SpeechSynthesisUtterance(" ");
    u.volume = 0;
    window.speechSynthesis.speak(u);
  } catch {
    /* not critical: the question text is still shown */
  }
}

export function stopSpeaking(): void {
  if (speechSupported()) window.speechSynthesis.cancel();
}
