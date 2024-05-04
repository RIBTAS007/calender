import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import styles from "./CalenderApp.module.css";

const CalenderApp = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className={styles.cal}>
      <div className={styles.calContainer}>
        <main className={styles.calContainerCcontent}>
          <Calendar onChange={onChange} showWeekNumbers={false} value={value} />
        </main>
      </div>
    </div>
  );
};

export default CalenderApp;
