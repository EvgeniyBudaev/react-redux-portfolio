import React from "react";
import { Link } from "react-router-dom";

import * as classes from "./logo.module.scss";
import logo from "./logo.svg";
import { ROUTES } from "../../../util/routes";

const Logo = () => {
  return (
    <div>
      <Link to={ROUTES.HOME} className={classes.link}>
        <div href="#" className={classes.header__logo}>
          <img
            src={logo}
            alt="React App"
            className={classes.header__logo_image}
          ></img>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
