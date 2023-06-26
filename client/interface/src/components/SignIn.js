import React, { useState } from "react";
import "../sign.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BiArrowBack } from "react-icons/bi";

const SignIn = ({ toggleSignIn }) => {
  const navigate = useNavigate();
  const handleSignUpClick = () => {
    navigate("/signup");
  };
  const backHome = () => {
    navigate("/");
  };

  // useState to get the values of the input boxes
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      Email,
      Password,
    };
    console.log(loginData);

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        loginData
      );

      // Handle successful login response here
      console.log(response.data);
      navigate("/");
    } catch (error) {
      if (error.response) {
        console.error("Server Error:", error.response.data);
      } else if (error.request) {
        console.error("No response from server:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <div>
      <div className="backhome" onClick={backHome}>
        <BiArrowBack />
      </div>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          className="input-box"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-box"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
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
      </form>
    </div>
  );
};

export default SignIn;
