import "../styles/section.css";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>

      <div className="experience-item">
        <h3>Data Scientist</h3>
        <span>Deloitte USI Consulting • Sep 2024 – Present</span>
        <p>
          Working on AI agent systems and LLM-based solutions for pharmaceutical and
life sciences clients.
        </p>
      </div>

      <div className="experience-item">
        <h3>Software Developer Intern</h3>
        <span>AIQoD • Dec 2023 – Feb 2024</span>
        <p>
          Developed full-stack applications and machine learning integrations
using open-source models.
        </p>
      </div>
      
      <div className="experience-item">
        <h3>Summer Research Intern</h3>
        <span>Centre for Cyber Physical System Research, VIT • May 2023 – Jul 2023</span>
        <p>
          Worked on medical AI research focused on Alzheimer’s Disease detection.
        </p>
      </div>
    </section>
  );
}
