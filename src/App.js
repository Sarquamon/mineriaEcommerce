import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import Store from "./components/Store/Store";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/store" component={Store} />
        {/* <Route exact path="/" component={Home} /> */}
      </Switch>
    </div>
  );
}

export default App;
