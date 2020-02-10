import React from "react";
import { Link } from 'react-router-dom';

import "./navbar.css";
import * as classes from './navbar.module.scss';

import { ROUTES } from '../../../../util/routes';

const Navbar = ({ onSidebar }) => {
  let classNamesNavbar = 'nav-menu show';

  if(onSidebar) {
    classNamesNavbar += ' off';
  }

  return (
    <nav>
      <div className={classNamesNavbar}>
        <div className="nav-menu__container">
          <ul className="nav-menu__items  nav-menu__items-delay  animated fadeInUp">
            <li className="nav-menu__item hover-target">
              <Link to={ROUTES.WORKS} className={classes.link} exact>
                <span className="nav-span">Works</span>
              </Link>
            </li>
            <li className="nav-menu__item hover-target">
              <Link to={ROUTES.ABOUT} className={classes.link} exact>
                <span className="nav-span">About</span>
              </Link>
            </li>
            <li className="nav-menu__item hover-target">
              <Link to={ROUTES.CONTACTS} className={classes.link} exact>
                <span className="nav-span">Contacts</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
