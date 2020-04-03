import React from "react";
import {Route, Switch} from "react-router-dom";

import test from "../components/test/Test";
import Home from "../components/home/Home";
import Store from "../components/store/Store";
import Product from "../components/product/Product";
import LoginRegister from "../components/Login/LoginRegister";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/store" component={Store} />
      <Route exact path="/store/product/:id" component={Product} />
      <Route exact path="/test" component={test} />;
      <Route exact path="/loginRegister" component={LoginRegister} />;
    </Switch>
  );
};

export default Routes;
