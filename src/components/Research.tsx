import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Research.scss";
import researchWorks from "../data/researchWorks.json";

function ResearchWorks() {
  return (
    <div id="research-works">
      <div className="research-container">
        <h1>Research Works</h1>
        <div className="research-grid">
          {researchWorks.map((work, index) => (
            <div key={index} className="research-item">
              <FontAwesomeIcon icon={faFileAlt} size="3x" />
              <h3>{work.title}</h3>
              <p className="research-type">{work.type}</p>
              <div className="research-details">
                <span className="research-published">
                  <strong>Published:</strong> {work.published}
                </span>
                <span className="research-date">
                  <strong>Date:</strong> {work.date}
                </span>
              </div>
              <p>{work.description}</p>
              {work.link && (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noreferrer"
                  className="research-link"
                >
                  View Publication
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResearchWorks;
