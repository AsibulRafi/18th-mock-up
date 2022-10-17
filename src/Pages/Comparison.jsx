import React, { useEffect, useState } from "react";
import BronzeAccount from "../Components/Comparison/BronzeAccount";
import GoldAccount from "../Components/Comparison/GoldAccount";
import SilverAccount from "../Components/Comparison/SilverAccount";
const Comparison = () => {
  const [selectedAccounts, setSelectedAccounts] = useState("BronzeAccount");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const accounts = {
    BronzeAccount: <BronzeAccount />,
    SilverAccount: <SilverAccount />,
    GoldAccount: <GoldAccount />,
  };
  return (
    <>
      <section className="account__comparison__heading">
        <div className="account__comparison__heading-wrapper">
          <div className="account__comparison__heading-content">
            <h2>ACCOUNT COMPARISON</h2>
            <p>
              No name 1 offers 3 different account types to his customers which
              are tailored with the different <br />
              needs of traders with diverse backgrounds and experiences.
              <br />
              Check them bellow and choose the best one for you!
            </p>
          </div>
        </div>
      </section>
      <section className="account__comparison">
        <div className="account__comparison__wrapper">
          <div className="account__comparison-content">
            <button
              className={
                selectedAccounts === "BronzeAccount"
                  ? "account__comparison-content_button fbtn_active"
                  : "account__comparison-content_button"
              }
              onClick={() => setSelectedAccounts("BronzeAccount")}
            >
              Bronze
            </button>
            <button
              className={
                selectedAccounts === "SilverAccount"
                  ? "account__comparison-content_button fbtn_active"
                  : "account__comparison-content_button"
              }
              onClick={() => setSelectedAccounts("SilverAccount")}
            >
              Silver
            </button>
            <button
              className={
                selectedAccounts === "GoldAccount"
                  ? "account__comparison-content_button fbtn_active"
                  : "account__comparison-content_button"
              }
              onClick={() => setSelectedAccounts("GoldAccount")}
            >
              Gold
            </button>
          </div>
          <div className="financial__heading">
            <h2>Forex Pairs</h2>
          </div>
          <div className="financial-table">{accounts[selectedAccounts]}</div>
        </div>
      </section>
    </>
  );
};

export default Comparison;
