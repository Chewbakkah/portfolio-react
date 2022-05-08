import { useState, useEffect } from "react";
import Short from "./Short";
import Long from "./Long";
import cheyne from "../../assets/images/cheyne.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const [active1, setActive1] = useState("less");
  const [active2, setActive2] = useState("min");

  function handleClick1() {
      setActive1("more");
      setActive2("max");
  }
  function handleClick2() {
    setActive1("less");
    setActive2("min");
}

  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-lg-7 about-holder">
          <h1 className="about-header">About Me</h1>
          <div className="history-button">
          {active2 === "max" && <button
              className="flat-button"
              onClick={() => handleClick2()}
            >Nevermind, Go Back</button>}
          </div>
          <div className="history-text">
            {active1 === "less" && <Short />}
            {active1 === "more" && <Long />}
          </div>
          <div className="history-button">
            {active2 === "min" && <button
              className="flat-button"
              onClick={() => handleClick1()}
            >Show Me More</button>}            
          </div>
          <div className="iconRow">
            <div className="icon icon-html">
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className="icon icon-css">
              <FontAwesomeIcon icon={faCss3} />
            </div>
            <div className="icon icon-react">
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className="icon icon-js">
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div className="icon icon-node">
              <FontAwesomeIcon icon={faNodeJs} />
            </div>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1wd4DIIglTYjilzD4Nb5BLWaxmzRlbg-6/view?usp=sharing"
            className="flat-button resume"
          >
            VIEW RESUME
          </a>
        </div>
        <div className="col-lg-4">
          <img
            className="profile-photo"
            src={cheyne}
            alt="JavaScript, Developer, Nerd"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
