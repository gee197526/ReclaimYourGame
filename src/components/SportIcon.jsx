// Standard emoji per sport. A couple of sports have no dedicated Unicode
// emoji (netball, rugby union's actual ball shape), so those use the
// closest common substitute. Triathlon uses three separate emoji in
// sequence rather than one glyph.
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

export default function SportIcon({ sport, size = 20, className }) {
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
