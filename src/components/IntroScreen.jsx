import { intro } from "../data/quizV2";

export default function IntroScreen({ onStart }) {
  return (
    <div className="step intro-screen">
      <div className="hero-banner" role="img" aria-label="Players on a floodlit pitch at night">
        <div className="hero-banner-overlay">
          <p className="hero-banner-text">
            Reclaiming your game, or claiming it for the first time?
          </p>
        </div>
      </div>
      <h1 className="intro-heading">{intro.heading}</h1>
      <p className="intro-sub">{intro.subheading}</p>
      <ul className="intro-points">
        {intro.points.map((p) => (
          <li key={p.title}>
            <strong>{p.title}</strong>
            <span>{p.text}</span>
          </li>
        ))}
      </ul>
      <button type="button" className="btn-primary intro-start" onClick={onStart}>
        {intro.button}
      </button>
    </div>
  );
}
