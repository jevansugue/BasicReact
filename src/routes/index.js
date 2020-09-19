import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Shop from "../components/Shop";
import Item from "../components/Item";
import TestApiPage from "../components/TestApiPage";
import { ABOUT, ITEM, SHOP, TESTAPIPAGE } from "./Path";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path={ABOUT} component={About} />
      <Route path={SHOP} exact component={Shop} />
      <Route path={ITEM} component={Item} />

      <Route path={TESTAPIPAGE} component={TestApiPage} />
    </Switch>
  );
}
