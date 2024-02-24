import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { config } from "../App";

function LoginForm() {
	const url = config.endpoint;

	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const loginUser = async (e) => {
		e.preventDefault();
		const res = await fetch(`${url}/signin`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});
		const data = await res.json();
		if (res.status !== 200 || !data) {
			window.alert("Invalid");
		} else {
			window.alert("success");
			history.push("/");
		}
	};
	return (
		<>
			<form method="POST" className="sign-in-form loginform">
				<h2 className="title">Sign in</h2>
				<div className="input-field">
					<i className="fas fa-user"></i>
					<input
						type="text"
						name="name"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						value={email}
						autoComplete="off"
						placeholder="Email"
					/>
				</div>
				<div className="input-field">
					<i className="fas fa-lock"></i>
					<input
						type="password"
						name="password"
						placeholder="Password"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						autoComplete="off"
						value={password}
					/>
				</div>
				<input
					type="submit"
					value="Login"
					className="btn solid"
					autoComplete="off"
					onClick={loginUser}
				/>
				{/* <p className="social-text">Or Sign in with social platforms</p>
        <div className="social-media">
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div> */}
			</form>
		</>
	);
}

export default LoginForm;
