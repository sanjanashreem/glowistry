import { Link } from "react-router-dom";
import "./About.css";

function AboutContact() {
  return (
    <div className="about-contact-page">

      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo">Glowistry</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/skincare">Skincare</Link>
            <Link to="/beauty">Beauty</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/girly_finds">Must-Have Finds</Link>
            <Link to="/crochet">Crochet</Link>
            <Link to="/about">About us</Link>
            
        </nav>
      </header>

      {/* About Section */}
      <section className="about-section">
        <h2>About Glowistry</h2>
        <p>
          Glowistry is a curated space where beauty, skincare, and aesthetic
          lifestyle finds come together. We help you discover trending
          products loved across the internet.
        </p>
      </section>

      {/* Mission Cards */}
      <section className="mission-section">
        <div className="card">
          <h3>Our Mission</h3>
          <p>
            We help people discover high-quality beauty and skincare products
            quickly without spending hours searching online.
          </p>
        </div>

        <div className="card">
          <h3>What We Do</h3>
          <p>
            We curate trending beauty items, skincare essentials, and aesthetic
            organizers that people genuinely love.
          </p>
        </div>

        <div className="card">
          <h3>Why Trust Us</h3>
          <p>
            Every product is selected based on popularity, reviews, and
            real trends from platforms like Pinterest.
          </p>
        </div>
      </section>

      {/* Growth Section */}
      <section className="growth-section">
        <h2>How People Discover Glowistry</h2>
        <p>
          Many users discover Glowistry through Pinterest where we share
          trending beauty finds and aesthetic product ideas.
        </p>

        <p>
          Our goal is to create a simple place where you can quickly explore
          trending beauty and skincare products.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Let’s Glow Together ✨</h2>
        <p>
          Have a question, collaboration idea, or product suggestion?
          We'd love to hear from you.
        </p>

        <div className="contact-card">
          <h3>Email</h3>
          <p className="email">hello@glowistry.com</p>
          <p className="note">Response time: 24–48 hours</p>
        </div>

        <div className="contact-reasons">
          <ul>
            <li>💖 Product suggestions</li>
            <li>🤝 Brand collaborations</li>
            <li>✨ Feature requests</li>
            <li>📌 Pinterest partnerships</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2026 Glowistry. Curated with love.
      </footer>

    </div>
  );
}

export default AboutContact;