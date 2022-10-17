import React from "react";
import "./slider.css";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
const Slider = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
  ];
  return (
    <div className="slider">
      <div className="slider__wrapper">
        <Carousel breakPoints={breakPoints}>
          <Link to="/Forex" className="allInstruments__content-box">
            <h4>Forex</h4>
          </Link>
          <Link to="/Metals" className="allInstruments__content-box">
            <h4>Metals</h4>
          </Link>
          <Link to="/Indices" className="allInstruments__content-box">
            <h4>indices</h4>
          </Link>
          <Link to="/Equities" className="allInstruments__content-box">
            <h4>equities</h4>
          </Link>
          <Link to="/Cryptocurrencies" className="allInstruments__content-box">
            <h4>cryptocurrencies</h4>
          </Link>
          <Link to="/Energies" className="allInstruments__content-box">
            <h4>energies</h4>
          </Link>
          <Link to="/Commodities" className="allInstruments__content-box">
            <h4>commodities</h4>
          </Link>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
