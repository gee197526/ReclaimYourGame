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
import RefereeIcon from "../components/RefereeIcon";

// Card colour for each score band: red for low, yellow for on the fence, green for go.
const BAND_CARD = {
  low: "red",
  moderate: "yellow",
  high: "green",
  veryhigh: "green"
};

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
  const card = BAND_CARD[band.id] ?? "yellow";
  const goal = goalOptions.find((g) => g.id === answers.S2);
  const showGpWarning = answers[GP_WARNING.trigger.question] === GP_WARNING.trigger.option;

  const keywordGroup = matchKeywordGroup(answers.S4);
  const explanation = keywordGroup?.paragraph ?? categoryContent[lever]?.paragraph;
  const leverTip = categoryContent[lever]?.lever;
  const kitLine = kitIntro[answers.D1];
  const sportName = sport.name.toLowerCase();

  return (
    <div className="results-container results-v2">
      {/* 1. Your result */}
      <section className={`result-box card-${card}`} aria-labelledby="result-heading">
        <h2 id="result-heading" className="result-box-title">Your result</h2>
        <div className="result-box-visual">
          <ScoreDial score={score} />
          <RefereeIcon card={card} className="result-box-referee" />
        </div>
        <p className="result-box-label">
          Your chance of {firstTimer ? "getting into" : "getting back into"} {sportName}
        </p>
        <span className="result-box-band">{band.name}</span>
        <h1 className="result-box-headline">{band.headline}</h1>
        <p className="result-box-message">{band.message}</p>
        <p className="result-box-caveat">{band.caveat}</p>
      </section>

      {showGpWarning && (
        <p className="gp-warning" role="note">{GP_WARNING.text}</p>
      )}

      {/* 2. What your answers say */}
      <section className="result-block" aria-labelledby="answers-heading">
        <h2 id="answers-heading" className="result-block-title">What your answers say</h2>
        {explanation && <p className="result-block-lead">{explanation}</p>}

        {leverTip && (
          <div className="lever-box">
            <h3>Your biggest lever</h3>
            <p>{leverTip}</p>
          </div>
        )}

        {goal && (
          <div className="result-sub">
            <h3>Your goal: {((firstTimer && goal.firstTimerLabel) || goal.label).toLowerCase()}</h3>
            <ul className="detail-list">
              {goal.bullets.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="result-sub">
          {sport.photo && (
            <img src={sport.photo} alt={sport.name} className="result-sport-photo" loading="lazy" />
          )}
          <h3 className="result-sport-heading">
            <SportIcon sport={sport.id} size={28} />
            {sport.name}
          </h3>
          <p>{sport.synopsis}</p>
        </div>

        <div className="result-sub">
          <h3>Why people love it</h3>
          <ul className="detail-list">
            {sport.whyPeopleLovedIt.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="result-sub">
          <h3>{firstTimer ? `Getting started in ${sportName}` : `Getting back into ${sportName}`}</h3>
          <ul className="detail-list">
            {sport.gettingBack.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Your kit */}
      <section className="result-block" aria-labelledby="kit-heading">
        <div className="result-block-title-row">
          <h2 id="kit-heading" className="result-block-title">Your kit</h2>
          <span className="ad-badge">Ad</span>
        </div>
        {kitLine && <p className="result-block-lead">{kitLine}</p>}

        <ul className="kit-rows">
          {sport.kit.map((item) => (
            <li key={item.name}>
              <a href={item.link} target="_blank" rel="noopener noreferrer sponsored" className="kit-row">
                <span className="kit-row-name">{item.name}</span>
                <span className="kit-row-cta">View</span>
              </a>
            </li>
          ))}
        </ul>

        {sport.books?.length > 0 && (
          <>
            <h3 className="kit-books-title">A book for the comeback</h3>
            <ul className="kit-rows">
              {sport.books.map((item) => (
                <li key={item.name}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer sponsored" className="kit-row kit-row-book">
                    {item.cover && <img src={item.cover} alt="" className="book-cover" loading="lazy" />}
                    <span className="kit-row-name">{item.name}</span>
                    <span className="kit-row-cta">View</span>
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}

        <p className="ad-disclosure">
          These are affiliate links. If you buy through one, we may earn a small commission
          at no extra cost to you.
        </p>
      </section>

      <section className="result-clubs">
        <h3>Clubs near {answers.S3 || "you"}</h3>
        <p className="placeholder-note">Club finder coming soon.</p>
      </section>

      <Link to="/" className="btn-secondary result-restart">Take the quiz again</Link>

      <p className="result-small-print">{GENERAL_CAVEAT}</p>
    </div>
  );
}
