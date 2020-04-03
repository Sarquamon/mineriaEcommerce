import React from "react";
import ReactDOM from "react-dom";

import {BrowserRouter} from "react-router-dom";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faStoreAlt,
  faHeart,
  faTasks,
  faCheckDouble,
  faHands,
  faUser,
  faShoppingBasket
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./index.css";
import App from "./App";

library.add(
  fab,
  faHome,
  faStoreAlt,
  faHeart,
  faTasks,
  faCheckDouble,
  faHands,
  faUser,
  faShoppingBasket
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
