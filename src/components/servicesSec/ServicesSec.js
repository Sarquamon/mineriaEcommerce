import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./ServicesSec.css";

const ServicesSec = () => {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <h2 className="text-center mt-3">Siempre a tu servicio</h2>
        <hr className="divider my-4" />
        <div className="row mb-3 ">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <FontAwesomeIcon
                icon={["fas", "hands"]}
                size="4x"
                className="mb-4 text-primary"
              />
              <h3 className="h4 mb-2">La mejor atenci&oacute;n</h3>
              <p className="text-muted mb-0">
                Con los mejores materiales para soportar hasta el entorno mas
                duro
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <FontAwesomeIcon
                icon={["fas", "heart"]}
                size="4x"
                className="mb-4 text-primary"
              />
              <h3 className="h4 mb-2">Tratados con amor</h3>
              <p className="text-muted mb-0">
                ¿Realmente es un buen servicio si no le das amor?
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <FontAwesomeIcon
                icon={["fas", "tasks"]}
                size="4x"
                className="mb-4 text-primary"
              />
              <h3 className="h4 mb-2">Al d&iacute;a</h3>
              <p className="text-muted mb-0">
                El cuidado prestado siempre esta en tiempo y forma
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <FontAwesomeIcon
                icon={["fas", "check-double"]}
                size="4x"
                className="mb-4 text-primary"
              />
              <h3 className="h4 mb-2">Entregarles tu amor</h3>
              <p className="text-muted mb-0">
                ¡Te entregamos tu mascota luciendo su mejor!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSec;
