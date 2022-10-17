import React from "react";

const Call = () => {
  return (
    <>
      <div className="contact__content-form">
        <form>
          <input type="text" name="firstName" placeholder="First Name" />
          <input type="text" name="lastName" placeholder="Last Name" />
          <input type="text" name="email" placeholder="Email Address" />
          <input type="text" name="phone" placeholder="Phone Number" />
          <div className="form-check">
            <input type="checkbox" name="checkbox" />
            <p>
              I have read and accept the Client Agreement and Risk Disclosure of
              the Company
            </p>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Call;
