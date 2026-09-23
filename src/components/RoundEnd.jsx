export default function RoundEnd({ round, message, nextName, onNext, onBack }) {
  return (
    <div className="step round-end" aria-live="polite">
      <div className="round-dots" aria-label={`Round ${round.number} of ${round.total} complete`}>
        {Array.from({ length: round.total }, (_, i) => (
          <span key={i} className={`round-dot ${i < round.number ? "done" : ""}`} />
        ))}
      </div>
      <p className="round-end-label">Round {round.number} of {round.total} complete</p>
      <h2 className="round-end-name">{round.name}</h2>
      {message && <p className="round-end-message">{message}</p>}
      <div className="step-actions">
        <button type="button" className="btn-secondary" onClick={onBack}>Back</button>
        <button type="button" className="btn-primary" onClick={onNext}>
          Next round: {nextName}
        </button>
      </div>
    </div>
  );
}
