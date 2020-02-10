import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./hamburger.css";
import './sidebar.css';
import { ROUTES } from '../../../../util/routes';

class Hamburger extends Component {
  state = {
    onSidebar: false
  };

  onHandleClickHamburger = () => {
    this.setState(({onSidebar}) => {
      return {
        onSidebar: !onSidebar
      }
    });
  };

  render() {
    const { onSidebar } = this.state;
    let classNamesHamburger = 'hamburger hover-target toggle';
    let classNamesSidebar = 'sidebar';

    if(onSidebar) {
      classNamesHamburger += ' on';
      classNamesSidebar += ' active';
    }

    return (
<Fragment>
      <div
       onClick={this.onHandleClickHamburger}
       className={classNamesHamburger}>
        <div className="hamburger__span one"></div>
        <div className="hamburger__span two"></div>
        <div className="hamburger__span three"></div>
      </div>

      <div
       className={classNamesSidebar} id="sidebar">
<Link to={ROUTES.HOME} className="link1 hover-target">
  Home
</Link>
<Link to={ROUTES.WORKS} className="link2 hover-target">
  Works
</Link>
<Link to={ROUTES.ABOUT} className="link4 hover-target">
  About
</Link>
<Link to={ROUTES.CONTACTS} className="link5 hover-target">
  Contacts
</Link>

<div className="sidebar-cover">
  <div className="sidebar-cover__image-1"></div>
  <div className="sidebar-cover__image-2"></div>
  <div className="sidebar-cover__image-3"></div>
  <div className="sidebar-cover__image-5"></div>
  <div className="sidebar-cover__image-6"></div>
</div>

<div className="sidebar-back__title">Menu</div>
</div>

</Fragment>
    );
  }
  
};

export default Hamburger;
