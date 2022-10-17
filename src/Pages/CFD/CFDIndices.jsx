import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BuySell from "../../Components/BuySell/BuySell";
import CFDInfo from "../../Components/CFD Info/CFDInfo";
import CFDDetails from "../../Components/CFDDetails";

const CFDIndices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="cfdHeading">
        <div className="cfdHeading__wrapper">
          <h2>Trade CFD’s on Forex</h2>
        </div>
      </section>
      <section className="cfd">
        <div className="cfd__wrapper">
          {/* Details */}
          <CFDDetails
            heading="Trade Different Indices with
No name 1"
            info="Trade CFDs on different Indices on the Market with No name 1's Platform including Nasdaq and Dow Jones.   "
            button="PRODUCT LIST"
            to="/allinstrumentsindices"
          />
          <div className="cfd__content ">
            <div className="cfd__content-text">
              <p>
                An index is a statistical representation of an equity market
                through a basket of stocks. An index measures the value of a
                group of stocks and therefore investors can invest on indices
                that represent specific markets. With No name 1 you can trade
                more than 10 of the world's most prolific indices covering Asia,
                North America and Europe, including the renowned Dow Jones
                Industrial Average (DJIA) which is extremely popular with
                traders worldwide. Dividend Adjustments on Cash Indices CFDs
                CFDs on Indices will be subject to dividend adjustments. When a
                constituent member of an index pays Dividends to its
                Shareholders, dividend adjustments will be made to accounts of
                clients holding a position on the index.
              </p>
            </div>
            <div className="cfd__content-info">
              <h2>With No name 1 you can:</h2>
              <ul>
                <li>
                  Long Positions (Buy) – Clients holding long positions on the
                  ex-div date will receive a dividend in the form of a cash
                  adjustment (CD)
                </li>
                <li>
                  Short Positions (Sell) – Clients holding short positionson the
                  ex-div date will be charged the dividend amount in the form of
                  a cash adjustment (CW)
                </li>
              </ul>
            </div>
          </div>
          <div className="button-container">
            <Link to="/allinstrumentsindices">
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

export default CFDIndices;
