import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getCartSummary } from "../features/cartSlice";
import productsReducer from "../features/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

store.dispatch(getCartSummary());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
