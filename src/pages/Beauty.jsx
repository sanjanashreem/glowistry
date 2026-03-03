import { Link } from "react-router-dom";
import "./Beauty.css";

function Beauty() {
  return (
    <div className="coming-page">
      <header className="coming-navbar">
        <h1 className="logo">Glowistry</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/girl-finds">Girl Finds</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <section className="coming-content">
        <h2>Beauty Products</h2>
        <p className="coming-text">
          This collection is currently being prepared 💄
        </p>

        <div className="coming-card">
          <h3>Beauty Picks Are Coming Soon</h3>
          <p>
            We are carefully selecting trending beauty products,
            viral makeup items, and highly rated Amazon finds.
          </p>

          <p className="highlight">
            Launching very soon on Glowistry.
          </p>

          <Link to="/" className="back-btn">
            Go Back Home
          </Link>
        </div>
      </section>

      <footer className="coming-footer">
        © 2026 Glowistry
      </footer>
    </div>
  );
}

export default Beauty;