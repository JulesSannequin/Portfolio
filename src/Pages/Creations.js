import React from "react";
import "../Style/Creations.css";
import deliveroo from "../Images/deliveroo.png";
import spaceinvader from "../Images/space-invader.png";
import vinted from "../Images/Vinted.png";

const Creations = () => {
  return (
    <div className="main-creations">
      <div className="creations-card">
        <a href="https://vintedjulessannequin.netlify.app">
          <div className="creations-card-1">
            <img src={vinted} alt="vinted-reproduction" />
            <div className="text">
              vous voulez faire du tri dans vos placards?{" "}
            </div>
          </div>
        </a>
        <a href="https://deliveroojulessannequin.netlify.app">
          <div className="creations-card-2">
            <img src={deliveroo} alt="deliveroo-reproduction" />
            <div className="text">
              Vous n'avez rien a manger ? pas de problème venez ici!
            </div>
          </div>
        </a>
        <a href="https://jules-space-invader.netlify.app">
          <div className="creations-card-3">
            <img src={spaceinvader} alt="little-space-invader-game" />
            <div className="text">
              Vous vous ennuyez ? venez a jouer a mon space invader
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Creations;
