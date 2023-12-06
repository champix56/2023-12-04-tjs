import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { REST_ARD } from "../config/config";

const initialState = {
  images: [],
  memes: [],
};

const ressources = createSlice({
  name: "ressources",
  initialState,
  reducers: {
    addImages: (state, action) => {
      state.images.push(...action.payload);
    },
  },
});

export const { addImages } = ressources.actions;
const ressourcesReducer = ressources.reducer;
export default ressourcesReducer;
export const fetchImages = createAsyncThunk(
  "ressources/fetchImages",
  async () => {
    const pri = await fetch(`${REST_ARD}/images`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "API-TOKEN": "sdfghjklkjhgfd",
      },
    });
    const prm = await fetch(`${REST_ARD}/memes`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const pral = await Promise.all([pri, prm]);
    return { images: await pral[0].json(), memes: await pral[1].json() };
  }
);
/*
const ressourcesReducer= (state = initialState, { type, payload }) => {
  switch (type) {
  case 'ressources/addImages':
    return { ...state,images:[...state.images,...action.payload]  }

  default:
    return state
  }
}

export default ressourcesReducer;

function addImages(images){return {type:'ressources/addImages', payload:images}}
*/
