import React from "react";

import * as classes from './home-page.module.scss';
import sample from "./motionplace.mp4";
import Title from './title';
import Navbar from './navbar';

const HomePage = ({ onSidebar }) => {
  return (
    <div className={classes.HomePage}>
      <video className={classes.videoBG} autoPlay muted loop>
        <source src={sample} type="video/mp4"></source>
      </video>
      <Title />
      <Navbar onSidebar={onSidebar} />
    </div>
  );
};

export default HomePage;
