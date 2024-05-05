import React from "react";
import Main from "../calenderView/Main";
import styles from "./Body.module.css";
import pattern1 from "../images/pattern1.png";
import pattern2 from "../images/pattern2.png";

const Body = () => {
  return (
    <>
      <div className={styles.body}>
        <Main />
        <img src={pattern1} alt="pattern1" className={styles.pattern1} />
        <img src={pattern2} alt="pattern2" className={styles.pattern2} />
      </div>
      <div className={styles.space}></div>
    </>
  );
};

export default Body;
