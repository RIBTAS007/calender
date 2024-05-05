import React from "react";
import { useSelector } from "react-redux";
import useGetISTTime from "../utils/useGetISTTime";
import styles from "./BookingDetails.module.css";

const BookingDetails = () => {
  const date = useSelector((store) => store.calender.date);
  const selectedSlotTime = useSelector(
    (store) => store.calender.selectedSlotTime
  );
  const startTime = useGetISTTime(selectedSlotTime?.start_time);
  const endTime = useGetISTTime(selectedSlotTime?.end_time);

  return (
    <div className={styles.bookingDetailsContainer}>
      <div className={styles.bookingDetailsTitle}>Slot Booking Details</div>
      <div className={styles.bookingDetailsInfo}>
        <span className={styles.bookingDetailsLabel}>Date:</span>
        <span className={styles.bookingDetailsData}>{date}</span>
        <span className={styles.bookingDetailsLabel}>Start Time:</span>
        <span className={styles.bookingDetailsData}>{startTime}</span>
        <span className={styles.bookingDetailsLabel}>End Time:</span>
        <span className={styles.bookingDetailsData}>{endTime}</span>
      </div>
    </div>
  );
};

export default BookingDetails;
