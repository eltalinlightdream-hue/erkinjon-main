/** Browser text-to-speech (Web Speech API). No network calls. */
export function canSpeak(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function speak(text: string): void {
  if (!canSpeak()) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-GB";
  utterance.rate = 0.9;
  const voice = synth.getVoices().find((v) => v.lang === "en-GB") ?? null;
  if (voice) utterance.voice = voice;
  synth.speak(utterance);
}
