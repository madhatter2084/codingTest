import React from "react";

function MailingList() {
  return (
    <div className="mailingList">
      <h1 className="heading title2">Keep in Touch</h1>
      <p>Enjoy 15% off your first order when you join our mialing list.</p>
      <form>
        <input
          type="text"
          className="input"
          placeholder="Enter Your Email"
        ></input>
        <button type="submit" className="inputBtn">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default MailingList;
