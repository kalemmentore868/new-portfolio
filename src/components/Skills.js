import React from "react";

const Skills = () => {
  return (
    <section id="skills" class="skills section-bg">
      <div class="container">
        <div class="section-title">
          <h2>Skills</h2>
        </div>

        <div class="row skills-content">
          <div class="col-lg-6" data-aos="fade-up">
            <div class="progress">
              <span class="skill">
                HTML <i class="val">100%</i>
              </span>
              <div class="progress-bar-wrap">
                <div
                  style={{ width: "100%" }}
                  class="progress-bar"
                  role="progressbar"
                ></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">
                CSS <i class="val">90%</i>
              </span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">
                JavaScript <i class="val">100%</i>
              </span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div class="progress">
              <span class="skill">
                Node.js <i class="val">90%</i>
              </span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">
                React <i class="val">90%</i>
              </span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">
                Sql and NoSql Databases <i class="val">90%</i>
              </span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
