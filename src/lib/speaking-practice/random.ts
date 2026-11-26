// Small helpers for picking random content. Pure functions, easy to test.

export function shuffle<T>(items: readonly T[], rand: () => number = Math.random): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Take `count` items by walking through groups in random order, a few items per
 * group, like a real examiner moving from topic to topic.
 */
export function pickAcrossTopics<T>(
  groups: readonly { topic: string; items: readonly T[] }[],
  count: number,
  perTopic: number,
  rand: () => number = Math.random,
): { topic: string; item: T }[] {
  const out: { topic: string; item: T }[] = [];
  for (const g of shuffle(
    groups.filter((x) => x.items.length > 0),
    rand,
  )) {
    for (const item of shuffle(g.items, rand).slice(0, perTopic)) {
      if (out.length >= count) return out;
      out.push({ topic: g.topic, item });
    }
  }
  return out;
}

/**
 * Take every item, round by round: each round visits the groups in random order and
 * takes up to `perTopic` new items from each, so topics change like in a real exam.
 */
export function pickAllInRounds<T>(
  groups: readonly { topic: string; items: readonly T[] }[],
  perTopic: number,
  rand: () => number = Math.random,
): { topic: string; item: T }[] {
  const queues = groups.map((g) => ({ topic: g.topic, items: shuffle(g.items, rand) }));
  const out: { topic: string; item: T }[] = [];
  for (let round = 0; queues.some((q) => q.items.length > round * perTopic); round++) {
    for (const q of shuffle(queues, rand)) {
      for (const item of q.items.slice(round * perTopic, (round + 1) * perTopic)) {
        out.push({ topic: q.topic, item });
      }
    }
  }
  return out;
}
