import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import AsidePanel from "../layout/aside-panel";
import Logo from "../layout/logo";
import IconGitHub from "../layout/iconGitHub";
import Sidebar from "../layout/sidebar";
import HomePage from "../pages/home-page";
import WorksPage from "../pages/works-page";
import AboutPage from "../pages/about-page";
import ContactsPage from "../pages/contacts-page";
import { ROUTES } from "../../util/routes";
import Cursor from "../cursor";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Cursor />
          <AsidePanel />
          <Logo />
          <IconGitHub />
          <Sidebar />
          <Switch>
            <Route exact path={ROUTES.HOME}>
              <HomePage></HomePage>
              <ContactsPage></ContactsPage>
            </Route>
            <Route exact path={ROUTES.WORKS}>
              <WorksPage></WorksPage>
            </Route>
            <Route exact path={ROUTES.ABOUT}>
              <AboutPage></AboutPage>
            </Route>
            <Route exact path={ROUTES.CONTACTS}>
              <ContactsPage></ContactsPage>
            </Route>
            {/* <Route>
              <NotFoundPage />
            </Route> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
