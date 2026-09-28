import redCard from "../assets/referee-red-card.svg";
import yellowCard from "../assets/referee-yellow-card.svg";
import greenCard from "../assets/referee-green-card.svg";

// Referee holding up a card. Card colour follows the score band.
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
      className={`referee-icon ${className}`.trim()}
      width="140"
      height="158"
    />
  );
}
