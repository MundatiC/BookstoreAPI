import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSignInClick = () => {
    navigate("/signin");
  };
  const backHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="backhome" onClick={backHome}>
        <i class="fa-regular fa-backward-step"></i>
        <span>Back Home</span>
      </div>
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
    </div>
  );
};

export default SignUp;
