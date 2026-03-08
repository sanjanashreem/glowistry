import { Link } from "react-router-dom";
import beautyProducts from "./data/beautyProducts";
import "./Beauty.css";

function Beauty() {
  return (
    <div className="beauty-page">

      {/* Navbar */}
      <header className="beauty-navbar">
        <h1 className="logo">Glowistry</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/crochet">Crochet</Link>
          <Link to="/beauty">Beauty</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="beauty-hero">
        <h2>Beauty Finds 💄</h2>
        <p>
          Explore trending cosmetics and beauty essentials loved by
          makeup enthusiasts. Curated beauty finds to enhance your glow.
        </p>
      </section>

      {/* Product Grid */}
      <section className="beauty-products">
        {beautyProducts.map((product) => (
          <div key={product.id} className="product-card">

            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p className="price">{product.price}</p>

            <a href={product.link} target="_blank" rel="noreferrer">
              <button className="view-btn">
                View Product
              </button>
            </a>

          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="beauty-footer">
        © 2026 Glowistry. Curated with love.
      </footer>

    </div>
  );
}

export default Beauty;