
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Code2,
  Globe,
  Monitor,
  Layers,
} from "lucide-react";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">
            ZAMBIAN-FOUNDED TECHNOLOGY COMPANY
          </span>

          <h1>
            Building Digital
            <span> Solutions </span>
            for Tomorrow.
          </h1>

          <p>
            We create modern websites and web applications
            that help businesses establish their online presence,
            improve operations and grow.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="button-primary">
              Start a Project <ArrowRight size={18} />
            </Link>

            <Link to="/services" className="button-secondary">
              Explore Services
            </Link>
          </div>

          <div className="hero-note">
            <span className="status-dot"></span>
            Turning ideas into digital experiences
          </div>
        </div>

        <div className="hero-card">
          <div className="card-heading">
            <div className="card-icon">
              <Code2 size={30} />
            </div>
            <span>WHAT WE DO</span>
          </div>

          <h2>Digital solutions. Real business value.</h2>

          <div className="service-preview">
            <div>
              <Globe />
              <span>Website Development</span>
            </div>

            <div>
              <Monitor />
              <span>Business Websites</span>
            </div>

            <div>
              <Layers />
              <span>Web Applications</span>
            </div>
          </div>

          <div className="card-footer">
            <span>ZAVORA TECHNOLOGIES</span>
            <span>01 / 03</span>
          </div>
        </div>
      </section>

      <section className="intro">
        <span className="eyebrow">WHO WE ARE</span>

        <h2>
          Technology should move your business forward.
        </h2>

        <p>
          We are a technology startup focused on building
          practical, reliable and modern digital solutions
          for businesses and organisations.
        </p>
      </section>
    </main>
  );
}

export default Home;
