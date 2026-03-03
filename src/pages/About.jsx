import "./About.css";

function About() {
  return (
    <div className="about-page">
      {/* Navbar */}
      <header className="about-navbar">
        <h1 className="logo">Glowistry</h1>
        <nav>
          <a href="/">Home</a>
          <a href="#">Skincare</a>
          <a href="#">Beauty</a>
          <a href="#">Girl Finds</a>
          <a href="#">Organizers</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* About Section */}
      <section className="about-hero">
        <h2>About Glowistry</h2>
        <p>
          Glowistry is a curated space where beauty, skincare, and aesthetic
          lifestyle finds come together. We help you discover trending products
          that are loved across the internet.
        </p>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="mission-card">
          <h3>Our Mission</h3>
          <p>
            Our mission is to help people discover high-quality beauty and
            skincare products easily. We research trending products from
            platforms like Pinterest and recommend the best ones.
          </p>
        </div>

        <div className="mission-card">
          <h3>What We Do</h3>
          <p>
            We curate trending beauty products, skincare essentials, and
            aesthetic organizers. Our goal is to save your time by showing only
            the most loved and useful items.
          </p>
        </div>

        <div className="mission-card">
          <h3>Why Trust Us</h3>
          <p>
            Every product featured on Glowistry is selected based on popularity,
            reviews, and trends. We focus on helping users find products that
            truly add value.
          </p>
        </div>
      </section>

      {/* Growth Section */}
      <section className="about-growth">
        <h2>How We Help People Discover Products</h2>
        <p>
          Many users discover Glowistry through Pinterest where we share
          trending product ideas and beauty recommendations. From there, users
          can visit our website and explore curated collections.
        </p>

        <p>
          Our goal is to create a space where people can quickly find trending
          beauty and skincare products without spending hours searching.
        </p>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <p>© 2026 Glowistry. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;