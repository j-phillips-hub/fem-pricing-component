import React from "react";
import PlanCard from "./PlanCard";
import "../sass/Header.scss";
import "../sass/ToggleSwitch.scss";

class MainContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      price: {
        basic: "",
        professional: "",
        master: "",
      },
    };
  }

  handleMonthly = () => {
    this.setState({
      monthly: true,
      price: {
        basic: 19.99,
        professional: 24.99,
        master: 39.99,
      },
    });
  };

  handleYearly = () => {
    this.setState({
      monthly: false,
      price: {
        basic: 199.99,
        professional: 249.99,
        master: 399.99,
      },
    });
  };

  componentDidMount() {
    this.handleMonthly();
  }

  render() {
    const { price, monthly } = this.state;
    const planCards = [
      {
        plan: "Baic",
        price: price.basic,
        storage: "500 GB Storage",
        users: "2 Users Allowed",
        speed: "Send up to 3 GB",
      },
      {
        plan: "Professional",
        price: price.professional,
        storage: "1 TB Storage",
        users: "5 Users Allowed",
        speed: "Send up to 10 GB",
      },
      {
        plan: "Master",
        price: price.master,
        storage: "2 TB Storage",
        users: "10 Users Allowed",
        speed: "Send up to 20 GB",
      },
    ];

    return (
      <main>
        <header className="header">
          <h1 className="header__heading">Our Pricing</h1>
        </header>

        <div className="billing-type">
          <p className="billing-type__length">Annually</p>
          <div className={monthly ? "toggle" : "toggle yearly"}>
            <div
              className="toggle__switch"
              onClick={monthly ? this.handleYearly : this.handleMonthly}
            ></div>
          </div>
          <p className="billing-type__length">Monthly</p>
        </div>

        <div className="cardContainer">
          {planCards.map((card, index) => {
            return (
              <React.Fragment key={index}>
                <PlanCard
                  plan={card.plan}
                  price={card.price}
                  storage={card.storage}
                  users={card.users}
                  speed={card.speed}
                />
              </React.Fragment>
            );
          })}
        </div>
      </main>
    );
  }
}

export default MainContainer;
