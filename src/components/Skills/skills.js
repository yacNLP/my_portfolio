import React from "react";
import "./skills.css";

import frontEnd from "../../assets/frontend.png";
import webDesign from "../../assets/webDesign.png";
import nlp from "../../assets/nlp.png";

const Skills = () => {
  return (
    <section id="aboutMeSection">
      <div className="main-container">
        <h2 className="headingSec">
          <span className="headingSecTitle">About Me</span>
          <span className="headingSecDesc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
            Cupiditate impedit perspiciatis ad nemo maxime sunt nobis. <br />{" "}
            Facilis architecto voluptatem voluptate.
          </span>
        </h2>

        <div className="aboutMeContent">
          <div className="domainsContainer">
            <h3 className="domainsTitle">My domains</h3>
            <div className="domainsBars">
              <div className="domain">
                <img src={frontEnd} alt="" className="domainImg" />
                <div className="domainDesc">
                  <h2>Web developpment</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="domain">
                <img src={webDesign} alt="" className="domainImg" />
                <div className="domainDesc">
                  <h2>Web Design</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="domain">
                <img src={nlp} alt="" className="domainImg" />
                <div className="domainDesc">
                  <h2>Natural Language Processing</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="skillsContainer">
            <h3 className="skillsTitle">My Skills</h3>
            <div className="skills">
              <div class="skills__skill">HTML</div>
              <div class="skills__skill">CSS</div>
              <div class="skills__skill">JavaScript</div>
              <div class="skills__skill">TypeScript</div>
              <div class="skills__skill">React</div>
              <div class="skills__skill">Python</div>
              <div class="skills__skill">GIT</div>
              <div class="skills__skill">Responsive Design</div>
              <div class="skills__skill">Linux/windows</div>
              <div class="skills__skill">SQL Basics</div>
              <div class="skills__skill">Go Basics</div>
              <div class="skills__skill">XML / XSLT</div>
              <div class="skills__skill">NLP Libraries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
