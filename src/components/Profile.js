import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsGoogle,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";

const Profile = () => {
  return (
    <div className="profile">
      <img
        src="assets/img/my-avatar.png"
        alt=""
        className="img-fluid rounded-circle"
      />
      <h1 className="text-light">
        <a href="index.html">Kalem Mentore</a>
      </h1>
      <div className="social-links mt-3 text-center">
        <a href="#" className="twitter">
          <BsGithub />
        </a>
        <a href="#" className="facebook">
          <BsFacebook />
        </a>
        <a href="#" className="instagram">
          <BsInstagram />
        </a>
        <a href="#" className="google-plus">
          <BsGoogle />
        </a>
        <a href="#" className="linkedin">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Profile;
