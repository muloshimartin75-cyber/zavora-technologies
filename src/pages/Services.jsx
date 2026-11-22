
import {
  Globe,
  Building2,
  PanelsTopLeft,
  Settings,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Globe,
    title: "Website Development",
    description:
      "Custom-built, responsive websites designed to establish your online presence and communicate your brand effectively.",
    features: [
      "Custom website design",
      "Mobile-friendly layouts",
      "Modern user interfaces",
      "Performance optimisation",
    ],
  },
  {
    number: "02",
    icon: Building2,
    title: "Business Websites",
    description:
      "Professional websites that help businesses showcase their services, reach customers and build credibility online.",
    features: [
      "Business information pages",
      "Service and product displays",
      "Contact and enquiry sections",
      "Search engine fundamentals",
    ],
  },
  {
    number: "03",
    icon: PanelsTopLeft,
    title: "Web Application Development",
    description:
      "Browser-based applications built to help organisations manage information, workflows and everyday business operations.",
    features: [
      "Custom business systems",
      "Dashboard interfaces",
      "Data management features",
      "User-focused functionality",
    ],
  },
  {
    number: "04",
    icon: Settings,
    title: "Website Maintenance",
    description:
      "Ongoing technical care to help keep websites updated, functional and secure.",
    features: [
      "Content updates",
      "Bug fixes",
      "Routine website checks",
      "Technical support",
    ],
  },
];

function Services() {
  return (
    <main className="services-page">
      <section className="page-hero">
        <span className="eyebrow">WHAT WE OFFER</span>

        <h1>
          Digital services for
          <span> growing businesses.</span>
        </h1>

        <p>
          We build websites and web applications that help
          businesses establish their online presence and
          improve how they operate.
        </p>
      </section>

      <section className="services-section">
        <div className="services-heading">
          <div>
            <span className="eyebrow">OUR SERVICES</span>
            <h2>What we can build for you.</h2>
          </div>

          <p>
            Practical digital solutions, developed around
            your business needs.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <div className="service-icon">
                    <Icon size={27} />
                  </div>

                  <span className="service-number">
                    {service.number}
                  </span>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <CheckCircle2 size={17} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href="/contact" className="service-link">
                  Discuss this service <ArrowRight size={17} />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="services-cta">
        <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
        <h2>Let's turn your idea into a digital solution.</h2>
        <p>
          Tell us what you want to build. We'll discuss your
          requirements and explore how we can help.
        </p>

        <a href="/contact" className="button-primary">
          Talk to our team <ArrowRight size={18} />
        </a>
      </section>
    </main>
  );
}

export default Services;
