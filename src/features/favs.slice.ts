import { ICat } from "@/types/cat.entity";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  favs: Record<string, ICat>;
}

const initialState: InitialState = {
  favs: {},
};

const favsSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    addFavCat: (state, action: PayloadAction<ICat>) => {
      state.favs[action.payload.id] = action.payload;
    },
    removeFavCat: (state, action: PayloadAction<string>) => {
      delete state.favs[action.payload];
    },
  },
});

export default favsSlice.reducer;
export const { addFavCat, removeFavCat } = favsSlice.actions;
