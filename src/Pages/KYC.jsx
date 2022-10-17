import React, { useEffect } from "react";

const KYC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="kyc">
      <div className="kyc__wrapper">
        <div className="kyc__heading">
          <h2>KYC GUIDE</h2>
          <p>
            In order to be verified by the No name 1 <br />
            you will need to provide us with the following documents
          </p>
        </div>
        <div className="kyc__content">
          <div className="kyc__content-poi">
            <h2>Proof of Identity (“POI”)</h2>
            <p>
              The below documents can be accepted as proof of identity,
              certified true copy of original:
            </p>
            <h4>1. Valid National Passport, or</h4>
            <h4>2. Valid National ID Card</h4>
            <p>
              *A driving license can be accepted as a proof of identity, in
              exceptional cases.
            </p>
            <h3>Requirements to be met:</h3>
            <p>1.All 4 corners of the document must be shown;</p>
            <p>
              2.Both sides of the identification card/driving license must be
              provided.{" "}
            </p>
            <p>
              3.The identification documents should include the following
              information, in colour:
            </p>
            <ul>
              <li>Full Name</li>
              <li>Photo;</li>
              <li>Date of Birth;</li>
              <li>Place of Birth/Nationality;</li>
              <li>Unique Document Reference Number;</li>
              <li>Issuing Authority;</li>
              <li>Expiry Date;</li>
            </ul>
            <p>
              <b>Note:</b> As part of regulatory requirements, clients are
              required to provide National Client Identifier (“NCI”), and Tax
              Identification Number (“TIN”) which may be included within either
              of the above-mentioned documents. Based on client(s)’ nationality,
              additional documentation may be required such as a clear copy of a
              Citizen Card, document indicating, taxpayer card, National
              Insurance number etc.
            </p>
          </div>
          <div className="kyc__content-por">
            <h2>Proof of Residence (“POR”)</h2>
            <p>The below documents can be accepted as proof of residence:</p>
            {/* Content Single */}
            <div className="kyc__content-single-info">
              <h4>1. Utility Bill </h4>
              <p>
                Electricity Bill, Water Bill, Gas Bill, Landline Telephone Bill,
                Internet Bill, Local Authority Tax Bill or any other utility
                bill meeting these requirements:
              </p>
              <ul>
                <li>
                  Logo of the relevant authority or clear stamp indicating the
                  issuing authority
                </li>
                <li>All 4 corners of the document should be displayed;</li>
                <li>Full name of the resident;</li>
                <li>Issued within the last 6 months;</li>
                <li>Residential address; </li>
                <li>Clean colored copy</li>
              </ul>
            </div>
            <div className="kyc__content-single-info">
              <h4>2. Bank Statement </h4>
              <ul>
                <li>All 4 corners of the document should be displayed;</li>
                <li>Logo of the Bank or clear stamp of the Bank;</li>
                <li>Full name of the client;</li>
                <li>Issued within the last 6 months;</li>
                <li>Residential address; </li>
                <li>Clean colored copy</li>
              </ul>
            </div>
            <div className="kyc__content-single-info">
              <h4>3. Reference Letter </h4>
              <ul>
                <li>
                  Printed on the letterhead of the relevant
                  organization/authority and signature by an authorized officer;
                </li>
                <li>All 4 corners of the document should be displayed;</li>
                <li>Full name of the referred;</li>
                <li>Issued within the last 6 months;</li>
                <li>Residential address; </li>
                <li>Clean colored copy</li>
              </ul>
            </div>
            <div className="kyc__content-single-info">
              <h4>4. Affidavit </h4>
              <ul>
                <li>Notarized by a public notary or a government authority;</li>
                <li>All 4 corners of the document should be displayed;</li>
                <li>Full name </li>
                <li>Issued within the last 6 months;</li>
                <li>Residential address; </li>
                <li>Clean colored copy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KYC;
