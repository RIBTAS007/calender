import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./slotTime.module.css";
import useGetISTTime from "../../utils/useGetISTTime";

const SlotItems = ({ slot, index, selected, handleSlotSelect }) => {
  const handleClick = () => {
    handleSlotSelect(index);
  };

  return (
    <button
      className={`${styles.slotItem} ${selected ? styles.selected : ""}`}
      onClick={handleClick}
    >
      {useGetISTTime(slot.start_time)} - {useGetISTTime(slot.end_time)}
      {selected && <FaCheckCircle className={styles.checkIcon} />}
    </button>
  );
};

export default SlotItems;
