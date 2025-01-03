import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import ApiSlice from "../Slices/ApiSlice";


const store = configureStore({
  reducer: {
    cart: ApiSlice,
  },
});
// Action creators generated for each case reducer function

export default store;
