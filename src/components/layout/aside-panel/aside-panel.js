import React, { Component } from "react";

import * as classes from "./aside-panel.module.scss";

import Hamburger from "./hamburger";
import AsidePanelText from './aside-panel-text';
import AsidePanelControls from './aside-panel-controls';

class AsidePanel extends Component {

  render() {
   
    return (
      <div className={classes.asidePanel}>
        <div className={classes.asidePanel__panel}>
          <Hamburger />
          <AsidePanelText />
          <AsidePanelControls />
        </div>
      </div>
    );
  }
 
};

export default AsidePanel;
