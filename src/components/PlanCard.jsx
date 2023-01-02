import React from "react";
import "../sass/PlanCard.scss";

const PlanCard = (props) => {
  const { plan, price, storage, users, speed } = props;

  const lists = [{ title: storage }, { title: users }, { title: speed }];
  return (
    <div className="planCard">
      <div className="plan">
        <h2 className="plan__type">{plan}</h2>

        <h2 className="plan__price">
          <span className="dollarSign">$</span>
          {price}
        </h2>

        <ul className="plan__list">
          {lists.map((list, index) => {
            return <li key={index}>{list.title}</li>;
          })}
        </ul>

        <button className="plan__LearnMore">LEARN MORE</button>
      </div>
    </div>
  );
};

export default PlanCard;
