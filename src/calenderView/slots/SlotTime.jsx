import React from "react";
import styles from "./slotTime.module.css";

const slotsData = [
  {
    start_time: "2024-01-20T09:00:00.000+00:00",
    end_time: "2024-01-20T10:00:00.000+00:00",
  },
  {
    start_time: "2024-01-20T10:00:00.000+00:00",
    end_time: "2024-01-20T11:00:00.000+00:00",
  },
  {
    start_time: "2024-01-20T10:00:00.000+00:00",
    end_time: "2024-01-20T11:00:00.000+00:00",
  },
  {
    start_time: "2024-01-20T10:00:00.000+00:00",
    end_time: "2024-01-20T11:00:00.000+00:00",
  },
];

const SlotTime = () => {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
  };
  return (
    <div>
      <div>
        <span className={styles.slotHead}>
          THURSDAY, DEC 2 - AVAILABLE SLOTS
        </span>
      </div>
      <div className={styles.slots}>
        {slotsData.map((slot, index) => (
          <button key={index} className={styles.slotItem}>
            {formatTime(slot.start_time)} - {formatTime(slot.end_time)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SlotTime;
