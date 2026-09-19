function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <h1>DEV@Deakin</h1>

        <h2>Learn. Build. Share.</h2>

        <p>
          Connect with students, developers and technology enthusiasts.
          Discover useful articles and improve your development skills.
        </p>

        <div className="hero-buttons">
          <a href="#articles" className="primary-button">
            Explore Articles
          </a>

          <button className="secondary-button">
            Join DEV@Deakin
          </button>
        </div>

      </div>

    </section>
  );
}

export default Hero;