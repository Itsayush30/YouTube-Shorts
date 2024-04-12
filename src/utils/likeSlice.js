import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
  name: "like",
  initialState: {
    isLike: false,
  },
  reducers: {
    toggleLike: (state) => {
      state.isLike = !state.isLike;
    },
  },
});

export const { toggleLike } = likeSlice.actions;
export default likeSlice.reducer;
