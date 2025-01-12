import React, { useEffect, useState } from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import data from "../data/expertise.json";

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>

        <div className="skills-grid">
          {data.map((expertise, index) => (
            <div key={index} className="skill">
              <FontAwesomeIcon
                icon={
                  expertise.icon === "faReact"
                    ? faReact
                    : expertise.icon === "faDocker"
                    ? faDocker
                    : faPython
                }
                size="3x"
              />
              <h3>{expertise.title}</h3>
              <p>{expertise.description}</p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {expertise.techstack.map((label, i) => (
                  <Chip key={i} className="chip" label={label} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
