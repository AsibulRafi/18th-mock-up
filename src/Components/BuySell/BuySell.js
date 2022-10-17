import React from "react";
import { Link } from "react-router-dom";
import bitcoin from "../../images/bitcoin.png";
import etherum from "../../images/etherum.png";
import "./buySell.css";
const BuySell = () => {
  return (
    <section className="buySell">
      <h2>
        BUY AND sell CFD'S on <br /> hundreds of assets
      </h2>
      <div className="buySell__icon">
        <div className="buySell__icon-single">
          <img src={bitcoin} alt="bitcoin" />
          <h4>Bitcoin(BTC)</h4>
        </div>
        <div className="buySell__icon-single">
          <img src={etherum} alt="bitcoin" />
          <h4>ETHEREUM(ETH)</h4>
        </div>
      </div>
      <div className="buySell__item">
        <Link to="/Forex">
          <p>Forex</p>
        </Link>
        <Link to="/Metals">
          <p>Metals</p>
        </Link>
        <Link to="/Indices">
          <p>Indices</p>
        </Link>
        <Link to="/Equities">
          <p>Equities</p>
        </Link>
        <Link to="/Cryptocurrencies">
          <p>Cryptocurrencies</p>
        </Link>
        <Link to="/Energies">
          <p>Energies</p>
        </Link>
        <Link to="/Commodities">
          <p>Commodities</p>
        </Link>
      </div>
    </section>
  );
};

export default BuySell;
