import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as classes from "./app.module.scss";

import AsidePanel from "../layout/aside-panel";
import Logo from "../layout/logo";
import IconGitHub from "../layout/iconGitHub";
import Sidebar from "../layout/sidebar";
import HomePage from "../pages/home-page";
import WorksPage from '../pages/works-page';
import AboutPage from '../pages/about-page';
import ContactsPage from '../pages/contacts-page';
import { ROUTES } from '../../util/routes';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AsidePanel />
          <Logo />
          <IconGitHub />
          {/* <Sidebar /> */}
          <Switch>
            <Route exact path={ROUTES.HOME}>
              <HomePage></HomePage>
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
      </Router>
    );
  }
}
