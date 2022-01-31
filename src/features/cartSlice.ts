import { ICartItem, IProduct } from "../models/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

interface CartState {
  items: ICartItem[];
  cartTotalQty: number;
  cartTotalAmount: number;
  cartItems: number;
}

const initialState: CartState = {
  items: [],
  cartTotalQty: 0,
  cartTotalAmount: 0,
  cartItems: 0,
};

interface UpdateItemQtyPayload {
  type: string;
  id: number;
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const item = state.items.find(
        (x) => x.productid === action.payload.productid
      );

      if (item) {
        state.items.map((x) => {
          if (x.productid === action.payload.productid) {
            x.quantity++;
            x.totalPrice = x.quantity * x.price;
          }
        });
        toast.info(`Product quantity increased to ${item.quantity}`, {
          position: "bottom-right",
          autoClose: 1000,
        });
      } else {
        state.items.push({
          ...action.payload,
          itemid: uuid(),
          quantity: 1,
          totalPrice: action.payload.price * 1,
        });
        state.cartItems++;
        toast.success("Product added to cart", {
          position: "bottom-right",
          autoClose: 1000,
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload, 1);
      state.cartItems--;
      toast.error("Product removed from cart", {
        position: "bottom-right",
        autoClose: 1000,
      });
    },
    updateItemQty: (state, action: PayloadAction<UpdateItemQtyPayload>) => {
      state.items.forEach((item) => {
        if (item.productid === action.payload.id) {
          if (item.quantity === 0 && action.payload.type === "REMOVE") return;

          action.payload.type === "ADD" ? item.quantity++ : item.quantity--;
          item.totalPrice = item.quantity * item.price;
        }
      });
    },
    getCartSummary: (state) => {
      let { total, quantity } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalAmount = total;
      state.cartTotalQty = quantity;
    },
  },
});

export const { addToCart, removeFromCart, updateItemQty, getCartSummary } =
  cartSlice.actions;

export default cartSlice.reducer;
