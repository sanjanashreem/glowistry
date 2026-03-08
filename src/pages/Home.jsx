import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo">Glowistry</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/skincare">Skincare</Link>
            <Link to="/girly_finds">Girly Finds</Link>
            <Link to="/beauty">Beauty</Link>
            <Link to="/about">About us</Link>
            <Link to="/blog">Blog</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Discover Trending Beauty & Skincare</h2>
          <p>
            Curated beauty finds, skincare essentials, and aesthetic products
            loved by everyone.
          </p>
          <button className="explore-btn">Explore Now</button>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Shop by Category</h2>

        <div className="category-grid">
          <div className="category-card">Skincare</div>
          <div className="category-card">Girly Finds</div>
          <div className="category-card">Beauty</div>
          <div className="category-card">Girly Tips</div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="trending">
        <h2>Trending Products</h2>

        <div className="product-grid">
          <div className="product-card">
            <h3>Hydrating Face Serum</h3>
            <p>Top trending skincare pick this month.</p>
            <button>View Product</button>
          </div>

          <div className="product-card">
            <h3>Glossy Lip Care Set</h3>
            <p>Most loved beauty essential.</p>
            <button>View Product</button>
          </div>

          <div className="product-card">
            <h3>Girly Hacks</h3>
            <p>Aesthetic and practical organizer.</p>
            <button>View Product</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Glowistry. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;