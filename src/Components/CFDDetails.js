import React from "react";
import { Link } from "react-router-dom";
import CFD from "../images/cfdImg.png";
const CFDDetails = ({ heading, info, button, to }) => {
  return (
    <div className="cfdBg__content">
      <div className="cfdBg__content-img">
        <img src={CFD} alt="CFD" />
      </div>
      <div className="cfdBg__content-info">
        <h2>{heading}</h2>
        <hr />
        <p>{info}</p>
        <Link to={`${to}`}>{button}</Link>
      </div>
    </div>
  );
};

export default CFDDetails;
