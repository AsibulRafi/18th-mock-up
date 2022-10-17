import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Navbar = () => {
  return (
    <div className="wrapper">
      <nav>
        <input type="checkbox" id="show-menu" />
        <label htmlFor="show-menu" className="menu-icon">
          <i className="fas fa-bars" id="bar"></i>
        </label>
        <div className="logo">
          <Link to="/" id="logo">
            Logo
          </Link>
        </div>
        <div className="content">
          <ul className="links" id="links">
            <li>
              <Link to="/accounts" className="desktop-link" id="trading">
                Trading
              </Link>
              <input type="checkbox" id="show-trading" />
              <label htmlFor="show-trading">Trading</label>
              <ul>
                <li>
                  <Link to="/Forex">CFDs on Forex</Link>
                </li>
                <li>
                  <Link to="/Metals">CFDs on Metals</Link>
                </li>
                <li>
                  <Link to="/Indices">CFDs Indices</Link>
                </li>
                <li>
                  <Link to="/Equities">CFDs on Equities</Link>
                </li>
                <li>
                  <Link to="/Cryptocurrencies">CFDs Cryptocurrencies</Link>
                </li>
                <li>
                  <Link to="/Energies">CFDs on Energies</Link>
                </li>
                <li>
                  <Link to="/Commodities">CFDs on Commodities</Link>
                </li>
                <li>
                  <Link to="/commissions"> Commissions and swaps</Link>
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
                  <Link to="/accounts">Account types</Link>
                </li>
                <li>
                  <Link to="/comparison">Account Comparison</Link>
                </li>
                <li>
                  <Link to="/kyc">KYC Guide</Link>
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
                  <Link to="/webtrade">Web Trader</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/about" className="desktop-link" id="about">
                About Us
              </Link>
              <input type="checkbox" id="show-about" />
              <label htmlFor="show-about">About Us</label>
              <ul>
                <li>
                  <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                    About US
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => window.scrollTo(0, 1000)}>
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
                  <Link
                    to="/tradingglossary"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Trading Glossary
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tradingglossary"
                    onClick={() => window.scrollTo(0, 1000)}
                  >
                    Economical Calendar
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <button className="header__lg-btn" id="login">
                Login
              </button>
              <button className="header__oa-btn" id="open">
                Open Account
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
