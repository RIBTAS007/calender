import React from "react";
import Calender from "./calender/Calender";
import Slots from "./slots/Slots";
import Footer from "./Footer";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.body}>
        <Calender />
        <Slots />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
