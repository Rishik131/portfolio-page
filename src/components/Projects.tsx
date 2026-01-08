import "../styles/section.css";

const projects = [
  {
    title: "Depression Detection via Text Sentiment",
    description:
      "An AI system that analyzes speech patterns to detect depression tendencies using transformer-based architecture.",
    tech: ["Python", "PyTorch", "Transformer"],
    live: "#",
    github: "#",
  },
  {
    title: "Phishing Link Detector",
    description:
      "A machine learning–based application that analyzes URLs to determine their legitimacy and identify the origin of fraudulent links.",
    tech: ["React", "Python", "Machine Learning"],
    live: "#",
    github: "#",
  },
  {
    title: "Disaster Response Agent",
    description:
      "Agentified system to predict mishaps in factories and take necessary actions",
    tech: ["Python", "LangGraph", "Computer Vision", "React"],
    live: "#",
    github: "#",
  },
  {
    title: "Energy Generation Cost Forecast System",
    description:
      "Forecasts energy generation costs by analyzing geographic location, weather forecasts, and projected energy demand.",
    tech: ["Python", "LSTM", "React", "AWS"],
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
