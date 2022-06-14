import "./App.css";

// https://fluentsite.z22.web.core.windows.net/quick-start
import { Provider, teamsTheme } from "@fluentui/react-northstar";
import React, { useEffect } from "react";
import { Redirect, Route, HashRouter as Router } from "react-router-dom";

import Overview from "./Overview";
import Privacy from "./Privacy";
import Tab from "./Tab";
import TabConfig from "./TabConfig";
import TermsOfUse from "./TermsOfUse";
import { useTeams } from "msteams-react-base-component";

/**
 * The main app which handles the initialization and routing
 * of the app.
 */
export default function App() {
  const { theme } = useTeams({})[0];
  // useEffect(()=>{alert("Im loading again");},[])
  return (
    <Provider theme={theme || teamsTheme} styles={{ backgroundColor: "#eeeeee" }}>
      <Router>
        <Route exact path="/">
          <Redirect to="/tab" />
        </Route>
        <>
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/termsofuse" component={TermsOfUse} />
          <Route exact path="/tab" component={Tab} />
          <Route exact path="/config" component={TabConfig} />
          <Route exact path="/overview" component={Overview} />
        </>
      </Router>
    </Provider>
  );
}
