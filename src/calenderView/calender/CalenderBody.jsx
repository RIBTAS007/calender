import React, { useEffect } from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "./CalenderBody.css";
import { useDispatch } from "react-redux";
import moment from "moment-timezone";
import {
  setDate,
  setSelectedSlotTime,
  setSlotVariant,
} from "../../utils/calenderSlice";

const CalenderBody = () => {
  const [value, onChange] = useState(new Date());
  const dispatch = useDispatch();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  useEffect(() => {
    try {
      const formattedDate = moment(value)
        .tz("Asia/Kolkata")
        .format("YYYY-MM-DD");
      dispatch(setDate(formattedDate));
      dispatch(setSlotVariant(""));
      dispatch(setSelectedSlotTime({}));
    } catch (error) {
      console.error(
        "Error formatting date or dispatching Redux actions:",
        error
      );
    }
  }, [value]);

  return (
    <div className="cal">
      <div className="calContainer">
        <main className="calContainerCcontent">
          <Calendar
            onChange={onChange}
            showWeekNumbers={false}
            value={value}
            minDate={today}
          />
        </main>
      </div>
    </div>
  );
};

export default CalenderBody;
