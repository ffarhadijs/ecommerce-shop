import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishListItems: [],
};

export const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    AddToList: (state, action) => {
      const index = state.wishListItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        state.wishListItems.push({
          ...action.payload,
        });
      } else {
        state.wishListItems.pop({
          ...action.payload,
        });
      }
    },
    Remove:(state,action)=>{
        state.wishListItems=state.wishListItems.filter(item=>item.id!==action.payload.id)
    }
  },
});

export const { AddToList, Remove } = wishSlice.actions;

export default wishSlice.reducer;
