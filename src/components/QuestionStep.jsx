import sports from "../data/sports";
import SportIcon from "./SportIcon";
import { countWords } from "../lib/scoreQuizV2";

export default function QuestionStep({ question, value, firstTimer, isFirst, isLast, onChoose, onText, onNext, onBack }) {
  const prompt = (firstTimer && question.firstTimerPrompt) || question.prompt;

  const backButton = !isFirst && (
    <button type="button" className="btn-secondary" onClick={onBack}>Back</button>
  );

  if (question.type === "sport") {
    return (
      <div className="step">
        <div className="hero-banner" role="img" aria-label="Players on a floodlit pitch at night">
          <div className="hero-banner-overlay">
            <p className="hero-banner-text">
              Reclaiming your game, or claiming it for the first time? Answer a few quick questions
              and we'll tell you how likely you are to make it happen.
            </p>
          </div>
        </div>
        <h2>{prompt}</h2>
        <div className="sport-grid">
          {sports.map((sport) => (
            <button
              key={sport.id}
              type="button"
              className={`sport-tile ${value === sport.id ? "selected" : ""}`}
              aria-pressed={value === sport.id}
              onClick={() => onChoose(sport.id)}
            >
              <SportIcon sport={sport.id} size={22} />
              {sport.name}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (question.type === "single") {
    return (
      <div className="step">
        <h2>{prompt}</h2>
        <div className="option-list">
          {question.options.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={`option-row ${value === opt.id ? "selected" : ""}`}
              aria-pressed={value === opt.id}
              onClick={() => onChoose(opt.id)}
            >
              {(firstTimer && opt.firstTimerLabel) || opt.label}
            </button>
          ))}
        </div>
        <div className="step-actions">
          {backButton}
          {value && (
            <button type="button" className="btn-primary" onClick={onNext}>Continue</button>
          )}
        </div>
      </div>
    );
  }

  const nextLabel = isLast ? "See my score" : "Continue";

  if (question.type === "postcode") {
    return (
      <div className="step">
        <h2>{prompt}</h2>
        <p className="step-subtitle">{question.subtitle}</p>
        <input
          type="text"
          className="text-input"
          placeholder="e.g. SK8"
          maxLength={4}
          autoComplete="off"
          value={value || ""}
          onChange={(e) => onText(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""))}
        />
        <div className="step-actions">
          {backButton}
          <button type="button" className="btn-primary" onClick={onNext}>
            {value ? nextLabel : "Skip"}
          </button>
        </div>
      </div>
    );
  }

  if (question.type === "freetext") {
    const words = countWords(value || "");
    const over = words > question.maxWords;
    return (
      <div className="step">
        <h2>{prompt}</h2>
        <p className="step-subtitle">{question.subtitle}</p>
        <textarea
          className="text-input contact-textarea"
          rows={5}
          value={value || ""}
          onChange={(e) => onText(e.target.value)}
          aria-describedby="word-count"
        />
        <p id="word-count" className={`word-count ${over ? "over" : ""}`}>
          {words} / {question.maxWords} words
        </p>
        <div className="step-actions">
          {backButton}
          <button type="button" className="btn-primary" disabled={over} onClick={onNext}>
            {nextLabel}
          </button>
        </div>
      </div>
    );
  }

  return null;
}
