import React, { Component, Fragment } from "react";

import "./card.css";

class Card extends Component {
  render() {
    const { images, urlSite, urlGithub } = this.props;
    return (
      <Fragment>
        <div key={this.props.category} className="content item">
          <a href={urlSite} target="blank">
            <img src={images} alt="images"></img>
          </a>
          <div className="section__btn-container">
            <a href={urlGithub} className="btn" target="blank">
               GitHub
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Card;
