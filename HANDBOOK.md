# Reclaim Your Game — Handbook

Living reference for the whole project: what it is, what's been built, every service/account
involved, and what's still open. Written so someone new could pick this up and understand the
full state of play. Updated automatically, most recent entries at the bottom of the changelog.

Last updated: 21 August 2026

---

## 1. What this is

A quiz-funnel web app for adults getting into a sport — either returning to one they used to
play, or trying it for the first time (added 21 Aug 2026, see changelog). Users answer five
questions and get a personalised results page with content per sport and (eventually) affiliate
kit recommendations. Positioning is emotional, not age-based — "reclaim something that was
yours, or claim it for the first time." No rebrand: still Reclaim Your Game, framed as covering
both. Domain: reclaimyourgame.co.uk, purchased 6 August 2026 via GoDaddy.

Full original concept, three-phase roadmap, and market stats are preserved in the project's
Claude.ai knowledge base (not duplicated here to avoid drift — see section 7).

## 2. Current status at a glance

- App is live at **https://reclaimyourgame.co.uk** (also reachable at
  reclaim-your-game.vercel.app)
- Custom domain DNS connected and verified (12 Aug 2026)
- Fixed a routing bug (21 Aug 2026): direct links to any non-home page (e.g. `/privacy`,
  `/contact`) returned a 404 on Vercel — no rewrite rule for the React Router SPA. Added
  `vercel.json`. Confirmed fixed.
- Code is on GitHub: **github.com/gee197526/ReclaimYourGame**, branch `main`
- Hosting: Vercel, auto-deploys on push to `main`
- No affiliate programmes joined yet — kit links are placeholders
- No analytics installed yet
- Club finder and email capture are intentionally parked (see section 5)

## 3. Tech stack

- React 18 + Vite, plain CSS (no framework)
- `react-router-dom` for routing
- Hosting: Vercel (free/hobby tier)
- Source control: GitHub
- Contact form: Web3Forms (relay service, no backend, no stored data) — access key configured
- No database, no backend server, no user accounts anywhere in the current build
- Three hotlinked external assets (21 Aug 2026): Google Fonts (Space Grotesk + Inter), one
  Unsplash photo (homepage hero), and Twemoji SVGs via jsDelivr (sport icons). All three are
  free/no-auth CDN dependencies — if any of them go down or change URL structure, that specific
  asset breaks but the rest of the site keeps working (no shared point of failure).

## 4. Project structure

```
reclaimyourgame/
  src/
    data/
      sports.js        20 sports' content (synopsis, tips, kit list)
      quizOptions.js    answer options for steps 2, 3, 5
    pages/
      Quiz.jsx          5-step quiz, holds answer state
      Results.jsx       results page, renders per selected sport
      Privacy.jsx       privacy policy (generic, no-data-collected framing)
      Contact.jsx       contact form (Web3Forms relay)
    components/
      Footer.jsx        site-wide footer (privacy + contact links)
      ProgressBar.jsx
      SportIcon.jsx     per-sport emoji, used on quiz tiles and results headings
      steps/            one component per quiz step
    assets/
      logo.png, icon.png        original brand-board colours (navy/green)
      icon-yellow.png           recoloured for the dark/neon theme (currently in use)
      favicon-yellow.png
  HANDBOOK.md           this file
  README.md             quick local-run instructions
```

## 5. Key decisions and why

- **Web app, not native app.** Avoids the App Store approval process entirely. Mobile-first
  responsive design instead.
- **Dark background + fluorescent yellow theme.** Replaced an earlier navy/green theme sourced
  from the user's brand board at their request.
- **Club finder and email capture are parked.** Both would require storing personal data
  (postcode searches, email addresses), which brings in GDPR obligations the project isn't ready
  to take on yet. Current focus is traffic + affiliate links only, which need no personal data
  collection.
- **Affiliate disclosure is inline, not just in the privacy policy.** UK ASA/CMA rules require ads
  to be immediately obvious at the point they appear, not buried in a separate page — so there's
  an "Ad" badge and one-line disclosure directly above the kit links on the results page.
- **Contact form uses a relay service (Web3Forms), not a custom backend.** Forwards messages to a
  private inbox without exposing that address in the site's code, and doesn't store submissions —
  keeps the "no personal data collected" position intact.

## 6. Open items / next actions

- [x] Connect reclaimyourgame.co.uk DNS at GoDaddy (12 Aug 2026) — A record (@ → 216.198.79.1)
      and CNAME for www added at GoDaddy, Vercel shows "Valid Configuration" on all three
      domain entries (root, www, and the vercel.app fallback)
- [x] Web3Forms access key generated and wired into `src/pages/Contact.jsx` (12 Aug 2026) —
      registered against `localhost` during setup rather than the live domain; update the
      registered domain in the Web3Forms dashboard once things settle, in case it starts
      rejecting submissions from the real site
- [ ] Apply to Amazon Associates UK (site is live, privacy policy exists — unblocked)
- [ ] Apply to Awin, specifically Decathlon UK and Pro:Direct Sport (Wiggle's current affiliate
      status unconfirmed — check Awin's advertiser directory directly)
- [ ] Replace placeholder `link: "#"` entries in `sports.js` with real affiliate tracking links
      once approved
- [ ] Add privacy-friendly analytics (Vercel Analytics or Plausible — no cookie banner needed)
- [ ] Expand written content per sport for SEO (current copy is quiz-result-length, not full
      articles)

## 7. Accounts and services used in this build

| Service | Used for | Where credentials live |
|---|---|---|
| GitHub | Source code, version history | User's own GitHub account (gee197526) |
| Vercel | Hosting, auto-deploy from GitHub | User's own Vercel account, connected via GitHub login |
| GoDaddy | Domain registrar for reclaimyourgame.co.uk | User's own GoDaddy account |
| Web3Forms | Contact form email relay | Configured (12 Aug 2026) — key lives in `src/pages/Contact.jsx`, tied to user's private inbox via web3forms.com |
| Google Drive | Source of the original brand-board logo image | User's own Google account (Helmcraft Consultancy Limited folder) |
| Claude.ai project | Original concept brief, roadmap, market research | Project knowledge base "ReclaimYourGame" (separate from this Cowork session) |

No API keys, tokens, or passwords are stored in this handbook or in the codebase. GitHub pushes
during this build used short-lived personal access tokens supplied by the user for a single push
each time, never saved.

## 8. Known technical quirks (useful if debugging deploys)

- The GitHub push workflow used during this build required a *personal access token* generated
  fresh each time, because this environment's sandbox cannot reach `api.github.com` or any
  Vercel domain directly for API calls — only plain `git` operations over `github.com` work. If
  someone continues this project from a normal developer machine, none of this applies; it's a
  quirk of the Cowork sandbox, not the project itself.
- Deploys go live automatically whenever `main` is pushed, via Vercel's GitHub integration.

## 9. Changelog

- **12 August 2026** — Handbook created. Captures state as of: app built and live on Vercel,
  GitHub repo pushed, dark/yellow theme applied, mobile-first hardening done, privacy policy and
  contact page built, affiliate disclosure added to results page. Domain DNS connection and
  Web3Forms key still outstanding.
- **12 August 2026** — Web3Forms access key generated and wired into the contact form. Build
  verified clean. Not yet pushed to GitHub/live — still needs a fresh token from the user to
  deploy this change.
- **12 August 2026** — Custom domain connected. Added an A record (@ → 216.198.79.1) and a CNAME
  for www at GoDaddy, matching the values Vercel provided. All three domain entries in Vercel now
  show "Valid Configuration". Site is reachable at reclaimyourgame.co.uk.
- **12 August 2026** — Pushed privacy policy, contact page, footer, and the working Web3Forms
  integration to GitHub (force-pushed over the previous commit, since each push in this build
  starts from a fresh local copy rather than a continuous local history — fine for a solo
  project, but worth knowing if `git log` ever looks shorter than expected). Vercel auto-deploys
  from here.
- **12 August 2026** — Trimmed the privacy policy (removed the children section and the
  disclaimer note) and changed the Contact section to link to the `/contact` form instead of
  showing an email address. Pushed and live.
- **12 August 2026** — Design polish pass: card-style backgrounds for results sections, consistent
  heading sizes site-wide, hover/focus transitions on buttons and quiz options, cleaner kit-link
  and contact-form spacing, fixed an unstyled link on the privacy page. Also added a sport icon
  next to every sport name (quiz tiles and results headings) — first built as custom SVG icons,
  then swapped for standard emoji per the user's preference. `src/components/SportIcon.jsx` holds
  the per-sport emoji map; two sports use substitutes since no exact emoji exists (netball →
  volleyball emoji, rugby union → American football emoji). Pushed and live.
- **12 August 2026** — Researched justified body text (NNG and other UX sources): left-aligned
  stays, since justified text creates uneven word spacing on narrow/mobile columns and fails
  WCAG readability guidance. No CSS change made. Fixed the header logo crop — the previous crop
  cut off the male runner's head, arm, and trailing leg because the crop boundary stopped short
  of where the figure actually ends in the source image; re-cropped with correct bounds from
  `Gemini_Generated_Image_6q7y2w6q7y2w6q7y.png` and re-generated `icon-yellow.png` /
  `favicon-yellow.png`. Increased the header logo's display size (34px → 52px, 42px on small
  phones) and added a header tagline ("Getting back to your healthier self!") in bold yellow,
  right-aligned on desktop and wrapping full-width on mobile, to balance the header layout.
  Pushed and live.
- **21 August 2026** — Reviewed the live site ahead of applying to Amazon Associates. Found and
  fixed a bug: direct navigation to any route other than the homepage (e.g. `reclaimyourgame.co.uk/privacy`)
  returned a raw Vercel 404, because there was no rewrite rule to fall back to `index.html` for
  the React Router SPA. Added `vercel.json` with a catch-all rewrite. Verified `/privacy` and
  `/contact` now load correctly on direct navigation and on refresh. This was blocking, since
  Amazon Associates checks the privacy policy URL directly. Everything else checked out: privacy
  policy already contains the required "As an Amazon Associate, we earn from qualifying
  purchases" line, the affiliate disclosure badge is in place on the results page, and the
  postcode field is confirmed client-side only. Pushed and live.
- **21 August 2026** — Results page redesign: "Why people loved it" and "Getting back in" changed
  from single sentences to 3-bullet lists for all 14 sports, with dot-marker styling matching the
  site theme (`.detail-list` in `App.css`). Content expands on what was already there rather than
  introducing new specific claims — existing facts (e.g. named programmes/venues) were split out,
  plus generic practical advice bullets (timelines, mixed-ability reassurance) were added.
  Build tested clean locally before pushing. Pushed and live.
- **21 August 2026** — Made results page section headers ("Why people loved it", "Getting back
  in", "Kit to consider") clearer: was small grey uppercase text, now sentence case, larger,
  bold, accent yellow, with a divider line above each section. Build tested clean before pushing.
  Pushed and live.
- **21 August 2026** — Enlarged the sport name and emoji at the top of each results card
  (icon 22px → 34px, heading 1.15rem → 1.6rem, bolder weight) so it stands out as the primary
  heading of each section rather than blending in with the sub-headers below it. Only changed on
  the results page, not the quiz tile icons. Build tested clean before pushing. Pushed and live.
- **21 August 2026** — Site now welcomes first-time players, not just returners, without a
  rebrand ("reclaim your game, or claim it for the first time"). Added "Never played — I want to
  try it" as a new option on the "When did you last play?" step. Added a reframing line above
  the sport-selection step on the homepage. Results page adapts: title is now the neutral "Your
  game plan", the intro line reads "Trying it for the first time" instead of an odd "last played
  never" sentence, "Why people loved it" changed to present tense "Why people love it" (works for
  both), and "Getting back in" becomes "Getting started" for first-timers. Deliberately did not
  rewrite each sport's synopsis or "getting back in" bullets — those still lean slightly toward
  returner phrasing (e.g. "shaking off the rust") and could read a little off for a true
  first-timer. Flagged as a known minor rough edge, not fixed, since the scoped plan was headers
  and framing only, not a full content rewrite. Build tested clean before pushing. Pushed and
  live.
- **21 August 2026** — Visual overhaul (typography, photography, icons, depth/polish):
  - Typography: replaced the OS-default font stack with Space Grotesk (headings, via Google
    Fonts) and Inter (body). Added `--font-display`/`--font-body` CSS variables. Buttons/inputs
    now explicitly inherit the body font instead of falling back to browser UA styling.
  - Photography: added a homepage hero image (floodlit five-a-side pitch at night, by Abigail
    Keenan on Unsplash, standard Unsplash License — free for commercial use, no attribution
    required) above the "What sport did you play?" step, with a dark gradient overlay carrying
    the "reclaiming or claiming" tagline text. Hotlinked from Unsplash's CDN rather than
    self-hosted, since this environment's sandbox can't download image binaries from external
    hosts (network allowlist blocks image CDNs) — confirmed the live site itself has no such
    restriction, since it's the visitor's own browser fetching the image.
  - Icons: sport icons now render as Twemoji SVGs (hotlinked from jsDelivr's `jdecked/twemoji`
    mirror) instead of raw OS emoji characters, so every sport icon looks identical across every
    device/browser instead of depending on whichever emoji font a visitor's OS happens to have.
    `SportIcon.jsx` computes the Twemoji codepoint from each emoji at runtime rather than
    hardcoding hex codes, to avoid transcription errors. Verified a sample of codepoints
    (including surrogate-pair ones) resolve correctly before shipping.
  - Depth/polish: sport-tile buttons, option rows, and result/CTA cards now have a subtle
    gradient background and drop shadow instead of flat colour; hover states lift slightly with
    a shadow; result cards fade/slide in on load (respects `prefers-reduced-motion`).
  - Build and lint (`oxlint`) both clean before pushing. Verified live: hero image, all 14 Twemoji
    icons, new fonts, and card styling all confirmed rendering correctly on the deployed site.
    Pushed and live.
- **21 August 2026** — "What's your goal?" changed from single-select to multi-select (`goal` is
  now an array in quiz state, same `toggleInArray` pattern already used for sports and "what's
  holding you back"). Added a positive payoff on the results page: a "Your goals" card with
  encouraging bullets, written per goal (`goalOptions` in `quizOptions.js` now carries a
  `bullets` array per option) and combined into one flat amalgamated list rather than grouped
  under separate goal headings, per explicit steer — avoids it reading as four separate generic
  blocks. Intro line now joins multiple goal labels ("Goal: get fit, meet people."). Build and
  lint clean before pushing. Verified live with two goals selected. Pushed and live.
- **21 August 2026** — Added 6 new sports (14 → 20 total): Squash, Table Tennis, Boxing, Hockey,
  Climbing, Judo. Chosen by affiliate/kit value and realistic UK adult participation, using each
  sport's actual national governing body where referenced (England Squash, Table Tennis England,
  England Boxing, England Hockey, British Judo). Considered switching the sport-picker from a
  visual grid to an alphabetical dropdown at this larger count — recommended against it, since
  the visual grid with icons is part of what makes this feel like an engaging quiz rather than a
  form, matching the original concept brief. Kept the grid; would only revisit at 30+ sports.
  Icon notes: Table Tennis, Boxing, Hockey, and Climbing all have exact-match Twemoji glyphs.
  Judo has no dedicated emoji, so it uses the wrestling glyph (kept visually distinct from BJJ's
  gi icon). Squash has no dedicated emoji at all — rejected the nearest Unicode substitute
  (softball) since it reads as a different, US-coded sport rather than a generic ball, so it gets
  a small custom inline SVG instead (black ball, yellow dot — the real look of a squash ball).
  Build and lint clean before pushing. Verified live: all 20 tiles render with correct icons,
  spot-checked one new sport's full results content (Boxing). Pushed and live.
