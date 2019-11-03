import React from "React";
import test from "../test/Test";
import {Route} from "react-router-dom";

const Routes = () => {
  return <Route exact path="/test" component={test} />;
};

export default Routes;
