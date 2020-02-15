import React, { Component } from "react";

import "./works-page.css";

import rosa from './images/rosa.jpg';
import Card from './card';

class WorksPage extends Component {

  state = {
    visibility: "all",
    cards: [
      { images: rosa, category: 'pageProofs', id: 1 }

    ]
  };

  cardFilterAction = ( event ) => {
    this.setState({
      visibility: event.target.value
    });
  };

  renderCards = () => {
    return this.state.cards
      .filter( ( card ) => {
        return (this.state.visibility !== 'all') ? (card.category === this.state.visibility ) : true;       
      })
      .map( ( card ) => {
        return (<Card images={card.images} category={card.category} id={card.id} key={card.id} />);
      });
  };
  
  componentDidUpdate() {
    this.renderCards()
  }

  render() {
    return (
      <div className="container">
        <section className="section-works">
          <div className="works-wrapper">
            <h1 className="works-title">Галерея работ</h1>

            <div className="filters filter-button-group">
              <ul className="filter-button-group__items">
                <h4>

                  <li
                    className="filter-button-group__item active hover-target">
                    <button value="all" 
                            onClick={this.cardFilterAction}
                            className="button active ">
                      Все
                    </button>  
                  </li>

                  <li
                    className="filter-button-group__item hover-target">
                    <button value="react" 
                            onClick={this.cardFilterAction}
                            className="button">
                      React
                    </button>                    
                  </li>

                  <li
                    className="filter-button-group__item hover-target">
                   <button value="vue" 
                           onClick={this.cardFilterAction}
                           className="button">
                     Vue
                    </button>
                  </li>
                  <li
                    className="filter-button-group__item hover-target">
                    <button value="javascript" 
                            onClick={this.cardFilterAction}
                            className="button">
                     JavaScript
                    </button>
                  </li>

                  <li
                    className="filter-button-group__item hover-target">
                    <button value="java" 
                            onClick={this.cardFilterAction}
                            className="button">
                     Java
                    </button>
                  </li>

                  <li
                    className="filter-button-group__item hover-target">
                      <button value="pageProofs" 
                              onClick={this.cardFilterAction}
                              className="button">
                     Page-proofs
                    </button>                
                  </li>

                </h4>
              </ul>
            </div>

            <div className="grid">             
              { this.renderCards() }
            </div>

          </div>
        </section>
      </div>
    );
  }
}

export default WorksPage;
