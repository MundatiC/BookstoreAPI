import React from "react";
import "../sign.css";
import { useNavigate } from "react-router-dom";

const SignIn = ({ toggleSignIn }) => {
  const navigate = useNavigate();
  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div className="sign-up-form">
      <h1>Sign In</h1>
      <input type="email" placeholder="Email" className="input-box" />
      <input type="password" placeholder="Password" className="input-box" />
      <a href="#" className="forgot-password">
        Forgot your password?
      </a>
      <button className="sign-btn">Sign In</button>
      <p>
        Don't have an account?{" "}
        <a href="#" onClick={handleSignUpClick}>
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default SignIn;
