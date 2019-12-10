import React from "react";
import {Link} from "react-router-dom";

const LoginForm = props => {
	return (
		<div>
			<h2>¡Hola de nuevo!</h2>

			<form onSubmit={props.login}>
				<div className="field-wrap">
					<label>
						<span className="req">* </span>Correo electrónico:
					</label>
					<input
						type="email"
						required
						name="useremail"
						id="userEmailLog"
						placeholder=""
					/>
				</div>

				<div className="field-wrap">
					<label>
						<span className="req">* </span>Contraseña:
					</label>
					<input type="password" name="userpwd" id="userPassLog" required />
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
