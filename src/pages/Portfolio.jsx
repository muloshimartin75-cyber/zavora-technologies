
import {
  ArrowUpRight,
  Globe,
  LayoutDashboard,
  Code2,
} from "lucide-react";

const projects = [
  {
    number: "01",
    category: "BUSINESS WEBSITE",
    title: "Business Website Concept",
    description:
      "A modern website concept designed to help a business showcase its services, communicate its brand and connect with potential customers.",
    icon: Globe,
  },
  {
    number: "02",
    category: "WEB APPLICATION",
    title: "Business Management System",
    description:
      "A web application concept featuring a dashboard interface for organising information and supporting everyday business operations.",
    icon: LayoutDashboard,
  },
  {
    number: "03",
    category: "WEB DEVELOPMENT",
    title: "Digital Platform Concept",
    description:
      "A responsive digital platform concept focused on accessible layouts, clear navigation and a user-friendly experience.",
    icon: Code2,
  },
];

function Portfolio() {
  return (
    <main className="portfolio-page">
      <section className="page-hero">
        <span className="eyebrow">OUR WORK</span>

        <h1>
          Ideas brought to life through
          <span> technology.</span>
        </h1>

        <p>
          Explore selected concepts and projects that demonstrate
          the kind of digital solutions we aim to build.
        </p>
      </section>

      <section className="portfolio-section">
        <div className="portfolio-heading">
          <div>
            <span className="eyebrow">SELECTED PROJECTS</span>
            <h2>Exploring what's possible.</h2>
          </div>

          <p>
            Each project represents an opportunity to solve
            problems through thoughtful digital development.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article className="portfolio-card" key={project.number}>
                <div className="portfolio-visual">
                  <div className="portfolio-visual-icon">
                    <Icon size={55} />
                  </div>
                  <span>{project.number}</span>
                </div>

                <div className="portfolio-details">
                  <div className="portfolio-meta">
                    <span>{project.category}</span>
                    <span>Concept Project</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="portfolio-bottom">
                    <span>ZAVORA TECHNOLOGIES</span>
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="portfolio-cta">
        <span className="eyebrow">HAVE AN IDEA?</span>
        <h2>Your project could be our next build.</h2>

        <p>
          Let's discuss what you want to create and how we
          can help bring your idea to life.
        </p>

        <a href="/contact" className="button-primary">
          Start a Project <ArrowUpRight size={18} />
        </a>
      </section>
    </main>
  );
}

export default Portfolio;
