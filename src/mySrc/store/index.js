import { configureStore } from "@reduxjs/toolkit";
import loginSlide from "./login-action";
import hotelSlide from "./hotel-action";
const store = configureStore({
  reducer: {
    login: loginSlide,
    hotel: hotelSlide,
  },
});
export default store;
