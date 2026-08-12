import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import icon from "./assets/icon-yellow.png";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="app-header">
          <Link to="/" className="logo-link">
            <img src={icon} alt="" className="logo-icon" />
            <span className="logo-text">
              <span className="logo-line1">RECLAIM</span>
              <span className="logo-line2">YOUR GAME</span>
            </span>
          </Link>
          <span className="header-tagline">Getting back to your healthier self!</span>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
