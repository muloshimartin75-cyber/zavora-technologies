
import {
  Target,
  Eye,
  Lightbulb,
  ShieldCheck,
  Users,
  Rocket,
} from "lucide-react";

function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We explore practical ways technology can solve everyday business challenges.",
    },
    {
      icon: ShieldCheck,
      title: "Reliability",
      description: "We aim to build dependable digital solutions with care and attention to detail.",
    },
    {
      icon: Users,
      title: "Client Focus",
      description: "We listen to business needs and build solutions around real requirements.",
    },
    {
      icon: Rocket,
      title: "Continuous Growth",
      description: "We keep learning, improving and adapting to the changing digital world.",
    },
  ];

  return (
    <main className="about-page">
      <section className="page-hero">
        <span className="eyebrow">ABOUT ZAVORA TECHNOLOGIES</span>

        <h1>
          Technology built around
          <span> your ambitions.</span>
        </h1>

        <p>
          We are a Zambian-founded technology startup focused
          on helping businesses move forward through modern
          websites and practical web applications.
        </p>
      </section>

      <section className="about-story">
        <div>
          <span className="eyebrow">OUR STORY</span>
          <h2>Turning business ideas into digital experiences.</h2>

          <p>
            ZAVORA Technologies was founded with a simple purpose:
            to make useful digital solutions more accessible
            to businesses and organisations.
          </p>

          <p>
            We focus on understanding each project, identifying
            its needs and developing solutions that are practical,
            accessible and built with care.
          </p>
        </div>

        <div className="about-highlight">
          <span>OUR APPROACH</span>
          <h3>Understand. Build. Improve.</h3>
          <p>
            Every project starts with understanding the problem.
            We then work towards a solution that serves a
            meaningful purpose.
          </p>
        </div>
      </section>

      <section className="mission-section">
        <article className="mission-card">
          <Target size={32} />
          <span>OUR MISSION</span>
          <h2>
            To develop practical and reliable digital solutions
            that help businesses establish their online presence
            and improve their operations.
          </h2>
        </article>

        <article className="mission-card vision-card">
          <Eye size={32} />
          <span>OUR VISION</span>
          <h2>
            To become a trusted technology company originating
            from Zambia and serving businesses in a connected
            digital world.
          </h2>
        </article>
      </section>

      <section className="values-section">
        <div className="values-heading">
          <span className="eyebrow">WHAT GUIDES US</span>
          <h2>The values behind our work.</h2>
          <p>The principles we aim to bring into every project.</p>
        </div>

        <div className="values-grid">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article className="value-card" key={value.title}>
                <Icon size={28} />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default About;
