import React from "react";
import "./button.css";
const Button = ({ button1, button2 }) => {
  return (
    <div className="button-container">
      <button className="button1">{button1}</button>
      <button className="button2">{button2}</button>
    </div>
  );
};

export default Button;
