import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BiArrowBack } from "react-icons/bi";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSignInClick = () => {
    navigate("/signin");
  };
  const backHome = () => {
    navigate("/");
  };
  // usestates to get the values of the input boxes
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [ContactNumber, setContactNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [c_password, setc_password] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Password !== c_password) {
      alert("Password and confirm Password do not match");
      return;
    }
    const registrationData = {
      Name,
      Address,
      ContactNumber,
      Email,
      Password,
      c_password,
    };
    console.log(registrationData);
    try {
      const response = await axios.post(
        "http://localhost:4040/register",
        registrationData
      );
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
        <h1>Create Account</h1>
        <input
          type="text"
          placeholder="Name"
          className="input-box"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="input-box"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="input-box"
          value={ContactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          className="input-box"
          value={Address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-box"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder=" Confirm Password"
          className="input-box"
          value={c_password}
          onChange={(e) => setc_password(e.target.value)}
        />

        <button className="sign-btn">Sign Up</button>
        <p>
          Already have an account?{" "}
          <a href="#" onClick={handleSignInClick}>
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
