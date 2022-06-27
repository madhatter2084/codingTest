import React from "react";
import { GiPaperBagOpen } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";

function Benefits() {
  return (
    <div className="benefits">
      <GiPaperBagOpen className="randomIcons" />
      <div className="benefitCard">
        <h2>Wholesome Ingredients</h2>
        <p>Enjoy your favorite flavor profiles</p>
      </div>
      <FaShippingFast className="randomIcons" />
      <div className="benefitCard">
        <h2>Free Shipping</h2>
        <p>Orders over $80</p>
      </div>
      <MdOutlinePayment className="randomIcons" />
      <div className="benefitCard">
        <h2>Payment</h2>
        <p>All Major Credit Cards</p>
      </div>
    </div>
  );
}

export default Benefits;
