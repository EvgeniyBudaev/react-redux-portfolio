import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import MainLayout from "../layout/main-layout";
import Logo from "../layout/logo";
import IconGitHub from "../layout/iconGitHub";
import HomePage from "../pages/home-page";
import SectionPage from '../pages/home-page/section-page';
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
              <SectionPage />
              <Logo />
              <IconGitHub />
            </Route>
            <Route exact path={ROUTES.WORKS}>
              <WorksPage />
            </Route>
            <Route exact path={ROUTES.ABOUT}>
              <AboutPage />
            </Route>
            <Route exact path={ROUTES.CONTACTS}>
              <ContactsPage />
            </Route>
          </Switch>
        </MainLayout>
      </div>
    );
  }
}

export default App;
