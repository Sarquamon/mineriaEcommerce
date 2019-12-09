import React from "react";

const RegisterForm = props => {
  return (
    <div>
      <h1 className="loginRegisterTitle">Registro nuevo usuario</h1>

      <form onSubmit={props.register}>
        <div className="top-row">
          <div className="field-wrap">
            <label>
              <span className="req">* </span>Nombre:
            </label>
            <input
              type="text"
              name="username"
              id="userName"
              required
              placeholder="Nombre"
            />
          </div>

          <div className="field-wrap">
            <label>
              <span className="req">* </span>Apellidos:
            </label>
            <input type="text" name="userlastname" id="userLastName" required />
          </div>
        </div>
        <div className="field-wrap">
          <label>
            <span className="req">* </span>Correo electrónico:
          </label>
          <input type="email" name="useremail" id="emailUserRe" required />
        </div>
        <div className="field-wrap">
          <label>
            <span className="req">* </span>Contraseña:
          </label>
          <input type="password" name="userpwd" id="pwdUserReg" required />
        </div>
        <div className="field-wrap">
          <label>
            <span className="req">* </span>Repite contraseña:
          </label>
          <input type="password" name="userpwd2" id="pwd2UserReg" required />
        </div>
        <button type="submit" className="button button-block">
          Registrarme
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
