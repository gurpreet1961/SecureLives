import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { config } from "../App";

function SignupForm() {
	const url = config.endpoint;

	const history = useHistory();
	const [user, setUser] = useState({
		name: "",
		email: "",
		work: "",
		phone: "",
		password: "",
		cpassword: "",
	});
	let name, value;
	const handleInputs = (e) => {
		name = e.target.name;
		value = e.target.value;

		setUser({ ...user, [name]: value });
	};
	const PostData = async (e) => {
		e.preventDefault();
		const { name, email, work, phone, password, cpassword } = user;
		const res = await fetch(`${url}/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
				email,
				work,
				phone,
				password,
				cpassword,
			}),
		});
		const data = await res.json();
		if (res.status !== 202 || !data) {
			window.alert("Invalid Registration");
		} else {
			window.alert("Successfull Registration");
			setUser({
				name: "",
				email: "",
				work: "",
				phone: "",
				password: "",
				cpassword: "",
			});
			history.push("/login");
		}
	};
	return (
		<>
			<form method="POST" className="sign-up-form loginform">
				<h2 className="title">Sign up</h2>
				<div className="input-field">
					<i className="fas fa-user"></i>
					<input
						name="name"
						type="text"
						value={user.name}
						onChange={handleInputs}
						placeholder="Your Name"
						autoComplete="off"
						required
					/>
				</div>

				<div className="input-field">
					<i className="fas fa-envelope"></i>
					<input
						name="email"
						type="email"
						value={user.email}
						onChange={handleInputs}
						placeholder="Email"
						autoComplete="off"
						required
					/>
				</div>
				<div className="input-field">
					<i className="fas fa-envelope"></i>
					<input
						name="work"
						type="text"
						value={user.work}
						onChange={handleInputs}
						placeholder="Profession"
						autoComplete="off"
						required
					/>
				</div>
				<div className="input-field">
					<i className="fas fa-phone"></i>
					<input
						name="phone"
						type="number"
						value={user.phone}
						onChange={handleInputs}
						autoComplete="off"
						placeholder="Phone Number"
						required
					/>
				</div>
				<div className="input-field">
					<i className="fas fa-lock"></i>
					<input
						name="password"
						type="password"
						value={user.password}
						onChange={handleInputs}
						placeholder="Password"
						autoComplete="off"
						required
					/>
				</div>
				<div className="input-field">
					<i className="fas fa-lock"></i>
					<input
						name="cpassword"
						type="password"
						value={user.cpassword}
						onChange={handleInputs}
						placeholder="Confirm Password"
						autoComplete="off"
						required
					/>
				</div>
				<input
					type="submit"
					className="btn"
					name="signup"
					onClick={PostData}
					autoComplete="off"
					value="Sign up"
				/>
				{/* <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <NavLink to="/" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </NavLink>
                <NavLink to="/" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </NavLink>
                <NavLink to="/" className="social-icon">
                  <i className="fab fa-google"></i>
                </NavLink>
                <NavLink to="/" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </NavLink>
              </div> */}
			</form>
		</>
	);
}

export default SignupForm;
