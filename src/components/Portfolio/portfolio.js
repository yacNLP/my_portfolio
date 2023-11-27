import React from "react";
import "./portfolio.css";
import safescaleImg from "../../assets/safescale-web-accueil.png"
import mteImg from "../../assets/mte-home.png"
import classifierImh from "../../assets/classifier.png"
function Portfolio() {
  return (
    <section id="portfolio">
      <div className="projectsContainer">
        <h1 className="headingSec">
          <span className="headingSecTitle">Portfolio</span>
          <span className="headingSecDesc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
            Cupiditate impedit perspiciatis ad nemo maxime sunt nobis.{" "}
            Facilis architecto voluptatem voluptate.
          </span>
        </h1>

        <div className="projectsContent">
          <div className="project">
            <h3 className="projectTitle">Safescale</h3>
            <img src={safescaleImg} alt="" className="projectImg" />
            <div className="projectDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti voluptates fuga tempore nesciunt id delectus!</div>
          </div>
          <div className="project">
            <h3 className="projectTitle">Stockwater</h3>
            <img src={mteImg} alt="" className="projectImg" />
            <div className="projectDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti voluptates fuga tempore nesciunt id delectus!</div>
          </div>
          <div className="project">
            <h3 className="projectTitle">Side Effects Detection</h3>
            <img src={classifierImh} alt="" className="projectImg" />
            <div className="projectDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti voluptates fuga tempore nesciunt id delectus!</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
