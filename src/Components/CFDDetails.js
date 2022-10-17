import React from "react";
import { Link } from "react-router-dom";
import CFD from "../images/cfdImg.png";
const CFDDetails = ({ heading, info, button, to }) => {
  return (
    <section className="cfdDetails">
      <div className="cfdDetails__content">
        <div className="cfdDetails__content-img">
          <img src={CFD} alt="CFD" />
        </div>
        <div className="cfdDetails__content-info">
          <h4>{heading}</h4>
          <hr />
          <p>{info}</p>
          <Link to={`${to}`}>
            <button>{button}</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CFDDetails;
