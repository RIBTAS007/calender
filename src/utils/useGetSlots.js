import { useEffect, useMemo } from "react";
import moment from "moment-timezone";
import { useDispatch, useSelector } from "react-redux";
import { setSlots } from "./calenderSlice";

const useGetSlots = () => {
  const dispatch = useDispatch();
  const startDate = useSelector((store) => store.calender.date);
  const slots = useSelector((store) => store.calender.slots);

  const endDate = useMemo(() => {
    const nextDayDate = new Date(startDate);
    return moment(nextDayDate.setDate(nextDayDate.getDate() + 1))
      .tz("Asia/Kolkata")
      .format("YYYY-MM-DD");
  }, [startDate]);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://app.appointo.me/scripttag/mock_timeslots?start_date=${startDate}&end_date=${endDate}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const json = await response.json();
        if (isMounted) {
          dispatch(setSlots(json));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        if (isMounted) {
          dispatch(setSlots([]));
        }
      }
    };

    if (isValidDate(startDate)) {
      fetchData();
    } else {
      console.log("Invalid date format!", startDate);
      dispatch(setSlots([]));
    }

    return () => {
      isMounted = false;
    };
  }, [startDate, endDate, dispatch]);

  const isValidDate = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
  };

  return slots;
};

export default useGetSlots;
