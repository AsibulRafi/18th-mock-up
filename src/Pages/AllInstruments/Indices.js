import React, { useEffect } from "react";
import forex from "./../../images/forex.png";
import metals from "./../../images/metals.png";
import indices from "./../../images/indices.png";
import equities from "./../../images/equities.png";
import cryptocurrencies from "./../../images/crypto.png";
import energies from "./../../images/energies.png";
import commodities from "./../../images/commodities.png";
import { Link } from "react-router-dom";

const Indices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="allInstruments">
      <div className="allInstruments__wrapper">
        <div className="allInstruments__heading">
          <h2>All instruments</h2>
          <hr />
          <p>
            Below you can find the list of all available media for transactions
            with our CFD service.
          </p>
        </div>
        <div className="allInstruments__content">
          <Link
            to="/allinstrumentsindices"
            className="allInstruments__content-main"
          >
            <h4>indices</h4>
            <img src={indices} alt="allInstruments" />
          </Link>
          <div className="allInstruments__content-boxs">
            {/* Box Single */}
            <Link
              to="/allinstrumentsforex"
              className="allInstruments__content-box"
            >
              <h4>Forex</h4>
              <img src={forex} alt="allInstruments" />
            </Link>
            <Link
              to="/allinstrumentsmetals"
              className="allInstruments__content-box"
            >
              <h4>Metals</h4>
              <img src={metals} alt="allInstruments" />
            </Link>
            <Link
              to="/allinstrumentsequities"
              className="allInstruments__content-box"
            >
              <h4>equities</h4>
              <img src={equities} alt="allInstruments" />
            </Link>
            <Link
              to="/allinstrumentscryptocurrencies"
              className="allInstruments__content-box"
            >
              <h4>cryptocurrencies</h4>
              <img src={cryptocurrencies} alt="allInstruments" />
            </Link>
            <Link
              to="/allinstrumentsenergies"
              className="allInstruments__content-box"
            >
              <h4>energies</h4>
              <img src={energies} alt="allInstruments" />
            </Link>
            <Link
              to="/allinstrumentscommodities"
              className="allInstruments__content-box"
            >
              <h4>commodities</h4>
              <img src={commodities} alt="allInstruments" />
            </Link>
          </div>
        </div>
        <div className="allInstruments__table">
          <table className="allInstruments__table-content">
            <thead className="allInstruments__table-content-heading">
              <tr>
                <th>Symbols</th>
                <th>Description</th>
                <th> Currency</th>
                <th>Nominal Volume</th>
                <th>Contract Size</th>
                <th>Minimum Volume</th>
                <th>Maximum Volume</th>
                <th>Volume Step</th>
                <th>Swap Long In Points</th>
                <th>Swap Short In Points</th>
                <th>Trading Hours (Server Time)*</th>
              </tr>
            </thead>
            <tbody className="allInstruments__table-content-body">
              <tr>
                <td>DJCUSD.c</td>
                <td>Dow Jones 30 Cash Index</td>
                <td>USD</td>
                <td>Number of Contracts * Market Price*1</td>
                <td>1 Lot = 1 Index Price</td>
                <td>1 lot</td>
                <td>200 Lots</td>
                <td>1</td>
                <td>-1444</td>
                <td>-3536</td>
                <td>Mon-Fri 01:00-23:15</td>
              </tr>
              <tr>
                <td>AXCAUD.c</td>
                <td>Australia 200 Cash Index</td>
                <td>AUD</td>
                <td>Number of Contracts * Market Price*1</td>
                <td>1 Lot = 1 Index Price</td>
                <td>1 lot</td>
                <td>200 Lots</td>
                <td>1</td>
                <td>-68.673</td>
                <td>-12.651</td>
                <td>Mon-Fri 00:50-07:30, 08:10-23:00</td>
              </tr>
              <tr>
                <td>GECEUR.c</td>
                <td>Germany 40 Cash index</td>
                <td>EUR</td>
                <td>Number of Contracts * Market Price*1</td>
                <td>1 Lot = 1 Index Price</td>
                <td>1 lot</td>
                <td>200 Lots</td>
                <td>1</td>
                <td>-95</td>
                <td>-1035</td>
                <td>Mon-Fri 09:00-23:30</td>
              </tr>
              <tr>
                <td>ES35</td>
                <td>Spain 35 Cash Index</td>
                <td>EUR</td>
                <td>Number of Contracts * Market Price*1</td>
                <td>1 Lot = 1 Index Price</td>
                <td>1 lot</td>
                <td>200 Lots</td>
                <td>1</td>
                <td>-56.325</td>
                <td>-77.142</td>
                <td>Mon-Fri 09:00-21:00</td>
              </tr>
              <tr>
                <td>FRCEUR.c</td>
                <td>France 40 Cash Index</td>
                <td>EUR</td>
                <td>Number of Contracts * Market Price*1</td>
                <td>1 Lot = 1 Index Price</td>
                <td>1 lot</td>
                <td>200 Lots</td>
                <td>1</td>
                <td>-30.431</td>
                <td>-41.675</td>
                <td>Mon-Fri 09:00-23:30</td>
              </tr>
              <tr>
                <td>JPCJPY.c</td>
                <td>JPN225 Cash Index</td>
                <td>JPY</td>
                <td>Number of Contracts * Market Price*1</td>
                <td>1 Lot = 1 Index Price</td>
                <td>1 lot</td>
                <td>200 Lots</td>
                <td>1</td>
                <td>-1000</td>
                <td>-1000</td>
                <td>Mon-Fri 01:00-24:00</td>
              </tr>
              <tr>
                <td>N25</td>
                <td>Netherlands 25 Cash Index</td>
                <td>EUR</td>
                <td>Number of Contracts * Market Price*1</td>
                <td>1 Lot = 1 Index Price</td>
                <td>1 lot</td>
                <td>200 Lots</td>
                <td>1</td>
                <td>-3.179</td>
                <td>-4.292</td>
                <td>Mon-Fri 09:00-23:00</td>
              </tr>
              <tr>
                <td>EXCEUR.c</td>
                <td>Euro 50 Cash index</td>
                <td>EUR</td>
                <td>Number of Contracts * Market Price*1</td>
                <td>1 Lot = 1 Index Price</td>
                <td>1 lot</td>
                <td>200 Lots</td>
                <td>1</td>
                <td>-19.737</td>
                <td>-27.029</td>
                <td>Mon-Fri 09:00-23:00</td>
              </tr>
              <tr>
                <td>SWI20</td>
                <td>Switzerland 20 Cash index</td>
                <td>CHF</td>
                <td>Number of Contracts * Market Price*1</td>
                <td>1 Lot = 1 Index Price</td>
                <td>1 lot</td>
                <td>200 Lots</td>
                <td>1</td>
                <td>-41.833</td>
                <td>-78.837</td>
                <td>Mon-Fri 09:00-23:00</td>
              </tr>
              <tr>
                <td>NACUSD.c</td>
                <td>NAS100 Cash Index</td>
                <td>USD</td>
                <td>Number of Contracts * Market Price*1</td>
                <td>1 Lot = 1 Index Price</td>
                <td>1 lot</td>
                <td>200 Lots</td>
                <td>1</td>
                <td>-108.410000</td>
                <td>-100.940000</td>
                <td>Mon-Fri 01:00-23:15</td>
              </tr>
              <tr>
                <td>SPCUSD.c</td>
                <td>SPX500 Cash Index</td>
                <td>USD</td>
                <td>Number of Contracts * Market Price*1</td>
                <td>1 Lot = 1 Index Price</td>
                <td>1 lot</td>
                <td>200 Lots</td>
                <td>1</td>
                <td>-31.905</td>
                <td>-4.95</td>
                <td>Mon-Fri 01:00-23:15</td>
              </tr>
              <tr>
                <td>UKCGBP.c</td>
                <td>UK 100 Cash Index</td>
                <td>GBP</td>
                <td>Number of Contracts * Market Price*1</td>
                <td>1 Lot = 1 Index Price</td>
                <td>1 lot</td>
                <td>200 Lots</td>
                <td>1</td>
                <td>-79.095</td>
                <td>-12.297</td>
                <td>Mon-Fri 01:00-23:15</td>
              </tr>
              <tr>
                <td>VIX.C</td>
                <td>Volatility Index</td>
                <td>USD</td>
                <td>Number of Contracts * Market Price * 100</td>
                <td>1Lot = 100 Index</td>
                <td>1 lot</td>
                <td>200 Lots</td>
                <td>1</td>
                <td>-8</td>
                <td>-8</td>
                <td>Mon-Fri 01:00-23:15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Indices;
