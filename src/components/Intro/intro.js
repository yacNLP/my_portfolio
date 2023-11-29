import React from "react";

import "./intro.css";
import meImg from "../../assets/me.jpg";
import hireImg from "../../assets/hiring.png";
import { Link } from "react-scroll";
const Intro = () => {
  return (
    <section id="intro">
      {/*  <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Smith</span> <br /> Web developer
        </span>
        <p className="introPara">
          I m a skilled web designer with experience <br /> in creating visually
          appealing <br /> and user friendly websites
        </p>
        <Link>
          <button className="btn">
            <img src={hireImg} alt="" className="hireImg" /> Hire me{" "}
          </button>
        </Link>
      </div> */}
      <div class="introContent">
        <h1 class="introTitle">
          Hello, <br />
          I'm Yacine HADDAD
        </h1>
        <div class="introTextContent">
          <p class="introText">
            A Frontend Web Developer crafting intuitive interfaces for
            websites and applications. I also blend linguistics and computer science,
            contributing to Natural Language Processing (NLP) projects.
          </p>
        </div>
        <div class="projectsBtnContent">
          <a href="./#portfolio" class="projectBtn">
            Projects
          </a>
        </div>
      </div>

      {/*    <img src={meImg} alt="Profile" className="bg" /> */}
    </section>
  );
};

export default Intro;
