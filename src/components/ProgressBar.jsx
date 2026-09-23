export default function ProgressBar({ step, total, label = "Step" }) {
  const pct = Math.round((step / total) * 100);
  return (
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
      <span className="progress-bar-label">{label} {step} of {total}</span>
    </div>
  );
}
