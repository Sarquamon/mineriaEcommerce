import React from "react";
import {Link} from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <section className="page-section bg-danger" id="aboutus">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-3">
                ¡Tenemos todo lo que usted necesita!
              </h2>
              <hr className="divider light my-4" />
              <p className="text-white mb-4">
                ¡Sin rodeos, ni plazos forzosos! Usted contar&aacute; con el
                apoyo necesario con nuestro personal altamente capacitado para
                sus proyectos
              </p>
              <Link
                to="/store"
                className="btn btn-outline-light btn-large mb-3"
              >
                ¡Comenzar!
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
