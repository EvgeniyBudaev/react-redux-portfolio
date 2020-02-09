import React from "react";

import * as classes from "./aside-panel-controls.module.scss";

const AsidePanelControls = () => {
  return (
    <div className={classes.asidePanel__controls}>
      <div className={classes.magneticBlock}>
        <button className={classes.roundButton}>
          <div className={classes.roundButton__circle}>
            <div className={classes.scrollDowns}>
              <div className={classes.mousey}>
                <div className={classes.scroller}></div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AsidePanelControls;
