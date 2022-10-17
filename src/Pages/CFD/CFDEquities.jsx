import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BuySell from "../../Components/BuySell/BuySell";
import CFDInfo from "../../Components/CFD Info/CFDInfo";
import CFDDetails from "../../Components/CFDDetails";

const CFDEquities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="cfdHeading">
        <div className="cfdHeading__wrapper">
          <h2>Trade CFD’s on Equities</h2>
        </div>
      </section>
      <section className="cfdBg">
        <div className="cfdBg__wrapper">
          {/* Details */}
          <CFDDetails
            heading="Trade Different  Equities with No name 1s"
            info="Trade CFDs on 40+ Stock CFDs that are traded in world major equity markets, such as Apple, Microsoft, Alibaba and Amazon with No name 1's Platform.     "
            button="PRODUCT LIST"
            to="/allinstrumentsequities"
          />
        </div>
      </section>
      <section className="cfd">
        <div className="cfd__wrapper">
          <div className="cfd__content ">
            <div className="cfdHeading__content-text">
              <p>
                Stocks or Equities belong to one of the major asset classes.
                Stocks are significant as they stand for the real value of one's
                stake in a corporation listed in a stock exchange. At No name 1
                you can trade 40+ Stock CFDs that are traded in world major
                equity markets, such as Apple, Microsoft, Alibaba and Amazon.
                Dividends Adjustments on Stocks CFDs CFDs on stocks are subject
                to dividend adjustments. When a stock security pays dividend to
                its shareholders, dividend adjustments will be made to the
                trading accounts of clients who hold a position on the Stock.
              </p>
            </div>
            <div className="cfdHeading__content-info">
              <h2>With No name 1 you can:</h2>
              <ul>
                <li>
                  Long Positions (Buy) – Clients holding long positions on the
                  ex-div date will receive a dividend in the form of a cash
                  adjustment (CD) s
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
            <Link to="/allinstrumentsequities">
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

export default CFDEquities;
