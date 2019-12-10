import React, {useState} from "react";

import axios from "axios";

import "./LoginRegister.css";
import RegisterForm from "./RegisterForm/RegisterForm";
import LoginForm from "./LoginForm/LoginForm";

const vetAPI = "https://newvetsapi.herokuapp.com";

const checkEmail = async useremail => {
	const result = await axios.get(`${vetAPI}/user/email/${useremail}`);

	return result.data.userEmail;
};

const register = e => {
	// const username = e.target.elements.username.value;
	// const userlastname = e.target.elements.userlastname.value;
	// const useremail = e.target.elements.useremail.value;
	// const userpwd = e.target.elements.userpwd.value;
	// const userpwd2 = e.target.elements.userpwd2.value;

	e.preventDefault();
};

const login = async e => {
	const useremail = e.target.elements.useremail.value;
	// const userpwd = e.target.elements.userpwd.value;

	e.preventDefault();

	const available = await checkEmail(useremail);
	console.log(available);
	if (available) {
		console.log(`Existe`);
	} else {
		console.log(`no existe`);
	}
};

export const LoginRegister = () => {
	const [loginBtn, setloginBtn] = useState("visible");
	const [registerBtn, setregisterBtn] = useState("invisible");

	const changeView = buttonId => {
		if (buttonId === "loginBtn") {
			console.log("Login");

			setregisterBtn("invisible");
			setloginBtn("visible");
		} else {
			console.log("Register");
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

$(document).ready(function() {
  $(".first-button").on("click", function() {
    $(".animated-icon1").toggleClass("open");
  });
  $(".second-button").on("click", function() {
    $(".animated-icon2").toggleClass("open");
  });
  $(".third-button").on("click", function() {
    $(".animated-icon3").toggleClass("open");
  });
});

let emailArray = ["sarquamon@gmail.com"];
let passwordArray = ["sa"];

function login() {
  event.preventDefault();

  let email = document.getElementById("userEmailLog").value;
  let password = document.getElementById("userPassLog").value;

  let i = emailArray.indexOf(email);

  if (emailArray.indexOf(email) == -1) {
    if (email == "") {
      alert("Email required.");
      return;
    }
    alert("Email does not exist.");
    return;
  } else if (passwordArray[i] != password) {
    if (password == "") {
      alert("Password required.");
      return;
    }
    alert("Password does not match.");
    return;
  } else {
    alert(email + " yor are login Now");

    document.getElementById("userEmailLog").value = "";
    document.getElementById("userPassLog").value = "";
    //window.location.to = "buttonAlert.html";
    return;
  }
}

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

function register() {
  event.preventDefault();

  let name = document.getElementById("userName");
  let lastName = document.getElementById("userLastName");
  let email = document.getElementById("emailUserRe").value;
  let password = document.getElementById("pwdUserReg").value;
  let passwordRetype = document.getElementById("pwd2UserReg").value;

  if (name == "") {
    alert("Name required.");
    return;
  } else if (lastName == "") {
    alert("Last name required.");
    return;
  } else if (email == "") {
    alert("Email required.");
    return;
  } else if (password == "") {
    alert("Password required.");
    return;
  } else if (passwordRetype == "") {
    alert("Password required.");
    return;
  } else if (password != passwordRetype) {
    alert("Password don't match retype your Password.");
    return;
  } else if (emailArray.indexOf(email) == -1) {
    emailArray.push(email);
    passwordArray.push(password);

    alert(email + "  Thanks for registration. \nTry to login Now");

    document.getElementById("emailUserRe").value = "";
    document.getElementById("pwdUserReg").value = "";
    document.getElementById("pwd2UserReg").value = "";
  } else {
    alert(email + " is already register.");
    return;
  }
}


*/
