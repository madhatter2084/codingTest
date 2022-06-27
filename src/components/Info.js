import React from "react";
import chef from "../assets/chef.jpeg";
import shrimp from "../assets/shrimp.jpeg";
import cheese from "../assets/cheese.jpeg";

function Info() {
  return (
    <div className="info">
      <div className="about">
        <h2>Staffed Events</h2>
        <h1 className="heading title2">
          Globally Influenced & Locally Focused
        </h1>
        <p className="lineSpacing">
          Our professional chefs, led by Chef-Owner, John Deatcher, prepare
          internationally-inspired fare with integrity and passion. Our
          front-of-house servers and bartenders are well-trained, friendly and
          accomodating. So, whether you are hosting a casual backyard barbecue
          for 50 or planning a Corporate Holiday event for 500, Foodini's
          well-seasoned staff will take all the work off your plate.
        </p>
        <button className="infoBtn">Learn More</button>
      </div>
      <div className="verticalImages">
        <img className="rectangle" src={chef} alt="" />
        <img className="rectangle" src={shrimp} alt="" />
        <img className="rectangle" src={cheese} alt="" />
      </div>
    </div>
  );
}

export default Info;
