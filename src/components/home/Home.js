import React, {Component} from "react";
import MastHead from "../mastHead/MastHead";
import AboutUs from "../aboutUs/AboutUs";
import ServicesSec from "../servicesSec/ServicesSec";

export class Home extends Component {
  render() {
    return (
      <div>
        <MastHead />
        <AboutUs />
        <ServicesSec />
      </div>
    );
  }
}

export default Home;
