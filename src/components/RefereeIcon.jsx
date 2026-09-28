import redCard from "../assets/referee-red.webp";
import yellowCard from "../assets/referee-yellow.webp";
import greenCard from "../assets/referee-green.webp";

// Photo of a referee holding up a card. Card colour follows the score band.
const CARDS = {
  red: { src: redCard, label: "red" },
  yellow: { src: yellowCard, label: "yellow" },
  green: { src: greenCard, label: "green" }
};

export default function RefereeIcon({ card = "yellow", className = "" }) {
  const { src, label } = CARDS[card] ?? CARDS.yellow;
  return (
    <img
      src={src}
      alt={`Referee holding up a ${label} card`}
      className={`referee-photo ${className}`.trim()}
      width="450"
      height="600"
    />
  );
}
