import { createSlice } from "@reduxjs/toolkit";
import { emptyMeme } from "orsys-tjs-meme";

const initialState = emptyMeme;

const current = createSlice({
  name: "current",
  initialState,
  reducers: {
    updateCurrent(state, action) {
      Object.assign(state, action.payload);
    },
  },
});

export const { updateCurrent } = current.actions;
const currentReducer = current.reducer;
export default currentReducer;
