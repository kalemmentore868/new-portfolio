import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const AboutContent = () => {
  return (
    <>
      <h3>UI/UX Designer &amp; Web Developer.</h3>
      <p className="fst-italic">
        I have a passion for all things technology and design, from software
        engineering to UI/UX.
      </p>
      <div className="row">
        <div className="col-lg-6">
          <ul>
            <li>
              <AiOutlineRight />
              <strong>Birthday:</strong> <span>18 Oct 1998</span>
            </li>
            <li>
              <AiOutlineRight />
              <strong>Website:</strong> <span>www.example.com</span>
            </li>
            <li>
              <AiOutlineRight />
              <strong>Phone:</strong> <span>+1868 2780498</span>
            </li>
            <li>
              <AiOutlineRight />
              <strong>City:</strong>
              <span>Piarco, Trinidad and Tobago</span>
            </li>
          </ul>
        </div>
        <div className="col-lg-6">
          <ul>
            <li>
              <AiOutlineRight /> <strong>Age:</strong>
              <span>24</span>
            </li>
            <li>
              <AiOutlineRight />
              <strong>Certification:</strong> <span>FullStack</span>
            </li>
            <li>
              <AiOutlineRight />
              <strong>Email:</strong>
              <span>kalemmalek123@gmail.com</span>
            </li>
            <li>
              <AiOutlineRight />
              <strong>Freelance:</strong> <span>Available</span>
            </li>
          </ul>
        </div>
      </div>
      <p>
        Are you tired of having to constantly reply to your clients messages to
        set up appointments/Give them general information? Are you missing out
        on credit card payment opportunities? Are you ready to take your brand
        to the global stage? Need a developer who is flexible and hungry to
        satisfy your needs? Reach out to me.
      </p>
    </>
  );
};

export default AboutContent;
