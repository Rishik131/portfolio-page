import "../styles/section.css";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills-grid">

        <div className="skill-card">
          <h3>Frontend</h3>
          <Skill name="React" level="90%" />
          <Skill name="JavaScript (ES6+)" level="85%" />
          <Skill name="HTML & CSS" level="90%" />
        </div>

        <div className="skill-card">
          <h3>Backend</h3>
          <Skill name="Node.js" level="75%" />
          <Skill name="REST APIs" level="80%" />
          <Skill name="MongoDB" level="70%" />
        </div>

        <div className="skill-card">
          <h3>Tools & Practices</h3>
          <Skill name="Git & GitHub" level="85%" />
          <Skill name="Performance Optimization" level="80%" />
          <Skill name="Clean Architecture" level="75%" />
        </div>

      </div>
    </section>
  );
}

function Skill({ name, level }) {
  return (
    <div className="skill">
      <div className="skill-header">
        <span>{name}</span>
        <span>{level}</span>
      </div>
      <div className="skill-bar">
        <div className="skill-progress" style={{ width: level }} />
      </div>
    </div>
  );
}
