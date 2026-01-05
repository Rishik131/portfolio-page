import "../styles/section.css";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>

      <div className="experience-item">
        <h3>Software Engineer</h3>
        <span>Company Name • 2023 – Present</span>
        <p>
          Working on scalable frontend applications using React.
          Focused on performance optimization, clean UI design,
          and API integrations.
        </p>
      </div>

      <div className="experience-item">
        <h3>Frontend Developer Intern</h3>
        <span>Startup Name • 2022 – 2023</span>
        <p>
          Built responsive UI components, collaborated with designers,
          and improved page load times by optimizing assets and code.
        </p>
      </div>
    </section>
  );
}
