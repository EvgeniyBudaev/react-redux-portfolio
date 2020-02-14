import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

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
import Cursor from '../cursor';
import PageSlider from '../page-slider';

class App extends Component {

  state = {
    onSidebar: false
  };

  onHandleClickHamburger = () => {
    this.setState(({onSidebar}) => {
      return {
        onSidebar: !onSidebar
      }
    });
  };

  onClickLinkFromSidebar = () => {
    this.setState(({onSidebar}) => {
      return {
        onSidebar: !onSidebar
      }
    });
  }

  render() {
    return (
      <div>
        <div>
          <Cursor />
          <AsidePanel onHandleClickHamburger={this.onHandleClickHamburger} onSidebar={this.state.onSidebar} />
          <Logo />
          <IconGitHub />
          <Sidebar onSidebar={this.state.onSidebar} onClickLinkFromSidebar={this.onClickLinkFromSidebar} showSidebar={this.state.showSidebar} />
          <Switch>
            <Route exact path={ROUTES.HOME}>
              <HomePage onSidebar={this.state.onSidebar}></HomePage>
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
