import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import ResumeService from "./services/resume-service";
import { ResumeServiceProvider } from "./components/resume-server-context";
import store from "./store";
const resumeService = new ResumeService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ResumeServiceProvider value={resumeService}>
        <Router>
          <App />
        </Router>
      </ResumeServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
