# Reclaim Your Game: Quiz v2 Spec (Likelihood Score)

Status: revised 23 Sept 2026. All wording, weights and thresholds are editable in `src/data/quizV2.js`.

## Changes from the first draft

1. **First timers kept.** The live site already welcomes people who have never played. A1 now has a "Never played" option. First timers skip the 5 questions that assume a past (A2, A3, E1, E2, F3), and their score is scaled to 100 from the questions they did answer.
2. **Biggest lever only from categories people can change:** B, C, D and F. Recency (A) and past attempts (E) are never shown as the lever.
3. **Tie-break for the lowest category:** C, then B, then D, then F.
4. **Explanation fallback** (no keyword match) uses the same lever category, so it never picks A or E either.
5. **Postcode wording fixed.** It is optional, held in the browser only while the page is open, used to label the club finder placeholder, and never stored or sent anywhere.
6. **Keyword matching fixed.** Whole words and phrases only. Removed keywords that match almost every answer ("back", "again", "going to", "work", "team"). See the keyword table.
7. **A1 "Less than a year ago"** stays in the returner path with full points. Someone who stopped a few months ago is still coming back, so no separate path.
8. **Free text is optional.** If it's left blank, the lever category paragraph is used.

Not changed, but still open: the number of questions (drop off risk) and analytics (check consent rules for the chosen tool before launch).

## Summary

- Replace the current 5 step quiz with 25 questions (20 for first timers).
- 21 questions are scored across six categories, totalling 100 points. The total is shown as a percentage: "your likelihood of getting back into [sport]" ("getting into" for first timers).
- 4 questions are unscored (sport, goal, area, free text).
- Four result bands, each with its own tone and caveat.
- The free text answer never affects the score. It is only used, via keyword spotting in the browser, to choose which explanation paragraph to show.

## Scoring method

- Every scored question has four options worth 0, 1, 2 or 3 points.
- Question score = (option points / 3) x question weight.
- Final score = sum of question scores / sum of weights of the questions answered x 100, rounded to the nearest whole number (0 to 100). For returners the weights sum to 100, so this is the plain sum.

| Category | Questions | Weight each | Category total | First timers |
|---|---|---|---|---|
| A. Recency and frequency | 3 | 5 | 15 | A1 only (scores 0) |
| B. Motivation and goal strength | 5 | 5 | 25 | All |
| C. Barriers (scored inversely) | 5 | 4 | 20 | All |
| D. Readiness signals | 3 | 5 | 15 | All |
| E. Past attempt history | 2 | 5 | 10 | Skipped |
| F. Social support | 3 | 5 | 15 | F1, F2 only |
| **Total** | **21** | | **100** | 75 points available, scaled to 100 |

Also calculate each category as a percentage of its own available total. The lowest of B, C, D and F (tie-break C, B, D, F) becomes the "biggest lever" tip on the results page.

**First timer A1 question.** "Never played" scores 0 out of 5. That's deliberate: having played before does make a return more likely. Change it in the data file if you'd rather it was left out of the score.

## Questions

Points shown in brackets.

### Setup (unscored)

**S1. Which sport do you most want to reclaim?** Visual grid of the sports, single select.

**S2. What's your main goal?** Just for fun / Get fit / Compete again / Meet people. Single select. Used to tailor prose and kit picks.

### A. Recency and frequency (15)

**A1. When did you last play?** Less than a year ago (3) / 1 to 5 years (2) / 5 to 10 years (1) / Over 10 years (0) / Never played, I want to try it (0, switches to the first timer path)

**A2. At your peak, how often did you play?** 3+ times a week (3) / Once or twice a week (2) / A few times a month (1) / Now and then (0). *Returners only.*

**A3. How many years did you play, all in?** 10+ years (3) / 5 to 10 years (2) / 2 to 5 years (1) / Under 2 years (0). *Returners only.*

### B. Motivation and goal strength (25)

**B1. How much do you miss it?** All the time (3) / Often (2) / Now and then (1) / Rarely (0). *First timers see: "How much do you want to try it?" All the time (3) / Often (2) / Now and then (1) / Rarely (0).*

**B2. How clear is your goal?** Specific target or date (3) / A clear idea (2) / A rough idea (1) / Not sure yet (0)

**B3. When would you like to start?** This week (3) / This month (2) / In the next few months (1) / Someday (0)

**B4. How important is getting back to you right now?** One of my top priorities (3) / Important (2) / Nice to have (1) / Not sure (0). *First timers see "getting started".*

**B5. Why now?** Something specific changed, such as a milestone, health or someone asked me (3) / I've been thinking about it for a while (2) / Something reminded me recently (1) / Just curious (0)

### C. Barriers, scored inversely (20)

**C1. How much free time could you give it in a typical week?** 3+ hours (3) / 1 to 3 hours (2) / Under an hour (1) / Almost none (0)

**C2. How's your fitness compared with when you played?** About the same (3) / A bit behind (2) / A long way behind (1) / Starting from scratch (0). *First timers see: "How would you rate your fitness right now?" Good (3) / OK (2) / Not great (1) / Starting from scratch (0).*

**C3. Is there an injury or physical issue that worries you?** No (3) / Something minor (2) / Something I'd need to manage (1) / A real concern (0)

**C4. Do you know where you'd play?** Yes, I know a club or venue (3) / I have an idea (2) / I'd need to look (1) / No idea (0)

**C5. Is cost a worry?** Not at all (3) / A little (2) / Quite a lot (1) / It's a major barrier (0)

### D. Readiness signals (15)

**D1. What's your kit situation?** I still have usable kit (3) / I have some of it (2) / I'd need most of it (1) / I'd need everything (0). *First timers see "I already have usable kit".*

**D2. Have you taken any steps yet?** Booked or joined something (3) / Looked up clubs or sessions (2) / Talked about it (1) / Not yet (0)

**D3. If a session were on this weekend, would you go?** Definitely (3) / Probably (2) / Maybe (1) / Probably not (0)

### E. Past attempt history (10). *Returners only.*

**E1. Have you tried to get back before?** Yes, and it lasted a good while (3) / No, this is my first go (2) / Yes, but it fizzled out quickly (1) / Yes, a few times, and it never stuck (0)

**E2. Why did you stop originally?** Life got busy: work, family or a move (3) / The team, club or my playing partners stopped (2) / Injury (1) / I lost interest (0)

### F. Social support (15)

**F1. Would anyone play with you?** Yes, someone's keen (3) / Probably, I know people who play (2) / No, but I'm happy to meet people at a club (1) / No, and going alone puts me off (0)

**F2. How would the people close to you react?** They'd actively encourage me (3) / Supportive (2) / Indifferent (1) / It would cause friction (0)

**F3. Are you still in touch with anyone from the sport?** Yes, regularly (3) / A few, loosely (2) / Not really (1) / No (0). *Returners only.*

### Final (unscored)

**S3. Where are you based?** Optional. First part of postcode only (for example SK8). Used only to label the club finder placeholder on the results page. Held in the browser while the page is open. Never stored or sent anywhere.

**S4. In under 100 words, how motivated do you think you are?** Optional free text, 100 word limit. Never stored or sent anywhere.

## Result bands

| Score | Band | Tone |
|---|---|---|
| 0 to 39 | Low | "Prove us wrong." Direct challenge, then one small first step. |
| 40 to 59 | Moderate | "You're on the fence." Name the biggest lever and how to shift it. |
| 60 to 79 | High | "You're closer than you think." Encouraging, practical next steps. |
| 80 to 100 | Very high | "What are you waiting for?" Straight to kit and getting started. |

## Caveats

**Shown on every result:**
"This score is a rough guide based on your answers. It isn't a scientific prediction, and plenty of people beat theirs. If you have a health condition or injury, check with your GP before you start again."

**Extra line by band:**
- Low: "A low score just means more is in your way right now. It doesn't mean you can't do it."
- Moderate: "Small changes to one or two areas can move this a long way."
- High: "Scores like this are a good sign, but the first session is still the hardest bit."
- Very high: "Motivation fades if you wait. The best time to start is while it's high."

**If C3 = "A real concern":** always show the GP line prominently, whatever the band.

## Free text keyword matching

Runs in the browser only. Case insensitive. Whole words or phrases only (so "work" would not match "workout"). Pick the first matching group in priority order below and show one paragraph for it. If nothing matches, or the box is blank, use the paragraph for the lever category (lowest of B, C, D, F).

| Priority | Group | Keywords |
|---|---|---|
| 1 | Health | injury, injuries, injured, knee, knees, bad back, back pain, my back, hip, ankle, doctor, GP, physio, weight, overweight, unfit, operation, surgery |
| 2 | Confidence | scared, nervous, embarrassed, worried, rusty, judged, too old, confidence, anxious |
| 3 | Past attempts | tried before, gave up, given up, never stick, never stuck, didn't stick, last time I tried, fizzled |
| 4 | Time | busy, no time, not enough time, kids, children, family, shifts, long hours, my job |
| 5 | Social | friend, friends, mate, mates, teammates, alone, on my own, by myself, nobody to play |
| 6 | Committed | definitely, determined, can't wait, cant wait, booked, signed up, committed, motivated |

Removed from the draft because they match almost every answer: "back", "again", "going to", "work", "team", "ready".

Explanation paragraphs are drafted in the data file and need your review.

## Results page order

1. Score and band headline
2. Band message and caveats
3. Explanation paragraph (from free text, or lever category)
4. Biggest lever tip (lever category)
5. Existing sport content for S1, plus goal bullets for S2
6. Kit links for S1, with a line tailored by D1

## Build notes

- All questions, points, weights, bands, keywords and paragraphs live in `src/data/quizV2.js`.
- Scoring logic lives in `src/lib/scoreQuizV2.js`, separate from components.
- Single select questions auto advance, plus a back button.
- Progress bar shows "Question 7 of 25" (or "of 20" for first timers).
- Free text and postcode stay in the browser. No network calls with quiz answers.
- Install analytics before launch so drop off by question and kit link clicks by band can be measured.

## Gamification (added 23 Sept 2026)

**Intro screen** before question 1: what you get, how it works (7 rounds, 6 for first timers, about 3 minutes), and that nothing is stored. "Start round 1" button.

**Rounds.** Questions are grouped into rounds, each with a "Round X of Y complete" screen and a short message based on how that round scored (67%+ high, 34 to 66% mid, under 34% low). The score itself stays hidden until the end.

| Round | Questions | Category used for the message |
|---|---|---|
| 1. Warm-up | S1, S2, A1 to A3 | A (first timers get their own line) |
| 2. Motivation | B1 to B5 | B |
| 3. Barriers | C1 to C5 | C |
| 4. Kit and readiness | D1 to D3 | D |
| 5. Track record | E1, E2 (returners only) | E |
| 6. Team talk | F1 to F3 | F |
| 7. Final whistle | S3, S4 | none, goes straight to results |

**Reactions.** A one-line reaction shows under certain answers for about a second before moving on (for example B3 "This week" shows "Now we're talking."). 27 reactions across 14 questions. Questions without one move on straight away.

All intro text, round names, round messages and reactions are in `src/data/quizV2.js`.
