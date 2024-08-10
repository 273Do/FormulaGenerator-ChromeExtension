import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    value: "Generate",
  },
  reducers: {
    updatePage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updatePage } = pageSlice.actions;
export default pageSlice.reducer;
