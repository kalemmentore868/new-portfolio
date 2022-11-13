import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Skills = () => {
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <ScrollAnimation animateOnce animateIn="fadeIn">
          <div className="section-title">
            <h2>Skills</h2>
          </div>

          <div className="row skills-content">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="progress">
                <span className="skill">
                  HTML <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    style={{ width: "100%" }}
                    className="progress-bar"
                    role="progressbar"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  CSS <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  JavaScript <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="progress">
                <span className="skill">
                  Node.js <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  React <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  Sql and NoSql Databases <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Skills;
