import React from "react";
import SlotVariant from "./SlotVariant";
import SlotTime from "./SlotTime";
import styles from "./Slots.module.css";

const Slots = () => {
  return (
    <div className={styles.slots}>
      <SlotVariant />
      <SlotTime />
    </div>
  );
};

export default Slots;
