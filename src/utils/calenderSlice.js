import { createSlice } from "@reduxjs/toolkit";

const calenderSlice = createSlice({
  name: "calender",
  initialState: {
    date: null,
    slots: [],
    slotVariant: "",
    selectedSlotTime: [],
  },
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setSlots: (state, action) => {
      state.slots = action.payload;
    },
    setSlotVariant: (state, action) => {
      state.slotVariant = action.payload;
    },
    setSelectedSlotTime: (state, action) => {
      state.selectedSlotTime = action.payload;
    },
  },
});

export const { setDate, setSlots, setSlotVariant, setSelectedSlotTime } =
  calenderSlice.actions;
export default calenderSlice.reducer;
