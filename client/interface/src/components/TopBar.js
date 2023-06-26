import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import "../navbar.css";
import logo from "../images/logo.png";

function TopBar() {
  return (
    <div className="top">
      <img src={logo} alt="logo" />
      <div className="search-login">
        <span class="centering">
          <span class="box">
            <input class="search" placeholder=" " spellcheck="false" />
          </span>
        </span>
        <button>
          <BiSolidUserCircle />
        </button>
      </div>
    </div>
  );
}

export default TopBar;
