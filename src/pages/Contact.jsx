import { useState } from "react";
import { Link } from "react-router-dom";

// Uses Web3Forms (web3forms.com) to relay submissions straight to a private
// inbox without exposing that address in the page and without storing the
// message anywhere. WEB3FORMS_ACCESS_KEY is a public-safe token tied to the
// destination email on Web3Forms' side — it is not the email address itself.
const WEB3FORMS_ACCESS_KEY = "e1ca4382-f18d-475a-b9cb-91a2dc7571ec";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New message from Reclaim Your Game");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="results-container legal-page">
        <h1>Message sent</h1>
        <p className="results-intro">Thanks for getting in touch — we'll get back to you.</p>
        <Link to="/" className="btn-secondary">Back to the quiz</Link>
      </div>
    );
  }

  return (
    <div className="results-container legal-page">
      <h1>Contact us</h1>
      <p className="results-intro">
        Got a question, spotted something wrong, or want to suggest a sport? Send us a message
        below.
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <label className="form-label" htmlFor="name">Name</label>
        <input className="text-input" id="name" name="name" type="text" required />

        <label className="form-label" htmlFor="email">Email</label>
        <input className="text-input" id="email" name="email" type="email" required />

        <label className="form-label" htmlFor="message">Message</label>
        <textarea className="text-input contact-textarea" id="message" name="message" rows="5" required />

        <button className="btn-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        {status === "error" && (
          <p className="placeholder-note">
            Something went wrong sending that — please try again in a moment.
          </p>
        )}
      </form>

      <Link to="/" className="btn-secondary" style={{ marginTop: "1.5rem", display: "inline-block" }}>
        Back to the quiz
      </Link>
    </div>
  );
}
