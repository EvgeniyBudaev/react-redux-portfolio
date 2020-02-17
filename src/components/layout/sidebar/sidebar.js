import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { CSSTransition } from 'react-transition-group';

import "./sidebar.css";
import * as classes from './sidebar.module.scss';

import { ROUTES } from "../../../util/routes";
import { sidebarClose } from "../../../actions";

const animclasses = {
  enter: classes['sidebar_enter'],
  enterActive: classes['sidebar_enter_active'],
  exit: classes['sidebar_exit'],
  exitActiv: classes['sidebar_exit_active']
}

class Sidebar extends Component {
  render() {

    const { onSidebar } = this.props;
    let classNamesSidebar = "sidebar";

    if (onSidebar) {
      classNamesSidebar += " active";
    }

    return (
      <CSSTransition
       in={classNamesSidebar}
       timeout={1000}
       classnames={animclasses}
       mountOnEnter
       unmountOnExit>
      {/* <div className={classes.sidebar}> */}
      <div className={classNamesSidebar}>
        <Link
          to={ROUTES.HOME}
          className="link1 hover-target"
          onClick={this.props.onClickLinkFromSidebar}
        >
          Главная
        </Link>
        <Link
          to={ROUTES.WORKS}
          className="link2 hover-target"
          onClick={this.props.onClickLinkFromSidebar}
        >
          Портфолио
        </Link>
        <Link
          to={ROUTES.ABOUT}
          className="link4 hover-target"
          onClick={this.props.onClickLinkFromSidebar}
        >
          Обо мне
        </Link>
        <Link
          to={ROUTES.CONTACTS}
          className="link5 hover-target"
          onClick={this.props.onClickLinkFromSidebar}
        >
          Контакты
        </Link>

        <div className="sidebar-cover">
          <div className="sidebar-cover__image-1"></div>
          <div className="sidebar-cover__image-2"></div>
          <div className="sidebar-cover__image-3"></div>
          <div className="sidebar-cover__image-5"></div>
          <div className="sidebar-cover__image-6"></div>
        </div>

        <div className="sidebar-back__title">Меню</div>
      </div>
      </CSSTransition>
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
    onClickLinkFromSidebar: () => dispatch(sidebarClose)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
