import { useLocation, Link, Navigate } from "react-router-dom";
import sports from "../data/sports";
import {
  goalOptions,
  GENERAL_CAVEAT,
  GP_WARNING,
  categoryContent,
  kitIntro
} from "../data/quizV2";
import { scoreQuiz, isFirstTimer, matchKeywordGroup } from "../lib/scoreQuizV2";
import SportIcon from "../components/SportIcon";
import ScoreDial from "../components/ScoreDial";

export default function Results() {
  const location = useLocation();
  const answers = location.state?.answers;
  const sport = answers && sports.find((s) => s.id === answers.S1);

  if (!answers || !sport) {
    // No quiz data: send back to start rather than showing an empty page.
    return <Navigate to="/" replace />;
  }

  const firstTimer = isFirstTimer(answers);
  const { score, band, lever } = scoreQuiz(answers);
  const goal = goalOptions.find((g) => g.id === answers.S2);
  const showGpWarning = answers[GP_WARNING.trigger.question] === GP_WARNING.trigger.option;

  const keywordGroup = matchKeywordGroup(answers.S4);
  const explanation = keywordGroup?.paragraph ?? categoryContent[lever]?.paragraph;
  const leverTip = categoryContent[lever]?.lever;
  const kitLine = kitIntro[answers.D1];

  return (
    <div className="results-container">
      {/* 1. Score and band headline */}
      <section className={`score-card band-${band.id}`}>
        <p className="score-kicker">Your comeback score</p>
        <p className="score-label">
          Likelihood of {firstTimer ? "getting into" : "getting back into"} {sport.name.toLowerCase()}
        </p>
        <ScoreDial score={score} />
        <p className="score-band">{band.name}</p>
        <h1 className="score-headline">{band.headline}</h1>
      </section>

      {showGpWarning && (
        <p className="gp-warning" role="note">{GP_WARNING.text}</p>
      )}

      {/* 2. Band message and caveats */}
      <section className="results-cta">
        <p>{band.message}</p>
        <p className="caveat">{band.caveat}</p>
        <p className="caveat">{GENERAL_CAVEAT}</p>
      </section>

      {/* 3. Explanation and 4. biggest lever */}
      {explanation && (
        <section className="results-cta">
          <h3>What your answers say</h3>
          <p>{explanation}</p>
        </section>
      )}
      {leverTip && (
        <section className="results-cta lever-card">
          <h3>Your biggest lever</h3>
          <p>{leverTip}</p>
        </section>
      )}

      {goal && (
        <section className="results-cta goals-card">
          <h3>Your goal: {((firstTimer && goal.firstTimerLabel) || goal.label).toLowerCase()}</h3>
          <ul className="detail-list">
            {goal.bullets.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
      )}

      {/* 5. Sport content and 6. kit */}
      <section className="sport-result">
        {sport.photo && (
          <img src={sport.photo} alt={sport.name} className="sport-result-photo" loading="lazy" />
        )}
        <h2 className="sport-result-heading">
          <SportIcon sport={sport.id} size={34} />
          {sport.name}
        </h2>
        <p>{sport.synopsis}</p>

        <h3>Why people love it</h3>
        <ul className="detail-list">
          {sport.whyPeopleLovedIt.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <h3>{firstTimer ? "Getting started" : "Getting back in"}</h3>
        <ul className="detail-list">
          {sport.gettingBack.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <h3>Kit to consider <span className="ad-badge">Ad</span></h3>
        {kitLine && <p>{kitLine}</p>}
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

        <h3>Books to consider <span className="ad-badge">Ad</span></h3>
        <p className="ad-disclosure">
          These are affiliate links. If you buy through one, we may earn a small commission
          at no extra cost to you.
        </p>
        <ul className="book-list">
          {sport.books.map((item) => (
            <li key={item.name}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.cover && <img src={item.cover} alt="" className="book-cover" loading="lazy" />}
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="results-cta">
        <h3>Clubs near {answers.S3 || "you"}</h3>
        <p className="placeholder-note">Club finder coming in a later phase.</p>
      </section>

      <Link to="/" className="btn-secondary">Start over</Link>
    </div>
  );
}
