import React from "react";
import {Link} from "react-router-dom";

const LoginForm = () => {
  return (
    <div>
      <h2>¡Hola de nuevo!</h2>

      <form action="/" method="post">
        <div className="field-wrap">
          <label>
            <span className="req">* </span>Correo electrónico:
          </label>
          <input type="email" required id="userEmailLog" placeholder="" />
        </div>

        <div className="field-wrap">
          <label>
            <span className="req">* </span>Contraseña:
          </label>
          <input type="password" id="userPassLog" required />
        </div>

        <p className="forgot">
          <Link to="forgot.html">Olvidaste tu contraseña</Link>
        </p>

        <button className="button button-block">Entrar</button>
      </form>
    </div>
  );
};

export default LoginForm;
