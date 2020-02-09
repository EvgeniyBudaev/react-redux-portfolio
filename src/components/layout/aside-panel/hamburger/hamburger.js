import React from "react";

import "./hamburger.css";

const Hamburger = () => {
  return (
    <div className="hamburger hover-target toggle">
      <div className="hamburger__span one"></div>
      <div className="hamburger__span two"></div>
      <div className="hamburger__span three"></div>
    </div>
  );
};

export default Hamburger;
