import { useEffect } from "react";
import moment from "moment-timezone";
import { useDispatch, useSelector } from "react-redux";
import { setSlots } from "./calenderSlice";

const useGetSlots = () => {
  const dispatch = useDispatch();
  const startDate = useSelector((store) => store.calender.date);
  const slots = useSelector((store) => store.calender.slots);
  const nextDayDate = new Date(startDate);
  const endDate = moment(nextDayDate.setDate(nextDayDate.getDate() + 1))
    .tz("Asia/Kolkata")
    .format("YYYY-MM-DD");

  useEffect(() => {
    if (isValidDate(startDate)) {
      fetchData();
    } else {
      console.log("Invalid date format!", startDate);
      dispatch(setSlots([]));
    }
  }, [startDate]);

  const isValidDate = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://app.appointo.me/scripttag/mock_timeslots?start_date=${startDate}&end_date=${endDate}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      console.log("data fetched successfully");
      const json = await response.json();
      dispatch(setSlots(json)); // Dispatch fetched slots data
    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch(setSlots([])); // Dispatch empty array on error
    }
  };
  return slots;
};

export default useGetSlots;
