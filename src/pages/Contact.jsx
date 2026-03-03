import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      {/* Navbar */}
      <header className="contact-navbar">
        <h1 className="logo">Glowistry</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      {/* Contact Section */}
      <section className="contact-hero">
        <h2>Let’s Glow Together ✨</h2>
        <p>
          Have a question? A collaboration idea? Or a product you think we
          should feature? We’d absolutely love to hear from you.
        </p>

        <div className="contact-card">
          <h3>Email Us</h3>
          <p className="email">hello@glowistry.com</p>
          <p className="small-note">
            We usually respond within 24–48 hours.
          </p>
        </div>

        <div className="encouragement">
          <h3>Why Reach Out?</h3>
          <ul>
            <li>💖 Product recommendations</li>
            <li>🤝 Brand collaborations</li>
            <li>✨ Feature requests</li>
            <li>📌 Pinterest partnership ideas</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="contact-footer">
        © 2026 Glowistry. Curated with love.
      </footer>
    </div>
  );
}

export default Contact;