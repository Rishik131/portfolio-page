import "../styles/section.css";

type SkillProps = {
  name: string;
  level: string;
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills-grid">

        <div className="skill-card">
          <h3>Programming</h3>
          <Skill name="Python" level="90%" />
          <Skill name="C++" level="85%" />
          <Skill name="Typescript" level="50%" />
          <Skill name="Go" level="20%" />
        </div>

        <div className="skill-card">
          <h3>Development</h3>
          <Skill name="FastAPI" level="80%" />
          <Skill name="Langchain" level="85%" />
          <Skill name="LangGraph" level="80%" />
          <Skill name="Django" level="50%" />
          <Skill name="React" level="85" />
          <Skill name="NodeJS" level="70%" />
        </div>

        <div className="skill-card">
          <h3>Data Science & Data Engineering</h3>
          <Skill name="PyTorch" level="90%" />
          <Skill name="TensorFlow" level="85%" />
          <Skill name="NumPy" level="75%" />
          <Skill name="Pandas" level="75%" />
          <Skill name="Matplotlib" level="80%" />
          <Skill name="PySpark" level="60%" />
          <Skill name="Hadoop" level="60" />
        </div>
        
        <div className="skill-card">
          <h3>Databse Systems</h3>
          <Skill name="MySQL" level="85%" />
          <Skill name="PostgreSQL" level="85%" />
          <Skill name="MongoDB" level="75%" />
          <Skill name="Redis" level="60%" />
          <Skill name="Neo4j" level="70%" />
          <Skill name="OpenSearch" level="70%" />
        </div>
        
        <div className="skill-card">
          <h3>Cloud & DevOps</h3>
          <Skill name="AWS" level="85%" />
          <Skill name="GCP" level="90%" />
          <Skill name="Docker" level="30%" />
        </div>
        
        {/* <div className="skill-card">
          <h3>Other tools</h3>
          <Skill name="Github" level="90%" />
          <Skill name="Postman" level="95%" />
          <Skill name="PowerBI" level="95%" />
          <Skill name="PowerBI" level="75%" />
        </div> */}

      </div>
    </section>
  );
}

function Skill({ name, level }: SkillProps) {
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
