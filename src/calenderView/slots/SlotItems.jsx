import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./slotTime.module.css";

const SlotItems = ({ slot, index, selected, handleSlotSelect }) => {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
  };

  const handleClick = () => {
    handleSlotSelect(index);
  };

  return (
    <button
      className={`${styles.slotItem} ${selected ? styles.selected : ""}`}
      onClick={handleClick}
    >
      {formatTime(slot.start_time)} - {formatTime(slot.end_time)}
      {selected && <FaCheckCircle className={styles.checkIcon} />}
    </button>
  );
};

export default SlotItems;
