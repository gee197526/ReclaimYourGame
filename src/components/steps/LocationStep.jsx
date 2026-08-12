export default function LocationStep({ value, onChange, onNext, onBack }) {
  return (
    <div className="step">
      <h2>Where are you based?</h2>
      <p className="step-subtitle">We'll use this later to find clubs near you.</p>
      <input
        type="text"
        className="text-input"
        placeholder="e.g. SW1A 1AA"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="step-actions">
        <button className="btn-secondary" onClick={onBack}>Back</button>
        <button className="btn-primary" disabled={!value.trim()} onClick={onNext}>Continue</button>
      </div>
    </div>
  );
}
