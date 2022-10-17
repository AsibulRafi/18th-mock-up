import React from "react";

const CFDInfo = () => {
  return (
    <section className="wac">
      <div className="wac__heading">
        <h2>WHAT ARE CFD’s?</h2>
        <hr />
      </div>
      <div className="wac__content">
        <p>
          A CFD or Contract For Difference is an agreement between two parties
          to the trade (Buyer and Seller) to exchange the difference in value
          between the opening and closing price for a particular asset. Trade
          opening price would be the price in effect at the moment the agreement
          is made at while the closing price would be the price at which the
          agreement is executed. Essentially trading CFDs boils down to a
          contract between yourself as a Client and the market. You open a trade
          by purchasing a contract for a particular asset and close the trade by
          selling the contract back to the market, hopefully making a profit in
          the process. CFDs don’t necessarily have to be on the Buy side. As
          with all trades, you can open a CFD trade on the sell side. The
          principle remains the same. Buying the contract back from the market
          to close the trade would hopefully result in profit.
        </p>
        <p>
          CFD contract sizes are fixed. CFDs on shares, for example, are made on
          the value of 100 shares of the company in question. For example, a
          contract for Google shares (GOOGL) would be for the value of 100
          shares in the search engine giant. At today’s price of USD 853.69,
          that would make a full contract worth $85,369.
        </p>
        <p>
          As with forex trading, CFDs are leveraged products. Trading with a
          1:30 broker would effectively allow you to control $30 worth of trades
          for every $1 deposited in your account. At this leverage, you would
          need $2,845.56 in your account to trade a full contract of Google
          shares. Sticking with the Google example, if you believe the share
          price will increase, you will Buy a contact which would then be Sold
          back at the higher price. This is where the "for difference" comes it.
          There is no physical delivery of Google shares involved. The contract
          is purely for the difference between the opening and closing prices.
          Buy a contract for Google at USD 853.69. Let's assume the share price
          rises to USD 875.69. Closing the trade makes a profit of $22 per share
          (875.69-853.69) for a total on the contract of $2,200 (22 x 100).
          Conversely, if we think Google shares will fall in value, we would
          sell a contract at the USD 853.69 level.
        </p>
        <p>
          CFD contract sizes are fixed. CFDs on shares, for example, are made on
          the value of 100 shares of the company in question. For example, a
          contract for Google shares (GOOGL) would be for the value of 100
          shares in the search engine giant. At today’s price of USD 853.69,
          that would make a full contract worth $85,369. As with forex trading,
          CFDs are leveraged products. Trading with a 1:30 broker would
          effectively allow you to control $30 worth of trades for every $1
          deposited in your account.
        </p>
      </div>
    </section>
  );
};

export default CFDInfo;
