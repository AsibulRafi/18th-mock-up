import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../../images/logo.png";
import "./style.css";
const Navbar = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="wrapper">
      <nav>
        <input
          type="checkbox"
          id="show-menu"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="show-menu" className="menu-icon">
          <i className="fas fa-bars" id="bar"></i>
        </label>
        <div className="logo">
          <Link to="/" id="logo">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="content">
          <ul className="links" id="links">
            <li>
              <Link
                to="/"
                className="desktop-link"
                onClick={(event) => event.preventDefault()}
                id="trading"
              >
                Trading
              </Link>
              <input type="checkbox" id="show-trading" />
              <label htmlFor="show-trading">Trading</label>
              <ul>
                <li>
                  <Link to="/Forex" onClick={() => setChecked(false)}>
                    CFDs on Forex
                  </Link>
                </li>
                <li>
                  <Link to="/Metals" onClick={() => setChecked(false)}>
                    CFDs on Metals
                  </Link>
                </li>
                <li>
                  <Link to="/Indices" onClick={() => setChecked(false)}>
                    CFDs on Indices
                  </Link>
                </li>
                <li>
                  <Link to="/Equities" onClick={() => setChecked(false)}>
                    CFDs on Equities
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Cryptocurrencies"
                    onClick={() => setChecked(false)}
                  >
                    CFDs on Cryptocurrencies
                  </Link>
                </li>
                <li>
                  <Link to="/Energies" onClick={() => setChecked(false)}>
                    CFDs on Energies
                  </Link>
                </li>
                <li>
                  <Link to="/Commodities" onClick={() => setChecked(false)}>
                    CFDs on Commodities
                  </Link>
                </li>
                <li>
                  <Link to="/commissions" onClick={() => setChecked(false)}>
                    Commissions and swaps
                  </Link>
                </li>
              </ul>
            </li>
            {/* Another Nav */}
            <li>
              <Link to="/accounts" className="desktop-link" id="accounts">
                Accounts
              </Link>
              <input type="checkbox" id="show-accounts" />
              <label htmlFor="show-accounts">Accounts</label>
              <ul>
                <li>
                  <Link to="/accounts#types" onClick={() => setChecked(false)}>
                    Account types
                  </Link>
                </li>
                <li>
                  <Link
                    to="/accounts#accFunding"
                    onClick={() => setChecked(false)}
                  >
                    Account Funding
                  </Link>
                </li>
                <li>
                  <Link to="/comparison" onClick={() => setChecked(false)}>
                    Account Comparison
                  </Link>
                </li>
                <li>
                  <Link to="/kyc" onClick={() => setChecked(false)}>
                    KYC Guide
                  </Link>
                </li>
              </ul>
            </li>
            {/* Another Nav */}
            <li>
              <Link to="/webtrade" className="desktop-link" id="webtrade">
                Trading Platforms
              </Link>
              <input type="checkbox" id="show-platform" />
              <label htmlFor="show-platform">Trading Platforms</label>
              <ul>
                <li>
                  <Link to="/webtrade" onClick={() => setChecked(false)}>
                    Web Trader
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/about#about" className="desktop-link" id="about">
                About Us
              </Link>
              <input type="checkbox" id="show-about" />
              <label htmlFor="show-about">About Us</label>
              <ul>
                <li>
                  <Link to="/about#about" onClick={() => setChecked(false)}>
                    About US
                  </Link>
                </li>
                <li>
                  <Link to="/about#contact" onClick={() => setChecked(false)}>
                    Contact US
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/tradingglossary" className="desktop-link" id="tools">
                Tools
              </Link>
              <input type="checkbox" id="show-tools" />
              <label htmlFor="show-tools">Tools</label>
              <ul>
                <li>
                  <Link to="/tradingglossary" onClick={() => setChecked(false)}>
                    Trading Glossary
                  </Link>
                </li>
                <li>
                  <Link to="/tradingglossary" onClick={() => setChecked(false)}>
                    Economical Calendar
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">
                <button className="header__lg-btn" id="login">
                  Login
                </button>
              </a>
              <a href="/">
                <button className="header__oa-btn" id="open">
                  Open Account
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
