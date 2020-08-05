import React from "react";
import "./App.css";
import Portfolio from "./Portfolio";
import PageNotFound from "./components/PageNotFound";
import Mail from "./components/Mail";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Portfolio} />
      <Route path="/mail" component={Mail} />
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default App;
