import { holdingBackOptions } from "../../data/quizOptions";

export default function HoldingBackStep({ selected, onToggle, onNext, onBack }) {
  return (
    <div className="step">
      <h2>What's holding you back?</h2>
      <p className="step-subtitle">Pick as many as apply.</p>
      <div className="option-list">
        {holdingBackOptions.map((opt) => (
          <button
            key={opt.id}
            type="button"
            className={`option-row ${selected.includes(opt.id) ? "selected" : ""}`}
            onClick={() => onToggle(opt.id)}
          >
            {opt.label}
          </button>
        ))}
      </div>
      <div className="step-actions">
        <button className="btn-secondary" onClick={onBack}>Back</button>
        <button className="btn-primary" disabled={selected.length === 0} onClick={onNext}>Continue</button>
      </div>
    </div>
  );
}
