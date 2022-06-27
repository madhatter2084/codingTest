import React from "react";
import { ImFacebook } from "react-icons/im";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/colorLogo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="logoSocials">
        <div className="imageContainer">
          <img className="logo" src={logo} alt="Foodini's logo" />
        </div>
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
      </div>
      <div className="catering">
        <h2>Catering</h2>
        <div className="notes">
          <p>Main Menu</p>
          <p>3 Days Notice</p>
        </div>
        <div className="notes">
          <p>Quick Corporate Menus</p>
          <p>12 hr Notice</p>
        </div>
        <div className="notes">
          <p>Staffed Events</p>
          <p>10 Day Notice</p>
        </div>
      </div>
      <div className="visit">
        <h2>Visit</h2>
        <div className="links">
          <p>My Account</p>
          <p>Shipping & Pickups</p>
          <p>Returns & Warranty</p>
          <p>About Us</p>
          <p>Search</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
