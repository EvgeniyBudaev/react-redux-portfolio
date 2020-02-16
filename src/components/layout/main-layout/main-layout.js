import React from 'react';

import AsidePanel from "../aside-panel";
import Sidebar from "../sidebar";

const MainLayout = (props) => {
  return (
    <main>
      <AsidePanel />
      <Sidebar />
      {props.children}
    </main>
  );
};

export default MainLayout;


