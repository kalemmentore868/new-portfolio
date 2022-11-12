import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { projectObjs } from "../helper/projects";

const Portfolio = () => {
  return (
    <section id="portfolio" class="portfolio section-bg">
      <div class="container">
        <div class="section-title">
          <h2>Portfolio</h2>
        </div>

        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <div
            class="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {projectObjs.map((projObj) => {
              return (
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div class="portfolio-wrap">
                    <img src={projObj.image} class="img-fluid" alt="" />
                    <div class="portfolio-links">
                      <a
                        href={projObj.source}
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="App 1"
                        target="_blank"
                      >
                        Visit site
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        See More
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
