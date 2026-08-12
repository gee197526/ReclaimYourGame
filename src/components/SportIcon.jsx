// Standard emoji per sport. A couple of sports have no dedicated Unicode
// emoji (netball, rugby union's actual ball shape, triathlon as one glyph),
// so those use the closest common substitute.
const icons = {
  football: "⚽",
  swimming: "🏊",
  golf: "⛳",
  tennis: "🎾",
  badminton: "🏸",
  netball: "🏐",
  basketball: "🏀",
  cricket: "🏏",
  "rugby-union": "🏈",
  cycling: "🚴",
  running: "🏃",
  triathlon: "🏊🚴🏃",
  skateboarding: "🛹",
  bjj: "🥋",
};

export default function SportIcon({ sport, size = 20, className }) {
  const icon = icons[sport];
  if (!icon) return null;
  return (
    <span
      className={className}
      style={{ fontSize: size, lineHeight: 1, display: "inline-flex" }}
      aria-hidden="true"
    >
      {icon}
    </span>
  );
}
