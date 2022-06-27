import React from "react";
import logo from "../assets/colorLogo.png";
import { BsSearch, BsBag } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

function Nav() {
  return (
    <nav className="nav">
      <div className="imageContainer">
        <img className="logo" src={logo} alt="Foodini's logo" />
      </div>
      <ul className="navLinks">
        <li>About</li>
        <li>FAQ</li>
        <li>Catering</li>
        <li>Gallery</li>
        <li>Blog</li>
      </ul>
      <div className="account">
        <div className="account__icon">
          <BsSearch />
        </div>
        <div className="account__icon">
          <BsBag />
        </div>
        <div className="account__icon">
          <FaUser />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
