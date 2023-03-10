import { createSlice } from "@reduxjs/toolkit";

const hotelSlide = createSlice({
  name: "hotel",
  initialState: {
    hotels: [],
    top3: [],
  },
  reducers: {
    onLoad(state, action) {
      state.hotels = action.payload.hotels;
      state.top3 = action.payload.top3;
    },
    // top3(state, action) {
    //   state.top3 = action.payload;
    // },
  },
});
export const hotelActions = hotelSlide.actions;
export default hotelSlide.reducer;
