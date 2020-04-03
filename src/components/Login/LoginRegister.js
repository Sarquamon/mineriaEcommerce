import React, {useState} from "react";
import axios from "axios";

import {useHistory} from "react-router-dom";

import "./LoginRegister.css";
import RegisterForm from "./RegisterForm/RegisterForm";
import LoginForm from "./LoginForm/LoginForm";

const vetAPI = "http://localhost:2000/";

export const LoginRegister = () => {
	const history = useHistory();
	const [loginBtn, setloginBtn] = useState("visible");
	const [registerBtn, setregisterBtn] = useState("invisible");

	// const checkEmail = async useremail => {};

	// const checkPwd = async (useremail, userPwd) => {};

	const register = async e => {
		e.preventDefault();

		const useremail = e.target.elements.userEmail.value;
		const userpwd = e.target.elements.userPwd.value;

		const response = await axios.post(`${vetAPI}user/signup`, {
			userEmail: useremail,
			userPwd: userpwd
		});

		console.log(response);
		if (response) {
			if (response.status === 201) {
				history.push("/loginRegister");
				window.location.reload();
			}
		}
	};

	const login = async e => {
		e.preventDefault();

		const useremail = e.target.elements.userEmail.value;
		const userpwd = e.target.elements.userPwd.value;

		const response = await axios.post(`${vetAPI}user/login`, {
			userEmail: useremail,
			userPwd: userpwd
		});

		if (response) {
			if (response.status === 200) {
				// console.log(response.data.userId);
				const userId = response.data.userId;
				// console.log(response.data.token);

				const token = response.data.token;
				// console.log(response.data.token);
				const useremail = response.data.userEmail;

				localStorage.setItem("userId", userId);
				localStorage.setItem("token", token);
				localStorage.setItem("useremail", useremail);

				history.push("/");
				window.location.reload();
			} else {
				alert("Verificar informacion!");
			}
		}
	};

	const logout = () => {
		localStorage.removeItem("userId");
		localStorage.removeItem("token");
		localStorage.removeItem("useremail");

		window.location.reload();
	};

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
