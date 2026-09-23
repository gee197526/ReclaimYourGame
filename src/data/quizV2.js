// Quiz v2 (likelihood score). Everything editable lives here: questions, points,
// weights, bands, caveats, keywords and paragraphs. See docs/quiz-v2-spec.md.
//
// Question fields:
//   id        answer key
//   category  A–F for scored questions, "setup" / "final" for unscored
//   weight    points the question is worth (scored only)
//   returnerOnly  true = skipped for first timers
//   prompt / firstTimerPrompt   question text
//   options   [{ id, label, firstTimerLabel?, points }]  points 0–3

export const FIRST_TIMER_ANSWER = { question: "A1", option: "never" };

export const categories = {
  A: { name: "Recency and frequency" },
  B: { name: "Motivation and goal strength" },
  C: { name: "Barriers" },
  D: { name: "Readiness" },
  E: { name: "Past attempts" },
  F: { name: "Social support" }
};

// Only these can be the "biggest lever". Order = tie-break (first wins).
export const LEVER_CATEGORIES = ["C", "B", "D", "F"];

const opts = (labels) => labels.map(([id, label, points, firstTimerLabel]) => ({ id, label, points, firstTimerLabel }));

export const goalOptions = [
  {
    id: "fun",
    label: "Just for fun",
    bullets: [
      "No pressure, no scoreboard that matters. Just enjoying being out there",
      "Finding out what makes people love it in the first place",
      "Every session you show up to is already a win"
    ]
  },
  {
    id: "fit",
    label: "Get fit",
    bullets: [
      "Sport is one of the most enjoyable ways to get fit. You're moving without it feeling like a workout",
      "Fitness comes back faster than most people expect once you're playing regularly",
      "Small, consistent sessions beat occasional big efforts"
    ]
  },
  {
    id: "compete",
    label: "Compete again",
    firstTimerLabel: "Compete",
    bullets: [
      "That competitive edge doesn't disappear. It just needs match sharpness",
      "Local leagues and clubs are full of people looking for exactly this",
      "Your first competitive session is the hardest part. It gets easier fast from there"
    ]
  },
  {
    id: "people",
    label: "Meet people",
    bullets: [
      "Sport is one of the fastest ways to build a social circle as an adult",
      "Regular teammates and training partners often become close friends",
      "Every session is a room full of people who already have something in common with you"
    ]
  }
];

export const questions = [
  // Setup (unscored)
  { id: "S1", category: "setup", type: "sport", prompt: "Which sport do you most want to reclaim?", firstTimerPrompt: "Which sport do you most want to try?" },
  { id: "S2", category: "setup", type: "single", prompt: "What's your main goal?", options: goalOptions.map((g) => ({ id: g.id, label: g.label, firstTimerLabel: g.firstTimerLabel })) },

  // A. Recency and frequency (15)
  {
    id: "A1", category: "A", weight: 5, type: "single", prompt: "When did you last play?",
    options: opts([
      ["under1", "Less than a year ago", 3],
      ["1to5", "1 to 5 years ago", 2],
      ["5to10", "5 to 10 years ago", 1],
      ["10plus", "Over 10 years ago", 0],
      ["never", "Never played, I want to try it", 0]
    ])
  },
  {
    id: "A2", category: "A", weight: 5, type: "single", returnerOnly: true, prompt: "At your peak, how often did you play?",
    options: opts([["3plus", "3+ times a week", 3], ["1to2", "Once or twice a week", 2], ["monthly", "A few times a month", 1], ["rarely", "Now and then", 0]])
  },
  {
    id: "A3", category: "A", weight: 5, type: "single", returnerOnly: true, prompt: "How many years did you play, all in?",
    options: opts([["10plus", "10+ years", 3], ["5to10", "5 to 10 years", 2], ["2to5", "2 to 5 years", 1], ["under2", "Under 2 years", 0]])
  },

  // B. Motivation and goal strength (25)
  {
    id: "B1", category: "B", weight: 5, type: "single", prompt: "How much do you miss it?", firstTimerPrompt: "How much do you want to try it?",
    options: opts([["always", "All the time", 3], ["often", "Often", 2], ["sometimes", "Now and then", 1], ["rarely", "Rarely", 0]])
  },
  {
    id: "B2", category: "B", weight: 5, type: "single", prompt: "How clear is your goal?",
    options: opts([["specific", "A specific target or date", 3], ["clear", "A clear idea", 2], ["rough", "A rough idea", 1], ["unsure", "Not sure yet", 0]])
  },
  {
    id: "B3", category: "B", weight: 5, type: "single", prompt: "When would you like to start?",
    options: opts([["week", "This week", 3], ["month", "This month", 2], ["months", "In the next few months", 1], ["someday", "Someday", 0]])
  },
  {
    id: "B4", category: "B", weight: 5, type: "single", prompt: "How important is getting back to you right now?", firstTimerPrompt: "How important is getting started to you right now?",
    options: opts([["top", "One of my top priorities", 3], ["important", "Important", 2], ["nice", "Nice to have", 1], ["unsure", "Not sure", 0]])
  },
  {
    id: "B5", category: "B", weight: 5, type: "single", prompt: "Why now?",
    options: opts([
      ["trigger", "Something specific changed, such as a milestone, health or someone asked me", 3],
      ["while", "I've been thinking about it for a while", 2],
      ["reminded", "Something reminded me recently", 1],
      ["curious", "Just curious", 0]
    ])
  },

  // C. Barriers, scored inversely (20)
  {
    id: "C1", category: "C", weight: 4, type: "single", prompt: "How much free time could you give it in a typical week?",
    options: opts([["3plus", "3+ hours", 3], ["1to3", "1 to 3 hours", 2], ["under1", "Under an hour", 1], ["none", "Almost none", 0]])
  },
  {
    id: "C2", category: "C", weight: 4, type: "single", prompt: "How's your fitness compared with when you played?", firstTimerPrompt: "How would you rate your fitness right now?",
    options: opts([
      ["same", "About the same", 3, "Good"],
      ["bit", "A bit behind", 2, "OK"],
      ["long", "A long way behind", 1, "Not great"],
      ["scratch", "Starting from scratch", 0, "Starting from scratch"]
    ])
  },
  {
    id: "C3", category: "C", weight: 4, type: "single", prompt: "Is there an injury or physical issue that worries you?",
    options: opts([["no", "No", 3], ["minor", "Something minor", 2], ["manage", "Something I'd need to manage", 1], ["concern", "A real concern", 0]])
  },
  {
    id: "C4", category: "C", weight: 4, type: "single", prompt: "Do you know where you'd play?",
    options: opts([["yes", "Yes, I know a club or venue", 3], ["idea", "I have an idea", 2], ["look", "I'd need to look", 1], ["no", "No idea", 0]])
  },
  {
    id: "C5", category: "C", weight: 4, type: "single", prompt: "Is cost a worry?",
    options: opts([["no", "Not at all", 3], ["little", "A little", 2], ["lot", "Quite a lot", 1], ["major", "It's a major barrier", 0]])
  },

  // D. Readiness signals (15)
  {
    id: "D1", category: "D", weight: 5, type: "single", prompt: "What's your kit situation?",
    options: opts([
      ["usable", "I still have usable kit", 3, "I already have usable kit"],
      ["some", "I have some of it", 2],
      ["most", "I'd need most of it", 1],
      ["all", "I'd need everything", 0]
    ])
  },
  {
    id: "D2", category: "D", weight: 5, type: "single", prompt: "Have you taken any steps yet?",
    options: opts([["booked", "Booked or joined something", 3], ["looked", "Looked up clubs or sessions", 2], ["talked", "Talked about it", 1], ["no", "Not yet", 0]])
  },
  {
    id: "D3", category: "D", weight: 5, type: "single", prompt: "If a session were on this weekend, would you go?",
    options: opts([["definitely", "Definitely", 3], ["probably", "Probably", 2], ["maybe", "Maybe", 1], ["no", "Probably not", 0]])
  },

  // E. Past attempt history (10), returners only
  {
    id: "E1", category: "E", weight: 5, type: "single", returnerOnly: true, prompt: "Have you tried to get back before?",
    options: opts([
      ["lasted", "Yes, and it lasted a good while", 3],
      ["first", "No, this is my first go", 2],
      ["fizzled", "Yes, but it fizzled out quickly", 1],
      ["never", "Yes, a few times, and it never stuck", 0]
    ])
  },
  {
    id: "E2", category: "E", weight: 5, type: "single", returnerOnly: true, prompt: "Why did you stop originally?",
    options: opts([
      ["busy", "Life got busy: work, family or a move", 3],
      ["team", "The team, club or my playing partners stopped", 2],
      ["injury", "Injury", 1],
      ["interest", "I lost interest", 0]
    ])
  },

  // F. Social support (15)
  {
    id: "F1", category: "F", weight: 5, type: "single", prompt: "Would anyone play with you?",
    options: opts([
      ["keen", "Yes, someone's keen", 3],
      ["probably", "Probably, I know people who play", 2],
      ["club", "No, but I'm happy to meet people at a club", 1],
      ["alone", "No, and going alone puts me off", 0]
    ])
  },
  {
    id: "F2", category: "F", weight: 5, type: "single", prompt: "How would the people close to you react?",
    options: opts([["encourage", "They'd actively encourage me", 3], ["supportive", "Supportive", 2], ["indifferent", "Indifferent", 1], ["friction", "It would cause friction", 0]])
  },
  {
    id: "F3", category: "F", weight: 5, type: "single", returnerOnly: true, prompt: "Are you still in touch with anyone from the sport?",
    options: opts([["regularly", "Yes, regularly", 3], ["few", "A few, loosely", 2], ["notreally", "Not really", 1], ["no", "No", 0]])
  },

  // Final (unscored)
  {
    id: "S3", category: "final", type: "postcode", optional: true,
    prompt: "Where are you based?",
    subtitle: "Optional. First part of your postcode only, e.g. SK8. It stays in your browser and isn't stored or sent anywhere."
  },
  {
    id: "S4", category: "final", type: "freetext", optional: true, maxWords: 100,
    prompt: "In under 100 words, how motivated do you think you are?",
    subtitle: "Optional. This stays in your browser and isn't stored or sent anywhere. It doesn't change your score."
  }
];

export const bands = [
  { id: "low", min: 0, max: 39, name: "Low", headline: "Prove us wrong.", message: "Right now a lot is stacked against you. That's fine. It just means the first step needs to be small. Pick one thing below and do it this week.", caveat: "A low score just means more is in your way right now. It doesn't mean you can't do it." },
  { id: "moderate", min: 40, max: 59, name: "Moderate", headline: "You're on the fence.", message: "You want it, but something's holding you back. Your biggest lever is below. Shift that and the rest gets easier.", caveat: "Small changes to one or two areas can move this a long way." },
  { id: "high", min: 60, max: 79, name: "High", headline: "You're closer than you think.", message: "Most of the pieces are in place. A couple of practical steps and you're there.", caveat: "Scores like this are a good sign, but the first session is still the hardest bit." },
  { id: "veryhigh", min: 80, max: 100, name: "Very high", headline: "What are you waiting for?", message: "You're ready. Sort your kit, find a session and get it in the diary.", caveat: "Motivation fades if you wait. The best time to start is while it's high." }
];

export const GENERAL_CAVEAT =
  "This score is a rough guide based on your answers. It isn't a scientific prediction, and plenty of people beat theirs. If you have a health condition or injury, check with your GP before you start again.";

export const GP_WARNING = {
  trigger: { question: "C3", option: "concern" },
  text: "You said an injury or physical issue is a real concern. Please speak to your GP or a physio before you start, whatever your score."
};

// Free text keyword groups, in priority order. Whole words/phrases, case insensitive.
// DRAFT paragraphs, review before launch.
export const keywordGroups = [
  {
    id: "health",
    keywords: ["injury", "injuries", "injured", "knee", "knees", "bad back", "back pain", "my back", "hip", "ankle", "doctor", "gp", "physio", "weight", "overweight", "unfit", "operation", "surgery"],
    paragraph: "You mentioned your body or your health. That's the right thing to think about first. Get checked if you need to, then start with shorter, lower-intensity sessions and build up. Plenty of clubs run sessions for people easing back in."
  },
  {
    id: "confidence",
    keywords: ["scared", "nervous", "embarrassed", "worried", "rusty", "judged", "too old", "confidence", "anxious"],
    paragraph: "It sounds like nerves are part of this. That's normal. Most people at a beginners' or returners' session feel the same way, and nobody is watching you as closely as you think. The first session is the hardest one."
  },
  {
    id: "past",
    keywords: ["tried before", "gave up", "given up", "never stick", "never stuck", "didn't stick", "last time i tried", "fizzled"],
    paragraph: "You've had a go before and it didn't last. Use that. Think about what stopped it last time and plan around that one thing: a fixed weekly slot, a friend to go with, or a club instead of going solo."
  },
  {
    id: "time",
    keywords: ["busy", "no time", "not enough time", "kids", "children", "family", "shifts", "long hours", "my job"],
    paragraph: "Time is the main squeeze. You don't need hours. One regular slot a week that you protect like a meeting is enough to start, and you can build from there."
  },
  {
    id: "social",
    keywords: ["friend", "friends", "mate", "mates", "teammates", "alone", "on my own", "by myself", "nobody to play"],
    paragraph: "Who you play with matters to you. If someone's keen, set a date together now. If not, clubs and pay-and-play sessions are one of the easiest ways to find people at your level."
  },
  {
    id: "committed",
    keywords: ["definitely", "determined", "can't wait", "cant wait", "booked", "signed up", "committed", "motivated"],
    paragraph: "You sound ready. Turn that into a date: book one session in the next seven days before the feeling fades."
  }
];

// Used when free text is blank or matches nothing, and for the "biggest lever" tip.
// DRAFT, review before launch.
export const categoryContent = {
  B: {
    paragraph: "Your answers suggest the want is there, but it isn't sharp yet. A clear goal and a start date make a big difference.",
    lever: "Set a specific goal and a start date. For example: \"one session before the end of the month\". Write it down."
  },
  C: {
    paragraph: "Practical things like time, fitness, cost or knowing where to go are what's holding you back most.",
    lever: "Pick the one barrier that bothers you most and solve just that. Find one venue, one time slot, or one low-cost session to try."
  },
  D: {
    paragraph: "You haven't taken many concrete steps yet. That's the easiest thing to change.",
    lever: "Do one small thing today: look up a session near you, or check what kit you've still got."
  },
  F: {
    paragraph: "You'd be doing this largely on your own right now, and that makes it harder to keep going.",
    lever: "Find one person to go with, or pick a club session aimed at beginners or returners so you meet people from day one."
  }
};

// Line above the kit list, by D1 answer.
export const kitIntro = {
  usable: "You've got usable kit already. Check it over and replace anything worn out.",
  some: "You've got some kit already. Fill the gaps with the essentials below.",
  most: "You'll need most of your kit. Start with the essentials below and add the rest later.",
  all: "You'll need to kit yourself out. Start with the essentials below. No need to buy everything at once."
};

// ---------------------------------------------------------------------------
// Gamification: intro screen, rounds and answer reactions.
// ---------------------------------------------------------------------------

export const intro = {
  kicker: "Free · 3 minutes · No sign-up",
  titleTop: "The",
  titleMain: "Comeback",
  titleBottom: "Test",
  subheading: "How likely are you to actually get back into your sport? Play 7 quick rounds and get your score out of 100. Then try to beat it.",
  stats: [
    { value: "7", label: "Rounds" },
    { value: "3", label: "Minutes" },
    { value: "0", label: "Sign-ups" }
  ],
  steps: [
    { title: "Pick your sport", text: "{count} sports to choose from. Returning or trying one for the first time." },
    { title: "Play 7 quick rounds", text: "Tap an answer and it moves on. First timers skip a round." },
    { title: "Get your score", text: "Your comeback score, your biggest barrier and a plan to beat it." }
  ],
  privacy: "Your answers stay in your browser. Nothing is stored or sent anywhere.",
  button: "Start the test"
};

// Rounds run in this order. A round with no visible questions (e.g. Track record
// for first timers) is skipped. `category` drives the round-complete message.
// Messages: high = 67%+ of that category's points, mid = 34–66%, low = under 34%.
export const rounds = [
  {
    id: "warmup", name: "Warm-up", category: "A",
    questions: ["S1", "S2", "A1", "A2", "A3"],
    complete: {
      high: "Solid history. That muscle memory is still in there.",
      mid: "Decent foundations to build on.",
      low: "Long time away? That's exactly what this is for.",
      firstTimer: "Fresh start. Everyone begins somewhere."
    }
  },
  {
    id: "motivation", name: "Motivation", category: "B",
    questions: ["B1", "B2", "B3", "B4", "B5"],
    complete: {
      high: "Motivation's strong. That's the biggest piece.",
      mid: "The want is there. We'll help you sharpen it.",
      low: "Motivation's a bit low right now. Worth knowing, and it can change."
    }
  },
  {
    id: "barriers", name: "Barriers", category: "C",
    questions: ["C1", "C2", "C3", "C4", "C5"],
    complete: {
      high: "Not much in your way. Good sign.",
      mid: "A few hurdles, all fixable.",
      low: "Quite a bit in the way right now. We'll pick the one to tackle first."
    }
  },
  {
    id: "readiness", name: "Kit and readiness", category: "D",
    questions: ["D1", "D2", "D3"],
    complete: {
      high: "You're nearly ready to go.",
      mid: "Some prep done, some still to do.",
      low: "Not much prep yet. Small steps count."
    }
  },
  {
    id: "track", name: "Track record", category: "E",
    questions: ["E1", "E2"],
    complete: {
      high: "Good track record. You've done this before.",
      mid: "Mixed history. Useful to learn from.",
      low: "It hasn't stuck before. We'll plan around what went wrong."
    }
  },
  {
    id: "team", name: "Team talk", category: "F",
    questions: ["F1", "F2", "F3"],
    complete: {
      high: "Good backup around you.",
      mid: "Some support there. That helps.",
      low: "You'd be going mostly solo. Clubs and beginner sessions can change that."
    }
  },
  {
    id: "final", name: "Final whistle", category: null,
    questions: ["S3", "S4"]
  }
];

// Short reaction shown after certain answers, before moving on.
// Keyed by question id, then option id. Leave an option out for no reaction.
export const reactions = {
  A1: { under1: "Still fresh. That helps.", "10plus": "Long gap, but you're far from the only one.", never: "Brand new. Love it." },
  B1: { always: "That's a strong pull.", rarely: "Honest answer. Noted." },
  B3: { week: "Now we're talking.", someday: "Someday is fine, but a date helps." },
  C1: { "3plus": "Plenty of time to play with.", none: "Time's a big one. We'll come back to it." },
  C2: { same: "Great base to start from.", scratch: "Everyone starts somewhere." },
  C3: { concern: "Thanks for flagging. We'll add a health note to your results." },
  C4: { yes: "Knowing where to go is half the battle.", no: "Finding a venue is easier than it sounds." },
  C5: { major: "Noted. Pay-as-you-go sessions can keep costs down." },
  D1: { usable: "Kit ready. One less thing.", all: "We'll show you the essentials." },
  D2: { booked: "Already booked? Brilliant.", no: "That's what this is for." },
  D3: { definitely: "That's the spirit.", no: "Fair enough. We'll work on that." },
  E1: { lasted: "You've done it before. You can do it again.", never: "It hasn't stuck before. That's useful to know." },
  F1: { keen: "A partner makes a big difference.", alone: "Going solo is hard. Beginner sessions can help." },
  F2: { encourage: "Great backup.", friction: "That's tough. Worth a chat before you start." }
};
