import React from "react";

import "./Footer.css";

import BuyWithoutRisks from "./BuyWithoutRisks/BuyWithoutRisks";
import {Directions} from "./Directions/Directions";

const Footer = () => {
  return (
    <footer>
      <BuyWithoutRisks />
      <Directions />
    </footer>
  );
};

export default Footer;
