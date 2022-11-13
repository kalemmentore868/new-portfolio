import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { projectObjs } from "../helper/projects";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
        </div>

        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {projectObjs.map((projObj) => {
              return (
                <div
                  key={projObj.id}
                  className="col-lg-4 col-md-6 portfolio-item filter-app"
                >
                  <div className="portfolio-wrap">
                    <img
                      src={projObj.image}
                      className="img-fluid"
                      alt="project screenshot"
                    />
                    <div className="portfolio-links">
                      <a
                        href={projObj.source}
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Visit Site
                      </a>
                      <a
                        href={projObj.visit}
                        target="_blank"
                        title="More Details"
                        rel="noreferrer"
                      >
                        See Code
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Portfolio;
