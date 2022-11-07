import React from "react";
import "../Style/Contact.css";

const Contact = () => {
  return (
    <div className="main-contact">
      <div className="main-contact-container">
        Linkedin :{" "}
        <a href="https://www.linkedin.com/in/jules-sannequin-1b680a250/">
          Mon Linkedin
        </a>
        Github : <a href="https://github.com/JulesSannequin">Mon Github</a>
        Mon adresse mail :{" "}
        <a href="mailto:jules.sannequin@gmail.com">jules.sannequin@gmail.com</a>
        Mon numéro de téléphone : 0688614072
      </div>
    </div>
  );
};

export default Contact;
