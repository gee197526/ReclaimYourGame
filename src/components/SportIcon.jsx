// Standard emoji per sport. A couple of sports have no dedicated Unicode
// emoji (netball, rugby union's actual ball shape, judo), so those use the
// closest common substitute — judo uses the wrestling glyph rather than
// reusing BJJ's gi, to keep the two visually distinct. Triathlon uses
// three separate emoji in sequence rather than one glyph.
//
// Squash has no Unicode emoji at all, and the nearest substitutes either
// duplicate another sport's icon or read as the wrong (US) sport, so it
// gets its own small SVG below instead — a black ball with a yellow dot,
// the classic look of a real squash ball.
//
// Rendered as Twemoji SVGs (via jsDelivr) rather than raw emoji characters,
// so every sport icon looks identical across every OS/browser instead of
// depending on whichever emoji font the visitor's device happens to have.
const icons = {
  football: ["⚽"],
  swimming: ["🏊"],
  golf: ["⛳"],
  tennis: ["🎾"],
  badminton: ["🏸"],
  netball: ["🏐"],
  basketball: ["🏀"],
  cricket: ["🏏"],
  "rugby-union": ["🏈"],
  cycling: ["🚴"],
  running: ["🏃"],
  triathlon: ["🏊", "🚴", "🏃"],
  skateboarding: ["🛹"],
  bjj: ["🥋"],
  "table-tennis": ["🏓"],
  boxing: ["🥊"],
  hockey: ["🏑"],
  climbing: ["🧗"],
  judo: ["🤼"],
};

const TWEMOJI_BASE = "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/";

// Converts an emoji character (including ones made of a surrogate pair,
// e.g. most sport emoji outside the original Unicode range) into the
// lowercase hex codepoint string Twemoji uses for its SVG filenames.
function toCodePoint(char) {
  const points = [];
  let i = 0;
  let previous = 0;
  let code = 0;
  while (i < char.length) {
    code = char.charCodeAt(i++);
    if (previous) {
      points.push((0x10000 + (previous - 0xd800) * 0x400 + (code - 0xdc00)).toString(16));
      previous = 0;
    } else if (code >= 0xd800 && code <= 0xdbff) {
      previous = code;
    } else {
      points.push(code.toString(16));
    }
  }
  return points.join("-");
}

function SquashBallIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" aria-hidden="true">
      <circle cx="18" cy="18" r="16" fill="#3a3a3a" stroke="#9a9a92" strokeWidth="1.5" />
      <circle cx="13" cy="11" r="3.4" fill="#e8ff2e" />
    </svg>
  );
}

export default function SportIcon({ sport, size = 20, className }) {
  if (sport === "squash") {
    return (
      <span className={className} style={{ display: "inline-flex" }} aria-hidden="true">
        <SquashBallIcon size={size} />
      </span>
    );
  }

  const chars = icons[sport];
  if (!chars) return null;
  return (
    <span
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: size * 0.1 }}
      aria-hidden="true"
    >
      {chars.map((char, i) => (
        <img
          key={i}
          src={`${TWEMOJI_BASE}${toCodePoint(char)}.svg`}
          alt=""
          width={size}
          height={size}
          style={{ display: "block" }}
          loading="lazy"
        />
      ))}
    </span>
  );
}
