import {
  questions,
  categories,
  bands,
  LEVER_CATEGORIES,
  FIRST_TIMER_ANSWER,
  keywordGroups
} from "../data/quizV2.js";

export function isFirstTimer(answers) {
  return answers[FIRST_TIMER_ANSWER.question] === FIRST_TIMER_ANSWER.option;
}

// Questions this person will see, in order.
export function visibleQuestions(answers) {
  const firstTimer = isFirstTimer(answers);
  return questions.filter((q) => !(firstTimer && q.returnerOnly));
}

const isScored = (q) => q.weight > 0 && categories[q.category];

export function scoreQuiz(answers) {
  const byCategory = {};
  let earned = 0;
  let available = 0;

  for (const q of visibleQuestions(answers)) {
    if (!isScored(q)) continue;
    const option = q.options.find((o) => o.id === answers[q.id]);
    const got = option ? (option.points / 3) * q.weight : 0;
    earned += got;
    available += q.weight;
    const c = (byCategory[q.category] ??= { earned: 0, available: 0 });
    c.earned += got;
    c.available += q.weight;
  }

  const score = available ? Math.round((earned / available) * 100) : 0;

  const categoryPct = {};
  for (const [id, c] of Object.entries(byCategory)) {
    categoryPct[id] = c.available ? (c.earned / c.available) * 100 : 0;
  }

  // Lowest changeable category. Strict "<" keeps the earlier one on a tie,
  // so LEVER_CATEGORIES order is the tie-break.
  let lever = null;
  for (const id of LEVER_CATEGORIES) {
    if (categoryPct[id] === undefined) continue;
    if (lever === null || categoryPct[id] < categoryPct[lever]) lever = id;
  }

  // Nothing to improve if even the lowest changeable category is full marks.
  if (lever !== null && categoryPct[lever] >= 100) lever = null;

  const band = bands.find((b) => score >= b.min && score <= b.max) ?? bands[0];

  return { score, band, categoryPct, lever };
}

const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Whole word / phrase match. Apostrophes are normalised so "can't" and "can’t" both match.
export function matchKeywordGroup(text) {
  if (!text || !text.trim()) return null;
  const normalised = text.toLowerCase().replace(/[’‘]/g, "'");
  for (const group of keywordGroups) {
    const hit = group.keywords.some((kw) => {
      const re = new RegExp(`(^|[^a-z0-9'])${escapeRegex(kw.toLowerCase())}(?=$|[^a-z0-9'])`);
      return re.test(normalised);
    });
    if (hit) return group;
  }
  return null;
}

export function countWords(text) {
  const t = text.trim();
  return t ? t.split(/\s+/).length : 0;
}
