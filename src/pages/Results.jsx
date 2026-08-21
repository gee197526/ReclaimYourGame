import { useLocation, Link, Navigate } from "react-router-dom";
import sports from "../data/sports";
import { goalOptions, lastPlayedOptions } from "../data/quizOptions";
import SportIcon from "../components/SportIcon";

export default function Results() {
  const location = useLocation();
  const answers = location.state?.answers;

  if (!answers) {
    // No quiz data — send back to start rather than showing an empty page.
    return <Navigate to="/" replace />;
  }

  const selectedSports = sports.filter((s) => answers.sports.includes(s.id));
  const lastPlayedLabel = lastPlayedOptions.find((o) => o.id === answers.lastPlayed)?.label;
  const goalLabel = goalOptions.find((o) => o.id === answers.goal)?.label;

  return (
    <div className="results-container">
      <h1>Your comeback plan</h1>
      <p className="results-intro">
        Last played {lastPlayedLabel?.toLowerCase()}. Goal: {goalLabel?.toLowerCase()}.
      </p>

      {selectedSports.map((sport) => (
        <section key={sport.id} className="sport-result">
          <h2 className="sport-result-heading">
            <SportIcon sport={sport.id} size={34} />
            {sport.name}
          </h2>
          <p>{sport.synopsis}</p>

          <h3>Why people loved it</h3>
          <ul className="detail-list">
            {sport.whyPeopleLovedIt.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <h3>Getting back in</h3>
          <ul className="detail-list">
            {sport.gettingBack.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <h3>Kit to consider <span className="ad-badge">Ad</span></h3>
          <p className="ad-disclosure">
            These are affiliate links. If you buy through one, we may earn a small commission
            at no extra cost to you.
          </p>
          <ul className="kit-list">
            {sport.kit.map((item) => (
              <li key={item.name}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="results-cta">
        <h3>Clubs near {answers.postcode || "you"}</h3>
        <p className="placeholder-note">Club finder coming in a later phase.</p>
      </section>

      <section className="results-cta">
        <h3>Save your personalised plan</h3>
        <p className="placeholder-note">Email capture coming in a later phase.</p>
      </section>

      <Link to="/" className="btn-secondary">Start over</Link>
    </div>
  );
}
