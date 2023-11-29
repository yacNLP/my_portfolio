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
            <p>
              {" "}
              Specialized in the art of web development and design, I bring a
              keen eye for aesthetics and a mastery of cutting-edge technologies
              to create seamless and visually appealing online experiences.
            </p>{" "}
            <br />
            <p>
              My proficiency extends to the intricate world of Natural Language
              Processing (NLP), where I leverage the synergy between linguistics
              and computer science.
            </p>{" "}
            <br />
            <p>
              With a passion for elegant design and a deep understanding of the
              intricacies of web development, I am dedicated to crafting digital
              solutions that captivate users and push the boundaries of what's
              possible in the online realm.
            </p>
          </span>
        </h2>

        <div className="aboutMeContent">
          <div className="domainsContainer">
            <h3 className="domainsTitle">Areas of expertise</h3>
            <div className="domainsBars">
              <div className="domain">
                <img src={frontEnd} alt="" className="domainImg" />
                <div className="domainDesc">
                  <h2 className="domainTitle">Web developpment</h2>
                  <p className="domainDesc">
                    Crafting dynamic websites with a focus on user-friendly
                    experiences, using technologies like React.
                  </p>
                </div>
              </div>
              <div className="domain">
                <img src={webDesign} alt="" className="domainImg" />
                <div className="domainDesc">
                  <h2 className="domainTitle">Web Design</h2>
                  <p className="domainDesc">
                    Creating visually stunning and intuitive designs for a
                    seamless user experience.
                  </p>
                </div>
              </div>
              <div className="domain">
                <img src={nlp} alt="" className="domainImg" />
                <div className="domainDesc">
                  <h2 className="domainTitle">Natural Language Processing</h2>
                  <p className="domainDesc">
                    Exploring language understanding through the synergy of
                    linguistics and machine learning.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="skillsContainer">
            <h3 className="skillsTitle">Skills</h3>
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
