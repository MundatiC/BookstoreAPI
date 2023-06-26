import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = ({ toggleSignIn }) => {
  const navigate = useNavigate();
  const handleSignInClick = () => {
    navigate("/signin");
  };

  return (
    <div className="sign-up-form">
      <h1>Create Account</h1>
      <input type="text" placeholder="Name" className="input-box" />
      <input type="email" placeholder="Email" className="input-box" />
      <input type="text" placeholder="Phone Number" className="input-box" />
      <input type="text" placeholder="Address" className="input-box" />
      <input type="password" placeholder="Password" className="input-box" />
      <input
        type="password"
        placeholder=" Confirm Password"
        className="input-box"
      />

      <button className="sign-btn">Sign Up</button>
      <p>
        Already have an account?{" "}
        <a href="#" onClick={handleSignInClick}>
          Sign In
        </a>
      </p>
    </div>
  );
};

export default SignUp;
