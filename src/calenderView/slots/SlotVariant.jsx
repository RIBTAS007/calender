import React, { useState } from "react";
import styles from "./SlotVariant.module.css";

const SlotVariant = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <div className={styles.variantLabel}>
        <label htmlFor="selectedVariant">SELECT FROM VARIANTS</label>
      </div>
      <div className={styles.selectContainer}>
        <select
          id="selectedVariant"
          value={selectedOption}
          onChange={handleSelectChange}
          className={styles.selectVariant}
        >
          <option value="30">30 min</option>
          <option value="45">45 min</option>
          <option value="60">60 min</option>
        </select>
      </div>
      <hr className={styles.hr} />
    </div>
  );
};

export default SlotVariant;
