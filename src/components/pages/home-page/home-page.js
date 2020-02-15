import React from "react";

import * as classes from './home-page.module.scss';
import './home-page.css';
import sample from "./motionplace.mp4";
import Title from './title';
import Navbar from './navbar';

const HomePage = () => {
  return (
    <div className={classes.HomePage}>
      <video className={classes.videoBG} autoPlay muted loop>
        <source src={sample} type="video/mp4"></source>
      </video>
      <Title />
      <Navbar />
    </div>

  );
};

export default HomePage;
