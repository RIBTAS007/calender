import React, { useCallback } from "react";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./slotItems.module.css";
import useGetISTTime from "../../utils/useGetISTTime";

const SlotItems = ({ slot, index, selected, handleSlotSelect }) => {
  const startTime = useGetISTTime(slot.start_time);
  const endTime = useGetISTTime(slot.end_time);

  const handleClick = useCallback(() => {
    handleSlotSelect(index);
  }, [handleSlotSelect, index]);

  return (
    <button
      className={`${styles.slotItem} ${selected ? styles.selected : ""}`}
      onClick={handleClick}
    >
      {startTime} - {endTime}
      {selected && <FaCheckCircle className={styles.checkIcon} />}
    </button>
  );
};

export default SlotItems;
