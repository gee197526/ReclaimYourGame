import { Link } from "react-router-dom";

const LAST_UPDATED = "12 August 2026";

export default function Privacy() {
  return (
    <div className="results-container legal-page">
      <h1>Privacy policy</h1>
      <p className="results-intro">Last updated: {LAST_UPDATED}</p>

      <section className="legal-section">
        <h2>Who we are</h2>
        <p>
          Reclaim Your Game (reclaimyourgame.co.uk) is a UK-based website that helps people find
          their way back into a sport they used to play. This policy explains what happens to your
          information when you use the site.
        </p>
      </section>

      <section className="legal-section">
        <h2>Information we collect</h2>
        <p>
          We do not collect, store, or share any personal data. The quiz on this site runs entirely
          in your browser. Your answers, including any postcode you type in, are never sent to us,
          never saved, and never stored anywhere. They exist only on your device for the length of
          your visit and disappear when you close or refresh the page.
        </p>
      </section>

      <section className="legal-section">
        <h2>Cookies and tracking</h2>
        <p>
          This site does not currently use cookies or any tracking technology. If that changes in
          future (for example, if we add anonymous visitor analytics), we will update this policy
          first and, where required by law, ask for your consent.
        </p>
      </section>

      <section className="legal-section">
        <h2>Affiliate links</h2>
        <p>
          Some links on this site, particularly in the "Kit to consider" sections, are affiliate
          links. If you click one and go on to make a purchase, we may earn a small commission.
          This does not cost you anything extra, and it does not affect the price you pay. Affiliate
          links are always marked as such at the point they appear. As an Amazon Associate, we earn
          from qualifying purchases.
        </p>
      </section>

      <section className="legal-section">
        <h2>Third-party websites</h2>
        <p>
          Links on this site, including affiliate links, take you to third-party websites (such as
          Amazon and other retailers) that we do not control and are not responsible for. Once you
          leave reclaimyourgame.co.uk, that website's own privacy policy applies, not ours.
        </p>
      </section>

      <section className="legal-section">
        <h2>Changes to this policy</h2>
        <p>
          If this policy changes, for example because we start collecting data as the site grows,
          we will update this page and change the date at the top.
        </p>
      </section>

      <section className="legal-section">
        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent by clicking <Link to="/contact">Contact</Link> and
          completing the form.
        </p>
      </section>

      <Link to="/" className="btn-secondary">Back to the quiz</Link>
    </div>
  );
}
