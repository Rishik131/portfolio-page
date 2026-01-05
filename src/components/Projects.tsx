import "../styles/section.css";

const projects = [
  {
    title: "Developer Portfolio",
    description:
      "A modern single-page portfolio built with React and Vite, focusing on performance and clean UI.",
    tech: ["React", "Vite", "CSS"],
    live: "#",
    github: "#",
  },
  {
    title: "SaaS Dashboard",
    description:
      "Analytics dashboard with authentication, charts, and role-based access control.",
    tech: ["React", "API", "Charts"],
    live: "#",
    github: "#",
  },
  {
    title: "Healthcare App",
    description:
      "Frontend application for healthcare workflows with optimized UX and accessibility.",
    tech: ["React", "Accessibility", "Performance"],
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-overlay">
              <a href={project.live} target="_blank">Live Demo</a>
              <a href={project.github} target="_blank">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
