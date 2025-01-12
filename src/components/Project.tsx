import React from "react";
import "../assets/styles/Project.scss";
import researchWorks from "../data/researchWorks.json";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Research Works</h1>
      <div className="projects-grid">
        {researchWorks.map((work, index) => (
          <div key={index} className="project">
            <h2 className="project-title">{work.title}</h2>
            <p className="project-type">{work.type}</p>
            <p className="project-description">{work.description}</p>
            <p className="project-details">
              <span>
                <strong>Published:</strong> {work.published}
              </span>
              <span>
                <strong>Date:</strong> {work.date}
              </span>
            </p>
            {work.link && (
              <a
                href={work.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Publication
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
