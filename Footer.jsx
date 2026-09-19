function Footer() {
  return (
    <footer className="site-footer">

      {/* Daily Insider */}
      <div className="daily-insider">

        <h3>SIGN UP FOR OUR DAILY INSIDER</h3>

        <div className="subscribe-footer">
          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>
            Subscribe
          </button>
        </div>

      </div>


      {/* Footer Links */}
      <div className="footer-main">

        <div className="footer-column">
          <h3>Explore</h3>

          <a href="#home">Home</a>
          <a href="#questions">Questions</a>
          <a href="#articles">Articles</a>
          <a href="#tutorials">Tutorials</a>
        </div>


        <div className="footer-column">
          <h3>Support</h3>

          <a href="#faqs">FAQs</a>
          <a href="#help">Help</a>
          <a href="#contact">Contact Us</a>
        </div>


        <div className="footer-column">
          <h3>Stay connected</h3>

          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
          </div>

        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

        <h3>DEV@Deakin 2022</h3>

        <div className="legal-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms</a>
          <a href="#code">Code of Conduct</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;