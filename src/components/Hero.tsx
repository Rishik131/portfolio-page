import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <h2>Hi, I'm Rishik 👋</h2>
      <h1>Software Developer</h1>
      <p>I build scalable, performant, and clean web applications.</p>

      <a
        href="/Rishik_Kumar_Resume.pdf"
        download
        className="resume-btn"
      >
        Download Resume
      </a>
    </section>
  );
}
