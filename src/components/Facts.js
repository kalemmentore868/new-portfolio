import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { BiSmile, BiHeadphone } from "react-icons/bi";
import { BsJournalCheck, BsPeople } from "react-icons/bs";

const Facts = () => {
  return (
    <section id="facts" class="facts">
      <div class="container">
        <div class="section-title">
          <h2>Statistics</h2>
        </div>

        <div class="row no-gutters">
          <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <ScrollAnimation animateIn="fadeInUp" animateOnce>
              <div class="count-box">
                <BiSmile /> <span>23</span>
                <p>
                  <strong>Happy Clients</strong> Join them
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <ScrollAnimation animateIn="fadeInUp" animateOnce>
              <div class="count-box">
                <BsJournalCheck /> <span>55</span>
                <p>
                  <strong>Projects</strong> developed to perfection
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <ScrollAnimation animateIn="fadeInUp" animateOnce>
              <div class="count-box">
                <BiHeadphone /> <span>145</span>
                <p>
                  <strong>Hours Of Support</strong> site support
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <ScrollAnimation animateIn="fadeInUp" animateOnce>
              <div class="count-box">
                <BsPeople /> <span>3</span>
                <p>
                  <strong>Hard Workers</strong> small dedicated team
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
