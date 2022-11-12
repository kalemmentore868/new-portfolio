import React, { useState } from "react";
import Profile from "./Profile";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFile,
  AiOutlineBook,
  AiOutlineCloudServer,
  AiOutlineRedEnvelope,
} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <>
      <i
        className="mobile-nav-toggle d-xl-none"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <GiHamburgerMenu />
      </i>

      <header id="header" className={isNavExpanded ? "show" : "hide"}>
        <div className="d-flex flex-column">
          <Profile />

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" className="nav-link scrollto active">
                  <AiOutlineHome className="bx" />

                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto">
                  <AiOutlineUser />

                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-link scrollto">
                  <AiOutlineFile />

                  <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" className="nav-link scrollto">
                  <AiOutlineBook />

                  <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link scrollto">
                  <AiOutlineCloudServer /> <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link scrollto">
                  <AiOutlineRedEnvelope /> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
