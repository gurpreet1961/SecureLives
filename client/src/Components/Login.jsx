import React, { useState } from "react";
import "./Login.css";
import loginsvg from "../Images/login.svg";
import signupsvg from "../Images/register.svg";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
const Login = (pros) => {
  let state = pros.state;
  if (pros.state === undefined) {
    state = "sign-in-mode";
  }
  const [loginOrSignup, setloginOrSignup] = useState(state);
  let loginClick = () => {
    setloginOrSignup("sign-in-mode");
  };
  let signUpClick = () => {
    setloginOrSignup("sign-up-mode");
  };
  return (
    <>
      <div className={`container ${loginOrSignup}`} id="container">
        <div className="forms-container">
          <div className="signin-signup">
            <LoginForm />
            <SignupForm />
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>Click Sign up Button to Register Your self!</p>
              <button
                className="btn transparent"
                onClick={signUpClick}
                id="sign-up-btn"
              >
                Sign up
              </button>
            </div>
            <img src={loginsvg} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Already Have Account?</h3>
              <p>Click Sign In button to Login</p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={loginClick}
              >
                Sign in
              </button>
            </div>
            <img src={signupsvg} className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
