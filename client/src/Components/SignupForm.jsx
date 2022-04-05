import React from "react";

function SignupForm() {
  return (
    <>
      <form action="/" className="sign-up-form loginform">
        <h2 className="title">Sign up</h2>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-field">
          <i className="fas fa-envelope"></i>
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-field">
          <i className="fas fa-envelope"></i>
          <input type="text" placeholder="Profession" />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password" />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Confirm Password" />
        </div>
        <input type="submit" className="btn" value="Sign up" />
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
