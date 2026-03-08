import { Link } from "react-router-dom";
import mustHaveProducts from "../data/mustHaveProducts";
import "../styles/MustHaveFinds.css";

function MustHaveFinds() {
  return (
    <div className="musthave-page">

      {/* Navbar */}
      <header className="musthave-navbar">
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
      <section className="musthave-hero">
        <h2>Must-Have Finds ✨</h2>
        <p>
          Discover trending lifestyle products everyone is loving.
          From aesthetic desk accessories to everyday essentials,
          these must-have finds make life easier and more beautiful.
        </p>
      </section>

      {/* Products */}
      <section className="musthave-products">
        {mustHaveProducts.map((product) => (
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
      <footer className="musthave-footer">
        © 2026 Glowistry. Curated with love.
      </footer>

    </div>
  );
}

export default MustHaveFinds;