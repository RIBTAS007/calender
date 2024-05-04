import React from "react";
import logo from "../images/logo.png";
import styles from "./Navbar.module.css";
import { BiChevronDown } from "react-icons/bi";
import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <img src={logo} alt="company logo" className="logoImage" />
      </div>
      <div>
        <ul className={styles.navList}>
          <li className={styles.navItems}>
            <div>
              <span>Menu</span>
              <BiChevronDown />
            </div>
          </li>
          <li className={styles.navItems}>
            <div>
              <span>Contact Us</span>
            </div>
          </li>
          <li className={styles.navItems}>
            <NavButton />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
