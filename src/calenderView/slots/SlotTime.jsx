import React, { useState } from "react";
import styles from "./slotTime.module.css";
import SlotItems from "./SlotItems";

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
  const [selectedSlot, setSelectedSlot] = useState(null); // Change to null initially

  const handleSlotSelect = (index) => {
    setSelectedSlot(index === selectedSlot ? null : index); // Toggle selection
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
          <SlotItems
            key={index} // Add key prop for each item in the list
            slot={slot}
            index={index}
            selected={index === selectedSlot}
            handleSlotSelect={handleSlotSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default SlotTime;
