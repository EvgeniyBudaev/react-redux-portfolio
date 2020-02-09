import React, { Component } from "react";
import { Link } from 'react-router-dom';
import $ from "jquery";

import "./works-page.css";

import rosa from './rosa.jpg';
import { ROUTES } from '../../../util/routes';

class WorksPage extends Component {
  componentDidMount() {
// $(document).ready(function() {
//   $(".grid").isotope({
//     itemSelector: ".item"
//   });

//   $(".filter-button-group").on("click", "li", function() {
//     var filterValue = $(this).attr("data-filter");
//     $(".grid").isotope({
//       filter: filterValue
//     });
//     $(".filter-button-group li").removeClass("active");
//     $(this).addClass("active");
//   });
// });
  }

  render() {
    return (
      <div className="container">
        <section className="section-works">
          <div className="works-wrapper">
            <h1 className="works-title">Works</h1>

            <div className="filters filter-button-group">
              <ul className="filter-button-group__items">
                <h4>
                  <li
                    className="filter-button-group__item active hover-target"
                    data-filter="*"
                  >
                    All
                  </li>
                  <li
                    className="filter-button-group__item hover-target"
                    data-filter=".react"
                  >
                    React
                  </li>
                  <li
                    className="filter-button-group__item hover-target"
                    data-filter=".vue"
                  >
                    Vue
                  </li>
                  <li
                    className="filter-button-group__item hover-target"
                    data-filter=".javascript"
                  >
                    Javascript
                  </li>
                  <li
                    className="filter-button-group__item hover-target"
                    data-filter=".java"
                  >
                    Java
                  </li>
                  <li
                    className="filter-button-group__item hover-target"
                    data-filter=".pageProofs"
                  >
                    Page-proofs
                  </li>
                </h4>
              </ul>
            </div>

            <div className="grid">
              <div className="content pageProofs item">
                <Link to={ROUTES.ROSA} target="_blank">
                  <img src={rosa}></img>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default WorksPage;
