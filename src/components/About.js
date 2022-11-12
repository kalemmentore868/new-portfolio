import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <section id="about" class="about">
      <div class="container">
        <div class="section-title">
          <h2>About</h2>
          <p>
            My name is Kalem Mentore. I am a Fullstack developer based in
            Trinidad and Tobago.
          </p>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <ScrollAnimation duration={2} animateIn="fadeInLeft" animateOnce>
              <img src="assets/img/my-avatar.png" class="img-fluid" alt="" />
            </ScrollAnimation>
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content">
            <ScrollAnimation duration={2} animateIn="fadeInRight" animateOnce>
              <AboutContent />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
