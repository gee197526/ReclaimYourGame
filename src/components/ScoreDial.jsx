import { useEffect, useState } from "react";

const DURATION_MS = 1400;

// Ring that fills to the score while the number counts up.
export default function ScoreDial({ score }) {
  const reduceMotion =
    typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const [shown, setShown] = useState(reduceMotion ? score : 0);

  useEffect(() => {
    if (reduceMotion) return undefined;
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setShown(Math.round(eased * score));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [score, reduceMotion]);

  return (
    <div className="score-dial" role="img" aria-label={`Score ${score} out of 100`}>
      <svg viewBox="0 0 120 120">
        <circle className="score-dial-track" cx="60" cy="60" r="52" pathLength="100" />
        <circle
          className="score-dial-fill"
          cx="60" cy="60" r="52" pathLength="100"
          style={{ strokeDasharray: `${shown} 100` }}
        />
      </svg>
      <span className="score-dial-value">
        {shown}<span className="score-dial-pct">%</span>
      </span>
    </div>
  );
}
