// Game-style header: round badge, question counter, and a progress bar split
// into one segment per round.
export default function RoundHud({ rounds, roundIndex, answeredInRound, qNum, totalQuestions }) {
  const current = rounds[roundIndex];
  return (
    <div className="hud">
      <div className="hud-top">
        <span className="hud-round">
          <span className="hud-round-num">Round {roundIndex + 1}</span>
          <span className="hud-round-name">{current.name}</span>
        </span>
        <span className="hud-q" aria-label={`Question ${qNum} of ${totalQuestions}`}>
          <span className="hud-q-num">{qNum}</span>/{totalQuestions}
        </span>
      </div>
      <div
        className="hud-segments"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={totalQuestions}
        aria-valuenow={qNum - 1}
        aria-label={`Round ${roundIndex + 1} of ${rounds.length}`}
      >
        {rounds.map((r, i) => {
          const fill = i < roundIndex ? 1 : i > roundIndex ? 0 : answeredInRound / r.count;
          return (
            <span key={r.id} className={`hud-seg ${i === roundIndex ? "active" : ""}`} style={{ flexGrow: r.count }}>
              <span className="hud-seg-fill" style={{ width: `${fill * 100}%` }} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
