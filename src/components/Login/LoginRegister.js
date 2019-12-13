import React, {useState} from "react";

import axios from "axios";

import "./LoginRegister.css";
import RegisterForm from "./RegisterForm/RegisterForm";
import LoginForm from "./LoginForm/LoginForm";

const vetAPI = "http://localhost:2000/";

const checkEmail = async useremail => {
	const result = await axios.get(`${vetAPI}/user/email/${useremail}`);

	return result.data.userEmail;
};

const checkPwd = async (useremail, userPwd) => {
	const result = await axios.get(`${vetAPI}/user/email/${useremail}`);

	return result.data.userPwd;
};

const createUser = async (username, userlastname, useremail, userpwd) => {
	axios
		.post(`${vetAPI}/create/user/`, {
			userEmail: useremail,
			username: username,
			userPwd: userpwd,
			firstName: username,
			surName: userlastname,
			address: "Corfu 72",
			isVet: true,
			activeUser: true
		})
		.then(res => console.log(`exito! ${res.data}`))
		.catch(err => console.log(`error! ${err}`));
};

const register = async e => {
	const username = e.target.elements.username.value;
	const userlastname = e.target.elements.userlastname.value;
	const useremail = e.target.elements.useremail.value;
	const userpwd = e.target.elements.userpwd.value;
	const userpwd2 = e.target.elements.userpwd2.value;

	e.preventDefault();

	if (userpwd === userpwd2) {
		const emailExists = await checkEmail(useremail);
		// console.log(emailExists);
		if (!emailExists) {
			createUser(username, userlastname, useremail, userpwd);
		} else {
			console.log(`Existe`);
		}
	} else {
		console.log(`Contraseñas no son iguales`);
	}
};

const login = async e => {
	const useremail = e.target.elements.useremail.value;
	const userpwd = e.target.elements.userpwd.value;

	e.preventDefault();

	const userExists = await checkEmail(useremail);
	console.log(userExists);
	if (userExists) {
		console.log(`Usuario ya existe`);
		const rightpwd = await checkPwd(useremail, userpwd);
		if (rightpwd) {
			console.log(`correcta`);
		} else {
			console.log(`incorrecta`);
		}
	} else {
		console.log(`no existe`);
	}
};

export const LoginRegister = () => {
	const [loginBtn, setloginBtn] = useState("visible");
	const [registerBtn, setregisterBtn] = useState("invisible");

	const changeView = buttonId => {
		if (buttonId === "loginBtn") {
			// console.log("Login");

			setregisterBtn("invisible");
			setloginBtn("visible");
		} else {
			// console.log("Register");
			setloginBtn("invisible");
			setregisterBtn("visible");
		}
	};

	return (
		<div className="container justify-content-around form">
			<div className="row mb-3">
				<div className="col-lg-12 text-center">
					<div className="btn-group">
						<button
							className={`btn btn-outline-primary btn-lg `}
							onClick={e => changeView("loginBtn", e)}
						>
							Iniciar Sesi&oacute;n
						</button>
						<button
							className={`btn btn-outline-primary btn-lg`}
							onClick={e => changeView("registerBtn", e)}
						>
							Registrarse
						</button>
					</div>
				</div>
			</div>
			<div className="row">
				<div className={`col-lg-12 ${registerBtn}`}>
					<RegisterForm register={register} />
				</div>
				<div className={`col-lg-12 ${loginBtn}`}>
					<LoginForm login={login} />
				</div>
			</div>
		</div>
	);
};

export default LoginRegister;
/*
function forgot() {
  event.preventDefault();

  let email = document.getElementById("userEmailLog").value;

  if (emailArray.indexOf(email) == -1) {
    if (email == "") {
      alert("Email required.");
      return;
    }
    alert("Email does not exist.");
    return;
  }

  alert("email is send to your email check it in 24hr. \n Thanks");
  document.getElementById("userEmailLog").value = "";
}
*/
