import React from "react";
import { Link } from "react-router-dom";
import { StockItem } from "../../data";
import "./experience.css";
const Experience = () => {
  return (
    <section className="experience">
      <h2 className="experience__heading">
        Fast order executions and Amazing <br />
        Trading Conditions
      </h2>
      <div className="experience__content">
        {StockItem.map((item) => {
          return (
            <Link
              to={item.name}
              className="experience__content-item"
              key={item.id}
            >
              <div className="experience__content-item-round">
                <img src={item.logo} alt="experienceImg" />
              </div>
              <h4>{item.name}</h4>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
