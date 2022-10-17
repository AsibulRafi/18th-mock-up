import React, { useEffect } from "react";
import forex from "./../../images/forex.png";
import metals from "./../../images/metals.png";
import indices from "./../../images/indices.png";
import equities from "./../../images/equities.png";
import cryptocurrencies from "./../../images/crypto.png";
import energies from "./../../images/energies.png";
import commodities from "./../../images/commodities.png";
import { Link } from "react-router-dom";

const Commodities = () => {
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
            to="/allinstrumentsforex"
            className="allInstruments__content-main"
          >
            <h4>Forex</h4>
            <img src={forex} alt="allInstruments" />
          </Link>
          <div className="allInstruments__content-boxs">
            {/* Box Single */}
            <Link
              to="/allinstrumentsmetals"
              className="allInstruments__content-box"
            >
              <h4>Metals</h4>
              <img src={metals} alt="allInstruments" />
            </Link>
            <Link
              to="/allinstrumentsindices"
              className="allInstruments__content-box"
            >
              <h4>Indices</h4>
              <img src={indices} alt="allInstruments" />
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
                <td>COCOA</td>
                <td>Cocoa CFD contract</td>
                <td>USD</td>
                <td>Number of Contracts * Market Price*10 Metric Tons</td>
                <td>1 Lots</td>
                <td>500 Lots</td>
                <td>0,1</td>
                <td>-3.445</td>
                <td>-8.804</td>
                <td>Mon-Fri 11:45-20:30</td>
              </tr>
              <tr>
                <td>COFFEE</td>
                <td>Coffee CFD contract</td>
                <td>USD</td>
                <td>Number of Contracts * Market Price*375 LB</td>
                <td>1 Lots</td>
                <td>500 Lots</td>
                <td>0,1</td>
                <td>-1.579</td>
                <td>-0.416</td>
                <td>Mon-Fri 11:15-20:30</td>
              </tr>
              <tr>
                <td>NATGAS.f</td>
                <td>Natural Gas CFD contract</td>
                <td>USD</td>
                <td>10000</td>
                <td>1 Lots</td>
                <td>500 Lots</td>
                <td>0.10</td>
                <td>-0.14</td>
                <td>-0.12</td>
                <td>Mon-Fri 01:00 - 24:00</td>
              </tr>
              <tr>
                <td>SOYBEAN</td>
                <td>Soybean CFD contract</td>
                <td>USD</td>
                <td>Number of Contracts * Market Price*50 Bushels</td>
                <td>1 Lots</td>
                <td>500 Lots</td>
                <td>0,1</td>
                <td>-13.595</td>
                <td>-3.578</td>
                <td>Mon-Fri 03:15:45, 16:30-21:15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Commodities;
