import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Education.scss";
import educationData from "../data/educationHistory.json";

function Education() {
  return (
    <div className="container" id="education">
      <div className="education-container">
        <h1>Education History</h1>
        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className="education-item">
              <FontAwesomeIcon icon={faGraduationCap} size="3x" />
              <h3>{edu.degree}</h3>
              <p>{edu.institution}</p>
              <div className="education-details">
                <span className="education-years">
                  {edu.startdate} - {edu.enddate}
                </span>
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
