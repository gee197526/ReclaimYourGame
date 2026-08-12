// Placeholder affiliate links — replace with real Amazon Associates / Decathlon / Wiggle / ProDirect tracking links once programmes are confirmed.
const sports = [
  {
    id: "football",
    name: "Football",
    synopsis: "Five-a-side, Sunday league, or just a kickabout — football is the easiest sport to drop back into because it's played everywhere, at every level.",
    whyPeopleLovedIt: "The team, the banter, the simplicity of just turning up with boots.",
    gettingBack: "Local five-a-side leagues (Powerleague, Goals) are the fastest route back in — no long-term commitment, mixed abilities welcome.",
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
    whyPeopleLovedIt: "The headspace of lane swimming, the sense of fitness without pounding your joints.",
    gettingBack: "Check adult lane swim times at your local leisure centre — most offer graded lanes (slow/medium/fast) so you can ease back in.",
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
    whyPeopleLovedIt: "The walk, the competitiveness against yourself, time outdoors with friends.",
    gettingBack: "Driving ranges are the cheapest way back in before committing to a round — most clubs also offer pay-as-you-go visitor rates.",
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
    whyPeopleLovedIt: "The rallying, the social side of club tennis, the quick bursts of intensity.",
    gettingBack: "LTA's ClubSpark venue finder locates courts and beginner/returner sessions near you.",
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
    whyPeopleLovedIt: "The speed and reflexes, low cost, easy to organise with friends.",
    gettingBack: "Most leisure centres run pay-and-play badminton courts — no membership needed to start.",
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
    whyPeopleLovedIt: "The team dynamic, the fast pace, the friendships built on court.",
    gettingBack: "Search 'Back to Netball' sessions via England Netball — beginner-friendly and specifically aimed at returners.",
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
    whyPeopleLovedIt: "The intensity, the team play, the athleticism.",
    gettingBack: "Look for local pick-up sessions or walking basketball (lower-impact) if it's been a long time.",
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
    whyPeopleLovedIt: "The tradition, the long summer days, the team camaraderie.",
    gettingBack: "All Stars/Dynamos aside, look for local club nets sessions over winter — most clubs welcome returning adult players.",
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
    whyPeopleLovedIt: "The physicality, the club culture, the mates made through the sport.",
    gettingBack: "Ask your local club about touch rugby or 'golden oldies' — a lower-contact route back before full-contact training.",
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
    whyPeopleLovedIt: "The freedom of the open road, exploring new routes, the fitness gains.",
    gettingBack: "British Cycling's 'Let's Ride' events are free, sociable, and aimed at all abilities.",
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
    whyPeopleLovedIt: "The simplicity, the mental clarity, the sense of personal progress.",
    gettingBack: "NHS Couch to 5K app is free and specifically designed for people restarting after time off.",
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
    whyPeopleLovedIt: "The variety of training, the achievement of finishing, the community of age-group racing.",
    gettingBack: "British Triathlon lists beginner-friendly 'Tri Stars' events — shorter distances built for returners and first-timers.",
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
    whyPeopleLovedIt: "The creativity, the individual progress, the community at the park.",
    gettingBack: "Check local skatepark 'quiet hours' or adult sessions — many parks now run these specifically for returning older skaters.",
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
    whyPeopleLovedIt: "The problem-solving, the discipline, the respect-based gym culture.",
    gettingBack: "Contact local gyms directly about returning-member rates and beginner-friendly class times — most are flexible with returners.",
    kit: [
      { name: "Gi (kimono)", link: "#" },
      { name: "Rash guard", link: "#" },
      { name: "Mouthguard", link: "#" }
    ]
  }
];

export default sports;
