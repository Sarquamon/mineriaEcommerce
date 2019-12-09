import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-4 ">
      <div classname="footer-links-container container">
        <div classname="footer-links row">
          <div classname="footer-item collapsible-xs">
            <div classname="content-asset">
              <h2>
                <Link classname="title" to="#">
                  Tienda
                </Link>
              </h2>
              <ul classname="menu-footer content">
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
          <div classname="footer-item collapsible-xs">
            <div classname="content-asset">
              <h2>
                <Link classname="title" to="#">
                  Dentro PopSockets
                </Link>
              </h2>
              <ul classname="menu-footer content">
                <li>
                  <Link
                    to="https://www.popsockets.mx/pages/about-us.html?lang=es_MX"
                    title="Go to Sobre Nosotros"
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
          <div classname="footer-item collapsible-xs">
            <div classname="content-asset">
              <h2>
                <Link classname="title" to="#">
                  Soporte
                </Link>
              </h2>
              <ul classname="menu-footer content">
                <li>
                  <Link
                    to="https://ayuda.popsockets.mx/hc/es"
                    title="Help Center"
                  >
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

          <div classname="footer-item collapsible-xs">
            <div classname="content-asset">
              <p>&nbsp; &nbsp;</p>
            </div>
          </div>
          <div classname="footer-item social">
            <div classname="content-asset">
              <ul classname="social-links">
                <li>
                  <Link
                    classname="icon icon-social-facebook"
                    aria-label="Facebook"
                    to="https://www.facebook.com/PopSockets-M%C3%A9xico-513260652430374/"
                    target="_blank"
                  ></Link>
                </li>
                <li>
                  <Link
                    classname="icon icon-social-instagram"
                    aria-label="Instagram"
                    to="https://www.instagram.com/popsockets.mexico/"
                    target="_blank"
                  ></Link>
                </li>
                <li>
                  <Link
                    classname="icon icon-social-pinterest"
                    aria-label="Pinterest"
                    to="https://www.pinterest.com/popsocketsllc/"
                    target="_blank"
                  ></Link>
                </li>
                <li>
                  <Link
                    classname="icon icon-social-twitter"
                    aria-label="Twitter"
                    to="https://twitter.com/popSockets"
                    target="_blank"
                  ></Link>
                </li>
                <li>
                  <Link
                    classname="icon icon-social-youtube"
                    aria-label="YouTube"
                    to="https://www.youtube.com/channel/UCK177Y_V5ou08-RtJ2GXY7g"
                    target="_blank"
                  ></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
/*
<div classname="email-signup-container">
<div classname="container">
<div classname="email-signup flex-item">
<div classname="email-signup-form-container">
<form action="https://www.popsockets.mx/on/demandware.store/Sites-MX-Site/es_MX/MCSubscription-Submit" method="post" classname="form-horizontal" id="MCSubscriptionForm" data-form-error="No pudimos procesar tu solicitud. Vuelve Link intentarlo">
<div classname="email-description">
<div classname="content-asset">
Regístrate para <strong>ENVIO GRATIS</strong>
</div> 
</div>
<div classname="email-form">
<div classname="input-group">
<input type="text" classname="form-control" id="dwfrm_mcsubscribe_email" placeholder="Introduzca su correo electrónico" aria-label="Introduzca su correo electrónico" name="dwfrm_mcsubscribe_email" value=""/>
<span classname="input-group-btn">
<button type="submit" classname="btn btn-primary" value="Ir" name="dwfrm_mcsubscribe_subscribeFooter">
Ir
</button>
</span>
<input type="hidden" id="dwfrm_mcsubscribe_source" name="dwfrm_mcsubscribe_source" value="WebsiteFooterSignup"/>
<input type="hidden" id="dwfrm_mcsubscribe_locale" name="dwfrm_mcsubscribe_locale" value="es_MX"/>
<input type="hidden" name="csrf_token" value="mlqVKdd3NVs25rgmyzVLKQcUTdIFrXF64eK-NDh52aOXPA3k-wsE99TCZ50GBTxHFTfGZqJNxDT6EDDkWVPyuPl2BiBxcoNoCihGkb91ItjP5f_wWBbjnyNMoUMarV0YoSVdXkZsyWhL-eFL4sau7Otpl4CAoj5Y2yf7-Da7dRtU1nnzbG4="/>
</div>
</div>
</form>
</div>
<div classname="email-signup-fine-print">
<div classname="content-asset">
<small>Por favor entrar tu correo electrónico estas de acuerdo de recibir nuestra hoja informativa por correo electrónico. Puedes cancelar tu suscripción en cualquier momento. Por favor visita nuestras <Link to="https://www.popsockets.mx/pages/terminos-y-condiciones.html?lang=es_MX"> Terminos Y Condiciones</Link> y <Link to="https://www.popsockets.mx/pages/politica-de-privacidad.html?lang=es_MX">póliza de Privacidad</Link> para mas detalle</small>
</div> 
</div>
</div>
<div classname="risk-free-shopping flex-item">
<div classname="content-asset">
<div classname="risk-free-container">
 <h5 classname="p2">Compra Sin Riesgo</h5>
<ul>
<li><img src="https://www.popsockets.mx/on/demandware.static/-/Library-Sites-popsockets-shared-library/default/dw12b61e04/images/footer/low-cost-shipping.svg" alt="Low-cost shipping" /><small>Bajo costo de envío</small></li>
<li><img src="https://www.popsockets.mx/on/demandware.static/-/Library-Sites-popsockets-shared-library/default/dw88958694/images/footer/secure-checkout.svg" alt="Secure checkout"/><small>Pago seguro</small></li>
<li><img src="https://www.popsockets.mx/on/demandware.static/-/Library-Sites-popsockets-shared-library/default/dw1932cecf/images/footer/hassle-free-returns.svg" alt="Hassle-free returns"/><small> Devoluciones sin problemas</small></li>
</ul>
</div>


<style>
.risk-free-container ul li {
    display: inline;
}
</style>
</div> 
</div>
</div>
</div>
<div classname="checkout-footer-risk-free">
<div classname="container">
<div classname="risk-free-shopping flex-item">
<div classname="content-asset">
<div classname="risk-free-container">
<h5 classname="p2">Compra Sin Riesgo</h5>
<ul>
<li><img src="https://www.popsockets.mx/on/demandware.static/-/Library-Sites-popsockets-shared-library/default/dw12b61e04/images/footer/low-cost-shipping.svg" alt="Low-cost shipping"><small>Bajo costo de envío</small></li>
<li><img src="https://www.popsockets.mx/on/demandware.static/-/Library-Sites-popsockets-shared-library/default/dw88958694/images/footer/secure-checkout.svg" alt="Secure checkout"><small>Pago seguro</small></li>
<li><img src="https://www.popsockets.mx/on/demandware.static/-/Library-Sites-popsockets-shared-library/default/dw1932cecf/images/footer/hassle-free-returns.svg" alt="Hassle-free returns"><small> Devoluciones sin problemas</small></li>
</ul>
</div>
<style>
.risk-free-container ul li {
    display: inline;
}
</style>
</div> 
</div>
</div>
</div>
<div classname="social-links-container container">
<div classname="row">
<div classname="content-asset">
<ul classname="social-links">
<li><Link classname="icon icon-social-facebook" aria-label="Facebook" to="https://www.facebook.com/PopSockets-M%C3%A9xico-513260652430374/" target="_blank"></Link></li>
<li><Link classname="icon icon-social-instagram" aria-label="Instagram" to="https://www.instagram.com/popsockets.mexico/" target="_blank"></Link></li>
<li><Link classname="icon icon-social-pinterest" aria-label="Pinterest" to="https://www.pinterest.com/popsocketsllc/" target="_blank"></Link></li>
<li><Link classname="icon icon-social-twitter" aria-label="Twitter" to="https://twitter.com/popSockets" target="_blank"></Link></li>
<li><Link classname="icon icon-social-youtube" aria-label="YouTube" to="https://www.youtube.com/channel/UCK177Y_V5ou08-RtJ2GXY7g" target="_blank"></Link></li>
</ul>
</div> 
</div>
</div>
<div classname="footer-Link-rule"></div>
<div classname="footer-bottom-content-container container">
<div classname="row">
<div classname="locale-copyright-container">
<div classname="locale-container">
<div classname="country-selector" data-url="/on/demandware.store/Sites-MX-Site/es_MX/Page-SetLocale" tabindex="0">
<Link classname="country-Link" to="/on/demandware.store/Sites-MX-Site/es_MX/Page-Show?cid=country-selector" data-locale="null" data-currencycode="MXN">
<i classname="flag-icon flag-icon-mx"></i>
<small classname="country-name">México</small>
</Link>
</div>
</div>
<div classname="copyright-container">
<div classname="copyright-notice col">

<div classname="content-asset">
<div classname="copyright">© 2019 POPSOCKETS LLC. TODOS LOS DERECHOS RESERVADOS</div>

</div> 
</div>
</div>
</div>
<div classname="company-links-container">
<div classname="company-links col">
<div classname="content-asset">
<ul classname="company-links-list">
<li><Link to="https://www.popsockets.mx/pages/propiedad-intelectual.html?lang=es_MX">Propiedad Intelectual</Link></li>
<li><Link to="https://www.popsockets.mx/pages/terminos-y-condiciones.html?lang=es_MX#privacy">Politica De Privacidad</Link></li>
<li><Link to="https://www.popsockets.mx/pages/terminos-y-condiciones.html?lang=es_MX">Terminos Y Condiciones</Link></li>
</ul>
<ul classname="payment-types content">
<li><img src="https://www.popsockets.mx/on/demandware.static/-/Library-Sites-popsockets-shared-library/default/dwf6d08132/amazon.png" alt="Amazon" classname="icon"></li>
<li><img alt="" src="https://www.popsockets.mx/on/demandware.static/-/Library-Sites-popsockets-shared-library/default/dwa0a7aa7a/mastercard.png" title="" classname="icon"></li>
<li><img alt="" src="https://www.popsockets.mx/on/demandware.static/-/Library-Sites-popsockets-shared-library/default/dwc9c7c357/paypal3.png" title="" classname="icon"></li>
<li><img alt="" src="https://www.popsockets.mx/on/demandware.static/-/Library-Sites-popsockets-shared-library/default/dw49454e50/pmt-method-apple-pay.png" title="" classname="icon"></li>
<li><img alt="" src="https://www.popsockets.mx/on/demandware.static/-/Library-Sites-popsockets-shared-library/default/dw4f4e51e2/visa.png" title="" classname="icon"></li>
<li><img alt="" src="https://www.popsockets.mx/on/demandware.static/-/Library-Sites-popsockets-shared-library/default/dwa2cf640d/american-express.png" title="" classname="icon"></li>
<li><img alt="" src="https://www.popsockets.mx/on/demandware.static/-/Library-Sites-popsockets-shared-library/default/dw446ed443/google-pay.png" title="" classname="icon"></li>
</ul>

</div> 
</div>
</div>
</div>
<div classname="internationalPopupEnabled d-none" data-popup="false" data-url="/on/demandware.store/Sites-MX-Site/es_MX/InternationalVisitorPopup-GetContent">
</div>
</div>
<div classname="content-asset">
<style>
            .back-to-top {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 1rem;
            position: fixed;
            right: 1rem;
            bottom: 5rem;
            color: #00263e;
            background: none;
            border: none;
            visibility: hidden;
            z-index: 4;
            }
            
            .back-to-top span {
            color: #00263e;
            margin-top: .5em;
            }
            
            .icon.icon-back-to-top {
            width: 35px;
            height: 35px;
            }

            @media only screen and (min-width: 768px) {
            .back-to-top  {
            bottom: 1rem
            }
            }
            
            @media only screen and (min-width: 1200px) {
            .icon.icon-back-to-top  {
            width: 55px;
            height: 55px;
            }
            }
            </style>
<button classname="back-to-top show-back-to-top">
<i classname="icon icon-back-to-top"></i>
<span><strong>Volver Arriba
</strong></span>
</button>
</div> 

<script type="text/javascript">
    window.onAmazonLoginReady = function() {
      amazon.Login.setClientId("amzn1.application-oa2-client.8d04822cfb3f48bdb32997b700b81524");
    };
</script>
<script type="text/javascript" src="https://static-na.payments-amazon.com/OffAmazonPayments/us/js/Widgets.js?sellerId=A1O773Y2YKN48Z">
    </script><script type="text/javascript" src="https://static-na.payments-amazon.com/v2/login.js" id="OffAmazonPaymentsLoginJS"></script>
<span classname="adyen url-details" data-configuration="/on/demandware.store/Sites-MX-Site/es_MX/Adyen-GetConfigurationComponents" data-paymentmethods="/on/demandware.store/Sites-MX-Site/es_MX/Adyen-GetPaymentMethods">
</span>
<span classname="amazonpay url-details d-none" data-amazon="{&quot;setAmazonShippingURL&quot;: &quot;/on/demandware.store/Sites-MX-Site/es_MX/ExpressCheckout-SetDetails&quot;,
    				&quot;amazonRedirectURL&quot;: &quot;/checkout?stage=payment&amp;lang=es_MX&quot;}" <="" span="">
</span>


*/
