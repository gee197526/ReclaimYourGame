import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="app-footer">
      <span>© {new Date().getFullYear()} Reclaim Your Game</span>
      <nav className="footer-links">
        <Link to="/privacy">Privacy policy</Link>
        <Link to="/contact">Contact us</Link>
      </nav>
    </footer>
  );
}
