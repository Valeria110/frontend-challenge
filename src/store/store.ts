import { configureStore } from "@reduxjs/toolkit";
import favsReducer from "../features/favs.slice";

export const store = configureStore({
  reducer: {
    favs: favsReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
