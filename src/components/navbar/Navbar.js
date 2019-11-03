import React, {Component} from "react";
import "./Navbar.css";
import {Link as NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logo from "../../img/logo.png";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-light fixed-top`}>
          <div className="container">
            <NavLink to="/" className="navbar-brand js-scroll-trigger">
              <img src={logo} width="50px" alt="appLog" />
              Doggies
            </NavLink>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto my-2 my-lg-0">
                <li className="nav-item">
                  <NavLink smooth to="/" className="nav-link js-scroll-trigger">
                    <FontAwesomeIcon icon="home" /> Inicio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/store" className="nav-link js-scroll-trigger">
                    <FontAwesomeIcon icon="store-alt" /> Tienda
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
