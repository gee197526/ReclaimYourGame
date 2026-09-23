export default function RoundEnd({ round, message, nextName, onNext, onBack }) {
  return (
    <div className="step round-end" aria-live="polite">
      <div className="round-badge" aria-hidden="true">
        <span className="round-burst" />
        <svg viewBox="0 0 100 100" className="round-badge-svg">
          <circle cx="50" cy="50" r="44" className="round-badge-ring" pathLength="100" />
          <path d="M32 52 L45 64 L69 38" className="round-badge-tick" pathLength="100" />
        </svg>
      </div>
      <p className="round-end-label">Round {round.number} of {round.total}</p>
      <h2 className="round-end-title">
        <span className="round-end-name">{round.name}</span>
        <span className="round-end-clear">Complete</span>
      </h2>
      {message && <p className="round-end-message">{message}</p>}
      <div className="round-dots" aria-label={`${round.number} of ${round.total} rounds complete`}>
        {Array.from({ length: round.total }, (_, i) => (
          <span key={i} className={`round-dot ${i < round.number ? "done" : ""} ${i === round.number ? "next" : ""}`} />
        ))}
      </div>
      <button type="button" className="btn-start round-end-next" onClick={onNext}>
        Next round: {nextName}
        <span className="btn-start-arrow" aria-hidden="true">→</span>
      </button>
      <button type="button" className="btn-link" onClick={onBack}>Back</button>
    </div>
  );
}
