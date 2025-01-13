import React from "react";
import certificates from "../data/certificate.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
export default function Certificate() {
  return (
    <div>
      <div id="certificate">
        <div className="research-container">
          <h1>Certifications</h1>
          <div className="research-grid">
            {certificates.map((work, index) => (
              <div key={index} className="research-item">
                <FontAwesomeIcon icon={faCertificate} size="3x" />
                <h3>{work.title}</h3>
                <p className="research-type">{work.organization}</p>
                {/* <div className="research-details">
                  <span className="research-published">
                    <strong>Published:</strong> {work.published}
                  </span>
                  <span className="research-date">
                    <strong>Date:</strong> {work.date}
                  </span>
                </div> */}
                <p>{work.description}</p>
                {work.link && (
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noreferrer"
                    className="research-link"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
