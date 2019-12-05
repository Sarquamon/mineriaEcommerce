import React from "react";
import "./MastHead.css";

const MastHead = () => {
  return (
    <div>
      <header className="masthead" id="mastHead">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <h1 className="text-uppercase text-white font-weight-bold">
                MyPets!
              </h1>
              <h2 className="text-uppercase text-white font-weight-bold">
                Tus mascotas en las mejores manos
              </h2>
              <hr className="divider my-4" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white font-weight-light mb-5">
                Cuida el amor de tus mascotas
              </p>
              <a
                className="btn btn-light btn-xl js-scroll-trigger"
                href="#about"
              >
                M&aacute;s informaci&oacute;n
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default MastHead;
