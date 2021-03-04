import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Favoritos from "./Pages/Favoritos";
import Home from "./Pages/Home";

export default function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/favoritos" exact component={Favoritos} />
    </Switch>
  );
}
