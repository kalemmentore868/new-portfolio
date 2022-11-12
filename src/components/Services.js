import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { servicesObjs } from "../helper/services";

const Services = () => {
  return (
    <section id="services" class="services">
      <div class="container">
        <div class="section-title">
          <h2>Services</h2>
          <p></p>
        </div>

        <div class="row">
          {servicesObjs.map((servicesObj) => {
            return (
              <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                <ScrollAnimation animateIn="fadeInUp" animateOnce>
                  <div class="icon">
                    <servicesObj.icon />
                  </div>
                  <h4 class="title">
                    <a href="">{servicesObj.title}</a>
                  </h4>
                  <p class="description">{servicesObj.description}</p>
                </ScrollAnimation>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
