import React from "react";
import { ImFacebook } from "react-icons/im";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/colorLogo.png";
import { GoMail } from "react-icons/go";

function Footer() {
  return (
    <div className="footer">
      <div className="logoSocials">
        <div className="imageContainer">
          <img className="logo2" src={logo} alt="Foodini's logo" />
        </div>
        <div className="socials2">
          <div className="socialIcon">
            <ImFacebook className="reactIcons" />
          </div>
          <div className="socialIcon">
            <BsInstagram className="reactIcons" />
          </div>
          <div className="socialIcon">
            <BsTwitter className="reactIcons" />
          </div>
          <div className="socialIcon">
            <BsYoutube className="reactIcons" />
          </div>
          <div className="socialIcon">
            <FaLinkedinIn className="reactIcons" />
          </div>
          <div className="socialIcon">
            <GoMail className="reactIcons" />
          </div>
        </div>
      </div>
      <div className="catering">
        <h2>Catering</h2>
        <div className="notes">
          <p className="group">Main Menu</p>
          <p className="bold group">3 Days Notice</p>
        </div>
        <div className="notes">
          <p className="group">Quick Corporate Menus</p>
          <p className="bold group">12 hr Notice</p>
        </div>
        <div className="notes">
          <p className="group">Staffed Events</p>
          <p className="bold group">10 Day Notice</p>
        </div>
      </div>
      <div className="visit">
        <h2>Visit</h2>
        <div>
          <p className="links">My Account</p>
          <p className="links">Shipping & Pickups</p>
          <p className="links">Returns & Warranty</p>
          <p className="links">About Us</p>
          <p className="links">Search</p>
          <p className="links">Contact Us</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
