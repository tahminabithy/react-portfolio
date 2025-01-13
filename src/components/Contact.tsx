import React from "react";
import "../assets/styles/Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import contactData from "../data/contactData.json";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div id="contact">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>Feel free to connect with me through the following channels:</p>
        <div className="contact-links">
          <a
            href={`mailto:${contactData.email}`}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href={contactData.github} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={contactData.linkedin} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
