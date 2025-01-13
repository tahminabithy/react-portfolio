import React from "react";
import "../assets/styles/SkillsAndInterests.scss";
import skillsData from "../data/skillsAndInterests.json";

function SkillsAndInterests() {
  return (
    <div className="container" id="skills-and-interests">
      <div className="skills-container">
        <h1>Skills and Interests</h1>
        <ul className="skills-list">
          {skillsData.map((skill, index) => (
            <li key={index}>
              <strong>{skill.category}:</strong> {skill.items.join(", ")}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillsAndInterests;
