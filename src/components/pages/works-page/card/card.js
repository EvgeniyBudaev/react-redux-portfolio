import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './card.css'
import { ROUTES } from '../../../../util/routes';

class Card extends Component {
  constructor( props ) {
    super( props );
  }
  render() {
    const { images, id} = this.props;
    return (
      <div key={ this.props.category} className="content pageProofs item">
        
        <Link to={ROUTES.ROSA} target="_blank">
          <img src={images}></img>
        </Link>
        
      </div>
    )
  };
};

export default Card;