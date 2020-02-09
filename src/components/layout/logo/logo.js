import React from "react";

import * as classes from "./logo.module.scss";
import logo from "./logo.svg";

const Logo = () => {
  return (
    <div>
      <div href="#" className={classes.header__logo}>
        <img
          src={logo}
          alt="React App"
          className={classes.header__logo_image}
        ></img>
      </div>
    </div>
  );
};

export default Logo;
