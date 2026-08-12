import { goalOptions } from "../../data/quizOptions";

export default function GoalStep({ selected, onSelect, onSubmit, onBack }) {
  return (
    <div className="step">
      <h2>What's your goal?</h2>
      <div className="option-list">
        {goalOptions.map((opt) => (
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
        <button className="btn-primary" disabled={!selected} onClick={onSubmit}>See my results</button>
      </div>
    </div>
  );
}
