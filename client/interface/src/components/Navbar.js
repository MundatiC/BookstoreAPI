import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../navbar.css";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const shownavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  //we will toggle the responsive_nav once class is invoked.

  return (
    <div>
      <header>
        <nav ref={navRef}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/availablebooks">Available Books</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contactus">Contact Us</NavLink>
          {/* //smaller screens will close the navbar with this */}
          <button className="nav-btn nav-close-btn" onClick={shownavbar}>
            <FaTimes />
          </button>
        </nav>

        {/* //smaller screens will open the navigation bar with this */}

        {/* will be the default one on smaller screens */}
        <button className="nav-btn" onClick={shownavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar;
