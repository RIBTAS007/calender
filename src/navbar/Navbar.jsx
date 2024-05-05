import React, { useState } from "react";
import { BiChevronDown, BiMenu } from "react-icons/bi";
import logo from "../images/logo.png";
import styles from "./Navbar.module.css";
import NavButton from "./NavButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log("event triggered");
  };

  return (
    <nav className={styles.navbar}>
      <div>
        <img src={logo} alt="Company Logo" className={styles.logoImage} />
      </div>

      <div className={styles.menu}>
        <BiMenu className={styles.menuIcon} onClick={toggleMenu} />
      </div>

      <div className={`${styles.navList} ${menuOpen && styles.open}`}>
        <ul>
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
    </nav>
  );
};

export default Navbar;
