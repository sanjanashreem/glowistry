import "./Home.css";
import { Link } from "react-router-dom";
import homepic from "../assets/homepic.jpg";
function Home() {
  return (
    <div className="home">

      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo">Glowistry</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/skincare">Skincare</Link>
          <Link to="/beauty">Beauty</Link>
          <Link to="/girly_finds">Must-Have Finds</Link>
          <Link to="/crochet">Crochet</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      {/* Hero */}
      <section
  className="hero"
  style={{ backgroundImage: `url(${homepic})` }}
>
  <div className="hero-content">
    <h2>Pure Beauty, Naturally</h2>
    <p>
      Discover trending skincare, beauty essentials, and aesthetic
      lifestyle finds curated just for you.
    </p>

    <div className="hero-buttons">
      <Link to="/beauty">
        <button className="primary-btn">Shop Beauty</button>
      </Link>

      <Link to="/skincare">
        <button className="secondary-btn">Shop Skincare</button>
      </Link>
    </div>
  </div>
</section>

      {/* Categories */}
      <section className="categories">
        <h2>Shop by Category</h2>

        <div className="category-grid">

          <Link to="/skincare" className="category-card">
            <h3>Skincare</h3>
            <p>Healthy glowing skin essentials</p>
          </Link>

          <Link to="/beauty" className="category-card">
            <h3>Beauty</h3>
            <p>Makeup must-haves & trending picks</p>
          </Link>

          <Link to="/girly_finds" className="category-card">
            <h3>Must-Have Finds</h3>
            <p>Aesthetic & lifestyle products</p>
          </Link>

          <Link to="/crochet" className="category-card">
            <h3>Crochet</h3>
            <p>Handmade cute crochet creations</p>
          </Link>

        </div>
      </section>

      {/* Trending Products */}
      <section className="trending">

        <h2>Trending Now</h2>

        <div className="product-grid">

          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348"
              alt="serum"
            />
            <h3>Vitamin C Serum</h3>
            <p>Brightening skincare favorite</p>
            <button>View Product</button>
          </div>

          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be"
              alt="lip gloss"
            />
            <h3>Glossy Lip Oil</h3>
            <p>Hydrating & shiny lip care</p>
            <button>View Product</button>
          </div>

          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1612817288484-6f916006741a"
              alt="organizer"
            />
            <h3>Aesthetic Organizer</h3>
            <p>Trending desk must-have</p>
            <button>View Product</button>
          </div>

        </div>

      </section>

      {/* Brand Section */}
      <section className="brand">

        <div className="brand-content">

          <h2>Glowistry</h2>

          <p>
            Glowistry is your curated destination for trending beauty,
            skincare, and aesthetic lifestyle finds. We bring together the
            most loved products from across the internet to help you discover
            your next favorite.
          </p>

        </div>

      </section>

      {/* Footer */}
      <footer className="footer">

        <div className="footer-grid">

          <div>
            <h3>Glowistry</h3>
            <p>Curated beauty & lifestyle finds.</p>
          </div>

          <div>
            <h4>Explore</h4>
            <p>Beauty</p>
            <p>Skincare</p>
            <p>Blog</p>
          </div>

          <div>
            <h4>Help</h4>
            <p>Contact</p>
            <p>Privacy Policy</p>
            <p>Affiliate Disclosure</p>
          </div>

        </div>

        <p className="copyright">
          © 2026 Glowistry. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default Home;