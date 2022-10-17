import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import About from "./Pages/About";
import Accounts from "./Pages/Accounts";
import Commodities from "./Pages/AllInstruments/Commodities";
import Cryptocurrencies from "./Pages/AllInstruments/Cryptocurrencies";
import Energies from "./Pages/AllInstruments/Energies";
import Equities from "./Pages/AllInstruments/Equities";
import Forex from "./Pages/AllInstruments/Forex";
import Indices from "./Pages/AllInstruments/Indices";
import Metals from "./Pages/AllInstruments/Metals";
import CFDCommodities from "./Pages/CFD/CFDCommodities";
import CFDCryptocurrencies from "./Pages/CFD/CFDCryptocurrencies";
import CFDEnergies from "./Pages/CFD/CFDEnergies";
import CFDEquities from "./Pages/CFD/CFDEquities";
import CFDForex from "./Pages/CFD/CFDForex";
import CFDIndices from "./Pages/CFD/CFDIndices";
import CFDMetals from "./Pages/CFD/CFDMetals";
import Commissions from "./Pages/Commissions";
import Comparison from "./Pages/Comparison";
import Home from "./Pages/Home";
import KYC from "./Pages/KYC";
import TradingGlossary from "./Pages/TradingGlossary";
import WebTrade from "./Pages/WebTrade";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/accounts" exact element={<Accounts />} />
        <Route path="/comparison" exact element={<Comparison />} />
        <Route path="/kyc" element={<KYC />} />
        <Route path="/webtrade" element={<WebTrade />} />
        <Route path="/tradingglossary" element={<TradingGlossary />} />
        <Route path="/commissions" element={<Commissions />} />
        <Route path="/about" element={<About />} />
        {/* CFD */}
        <Route path="/Forex" element={<CFDForex />} />
        <Route path="/Metals" element={<CFDMetals />} />
        <Route path="/Indices" element={<CFDIndices />} />
        <Route path="/Equities" element={<CFDEquities />} />
        <Route path="/Cryptocurrencies" element={<CFDCryptocurrencies />} />
        <Route path="/Energies" element={<CFDEnergies />} />
        <Route path="/Commodities" element={<CFDCommodities />} />
        {/* All Instruments  */}
        <Route path="/allinstrumentsforex" element={<Forex />} />
        <Route path="/allinstrumentsmetals" element={<Metals />} />
        <Route path="/allinstrumentsindices" element={<Indices />} />
        <Route path="/allinstrumentsequities" element={<Equities />} />
        <Route
          path="/allinstrumentscryptocurrencies"
          element={<Cryptocurrencies />}
        />
        <Route path="/allinstrumentsenergies" element={<Energies />} />
        <Route path="/allinstrumentscommodities" element={<Commodities />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
