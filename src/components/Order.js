import React from "react";
import potato from "../assets/potato.webp";
import beef from "../assets/beef.jpg";
import waffle from "../assets/waffle.jpg";
import grainSalad from "../assets/grainSalad.jpg";

function Order() {
  return (
    <div className="order">
      <div>
        <div className="heading title2">Popular Products</div>
      </div>
      <div className="row">
        <div className="card2">
          <img className="menuImage" src={potato} alt="Baked Potato" />
          <h2 className="menuItem">Baked Potato Bar</h2>
          <h2 className="price">$8.50</h2>
        </div>
        <div className="card2">
          <img className="menuImage" src={beef} alt="Beef Stew" />
          <h2 className="menuItem">Beef</h2>
          <h2 className="price">$15</h2>
        </div>
        <div className="card2">
          <img className="menuImage" src={waffle} alt="Waffle" />
          <h2 className="menuItem">Breakfast</h2>
          <h2 className="price">$10</h2>
        </div>
        <div className="card2">
          <img className="menuImage" src={grainSalad} alt="Waffle" />
          <h2 className="menuItem">Grain Salad</h2>
          <h2 className="price">$6</h2>
        </div>
      </div>
      <div className="row">
        <div className="card2">
          <img className="menuImage" src={grainSalad} alt="Waffle" />
          <h2 className="menuItem">Grain Salad</h2>
          <h2 className="price">$6</h2>
        </div>
        <div className="card2">
          <img className="menuImage" src={waffle} alt="Waffle" />
          <h2 className="menuItem">Breakfast</h2>
          <h2 className="price">$10</h2>
        </div>
        <div className="card2">
          <img className="menuImage" src={beef} alt="Beef Stew" />
          <h2 className="menuItem">Beef</h2>
          <h2 className="price">$15</h2>
        </div>
        <div className="card2">
          <img className="menuImage" src={potato} alt="Baked Potato" />
          <h2 className="menuItem">Baked Potato Bar</h2>
          <h2 className="price">$8.50</h2>
        </div>
      </div>
    </div>
  );
}

export default Order;
