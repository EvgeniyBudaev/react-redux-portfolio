import React, { Component } from "react";

import "./works-page.css";

import rosa from "./images/rosa.jpg";
import rwws from "./images/react-work-with-server.jpg";
import trafficLights from "./images/traffic_lights.jpg";
import java from "./images/java.jpg";
import swedishBitterness from "./images/swedish-bitterness.jpg";
import Card from "./card";

class WorksPage extends Component {
  state = {
    visibility: "all",
    activeClass: ' active',
    cards: [
      {
        images: rosa,
        category: "pageProofs",
        urlSite: "https://budaev-rosa-cd52e.firebaseapp.com",
        urlGithub: "https://github.com/EvgeniyBudaev/Rosa",
        id: 1
      },
      {
        images: rwws,
        category: "react",
        urlSite: "https://react-work-with-server.firebaseapp.com",
        urlGithub: "https://github.com/EvgeniyBudaev/react-work-with-server",
        id: 2
      },
      {
        images: trafficLights,
        category: "javascript",
        urlSite: "https://traffic-lights-ff7de.firebaseapp.com",
        urlGithub: "https://github.com/EvgeniyBudaev/Traffic_Lights",
        id: 3
      },
      {
        images: java,
        category: "java",
        urlSite: "https://github.com/EvgeniyBudaev/studentsControl-localhost-",
        urlGithub:
          "https://github.com/EvgeniyBudaev/studentsControl-localhost-",
        id: 4
      },
      {
        images: swedishBitterness,
        category: "pageProofs",
        urlSite: "https://swedish-bitterness.firebaseapp.com",
        urlGithub: "https://github.com/EvgeniyBudaev/Swedish_Bitterness",
        id: 5
      }
    ]
  };

  cardFilterAction = event => {
    this.setState({
      visibility: event.target.value,
    });
  };

  renderCards = () => {
    return this.state.cards
      .filter(card => {
        return this.state.visibility !== "all"
          ? card.category === this.state.visibility
          : true;
      })
      .map(card => {
        return (
          <Card
            images={card.images}
            category={card.category}
            urlSite={card.urlSite}
            urlGithub={card.urlGithub}
            id={card.id}
            key={card.id}
          />
        );
      });
  };

  componentDidUpdate() {
    this.renderCards();
  }

  render() {
    const classNames = "button active";
    return (
      <div className="container">
        <section className="section-works">
          <div className="works-wrapper">
            <h1 className="works-title">Галерея работ</h1>

            <div className="filters filter-button-group">
              <ul className="filter-button-group__items">
                <h4>
                  <li className="filter-button-group__item active hover-target">
                    <button
                      value="all"
                      onClick={this.cardFilterAction}
                      className={classNames}
                    >
                      Все
                    </button>
                  </li>

                  <li className="filter-button-group__item hover-target">
                    <button
                      value="react"
                      onClick={this.cardFilterAction}
                      className="button"
                    >
                      React
                    </button>
                  </li>

                  <li className="filter-button-group__item hover-target">
                    <button
                      value="javascript"
                      onClick={this.cardFilterAction}
                      className="button"
                    >
                      JavaScript
                    </button>
                  </li>

                  <li className="filter-button-group__item hover-target">
                    <button
                      value="java"
                      onClick={this.cardFilterAction}
                      className="button"
                    >
                      Java
                    </button>
                  </li>

                  <li className="filter-button-group__item hover-target">
                    <button
                      value="pageProofs"
                      onClick={this.cardFilterAction}
                      className="button"
                    >
                      Вёрстка
                    </button>
                  </li>
                </h4>
              </ul>
            </div>

            <div className="grid">{this.renderCards()}</div>
          </div>
        </section>
      </div>
    );
  }
}

export default WorksPage;
