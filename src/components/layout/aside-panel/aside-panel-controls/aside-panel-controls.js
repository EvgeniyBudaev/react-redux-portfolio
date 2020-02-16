import React from "react";
import { connect } from "react-redux";

import './aside-panel-controls.css';

const AsidePanelControls = ({ onSidebar }) => {
  let classNamesAsidePanelControls = 'aside-panel__controls';

  if(onSidebar) {
    classNamesAsidePanelControls += ' off';
  }

  return (

    <div className={classNamesAsidePanelControls}>
              <div className="magnetic-block">
                <button className="round-button">
                  <div className="round-button__circle">
                    <div className="scroll-downs">
                      <div className="mousey">
                        <div className="scroller"></div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

  );
};

const mapStateToProps = ({ onSidebar }) => {
  return {
    onSidebar
  };
};

export default connect(mapStateToProps)(AsidePanelControls);
