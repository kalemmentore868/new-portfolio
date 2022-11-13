import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiClipboard } from "react-icons/bi";
import { BsClipboardCheck } from "react-icons/bs";
import { Alert } from "react-bootstrap";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [isPhoneCopied, setIsPhoneCopied] = useState(false);

  const copyPhone = () => {
    navigator.clipboard.writeText("18682780498");
    setIsPhoneCopied(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("kalemmalek123@gmail.com");
    setIsEmailCopied(true);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <ScrollAnimation animateIn="fadeIn">
          <div className="section-title">
            <h2>Contact Me</h2>
          </div>

          <div className="row" data-aos="fade-in">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="email">
                  <div className="d-flex top-con">
                    <AiOutlineMail />
                    <h4>Email:</h4>
                  </div>
                  <div className="d-flex ">
                    {" "}
                    {isEmailCopied ? (
                      <BsClipboardCheck />
                    ) : (
                      <BiClipboard
                        onClick={copyEmail}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                    <a
                      href="mailto:kalemmalek123@gmail.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      kalemmalek123@gmail.com
                    </a>
                  </div>
                </div>

                <div className="phone">
                  <div className="d-flex  top-con">
                    <AiOutlinePhone />
                    <h4>Call:</h4>
                  </div>
                  <div className="d-flex ">
                    {isPhoneCopied ? (
                      <BsClipboardCheck />
                    ) : (
                      <BiClipboard
                        onClick={copyPhone}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                    <a href="tel:18682780498">+1868 2780494</a>
                  </div>
                  {isEmailCopied && (
                    <Alert
                      variant="success"
                      className="mt-5"
                      dismissible
                      onClose={() => setIsEmailCopied(false)}
                    >
                      Email Copied!
                    </Alert>
                  )}
                  {isPhoneCopied && (
                    <Alert
                      variant="success"
                      className="mt-5"
                      dismissible
                      onClose={() => setIsPhoneCopied(false)}
                    >
                      Phone number Copied!
                    </Alert>
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <ContactForm />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Contact;
