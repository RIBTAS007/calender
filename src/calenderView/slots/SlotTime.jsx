import React, { useEffect, useState } from "react";
import styles from "./slotTime.module.css";
import SlotItems from "./SlotItems";
import useGetSlots from "../../utils/useGetSlots";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSlotTime } from "../../utils/calenderSlice";

const SlotTime = () => {
  const dispatch = useDispatch();
  const date = useSelector((store) => store.calender.date);
  const slotVariant = useSelector((store) => store.calender.slotVariant);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [filteredSlotTimes, setFilteredSlotTimes] = useState(null);
  const [slotDate, setSlotDate] = useState("");
  const slotsData = useGetSlots();

  useEffect(() => {
    setSelectedSlot(null);
  }, [slotVariant, date]);

  const filterSlotsByDuration = (slots, variant) =>
    slots.filter((slot) => {
      const start = new Date(slot.start_time);
      const end = new Date(slot.end_time);
      const duration = (end - start) / (1000 * 60);
      return duration === parseInt(variant) || variant === "";
    });

  const formatDate = (dateStr) => {
    const options = { weekday: "long", month: "long", day: "numeric" };
    const inputDate = new Date(dateStr);
    return inputDate.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    if (slotsData && slotsData.length > 0) {
      const selectedSlots = filterSlotsByDuration(
        slotsData[0]?.slots,
        slotVariant
      );

      setFilteredSlotTimes(selectedSlots);
      setSlotDate(formatDate(slotsData[0]?.date));
    }
  }, [slotsData, slotVariant]);

  const handleSlotSelect = (index) => {
    setSelectedSlot(index === selectedSlot ? null : index);
  };

  useEffect(() => {
    if (
      selectedSlot !== null &&
      filteredSlotTimes &&
      filteredSlotTimes.length > 0
    ) {
      const selectedSlotData = filteredSlotTimes[selectedSlot];
      dispatch(setSelectedSlotTime(selectedSlotData));
    }
  }, [selectedSlot, filteredSlotTimes, dispatch]);

  return (
    <div>
      <div>
        <span
          className={styles.slotHead}
        >{`${slotDate} - AVAILABLE SLOTS`}</span>
      </div>
      <div className={styles.slots}>
        {filteredSlotTimes?.length > 0 ? (
          filteredSlotTimes.map((slot, index) => (
            <SlotItems
              key={index}
              slot={slot}
              index={index}
              selected={index === selectedSlot}
              handleSlotSelect={handleSlotSelect}
            />
          ))
        ) : (
          <p className={styles.noSlots}>NO SLOTS AVAILABLE</p>
        )}
      </div>
    </div>
  );
};

export default SlotTime;
