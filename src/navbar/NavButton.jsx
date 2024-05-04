import React from "react";
import { FiExternalLink } from "react-icons/fi";
import styles from "./Navbar.module.css";

const NavButton = () => {
  return (
    <button className={styles.navBtn}>
      <FiExternalLink className={styles.navBtnIcon} />
      <span className={styles.navBtnText}>Share Link</span>
    </button>
  );
};

export default NavButton;
