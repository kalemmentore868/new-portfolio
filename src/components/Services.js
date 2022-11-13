import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { servicesObjs } from "../helper/services";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p></p>
        </div>

        <div className="row">
          {servicesObjs.map((servicesObj, index) => {
            return (
              <div
                key={index}
                className="col-lg-4 col-md-6 icon-box"
                data-aos="fade-up"
              >
                <ScrollAnimation animateIn="fadeInUp" animateOnce>
                  <div className="icon">
                    <servicesObj.icon />
                  </div>
                  <h4 className="title">
                    <p>{servicesObj.title}</p>
                  </h4>
                  <p className="description">{servicesObj.description}</p>
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
