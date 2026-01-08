import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <h2>Hi, I'm Rishik 👋</h2>
      <h1>Data Scientist</h1>
      <p>I build scalable web applications and AI-driven systems that deliver real business impact.
Experienced in React, large language models, and cloud-based deployments.</p>

      <br></br>
      <br></br>
      <p>Download my resume to learn more about my experience,
skills, and certifications.</p>

      <a
        href="/Rishik_Kumar_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
      >
        Download Resume
      </a>
    </section>
  );
}
