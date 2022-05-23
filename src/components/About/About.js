import React from "react";
import "./About.css";
import ashim from "../../images/ashim.png";
const About = () => {
  return (
    <div className=" about-me">
      <div>
        <img src={ashim} alt="" />
        <div className="card">
          <div className="card-body">
            <p className="card-text">
              Hello there, This is Ashim! I have been learning web development
              for four months. When I started learning web development my plan
              was to be a junior developer by end of next five months. I am on
              the way to become a junior web developer. I have already learnt
              basics of HTML,CSS,Javascript,React and some other techs. I hope I
              will become a junior dev after some months!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;