function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="logo">
          DEV@Deakin
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#articles">Articles</a>
          <a href="#subscribe">Subscribe</a>
          <a href="#about">About</a>
        </div>

        <button className="join-button">
          JOIN DEV@DEAKIN
        </button>

      </div>
    </nav>
  );
}

export default Navbar;