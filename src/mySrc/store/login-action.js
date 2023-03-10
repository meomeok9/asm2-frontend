import { createSlice } from "@reduxjs/toolkit";
const loginSlide = createSlice({
  name: "login",
  initialState: {
    userName: "",
    email: "",
    phone: "",
    id: "",
    isLogin: false,
  },
  reducers: {
    onLogin(state, action) {
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.id = action.payload.id;
      state.isLogin = true;
    },
    onLogOut(state) {
      state.userName = "";
      state.id = "";
      state.isLogin = false;
    },
  },
});
export const loginActions = loginSlide.actions;
export default loginSlide.reducer;
