import { createSlice } from "@reduxjs/toolkit";

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