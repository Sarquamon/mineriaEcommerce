import React from "react";
import {Route, Switch} from "react-router-dom";

import test from "../components/test/Test";
import Home from "../components/home/Home";
import Store from "../components/store/Store";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/store" component={Store} />
      <Route exact path="/test" component={test} />;
    </Switch>
  );
};

export default Routes;
