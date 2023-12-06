import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { emptyMeme } from "orsys-tjs-meme";
import { REST_ARD } from "../config/config";
const initialState = emptyMeme;

const current = createSlice({
  name: "current",
  initialState,
  reducers: {
    updateCurrent(state, action) {
      Object.assign(state, action.payload);
    },
  },
  extraReducers: (builder) => {},
});

export const { updateCurrent } = current.actions;
const currentReducer = current.reducer;
export default currentReducer;
export const saveMeme = createAsyncThunk("current/saveMeme", async (meme) => {
  const pr = await fetch(
    `${REST_ARD}/memes${meme.id !== undefined ? "/" + meme.id : ""}`,
    {
      method: meme.id !== undefined ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
    }
  );
  return await pr.json();
});
