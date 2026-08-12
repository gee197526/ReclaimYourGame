import { lastPlayedOptions } from "../../data/quizOptions";

export default function LastPlayedStep({ selected, onSelect, onNext, onBack }) {
  return (
    <div className="step">
      <h2>When did you last play?</h2>
      <div className="option-list">
        {lastPlayedOptions.map((opt) => (
          <button
            key={opt.id}
            type="button"
            className={`option-row ${selected === opt.id ? "selected" : ""}`}
            onClick={() => onSelect(opt.id)}
          >
            {opt.label}
          </button>
        ))}
      </div>
      <div className="step-actions">
        <button className="btn-secondary" onClick={onBack}>Back</button>
        <button className="btn-primary" disabled={!selected} onClick={onNext}>Continue</button>
      </div>
    </div>
  );
}
