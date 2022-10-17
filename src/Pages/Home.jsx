import React, { useEffect } from "react";
import Button from "../Components/Button/Button";
import BuySell from "../Components/BuySell/BuySell";
import Experience from "../Components/Experience/Experience";
import takeControl from "../images/takeControl.png";
import getMore from "../images/getMore.png";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="hero">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div className="hero__content-text">
              <h2>TRADE CFDs ON TOP FINANCIAL INSTRUMENTS</h2>
              <Button button1="Real Account" button2="Open Account" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <Experience />

      {/* Take Control */}
      <section className="take__control">
        <div className="take__control-wrapper">
          <div className="take__control-section">
            <hr className="home__line" />
            <div className="take__control-content">
              <div className="take__control-content__infos">
                <h2>Take Control</h2>
                {/* Take Control Info */}
                <div className="take__control-content__info">
                  <h4>1</h4>
                  <p>Stop Limit/ Stop Loss /Trailing Stop</p>
                </div>
                <div className="take__control-content__info">
                  <h4>2</h4>
                  <p>Free email & push notifications on the market events</p>
                </div>
                <div className="take__control-content__info">
                  <h4>3</h4>
                  <p>
                    Alerts on price movements, including
                    <br /> % of change ; Traders’ Sentiments etc
                  </p>
                </div>
                <div className="take__control-content__info">
                  <h4>4</h4>
                  <p>Negative Balance Protections</p>
                </div>
              </div>
              <div className="take__control-content__image">
                <img src={takeControl} alt="takeControlImg" />
              </div>
            </div>
            <Button button1="Real Account" button2="Open Account" />
            <hr className="home__line" />
          </div>
        </div>
      </section>

      {/* Get More */}
      <section className="getMore">
        <div className="getMore-wrapper">
          <div className="getMore-content">
            <div className="getMore-content__image">
              <img src={getMore} alt="getMoreImg" />
            </div>
            <div className="getMore-content__infos">
              <h2>Get More</h2>
              {/* Get More Info */}
              <div className="getMore-content__info">
                <h4>1</h4>
                <p>
                  Trade CFDs on Forex, Metals, Cryptocurrencies, <br />
                  Energies and many more instruments on the Market!
                </p>
              </div>
            </div>
          </div>
          <Button button1="Real Account" button2="Open Account" />
        </div>
      </section>
      {/* Buy And Sell */}
      <BuySell />
    </>
  );
};

export default Home;
