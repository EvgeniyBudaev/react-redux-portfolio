import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import MainLayout from "../layout/main-layout";
import Logo from "../layout/logo";
import IconGitHub from "../layout/iconGitHub";
import HomePage from "../pages/home-page";
import WorksPage from "../pages/works-page";
import AboutPage from "../pages/about-page";
import ContactsPage from "../pages/contacts-page";
import { ROUTES } from "../../util/routes";

class App extends Component {
  render() {
    return (
      <div>
        <MainLayout>
          <Switch>
            <Route exact path={ROUTES.HOME}>
              <HomePage></HomePage>
              <ContactsPage></ContactsPage>
              <Logo />
              <IconGitHub />
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
          </Switch>
        </MainLayout>
      </div>
    );
  }
}

export default App;
