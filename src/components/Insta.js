import React from "react";
import { BsInstagram } from "react-icons/bs";
import acai from "../assets/acai.jpg";
import burrito from "../assets/burrito.jpg";
import steak from "../assets/steak.jpg";
import pasta from "../assets/pasta.jpg";
import cake from "../assets/cake.jpg";
import eggs from "../assets/eggs.jpg";

function Insta() {
  return (
    <div className="insta">
      <div className="heading title2">@foodinis</div>
      <p className="text">
        Share your delicious photos | <span className="orange2">#foodinis</span>
      </p>
      <button className="instaBtn">
        Instagram <BsInstagram className="instaIcon" />
      </button>
      <div className="photoLine">
        <div className="overlay">
          <img className="instaReel" src={acai} alt="Acai Bowl" />
        </div>
        <div className="overlay">
          <img className="instaReel" src={burrito} alt="Acai Bowl" />
        </div>
        <div className="overlay">
          <img className="instaReel" src={steak} alt="Acai Bowl" />
        </div>
        <div className="overlay">
          <img className="instaReel" src={pasta} alt="Acai Bowl" />
        </div>
        <div className="overlay">
          <img className="instaReel" src={cake} alt="Acai Bowl" />
        </div>
        <div className="overlay">
          <img className="instaReel" src={eggs} alt="Acai Bowl" />
        </div>
      </div>
    </div>
  );
}

export default Insta;
