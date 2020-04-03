import React from "react";
import {Link} from "react-router-dom";

import "./Directions.css";

export const Directions = () => {
  return (
    <div className="footer-links row">
      <div className="footer-item collapsible-xs">
        <div className="content-asset">
          <h2>
            <Link className="title" to="/">
              Tienda
            </Link>
          </h2>
          <ul className="menu-footer content">
            <li>
              <Link to="https://www.popsockets.mx/haz-tus-propias-creaciones?lang=es_MX">
                Crea Tu Propio
              </Link>
            </li>
            <li>
              <Link to="https://www.popsockets.mx/comprar/popgrips/ver-todos-los-popgrips/popminis?lang=es_MX">
                PopMinis
              </Link>
            </li>
            <li>
              <Link to="https://www.popsockets.mx/comprar/accesorios/ver-todos-los-accessorios/soportes?lang=es_MX">
                Bases
              </Link>
            </li>
            <li>
              <Link to="https://www.popsockets.mx/comprar/popwallets?lang=es_MX">
                PopWallets
              </Link>
            </li>
            <li>
              <Link to="https://www.popsockets.mx/comprar/popgrips?lang=es_MX">
                PopGrips &amp; PopTops
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-item collapsible-xs">
        <div className="content-asset">
          <h2>
            <Link className="title" to="#">
              Dentro PopSockets
            </Link>
          </h2>
          <ul className="menu-footer content">
            <li>
              <Link
                to="https://www.popsockets.mx/pages/about-us.html?lang=es_MX"
                title="Go to Sobre Nosotros
"
              >
                Sobre Nosotros{" "}
              </Link>
            </li>
            <li>
              <Link to="https://www.popsockets.mx/pages/medios-de-comunicacion.html?lang=es_MX">
                Medios De Comunicacion
              </Link>
            </li>
            <li>
              <Link to="https://www.popsockets.mx/pages/promocione-su-negocio.html?lang=es_MX">
                Promocione Su Negocio
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-item collapsible-xs">
        <div className="content-asset">
          <h2>
            <Link className="title" to="#">
              Soporte
            </Link>
          </h2>
          <ul className="menu-footer content">
            <li>
              <Link to="https://ayuda.popsockets.mx/hc/es" title="Help Center">
                Centro de Ayuda
              </Link>
            </li>
            <li>
              <Link
                to="https://ayuda.popsockets.mx/hc/es/sections/360001629612-He-ordenado-mi-pedido-Ahora-qu%C3%A9-"
                title="Pedidos"
              >
                Pedidos
              </Link>
            </li>
            <li>
              <Link
                to="https://ayuda.popsockets.mx/hc/es/sections/360001637791-Regresos-e-intercambios"
                title="Devoluciones"
              >
                Devoluciones
              </Link>
            </li>
            <li>
              <Link
                to="https://ayuda.popsockets.mx/hc/es/requests/new"
                title="Returns"
              >
                Contáctenos
              </Link>
            </li>
            <li>
              <Link
                to="https://www.popsockets.mx/pages/fakes-submission.html?lang=es_MX"
                title="Go to Report Counterfeits"
              >
                Reportar un producto falso
              </Link>
            </li>
            <li>
              <Link
                to="https://www.popsockets.mx/pages/idea-submission.html?lang=es_MX"
                title="Enviar una idea"
              >
                Enviar una idea
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-item collapsible-xs">
        <div className="content-asset">
          <p>&nbsp; &nbsp;</p>
        </div>
      </div>
      <div className="footer-item social">
        <div className="content-asset">
          <ul className="social-links">
            <li>
              <Link
                className="icon icon-social-facebook"
                aria-label="Facebook"
                to="https://www.facebook.com/PopSockets-M%C3%A9xico-513260652430374/"
                target="_blank"
              ></Link>
            </li>
            <li>
              <Link
                className="icon icon-social-instagram"
                aria-label="Instagram"
                to="https://www.instagram.com/popsockets.mexico/"
                target="_blank"
              ></Link>
            </li>
            <li>
              <Link
                className="icon icon-social-pinterest"
                aria-label="Pinterest"
                to="https://www.pinterest.com/popsocketsllc/"
                target="_blank"
              ></Link>
            </li>
            <li>
              <Link
                className="icon icon-social-twitter"
                aria-label="Twitter"
                to="https://twitter.com/popSockets"
                target="_blank"
              ></Link>
            </li>
            <li>
              <Link
                className="icon icon-social-youtube"
                aria-label="YouTube"
                to="https://www.youtube.com/channel/UCK177Y_V5ou08-RtJ2GXY7g"
                target="_blank"
              ></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
