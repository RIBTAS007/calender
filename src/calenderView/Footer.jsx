import React from "react";
import styles from "./Footer.module.css";
import { BiChevronRight } from "react-icons/bi";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <span className={styles.footerText}>
          POWERED BY <a href="https://apps.shopify.com/">APPOINTO</a>
        </span>
      </div>
      <div>
        <button className={styles.footerButton}>
          <span className={styles.footerButtonText}>Next</span>
          <BiChevronRight className={styles.footerButtonIcon} />
        </button>
      </div>
    </div>
  );
};

export default Footer;
