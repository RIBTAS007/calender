import React from "react";
import styles from "./CalenderHead.module.css";

const CalenderHead = () => {
  return (
    <div>
      <span className={styles.header}>Test Service</span>
      <div>
        <span className={styles.subheader1}>TimeZone:</span>
        <span className={styles.subheader2}>Asia/Calcutta</span>
      </div>
    </div>
  );
};

export default CalenderHead;
