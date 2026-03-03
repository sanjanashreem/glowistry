import { Link } from "react-router-dom";
import "./GirlFinds.css";

function GirlFinds() {
  return (
    <div className="coming-page">
      {/* Navbar */}
      <header className="coming-navbar">
        <h1 className="logo">Glowistry</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/beauty">Beauty</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      {/* Coming Soon Section */}
      <section className="coming-content">
        <h2>Girly Finds</h2>
        <p className="coming-text">
          Something exciting is on the way ✨
        </p>

        <div className="coming-card">
          <h3>Curating the Best Finds for You</h3>
          <p>
            We’re currently preparing a beautiful collection of trending
            girl finds, aesthetic essentials, and viral products that everyone
            is loving right now.
          </p>

          <p className="highlight">
            Stay tuned — this section is launching very soon!
          </p>

          <Link to="/" className="back-btn">
            Explore Home
          </Link>
        </div>
      </section>

      <footer className="coming-footer">
        © 2026 Glowistry
      </footer>
    </div>
  );
}

export default GirlFinds;