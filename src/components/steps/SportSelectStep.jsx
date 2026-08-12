import sports from "../../data/sports";
import SportIcon from "../SportIcon";

export default function SportSelectStep({ selected, onToggle, onNext }) {
  return (
    <div className="step">
      <h2>What sport did you play?</h2>
      <p className="step-subtitle">Pick as many as apply.</p>
      <div className="sport-grid">
        {sports.map((sport) => (
          <button
            key={sport.id}
            type="button"
            className={`sport-tile ${selected.includes(sport.id) ? "selected" : ""}`}
            onClick={() => onToggle(sport.id)}
          >
            <SportIcon sport={sport.id} size={22} />
            {sport.name}
          </button>
        ))}
      </div>
      <button className="btn-primary" disabled={selected.length === 0} onClick={onNext}>
        Continue
      </button>
    </div>
  );
}
