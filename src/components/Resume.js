import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Resume = () => {
  return (
    <section id="resume" class="resume">
      <div class="container">
        <div class="section-title">
          <h2>Resume</h2>
          <p>Here are the highlights of my resume</p>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <ScrollAnimation animateIn="fadeInUp" animateOnce>
              <h3 class="resume-title">Sumary</h3>
              <div class="resume-item pb-0">
                <h4>Kalem Mentore</h4>
                <p>
                  <em>
                    Innovative and deadline-driven Web Developer with 3+ years
                    of experience designing and developing user-centered digital
                    solutions from initial concept to final, polished
                    deliverable.
                  </em>
                </p>
                <ul>
                  <li>Oropune, Piarco, TT</li>
                  <li>(1868) 278-0498</li>
                  <li>kalemmalek123@gmail.com</li>
                </ul>
              </div>

              <h3 class="resume-title">Education</h3>
              <div class="resume-item">
                <h4>The Weekend Hack &amp; Fullstack Web Development</h4>
                <h5>2021 - 2022</h5>
                <p>
                  <em>Online, remote</em>
                </p>
                <p>
                  A software engineering program where I had the fundamentals of
                  web development committed to memory
                </p>
              </div>
              <div class="resume-item">
                <h4>St. Marys College</h4>
                <h5>2011 - 2018</h5>
                <p>
                  <em>Port-Of-Spain, Trinidad and Tobago</em>
                </p>
                <p>9 O'Level passes along with 8 A'Level Passes</p>
              </div>
            </ScrollAnimation>
          </div>
          <div class="col-lg-6">
            <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce>
              <h3 class="resume-title">Professional Experience</h3>
              <div class="resume-item">
                <h4>M.E Designs - Web Developer</h4>
                <h5>Oct 2021 - June 2022</h5>
                <p>
                  <em>Trinidad and Tobago </em>
                </p>
                <ul>
                  <li>
                    Responsible for developing responsive front-end applications
                    for their clients.
                  </li>
                  <li>
                    Worked with an experienced team to complete projects by
                    resolving issues on github and submitting pull requests.
                  </li>
                  <li>
                    Assisted in the development of HTML5 cross platform browser
                    games like BloqSquare
                  </li>
                  <li>
                    Oversee the efficient use of production project budgets
                    ranging from $2,000 - $25,000
                  </li>
                </ul>
              </div>
              <div class="resume-item">
                <h4>TWH - Software Engineering Intern</h4>
                <h5>June 2022 - Present</h5>
                <p>
                  <em>Remote</em>
                </p>
                <ul>
                  <li>
                    Responsible for building full stack web applications using
                    technologies like React, node etc.
                  </li>
                  <li>
                    Managed up to 5 projects or tasks at a given time while
                    under pressure
                  </li>
                  <li>
                    Refactored outdated codebase and assisted in debugging.
                  </li>
                  <li>
                    Resolved various tickets ranging from developing scalable
                    models and routes to building complex APIs and submitting
                    pull requests for finished tickets.
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
