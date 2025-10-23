import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {[1, 2, 3].map((i) => (
          <div className="project-card" key={i}>
            <h3>Healthcare Analytics Project {i}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac nulla eget est.</p>
            <a href="#" className="btn">View Details</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
