function Hero({ title, description }) {
  return (
    <section className="hero">
      <p className="hero-label">College Events and Clubs</p>

      <h1>{title}</h1>

      <p className="hero-description">{description}</p>

      <a className="hero-button" href="#events">
        Explore Events
      </a>
    </section>
  );
}

export default Hero;