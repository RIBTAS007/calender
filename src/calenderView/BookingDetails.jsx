import React from "react";
import { useSelector } from "react-redux";

const BookingDetails = () => {
  const date = useSelector((store) => store.calender.date);
  const selectedSlotTime = useSelector(
    (store) => store.calender.selectedSlotTime
  );
  return (
    <div>
      <span>{date}</span>
      <span>{selectedSlotTime.start_time}</span>
      <span>{selectedSlotTime.end_time}</span>
    </div>
  );
};

export default BookingDetails;
