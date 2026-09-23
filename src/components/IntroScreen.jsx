import { intro } from "../data/quizV2";
import sports from "../data/sports";

// Semicircle gauge that sweeps up and back, with a "?" where the score will go.
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

export default function IntroScreen({ onStart }) {
  return (
    <div className="intro-screen">
      <section className="intro-hero">
        <div className="intro-hero-bg" aria-hidden="true" />
        <div className="intro-hero-inner">
          <p className="intro-kicker">{intro.kicker}</p>
          <h1 className="intro-title">
            <span className="intro-title-small">{intro.titleTop}</span>
            <span className="intro-title-main">{intro.titleMain}</span>
            <span className="intro-title-small">{intro.titleBottom}</span>
          </h1>
          <TeaserGauge />
          <p className="intro-sub">{intro.subheading}</p>
          <button type="button" className="btn-start" onClick={onStart}>
            {intro.button}
            <span className="btn-start-arrow" aria-hidden="true">→</span>
          </button>
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

      <section className="intro-how">
        <h2 className="intro-how-title">How it works</h2>
        <ol className="intro-steps">
          {intro.steps.map((s, i) => (
            <li key={s.title}>
              <span className="intro-step-num">{i + 1}</span>
              <span className="intro-step-body">
                <strong>{s.title}</strong>
                <span>{s.text.replace("{count}", sports.length)}</span>
              </span>
            </li>
          ))}
        </ol>
        <p className="intro-privacy">{intro.privacy}</p>
      </section>
    </div>
  );
}
