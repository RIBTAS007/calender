import React, { useEffect, useState } from "react";
import styles from "./SlotVariant.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSlotTime, setSlotVariant } from "../../utils/calenderSlice";

const SlotVariant = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("");
  const slotDur = useSelector((store) => store.calender.slotVariant);

  const handleSelectChange = (event) => {
    dispatch(setSlotVariant(event.target.value));
    dispatch(setSelectedSlotTime([]));
  };

  useEffect(() => {
    setSelectedOption(slotDur);
  }, [slotDur]);

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
          <option value="">Select</option>
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
