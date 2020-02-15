import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import "./hamburger.css";

import { sidebarOpen } from "../../../../actions";

class Hamburger extends Component {
  render() {
    const { onSidebar } = this.props;
    let classNamesHamburger = "hamburger hover-target toggle";

    if (onSidebar) {
      classNamesHamburger += " on";
    } else {
      classNamesHamburger = "hamburger hover-target toggle";
    }

    return (
      <Fragment>
        <div
          onClick={this.props.onHandleClickHamburger}
          className={classNamesHamburger}
        >
          <div className="hamburger__span one"></div>
          <div className="hamburger__span two"></div>
          <div className="hamburger__span three"></div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ onSidebar }) => {
  return {
    onSidebar
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onHandleClickHamburger: () => dispatch(sidebarOpen)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);
