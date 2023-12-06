import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ressourcesReducer, { addImages } from "./ressources";
import currentReducer from "./current";

export const store = configureStore({
  reducer: combineReducers({
    ressources: ressourcesReducer,
    current: currentReducer,
  }),
});

store.subscribe(() => {
  console.trace(store.getState());
});
store.dispatch({
  type: "ressources/addImages",
  payload: [{ id: 0 }, { id: 1 }],
});
const addImageAction = addImages([{ id: 3 }, { id: 4 }]);
console.log(addImageAction);
store.dispatch(addImageAction);
store.dispatch(addImages([{ id: 5 }, { id: 6 }]));
