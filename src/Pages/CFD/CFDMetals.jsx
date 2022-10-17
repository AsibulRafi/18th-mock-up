import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BuySell from "../../Components/BuySell/BuySell";
import CFDInfo from "../../Components/CFD Info/CFDInfo";
import CFDDetails from "../../Components/CFDDetails";

const CFDMetals = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="cfdHeading">
        <div className="cfdHeading__wrapper">
          <h2>Trade CFD’s on Metals</h2>
        </div>
      </section>
      <section className="cfd">
        <div className="cfd__wrapper">
          {/* Details */}
          <CFDDetails
            heading="Trade Different Metals with No name 1"
            info="Trade CFDs on five of the major major Metals on the Market  with No name 1's Platform."
            button="PRODUCT LIST"
            to="/allinstrumentsmetals"
          />
          <div className="cfd__content ">
            <div className="cfd__content-text">
              <p>
                Metals are physical commodities and they have always played an
                important role in history and will continue to be valued. Metals
                such as Gold and Silver have been recognized as valuable assets
                and have always been a very popular choice of investing.
                Precious metals, especially Gold has always been referred to as
                ‘Safe Heaven' in times of economic uncertainty. No name 1 offers
                investors, who do not want to face economic turbulence, access
                to three fives of metals: Gold, Silver, Palladium, Platinum and
                Copper.
              </p>
            </div>
          </div>
          <div className="button-container">
            <Link to="/allinstrumentsmetals">
              <button className="button1">Product Specification</button>
            </Link>
            <button className="button2">Open Account</button>
          </div>
          {/* Info */}
          <CFDInfo />
          {/* Buy Sell */}
          <BuySell />
        </div>
      </section>
    </>
  );
};

export default CFDMetals;
