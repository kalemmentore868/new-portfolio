import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { BiSmile, BiHeadphone } from "react-icons/bi";
import { BsJournalCheck, BsPeople } from "react-icons/bs";

const Facts = () => {
  return (
    <section id="facts" className="facts">
      <div className="container">
        <div className="section-title">
          <h2>Statistics</h2>
        </div>

        <div className="row no-gutters">
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <ScrollAnimation animateIn="fadeInUp" animateOnce>
              <div className="count-box">
                <BiSmile /> <span>23</span>
                <p>
                  <strong>Happy Clients</strong> Join them
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <ScrollAnimation animateIn="fadeInUp" animateOnce>
              <div className="count-box">
                <BsJournalCheck /> <span>55</span>
                <p>
                  <strong>Projects</strong> developed to perfection
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <ScrollAnimation animateIn="fadeInUp" animateOnce>
              <div className="count-box">
                <BiHeadphone /> <span>145</span>
                <p>
                  <strong>Hours Of Support</strong> site support
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <ScrollAnimation animateIn="fadeInUp" animateOnce>
              <div className="count-box">
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
