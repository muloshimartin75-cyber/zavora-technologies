
import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            ZAVORA<span> Technologies</span>
          </Link>

          <p>
            Building modern websites and web applications
            that help businesses move forward.
          </p>

          <div className="footer-location">
            <MapPin size={17} />
            <span>Zambia</span>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-links">
          <h3>Our Services</h3>
          <Link to="/services">Website Development</Link>
          <Link to="/services">Business Websites</Link>
          <Link to="/services">Web Applications</Link>
          <Link to="/services">Website Maintenance</Link>
        </div>

        <div className="footer-contact">
          <h3>Let's Talk</h3>

          <p>
            Have a project in mind? Let's discuss how we
            can help.
          </p>

          <Link to="/contact" className="footer-contact-link">
            Start a Project <ArrowUpRight size={17} />
          </Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} ZAVORA Technologies.
          All rights reserved.
        </p>

        <p>Building Tomorrow, Today.</p>
      </div>
    </footer>
  );
}

export default Footer;
