import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./navbar.css";
import * as classes from "./navbar.module.scss";

import { ROUTES } from "../../../../util/routes";

const Navbar = ({ onSidebar }) => {
  let classNamesNavbar = "nav-menu show";

  if (onSidebar) {
    classNamesNavbar += " off";
  }

  return (
    <nav>
      <div className={classNamesNavbar}>
        <div className="nav-menu__container">
          <ul className="nav-menu__items  nav-menu__items-delay  animated fadeInUp">
            <li className="nav-menu__item hover-target">
              <Link to={ROUTES.WORKS} className={classes.link}>
                <span className="nav-span">Портфолио</span>
              </Link>
            </li>
            <li className="nav-menu__item hover-target">
              <Link to={ROUTES.ABOUT} className={classes.link}>
                <span className="nav-span">Обо мне</span>
              </Link>
            </li>
            <li className="nav-menu__item hover-target">
              <Link to={ROUTES.CONTACTS} className={classes.link}>
                <span className="nav-span">Контакты</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ onSidebar }) => {
  return {
    onSidebar
  };
};

export default connect(mapStateToProps)(Navbar);
