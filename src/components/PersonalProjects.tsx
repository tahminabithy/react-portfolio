import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/PersonalProjects.scss";
import personalProjects from "../data/personalProjects.json";
import { Chip } from "@mui/material";

function PersonalProjects() {
  return (
    <div id="project">
      <div className="research-container">
        <h1>Personal Projects</h1>
        <div className="research-grid">
          {personalProjects.map((work, index) => (
            <div key={index} className="research-item">
              <FontAwesomeIcon icon={faCode} size="3x" />
              <h3>{work.title}</h3>
              <p className="research-type">{work.type}</p>
              <div className="research-details">
                {/* <span className="research-published">
                  <strong>Published:</strong> {work.date}
                </span> */}

                <div className="flex-chips">
                  <span className="chip-title">Tech stack:</span>
                  {work.technologies.map((label, i) => (
                    <Chip key={i} className="chip" label={label} />
                  ))}
                </div>
              </div>
              <p>{work.description}</p>
              {work.link && (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noreferrer"
                  className="research-link"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PersonalProjects;
// <div id="personal-projects">
//   <div className="projects-container">
//     <h1>Personal Projects</h1>
//     <div className="projects-grid">
//       {personalProjects.map((project, index) => (
//         <div key={index} className="project-item">
//           <FontAwesomeIcon icon={faCode} size="3x" />
//           <h3>{project.title}</h3>
//           <p className="project-type">{project.type}</p>
//           <div className="project-details">
//             {project.technologies && (
//               <span className="project-technologies">
//                 <strong>Technologies:</strong>{" "}
//                 {project.technologies.join(", ")}
//               </span>
//             )}
//             {project.date && (
//               <span className="project-date">
//                 <strong>Date:</strong> {project.date}
//               </span>
//             )}
//           </div>
//           <p className="project-description">{project.description}</p>
//           {project.link && (
//             <a
//               href={project.link}
//               target="_blank"
//               rel="noreferrer"
//               className="project-link"
//             >
//               View Project
//             </a>
//           )}
//         </div>
//       ))}
//     </div>
//   </div>
// </div>
