import { intro } from "../data/quizV2";
import sports from "../data/sports";
import SportIcon from "./SportIcon";

const withCount = (text) => text.replace("{count}", sports.length);

// Faint pitch markings drawn over the hero photo.
function PitchLines() {
  return (
    <svg className="pitch-lines" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="20" y="20" width="360" height="560" rx="4" />
        <line x1="20" y1="300" x2="380" y2="300" />
        <circle cx="200" cy="300" r="62" />
        <circle cx="200" cy="300" r="4" fill="currentColor" />
        <rect x="100" y="20" width="200" height="90" />
        <rect x="150" y="20" width="100" height="36" />
        <path d="M150 110 A55 55 0 0 0 250 110" />
        <rect x="100" y="490" width="200" height="90" />
        <rect x="150" y="544" width="100" height="36" />
        <path d="M150 490 A55 55 0 0 1 250 490" />
      </g>
    </svg>
  );
}

// Semicircle gauge that sweeps up and back, with "??" where the score will go.
function TeaserGauge() {
  return (
    <div className="teaser-gauge" aria-hidden="true">
      <svg viewBox="0 0 200 120">
        <defs>
          <linearGradient id="gaugeGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#ff5a36" />
            <stop offset="50%" stopColor="#ffd12e" />
            <stop offset="100%" stopColor="#e8ff2e" />
          </linearGradient>
        </defs>
        <path className="gauge-track" d="M20 110 A80 80 0 0 1 180 110" pathLength="100" />
        <path className="gauge-fill" d="M20 110 A80 80 0 0 1 180 110" pathLength="100" stroke="url(#gaugeGrad)" />
      </svg>
      <div className="teaser-gauge-value">
        <span className="teaser-q">??</span>
        <span className="teaser-pct">%</span>
      </div>
      <p className="teaser-gauge-label">Your comeback score</p>
    </div>
  );
}

// Scrolling stadium-style ticker of every sport.
function SportTicker() {
  const items = [...sports, ...sports];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((s, i) => (
          <span key={`${s.id}-${i}`} className="ticker-item">
            <SportIcon sport={s.id} size={20} />
            {s.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function IntroScreen({ onStart }) {
  const picks = intro.quickPicks.map((id) => sports.find((s) => s.id === id)).filter(Boolean);

  return (
    <div className="intro-screen">
      <section className="intro-hero">
        <div className="intro-hero-bg" aria-hidden="true" />
        <PitchLines />
        <div className="intro-hero-inner">
          <p className="intro-kicker">{intro.kicker}</p>
          <h1 className="intro-title">
            <span className="intro-title-small">{intro.titleTop}</span>
            <span className="intro-title-main">{intro.titleMain}</span>
            <span className="intro-title-small">{intro.titleBottom}</span>
          </h1>
          <div className="intro-copy">
            {intro.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="intro-newcomers">{intro.newcomers}</p>
          </div>
          <button type="button" className="btn-start" onClick={() => onStart()}>
            {intro.button}
            <span className="btn-start-arrow" aria-hidden="true">→</span>
          </button>
          <TeaserGauge />
          <ul className="intro-stats">
            {intro.stats.map((s) => (
              <li key={s.label}>
                <span className="intro-stat-value">{s.value}</span>
                <span className="intro-stat-label">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SportTicker />

      <section className="intro-picks">
        <h2 className="intro-section-title">{intro.quickPickTitle}</h2>
        <div className="pick-grid">
          {picks.map((s) => (
            <button key={s.id} type="button" className="pick-tile" onClick={() => onStart(s.id)}>
              <span className="pick-photo" style={{ backgroundImage: `url(${s.photo})` }} aria-hidden="true" />
              <span className="pick-name">
                <SportIcon sport={s.id} size={20} />
                {s.name}
              </span>
            </button>
          ))}
        </div>
        <button type="button" className="btn-secondary pick-more" onClick={() => onStart()}>
          {withCount(intro.quickPickMore)} →
        </button>
      </section>

      <section className="intro-how">
        <h2 className="intro-section-title">How it works</h2>
        <ol className="intro-steps">
          {intro.steps.map((s, i) => (
            <li key={s.title}>
              <span className="intro-step-num">{i + 1}</span>
              <span className="intro-step-body">
                <strong>{s.title}</strong>
                <span>{withCount(s.text)}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="small-print">
        <h2 className="small-print-title">{intro.smallPrintTitle}</h2>
        <ul>
          {intro.smallPrint.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
