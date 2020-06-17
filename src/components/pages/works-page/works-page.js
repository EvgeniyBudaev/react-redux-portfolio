import React, {Component} from "react";

import "./works-page.css";

import rosa from "./images/rosa.jpg";
import rwws from "./images/react-work-with-server.jpg";
import trafficLights from "./images/traffic_lights.jpg";
import java from "./images/java.jpg";
import swedishBitterness from "./images/swedish-bitterness.jpg";
import surf from "./images/surf.jpg";
import minimo from "./images/minimo.jpg";
import moderno from "./images/moderno.jpg";
import quiz from "./images/quiz.jpg";
import reactToDoListApp from "./images/reactToDoListApp.jpg";
import tesla from "./images/tesla.jpg";
import martaUp from "./images/martaUp.jpg";
import bisLite from "./images/bisLite.jpg";
import balloon from "./images/balloon.jpg";
import jetro from "./images/jetro.jpg";
import bali from "./images/bali.jpg";
import Card from "./card";
import stoolGroup from "./images/stoolGroup.jpg";
import sellavi from "./images/sellavi.jpg";
import excel from "./images/excel.jpg";

class WorksPage extends Component {
  state = {
    visibility: "all",
    activeClass: " active",
    cards: [
      {
        images: stoolGroup,
        category: "pageProofs",
        urlSite: "https://stool-group-e10b1.firebaseapp.com",
        urlGithub: "https://github.com/EvgeniyBudaev/StoolGroup",
        id: 1,
      },
      {
        images: bali,
        category: "pageProofs",
        urlSite: "https://bali-80a86.firebaseapp.com",
        urlGithub: "https://github.com/EvgeniyBudaev/Bali",
        id: 2,
      },
      {
        images: excel,
        category: "pageProofs",
        urlSite: "https://javascipt-excel.firebaseapp.com",
        urlGithub: "https://github.com/EvgeniyBudaev/js-excel",
        id: 3,
      },
      {
        images: surf,
        category: "pageProofs",
        urlSite: "https://westshore-8448b.firebaseapp.com",
        urlGithub: "https://github.com/EvgeniyBudaev/Surf",
        id: 4,
      },
      {
        images: sellavi,
        category: "pageProofs",
        urlSite: "https://sellavi.firebaseapp.com/",
        urlGithub: "https://github.com/EvgeniyBudaev/Sellavi",
        id: 5,
      },
      {
        images: moderno,
        category: "pageProofs",
        urlSite: "https://moderno-c05f7.firebaseapp.com",
        urlGithub: "https://github.com/EvgeniyBudaev/moderno",
        id: 6,
      },
      {
        images: quiz,
        category: "react",
        urlSite: "https://react-quiz-bb571.firebaseapp.com",
        urlGithub: "https://github.com/EvgeniyBudaev/redux-quiz",
        id: 7,
      },
      {
        images: rwws,
        category: "react",
        urlSite: "https://github.com/EvgeniyBudaev/react-work-with-server",
        urlGithub: "https://github.com/EvgeniyBudaev/react-work-with-server",
        id: 8,
      },
      {
        images: reactToDoListApp,
        category: "react",
        urlSite: "https://reacttodolistapp-dd1de.firebaseapp.com",
        urlGithub: "https://github.com/EvgeniyBudaev/React_todoListApp",
        id: 9,
      },
      {
        images: swedishBitterness,
        category: "pageProofs",
        urlSite: "https://swedish-bitterness.firebaseapp.com",
        urlGithub: "https://github.com/EvgeniyBudaev/Swedish_Bitterness",
        id: 10,
      },
      {
        images: rosa,
        category: "pageProofs",
        urlSite: "https://budaev-rosa-cd52e.firebaseapp.com",
        urlGithub: "https://github.com/EvgeniyBudaev/Rosa",
        id: 11,
      },
      {
        images: minimo,
        category: "pageProofs",
        urlSite: "https://minimo-da92b.firebaseapp.com",
        urlGithub: "https://github.com/EvgeniyBudaev/Minimo",
        id: 12,
      },
      {
        images: tesla,
        category: "pageProofs",
        urlSite: "https://tesla-d22e6.firebaseapp.com",
        urlGithub: "https://github.com/EvgeniyBudaev/Tesla",
        id: 13,
      },
      {
        images: martaUp,
        category: "pageProofs",
        urlSite: "https://martaup-fd339.firebaseapp.com",
        urlGithub: "https://github.com/EvgeniyBudaev/MartaUP",
        id: 14,
      },
      {
        images: bisLite,
        category: "pageProofs",
        urlSite: "https://bislite-9a1af.firebaseapp.com",
        urlGithub: "https://github.com/EvgeniyBudaev/BisLite",
        id: 15,
      },
      {
        images: balloon,
        category: "pageProofs",
        urlSite: "https://balloon-5f062.firebaseapp.com",
        urlGithub: "https://github.com/EvgeniyBudaev/Balloon",
        id: 16,
      },
      {
        images: jetro,
        category: "pageProofs",
        urlSite: "https://jetro-62bf2.firebaseapp.com",
        urlGithub: "https://github.com/EvgeniyBudaev/jetro",
        id: 17,
      },
      {
        images: trafficLights,
        category: "javascript",
        urlSite: "https://traffic-lights-ff7de.firebaseapp.com",
        urlGithub: "https://github.com/EvgeniyBudaev/Traffic_Lights",
        id: 18,
      },
      {
        images: java,
        category: "java",
        urlSite: "https://github.com/EvgeniyBudaev/studentsControl-localhost-",
        urlGithub:
          "https://github.com/EvgeniyBudaev/studentsControl-localhost-",
        id: 19,
      },
    ],
  };

  cardFilterAction = (event) => {
    this.setState({
      visibility: event.target.value,
    });
  };

  renderCards = () => {
    return this.state.cards
      .filter((card) => {
        return this.state.visibility !== "all"
          ? card.category === this.state.visibility
          : true;
      })
      .map((card) => {
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

  buttons = [
    {value: "all", label: "Все"},
    {value: "react", label: "React"},
    {value: "javascript", label: "JavaScript"},
    {value: "java", label: "Java"},
    {value: "pageProofs", label: "Вёрстка"},
  ];

  render() {
    const {visibility} = this.state;

    const buttons = this.buttons.map(({value, label}) => {
      const isActiveButton = visibility === value;
      const clazz = isActiveButton ? "button active" : "button";
      return (
        <li className="filter-button-group__item hover-target" key={value}>
          <button
            value={value}
            onClick={this.cardFilterAction}
            className={clazz}
          >
            {" "}
            {label}{" "}
          </button>
          {" "}
        </li>
      );
    });

    return (
      <div className="container">
        <section className="section-works">
          <div className="works-wrapper">
            <h1 className="works-title"> Галерея работ </h1>{" "}
            <div className="filters filter-button-group">
              <ul className="filter-button-group__items">
                <h4> {buttons} </h4>{" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="grid"> {this.renderCards()} </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
      </div>
    );
  }
}

export default WorksPage;
