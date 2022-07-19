import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: "",
  totalAmount: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        state.cartItems.push({
          ...action.payload,
          itemQuantity: 1,
          itemTotalPrice: action.payload.price,
        });
      }
      state.totalQuantity = state.cartItems.reduce(
        (total, item) => total + Number(item.itemQuantity),
        0
      );
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.itemQuantity) * Number(item.price),
        0
      );
    },
    Increase: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.cartItems[index].itemQuantity++;
        state.cartItems[index].itemTotalPrice =
          state.cartItems[index].price * state.cartItems[index].itemQuantity;
      }
      state.totalQuantity = state.cartItems.reduce(
        (total, item) => total + Number(item.itemQuantity),
        0
      );
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.itemQuantity) * Number(item.price),
        0
      );
    },
    Decrease: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.cartItems[index].itemQuantity--;
        state.cartItems[index].itemTotalPrice =
          state.cartItems[index].price * state.cartItems[index].itemQuantity;
      }
      state.totalQuantity = state.cartItems.reduce(
        (total, item) => total + Number(item.itemQuantity),
        0
      );
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.itemQuantity) * Number(item.price),
        0
      );
    },
    Remove: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.totalQuantity = state.cartItems.reduce(
        (total, item) => total + Number(item.itemQuantity),
        0
      );
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.itemQuantity) * Number(item.price),
        0
      );
    },
  },
});

export const { AddToCart, Increase, Decrease, Remove } = cartSlice.actions;

export default cartSlice.reducer;
