import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

import "./sidebar.css";

import { ROUTES } from "../../../util/routes";

class Sidebar extends Component {
  componentDidMount() {
    $(".hamburger").click(function() {
      $(this).toggleClass("on");
      $(".sidebar").toggleClass("active");
      $(".nav-menu").toggleClass("off");
      $(".aside-panel__controls").toggleClass("off");
      $(".about__slider-wrapper").toggleClass("off");
    });
  }

  render() {
    return (
      <div className="sidebar" id="sidebar">
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
    );
  }
}

export default Sidebar;
