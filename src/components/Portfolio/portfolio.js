import React from "react";
import "./portfolio.css";
import safescaleImg from "../../assets/safescale-web-accueil.png";
import mteImg from "../../assets/mte-home.png";
import classifierImh from "../../assets/classifier.png";
function Portfolio() {
  return (
    <section id="portfolio">
      <div className="projectsContainer">
        <h1 className="headingSec">
          <span className="headingSecTitle">Portfolio</span>
          <span className="headingSecDesc">
            Explore a collection of projects, both personal and client-based,
            that I have crafted with dedication and creativity.
          </span>
        </h1>

        <div className="projectsContent">
          <div className="project">
            <img src={safescaleImg} alt="" className="projectImg" />
            <h3 className="projectTitle">Safescale</h3>
            <div className="projectDesc">
              Safescale is a DevOps, Open Source and multi-cloud solution that
              allows to configure and deploy IT infrastructures
            </div>
            <div className="projectTags">#React #Go #Grpc</div>
          </div>
          <div className="project">
            <img src={mteImg} alt="" className="projectImg" />
            <h3 className="projectTitle">Stockwater</h3>
            <div className="projectDesc">
              This web application offers a complete overview of all lakes in France,
              providing detailed information about each specific lake.
            </div>
            <div className="projectTags">#React</div>
          </div>
          <div className="project">
            <img src={classifierImh} alt="" className="projectImg" />
            <h3 className="projectTitle">Side Effects Detection</h3>
            <div className="projectDesc">
              It's a machine learning system that automatically categorizes
              tweets. It helps determine if a tweet mentions a side effect of a
              drug.
            </div>
            <div className="projectTags">#Python #NLP</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
