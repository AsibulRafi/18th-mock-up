import React, { useEffect } from "react";
import forex from "./../../images/forex.png";
import metals from "./../../images/metals.png";
import indices from "./../../images/indices.png";
import equities from "./../../images/equities.png";
import cryptocurrencies from "./../../images/crypto.png";
import energies from "./../../images/energies.png";
import commodities from "./../../images/commodities.png";
import { Link } from "react-router-dom";

const Forex = () => {
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
                <th>Descripion</th>
                <th>Position Size Per Lot</th>
                <th>1 Pip Value Per Lot</th>
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
                <td>EURUSD</td>
                <td>Euro vs US Dollar</td>
                <td>100000 EUR</td>
                <td>10USD</td>
                <td>0.01 Lots</td>
                <td>50 Lots</td>
                <td>0,01</td>
                <td>-10.315</td>
                <td>-7.5959</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>GBPUSD</td>
                <td>Great Britan Pound vs US Dollar</td>
                <td>100000 GBP</td>
                <td>10 USD</td>
                <td>0.01 Lots</td>
                <td>50 Lots</td>
                <td>0,01</td>
                <td>-9.03</td>
                <td>-2.3</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>USDCAD</td>
                <td>US Dollar vs Canadian Dollar</td>
                <td>100000 USD</td>
                <td>10 CAD</td>
                <td>0.01 Lots</td>
                <td>50 Lots</td>
                <td>0,01</td>
                <td>-2</td>
                <td>-5.6</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>USDJPY</td>
                <td>US Dollar vs Japanese Yen</td>
                <td>100000 USD</td>
                <td>1000 JPY</td>
                <td>0.01 Lots</td>
                <td>50 Lots</td>
                <td>0,01</td>
                <td>-7.956</td>
                <td>-18.253</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>USDCHF</td>
                <td>US Dollar vs Swiss Franc</td>
                <td>100000 USD</td>
                <td>10 CHF</td>
                <td>0.01 Lots</td>
                <td>50 Lots</td>
                <td>0,01</td>
                <td>-8.48</td>
                <td>-17.97</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>EURAUD</td>
                <td>Euro vs Australian Dollar</td>
                <td>100000 EUR</td>
                <td>10 AUD</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-6.67</td>
                <td>-1.9705</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>EURCAD</td>
                <td>Euro vs Canadian Dollar</td>
                <td>100000 EUR</td>
                <td>10 CAD</td>
                <td>0.01 Lots</td>
                <td>50 Lots</td>
                <td>0,01</td>
                <td>-1.244</td>
                <td>-0.194</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>EURCHF</td>
                <td>Euro vs Swiss Franc</td>
                <td>100000 EUR</td>
                <td>10 CHF</td>
                <td>0.01 Lots</td>
                <td>50 Lots</td>
                <td>0,01</td>
                <td>-0.327</td>
                <td>-8</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>EURGBP</td>
                <td>Euro vs Great Britan Pound</td>
                <td>100000 EUR</td>
                <td>10 GBP</td>
                <td>0.01 Lots</td>
                <td>50 Lots</td>
                <td>0,01</td>
                <td>-4.1</td>
                <td>-2</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>EURJPY</td>
                <td>Euro vs Japanese Yen</td>
                <td>100000 EUR</td>
                <td>1000 JPY</td>
                <td>0.01 Lots</td>
                <td>50 Lots</td>
                <td>0,01</td>
                <td>-3.425</td>
                <td>-3.16</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>GBPAUD</td>
                <td>Great British Pound vs Australian Dollar</td>
                <td>100000 GBP</td>
                <td>10USD</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-13.49</td>
                <td>-8.4333</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>GBPCAD</td>
                <td>Great Britan Pound vs Canadian Dollar</td>
                <td>100000 GBP</td>
                <td>10CAD</td>
                <td>0.01 Lots</td>
                <td>50 Lots</td>
                <td>0,01</td>
                <td>-9.865</td>
                <td>-3</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>GBPCHF</td>
                <td>Great Britan Pound vs Swiss Franc</td>
                <td>100000 GBP</td>
                <td>10 CHF</td>
                <td>0.01 Lots</td>
                <td>50 Lots</td>
                <td>0,01</td>
                <td>-6</td>
                <td>-15</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>GBPJPY</td>
                <td>Great Britan Pound vs Japanese Yen</td>
                <td>100000 GBP</td>
                <td>1000 JPY</td>
                <td>0.01 Lots</td>
                <td>50 Lots</td>
                <td>0,01</td>
                <td>-1.815</td>
                <td>-8.475</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>AUDUSD</td>
                <td>Australian Dollar vs US Dollar</td>
                <td>100000 AUD</td>
                <td>10 USD</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-2</td>
                <td>-5.15</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>CHFJPY</td>
                <td>Swiss Franc vs Japanese Yen</td>
                <td>100000 CHF</td>
                <td>1000 JPY</td>
                <td>0.01 Lots</td>
                <td>50 Lots</td>
                <td>0,01</td>
                <td>-6.32</td>
                <td>0.8</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>AUDJPY</td>
                <td>Australian Dollar vs Japanese Yen</td>
                <td>100000 AUD</td>
                <td>1000 JPY</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-4.46</td>
                <td>-6.01</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>AUDCHF</td>
                <td>Australian Dollar vs Swiss Franc</td>
                <td>100000 AUD</td>
                <td>10 CHF</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-5.17</td>
                <td>-6.58</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>AUDCAD</td>
                <td>Australian Dollar vs Canadian Dollar</td>
                <td>100000 AUD</td>
                <td>10 CAD</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-7.42</td>
                <td>-6.16</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>AUDNZD</td>
                <td>Australian Dollar vs New Zealand Dollar</td>
                <td>100000 AUD</td>
                <td>10 NZD</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>

                <td>0,01</td>
                <td>-7.21</td>
                <td>-9.28</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>AUDSGD</td>
                <td>Australian Dollar vs Singapore Dollar</td>
                <td>100000 AUD</td>
                <td>10 SGD</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-10.25</td>
                <td>-10.76</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>CADCHF</td>
                <td>Canadian Dollar vs Swiss Franc</td>
                <td>100000 CAD</td>
                <td>10 CHF</td>
                <td>0.01 Lots</td>
                <td>50 Lots</td>
                <td>0,01</td>
                <td>-3.15</td>
                <td>-11.45</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>CADJPY</td>
                <td>Canadian Dollar vs Japanese Yen</td>
                <td>100000 CAD</td>
                <td>1000 JPY</td>
                <td>0.01 Lots</td>
                <td>50 Lots</td>
                <td>0,01</td>
                <td>-3.1</td>
                <td>-9.65</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>EURNOK</td>
                <td>Euro vs Norwegian Krona</td>
                <td>100000 EUR</td>
                <td>10 NOK</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-100.8</td>
                <td>-44.35</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>EURNZD</td>
                <td>Euro vs New Zealand Dollar</td>
                <td>100000 EUR</td>
                <td>10 NZD</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-10</td>
                <td>-13</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>EURSEK</td>
                <td>Euro vs Swedish Krona</td>
                <td>100000 EUR</td>
                <td>10 SEK</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-73</td>
                <td>-81.38</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>EURSGD</td>
                <td>Euro vs Singapore Dollar</td>
                <td>100000 EUR</td>
                <td>10 SGD</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-9.38</td>
                <td>0.2</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>GBPNZD</td>
                <td>Great Britan Pound vs New Zealand Dollar</td>
                <td>100000 GBP</td>
                <td>10 NZD</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-15</td>
                <td>-12</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>GBPSGD</td>
                <td>Great Britan Pound vs Singapore Dollar</td>
                <td>100000 GBP</td>
                <td>10 SGD</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-8</td>
                <td>-25</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>NZDCAD</td>
                <td>New Zealand Dollar vs Canadian Dollar</td>
                <td>100000 NZD</td>
                <td>10 CAD</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-7</td>
                <td>-5</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>NZDCHF</td>
                <td>New Zealand Dollar vs Swiss Franc</td>
                <td>100000 NZD</td>
                <td>10 CHF</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-5.6251</td>
                <td>-5.7907</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>NZDJPY</td>
                <td>New Zealand Dollar vs Japanese Yen</td>
                <td>100000 NZD</td>
                <td>1000 JPY</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-7</td>
                <td>-9.315</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>NZDUSD</td>
                <td>New Zealand Dollar vs US Dollar</td>
                <td>100000 NZD</td>
                <td>10 USD</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-9.0444</td>
                <td>-6.8295</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>USDHKD</td>
                <td>US Dollar vs Hong Kong Dollar</td>
                <td>100000 USD</td>
                <td>10 HKD</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-3.5133</td>
                <td>-60.54</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>USDNOK</td>
                <td>US Dollar vs Norwegian Krona</td>
                <td>100000 USD</td>
                <td>10 NOK</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-88</td>
                <td>-45</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>USDSEK</td>
                <td>US Dollar vs Swedish Krona</td>
                <td>100000 USD</td>
                <td>10 SEK</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-66</td>
                <td>-88</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>USDSGD</td>
                <td>US Dollar vs Singapore Dollar</td>
                <td>100000 USD</td>
                <td>10 SGD</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-10.25</td>
                <td>-10.76</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>EURCZK</td>
                <td>Euro vs Czech Koruna</td>
                <td>100000 EUR</td>
                <td>10 CZK</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-9</td>
                <td>-9</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>EURHUF</td>
                <td>Euro vs Hungarian Forint</td>
                <td>100000 EUR</td>
                <td>10 HUF</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>35</td>
                <td>-65.07</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>EURPLN</td>
                <td>Euro vs Polish Zloty</td>
                <td>100000 EUR</td>
                <td>10 PLN</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-37</td>
                <td>-13</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>EURTRY</td>
                <td>Euro vs Turkish Lira</td>
                <td>100000 EUR</td>
                <td>10 TRY</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-169.16</td>
                <td>60</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>GBPNOK</td>
                <td>Great Britan Pound vs Norwegian Krona</td>
                <td>100000 GBP</td>
                <td>10 NOK</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>25</td>
                <td>-48</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>GBPSEK</td>
                <td>Great Britan Pound vs Swedish Kroner</td>
                <td>100000 GBP</td>
                <td>10 SEK</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-6.89</td>
                <td>-91</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>NOKSEK</td>
                <td>Norwegian Krona vs Swedish Krona</td>
                <td>100000 NOK</td>
                <td>10 SEK</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-1.08</td>
                <td>-11.08</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>SGDJPY</td>
                <td>Singapore Dollar vs Japanese Yen</td>
                <td>100000 SGD</td>
                <td>1000 JPY</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>0.41</td>
                <td>-7.74</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>TRYJPY</td>
                <td>Turkish Lira vs Japanese Yen</td>
                <td>100000 TRY</td>
                <td>10 TRY</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-25.55</td>
                <td>-23.22</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>USDCNH</td>
                <td>US Dollar vs RMB Chinese Renminbi</td>
                <td>100000 USD</td>
                <td>10 CNH</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-40.80</td>
                <td>2.13</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>USDCZK</td>
                <td>US Dollar vs Czech Koruna</td>
                <td>100000 USD</td>
                <td>10 CZK</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>2.00</td>
                <td>-108.00</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>USDHUF</td>
                <td>US Dollar vs Hungarian Forint</td>
                <td>100000 USD</td>
                <td>10 HUF</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-40.00</td>
                <td>-80.00</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>USDMXN</td>
                <td>US Dollar vs Mexican Peso</td>
                <td>100000 USD</td>
                <td>10 MXN</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-584.10</td>
                <td>57.11</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>USDPLN</td>
                <td>US Dollar vs Polish Zloty</td>
                <td>100000 USD</td>
                <td>10 PLN</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-37</td>
                <td>-13</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>USDRUB</td>
                <td>US Dollar vs Russian Ruble</td>
                <td>100000 USD</td>
                <td>10 RUB</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-120</td>
                <td>25</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>USDTRY</td>
                <td>US Dollar vs Turkish Lira</td>
                <td>100000 USD</td>
                <td>1000 JPY</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-141.48</td>
                <td>70.40</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>USDZAR</td>
                <td>US Dollar vs South African Rand</td>
                <td>100000 USD</td>
                <td>10 ZAR</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-411.45</td>
                <td>40.21</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>ZARJPY</td>
                <td>South African Rand vs Japanise Yen</td>
                <td>100000 ZAR</td>
                <td>1000 JPY</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>6.98</td>
                <td>-38.96</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>AUDNOK</td>
                <td>Australian Dollar vs Norwegian Krone</td>
                <td>100000 AUD</td>
                <td>10 NOK</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-110.8</td>
                <td>-44.35</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>EURZAR</td>
                <td>Euro vs South African Rand</td>
                <td>100000 EUR</td>
                <td>10 ZAR</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-590.80</td>
                <td>130.00</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>NOKJPY</td>
                <td>Norwegian Krona vs Swiss Franc</td>
                <td>100000 NOK</td>
                <td>1000 JPY</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-9.80</td>
                <td>-93.80</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>GBPHUF</td>
                <td>Great Britain Pound vs Hungarian Forint</td>
                <td>100000 GBP</td>
                <td>10 HUF</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>34</td>
                <td>-83</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>GBPMXN</td>
                <td>Great Britain Pound vs Mexican Peso</td>
                <td>100000 GBP</td>
                <td>10 MXN</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-120</td>
                <td>-200</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>GBPPLN</td>
                <td>Great Britain Pound vs Polish Zloty</td>
                <td>100000 GBP</td>
                <td>10 PLN</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-37</td>
                <td>-13</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>GBPTRY</td>
                <td>Great Britain Pound vs New Turkish Lira</td>
                <td>100000 GBP</td>
                <td>10 TRY</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>120.00</td>
                <td>86.00</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>MXNJPY</td>
                <td>Mexican Peso vs Japanese Yen</td>
                <td>100000 MXN</td>
                <td>10 TRY</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-58.000000</td>
                <td>-65.000000</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>USDRON</td>
                <td>US Dollar vs Romanian New Leu</td>
                <td>100000 USD</td>
                <td>10 RON</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-44</td>
                <td>-18</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>CADSGD</td>
                <td>Canada Dollar vs Singapore Dollar</td>
                <td>100000 CAD</td>
                <td>10 SGD</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-6.82</td>
                <td>-2.80</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>CHFSGD</td>
                <td>Swiss Frank vs Singapore Dollar</td>
                <td>100000 CHF</td>
                <td>10 SGD</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-18.88</td>
                <td>0.07</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>EURRON</td>
                <td>Euro vs Romanian New Leu</td>
                <td>100000 EUR</td>
                <td>10 RON</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-53</td>
                <td>-18</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
              <tr>
                <td>AUDSEK</td>
                <td>Australian Dollar vs Swedish Krona</td>
                <td>100000 AUD</td>
                <td>10 SEK</td>
                <td>0.01 Lots</td>
                <td>30 Lots</td>
                <td>0,01</td>
                <td>-73</td>
                <td>-81.38</td>
                <td>Mon-Fri 00:00-23:58</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Forex;
