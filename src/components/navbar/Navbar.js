import React from "react";
import "./Navbar.css";
import {Link as NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logo from "../../img/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-nav custom-nav justify-content-around">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="appLogo" width="50px" />
          Doggies
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#responsiveNavbar"
          aria-controls="responsiveNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="responsiveNavbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                <FontAwesomeIcon icon="store-alt" size="1x" />
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Unirme/Iniciar Sesi&oacute;n
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                <FontAwesomeIcon icon="shopping-basket" size="1x" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
