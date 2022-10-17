import React, { useState } from "react";
import { Data } from "./data";
import { FiPlus, FiMinus } from "react-icons/fi";
const Accordion = ({ letter }) => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };
  const render = (item) => {
    return (
      <div className="accordion__dropDown">
        <p>{item?.answer}</p>
      </div>
    );
  };
  return (
    <div className="accordion__section">
      <div className="accordion__container">
        {Data[letter].map((item) => {
          return (
            <div key={item.id}>
              <div className="wrap" onClick={() => toggle(item?.id)}>
                <h1>{item?.question}</h1>
                <span>{clicked === item?.id ? <FiMinus /> : <FiPlus />}</span>
              </div>
              {clicked === item?.id ? render(item) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
