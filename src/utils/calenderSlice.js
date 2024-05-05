import { createSlice } from "@reduxjs/toolkit";

const calenderSlice = createSlice({
  name: "calender",
  initialState: {
    date: null,
    slots: [],
    slotVariant: "",
    selectedSlotTime: {},
    visible: false,
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
    setVisible: (state) => {
      state.visible = !state.visible;
    },
  },
});

export const {
  setDate,
  setSlots,
  setSlotVariant,
  setSelectedSlotTime,
  setVisible,
} = calenderSlice.actions;
export default calenderSlice.reducer;
