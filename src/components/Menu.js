import React from "react";
import buffet from "../assets/buffet.jpg";
import wraps from "../assets/wraps.jpg";
import boxLunch from "../assets/boxLunch.jpg";
import salad from "../assets/salad.jpeg";
import tacos from "../assets/tacos.jpg";
import dessert from "../assets/dessert.jpeg";

function Menu() {
  return (
    <div className="menu">
      <h2>Main Menus</h2>
      <h1 className="heading title">Fresh, Prompt & Delicious</h1>
      <p>
        Whether you're hosting a social event or coordinating a corporate
        meeting, Foodinis' unique menus are sure to impress!
      </p>
      <div className="row">
        <div className="card">
          <img src={buffet} alt="Buffet Table" className="round" />
          <p className="bold">Hot & Cold Breakfast, Lunch & Dinner Buffets</p>
        </div>
        <div className="card">
          <img src={wraps} alt="Wrap Platter" className="round" />
          <p className="bold">Gourmet Sandwiches & Wraps</p>
        </div>
        <div className="card">
          <img src={boxLunch} alt="Boxed Lunch" className="round" />
          <p className="bold">Boxed Lunches & Individually Packaged Entrees</p>
        </div>
      </div>
      <div className="row">
        <div className="card">
          <img src={salad} alt="salad" className="round" />
          <p className="bold">Fresh Salads & Platters</p>
        </div>
        <div className="card">
          <img src={tacos} alt="Tacos" className="round" />
          <p className="bold">Hot Themed Buffets & Build-Your-Own-Bars</p>
        </div>
        <div className="card">
          <img src={dessert} alt="Pudding" className="round" />
          <p className="bold">Delicious Desserts & Snacks</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
