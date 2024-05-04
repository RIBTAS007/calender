import React from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="company logo" />
      </div>
      <div>
        <ul>
          <li>Menu</li>
          <li>Contact Us</li>
          <li>Share Link</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
