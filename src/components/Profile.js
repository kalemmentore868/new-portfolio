import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const Profile = () => {
  return (
    <div className="profile">
      <img
        src="assets/img/profile-img.jpg"
        alt="Profile pic"
        className="img-fluid rounded-circle"
      />
      <h1 className="text-light">
        <a href="index.html">Kalem Mentore</a>
      </h1>
      <div className="social-links mt-3 text-center">
        <a
          href="https://github.com/kalemmentore868"
          className="twitter"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.facebook.com/kalem.mentore/"
          target="_blank"
          rel="noreferrer"
          className="facebook"
        >
          <BsFacebook />
        </a>
        <a
          href="https://www.instagram.com/blank_868/"
          target="_blank"
          rel="noreferrer"
          className="instagram"
        >
          <BsInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/kalem-mentore-6319b121a/"
          className="linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Profile;
