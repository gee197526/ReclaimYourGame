# Reclaim Your Game

Quiz funnel app. Domain: reclaimyourgame.co.uk (purchased 2026-08-06).

## Run locally

npm install
npm run dev

## What's built (Phase 1 scaffold)

- 5-question quiz flow: sport(s) played, last played, what's holding you back, postcode, goal
- 14 launch sports with synopsis, "why people loved it", getting-back tips, and kit list (src/data/sports.js)
- Results page rendering personalised content per sport selected
- Placeholder affiliate links (marked `link: "#"` in sports.js) — replace once Amazon Associates / Decathlon / Wiggle / ProDirect programmes are confirmed
- Placeholder sections for club finder and email capture (Phase 2/3)

## Not built yet

- Real affiliate links
- Email capture backend
- Club finder (API not yet chosen: Sport England Active Places / Google Places / governing body finders)
- Blog / SEO content section
- Deployment to Vercel

## Structure

src/data/sports.js       14 sports' content
src/data/quizOptions.js  quiz answer options
src/pages/Quiz.jsx       quiz flow, holds answer state
src/pages/Results.jsx    results page
src/components/          step components + progress bar
