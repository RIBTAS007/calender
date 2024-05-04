import React from "react";
import CalenderHead from "./CalenderHead";
import CalenderBody from "./CalenderBody";
import styles from "./Calender.module.css";

const Calender = () => {
  return (
    <div className={styles.calender}>
      <CalenderHead />
      <CalenderBody />
    </div>
  );
};

export default Calender;
