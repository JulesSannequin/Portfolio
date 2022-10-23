import React from "react";
import "../Style/Home.css";
import backgroundImage from "../Images/background.jpg";

const Home = () => {
  return (
    <div className="main">
      <div className="main-left">
        <div className="main-left-top">
          <h1>Bonjour et bienvenue</h1>{" "}
        </div>
        <div className="main-left-center">
          Je m'appelle <br /> <span>Jules Sannequin</span>
        </div>
        <div className="main-left-bottom">
          Je suis un <br /> <span>développeur full-stack junior</span> <br />
          également compositeur de musique et sensible au design
        </div>
      </div>
      <div className="main-right">
        <img src={backgroundImage} alt="background-image" />
      </div>
    </div>
  );
};

export default Home;
