import { Link } from "react-router-dom";
import crochetProducts from "./data/crochetProducts";
import "./Crochet.css";

function CrochetFinds() {
  return (
    <div className="crochet-page">

      {/* Navbar */}
      <header className="crochet-navbar">
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

      {/* Hero */}
      <section className="crochet-hero">
        <h2>Crochet Finds 🧶</h2>
        <p>
          Discover aesthetic handmade crochet creations. From cute flowers
          to cozy bags, explore beautiful yarn creations perfect for gifts
          or decor.
        </p>
      </section>

      {/* Product Grid */}
      <section className="crochet-products">
        {crochetProducts.map((product) => (
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
      <footer className="crochet-footer">
        © 2026 Glowistry. Curated with love.
      </footer>

    </div>
  );
}

export default CrochetFinds;