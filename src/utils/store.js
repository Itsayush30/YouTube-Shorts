import { configureStore } from "@reduxjs/toolkit";
import likeSlice from "./likeSlice";

const store = configureStore({
  reducer: {
    like: likeSlice,
  },
});

export default store;
