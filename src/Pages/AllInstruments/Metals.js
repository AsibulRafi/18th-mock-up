import React, { useEffect } from "react";
import forex from "./../../images/forex.png";
import metals from "./../../images/metals.png";
import indices from "./../../images/indices.png";
import equities from "./../../images/equities.png";
import cryptocurrencies from "./../../images/crypto.png";
import energies from "./../../images/energies.png";
import commodities from "./../../images/commodities.png";
import { Link } from "react-router-dom";

const Metals = () => {
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
            to="/allinstrumentsmetals"
            className="allInstruments__content-main"
          >
            <h4>Metals</h4>
            <img src={metals} alt="allInstruments" />
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
              to="/allinstrumentsindices"
              className="allInstruments__content-box"
            >
              <h4>indices</h4>
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
                <th>Lot Size Per 1Lot</th>
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
                <td>XAGUSD</td>
                <td>Silver vs US Dollar</td>
                <td>USD</td>
                <td>5000 Oz</td>
                <td>0.05 Lot</td>
                <td>100 Lot</td>
                <td>0,01</td>
                <td>-2.800000</td>
                <td>-2.400000</td>
                <td>Mon-Fri 01:00-23:59</td>
              </tr>
              <tr>
                <td>XAUUSD</td>
                <td>Gold vs US Dollar</td>
                <td>USD</td>
                <td>100 Oz</td>
                <td>0.05 Lot</td>
                <td>100 Lot</td>
                <td>0,01</td>
                <td>-38.500000</td>
                <td>-37.540000</td>
                <td>Mon-Fri 01:00-23:59</td>
              </tr>
              <tr>
                <td>XAUEUR</td>
                <td>Gold vs. Euro</td>
                <td>EUR</td>
                <td>100 Oz</td>
                <td>0.05 Lot</td>
                <td>100 Lot</td>
                <td>0,01</td>
                <td>-38.500000</td>
                <td>-37.540000</td>
                <td>Mon-Fri 01:00-23:59</td>
              </tr>
              <tr>
                <td>XAUAUD</td>
                <td>Gold vs Austrlian Dollar</td>
                <td>AUD</td>
                <td>100 Oz</td>
                <td>0.05 Lot</td>
                <td>100 Lot</td>
                <td>0,01</td>
                <td>-38.500000</td>
                <td>-37.540000</td>
                <td>Mon-Fri 01:00-23:59</td>
              </tr>

              <tr>
                <td>XAGEUR</td>
                <td>Silver vs. Euro</td>
                <td>EUR</td>
                <td>5000 Oz</td>
                <td>0.05 Lot</td>
                <td>100 Lot</td>
                <td>0,01</td>
                <td>-1.96</td>
                <td>-0.93</td>
                <td>Mon-Fri 01:00-23:59</td>
              </tr>

              <tr>
                <td>XPDUSD</td>
                <td>Palladium</td>
                <td>USD</td>
                <td>100 Oz</td>
                <td>0.05 Lot</td>
                <td>100 Lot</td>
                <td>0,01</td>
                <td>-13</td>
                <td>-23</td>
                <td>Mon-Fri 01:00-23:59</td>
              </tr>
              <tr>
                <td>XPTUSD</td>
                <td>Platinum</td>
                <td>USD</td>
                <td>100 Oz</td>
                <td>0.05 Lot</td>
                <td>100 Lot</td>
                <td>0,01</td>
                <td>-6</td>
                <td>-10</td>
                <td>Mon-Fri 01:00-23:59</td>
              </tr>
              <tr>
                <td>CPPR.f</td>
                <td>Copper CFD contract</td>
                <td>USD</td>
                <td>25000 CPU</td>
                <td>0.05 Lot</td>
                <td>100 Lot</td>
                <td>0,01</td>
                <td>-4.048</td>
                <td>-1.065</td>
                <td>Mon-Fri 01:00-23:59</td>
              </tr>
              <tr>
                <td>XAGAUD</td>
                <td>Silver vs Austrlian Dollar</td>
                <td>AUD</td>
                <td>5000 Oz</td>
                <td>0.05 Lot</td>
                <td>100 Lot</td>
                <td>0,01</td>
                <td>-1.96</td>
                <td>-0.93</td>
                <td>Mon-Fri 01:00-23:59</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Metals;
