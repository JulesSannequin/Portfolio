import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h1>Jules Sannequin</h1>
        Junior Fullstack web-Développeur
      </div>
      <div className="header-right">
        <Link to="/contact">
          <button>Contact</button>
        </Link>
        <Link to="/creations">
          <button>Créations</button>
        </Link>
        <Link to="/parcours">
          <button>Parcours</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
