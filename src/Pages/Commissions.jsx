import React, { useEffect } from "react";

const Commissions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="commissions__heading">
        <div className="commissions__heading-wrapper">
          <h2 className="commissions__heading-main">Commmissions and Swaps</h2>
          <div className="commissions__heading-content">
            <h2>Swap Rates</h2>
            <div className="commissions__heading-content-info">
              <div className="commissions__heading-content-info-single">
                <h1>1</h1>
                <h4>Market Watch</h4>
              </div>
              <div className="commissions__heading-content-info-single">
                <h1>2</h1>
                <h4>Select the Instrument you wish to check Watch</h4>
              </div>
              <div className="commissions__heading-content-info-single">
                <h1>3</h1>
                <h4>
                  Right Click and select specifications’. A new window will open
                  that shows long and short swap rates for the trading
                  Instrument
                </h4>
              </div>
            </div>
            <p>
              **To see latest Swap rates please click here or Login to No name 1
              MT4 Trading Platform and follow the steps outlined below:
            </p>
          </div>
        </div>
      </section>
      <section className="commissions">
        <div className="commissions__wrapper">
          <div className="commissions__content">
            <div className="commissions__content-info">
              <div className="commissions__content-info-1">
                <h2>What is Swap</h2>
                <p>
                  A forex swap rate is defined as an overnight or rollover
                  interest rate (positive or negative) for holding positions
                  overnight in foreign exchange or CFDs trading.
                </p>
                <p>
                  A swap charge is determined based on the interest rates of the
                  countries involved in each currency pair and whether the
                  position is short or long. Each currency pair has its own swap
                  rate and is measured in points. The particular size of swap
                  charged or paid depends on the size of your position. Swap
                  rates are subject to change based on interest rate policies of
                  central banks and the liquidity on the inter-bank lending
                  markets.
                </p>
              </div>
              <div className="commissions__content-info-2">
                <h2>Notes:</h2>
                <p>
                  Swaps (rollovers) take place for all positions opened before
                  00:00 MT4 server time that are still open after 00:00.
                </p>
                <p>
                  When your rollover an open position from Wednesday to
                  Thursday, the settlement date is Monday, (Forex settlement of
                  T+2); therefore, the rollover charge on a Wednesday evening
                  will be three times the value indicated above. This is called
                  Triple Swap Wednesday.
                </p>
              </div>
            </div>
            <div className="examples">
              <h2 className="examples__heading">Examples given:</h2>
              <div className="examples__content">
                {/* examples__content single */}

                <div className="examples__content-single">
                  <h1>1</h1>
                  <div className="examples__content-single__heading">
                    <hr />
                    <h4>CFDs on Forex I</h4>
                  </div>
                  <p>
                    1 lot of EUR/USD has a notional value of 100,000 EUR. The
                    commission on Mini Bronze account would be 2.90 EUR per side
                    (0.0029% of notional value of the trade) or 5.80 EUR per
                    round trip. If the base currency of your trading account is
                    in currency other than the EUR, then this 5.80 EUR will be
                    automatically converted into the base currency of your
                    trading account.
                  </p>
                </div>
                <div className="examples__content-single">
                  <h1>2</h1>
                  <div className="examples__content-single__heading">
                    <hr />
                    <h4>CFDs on Forex II</h4>
                  </div>
                  <p>
                    1 lot of GBP/USD has a notional value of 100,000 GBP. The
                    commission on Mini Bronze account would be 2.90 GBP per side
                    (0.0029% of notional value of the trade) or 5.80 GBP per
                    round trip. If the base currency of your trading account is
                    in currency other than the GBP, then this 5.80 GBP will be
                    automatically converted into the base currency of your
                    trading account
                  </p>
                </div>
                <div className="examples__content-single">
                  <h1>3</h1>
                  <div className="examples__content-single__heading">
                    <hr />
                    <h4>CFDs on Commodities/ Energies Example</h4>
                  </div>
                  <p>
                    1 Lot of WTI_OIL has a notional value of 1 Barrel Price. The
                    order value: Lots*Notional Value*Price If the Price for
                    WTI_OIL is $70 The Commission Calculate as followed:
                    1*1*70*0.01%*2=0.014 USD then this 0.014 USD will be
                    automatically converted into the base currency of your
                    trading account. In this case the amount will be rounded up
                    to the nearest 2nd decimal place, therefore the commission
                    will be 0.01 USD
                  </p>
                </div>
                <div className="examples__content-single">
                  <h1>4</h1>
                  <div className="examples__content-single__heading">
                    <hr />
                    <h4>CFDs on Indices/ Equities Example</h4>
                  </div>
                  <p>
                    1 lot of CSCO has a notional value of 1 Stock Price. The
                    order value: Lots*Notional Value*Price If the Price for FB
                    is $170 The Commission Calculate as followed:
                    1*1*170*0.01%*2=0.034 USD then this 0.034 USD will be
                    automatically converted into the base currency of your
                    trading account. In this case the amount will be rounded up
                    to the nearest 2nd decimal place, therefore the commission
                    will be 0.03 USD
                  </p>
                </div>
              </div>
            </div>
            <div className="commissions__account">
              <div className="commissions__account-heading">
                <h2>Commissions per Account Type</h2>
                <hr />
              </div>
              <div className="commissions__account-table">
                <table className="commissions__account-table-content">
                  <thead className="commissions__account-table-content-heading">
                    <tr>
                      <th>CFD’s</th>
                      <th>Mini Bronze</th>
                      <th>Classic Silver</th>
                      <th>Pro Gold</th>
                    </tr>
                  </thead>
                  <tbody className="commissions__account-table-content-body">
                    <tr>
                      <td>CFDs on Forex Pairs</td>
                      <td>0.0029% Per Side of Notional Value</td>
                      <td>0.0025% Per Side of Notional Value</td>
                      <td>0.0020% Per Side of Notional Value</td>
                    </tr>
                    <tr>
                      <td>CFDs on Commodities, Energies, indices, Equities</td>
                      <td>0.01% per side of order volume</td>
                      <td>0.01% per side of order volume</td>
                      <td>0.01% per side of order volume</td>
                    </tr>
                    <tr>
                      <td>CFDs on Cryptocurrencies</td>
                      <td>0.03% Per Side of National Value</td>
                      <td>0.03% Per Side of National Value</td>
                      <td>0.03% Per Side of National Value</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Commissions;
