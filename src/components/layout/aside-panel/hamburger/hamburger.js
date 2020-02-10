import React, { Component, Fragment } from "react";
import "./hamburger.css";

class Hamburger extends Component {

  render() {
    const { onSidebar } = this.props;
    let classNamesHamburger = 'hamburger hover-target toggle';

    if(onSidebar) {
      classNamesHamburger += ' on';
    }

    return (
<Fragment>
      <div
       onClick={this.props.onHandleClickHamburger}
       className={classNamesHamburger}>
        <div className="hamburger__span one"></div>
        <div className="hamburger__span two"></div>
        <div className="hamburger__span three"></div>
      </div>
</Fragment>
    );
  }
};

export default Hamburger;
