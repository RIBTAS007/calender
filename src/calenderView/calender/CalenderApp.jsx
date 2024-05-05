import React, { useEffect } from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import styles from "./CalenderApp.module.css";
import { useDispatch } from "react-redux";
import {
  setDate,
  setSelectedSlotTime,
  setSlotVariant,
} from "../../utils/calenderSlice";
import moment from "moment-timezone";

const CalenderApp = () => {
  const [value, onChange] = useState(new Date());
  const dispatch = useDispatch();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  useEffect(() => {
    const date = moment(value).tz("Asia/Kolkata").format("YYYY-MM-DD");
    dispatch(setDate(date));
    dispatch(setSlotVariant(""));
    dispatch(setSelectedSlotTime({}));
  }, [value]);
  return (
    <div className={styles.cal}>
      <div className={styles.calContainer}>
        <main className={styles.calContainerCcontent}>
          <Calendar
            onChange={onChange}
            showWeekNumbers={false}
            value={value}
            minDate={today}
          />
        </main>
      </div>
    </div>
  );
};

export default CalenderApp;
