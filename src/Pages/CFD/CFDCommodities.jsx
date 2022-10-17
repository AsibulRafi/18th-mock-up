import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BuySell from "../../Components/BuySell/BuySell";
import CFDInfo from "../../Components/CFD Info/CFDInfo";
import CFDDetails from "../../Components/CFDDetails";

const CFDCommodities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="cfdHeading">
        <div className="cfdHeading__wrapper">
          <h2>Trade CFD’s on Commodities</h2>
        </div>
      </section>
      <section className="cfd">
        <div className="cfd__wrapper">
          {/* Details */}
          <CFDDetails
            heading="Trade Different Commodities with No name 1"
            info="With No name 1 you can trade up to 3 CFDs on Commodities such as COCOA, COFFEE and SOYBEAN with very favour able terms."
            button="PRODUCT LIST"
            to="/allinstrumentscommodities"
          />
          <div className="cfd__content ">
            <div className="cfd__content-text">
              <p>
                Commodity markets have had a major impact on nations and people
                throughout history. Currently there are about 50 major commodity
                markets worldwide that facilitate trading of approximately 100
                raw or primary products. There are different categories of
                commodities, all supported by the same basic economic
                principles: lower supply equals higher prices and vice versa. At
                No name 1 you can trade up to 3 CFDs on Commodities such as
                COCOA, COFFEE and SOYBEAN with very favour able terms.
              </p>
            </div>
          </div>
          <div className="button-container">
            <Link to="/allinstrumentscommodities">
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

export default CFDCommodities;
