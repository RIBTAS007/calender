import React from "react";
import Calender from "./calender/Calender";
import Slots from "./slots/Slots";
import Footer from "./Footer";
import styles from "./Main.module.css";
import { useSelector } from "react-redux";
import BookingDetails from "./BookingDetails";

const Main = () => {
  const visible = useSelector((store) => store.calender.visible);
  return (
    <div className={styles.main}>
      <div className={styles.body}>
        {!visible && (
          <>
            <Calender />
            <Slots />
          </>
        )}
        {visible && <BookingDetails />}
      </div>
      <Footer />
    </div>
  );
};

export default Main;
