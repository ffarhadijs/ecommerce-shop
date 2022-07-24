import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import wishReducer from "../features/wishList/wishSlice"
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wish: wishReducer
  },
});
