import "./Footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>NOSS Blog</h2>

        <p>
          Thoughts, stories and ideas worth sharing.
        </p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Noss Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};


 export default Footer;
