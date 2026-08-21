// Placeholder affiliate links — replace with real Amazon Associates / Decathlon / Wiggle / ProDirect tracking links once programmes are confirmed.
const sports = [
  {
    id: "football",
    name: "Football",
    synopsis: "Five-a-side, Sunday league, or just a kickabout — football is the easiest sport to drop back into because it's played everywhere, at every level.",
    whyPeopleLovedIt: [
      "The team spirit and banter",
      "Getting a proper workout without needing to plan a session — you just turn up",
      "Being part of a five-a-side crew or Sunday league squad"
    ],
    gettingBack: [
      "Local five-a-side leagues (Powerleague, Goals) are the fastest route back in — pay-and-play, no long-term commitment",
      "Sessions are mixed ability, so you won't be the only one shaking off the rust",
      "Give it 3-4 weeks for your match fitness to catch up with your football brain"
    ],
    kit: [
      { name: "Football boots (firm ground)", link: "#" },
      { name: "Shin pads", link: "#" },
      { name: "Training bibs / kit bag", link: "#" }
    ]
  },
  {
    id: "swimming",
    name: "Swimming",
    synopsis: "Low impact, easy on ageing joints, and every local leisure centre has a pool. One of the simplest sports to pick back up at any fitness level.",
    whyPeopleLovedIt: [
      "The headspace and calm of lane swimming",
      "Getting fit without pounding your joints",
      "The routine of a regular pool session"
    ],
    gettingBack: [
      "Check adult lane swim times at your local leisure centre",
      "Most pools offer graded lanes (slow/medium/fast) so you can ease in at your own pace",
      "A 20-30 minute swim is plenty to start — build up gradually from there"
    ],
    kit: [
      { name: "Swimsuit / jammers", link: "#" },
      { name: "Goggles", link: "#" },
      { name: "Swim cap", link: "#" }
    ]
  },
  {
    id: "golf",
    name: "Golf",
    synopsis: "A sport you genuinely play for life. Coming back after a break is mostly about knocking the rust off your swing and finding a club that suits your pace.",
    whyPeopleLovedIt: [
      "The walk and time outdoors",
      "The competitiveness against yourself, not just others",
      "Time with friends away from screens"
    ],
    gettingBack: [
      "Driving ranges are the cheapest way to knock the rust off your swing",
      "Most clubs offer pay-as-you-go visitor rates before you commit to membership",
      "Your short game usually comes back faster than your long game — don't be discouraged early on"
    ],
    kit: [
      { name: "Golf clubs (starter set)", link: "#" },
      { name: "Golf shoes", link: "#" },
      { name: "Golf balls / gloves", link: "#" }
    ]
  },
  {
    id: "tennis",
    name: "Tennis",
    synopsis: "Accessible, sociable, and easy to find a game — parks, clubs, and the LTA's venue finder make tennis one of the simpler comebacks.",
    whyPeopleLovedIt: [
      "The rallying and quick bursts of intensity",
      "The social side of club tennis",
      "The simple satisfaction of hitting a clean shot"
    ],
    gettingBack: [
      "LTA's ClubSpark venue finder locates courts and beginner/returner sessions near you",
      "Many clubs run social mixers, a good way to rebuild confidence before joining a ladder",
      "Your timing usually returns before your fitness does — expect early sessions to be tiring"
    ],
    kit: [
      { name: "Tennis racket", link: "#" },
      { name: "Tennis shoes", link: "#" },
      { name: "Balls", link: "#" }
    ]
  },
  {
    id: "badminton",
    name: "Badminton",
    synopsis: "Fast, cheap, and available at almost every local sports hall — badminton is one of the quickest sports to get back into this week.",
    whyPeopleLovedIt: [
      "The speed and reflexes",
      "How cheap and easy it is to organise with friends",
      "A proper workout in under an hour"
    ],
    gettingBack: [
      "Most leisure centres run pay-and-play badminton courts — no membership needed",
      "Bring a friend for your first session back rather than joining a club ladder cold",
      "Court time is usually available at short notice, so there's no need to plan weeks ahead"
    ],
    kit: [
      { name: "Badminton racket", link: "#" },
      { name: "Indoor court shoes", link: "#" },
      { name: "Shuttlecocks", link: "#" }
    ]
  },
  {
    id: "netball",
    name: "Netball",
    synopsis: "England Netball's Back to Netball programme was built exactly for this — structured, social sessions for people returning after time away.",
    whyPeopleLovedIt: [
      "The team dynamic and fast pace",
      "Friendships built on court",
      "The mix of skill and fitness the game demands"
    ],
    gettingBack: [
      "Back to Netball sessions via England Netball are built specifically for returners",
      "Sessions are beginner-friendly and low-pressure, with no fitness test to pass first",
      "Most groups are social first, competitive second — ideal for shaking off nerves"
    ],
    kit: [
      { name: "Netball", link: "#" },
      { name: "Netball trainers", link: "#" },
      { name: "Bib set", link: "#" }
    ]
  },
  {
    id: "basketball",
    name: "Basketball",
    synopsis: "Pick-up games and local leagues make basketball easy to rejoin — the challenge is usually cardio fitness more than skill loss.",
    whyPeopleLovedIt: [
      "The intensity and athleticism",
      "The team play and reading the game",
      "The buzz of a close pick-up match"
    ],
    gettingBack: [
      "Local pick-up games or walking basketball (lower-impact) are the easiest re-entry points",
      "Cardio fitness usually lags behind skill — expect your legs to tire before your shot does",
      "Pick-up games are generally mixed ability, so don't worry about being the rustiest one there"
    ],
    kit: [
      { name: "Basketball shoes", link: "#" },
      { name: "Basketball", link: "#" },
      { name: "Compression gear", link: "#" }
    ]
  },
  {
    id: "cricket",
    name: "Cricket",
    synopsis: "From village greens to indoor nets, cricket has more entry points than people realise — including shorter formats built for casual players.",
    whyPeopleLovedIt: [
      "The tradition and long summer days",
      "The team camaraderie between overs",
      "The mix of patience and skill the game rewards"
    ],
    gettingBack: [
      "Winter nets sessions at your local club are a low-pressure way back in before the season starts",
      "Most clubs welcome returning adult players, even those who haven't played in years",
      "Shorter formats (six-a-side, indoor cricket) are a gentler reintroduction than a full match"
    ],
    kit: [
      { name: "Cricket bat", link: "#" },
      { name: "Pads and gloves", link: "#" },
      { name: "Cricket bag", link: "#" }
    ]
  },
  {
    id: "rugby-union",
    name: "Rugby Union",
    synopsis: "Contact sport comebacks need a bit more care — conditioning first, then contact. Many clubs run non-contact touch or golden oldies sessions for returners.",
    whyPeopleLovedIt: [
      "The physicality and club culture",
      "Mates made through the sport",
      "The satisfaction of a hard-fought match"
    ],
    gettingBack: [
      "Ask your local club about touch rugby or 'golden oldies' sessions — a lower-contact route back in",
      "Conditioning first, contact later — most clubs will support building fitness before full training",
      "Clubhouse culture means you'll often be welcomed back socially before you've even trained"
    ],
    kit: [
      { name: "Rugby boots", link: "#" },
      { name: "Gum shield", link: "#" },
      { name: "Training kit", link: "#" }
    ]
  },
  {
    id: "cycling",
    name: "Cycling",
    synopsis: "Whether it's commuting, road, or off-road, cycling scales to whatever fitness level you're starting from — and the kit lasts for years.",
    whyPeopleLovedIt: [
      "The freedom of the open road",
      "Exploring new routes",
      "The steady fitness gains over time"
    ],
    gettingBack: [
      "British Cycling's 'Let's Ride' events are free, sociable, and open to all abilities",
      "Kit lasts for years, so a lot of your old gear may still be usable",
      "Start with shorter, flatter routes before tackling hills or longer distances"
    ],
    kit: [
      { name: "Road or hybrid bike", link: "#" },
      { name: "Helmet", link: "#" },
      { name: "Padded shorts", link: "#" }
    ]
  },
  {
    id: "running",
    name: "Running",
    synopsis: "The lowest barrier to entry of any sport on this list — a pair of shoes and a plan. Couch to 5K remains the standard route back in.",
    whyPeopleLovedIt: [
      "The simplicity — just shoes and a plan",
      "The mental clarity a run gives you",
      "The sense of personal progress week to week"
    ],
    gettingBack: [
      "The NHS Couch to 5K app is free and built specifically for people restarting after time off",
      "Run/walk intervals are normal at first — that's how the programme is designed to work",
      "Most people feel noticeably fitter within 3-4 weeks of consistent sessions"
    ],
    kit: [
      { name: "Running shoes", link: "#" },
      { name: "GPS running watch", link: "#" },
      { name: "Moisture-wicking kit", link: "#" }
    ]
  },
  {
    id: "triathlon",
    name: "Triathlon",
    synopsis: "The most gear-intensive comeback on this list — swim, bike, and run each need their own kit, which makes triathlon the highest-value return for retailers too.",
    whyPeopleLovedIt: [
      "The variety of training across three disciplines",
      "The achievement of finishing",
      "The community around age-group racing"
    ],
    gettingBack: [
      "British Triathlon's 'Tri Stars' events are shorter-distance and built for returners and first-timers",
      "This is the most gear-intensive comeback on this list — budget for swim, bike, and run kit",
      "Rebuilding all three disciplines takes longer than any one alone, so pace your training plan accordingly"
    ],
    kit: [
      { name: "Wetsuit", link: "#" },
      { name: "Road/tri bike", link: "#" },
      { name: "Running shoes", link: "#" },
      { name: "Tri suit", link: "#" }
    ]
  },
  {
    id: "skateboarding",
    name: "Skateboarding",
    synopsis: "Skateparks have never been more common, and the culture is more welcoming to older returners than it used to be. Balance and confidence come back faster than people expect.",
    whyPeopleLovedIt: [
      "The creativity and individual progress",
      "The community at the skatepark",
      "The freedom of just riding"
    ],
    gettingBack: [
      "Check your local skatepark's quiet hours or adult sessions — many now run these for returning older skaters",
      "Balance and confidence typically come back faster than people expect",
      "Start with flat ground and easy transitions before returning to anything you used to do at full speed"
    ],
    kit: [
      { name: "Skateboard (complete)", link: "#" },
      { name: "Helmet and pads", link: "#" },
      { name: "Skate shoes", link: "#" }
    ]
  },
  {
    id: "bjj",
    name: "BJJ (Brazilian Jiu-Jitsu)",
    synopsis: "A steep but rewarding sport to return to — most gyms welcome returning white/blue belts and will happily let you rebuild at your own pace.",
    whyPeopleLovedIt: [
      "The problem-solving nature of the sport",
      "The discipline it builds",
      "The respect-based culture of a good gym"
    ],
    gettingBack: [
      "Contact local gyms directly about returning-member rates and beginner-friendly class times",
      "Most gyms are flexible with returners and won't expect you to jump back in at your old level",
      "Expect your technical memory to return faster than your cardio and grip strength"
    ],
    kit: [
      { name: "Gi (kimono)", link: "#" },
      { name: "Rash guard", link: "#" },
      { name: "Mouthguard", link: "#" }
    ]
  },
  {
    id: "squash",
    name: "Squash",
    synopsis: "One of the fastest, most intense racket sports there is — a match is over in well under an hour, which makes it easy to fit back into a busy week.",
    whyPeopleLovedIt: [
      "The intensity, and a match being over in 30-45 minutes",
      "The satisfaction of a well-placed shot into the corner",
      "How much of a workout you get without needing hours of free time"
    ],
    gettingBack: [
      "England Squash's club finder lists venues offering pay-and-play courts and beginner-friendly leagues",
      "Most clubs run graded ladders, so you're matched against players of a similar level rather than thrown in against regulars",
      "Expect your legs to feel it before your racket skills do — squash fitness is its own thing"
    ],
    kit: [
      { name: "Squash racket", link: "#" },
      { name: "Squash shoes (non-marking soles)", link: "#" },
      { name: "Eye protection", link: "#" }
    ]
  },
  {
    id: "table-tennis",
    name: "Table Tennis",
    synopsis: "Cheap, indoor, and available at community centres and clubs everywhere — table tennis is one of the easiest sports to pick up again at any age or fitness level.",
    whyPeopleLovedIt: [
      "The quick reflexes and the satisfaction of a good rally",
      "How social and low-pressure club nights are",
      "Being playable well into later life — no real fitness barrier to entry"
    ],
    gettingBack: [
      "Table Tennis England's club finder lists local sessions, many with beginner-friendly \"come and try\" nights",
      "Most clubs have bats and balls to borrow for your first few visits, so there's no need to buy kit upfront",
      "Skills and timing tend to come back quickly — it's more muscle memory than fitness"
    ],
    kit: [
      { name: "Table tennis bat", link: "#" },
      { name: "Table tennis balls", link: "#" },
      { name: "Carry case", link: "#" }
    ]
  },
  {
    id: "boxing",
    name: "Boxing",
    synopsis: "One of the most complete workouts in sport, and increasingly popular as a fitness comeback in its own right — most gyms cater for people rebuilding fitness, not just competing.",
    whyPeopleLovedIt: [
      "The discipline and structure of training",
      "How much of a full-body workout it is",
      "The confidence that comes with learning to hit properly"
    ],
    gettingBack: [
      "England Boxing lists affiliated amateur clubs — most run separate fitness or non-contact sessions alongside competitive training",
      "You don't need to spar to train — pad work and bag work make up most sessions, especially early on",
      "Expect a tough first few weeks on conditioning before technique starts to click"
    ],
    kit: [
      { name: "Boxing gloves", link: "#" },
      { name: "Hand wraps", link: "#" },
      { name: "Focus pads", link: "#" }
    ]
  },
  {
    id: "hockey",
    name: "Hockey",
    synopsis: "A fast, team-based sport that rewards fitness and stick skills in equal measure — most clubs are well used to welcoming adults back after time away.",
    whyPeopleLovedIt: [
      "The pace of the game and the teamwork",
      "The club social scene, on and off the pitch",
      "The mix of skill and fitness needed to play well"
    ],
    gettingBack: [
      "England Hockey's club finder lists local clubs, many running specific back-to-hockey or masters sessions for returning adults",
      "Preseason training in late summer is the easiest time to rejoin a club",
      "Stick skills tend to come back faster than match fitness — expect the running to be the harder part"
    ],
    kit: [
      { name: "Hockey stick", link: "#" },
      { name: "Shin guards", link: "#" },
      { name: "Mouthguard", link: "#" }
    ]
  },
  {
    id: "climbing",
    name: "Climbing",
    synopsis: "Indoor climbing walls have made this one of the most accessible comebacks on this list — no partner or club needed to get started, and bouldering venues are in most UK cities now.",
    whyPeopleLovedIt: [
      "The problem-solving of working out a route",
      "The mix of strength, technique, and mental focus",
      "The community at climbing walls and bouldering gyms"
    ],
    gettingBack: [
      "Most climbing walls offer day passes and beginner inductions, so you can go without booking a course first",
      "Bouldering (no ropes, low walls) is the easiest way back in if it's been a long time — less gear, less setup",
      "Grip strength and technique both fade with time off, so expect early sessions to feel harder than you remember"
    ],
    kit: [
      { name: "Climbing shoes", link: "#" },
      { name: "Chalk bag and chalk", link: "#" },
      { name: "Harness (for roped climbing)", link: "#" }
    ]
  },
  {
    id: "judo",
    name: "Judo",
    synopsis: "One of the UK's most established martial arts, with a strong adult and masters scene — most clubs are set up for people returning after a break, not just complete beginners.",
    whyPeopleLovedIt: [
      "The technical depth and the satisfaction of a well-executed throw",
      "The discipline and etiquette of the dojo",
      "The community built through regular training partners"
    ],
    gettingBack: [
      "British Judo's club finder lists affiliated clubs, many with adult beginner and returner classes",
      "Most clubs are used to adults rejoining at a lower grade than they left, rather than expecting you to pick up where you stopped",
      "Fitness and flexibility usually take longer to return than technique — old habits tend to come back fast"
    ],
    kit: [
      { name: "Judo gi (kimono)", link: "#" },
      { name: "Belt", link: "#" },
      { name: "Mouthguard", link: "#" }
    ]
  }
];

export default sports;
