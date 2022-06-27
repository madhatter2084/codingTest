import React from "react";
import { ImFacebook } from "react-icons/im";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

function Header() {
  return (
    <header>
      <div className="socials">
        <div className="socialIcon">
          <ImFacebook />
        </div>
        <div className="socialIcon">
          <BsInstagram />
        </div>
        <div className="socialIcon">
          <BsTwitter />
        </div>
        <div className="socialIcon">
          <BsYoutube />
        </div>
        <div className="socialIcon">
          <FaLinkedinIn />
        </div>
      </div>
      <button className="contact">Contact Us Today</button>
    </header>
  );
}

export default Header;
