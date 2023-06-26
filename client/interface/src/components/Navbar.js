import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../navbar.css";
import logo from "../images/logo.png";

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
          <a href="/#">Home</a>
          <a href="/#">About</a>
          <a href="/#">Available Books</a>
          <a href="/#">Contact Us</a>

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
