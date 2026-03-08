import { useState } from "react";
import { Link } from "react-router-dom";
import skincareProducts from "../../data/skincareProducts";
import "./Skincare.css";

function Skincare() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = skincareProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="skincare-page">
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

      {/* Header */}
      <section className="header">
        <h2>Skincare Essentials</h2>
        <p>Handpicked skincare products for glowing and healthy skin ✨</p>
      </section>

      <div className="search-container">
  {/* Search icon */}
  <span className="search-icon">🔍</span>

  <input
    type="text"
    placeholder="Search products or benefits..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />

  {/* Show only when user types */}
  {searchTerm.length > 0 && (
    <span
      className="clear-icon"
      onClick={() => setSearchTerm("")}
    >
      ✖
    </span>
  )}
</div>

      {/* Products */}
      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div className="card" key={index}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <p className="desc">{product.description}</p>
            </div>
          ))
        ) : (
          <p className="no-result">No products found</p>
        )}
      </div>

      <footer className="footer">© 2026 Glowistry</footer>
    </div>
  );
}

export default Skincare;